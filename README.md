🐱 Meow & Co - Sistema de Carrito en React con Firebase

    Este proyecto es un sistema de carrito de compras desarrollado en React, utilizando Context API para la gestión global del estado y Firebase Firestore para manejar productos, categorías y órdenes. Incluye lógica completa de agregar productos, control de stock, notificaciones, y permite realizar un checkout con creación de órdenes.

✅ Funcionalidades principales

Carrito de compras

    Agregar productos al carrito desde la lista o detalle de productos.

    Actualizar cantidades si el producto ya existe en el carrito.

    Control de stock:

    Cantidad mínima: 1

    Cantidad máxima: limitada por el stock disponible

    Incrementar o decrementar la cantidad de productos dentro del carrito.

    Eliminar productos individuales o vaciar todo el carrito.

    Mostrar la cantidad total de productos en el carrito (badge en el ícono).

Checkout y órdenes

    Formulario de compra con validación de campos obligatorios y correo válido.

    Creación de órdenes en Firebase Firestore.

    Visualización del ID de la orden al finalizar la compra.

    Mensajes de éxito o error mediante React Toastify.

Listado y detalle de productos

    Listado de productos desde Firebase Firestore.

    Filtrado por categoría.

    Página de detalle con imagen, descripción, precio y stock.

    Botón para agregar productos al carrito con control de stock.

Notificaciones con React Toastify

    Mensajes al agregar productos, eliminar productos o errores de stock.

    Los toasts se cierran automáticamente antes de mostrar uno nuevo para evitar acumulación.

Navegación

Rutas con React Router v6+:

    / → Todos los productos

    /item/:id → Detalle de producto

    /category/:slug → Productos filtrados por categoría

    /cart → Carrito

    /checkout → Checkout

    /order/:id → Confirmación de orden

    * → Página 404

🧩 Tecnologías utilizadas

    React 18+

    Context API

    Firebase Firestore

    React Toastify

    Bootstrap 5

    React Router v6

    JavaScript ES6+

    Vite

📂 Estructura del proyecto
    src/
    ├── components/
    │   ├── cart-container.jsx
    │   ├── checkout.jsx
    │   ├── item-count.jsx
    │   ├── item-detail.jsx
    │   ├── item-detail-container.jsx
    │   ├── item-list.jsx
    │   ├── item-list-container.jsx
    │   ├── NotFound.jsx
    │   ├── OrderSuccess.jsx
    │   └── nav-/bar.jsx
    ├── context/
    │   ├── cart-context.js
    │   └── cart-provider.jsx
    │   └── use-cart.jsx
    ├── firebase/
    │   ├── config.js
    │   └── db.js
    ├── App.jsx
    ├── main.jsx
    ├── App.css.jsx
    ├── README.md

🧠 Lógica principal - CartProvider
    import { useState } from "react";
    import { toast } from "react-toastify";
    import { CartContext } from "./cart-context";

    function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const getCartQuantity = () =>
        cart.reduce((acc, item) => acc + item.count, 0);

    const agregarProducto = (productoNuevo) => {
        const productoExistente = cart.find(p => p.id === productoNuevo.id);

        if (productoExistente) {
        const nuevaCantidad = productoExistente.count + productoNuevo.count;
        if (nuevaCantidad > productoNuevo.stock) {
            toast.error(`❌ Solo hay ${productoNuevo.stock} unidades disponibles`, {
            toastId: `limit-${productoNuevo.id}`,
            });
            return;
        }
        setCart(prev =>
            prev.map(p => p.id === productoNuevo.id ? { ...p, count: nuevaCantidad } : p)
        );
        } else {
        setCart(prev => [...prev, productoNuevo]);
        }

        toast.dismiss();
        toast.success("🛒 Producto agregado al carrito");
    };

    const getTotalPrice = () =>
        cart.reduce((acc, item) => acc + item.price * item.count, 0);

    const increaseItem = (id) => {
        setCart(prev =>
        prev.map(p => {
            if (p.id === id) {
            if (p.count + 1 > p.stock) {
                toast.error(`❌ Solo hay ${p.stock} unidades disponibles`);
                return p;
            }
            return { ...p, count: p.count + 1 };
            }
            return p;
        })
        );
    };

    const decreaseItem = (id) => {
        setCart(prev =>
        prev.map(p => p.id === id ? { ...p, count: Math.max(1, p.count - 1) } : p)
        );
    };

    const removeItem = (id) => setCart(prev => prev.filter(p => p.id !== id));
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
        }}
        >
        {children}
        </CartContext.Provider>
    );
    }

    export default CartProvider;

⚙ Instalación

    Clonar el repositorio:

    git clone <URL_DEL_REPOSITORIO>
    cd meow-co


    Instalar dependencias:

    npm install


    Ejecutar el proyecto:

    npm run dev

📝 Notas adicionales

    Las órdenes y productos se almacenan en Firebase Firestore.

    El estado del carrito no se guarda en localStorage (puede implementarse si se desea).

    Funciona para cualquier proyecto de e-commerce basado en React y puede ampliarse.

👤 Autora

    Proyecto desarrollado por Melanie Cancina como parte del curso de React de Coder House.