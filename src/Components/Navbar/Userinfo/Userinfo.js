import React from "react";
import { BsFillBellFill } from 'react-icons/bs';

import './Userinfo.css'

const Userinfo = ({ username, userimg }) => {
    return (
        <div className='Userinfo_navbar'>
            <BsFillBellFill></BsFillBellFill>
            <span className='welcome_navbar'> {`Bienvenido ${username}`}</span>
            <img src={userimg} className='Userimg_navbar' alt='User img' />
        </div>
    )
}

export default Userinfo