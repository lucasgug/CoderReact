import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

export const Cart = () => {

    const {cart , totalCart , vaciarCart , eliminarItem} = useContext(CartContext)
    
  
    if (cart.length === 0 ){
         return  <div className="container my-4">
                        <h2>El carrito está vacio</h2> 
                        <hr/>
                        <Link to="/" className="btn btn-primary">Volvera al Inicio</Link>
                        </div>
    }                  
  
    
    return(
        <>
       
            <div  className="container my-4">
                <h2>Tu Compra</h2>
                <hr/>

                {
                    cart.map ((item) => ( 
                        <div key={item.id}>
                            <h4>{item.nombre}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.cantidad * item.precio}</p>
                            <button className="btn btn-danger " onClick={() => eliminarItem(item.id)}> <DeleteIcon/> </button>
                                  
                        </div>
                      ))
                }

            <hr/>
            <h2>Total: ${totalCart()}</h2> 

                <div className="my-2">
                    <button className="btn btn-danger" onClick={vaciarCart} >Vaciar carrito</button> 
                    <Link to="/checkout" className="btn btn-success mx-3 ">Terminar Compra 😀</Link>  
                </div>

            </div>
        
        </>
    )
}
