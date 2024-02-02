import { useState } from 'react';
import { createPost } from '../../services/apiPostService';
import ButtonGreen from '../ui/ButtonGreen';
import Input from '../ui/forms/Input';
import Label from '../ui/forms/Label';
import TextAreaInput from '../ui/forms/TextAreaInput';

function CreatePostForm({ onPostCreated }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const userId = 1;

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
            const newPost = await createPost({ title, body, userId });
            onPostCreated(newPost);
            setTitle('');
            setBody('');
        } catch (error) {
            console.error("Error creating post: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col justify-start w-full">
                <Label 
                    htmlFor="title"
                >
                    Título:
                </Label>
                <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="flex flex-col justify-start w-full">
                <Label 
                    htmlFor="body"
                >
                    Cuerpo:
                </Label>
                <TextAreaInput
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></TextAreaInput>
            </div>
            <ButtonGreen 
                type="submit"
            >
                Crear Post
            </ButtonGreen>
        </form>
    );
}

export default CreatePostForm;