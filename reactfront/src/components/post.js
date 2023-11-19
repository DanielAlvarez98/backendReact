import React, { useState } from 'react';

function Post() {
  const [isLoading, setIsLoading] = useState(true);
  const [postId, setPostId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',body: '',userId: 1,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => {
        setPostId(data.id);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud POST:', error);
      });
  };

  return (
    <div>
      <h2>Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          name="body"
          placeholder="Cuerpo del post"
          value={formData.body}
          onChange={handleChange}
        />
        <button type="submit">Crear Post</button>
      </form>

      {isLoading ? (
        <p>Enviando solicitud...</p>
      ) : (
        <div>
          <p>¡Se creó un nuevo post con el ID: {postId}!</p>
          <p>Título del post: {formData.title}</p>
          <p>Cuerpo del post: {formData.body}</p>
        </div>
      )}
    </div>
  );
}
export default Post;
