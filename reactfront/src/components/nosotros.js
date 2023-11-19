import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import React from 'react';


function Nosotros() {
    const { pais, ciudad } = useParams();

    return(
            <Container maxWidth="md">
                <h2>Nosotros</h2>
                <p>Pais: {pais}</p>
                <p>Ciudad: {ciudad}</p>
            </Container>
    )
}
export default Nosotros;