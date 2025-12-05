import { useParams } from "react-router-dom";
import { perfumes } from "../data/perfumes";
import { useState, useEffect } from "react";
import { useCarrito } from "../hooks/useCarrito";
import Opiniones from "../components/Opiniones";
import "./detalle.css";

export default function ProductoDetalle() {
  const { id } = useParams();
  const { agregarProducto } = useCarrito();

  const [perfume, setPerfume] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  const [fotoActual, setFotoActual] = useState("");
  const [mensaje, setMensaje] = useState("");

  // SELECCIONES
  const [mlSeleccionado, setMlSeleccionado] = useState("");
  const [colorSeleccionado, setColorSeleccionado] = useState("");

  // PRECIO DINÁMICO
  const [precioActual, setPrecioActual] = useState(0);

  useEffect(() => {
    const encontrado = perfumes.find((p) => p.id === parseInt(id));
    setPerfume(encontrado);

    if (encontrado) {
      setFotoActual(encontrado.fotos?.[0] || encontrado.imagen);
      setPrecioActual(encontrado.precio);
    }
  }, [id]);

  // CAMBIO DE PRECIO SEGÚN ML
  useEffect(() => {
    if (!perfume || !mlSeleccionado) return;

    const mlNumber = parseInt(mlSeleccionado.replace("ml", ""));
    const baseMl = parseInt(perfume.opcionesMililitros[0].replace("ml", ""));

    const nuevoPrecio = perfume.precio * (mlNumber / baseMl);
    setPrecioActual(nuevoPrecio);
  }, [mlSeleccionado, perfume]);

  if (!perfume) return <p>Cargando...</p>;

  return (
    <>
      {/* =======================
          SECCIÓN PRINCIPAL
      ======================= */}
      <div className="detalle">
        {/* GALERÍA */}
        <div className="detalle__galeria">
          <div className="galeria__miniaturas">
            {perfume.fotos?.map((foto, index) => (
              <img
                key={index}
                src={foto}
                alt="miniatura"
                className="miniatura"
                onMouseEnter={() => setFotoActual(foto)}
              />
            ))}
          </div>

          <img src={fotoActual} alt="" className="detalle__img" />
        </div>

        {/* INFORMACIÓN */}
        <div className="detalle__info">
          <h2 className="detalle__title">{perfume.nombre}</h2>
          <p className="detalle__brand">{perfume.marca}</p>

          <p className="detalle__desc">{perfume.descripcion}</p>

          {/* ====== SELECCIÓN DE ML ====== */}
          <div className="detalle__opcion-block">
            <p><strong>Selecciona mililitros:</strong></p>
            <div className="detalle__chips">
              {perfume.opcionesMililitros?.map((ml, i) => (
                <span
                  key={i}
                  className={`chip ${mlSeleccionado === ml ? "chip--active" : ""}`}
                  onClick={() => setMlSeleccionado(ml)}
                >
                  {ml}
                </span>
              ))}
            </div>
          </div>

          {/* ====== SELECCIÓN DE COLOR ====== */}
          <div className="detalle__opcion-block">
            <p><strong>Selecciona color:</strong></p>
            <div className="detalle__chips">
              {perfume.coloresDisponibles?.map((color, i) => (
                <span
                  key={i}
                  className={`chip ${colorSeleccionado === color ? "chip--active" : ""}`}
                  onClick={() => setColorSeleccionado(color)}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* CAMPOS ORIGINALES */}
          <p><strong>Tipo:</strong> {perfume.tipo}</p>
          <p><strong>Duración:</strong> {perfume.duracion}</p>

          <div>
            <p><strong>Tipo de piel recomendado:</strong></p>
            <ul>
              {perfume.tipoPiel?.map((t, index) => (
                <li key={index}>{t}</li>
              ))}
            </ul>
          </div>

          <p><strong>Presentación:</strong> {perfume.presentacion}</p>
          <p><strong>Código del producto:</strong> {perfume.codigo}</p>

          {/* ====== PRECIO ====== */}
          <p className="detalle__price">
            ${precioActual.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
          </p>

          {/* ====== CANTIDAD ====== */}
          <div className="detalle__cantidad">
            <button className="cantidad__btn" onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}>
              -
            </button>

            <span className="cantidad__numero">{cantidad}</span>

            <button className="cantidad__btn" onClick={() => setCantidad(cantidad + 1)}>
              +
            </button>
          </div>

          {/* ====== BOTÓN AGREGAR ====== */}
          <button
            className="detalle__btn"
            onClick={() => {
              if (!mlSeleccionado) {
                setMensaje("Selecciona un tamaño (ml)");
                return;
              }
              if (!colorSeleccionado) {
                setMensaje("Selecciona un color");
                return;
              }

              agregarProducto({
                ...perfume,
                uid: Date.now() + Math.random(),
                precio: precioActual,
                cantidad,
                ml: mlSeleccionado,
                color: colorSeleccionado,
              });

              setMensaje("Producto agregado al carrito ✔");
              setTimeout(() => setMensaje(""), 2000);
            }}
          >
            Agregar al carrito
          </button>

          {mensaje && <p className="detalle__mensaje">{mensaje}</p>}
        </div>
      </div>

      {/* =======================
          SECCIÓN DE OPINIONES
      ======================= */}
      <div className="detalle__opiniones">
        <Opiniones idProducto={id} />
      </div>
    </>
  );
}
