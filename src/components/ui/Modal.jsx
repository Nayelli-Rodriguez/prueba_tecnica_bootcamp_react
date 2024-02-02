function Modal({ isOpen, onClose, children, title }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600/50 overflow-y-auto h-full w-full px-4" id="my-modal">
            <div className="relative top-20 mx-auto py-3 px-5 border w-full max-w-96 shadow-lg rounded-md bg-white"> 
                <div className="flex justify-between text-lg font-medium">
                    <h3>
                        { title }
                    </h3>
                    <button onClick={onClose}>
                        x
                    </button>
                </div>
                <div className="mt-3">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;