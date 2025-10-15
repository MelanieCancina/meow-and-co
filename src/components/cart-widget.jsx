function CartWidget() {
return (
    <div style={styles.container}>
    🛒 <span style={styles.badge}>12</span>
    </div>
);
}

const styles = {
container: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '1.4rem',
    color: '#b35c82',
  },
badge: {
    backgroundColor: '#b35c82',
    color: 'white',
    borderRadius: '50%',
    padding: '4px 10px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
}
  };

export default CartWidget;

