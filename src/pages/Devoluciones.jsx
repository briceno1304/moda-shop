import "./devoluciones.css";
import { useState } from "react";

export default function Devoluciones() {
  const [toast, setToast] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostrar mensaje flotante
    setToast("✔ Tu solicitud ha sido enviada. El proceso de devolución ha iniciado.");

    // Ocultar mensaje después de 4 segundos
    setTimeout(() => {
      setToast("");
    }, 4000);
  };

  return (
    <div className="devoluciones">

      {/* TOAST FLOTANTE */}
      {toast && <div className="dev__toast">{toast}</div>}

      <h1 className="dev__title">Políticas de Devolución</h1>
      <p className="dev__subtitle">
        Tu satisfacción es nuestra prioridad. Si algo no salió como esperabas, estamos aquí para ayudarte.
      </p>

      {/* TARJETAS */}
      <div className="dev__cards">
        <div className="dev__card">
          <h3>🛍️ Devoluciones por inconformidad</h3>
          <p>
            Puedes solicitar una devolución si el producto no cumplió tus expectativas,
            siempre que esté <strong>sin usar y en perfecto estado</strong> dentro de los primeros <strong>15 días</strong>.
          </p>
        </div>

        <div className="dev__card">
          <h3>📦 Producto dañado o defectuoso</h3>
          <p>
            Si tu producto llegó <strong>roto, con fuga, golpeado o con anomalías</strong>,
            la devolución es totalmente gratuita. Adjunta fotos dentro de los primeros <strong>7 días</strong>.
          </p>
        </div>

        <div className="dev__card">
          <h3>💳 Reembolso del dinero</h3>
          <p>
            Una vez recibido en nuestro almacén, tu reembolso se procesará en un plazo de
            <strong> 3 a 10 días hábiles</strong>, según tu método de pago.
          </p>
        </div>
      </div>

      {/* FORMULARIO */}
      <div className="dev__form-container">
        <h2>Solicitar Devolución</h2>

        <form className="dev__form" onSubmit={handleSubmit}>
          <label>Nombre completo</label>
          <input type="text" placeholder="Ingresa tu nombre" required />

          <label>Correo electrónico</label>
          <input type="email" placeholder="correo@ejemplo.com" required />

          <label>Código de pedido</label>
          <input type="text" placeholder="Ej. #45930221" required />

          <label>Motivo de la devolución</label>
          <select required>
            <option value="">Selecciona una opción</option>
            <option>Producto dañado</option>
            <option>Producto incorrecto</option>
            <option>El aroma no era lo esperado</option>
            <option>Llegó incompleto</option>
            <option>No me gustó / No era lo que esperaba</option>
          </select>

          <label>Especifica detalles</label>
          <textarea placeholder="Describe qué ocurrió con tu producto"></textarea>

          <label>Subir evidencia (opcional)</label>
          <input type="file" accept="image/*" />

          <button type="submit" className="dev__btn">
            Enviar solicitud
          </button>
        </form>
      </div>

      {/* INFORMACIÓN EXTRA */}
      <div className="dev__extra">
        <h3>⚠️ Importante</h3>
        <ul>
          <li>Las devoluciones por daño deben incluir fotografías del producto.</li>
          <li>No aceptamos productos vacíos, usados o manipulados.</li>
          <li>El producto debe enviarse con su empaque y accesorios originales.</li>
          <li>Los perfumes deben regresar con <strong>al menos el 90% del contenido</strong>.</li>
        </ul>
      </div>

    </div>
  );
}
