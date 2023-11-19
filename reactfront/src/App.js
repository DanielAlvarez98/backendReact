import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Nosotros from './components/nosotros';
import Put from './components/put';
import Formulario from './components/form';
import Post from './components/post';
import Get from './components/get';
import DeletePost from './components/delete';
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function App() {
  return(
    <Container maxWidth="md">

      <BrowserRouter>
      <nav>
      <Button variant="text"><Link to='/' className='btn btn-success  btn-lg mt-2 mb-2 text-white'>Put</Link></Button>
            <Button variant="text"><Link to='/Post' className='btn btn-success  btn-lg mt-2 mb-2 text-white'>Post</Link></Button>
            <Button variant="text"><Link to='/form' className='btn btn-success  btn-lg mt-2 mb-2 text-white'>Formulario</Link></Button>
            <Button variant="text"><Link to='/Get' className='btn btn-success  btn-lg mt-2 mb-2 text-white'>Get</Link></Button>
            <Button variant="text"><Link to='/Nosotros/Peru/Lima' className='btn btn-success  btn-lg mt-2 mb-2 text-white'>Nosotros</Link></Button>
            <Button variant="text"><Link to='/Delete' className='btn btn-success  btn-lg mt-2 mb-2 text-white'>Delete</Link></Button>

      </nav>
        <Routes>
          <Route path='/' element={<Put/>}/>
          <Route path='/form' element={<Formulario titleName={"Formulario de Ventas"}
        labelName={"Datos del Cliente"}
        buttonName={"Guardar"}/>}/>
          <Route path='/Post' element={<Post/>}/>
          <Route path='/Get' element={<Get/>}/>
          <Route path='/Nosotros/:pais/:ciudad' element={<Nosotros/>}/>
          <Route path='/Delete' element={<DeletePost/>}/>

        </Routes>
      </BrowserRouter>

    </Container>
  
        
    )
    
  }

export default App;
