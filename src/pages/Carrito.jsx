import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import "./Carrito.css";

export default function Carrito() {
  const { carrito, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  // Calcular total correctamente (precio * cantidad)
  const total = carrito.reduce((acc, p) => {
    const precioValido = Number(p.precio) || 0;
    const cantidadValida = Number(p.cantidad) || 1;
    return acc + precioValido * cantidadValida;
  }, 0);

  return (
    <div className="carrito">
      <h2 className="carrito__title">Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p className="carrito__vacio">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="carrito__lista">
            {carrito.map((p) => (
              <div className="carrito__item" key={p.uid}>
                
                {/* Imagen */}
                <img
                  src={p.imagen || "https://via.placeholder.com/120"}
                  alt={p.nombre || "Producto"}
                  className="carrito__img"
                />

                <div className="carrito__info">
                  <h3 className="carrito__nombre">{p.nombre || "Producto sin nombre"}</h3>

                  {/* Precio */}
                  <p className="carrito__precio">
                    <strong>Precio unitario:</strong>{" "}
                    ${p.precio.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
                  </p>

                  {/* Envío gratis */}
                  <div className="carrito__envio">
                    <span className="carrito__envio-icono">🚚</span>
                    <span className="carrito__envio-texto">Envío gratis</span>
                  </div>

                  {/* Cantidad */}
                  <p className="carrito__cantidad">Cantidad: {p.cantidad || 1}</p>

                  {/* Eliminar */}
                  <button
                    className="carrito__btn-eliminar"
                    onClick={() => eliminarProducto(p.uid)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="carrito__footer">
            <h3 className="carrito__total">
              Total: ${total.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
            </h3>

            <button className="carrito__btn-vaciar" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>

            <button
              className="carrito__btn-comprar"
              onClick={() => navigate("/finalizar")}
            >
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}
