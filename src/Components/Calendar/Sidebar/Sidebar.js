import React from 'react'
import CreateEventButton from "./CreateEventButton/CreateEventButton"
import SmallCalendar from './SmallCalendar/SmallCalendar';
import Labels from './Labels/Labels'
function Sidebar() {
    return (
        <aside className="border p-5 w-64">
            <CreateEventButton/>
            <SmallCalendar/>
            <Labels className="justify-start"/>
        </aside>
    )
}
export default Sidebar;