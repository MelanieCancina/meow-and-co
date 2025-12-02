import { useContext, useState } from "react";
import { CartContext } from "../context/cart-context";
import { useNavigate } from "react-router";

function ItemCount({ stock, initial = 1, item }) {
  const [count, setCount] = useState(stock > 0 ? initial : 0);
  const [added, setAdded] = useState(false);
  const { agregarProducto } = useContext(CartContext);
  const navigate = useNavigate();

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = () => {
    agregarProducto({ ...item, count }, stock);
    setAdded(true);
  };

  if (added) {
    return (
      <div className="itemcount-container">
        <button
          className="itemcount-addButton"
          onClick={() => navigate("/cart")}
          style={{ marginTop: "15px" }}>
          Ir al carrito 🛒
        </button>
      </div>
    );
  }

  return (
    <div className="itemcount-container">
      <button className="itemcount-stock" disabled>
        Stock: {stock}
      </button>

      <div className="itemcount-counter">
        <button
          className="itemcount-button"
          onClick={decrease}
          disabled={stock === 0}>
          -
        </button>

        <span className="itemcount-count">{count}</span>

        <button
          className="itemcount-button"
          onClick={increase}
          disabled={stock === 0}>
          +
        </button>
      </div>

      <button
        className="itemcount-addButton"
        onClick={handleAddToCart}
        disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
