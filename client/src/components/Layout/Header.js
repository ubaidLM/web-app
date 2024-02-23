import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaCashRegister } from "react-icons/fa6";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand" href="#">{<FaCashRegister/>}Register App</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/About" className="nav-link active" aria-current="page" href="#">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contact" className="nav-link active" aria-current="page" href="#">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Register" className="nav-link active" aria-current="page" href="#">Register</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
