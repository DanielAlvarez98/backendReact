import './App.css';
import Formulario from './components/form';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ShowProducts from './components/ShowForm';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProducts/>}/>
          <Route path='/form' element={<Formulario titleName={"Formulario de Ventas"}
        labelName={"Datos del Cliente"}
        buttonName={"Guardar"}/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  
        
    )
    
  }

export default App;
