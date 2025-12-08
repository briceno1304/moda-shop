import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "./finalizar.css";

export default function FinalizarCompra() {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
//16 digitos de tarjeta //
const handleTarjeta = (e) => {
  let value = e.target.value;

  // Solo números
  value = value.replace(/\D/g, "");

  // Limitar a 16 dígitos reales
  if (value.length > 16) value = value.slice(0, 16);

  // Formatear cada 4 dígitos
  const formato = value.replace(/(.{4})/g, "$1 ").trim();

  setForm({
    ...form,
    tarjetaNumero: formato
  });
};

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    direccion: "",
    referencias: "",
    codigoPostal: "",
    entregaDia: "",
    pago: "",
    tarjetaNumero: "",
    tarjetaCVV: "",
    tarjetaFecha: "",
    tarjetaTipo: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  // Toast flotante
  const [toast, setToast] = useState("");

  const total = carrito.reduce(
    (acc, p) => acc + p.precio * (p.cantidad || 1),
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.nombre ||
      !form.email ||
      !form.direccion ||
      !form.codigoPostal ||
      !form.entregaDia ||
      !form.pago
    ) {
      setError("Todos los campos son obligatorios.");
      setMensaje("");
      return;
    }

    if (form.pago === "tarjeta") {
      if (
        !form.tarjetaNumero ||
        !form.tarjetaCVV ||
        !form.tarjetaFecha ||
        !form.tarjetaTipo
      ) {
        setError("Debes completar todos los datos de tu tarjeta.");
        return;
      }
    }

    setError("");
    setMensaje("¡Compra realizada con éxito! 🎉 Gracias por tu pedido.");

    // Mostrar notificación flotante
    setToast("✨ Tu pedido ha sido confirmado y está siendo enviado 🚚📦");

    vaciarCarrito();

    // Quitar toast después de 4 segundos
    setTimeout(() => setToast(""), 4000);
  };

  return (
    <div className="finalizar">

      {/* TOAST */}
      <>
  {/* TOAST - flotante arriba */}
  {toast && <div className="toast">{toast}</div>}

  <div>
    <h2 className="finalizar__title">Finalizar compra</h2>

    {/* resto del formulario */}
  </div>
</>

      {carrito.length === 0 ? (
        <p className="finalizar__vacio">No tienes productos en el carrito.</p>
      ) : (
        <>
          <div className="finalizar__resumen">
            <h3>🧾 Resumen del pedido</h3>
            <ul>
              {carrito.map((p) => (
                <li key={p.uid || p.id}>
                  {p.nombre} — {p.cantidad || 1} × $
                  {p.precio.toLocaleString("es-MX")}
                </li>
              ))}
            </ul>

            <h3 className="finalizar__total">
              Total: <span>${total.toLocaleString("es-MX")}</span>
            </h3>
          </div>

          <form className="finalizar__form" onSubmit={handleSubmit}>
            <label>
              Nombre completo:
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Dirección de envío:
              <input
                type="text"
                name="direccion"
                value={form.direccion}
                onChange={handleChange}
              />
            </label>

            <label>
              Código postal:
              <input
                type="text"
                name="codigoPostal"
                maxLength="5"
                value={form.codigoPostal}
                onChange={handleChange}
              />
            </label>

            <label>
              Referencias:
              <input
                type="text"
                name="referencias"
                placeholder="Color de puerta, local cercano, etc."
                value={form.referencias}
                onChange={handleChange}
              />
            </label>

            <label>
              Día de entrega deseado:
              <select name="entregaDia" value={form.entregaDia} onChange={handleChange}>
                <option value="">Selecciona uno</option>
                <option value="lunes">Lunes</option>
                <option value="martes">Martes</option>
                <option value="miercoles">Miércoles</option>
                <option value="jueves">Jueves</option>
                <option value="viernes">Viernes</option>
                <option value="sabado">Sábado</option>
              </select>
            </label>

            <label>
              Método de pago:
              <select name="pago" value={form.pago} onChange={handleChange}>
                <option value="">Selecciona uno</option>
                <option value="tarjeta">Tarjeta</option>
                <option value="oxxo">Pago en OXXO</option>
                <option value="paypal">PayPal</option>
              </select>
            </label>

            {form.pago === "tarjeta" && (
              <div className="tarjeta__extra">
                <label>
  Número de tarjeta:
  <input
    type="text"
    name="tarjetaNumero"
    placeholder="1234 5678 9012 3456"
    value={form.tarjetaNumero}
    onChange={handleTarjeta}
    maxLength="19"  // 16 dígitos + 3 espacios
  />
</label>


                <label>
                  CVV:
                  <input
                    type="text"
                    name="tarjetaCVV"
                    maxLength="3"
                    placeholder="123"
                    value={form.tarjetaCVV}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Fecha (MM/AA):
                  <input
                    type="text"
                    name="tarjetaFecha"
                    placeholder="MM/AA"
                    maxLength="5"
                    value={form.tarjetaFecha}
                    onChange={handleChange}
                  />
                </label>

                <div className="tarjeta__tipos">
                  <p><strong>Tipo de tarjeta:</strong></p>

                  <div className="tarjeta__opciones">
                    <div
                      className={`tarjeta__opcion ${form.tarjetaTipo === "visa" ? "activa" : ""}`}
                      onClick={() => setForm({ ...form, tarjetaTipo: "visa" })}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
                      <span>Visa</span>
                    </div>

                    <div
                      className={`tarjeta__opcion ${form.tarjetaTipo === "mastercard" ? "activa" : ""}`}
                      onClick={() => setForm({ ...form, tarjetaTipo: "mastercard" })}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" />
                      <span>MasterCard</span>
                    </div>

                    <div
                      className={`tarjeta__opcion ${form.tarjetaTipo === "amex" ? "activa" : ""}`}
                      onClick={() => setForm({ ...form, tarjetaTipo: "amex" })}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" />
                      <span>American Express</span>
                    </div>

                    <div
                      className={`tarjeta__opcion ${form.tarjetaTipo === "mercadopago" ? "activa" : ""}`}
                      onClick={() => setForm({ ...form, tarjetaTipo: "mercadopago" })}
                    >
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALMYkCVu-ofjL4z3_-NtPFgp5Vzlh_Tv9KA&s" alt="Mercado Pago" />
                      <span>Mercado Pago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {error && <p className="finalizar__mensaje error">{error}</p>}
            {mensaje && <p className="finalizar__mensaje success">{mensaje}</p>}

            <button type="submit" className="finalizar__btn">
              Confirmar compra
            </button>
          </form>
        </>
      )}
    </div>
  );
}
