import { useCart } from "../context/use-cart";
import { ListGroup, Image } from "react-bootstrap";
import CarritoVacio from "./empty-cart";
import { useNavigate } from "react-router";

function CartContainer() {
    const {
        cart,
        removeItem,
        increaseItem,
        decreaseItem,
        clearCart,
        getTotalPrice,
    } = useCart();

    const navigate = useNavigate();

    if (!cart || cart.length === 0) {
        return <CarritoVacio />;
    }

    return (
        <div className="cart-container d-flex flex-column justify-content-center align-items-center mt-4">
            <h2>Tu carrito</h2>

            <ListGroup style={{ width: "80%", maxWidth: "550px", gap: "15px" }}>
                {cart.map((prod) => (
                    <ListGroup.Item
                        key={prod.id}
                        className="d-flex gap-4 align-items-center cart-list-item">
                        <div>
                            <span className="cart-price">
                                ${Number(prod.price) * Number(prod.count) || 0}
                            </span>
                        </div>

                        <Image
                            src={prod.thumbnail}
                            roundedCircle
                            style={{
                                width: "65px",
                                height: "65px",
                                objectFit: "cover",
                            }}
                        />

                        <div className="flex-grow-1">
                            <strong>{prod.title}</strong>
                            <br />
                            Cantidad: {prod.count}
                        </div>

                        <div className="d-flex gap-2">
                            <button
                                className="btn btn-purple-outline btn-circle"
                                onClick={() => decreaseItem(prod.id)}>
                                –
                            </button>

                            <button
                                className="btn btn-purple-outline btn-circle"
                                onClick={() => increaseItem(prod.id)}>
                                +
                            </button>

                            <button
                                className="btn btn-delete btn-sm"
                                onClick={() => removeItem(prod.id)}>
                                Eliminar
                            </button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <h3 className="mt-3">Total: ${getTotalPrice().toFixed(2)}</h3>

            <div className="d-flex justify-content-center gap-3 mt-4 cart-buttons">
                <button
                    className=" btn-purple custom"
                    onClick={() => navigate("/")}>
                    Ver más productos
                </button>

                <button className="btn btn-warning custom" onClick={clearCart}>
                    Vaciar carrito
                </button>

                <button
                    className="btn btn-success custom"
                    onClick={() => navigate("/checkout")}>
                    Finalizar compra
                </button>
            </div>
        </div>
    );
}

export default CartContainer;
