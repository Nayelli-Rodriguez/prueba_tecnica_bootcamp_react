function ButtonDelete(props) {
    return (
        <button
            {...props}
            className="bg-red-700 text-white font-medium text-sm px-5 py-2 rounded-md hover:opacity-80 w-full"
        >
            {props.children}
        </button>
    );
}

export default ButtonDelete;
