import { useState } from "react";

export default function Buscador({ onBuscar }) {
  const [texto, setTexto] = useState("");

  return (
    <input
      type="text"
      placeholder="Buscar perfume..."
      value={texto}
      onChange={(e) => {
        setTexto(e.target.value);
        onBuscar(e.target.value);
      }}
    />
  );
}
