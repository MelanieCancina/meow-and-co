import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);

  return (
    <div style={styles.container}>
      <div style={styles.counter}>
        <button
          style={styles.button}
          onClick={decrease}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#cbb2e5"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>
          -
        </button>
        <span style={styles.count}>{count}</span>
        <button
          style={styles.button}
          onClick={increase}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#cbb2e5"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>
          +
        </button>
      </div>
      <button
        style={styles.addButton}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#a88cd4"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#b799de"}
        onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}

const styles = {
  container: { 
    textAlign: "center", 
    fontFamily: "'Times New Roman', Times, serif",
    marginTop: "15px" },
  counter: { 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    gap: "10px", 
    marginBottom: "15px" },
  button: {
    border: "2px solid #a88cd4",
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    fontSize: "18px",
    fontWeight: 600,
    backgroundColor: "transparent",
    color: "#6e5294",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  count: { 
    fontSize: "1.2rem", 
    fontWeight: 600, 
    width: "40px", 
    textAlign: "center", 
    color: "#4d3b5f" },
  addButton: {
    backgroundColor: "#b799de",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 20px",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
};

export default ItemCount;
