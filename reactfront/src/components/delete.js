import React, { useState, useEffect } from 'react';

function DeletePost() {
  const [isLoading, setIsLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setPostId(data.id);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos del post:', error);
      });
  }, []);

  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setDeleted(true);
          setIsLoading(false);
        } else {
          throw new Error('Error al eliminar el post');
        }
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud DELETE:', error);
      });
  };

  return (
    <div>
      <h2>Eliminar Post</h2>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <p>¿Estás seguro que deseas eliminar el post con ID {postId}?</p>
          <button onClick={handleDelete}>Eliminar Post</button>
          {deleted && <p>¡El post con ID {postId} fue eliminado exitosamente!</p>}
        </div>
      )}
    </div>
  );
}

export default DeletePost;
