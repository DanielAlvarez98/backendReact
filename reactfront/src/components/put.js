import Container from '@mui/material/Container';

import React, { useState, useEffect } from 'react';

function Put(){
    const [isLoading, setIsLoading] = useState(true);
    const [postId, setPostId] = useState(null);
    const [formData, setFormData] = useState({
      title: '',body: '',userId: 1,
    });
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.json())
        .then((data) => {
          setFormData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error al obtener los datos del post:', error);
        });
    }, []);
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleUpdate = (event) => {
      event.preventDefault();
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json()).then((data) => {
          setPostId(data.id); // Guarda el ID del post actualizado
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error al enviar la solicitud PUT:', error);
        });
    };
    return(
        <Container maxWidth="md">
          <h2>Put</h2>
                <div>
                  <h2>Actualizar Post</h2>
                  {isLoading ? (
                    <p>Cargando...</p>
                  ) : (
                    <form onSubmit={handleUpdate}>
                      <textarea
                        type="text" name="title" placeholder="Título" value={formData.title} onChange={handleChange} cols="30"rows="5"/>
                      <textarea
                        name="body" placeholder="Cuerpo del post" value={formData.body} onChange={handleChange} cols="30"rows="5"
                      />
                      <button type="submit">Actualizar Post</button>
                    </form>
                  )}

                  {!isLoading && postId && (
                    <p>¡Se actualizó el post con el ID: {postId}!</p>
                  )}
            </div>
        </Container>
    )
}
export default Put;