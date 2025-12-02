import { useContext, useState } from "react";
import { CartContext } from "../context/cart-context";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function Checkout() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.address) {
      toast.dismiss();
      toast.error("Completa todos los campos obligatorios 💌");
      return;
    }

    if (!validateEmail(buyer.email)) {
      toast.dismiss();
      toast.error("Ingresa un correo válido 📧");
      return;
    }

    setLoading(true);
    const order = {
      buyer,
      items: cart,
      date: new Date(),
      total: getTotalPrice(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);

      toast.dismiss();
      toast.success("Compra realizada con éxito 💜");

      const orderId = docRef.id;

      clearCart();
      navigate(`/order/${orderId}`);

    } catch (error) {
      toast.dismiss();
      toast.error("Error al procesar la compra ❌");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0)
    return <h2 className="text-center my-5">Tu carrito está vacío 🛍️</h2>;

  return (
    <div className="checkout-wrapper">
      <div className="checkout-container">
        <h2>Finalizar compra</h2>
        <h3>Complete los siguientes datos</h3>
        <h4>Total: ${getTotalPrice().toFixed(2)}</h4>

        <form onSubmit={handleSubmit} className="mt-4">

          <input
            type="text"
            name="name"
            placeholder="Nombre completo *"
            className="checkout-input"
            onChange={handleChange}
            value={buyer.name}
          />

          <input
            type="email"
            name="email"
            placeholder="Correo *"
            className="checkout-input"
            onChange={handleChange}
            value={buyer.email}
          />

          <input
            type="text"
            name="address"
            placeholder="Dirección *"
            className="checkout-input"
            onChange={handleChange}
            value={buyer.address}
          />

          <input
            type="text"
            name="phone"
            placeholder="Teléfono (opcional)"
            className="checkout-input"
            onChange={handleChange}
            value={buyer.phone}
          />

          <button
            className="checkout-btn"
            type="submit"
            disabled={loading}>
            {loading ? "Procesando..." : "Finalizar compra"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
