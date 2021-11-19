import { Fragment } from "react"
import Navlayout from "../layout/Navlayout"
import React, { useState, useContext, useEffect } from 'react'
import { getMonth } from '../util';
import CalendarHeader from "../Components/Calendar/CalendarHeader/CalendarHeader"
import Sidebar from "../Components/Calendar/Sidebar/Sidebar"
import Month from "../Components/Calendar/Month/Month"
import GlobalContext from "../context/GlobalContext"
const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const {monthIndex} = useContext(GlobalContext)

    useEffect(() => {setCurrentMonth(getMonth(monthIndex))}, [monthIndex])
    return (
        <Fragment>
            <Navlayout>
                <div className="h-screen flex flex-col">
                    <CalendarHeader />
                    <div className="flex flex-1">
                        <Sidebar />
                        <Month month={currentMonth} />
                    </div>
                </div>
            </Navlayout>
        </Fragment>
    )
}



export default Calendar