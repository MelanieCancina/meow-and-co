import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "./config";

export const getItems = async () => {
  const snapshot = await getDocs(collection(db, "items"));
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export async function getItemsByCategory(categorySlug) {
  const itemsRef = collection(db, "items");
  const q = query(itemsRef, where("category", "==", categorySlug));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export const getItemById = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Producto no encontrado");
  }

  return { id: docSnap.id, ...docSnap.data() };
};

export const getCategories = async () => {
  const snapshot = await getDocs(collection(db, "categories"));
  return snapshot.docs.map(doc => ({
    name: doc.data().name,
    slug: doc.data().slug
  }));
};

export async function getCategoryBySlug(slug) {
  const ref = collection(db, "categories");
  const q = query(ref, where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
}
