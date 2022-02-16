
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ShoppingCart.scss'

export const ShoppingCart =()=>{

    const {cantidadCart} = useContext(CartContext)

    return(

       
        <header className ="header">
        

            <Link to="/cart" className="header-nav" >
               <ShoppingCartIcon className="icono" sx={{ fontSize: 40 }}/>
        
                <span >{cantidadCart()}</span>
           </Link>



       </header>


    )

}