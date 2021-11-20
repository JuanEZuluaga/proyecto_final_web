import React from "react";
import Carrusel from "./Carousel/Carousel";
import Titlecard from "../Titlecard/Titlecard";

import './Tothoraspa.css'

const Tothoraspa = ({ datachart }) => {

    return (
        <div className='tothoraspa_prdiv'>
            <Titlecard Title='Tus horas pilos por periodo académico' />
            <Carrusel datachart={datachart} />
        </div>
    );

};


export default Tothoraspa
