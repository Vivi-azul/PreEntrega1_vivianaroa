import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
// import { Link } from "react-router-dom"

const Carrito = () => {

  const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } = useContext(CartContext)

 if(carrito.length === 0){
  return (
    <div>
      <h2>No hay productos en el carrito</h2>
      <button onClick={() => window.location.href = '/'}>Ver productos</button>
    </div>
  );
  }

  return (
    <div>
      {
        carrito.map( (productoCarrito) => (
          // <div style={{ display: "flex", justifyContent: "space-around", margin: "50px 0" }} key={productoCarrito.id}>
          <div>  
            <img src={productoCarrito.imagen} width={100} alt="producto.Carrito" />
            <p>{productoCarrito.nombre}</p>
            <p>precio c/u: ${productoCarrito.precio}</p>
            <p>Cantidad: {productoCarrito.cantidad}</p>
            <p>Total Parcial: ${productoCarrito.precio * productoCarrito.cantidad}</p>

            <button onClick={ () => borrarProductoPorId(productoCarrito.id) } >Eliminar</button>
          </div>
        ))
      }
      <p>Precio Total: ${precioTotal()}</p>
      <button onClick={vaciarCarrito} >Vaciar carrito</button>
      <button>Seguir la compra</button>
    </div>
  )
}
export default Carrito