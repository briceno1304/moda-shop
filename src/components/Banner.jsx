import { useState, useEffect } from "react";
import "./banner.css";

const imagenes = [
  "https://t4.ftcdn.net/jpg/08/45/58/95/360_F_845589551_oQ6t6F8wRbFUPE2VCIYVS8FevbTkezLl.jpg",
  "https://www.shutterstock.com/image-photo/stylish-young-couple-perfume-on-260nw-2184955419.jpg",
  "https://www.shutterstock.com/image-photo/different-perfume-bottles-sampler-on-260nw-1241156392.jpg"
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
