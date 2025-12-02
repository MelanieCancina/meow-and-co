import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import ItemList from "./item-list";
import { PacmanLoader } from "react-spinners";
import { getItems, getItemsByCategory } from "../firebase/db";

function ItemListContainer() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryDisplay = {
    juguetes: "Juguetes 🧸",
    rascadores: "Rascadores 🐾",
    higiene: "Higiene 🛁",
    bebederosycomederos: "Bebederos y Comederos 🍽️",
    accesorios: "Accesorios 🎀",
  };

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const data = slug ? await getItemsByCategory(slug) : await getItems();
        setItems(data);
      } catch (err) {
        toast.error("Error cargando productos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [slug]);

  const handleSelectItem = (item) => {
    navigate(`/item/${item.id}`);
  };

  if (loading) {
    return (
      <div style={loaderStyle}>
        <PacmanLoader size={50} color="#b35cdb" />
      </div>
    );
  }
  if (items.length === 0) {
    return (
      <h3 className="text-center mt-5" style={{ fontFamily: "Times" }}>
        No hay productos 😿
      </h3>
    );
  }

  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <h2 className="mb-4 text-center" style={titleStyle}>
        {slug ? categoryDisplay[slug] || slug : "Todos los productos"}
      </h2>
      <ItemList items={items} onSelectItem={handleSelectItem} />
    </div>
  );
}

const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40vh",
};

const titleStyle = {
  color: "#5b2e91",
  fontFamily: "Times",
  fontWeight: "700",
};

export default ItemListContainer;
