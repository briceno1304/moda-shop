import "./opiniones.css";

export default function Opiniones() {

  const opiniones = [
    {
      nombre: "Francisco Javier R",
      fecha: "22 de noviembre de 2025",
      estrellas: 5,
      comentario: "Comprado hace 4 semanas",
      utilidad: { si: 1, no: 0 }
    },
    {
      nombre: "EDGAR D",
      fecha: "29 de octubre de 2025",
      estrellas: 5,
      titulo: "PUROS CUMPLIDOS",
      comentario: "Excelente fragancia",
      utilidad: { si: 3, no: 3 }
    }
  ];

  return (
    <div className="opiniones">

      {/* Título */}
      <h2>Opiniones del artículo</h2>

      <div className="opiniones__header">
        <div className="opiniones__rating">
          <div className="estrellas">
            {"★★★★★"}
          </div>
          <p className="opiniones__score">4.8 / 5.0 • Basado en 43 opiniones</p>

          <div className="opiniones__barras">
            {[5,4,3,2,1].map((num, i) => (
              <div key={i} className="barra">
                <span>{num} estrellas</span>
                <div className="barra__fondo">
                  <div
                    className="barra__relleno"
                    style={{ width: num === 5 ? "80%" : "10%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buscador y selector */}
        <div className="opiniones__acciones">
          <input type="text" placeholder="Buscar opiniones" />

          <select>
            <option>Mayor calificación</option>
            <option>Menor calificación</option>
            <option>Más recientes</option>
          </select>
        </div>
      </div>

      <div className="opiniones__lista">
        {opiniones.map((op, i) => (
          <div key={i} className="opinion">
            <div className="estrellas mini">{"★★★★★"}</div>
            <p className="opinion__autor">{op.nombre} • {op.fecha}</p>

            {op.titulo && <h4 className="opinion__titulo">{op.titulo}</h4>}

            <p className="opinion__texto">{op.comentario}</p>

            <p className="opinion__util">
              ¿Esta opinión fue útil? 
              <b> Sí ({op.utilidad.si})</b> — 
              <b> No ({op.utilidad.no})</b>
            </p>
          </div>
        ))}
      </div>

      <button className="opiniones__btn">Escribe una opinión</button>

    </div>
  );
}
