import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./item-detail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error cargando producto:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return (
      <div className="skeleton-container">
        <div className="skeleton-img"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-price"></div>
      </div>
    );
    
  }
  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;

