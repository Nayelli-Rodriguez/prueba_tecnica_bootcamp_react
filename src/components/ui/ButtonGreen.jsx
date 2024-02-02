function ButtonGreen(props) {
    return (
        <button
            {...props}
            className="bg-lime-500 w-full text-white font-medium text-sm px-5 py-2 rounded-md hover:opacity-80"
        >
            {props.children}
        </button>
    );
}

export default ButtonGreen;
