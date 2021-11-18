import React from 'react'
import Userinfo from './Userinfo/Userinfo'
import UAOLogoP from './img/PortalPilos.png'

import './Navbar.css'

const Navbar = () => {

    return (

        <div className='navbarbg'>
            <img src={UAOLogoP} className='UAOLogo' alt='UAO Logo' />
            <Userinfo username='Daniel Cotes' userimg='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' />
        </div>

    )

}

export default Navbar