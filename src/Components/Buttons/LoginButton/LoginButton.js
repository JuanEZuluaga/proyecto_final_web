const LoginButton = (props) => {

    return (
        <button type="submit" className={`
        group 
        relative 
        w-full flex 
        justify-center 
        py-2 
        px-4 
        border 
        border-transparent 
        text-lg 
        font-medium 
        rounded-full 
        text-white 
        bg-red-700 
        hover:bg-red-800
        focus:outline-none 
        focus:ring-2 
        focus:ring-red-500 
        focus:bg-red-600
        filter
        drop-shadow-md
        ${props.customClasses}
    `}>
            {props.text}
        </button>
    )
}

export default LoginButton