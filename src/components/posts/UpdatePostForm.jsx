import { useState } from 'react';
import ButtonGreen from '../ui/ButtonGreen';
import Input from '../ui/forms/Input';
import Label from '../ui/forms/Label';
import TextAreaInput from '../ui/forms/TextAreaInput';

function UpdatePostForm({ post, onUpdatePost }) {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const userId = 1;

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdatePost({ id: post.id, title: title, body: body, userId: userId });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col justify-start w-full">
                <Label
                    htmlFor="title"
                >
                    Titulo
                </Label>
                <Input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="flex flex-col justify-start w-full">
                <Label
                    htmlFor="body"
                >
                    Cuerpo
                </Label>
                <TextAreaInput
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <ButtonGreen 
                type="submit"
            >
                Actualizar Post
            </ButtonGreen>
        </form>
    );
}

export default UpdatePostForm;
