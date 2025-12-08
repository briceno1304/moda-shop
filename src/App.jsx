import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import ProductoDetalle from "./pages/ProductoDetalle";
import FinalizarCompra from "./pages/FinalizarCompra";
import Devoluciones from "./pages/Devoluciones";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/finalizar" element={<FinalizarCompra />} />
        <Route path="/devoluciones" element={<Devoluciones />} />
      </Routes>
      <Footer />
    </>
  );
}
