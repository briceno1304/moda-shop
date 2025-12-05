import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export function useCarrito() {
  const {
    carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    total,
  } = useContext(CarritoContext);

  return {
    carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    total,
  };
}
