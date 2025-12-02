import { Link } from "react-router";

function CarritoVacio() {
  return (
    <div className="empty-container">
      <h2 className="empty-title">Tu carrito está vacío 🐾</h2>
      <p className="empty-text">¡Explora nuestros productos para tu michi!</p>

      <Link to="/" className="empty-button">
        Ver productos
      </Link>
    </div>
  );
}

export default CarritoVacio;
