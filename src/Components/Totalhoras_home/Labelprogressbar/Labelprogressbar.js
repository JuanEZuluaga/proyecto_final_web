import React from "react";

import Labelitemprogressbar from "./Labelitem_progressbar/Labelitem_progressbar";

import './Labelprogressbar.css'

const Labelprogressbar = () => {
    return (
        <div className='labelprogressbar_div'>
            <Labelitemprogressbar labelname='Total de horas completadas' iconnumber='1' />
            <Labelitemprogressbar labelname='Total de horas faltantes' iconnumber='2' />
        </div>
    )
}


export default Labelprogressbar