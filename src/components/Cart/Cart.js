import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';


export const Cart = () => {

    const {cart , totalCart , vaciarCart , eliminarItem} = useContext(CartContext)

    
    return(

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
                        <button className="btn btn-success mx-3 ">Terminar Compra 😀</button>   
                      
                    
                    </div>
                
                
                ))
            }

           <hr/>
           <h2>Total: ${totalCart()}</h2> 

            <div className="my-2">
                <button className="btn btn-danger" onClick={vaciarCart} >Vaciar carrito</button>
            </div>

        </div>



    )


}