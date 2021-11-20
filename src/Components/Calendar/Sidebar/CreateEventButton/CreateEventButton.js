import React, { useContext } from 'react'
import GlobalContext from '../../../../context/GlobalContext'

export default function CreateEventButton() {
    const { setShowEventModal } = useContext(GlobalContext)
    return (
        <button onClick={() => setShowEventModal(true)} className="border p-2 rounded-full flex items-center shadow-md">
           <span className="material-icons-outlined text-gray-400">
                add
            </span>
            <span className="pl-3 pr-7">Añadir actividad</span>
            
        </button>
    )
}