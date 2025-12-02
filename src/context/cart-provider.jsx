import { useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "./cart-context";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const getCartQuantity = () =>
    cart.reduce((acc, item) => acc + item.count, 0);
  const agregarProducto = (productoNuevo) => {
  const productoExistente = cart.find((p) => p.id === productoNuevo.id);

  if (productoExistente) {
    const nuevaCantidad = productoExistente.count + productoNuevo.count;

    if (nuevaCantidad > productoNuevo.stock) {
      toast.error(`❌ Solo hay ${productoNuevo.stock} unidades disponibles`, {
        toastId: `limit-${productoNuevo.id}`,
      });
      return;
    }

    setCart((prev) =>
      prev.map((p) =>
        p.id === productoNuevo.id
          ? { ...p, count: nuevaCantidad }
          : p
      )
    );
  } else {
    setCart((prev) => [...prev, productoNuevo]);
  }

  toast.success("🛒 Producto agregado al carrito");
};


  const getTotalPrice = () =>
    cart.reduce((acc, item) => {
      const price = Number(item.price);
      const count = Number(item.count);
      return acc + price * count;
    }, 0);

  const increaseItem = (id) => {
    setCart((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          if (p.count + 1 > p.stock) {
            toast.dismiss("limit-stock");
            toast.error(`❌ Solo hay ${p.stock} unidades disponibles`), {
                        toastId: "stock-limit",
                        };
            return p;
          }
          return { ...p, count: p.count + 1 };
        }
        return p;
      })
    );
  };

  const decreaseItem = (id) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: Math.max(1, p.count - 1) } : p
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarProducto,
        getCartQuantity,
        getTotalPrice,
        increaseItem,
        decreaseItem,
        removeItem,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
