import React from "react";
import imageintro from './images/login.png'
import Inputs from './subcomponent/input';
import "./login.css"

const Login_s = function(){
    return (
        <div className="content_input">
        
            <img id= "image_init" src={imageintro} />
             <Inputs/>
    
        </div>
    );
}

export default Login_s;