import LoginButton from '../Components/Buttons/LoginButton/LoginButton'
import CustomInput from '../Components/Forms/Inputs/CustomInput'
import login_img from '../img/login.png'
import logo from '../img/logo_uao.png'
const Login = () => {
    return (
        <div className='flex flex-row h-screen overflow-hidden'>

            <div className='flex-grow w-4/12 lg:w-6/12 xl:w-7/12 hidden sm:block'>
                <img className='object-cover object-center h-screen w-full' src={login_img} alt='uao_login' />
            </div>

            <div className='flex justify-center items-center flex-grow lg:w-6/12 xl:w-5/12 px-8'>
                <div className='w-96'>
                    <div className='flex justify-center mb-24'>
                        <img className='object-cover object-center' src={logo} alt='uao_logo' />
                    </div>
                    <div className='space-y-6'>
                        <CustomInput id={'user-name'} name={'user'} type={'text'} placeholder={'Nombre de usuario'} />
                        <CustomInput id={'password'} name={'password'} type={'password'} placeholder={'Contraseña'} />
                        <div>
                            <a href='#xd' className='text-gray-400'>¿Olvidó su nombre de usuario o contraseña?</a>
                        </div>
                    </div>
                    <LoginButton customClasses={'mt-10'} text={'Iniciar sesión'} />
                </div>
            </div>
        </div>
    )
}

export default Login