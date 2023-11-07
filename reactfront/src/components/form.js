
import React,{useState} from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';



function Formulario({titleName, labelName, buttonName}){
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
  
      // if (!typePrice){
      //   setPriceError(1)
      // }else{
      //   setPriceError(0)
      // }
      // setPrice(value)

      setPriceError(!typePrice ? 1 : 0);
      setPrice(value);

    }
  
    const cantidad =(e)=>{
      const value=e.target.value;
      const entero = /^\d+$/.test(value);
      const typeCant= /^[0-9,$]*$/.test(value);
      
      // if (typeCant===false){
      //   setAmonuntError(1)
      // }else if(!entero){
      //   setAmonuntError(2)
      // }else {
      //   setAmonuntError(0)
      // }
      // setAmonunt(value)

      setAmonuntError(typeCant === false ? 1 : !entero ? 2 : 0);
      setAmonunt(value);
    }
    

    
   const validDni =(e) =>{
     const value=e.target.value;
     const lengtDni=value.length===8;
     const dniValid= /^[0-9,$]*$/.test(value);
  
    //  if(dniValid===false){
    //    setDniError(1)
    //  }else if(!lengtDni){
    //    setDniError(2)
    //  }else{
    //    setDniError(0)
    //  }
    //  setDni(value);

     setDniError(dniValid===false ? 1: !lengtDni ? 2:0)
     setDni(value);

   }
    const cambiarNombre=(e) =>{
      const value=e.target.value;
      console.log(value);
      const minValue=value.length >=3;
      const maxValue=value.length <= 10;
      const onliLet = /^[a-zA-Z\s]*$/g.test(value);//PARA QUE SOLO HAYA LETRAS
      
      // if(onliLet===false) {
      //   setNumericError(1);
      // }else if(!minValue) {
      //   setNumericError(2);
      // }else if(!maxValue) {
      //   setNumericError(3)
      // }else{
      //   setNumericError(0);
      // }

      // setNombre(value);
      
      setNumericError(!onliLet ? 1 : !minValue ? 2 : !maxValue ? 3 : 0);
      setNombre(value);

    //   Si onliLet es verdadero (true), entonces se verifica si tanto minValue 
    //   como maxValue son verdaderos (true). Si es así, el valor de la expresión
    //   condicional es 0 (sin errores). De lo contrario, si alguna de las condiciones no se cumple, el valor es 3.

    // Si onliLet es falso (false), entonces se verifica si minValue es falso (false). Si es así, el valor de la 
    // expresión condicional es 2. De lo contrario, si minValue es verdadero (true), el valor es 1.

      

    }
  
      const guardarClick = () => {
        
        alert("Este es mi estado local",nombre);
      }
      const errorMessages = {
        1: "El nombre solo se puede incluir letras",
        2: "El nombre mínimo es 3 caracteres",
        3: "El nombre máximo es 10 caracteres",
      };

      const messageDni={
        1: "Solo se aceptan números",
        2:"Dni debe tener 8 caracteres",
      };

      const messageCantidad={
        1: "Solo se aceptan números",
        2:" Cantidad debe ser entero ",
      };

        return (
          <div className='container'>
          
            <Link to='/' className='btn btn-success  btn-lg mt-2 mb-2 text-white'>Atras</Link>

            <header className="App-header">
             <div className="title_header" role="alert">
             <h4 className="title">{titleName}</h4>
            </div>
            <div className="card-body">
            <h2>{labelName}</h2>
            <FormControl fullWidth>
            <TextField className='input' sx={{ backgroundColor: 'white' }} id="outlined-basic" label="NOMBRE" color="success" variant="outlined"  value={nombre}
              onChange={cambiarNombre} 
              type="text"/>
              
              {numberError > 0 && (
              <label className="text_error">
                {errorMessages[numberError]}
              </label>
              )}
            
            </FormControl>
            <FormControl fullWidth>
            <TextField className='input'sx={{ backgroundColor: 'white' }} id="outlined-basic"  color="success" label="DNI" variant="outlined"  value={dni}
              onChange={validDni}  />
              {dniError>0 &&(
                  <label className="text_error">
                  {messageDni[dniError]}
                </label>
              )}
              <h2>Producto</h2>
              
            </FormControl>
            <FormControl fullWidth>
            <TextField className='input' sx={{ backgroundColor: 'white' }} color="success"id="outlined-basic" label="CANTIDAD" variant="outlined"  value={amount}
                 onChange={cantidad}/>
                 {amountError>0 &&(
                  <label className="text_error">
                  {messageCantidad[amountError]}
                </label>
              )}
            </FormControl>
            <FormControl fullWidth>
            <TextField className='input' sx={{ backgroundColor: 'white' }} id="outlined-basic" color="success" label="PRECIO" variant="outlined"  value={price}
                 onChange={precio}/>
                  {priceError > 0&&(
                    <label className="text_error">
  
                    {messageCantidad[priceError]}

                    </label>
                )}
             
            </FormControl>
            <Button variant="contained" color="success"
             disabled={ priceError>0 || numberError>0 ||dniError>0 ||amountError>0} 
             onClick={guardarClick} >
               {buttonName}
              </Button>
            
            </div>
            </header>
  
            </div>
  
        
            )
}

export default  Formulario;