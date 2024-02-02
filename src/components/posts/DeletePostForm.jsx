import ButtonRed from '../ui/ButtonRed';

function DeletePostForm({ post, onDeletedPost }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onDeletedPost(post.id);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <p>
                Seguro que deseas eliminar el post: <br /> 
                { post.title }
            </p>
            <ButtonRed
                type="submit"
            >
                Eliminar Post
            </ButtonRed>
        </form>
    );
}

export default DeletePostForm;
