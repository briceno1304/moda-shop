import { useState, useEffect } from "react";
import "./banner.css";

const imagenes = [
  "https://images.unsplash.com/photo-1523294587484-bae6cc870010",
  "https://images.unsplash.com/photo-1585386959984-a4155223fdb9",
  "https://images.unsplash.com/photo-1585386959505-fdfbdf482066"
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="banner">
      <img src={imagenes[index]} alt="banner" className="banner__img" />
    </div>
  );
}
