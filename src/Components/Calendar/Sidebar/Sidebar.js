import React from 'react'
import CreateEventButton from "./CreateEventButton/CreateEventButton"
import SmallCalendar from './SmallCalendar/SmallCalendar';
import Labels from './Labels/Labels'
import ReportState from './ReportState/ReportState';
function Sidebar() {
    return (
        <aside className="border p-5 w-64">
            <CreateEventButton />
            <SmallCalendar />
            <Labels />
            <ReportState/>

        </aside>
    )
}
export default Sidebar;