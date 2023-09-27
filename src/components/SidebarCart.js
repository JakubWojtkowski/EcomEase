import { Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { selectCart } from "../features/cart/cartSlice";
import ProductCart from "./ProductCart";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { selectUser } from "../features/user/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SidebarCart(props) {
  const [buttonText, setButtonText] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const cart = useSelector(selectCart);
  const history = useHistory();
  const user = useSelector(selectUser);

  const notify = () => toast.info("Sign in to checkout!");

  const closeSidebarCart = () => {
    isOpen && (document.body.style.overflowY = "");
    setIsOpen(false);
    props.showCart();
  };

  const handleCheckout = async () => {
    if (user.name === null) {
      notify();
    } else {
      closeSidebarCart();
      history.push("/checkout");
    }
  };

  useEffect(() => {
    cart.length === 0
      ? setButtonText("BACK TO SHOP")
      : setButtonText("CHECKOUT");
  }, [cart]);

  return (
    isOpen && (
      <Container>
        <ToastContainer />
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
              return <ProductCart item={item} key={index} />;
            })}
          </Products>

          <Button
            onClick={() => {
              buttonText === "CHECKOUT" ? handleCheckout() : closeSidebarCart();
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
    width: 50vw;
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
  font-size: clamp(1.65rem, 5vw, 3rem);
  text-align: right;
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
  padding: 24px;
  gap: 24px;
`;
