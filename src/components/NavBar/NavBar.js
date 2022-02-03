
import {ShoppingCart} from '../ShoppingCart/ShoppingCart'

export const NavBar = () => {

    return (
        <header className="header">
            <h1 className="titulo">Tienda Fútbol</h1>

            <nav className="header-nav">
                <p className="header-link">Botines</p>
                <p className="header-link">Camisetas</p>
                <p className="header-link">Accesorios</p>
                <p><ShoppingCart /></p>
            </nav>
        </header>
    )
}