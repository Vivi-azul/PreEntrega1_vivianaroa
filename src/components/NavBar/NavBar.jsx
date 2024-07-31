import React from 'react'
import "./NavBar.css"
import logoPataPerro from "../../img/logo_pata.webp"
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
     <div>
            
      </div>
    <a className="navbar-brand" href="#"><img src={logoPataPerro} width = {110} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#">Alimentos</a>
        <a className="nav-link" href="#">Accesorios y Juguetes</a>
        <a className="nav-link" href="#">Recomendaciones</a>

        
      </div>
      
      
    </div>
  </div>

  <CartWidget />
  </nav>
  )
}

export default NavBar