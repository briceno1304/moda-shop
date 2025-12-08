import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { perfumes } from "../data/perfumes";
import "./Home.css";

export default function Home() {
  const destacados = perfumes.slice(0, 3);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Perfumes Exclusivos</h1>
          <p className="hero__subtitle">
            Fragancias de lujo diseñadas para destacar tu personalidad.
          </p>

          <Link to="/productos" className="hero__button">
            Explorar perfumes
          </Link>
        </div>

        <div className="hero__image">
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f"
            alt="Perfume principal"
          />
        </div>
      </section>

      {/* POR QUÉ COMPRAR CON NOSOTROS */}
      <section className="reasons">
        <h2 className="section__title">¿Por qué comprar con nosotros?</h2>

        <div className="reasons__grid">
          <div className="reason">
            <img src="https://cdn-icons-png.flaticon.com/512/891/891419.png" alt="Original" />
            <h3>100% Originales</h3>
            <p>Todos nuestros perfumes cuentan con autenticidad garantizada.</p>
          </div>

          <div className="reason">
            <img src="https://cdn-icons-png.flaticon.com/512/929/929430.png" alt="Entrega" />
            <h3>Entrega Rápida</h3>
            <p>Recibe tus perfumes en tiempo récord, directo hasta tu puerta.</p>
          </div>

          <div className="reason">
            <img src="https://cdn-icons-png.flaticon.com/512/992/992703.png" alt="Precio" />
            <h3>Mejores Precios</h3>
            <p>Ofertas exclusivas y precios accesibles.</p>
          </div>
        </div>
      </section>

      {/* CALIDAD */}
      <section className="quality">
        <h2 className="section__title">Calidad de Nuestros Perfumes</h2>

        <p className="quality__text">
          Trabajamos únicamente con proveedores certificados, utilizando fragancias de larga duración
          y aceites esenciales premium.
        </p>

        <div className="quality__images">
          <img src="https://media.gq.com.mx/photos/60ca240e433a17b3712565c7/master/pass/perfumes-1253039441.jpg" />
          <img src="https://media.gq.com.mx/photos/66311f404709e34c71051c96/master/w_2560%2Cc_limit/Perfume.jpg" />
          <img src="https://images.unsplash.com/photo-1525286116112-b59af11adad1" />
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="products">
        <h2 className="section__title">Productos Destacados</h2>

        <div className="products__grid">
          {destacados.map((p) => (
            <div key={p.id} className="product">
              <img src={p.imagen} alt={p.nombre} />
              <h3>{p.nombre}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonials">
        <h2 className="section__title">Opiniones de Clientes</h2>

        <div className="testimonials__grid">
          <div className="testimonial">
            <p>"Excelente calidad, huele igual que en la tienda oficial."</p>
            <span>- Ana G.</span>
          </div>

          <div className="testimonial">
            <p>"Me llegó muy rápido y el aroma dura todo el día."</p>
            <span>- Carlos M.</span>
          </div>

          <div className="testimonial">
            <p>"Me ayudaron a elegir el perfume ideal."</p>
            <span>- Valeria R.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
