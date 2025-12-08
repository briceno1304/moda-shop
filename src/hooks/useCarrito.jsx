import { useState } from "react";

export function useCarrito() {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
  setCarrito((prev) => {
    const existe = prev.find((p) => p.id === producto.id);

    if (existe) {
      return prev.map((p) =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + producto.cantidad }
          : p
      );
    }

    // Si no existe, agregarlo con la cantidad seleccionada
    return [...prev, { ...producto }];
  });
};


  const eliminarProducto = (id) => {
    setCarrito(carrito.filter(p => p.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // ⬇️ CALCULA EL TOTAL
  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return {
    carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    total, // ⬅️ ya existe
  };
}
