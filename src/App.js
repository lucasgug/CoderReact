import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import {Camisetas} from './components/Camisetas'
import {Accesorios} from './components/Accesorios'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

    return (
      <BrowserRouter>
          <NavBar/>

            <Routes>
              <Route path="/" element={  <ItemListContainer /> } />
              <Route path="productos/:catId" element={  <ItemListContainer /> } />
              <Route path="/camisetas/:catId" element={  <Camisetas /> } />
              <Route path="/detail/:itemId" element={  <ItemDetailContainer /> } />
              <Route path="/accesorios/:catId" element={  <Accesorios/> } />
              <Route path="*" element={  <Navigate to="/"  /> } />
            </Routes>

         
        

      </BrowserRouter>
    );
}

export default App;

        