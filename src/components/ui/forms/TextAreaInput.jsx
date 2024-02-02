function TextAreaInput(props) {
    return (
        <textarea
            {...props}
            className="mt-1 rounded-md text-sm focus:outline-none focus:ring-0 focus:border-2 focus:border-indigo-500"
            rows={5}
        >
            {props.children}
        </textarea>
    );
}

export default TextAreaInput;