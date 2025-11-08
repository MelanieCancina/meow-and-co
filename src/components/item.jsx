import { Card, Button } from "react-bootstrap";

function Item({ item, onSelectItem }) {
  const cardStyle = {
    backgroundColor: "#f9f0fc", 
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const imgStyle = {
    borderRadius: "10px",
    marginBottom: "15px",
    objectFit: "cover",
    maxHeight: "200px",
  };

  const buttonStyle = {
    backgroundColor: "#b08ee0",
    border: "none",
    borderRadius: "8px",
    fontWeight: 600,
    transition: "background-color 0.2s ease, transform 0.2s ease",
    cursor: "pointer",
  };

  return (
    <Card style={cardStyle} className="h-100 shadow-sm pastel-card">
      <Card.Img variant="top" src={item.thumbnail} alt={item.title} style={imgStyle}/>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className="text-muted">${item.price}</Card.Text>
        <Button style={buttonStyle} className="mt-auto" 
          onClick={() => onSelectItem(item)}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#9a70c7";
            e.currentTarget.style.transform = "scale(1.05)";}}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "#b08ee0";
            e.currentTarget.style.transform = "scale(1)";}}>
          Ver Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
