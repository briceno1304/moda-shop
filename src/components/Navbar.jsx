import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  const { carrito } = useContext(CarritoContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = carrito.reduce((sum, p) => sum + p.cantidad, 0);

  // Bloquear scroll del body cuando el menú está abierto (y limpiar al desmontar)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="nav">
      <div className="nav__content">
        {/* LOGO */}
        <Link to="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Logo" className="nav__logo-img" />
          Perfumería Elegance
        </Link>

        {/* HAMBURGUESA (visible en móvil) */}
        <button
          className="nav__hamburger"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((s) => !s)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links (escritorio) - se mantienen visibles en pantallas grandes */}
        <ul className="nav__links desktop">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li>
            <Link to="/carrito" className="nav__carrito">
              <FaShoppingCart className="carrito__icon" />
              <span>Carrito</span>
              {totalItems > 0 && <span className="carrito__contador">{totalItems}</span>}
            </Link>
          </li>
          <li><Link to="/devoluciones">Devoluciones</Link></li>
        </ul>
      </div>

      {/* Overlay — aparece cuando el drawer está abierto (móvil) */}
      <div
        className={`nav__overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      {/* Drawer / Drawer derecho (móvil) */}
      <aside className={`nav__drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="nav__drawer-header">
          <Link to="/" className="nav__logo-drawer" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="Logo" className="nav__logo-img-drawer" />
            <span>Perfumería Elegance</span>
          </Link>
          <button className="nav__drawer-close" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
            <FaTimes />
          </button>
        </div>

        <ul className="nav__links drawer">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link></li>
          <li>
            <Link to="/carrito" className="nav__carrito" onClick={() => setMenuOpen(false)}>
              <FaShoppingCart className="carrito__icon" />
              <span>Carrito</span>
              {totalItems > 0 && <span className="carrito__contador">{totalItems}</span>}
            </Link>
          </li>
          <li><Link to="/devoluciones" onClick={() => setMenuOpen(false)}>Devoluciones</Link></li>
        </ul>
      </aside>
    </nav>
  );
}
