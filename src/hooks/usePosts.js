import { useState, useEffect, useCallback } from 'react';
import { GetPosts, createPost, updatePost, deletePost } from '../services/apiPostService';

export const usePosts = () => {
    const [posts, setPosts] = useState([]);

    // Cargar posts
    const loadPosts = useCallback(async () => {
        try {
            const fetchedPosts = await GetPosts();
            setPosts(fetchedPosts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }, []);

    useEffect(() => {
        loadPosts();
    }, [loadPosts]);

    // Crear post
    const handleCreatePost = async (newPost) => {
        try {
            await createPost(newPost);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    // Actualizar post
    const handleUpdatePost = async (updatedPost) => {
        try {
            await updatePost(updatedPost);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    // Eliminar post
    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return {
        posts,
        loadPosts,
        handleCreatePost,
        handleUpdatePost,
        handleDeletePost,
    };
};
