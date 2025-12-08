import { perfumes } from "../data/perfumes";
import { useState } from "react";
import { useFiltro } from "../hooks/useFiltro";   // ⬅️ CUSTOM HOOK
import ProductoCard from "../components/ProductoCard";
import Banner from "../components/Banner";
import Buscador from "../components/Buscador";
import "./Productos.css";

export default function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todos");

  // ⬅️ Aquí ahora SI usamos el custom hook
  const filtrados = useFiltro(perfumes, busqueda, filtro);

  return (
    <div className="productos">

      {/* Banner */}
      <Banner />

      <h2 className="productos__title">Nuestros Perfumes</h2>

      {/* Buscador */}
      <div className="productos__buscador-wrapper">
        <Buscador onBuscar={setBusqueda} />
      </div>

      {/* Botones de filtro */}
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

      {/* Lista de productos */}
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
