
import { useContext, useState } from "react"
import { Navigate} from "react-router"
import { CartContext } from "../../context/CartContext"
import { generarOrden } from "../../firebase/generarOrden"
import { ThankYou } from "./ThankYou"
import { Validar } from "./Validar"
 


export const Checkout = () => {

    const {cart,totalCart, vaciarCart}= useContext(CartContext)

    const [orderId ,setOrderID] = useState(null)

    const [values,setValues] = useState ({
        nombre: '' ,
        email: '',
        tel:''
    })
    
    const handleInputChange = (e) =>{
       setValues({
            ...values,
            [e.target.name] : e.target.value

        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
       
        Validar(values) &&  generarOrden(values,cart,totalCart,setOrderID,vaciarCart)
              
       
                
    }
    

    if(orderId){
        return  <ThankYou order={orderId}/>
 
    }

    if (cart.length === 0 ){
         return <Navigate to="/"/>
    }

    return(
      <div  className="container my-5">
          <h1>Checkout</h1>
          <hr/>

        <form onSubmit={handleSubmit}> 
        <input 
        className = "form-control my-2" 
        type = "text" 
        placeholder = "Tu nombre "
        value = {values.nombre}  
        onChange = {handleInputChange}
        name ='nombre'
        />

        <input 
        className = "form-control my-2" 
        type = "email" 
        placeholder = "Tu email"
        value = {values.email}
        onChange = {handleInputChange}
        name ='email'
        />

        <input 
        className = "form-control my-2" 
        type = "tel" 
        placeholder = "Tu telefono"
        value = {values.tel}
        onChange = {handleInputChange}
        name ='tel'
        />

        <button type="submit" className="btn btn-primary" >Enviar</button>

        </form>

      </div>
      
        
    )



}

