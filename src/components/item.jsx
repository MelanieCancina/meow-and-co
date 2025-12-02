import React from "react";

function Item({ item, onSelectItem }) {
  return (
    <div className="item-card-hover">
      <img src={item.thumbnail} alt={item.title} className="item-image" />
      <h3 className="item-title">{item.title}</h3>
      <p className="item-price">${item.price}</p>
      <button
        onClick={() => onSelectItem(item)}
        className="btn-item-hover">
        Ver detalle
      </button>
    </div>
  );
}

export default Item;
