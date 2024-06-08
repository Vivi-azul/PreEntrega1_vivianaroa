import React from 'react'
import logoPataPerro from "../../img/logo_pata.webp"
import CartWidget from './CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <div>
            <img src={logoPataPerro} width = {110} alt="" />
      </div>
    <a className="navbar-brand" href="#">Patitas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/* <a className="nav-link active" aria-current="page" href="#">Inicio</a> */}
        <a className="nav-link" href="#">Alimentos</a>
        <a className="nav-link" href="#">Juguetes</a>
        <a className="nav-link" href="#">Recomendaciones</a>

        <CartWidget />
      </div>
      
      
    </div>
  </div>
  </nav>
       
      
   </nav>
  )
}

export default NavBar