import React from "react";
import Image_logotipo from '../images/logotipo.png'
import "./input.css"

const Inputs = function(){
    return (
        <div className="input_s">
        
                <img id= "logotipo" src={Image_logotipo}/>
             
            <div className="info_input">
                <div className="info_card_fin">
                    <h1>Nombre de usuario</h1>
                    <h2>Contraseña</h2>
                    <h3>¿Olvidó su nombre de usuario o contraseña?</h3>
                    <h4>Iniciar sesión</h4>
                </div>
            </div>
        </div>
    );
}

export default Inputs;
