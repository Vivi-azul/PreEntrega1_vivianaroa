import { useState } from "react";

const ItemCount = ({ agregarAlCarrito, stock }) => {
  const [contador, setContador] = useState(1);
  

  const sumarContador = () => {
    if(contador < stock){
      setContador( contador + 1 );
    }
  }

  const restarContador = () => {
    if(contador > 1 ){
      setContador( contador - 1 );
    }
  }

  return (
    <div>
      <button onClick={sumarContador} >+</button>
      <p>{contador}</p>
      <button onClick={restarContador} >-</button>
     
      <button onClick={ () => agregarAlCarrito(contador) } >Agregar al carrito</button>
    </div>
  );
}
export default ItemCount;