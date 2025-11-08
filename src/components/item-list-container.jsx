import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import ItemList from "./item-list";
import { PacmanLoader } from "react-spinners";

function ItemListContainer() {
  const { Name } = useParams(); 
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://dummyjson.com/products";
    if (Name) url = `https://dummyjson.com/products/category/${Name}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setItems(data.products || data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [Name]);

  const handleSelectItem = (item) => {
    navigate(`/item/${item.id}`);
  };

  if (loading) {
    return (
      <div style={loaderContainerStyle}>
        <PacmanLoader color="#e055b2" loading={true} size={50} />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <ItemList items={items} onSelectItem={handleSelectItem} />
    </div>
  );
}

const loaderContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40vh",
};

export default ItemListContainer;
