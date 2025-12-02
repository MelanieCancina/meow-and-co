import { useState, useContext } from "react";
import { CartContext } from "../context/cart-context";
import { useNavigate } from "react-router";

function CartWidget() {
  const [hover, setHover] = useState(false);
  const { getCartQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  const quantity = getCartQuantity();

  return (
    <div
      style={{
        ...styles.widget,
        cursor: "pointer",
        transform: hover ? "scale(1.2)" : "scale(1)",
        transition: "transform 0.2s ease-in-out",
      }}
      onClick={() => navigate("/cart")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Ver carrito">
      <span role="img" aria-label="carrito">🧺</span>
      {quantity > 0 && (
        <span style={styles.badge}>
          {quantity}
        </span>
      )}
    </div>
  );
}

const styles = {
  widget: {
    position: "relative",
    fontSize: "28px",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    backgroundColor: "#ff8ac6",
    color: "white",
    borderRadius: "50%",
    padding: "4px 8px",
    fontSize: "12px",
    fontWeight: "600",
  },
};

export default CartWidget;
