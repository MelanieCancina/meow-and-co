import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CartWidget from "./cart-widget";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"; 

function NavBar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} style={brandStyle}
          onMouseEnter={e => e.currentTarget.style.color = "#3f1f72"}
          onMouseLeave={e => e.currentTarget.style.color = "#5b2e91"}>
          Meow & Co 🐱
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown" style={navLinkStyle}>
              {categories.map(cat => (
                <NavDropdown.Item
                  onClick={() => navigate(`/category/${cat.slug}`)}
                  key={cat.slug} style={dropdownStyle}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e5d0f5"}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = "#f4eaf6"}>
                  {cat.name}
                </NavDropdown.Item>
              ))}
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
    fontFamily: "Times",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  };

  const brandStyle = {
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "1.5rem",
    color: "#5b2e91",
  };

  const navLinkStyle = {
    color: "#5b2e91",
    fontWeight: "500",
    transition: "color 0.2s ease",
  };

  const dropdownStyle = {
    backgroundColor: "#f4eaf6",
    borderRadius: "3px",
  };
  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
  };
export default NavBar;
