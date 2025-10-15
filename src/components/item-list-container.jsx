function ItemListContainer({ greeting }) {
return (
<main style={styles.main}>
    <h2 style={styles.greeting}>{greeting}</h2>
</main>
);
}

const styles = {
main: {
    marginTop: '160px',
    textAlign: 'center',
    padding: '1rem',
    fontFamily: '"Caudex", serif',
    color: '#5c4b51',
  },
greeting: {
    fontSize: '1.6rem',
  }
};

export default ItemListContainer;
