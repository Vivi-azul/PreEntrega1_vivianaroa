import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemCount from './components/ItemCount/ItemCount.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
// import Error from "./components/Ejemplos/Error";

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
