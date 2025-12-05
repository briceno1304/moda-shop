import { perfumes } from "../data/perfumes";
import { useState } from "react";
import ProductoCard from "../components/ProductoCard";
import "./productos.css";

export default function Productos() {
  
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todos"); // ⬅️ nuevo estado

  // Filtrar perfumes por texto + género
  const filtrados = perfumes.filter((p) => {

    // 1️⃣ Filtro por género
    if (filtro !== "todos" && p.genero !== filtro) return false;

    // 2️⃣ Filtro por texto
    return (
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.marca.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  return (
    <div className="productos">

      <h2 className="productos__title">Nuestros Perfumes</h2>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar perfume..."
        className="productos__buscador"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* BOTONES DE FILTRO */}
      <div className="productos__filtros">

        <button
          className={`filtro__btn ${filtro === "todos" ? "active" : ""}`}
          onClick={() => setFiltro("todos")}
        >
          Todos
        </button>

        <button
          className={`filtro__btn ${filtro === "hombre" ? "active" : ""}`}
          onClick={() => setFiltro("hombre")}
        >
          Hombre
        </button>

        <button
          className={`filtro__btn ${filtro === "mujer" ? "active" : ""}`}
          onClick={() => setFiltro("mujer")}
        >
          Mujer
        </button>

      </div>

      <div className="productos__grid">
        {filtrados.length > 0 ? (
          filtrados.map((p) => <ProductoCard key={p.id} perfume={p} />)
        ) : (
          <p>No se encontraron perfumes.</p>
        )}
      </div>

    </div>
  );
}
