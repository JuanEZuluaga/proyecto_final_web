import React from "react";

import './Titlecard.css'

const Titlecard = ({ Title }) => {
    return (
        <div className='Titlecard_prdiv'>
            <div className='Titlecard_secdiv'>
                <h2 className='Titlecard_h2section'>{Title}</h2>
            </div>
            <span className='Titlecard_spansection'></span>
        </div>
    )
}


export default Titlecard