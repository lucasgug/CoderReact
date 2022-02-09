
import { blue } from '@mui/material/colors'
import {ShoppingCart} from '../ShoppingCart/ShoppingCart'
import { Link } from 'react-router-dom'
import { color } from '@mui/system'
import { text } from 'dom-helpers'

export const NavBar = () => {

    return (
       
        <header className="header">
            <Link to ="/" style={{color:"black" ,textDecoration:"none"}} >
            <h1 className="titulo">Tienda Fútbol</h1>
            </Link>
            <nav className="header-nav">
                <Link to="/productos/botines" className="header-link" > Botines</Link>
                <Link to="/productos/camisetas" className="header-link" >Camisetas</Link>
                <Link to="/productos/accesorios" className="header-link" >Accesorios</Link>
                <p><ShoppingCart /></p>
            </nav>
        </header>
        
       

     
        
    )
}