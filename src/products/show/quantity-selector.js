import React from "react";
import { AppButton } from "../../components/button/button";
import { AppInput } from "../../components/input/input";
import { GoPlus, GoDash } from "react-icons/go";
import "./quantity-selector.css";

export const QuantitySelector = ({ quantity, setQuantity, max, onChange }) => (
  <div className="quantity-selector">
    <AppButton onClick={() => setQuantity((quantity) => quantity + 1)}>
      <GoPlus />
    </AppButton>
    <AppInput
      type="number"
      value={quantity}
      min="0"
      max={max}
      onChange={onChange}
      isValid={true}
    />
    <AppButton onClick={() => setQuantity((quantity) => quantity - 1)}>
      <GoDash />
    </AppButton>
  </div>
);
