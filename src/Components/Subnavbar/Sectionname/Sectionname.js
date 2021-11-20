
import React from "react";
import { NavLink } from "react-router-dom";

import './Sectionname.css'

const Sectionname = ({ clase, route }) => {

    return (
        <NavLink to={route} className={(navData) => navData.isActive ? 'border-b-2 border-red-500 text-black text-lg py-1' : 'text-black text-lg py-1 border-b-2 border-transparent'}>
            {clase}
        </NavLink>

    )
    // <div className='Sectionname_div_subnavbar'>
    //     <span className='Sectionname_subnavbar_selector'></span>
    // </div>
    // <span className={`Sectionname_subnavbar ${(navData) => navData.isActive ? 'text-blue-500' : 'text-black'}`}>{clase}</span>
}

export default Sectionname