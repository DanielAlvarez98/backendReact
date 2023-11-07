import {Link} from 'react-router-dom';


function ShowProducts(){
    return(
        <div>
            <Link to='/form' className='btn btn-success  btn-lg mt-2 mb-2 text-white'>Formulario</Link>
            <h1>Creando</h1>
        </div>
    )
}
export default ShowProducts;