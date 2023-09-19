import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

function Product({ item }) {
  const [favorite, SetFavorite] = useState(false);

  return (
    <ProductCard>
      <IconButton onClick={() => SetFavorite(!favorite)}>
        {favorite === true ? <Favorite /> : <FavoriteBorderOutlined />}
      </IconButton>
      <ImageContainer>
        <Image src={item.image} alt="item image" />
      </ImageContainer>
      <Heading>{item.model}</Heading>
      <Description>{item.category}</Description>
      <Price>${item.price}</Price>
    </ProductCard>
  );
}

export default Product;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  position: relative;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;

  .MuiButtonBase-root {
    display: none;
    cursor: pointer;
    font-size: 28px !important;
    position: absolute;
    top: 8px;
    right: 8px;
    border-radius: 8px;
    background: white;
    padding: 4px;
    color: orange;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.125) 0 0 0.3rem;

    .MuiButtonBase-root {
      display: block;
    }
  }
`;

const Heading = styled.span`
  font-weight: bold;
`;

const Description = styled.span`
  color: rgba(0, 0, 0, 0.6);
`;

const ImageContainer = styled.div`
  border-radius: 8px;
  padding: 20px;
  width: 65%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Price = styled.span`
  font-weight: bold;
  padding-top: 10px;
`;
