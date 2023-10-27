import './App.css';
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [nombre , setNombre]= useState("")
  const [numberError,setNumericError]= useState("")
  const [dni,setDni]= useState("")
  const [dniError,setDniError]= useState("")
  const [amount,setAmonunt]= useState("")
  const [amountError,setAmonuntError]= useState("")
  const [price,setPrice]= useState("")
  const [priceError,setPriceError]= useState("")

  const precio=(e)=>{
    const value=e.target.value;
    const typePrice= /^[0-9,$]*$/.test(value);

    if (!typePrice){
      setPriceError(1)
    }else{
      setPriceError(0)
    }
    setPrice(value)
  }

  const cantidad =(e)=>{
    const value=e.target.value;
    const entero = /^\d+$/.test(value);
    const typeCant= /^[0-9,$]*$/.test(value);
    
    if (typeCant===false){
      setAmonuntError(1)
    }else if(!entero){
      setAmonuntError(2)
    }else {
      setAmonuntError(0)
    }
    setAmonunt(value)
  }

 const validDni =(e) =>{
   const value=e.target.value;
   const lengtdni=value.length===8;
   const dniValid= /^[0-9,$]*$/.test(value);

   if(dniValid===false){
     setDniError(1)
   }else if(!lengtdni){
     setDniError(2)
   }else{
     setDniError(0)
   }
   setDni(value);
 }
  const cambiarNombre=(e) =>{
    const value=e.target.value;
    console.log(value);
    const minValue=value.length >3;
    const maxValue=value.length < 10;
    const onliLet = /^[a-zA-Z\s]*$/g.test(value);//PARA QUE SOLO HAYA LETRAS
    
    if(onliLet===false) {
      setNumericError(1);
    }else if(!minValue) {
      setNumericError(2);
    }else{
      setNumericError(3);
    }

    if(onliLet===true && minValue && maxValue) {
      setNumericError(0)
    }
    setNombre(value);
  }

    const guardarClick = () => {
      
      alert("Este es mi estado local",nombre);
    }

      return (
        <div className='App'>
           <header className="App-header">
           <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Formulario Ventas</h4>
        </div>
           
           <div className="card-body">

          <h2>Datos del Cliente</h2>
          <Form.Group className="mb-3" >
            <Form.Control  id="nombre" name="nombre" value={nombre}
            onChange={cambiarNombre} 
            type="text" placeholder="Ingrese su nombre" />
               {numberError === 1 && (

                  <label className="text_error">

                  El nombre solo se puede incluir letras

                  </label>

                    )}
                    {numberError === 2 && (

                <label className="text_error">

                  El nombre minimo es 3 caracteres

                </label>

                )}



                {numberError === 3 && (

                <label className="text_error">

                  El nombre maximo es 10 caracteres

                </label>

                )}
          
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Ingrese Dni" value={dni}
            onChange={validDni} />
            {dniError===1 &&(
                <label className="text_error">

                Solo se aceptan números

                </label>
            )}
            {dniError===2 &&(
                <label className="text_error">

                Dni debe tener 8 caracteres
                

                </label>
            )}
            
            
            <h2>Producto</h2>
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Select aria-label="Default select example">
                  <option value="none" selected disabled>Escoja un Producto</option>
                  <option value="1">Television</option>
                  <option value="2">Refrigeradora</option>
                  <option value="3">Lavadora</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Cantidad" value={amount}
               onChange={cantidad}/>
                {amountError===1 &&(
                  <label className="text_error">

                    Solo se acepta numeros

                  </label>
              )}
            {amountError===2 &&(
                <label className="text_error">

                  Cantidad debe ser entero                

                </label>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Precio" value={price}
               onChange={precio}/>
                {priceError===1 &&(
                  <label className="text_error">

                    Solo se acepta numeros

                  </label>
              )}
           
          </Form.Group>

          <Button  disabled={ priceError>0 || numberError>0 ||dniError>0 ||amountError>0} onClick={guardarClick} variant="primary">Guardar</Button>{' '}
          
          </div>
          </header>

          </div>

      
          )
  }

export default App
