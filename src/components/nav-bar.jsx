import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CartWidget from "./cart-widget";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCategories } from "../firebase/db";

function NavBar() {
  const [categorias, setCategorias] = useState([]);
  const [hovered, setHovered] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategorias(data);
      } catch (err) {
        toast.error("Error cargando categorías:", err);
      }
    };
    loadCategories();
  }, []);

  return (
    <Navbar expand="lg" variant="light" style={navbarStyle}>
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={brandStyle}>
          Meow & Co 🐱
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown
              title="Categorías"
              id="categorias-dropdown"
              style={navLinkStyle}
              menuVariant="light">
              {categorias.length > 0
                ? categorias.map((cat) => (
                    <NavDropdown.Item
                      key={cat.slug}
                      onClick={() => navigate(`/category/${cat.slug}`)}
                      onMouseEnter={() => setHovered(cat.slug)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        ...dropdownItemStyle,
                        backgroundColor: hovered === cat.slug ? "#d4a373" : "#f4eaf6",
                        color: hovered === cat.slug ? "white" : "black",
                        transform: hovered === cat.slug ? "scale(1.02)" : "scale(1)",
                      }}>
                      {cat.name}
                    </NavDropdown.Item>
                  ))
                : <NavDropdown.Item disabled style={dropdownItemStyle}>Cargando…</NavDropdown.Item>}
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const navbarStyle = {
  backgroundColor: "#e2c7f0",
  padding: "10px 20px",
  fontFamily: "Times, serif",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  zIndex: 999,
};

const brandStyle = {
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "1.7rem",
  color: "#5b2e91",
  transition: "color 0.3s ease",
};

const navLinkStyle = {
  color: "#5b2e91",
  fontWeight: 500,
  fontSize: "1rem",
};

const dropdownItemStyle = {
  borderRadius: "5px",
  padding: "10px",
  cursor: "pointer",
  transition: "all 0.25s ease",
};

export default NavBar;
