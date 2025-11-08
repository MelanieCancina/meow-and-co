import { useState } from "react";

function CartWidget() {
  const [hover, setHover] = useState(false);

  return (
    <div style={{...styles.widget, transform: hover ? "scale(1.2)" : "scale(1)",}} 
    onMouseEnter={() => setHover(true)} 
    onMouseLeave={() => setHover(false)}>
      <span role="img" aria-label="carrito">🛍️</span>
      <span style={styles.badge}>8</span>
    </div>
  );
}

const styles = {
  widget: {
    position: "relative",
    fontSize: "26px",
    cursor: "pointer",
    color: "#6a4e42",
    transition: "transform 0.2s ease",
  },
  badge: {
    position: "absolute",
    top: "-10px",
    right: "-12px",
    backgroundColor: "#d68fff",
    color: "#fff",
    borderRadius: "50%",
    padding: "3px 7px",
    fontSize: "12px",
    fontWeight: 600,
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
};

export default CartWidget;
