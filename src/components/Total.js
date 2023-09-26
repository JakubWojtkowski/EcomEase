import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCart } from "../features/cart/cartSlice";

function Total() {
  const cart = useSelector(selectCart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    return { totalQuantity, totalPrice };
  };

  return (
    <Summary>
      Total ({getTotal().totalQuantity} items): $
      {getTotal().totalPrice.toFixed(2)}
    </Summary>
  );
}

export default Total;

const Summary = styled.div`
  padding-right: 16px;
  color: rgba(255, 255, 255, 0.5);

  hr {
    width: 100%;
    margin-bottom: 12px;
  }
`;
