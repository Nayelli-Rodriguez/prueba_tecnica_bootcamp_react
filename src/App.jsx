import { useState } from 'react';
import { usePosts } from './hooks/usePosts';

import Title from './components/ui/Title';
import ButtonPrimary from './components/ui/ButtonPrimary';
import PostList from './components/posts/PostList';
import Modal from './components/ui/Modal';
import CreatePostForm from './components/posts/CreatePostForm';
import UpdatePostForm from './components/posts/UpdatePostForm';
import DeletePostForm from './components/posts/DeletePostForm';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [updatePost, setUpdatePost] = useState(null);
  const [deletePost, setDeletePost] = useState(null);
  
  const { posts, handleCreatePost, handleUpdatePost, handleDeletePost } = usePosts();

  const handlePostCreated = (newPost) => {
    handleCreatePost(newPost);
    setIsCreating(false);
    alert('Post creado correctamente');
  };

  const handlePostUpdated = async (updatedPost) => {
    await handleUpdatePost(updatedPost);
    setIsEditing(false);
    alert('Post actualizado correctamente');
  };

  const handlePostDeleted = async (deletedPost) => {
    await handleDeletePost(deletedPost);
    setIsDeleting(false);
    alert('Post eliminado correctamente');
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-10">
      <section className="container mx-auto px-4">
        <Title>
          Listado de post
        </Title>
        <div className="mt-3 flex justify-end">
          <ButtonPrimary
            onClick={() => setIsCreating(true)}
          >
            Crear Post
          </ButtonPrimary>
        </div>
        
        <section className="mt-4 rounded-md">
          <PostList posts={posts} onEdit={(post) => { setUpdatePost(post); setIsEditing(true); }} onDelete={(post) => { setDeletePost(post); setIsDeleting(true); } } />
        </section>
      </section>

        <Modal title="Crear Post" isOpen={isCreating} onClose={() => setIsCreating(false)}>
          <CreatePostForm onPostCreated={handlePostCreated} />
        </Modal>
      
        <Modal title="Actualizar Post" isOpen={isEditing} onClose={() => setIsEditing(false)}>
          <UpdatePostForm post={updatePost} onUpdatePost={handlePostUpdated} />
        </Modal>

        <Modal title="Eliminar Post" isOpen={isDeleting} onClose={() => setIsDeleting(false)}>
          <DeletePostForm post={deletePost} onDeletedPost={handlePostDeleted} />
        </Modal>
    </main>
  );
}

export default App;
