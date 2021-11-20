import React from "react";
import Sectionname from "./Sectionname/Sectionname";

import './Subnavbar.css'

const Subnavbar = () => {
    return (

        <div className='Subnavbarbg space-x-4'>
            <Sectionname clase='Inicio' route='/home'/>
            <Sectionname clase='Reportes' route='/reports'/>
        </div>

    )
}

export default Subnavbar