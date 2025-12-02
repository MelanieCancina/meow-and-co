import { useState } from "react";
import ItemCount from "../components/item-count";
import { Link } from "react-router";

function ItemDetail({ item }) {
  const [added, setAdded] = useState(false);
  const handleAdd = () => {
    setAdded(true);
  };

  return (
    <div style={containerStyle}>
      <img src={item.thumbnail} alt={item.title} style={imageStyle} />
      <h2 style={titleStyle}>{item.title}</h2>
      <p style={descStyle}>{item.description}</p>
      <h3 style={priceStyle}>Precio: ${item.price}</h3>

      {item.stock === 0 ? (
        <p style={{ color: "red", fontWeight: "bold" }}>❌ Sin stock disponible</p>
      ) : added ? (
        <>
          <p style={{ fontWeight: "bold", color: "#4d3b5f" }}>Producto agregado ✔</p>
          <Link to="/cart">
            <button style={backButtonStyle}>Ir al carrito</button>
          </Link>
        </>
      ) : (
        <ItemCount stock={item.stock} initial={1} item={item} onAdd={handleAdd} />
      )}

      <button style={backButtonStyle} onClick={() => window.history.back()}>
        Volver
      </button>
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  fontFamily: "Times, serif",
  backgroundColor: "#f4eaf6",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  maxWidth: "500px",
  margin: "40px auto",
};

const imageStyle = {
  width: "100%",
  maxWidth: "300px",
  borderRadius: "12px",
  marginBottom: "20px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

const titleStyle = {
  color: "#4d3b5f",
  fontWeight: 700,
  marginBottom: "10px",
};

const priceStyle = {
  color: "#5b4773",
  fontSize: "1.2rem",
  marginBottom: "10px",
};

const descStyle = {
  color: "#6e5294",
  fontSize: "1rem",
  marginBottom: "20px",
};

const backButtonStyle = {
  backgroundColor: "#b799de",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "8px 20px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "0.2s",
  marginTop: "15px",
};

export default ItemDetail;
