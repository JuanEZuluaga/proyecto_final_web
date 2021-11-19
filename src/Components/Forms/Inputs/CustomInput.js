
const CustomInput = (props) => {

    return (

        <input
            id={props.id}
            name={props.name}
            type={props.type}
            required
            onChange={props.onChange}
            value={props.value}
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
    )
}

export default CustomInput