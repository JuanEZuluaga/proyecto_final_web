
import { useState } from 'react'
import { Navigate } from 'react-router'
import LoginButton from '../Components/Buttons/LoginButton/LoginButton'
import CustomInput from '../Components/Forms/Inputs/CustomInput'
import login_img from '../img/login.png'
import logo from '../img/logo_uao.png'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const { users } = await fetch('https://run.mocky.io/v3/77f383b6-9063-4e78-aaa0-db5f6a8b9527')
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error('error fetching data', error))
        const userExists = users.find(user => user.username === userName.trim() && user.password === password.trim())
        if (userExists) {
            setLoggedIn((prevState) => !prevState)
        }
        setUserName('')
        setPassword('')
    }

    const userNameChangeHandler = (event) => { setUserName(event.target.value) }
    const passwordChangeHandler = (event) => { setPassword(event.target.value) }

    return (
        <>
            {loggedIn ? <Navigate to='/home' />
                :
                <div className='flex flex-row h-screen overflow-hiddedn'>

                    <div className='flex-grow w-4/12 lg:w-6/12 xl:w-7/12 hidden sm:block'>
                        <img className='object-cover object-center h-screen w-full' src={login_img} alt='uao_login' />
                    </div>

                    <div className='flex justify-center items-center flex-grow lg:w-6/12 xl:w-5/12 px-8'>
                        <div className='w-96'>
                            <div className='flex justify-center mb-24'>
                                <img className='object-cover object-center' src={logo} alt='uao_logo' />
                            </div>
                            <form onSubmit={onSubmitHandler}>
                                <div className='space-y-6'>
                                    <CustomInput onChange={userNameChangeHandler} value={userName} id={'user-name'} name={'user'} type={'text'} placeholder={'Nombre de usuario'} />
                                    <CustomInput onChange={passwordChangeHandler} value={password} id={'password'} name={'password'} type={'password'} placeholder={'Contraseña'} />
                                    <div>
                                        <a href='#xd' className='text-gray-400'>¿Olvidó su nombre de usuario o contraseña?</a>
                                    </div>
                                    <LoginButton customClasses={'mt-10'} text={'Iniciar sesión'} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Login