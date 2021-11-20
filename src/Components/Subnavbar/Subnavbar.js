import React from "react";
import Sectionname from "./Sectionname/Sectionname";

import './Subnavbar.css'

const Subnavbar = () => {
    return (

        <div className='Subnavbarbg'>
            <Sectionname clase='Inicio' route='/home'/>
            <Sectionname clase='Reportes' route='/reports'/>
        </div>

    )
}

export default Subnavbar