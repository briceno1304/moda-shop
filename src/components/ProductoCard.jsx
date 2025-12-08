import "./ProductoCard.css";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

export default function ProductoCard({ perfume }) {
  return (
    <div className="card">
      <img src={perfume.imagen} className="card__img" />

      <h3 className="card__title">{perfume.nombre}</h3>
      <p className="card__brand">{perfume.marca}</p>
      <p className="card__price">
  ${perfume.precio.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
</p>


      <Link to={`/producto/${perfume.id}`} className="card__btn">
        Ver detalles
      </Link>

      {/* ⭐ Calificación debajo del botón ⭐ */}
      <StarRating initial={perfume.rating || 0} />
    </div>
  );
}
