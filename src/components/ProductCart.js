import { Add, DeleteOutline, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCart({ item }) {
  const dispatch = useDispatch();
  const notify = () => toast.info("Item removed from cart!");

  return (
    <ProductContainer>
      <ToastContainer />
      <ProductImage>
        <Image src={item.image} />
      </ProductImage>
      <ProductDetails>
        <ProductHead>
          <ProductHeadName>
            {item.model}
            <span>by {item.name}</span>
          </ProductHeadName>

          <DeleteOutline
            onClick={() => {
              dispatch(removeFromCart(item));
              notify();
            }}
          />
        </ProductHead>

        <ProductBottom>
          <Quantity>
            <IconButton onClick={() => dispatch(decreaseQuantity(item))}>
              <Remove />
            </IconButton>
            {item.quantity}
            <IconButton onClick={() => dispatch(increaseQuantity(item))}>
              <Add />
            </IconButton>
          </Quantity>
          ${item.price}
        </ProductBottom>
      </ProductDetails>
    </ProductContainer>
  );
}

export default ProductCart;

const ProductContainer = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ProductImage = styled.div`
  flex: 0.35;
`;

const Image = styled.img`
  width: 75%;
  height: auto;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 4px;

  @media (max-width: 600px) {
    width: 60%;
  }
`;

const ProductDetails = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.9);

  .MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.9) !important;
    font-size: 24px;
    cursor: pointer;
    margin-left: 12px;
  }
`;

const ProductHeadName = styled.div`
  display: flex;
  flex-direction: column;
  span {
    padding-top: 8px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
  }
`;

const ProductBottom = styled(ProductHead)`
  align-items: center;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  font-size: clamp(16px, 2.5vw, 24px);
  gap: 8px;
  margin-right: 8px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 32px;

  .MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.5) !important;
    font-size: clamp(16px, 2.5vw, 24px);
  }
`;
