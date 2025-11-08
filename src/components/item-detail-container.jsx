import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ItemDetail from "./item-detail";
import { PacmanLoader } from "react-spinners";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (loading) {
    return (
      <div style={loaderContainerStyle}>
        <PacmanLoader color="#e055b2" loading={true} size={50} />
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: "#f4eaf6",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      maxWidth: "700px",
      margin: "40px auto",
    }}>
      <ItemDetail item={item} onBack={() => window.history.back()} />
    </div>
  );
}

const loaderContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40vh",
};

export default ItemDetailContainer;
