import { Add, Close, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import {
  decreaseQuantity,
  increaseQuantity,
  selectCart,
} from "../features/cart/cartSlice";
import Product from "./Product";
import { IconButton } from "@mui/material";

function SidebarCart(props) {
  const [buttonText, setButtonText] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const closeSidebarCart = () => {
    isOpen && (document.body.style.overflowY = "");
    setIsOpen(false);
    props.showCart();
    console.log(cart.length === 0 ? "pusty" : "nie pusty", cart);
  };

  useEffect(() => {
    cart.length === 0
      ? setButtonText("BACK TO SHOP")
      : setButtonText("CHECKOUT");
  }, [cart]);

  return (
    isOpen && (
      <Container>
        <Main>
          <Text>
            <Close onClick={() => closeSidebarCart()} />
            <hr></hr>
            {cart.length === 0 ? (
              <Heading>
                Your cart is<br></br> currently empty.
              </Heading>
            ) : (
              <Heading>Your summary.</Heading>
            )}
          </Text>
          <Products>
            {cart?.map((item, index) => {
              return (
                <ProductContainer key={index}>
                  <Product item={item} />
                  <Quantity>
                    <IconButton
                      onClick={() => dispatch(decreaseQuantity(item))}
                    >
                      <Remove />
                    </IconButton>
                    {item.quantity}
                    <IconButton
                      onClick={() => dispatch(increaseQuantity(item))}
                    >
                      <Add />
                    </IconButton>
                  </Quantity>
                </ProductContainer>
              );
            })}
          </Products>

          <Summary>
            <hr></hr>Total ({cart.length} items): $0
          </Summary>
          <Button
            onClick={() => {
              buttonText === "CHECKOUT"
                ? console.log("checkout")
                : closeSidebarCart();
            }}
          >
            {buttonText}
          </Button>
        </Main>
      </Container>
    )
  );
}

export default SidebarCart;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 98;
  animation: ${fadeIn} 250ms ease-in-out;
`;

const Main = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  right: 0;
  width: 35vw;
  color: rgba(255, 255, 255, 0.9);
  background-color: #131921;
  z-index: 99;

  @media only screen and (max-width: 1024px) {
    width: 45vw;
  }

  @media only screen and (max-width: 768px) {
    width: 70vw;
  }
`;

const Text = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  hr {
    width: 100%;
    margin-top: 12px;
  }

  .MuiSvgIcon-root {
    font-size: 32px !important;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const Heading = styled.h1`
  margin-top: 16px;
  font-size: clamp(1.65rem, 5vw, 2.5rem);
  text-align: right;
`;

const Summary = styled.div`
  text-align: right;
  padding-right: 16px;
  color: rgba(255, 255, 255, 0.5);

  hr {
    width: 100%;
    margin-bottom: 12px;
  }
`;

const Button = styled.button`
  margin: 64px auto;
  border: 1px solid #f9f9f9;
  border-radius: 32px;
  padding: 16px 48px;
  letter-spacing: 0.5px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  background-color: #131921;
  cursor: pointer;
  font-weight: bold;
  transition: all 250ms ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #131921;
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 12px;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  place-items: center;
  padding: 8px 16px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 75%;
    margin: 0 auto;
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  gap: 8px;

  .MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.5) !important;
    font-size: 24px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 24px;

    .MuiSvgIcon-root {
      font-size: 28px;
    }
  }
`;
