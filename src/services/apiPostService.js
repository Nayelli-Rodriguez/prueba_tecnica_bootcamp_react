const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

// Función para obtener todos los posts
export const GetPosts = async () => {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Error fetching posts');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error inside fetchPosts: ", error.message);
        throw error; 
    }
};

// Función para crear posts
export const createPost = async (post) => {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error('Error fetching posts');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error inside createPost: ", error.message);
        throw error; 
    }
};

// Función para actualizar posts
export const updatePost = async (post) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error('Error updating post');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error inside updatePost: ", error.message);
        throw error; 
    }
};

// Función para actualizar posts
export const deletePost  = async (post) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error('Error deleted post');
        }

        return;

    } catch (error) {
        console.error("Error inside deletePost: ", error.message);
        throw error; 
    }
};