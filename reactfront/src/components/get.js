import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';

function Get() {
    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(null);
    const [contador, setContador] = useState(0);
  
    const obtenerImagenAleatoria = () => {
      const timestamp = new Date().getTime();
      const url = `https://randomfox.ca/floof/?ref=apilist.fun${timestamp}`;
  
      fetch(url)
        .then((response) => response.json()).then((data) => {
          setImageUrl(data.image);
          setIsLoading(false);
        });
    };
    useEffect(() => {
      obtenerImagenAleatoria();
      const intervalo = setInterval(() => {setContador((conta) => conta + 1);
        obtenerImagenAleatoria();
      }, 4000);
      return () => clearInterval(intervalo);
    }, [contador]);
  
    return (
      <Container maxWidth="md">
        <h2>Contacto</h2>
        <div>
          <h2>GET Example</h2>
          {isLoading ? (
            <p>Cargando...</p>
          ) : (
            <img src={imageUrl} alt="Random Fox" height="250px"/>
          )}
        </div>
      </Container>
    );
  }
  export default Get;
  