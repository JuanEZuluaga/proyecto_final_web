import React from "react";
import { IoTime } from "react-icons/io5";

import './Labelitem_progressbar.css'

const Labelitemprogressbar = ({ labelname, iconnumber }) => {
    return (
        <div className='labelitem_progressbar_div'>
            <IoTime className={`labelitem_progressbar_icon${iconnumber}`} />
            <span className='labelitem_progressbar_text'>{labelname}</span>
        </div>
    )
}


export default Labelitemprogressbar