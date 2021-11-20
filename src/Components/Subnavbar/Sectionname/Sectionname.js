import React from "react";
import { NavLink } from "react-router-dom";

import './Sectionname.css'

const Sectionname = ({ clase, route }) => {

    return (
        <NavLink to={route}>
            <div className='Sectionname_div_subnavbar'>
                <span className='Sectionname_subnavbar text-black'>{clase}</span>
                <span className='Sectionname_subnavbar_selector'></span>
            </div>
        </NavLink>


    )
}

export default Sectionname