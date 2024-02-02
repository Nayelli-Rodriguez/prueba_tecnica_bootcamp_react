import ButtonGreen from '../ui/ButtonGreen';
import ButtonRed from '../ui/ButtonRed';

function PostList({ posts, onEdit, onDelete }) {
    return (
        <ul className="space-y-4">
            {posts.map(post => (
                <li key={post.id} className="bg-white/20 border border-white shadow-md rounded-md p-3">
                    <h5 className="text-indigo-500 uppercase text-sm font-semibold">Title:</h5>
                    <h4>
                        {post.title}
                    </h4>
                    <h5 className="text-indigo-500 uppercase text-sm font-semibold mt-3">Body:</h5>
                    <p>{post.body}</p>
                    <div className="w-full flex justify-end gap-4 mt-5">
                        <div>
                            <ButtonGreen onClick={() => onEdit(post)}>
                                Editar
                            </ButtonGreen>
                        </div>
                        <div>
                            <ButtonRed onClick={() => onDelete(post)}>
                                Eliminar
                            </ButtonRed>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default PostList;
