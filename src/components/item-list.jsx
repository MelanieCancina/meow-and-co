import Item from "./item";
import { Row, Col } from "react-bootstrap";

function ItemList({ items, onSelectItem }) {
  return (
    <Row 
      xs={1} sm={2} md={3} lg={4} 
      className="g-4 justify-content-center"
      style={{ marginTop: "20px" }}>
      {items.map((item) => (
        <Col key={item.id} className="d-flex justify-content-center">
          <Item item={item} onSelectItem={onSelectItem} />
        </Col>
      ))}
    </Row>
  );
}

export default ItemList;
