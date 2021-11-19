import User from '@heroicons/react/outline/UserIcon'
const CustomInput = (props) => {

    return (
        <div>
            <label htmlFor="user-name" className="sr-only">
                <User className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </label>
            <input
                id={props.id}
                name={props.name}
                type={props.type}
                required
                className={`
                appearance-none
                max-w-nonerelative
                block w-full
                px-3 py-2
                border
                border-gray-400
                placeholder-gray-500
                text-gray-500
                rounded-full
                focus:outline-none
                focus:ring-red-600
                focus:border-red-600
                focus:z-10
                sm:text-base
                `}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default CustomInput