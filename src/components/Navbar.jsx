import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">🍕 Pizzería Mamma Mía!</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">🔐Login</Link>
        <Link to="/register">🔐Registro</Link>
        <Link to="/cart">🛒 Carrito</Link>
        <Link to="/profile">Perfil</Link>
      </div>
    </nav>
  );
};

export default Navbar;
