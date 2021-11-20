import React from "react";

import Titlecard from "../Titlecard/Titlecard";
import Labelprogressbar from "./Labelprogressbar/Labelprogressbar";
import Progressbar from "./Progressbar/Progressbar";

import './Totalhorashome.css'

const Totalhorashome = ({ done, tothorascom, tothorasfalt }) => {
    return (
        <div className='card_totalhorashome'>
            <Titlecard Title='Tu total de horas pilos' />
            <Progressbar done={done} tothorascom={tothorascom} tothorasfalt={tothorasfalt} />
            <Labelprogressbar />
        </div>
    )
}


export default Totalhorashome