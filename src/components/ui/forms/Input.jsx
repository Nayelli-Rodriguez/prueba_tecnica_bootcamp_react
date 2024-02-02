function Input(props) {
    return (
        <input
            {...props}
            className="mt-1 rounded-md text-sm focus:outline-none focus:ring-0 focus:border-2 focus:border-indigo-500"
        >
            {props.children}
        </input>
    );
}

export default Input;
