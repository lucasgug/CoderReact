import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import {Camisetas} from './components/Camisetas'
import {Accesorios} from './components/Accesorios'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import {CartContext, CartProvider} from './context/CartContext'
import { Cart } from "./components/Cart/Cart";




function App() {



    return (

    <CartProvider>
      <BrowserRouter>
          <NavBar/>

            <Routes>
              <Route path="/" element={  <ItemListContainer /> } />
              <Route path="productos/:catId" element={  <ItemListContainer /> } />
              <Route path="/detail/:itemId" element={  <ItemDetailContainer /> } />
              <Route path="*" element={  <Navigate to="/" /> } />
              <Route path="/cart" element={ <Cart/> }  />
            </Routes>

      </BrowserRouter>

   </CartProvider>

    )
  }
  
  export default App;
  
  