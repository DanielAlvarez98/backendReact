import './App.css';
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [nombre , setNombre]= useState("")
  const [numberError,setNumericError]= useState("")
  const [email,setEmail]= useState("")
  const [emailError,setErrorEmail]= useState("")
  const [password,setPassword]= useState("")
  const [errorPassword,setErrorPassword]= useState("")

  const validPassword= (e) => {
    const value= e.target.value;
    const validPassword=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if (!validPassword.test(value)){
      setErrorPassword(1);
    }else{
      setErrorPassword(0);
    }
    setPassword(value);

  }
  const typeEmail= (e) =>{
    const value=e.target.value;
    const validEmail=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!validEmail.test(value)) { // Cambiado a !validEmail.test(value)
      setErrorEmail(1); // Correo no válido
    } else {
      setErrorEmail(0); // Correo válido
    }
    setEmail(value)

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
      
      alert("Este es mi estado local",nombre,email);
    }

      return (
        <div className='App'>
           <header className="App-header">
           <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">MI PRIMER SISTEMA CON REACT</h4>
        </div>
           
           <div className="card-body">

          <h2>Mi Formulario</h2>
          <Form.Group className="mb-3" >
            <Form.Label>Nombre </Form.Label>
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
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" id="email" placeholder="Ingrese email" value={email} 
            onChange={typeEmail}/>
            

            {emailError === 1 && (

                <label className="text_error">

                  Ingrese un correo valido

                </label>

                )}
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  value={password}
             onChange={validPassword}/>
            {errorPassword === 1 && (

              <label className="text_error">

                  <p>Al menos 8 caracteres de longitud</p>
                  <p>Al menos una letra mayúscula.</p>
                  <p>Al menos una letra minúscula.</p>
                  <p>Al menos un dígito.</p>
                  <p>Puede contener caracteres especiales.</p>

              </label>

              )}
          </Form.Group>

          <Button  disabled={ emailError>0 || errorPassword>0  || numberError>0  } onClick={guardarClick} variant="primary">Primary</Button>{' '}
          
          </div>
          </header>

          </div>

      
          )
  }

export default App
