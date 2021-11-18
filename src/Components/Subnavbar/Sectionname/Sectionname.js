import React from "react";

import './Sectionname.css'

const Sectionname = ({ clase }) => {
    return (

        <div className='Sectionname_div_subnavbar'>
            <span className='Sectionname_subnavbar'>{clase}</span>
            <span className='Sectionname_subnavbar_selector'></span>
        </div>


    )
}

export default Sectionname