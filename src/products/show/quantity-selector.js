import React from "react";

export const QuantitySelector = ({ quantity, setQuantity, max, onChange }) => (
  <div>
    <button onClick={() => setQuantity((quantity) => quantity + 1)}> + </button>
    <input
      type="number"
      value={quantity}
      min="0"
      max={max}
      onChange={onChange}
    />
    <button onClick={() => setQuantity((quantity) => quantity - 1)}> - </button>
  </div>
);
