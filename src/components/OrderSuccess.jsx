import { useParams, Link } from "react-router";

function OrderSuccess() {
  const { id } = useParams();

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>💜 ¡Compra realizada con éxito!</h2>
      <p style={textStyle}>Gracias por tu compra.</p>
      <p style={textStyle}>
        <strong>ID de tu orden:</strong>
      </p>
      <p style={orderIdStyle}>{id}</p>

      <Link to="/" style={buttonStyle}>
        Volver al inicio
      </Link>
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  fontFamily: "Times New Roman, serif",
  backgroundColor: "#f4eaf6",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  maxWidth: "500px",
  margin: "60px auto",
};

const titleStyle = {
  color: "#4d3b5f",
  fontWeight: "bold",
  marginBottom: "10px",
};

const textStyle = {
  color: "#6e5294",
  fontSize: "1.1rem",
  marginBottom: "10px",
};

const orderIdStyle = {
  backgroundColor: "#fff",
  padding: "10px 15px",
  borderRadius: "8px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#4d3b5f",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  marginBottom: "25px",
  display: "inline-block",
};

const buttonStyle = {
  display: "inline-block",
  backgroundColor: "#b799de",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
  transition: "0.2s",
};

export default OrderSuccess;
