import ItemCount from "./item-count";

function ItemDetail({ item, onBack }) {
  const handleAdd = (cantidad) => alert(`Agregaste ${cantidad} items al carrito`);

  return (
    <div style={styles.container}>
      <img src={item?.thumbnail} alt={item?.title} style={styles.image}/>
      <h3 style={styles.title}>{item?.title}</h3>
      <p style={styles.price}>${item?.price}</p>
      <p style={styles.description}>{item?.description}</p>
      
      <ItemCount stock={item?.stock || 10} initial={1} onAdd={handleAdd} />
      
      <button
        style={styles.backButton}
        onClick={onBack}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#a88cd4"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#b799de"}
      >
        Volver
      </button>
    </div>
  );
}

const styles = {
  container: { 
    textAlign: "center", 
    fontFamily: "'Times New Roman', Times, serif", 
    backgroundColor: "#f4eaf6", 
    padding: "20px", 
    borderRadius: "12px", 
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)", 
    maxWidth: "500px", 
    margin: "40px auto" 
  },
  image: { 
    width: "100%", 
    maxWidth: "300px", 
    borderRadius: "12px", 
    marginBottom: "20px", 
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)" 
  },
  title: { color: "#4d3b5f", fontWeight: 700, marginBottom: "10px" },
  price: { color: "#5b4773", fontSize: "1.2rem", marginBottom: "10px" },
  description: { color: "#6e5294", fontSize: "1rem", marginBottom: "20px" },
  backButton: {
    backgroundColor: "#b799de",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 20px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    marginTop: "15px",
  },
};

export default ItemDetail;
