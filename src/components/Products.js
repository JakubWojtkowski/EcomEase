import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

function Products() {
  const [favorite, SetFavorite] = useState(false);

  return (
    <Container>
      <Product>
        <IconButton onClick={() => SetFavorite(!favorite)}>
          {favorite === true ? <Favorite /> : <FavoriteBorderOutlined />}
        </IconButton>
        <ImageContainer>
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>Apple iPhone 14</Heading>
        <Description>Electronics</Description>
        <Price>$699</Price>
      </Product>

      <Product>
        <IconButton>
          <FavoriteBorderOutlined />
        </IconButton>
        <ImageContainer>
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>Apple iPhone 14</Heading>
        <Description>Electronics</Description>
        <Price>$699</Price>
      </Product>

      <Product>
        <IconButton>
          <FavoriteBorderOutlined />
        </IconButton>
        <ImageContainer>
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>Apple iPhone 14</Heading>
        <Description>Electronics</Description>
        <Price>$699</Price>
      </Product>

      <Product>
        <IconButton>
          <FavoriteBorderOutlined />
        </IconButton>
        <ImageContainer>
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>Apple iPhone 14</Heading>
        <Description>Electronics</Description>
        <Price>$699</Price>
      </Product>

      <Product>
        <IconButton>
          <FavoriteBorderOutlined />
        </IconButton>
        <ImageContainer>
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>Apple iPhone 14</Heading>
        <Description>Electronics</Description>
        <Price>$699</Price>
      </Product>

      <Product>
        <IconButton>
          <FavoriteBorderOutlined />
        </IconButton>
        <ImageContainer>
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>Apple iPhone 14</Heading>
        <Description>Electronics</Description>
        <Price>$699</Price>
      </Product>

      <Product>
        <IconButton>
          <FavoriteBorderOutlined />
        </IconButton>
        <ImageContainer>
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>Apple iPhone 14</Heading>
        <Description>Electronics</Description>
        <Price>$699</Price>
      </Product>

      <Product>
        <IconButton>
          <FavoriteBorderOutlined />
        </IconButton>
        <ImageContainer>
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>Apple iPhone 14</Heading>
        <Description>Electronics</Description>
        <Price>$699</Price>
      </Product>
    </Container>
  );
}

export default Products;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  place-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
    border: 1px solid #efefef;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;

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
