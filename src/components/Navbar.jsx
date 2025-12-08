import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const { carrito } = useContext(CarritoContext);

  // Calcular total de artículos
  const totalItems = carrito.reduce((sum, p) => sum + p.cantidad, 0);

  return (
    <nav className="nav">
      <div className="nav__content">

        {/* LOGO */}
        <Link to="/" className="nav__logo">
          <img src="/logo.png" alt="Logo" className="nav__logo-img" />
          Perfumería Elegance
        </Link>

        {/* MENÚ */}
        <ul className="nav__links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Productos">Productos</Link></li>

          {/* CARRITO CON ÍCONO Y CONTADOR */}
          <li>
            <Link to="/Carrito" className="nav__carrito">
              <FaShoppingCart className="carrito__icon" />
              <span>Carrito</span>

              {totalItems > 0 && (
                <span className="carrito__contador">{totalItems}</span>
              )}
            </Link>
          </li>
         <Link to="/Devoluciones">Devoluciones</Link>
        </ul>

      </div>
    </nav>
  );
}
