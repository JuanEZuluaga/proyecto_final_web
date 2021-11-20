import React,{useState} from 'react'
import { Navigate } from "react-router"
export default function ReportState() {
    const [reportSent, setReportSent] = useState(false)


    const onReportSendingHandler = () => {
        setReportSent((prevState) => !prevState)
    }
    function allStorage() {
        if(localStorage.getItem!== null){
            const values = JSON.parse(localStorage.getItem('savedEvents'))

            const totalHours = values.reduce((prev, cur) => {
                console.log(prev, cur.totalDayHour)
                return prev + cur.totalDayHour
    
            }, 0)
            return totalHours
        } else{
            return null
        }
        

    }
    return (
        <>
        {reportSent ? <Navigate to='/reports' />
        :
        <div className="mt-9">

            <div className="divide-y divide-gray-400">
                <h3 className="text-gray-500 font-bold pb-2 text-left"> Estado del reporte </h3>
                <div>
                    <p className="text-left text-gray-500 text-sm pt-2">Horas totales del reporte</p>
                    <h2 className="text-left text-gray-500 text-2xl font-bold pt-2">{allStorage() ? allStorage() : 0}</h2>
                    <button onClick={onReportSendingHandler} className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded text-white text-xs" type="submit">Enviar Reporte</button>
                </div>

            </div>


        </div>
    }
    </>
    )
}
