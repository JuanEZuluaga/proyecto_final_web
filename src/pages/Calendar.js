import { Fragment } from "react"
import Navlayout from "../layout/Navlayout"
import { useState } from 'react';
import { getMonth } from '../util';
import CalendarHeader from "../Components/Calendar/CalendarHeader/CalendarHeader";
import Sidebar from "../Components/Calendar/Sidebar/Sidebar";
import Month from "../Components/Calendar/Month/Month";

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    return (
        <Fragment>
            <Navlayout>
                <div className="h-screen flex flex-columns">
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