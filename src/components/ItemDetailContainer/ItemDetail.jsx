import  ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ producto }) => {

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {
      ...producto,
      cantidad: contador
    }

  }
    return (
      <div className="item-detail">
        <img src={producto.imagen} alt="" />
        <div className="detail">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>precio: ${producto.precio}</p>
          <ItemCount agregarAlCarrito={agregarAlCarrito} />
        </div>
      </div>
    );
  };
  export default ItemDetail;