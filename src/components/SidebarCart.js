import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

function SidebarCart(props) {
  const [buttonText, setButtonText] = useState("BACK TO SHOP");
  const [isOpen, setIsOpen] = useState(true);

  const closeSidebarCart = () => {
    isOpen && (document.body.style.overflowY = "");
    setIsOpen(false);
    props.showCart();
  };

  return (
    isOpen && (
      <Container>
        <Main>
          <Text>
            <Close onClick={() => closeSidebarCart()} />
            <hr></hr>
            <Heading>
              Your cart is<br></br> currently empty.
            </Heading>
          </Text>
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

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 98;
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
  transition: width 2s ease-in-out;

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
