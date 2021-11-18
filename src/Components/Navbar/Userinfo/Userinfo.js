import React from "react";
import { BsFillBellFill } from 'react-icons/bs';

const Userinfo = ({ username, userimg }) => {
    return (
        <div>
            <BsFillBellFill></BsFillBellFill>
            <span> {username}</span>
            <img src={userimg} className='Userimg' alt='User img' />
        </div>
    )
}

export default Userinfo