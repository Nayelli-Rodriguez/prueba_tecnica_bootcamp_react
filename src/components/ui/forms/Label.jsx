function Label(props) {
    return (
        <label
            {...props}
            className="text-xs font-bold uppercase text-indigo-500"
        >
            {props.children}
        </label>
    );
}

export default Label;
