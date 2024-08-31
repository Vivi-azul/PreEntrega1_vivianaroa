import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { CartProvider } from './context/CartContext.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemCount from './components/ItemCount/ItemCount.jsx';
import Carrito from "./components/Carrito/Carrito.jsx";
import Checkout from "./components/Checkout/checkout.jsx";

import './App.css'

// import Error from "./components/Ejemplos/Error";

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
      <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/checkout" element={<Checkout />} />

  {/* <Route path="*" element={<Error />} /> */}
    </Routes>
    </CartProvider>
    
    </BrowserRouter>
  )
}

export default App;
