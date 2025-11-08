import Item from "./item";
import { Row, Col } from "react-bootstrap";

function ItemList({ items, onSelectItem }) {
  const rowStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "stretch",
  };

  const colStyle = {
    display: "flex",
  };

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4" style={rowStyle}>
      {items.map((item) => (
        <Col key={item.id} style={colStyle}>
          <Item 
            item={item} 
            onSelectItem={onSelectItem} 
          />
        </Col>
      ))}
    </Row>
  );
}

export default ItemList;
