import { useState, useEffect } from 'react';
import CartWidget from './cart-widget';

function NavBar() {
const [menuOpen, setMenuOpen] = useState(false);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

const toggleMenu = () => setMenuOpen(!menuOpen);

useEffect(() => {
const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) setMenuOpen(false);
};
window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
}, []);

return (
<nav style={styles.nav}>
    <h1 style={styles.logo}>Meow & Co 🐾</h1>

    {isMobile && (
    <button onClick={toggleMenu} style={styles.burger}>☰</button>
    )}

    <ul style={styles.menu(isMobile, menuOpen)}>
    <li><a href="#" style={styles.link}>Accesorios</a></li>
    <li><a href="#" style={styles.link}>Camas</a></li>
    <li><a href="#" style={styles.link}>Comederos</a></li>
    <li><a href="#" style={styles.link}>Juguetes</a></li>
    <li><a href="#" style={styles.link}>Contacto</a></li>
    <li><CartWidget /></li>
    </ul>
</nav>
);
}

const styles = {
nav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fde4ec',
    padding: '15px 60px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '95%',
    fontFamily: '"Times New Roman"',
    zIndex: 1000,
  },
logo: {
    fontSize: '2rem',
    color: '#b35c82',
    fontWeight: 'bold',
  },
    burger: {
    fontSize: '1.8rem',
    background: 'none',
    border: 'none',
    color: '#b35c82',
    cursor: 'pointer',
    marginTop: '10px',
  },
links: {
    listStyle: 'none',
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
link: {
    textDecoration: 'none',
    color: '#b35c82',
    fontWeight: '600',
    transition: 'color 0.3s',
  },

    menu: (isMobile, menuOpen) => ({
    ...styles.links,
    flexDirection: isMobile ? 'column' : 'row',
    display: isMobile && !menuOpen ? 'none' : 'flex',
    marginTop: isMobile ? '10px' : '0',
  }),
};

export default NavBar;
