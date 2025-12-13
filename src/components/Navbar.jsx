import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {

  const { carrito } = useContext(CarritoContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Total de productos
  const totalItems = carrito.reduce((sum, p) => sum + p.cantidad, 0);

  return (
    <nav className="nav">
      <div className="nav__content">

        {/* BOTÓN HAMBURGUESA */}
        <button 
          className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* LOGO */}
        <Link to="/" className="nav__logo">
          <img src="/logo.png" alt="Logo" />
          Perfumería Elegance
        </Link>

        {/* MENÚ */}
        <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link></li>

          <li>
            <Link 
              to="/carrito"
              className="nav__carrito"
              onClick={() => setMenuOpen(false)}
            >
              <FaShoppingCart className="carrito__icon" />
              Carrito

              {totalItems > 0 && (
                <span className="carrito__contador">{totalItems}</span>
              )}
            </Link>
          </li>

          <li>
            <Link to="/devoluciones" onClick={() => setMenuOpen(false)}>
              Devoluciones
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
