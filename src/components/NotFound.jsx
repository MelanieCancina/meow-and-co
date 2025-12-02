import { useState } from "react";
import { Navigate } from "react-router";

export default function NotFound() {
    const [goHome, setGoHome] = useState(false);

    if (goHome) {
        return <Navigate to="/" />
    }

    return (
        <div className="notfound-container">
            <h1 className="notfound-title">404 - Página no encontrada</h1>
            <p className="notfound-text">Ups… esta página no existe o fue movida.</p>
            <button className="notfound-button" onClick={() => setGoHome(true)}>
                Volver al inicio
            </button>
        </div>
    );
}
