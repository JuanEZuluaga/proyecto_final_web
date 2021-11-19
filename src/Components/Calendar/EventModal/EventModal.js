import React, { useContext, useRef, useState } from 'react'
import GlobalContext from '../../../context/GlobalContext'
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars"
import reactDom from 'react-dom'
import dayjs from 'dayjs'
require('dayjs/locale/es')

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"]
export default function EventModal() {
 
    const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext)
    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "")
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "")
    const [selectedLabel, setSelectedLabel] = useState(selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label) : labelsClasses[0])
    const [startHour, setStartHour] = useState(selectedEvent ? selectedEvent.startHour : "")
    const [endHour, setEndHour] = useState(selectedEvent ? selectedEvent.endHour : "")
   
    //const [totalDayHour, setTotalDayHour] = useState(selectedEvent ? selectedEvent.totalDayHour : "")

    const horaInicio = useRef('')
    const horaFin = useRef('')

    function handleSubmit(e) {
        e.preventDefault()
       /*startHour: dayjs(horaInicio.current.value).format("HH:mm A"),
            endHour: dayjs(horaFin.current.value).format("HH:mm A"),*/
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            startHour,
            endHour,
            totalDayHour,
            id: selectedEvent ? selectedEvent.id : Date.now()
        }
        if (selectedEvent) {
            dispatchCalEvent({ type: 'update', payload: calendarEvent })
        } else {
            dispatchCalEvent({ type: 'push', payload: calendarEvent })
        }
      
        setShowEventModal(false)
    }
   
    const totalDayHour = new Date(endHour).getHours() - new Date(startHour).getHours()
    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-2xl w-1/4">
                <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                    <span className="material-icons-outlined text-gray-400">drag_handle</span>
                    <div>
                        {selectedEvent && (<span onClick={() => {
                            dispatchCalEvent({ type: "delete", payload: selectedEvent })
                            setShowEventModal(false)
                        }}
                            className="material-icons-outlined text-gray-400 cursor-pointer">delete</span>)}
                        <button onClick={() => setShowEventModal(false)}>
                            <span className="material-icons-outlined text-gray-400">close</span>
                        </button>
                    </div>

                </header>
                <div className="p-5">
                    <div className="grid grid-cols-1/6 items-end gap-y-7">
                        <div></div>
                        <input type="text"
                            name="title"
                            placeholder="Nombre de la actividad"
                            value={title}
                            required
                            className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-red-700"
                            onChange={(e) => setTitle(e.target.value)} />
                   
                        <p className="text-left normal-case">{daySelected.format("dddd, MMMM DD")}</p>
                       
                        <TimePickerComponent value={startHour} ref={horaInicio}  onChange={(e) => setStartHour(e.target.value)} placeholder="Hora Inicio" />
                        <TimePickerComponent value={endHour} ref={horaFin} onChange={(e) => setEndHour(e.target.value)} placeholder="Hora Fin" />
                        <p className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-red-700">{totalDayHour ? `Horas trabajadas: ${totalDayHour}` : "No hay horas registradas"}</p>
                          <input type="text"
                            name="descrpition"
                            placeholder="Añadir descripción"
                            value={description}
                            required
                            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-red-700"
                            onChange={(e) => setDescription(e.target.value)} />
                        
                        <div className="flex gap-x-2">
                            {labelsClasses.map((lblClass, i) => (
                                <span key={i} onClick={() => setSelectedLabel(lblClass)} className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                                    {selectedLabel === lblClass && <span className="material-icons-outlined text-white text-sm">
                                        check
                                    </span>}

                                </span>
                            ))}
                        </div>


                    </div>
                </div>
                <div className="p-3">
                    <footer className="flex justify-end border-t p-3 mt-5">
                        <button type="submit"
                            onClick={handleSubmit}
                            className="bg-red-700 hover:bg-red-800 px-6 py-2 rounded text-white">
                            Guardar
                        </button>
                    </footer>
                </div>
            </form>
        </div>
    )
}
