import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCart } from "../features/cart/cartSlice";
import ProductCart from "./ProductCart";
import Total from "./Total";
import { selectUserName } from "../features/user/userSlice";

function Checkout() {
  const cart = useSelector(selectCart);
  const username = useSelector(selectUserName);

  const createCheckout = () => {
    console.log("Processing...");
  };

  return (
    <Container>
      <Cart>
        <LeftCart>
          {cart.map((item, index) => (
            <ProductCart item={item} key={index} />
          ))}
        </LeftCart>
        <RightCart>
          <Heading>Your summary {username}</Heading>
          <Total />
          <ProceedBtn onClick={createCheckout}>Proceed</ProceedBtn>
        </RightCart>
      </Cart>
    </Container>
  );
}

export default Checkout;

const Container = styled.div``;

const Cart = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 50px auto;
  width: 90vw;
  border-radius: 16px;
  background: #232f3e;
`;

const LeftCart = styled.div`
  flex: 0.65;
  padding: 16px;
`;

const RightCart = styled(LeftCart)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 0.35;
`;

const Heading = styled.h3`
  color: rgba(255, 255, 255, 0.9);
`;

const ProceedBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff9900;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ff9900;
  border-radius: 8px;
  padding: 4px 8px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 0.25px;
  transition: all 250ms ease-in-out;
  margin-top: 16px;

  &:hover {
    background: #fefefe;
    color: #ff9900;
  }
`;
