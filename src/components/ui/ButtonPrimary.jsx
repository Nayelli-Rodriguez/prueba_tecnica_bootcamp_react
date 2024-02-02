function ButtonPrimary(props) {
    return (
        <button
            {...props}
            className="bg-indigo-500 text-white font-medium text-sm px-5 py-2 rounded-md hover:opacity-80"
        >
            {props.children}
        </button>
    );
}

export default ButtonPrimary;
