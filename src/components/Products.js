import { FavoriteBorderOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function Products() {
  return (
    <Container>
      <Product>
        <ImageContainer>
          <FavoriteBorderOutlined />
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>iPhone 14</Heading>
        <Description>Mobile phone</Description>
        <Price>$699</Price>
        <Button>Add to chart</Button>
      </Product>

      <Product>
        <ImageContainer>
          <FavoriteBorderOutlined />
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>iPhone 14</Heading>
        <Description>Mobile phone</Description>
        <Price>$699</Price>
        <Button>Add to chart</Button>
      </Product>

      <Product>
        <ImageContainer>
          <FavoriteBorderOutlined />
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>iPhone 14</Heading>
        <Description>Mobile phone</Description>
        <Price>$699</Price>
        <Button>Add to chart</Button>
      </Product>

      <Product>
        <ImageContainer>
          <FavoriteBorderOutlined />
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt="product jpg"
          />
        </ImageContainer>
        <Heading>iPhone 14</Heading>
        <Description>Mobile phone</Description>
        <Price>$699</Price>
        <Button>Add to chart</Button>
      </Product>
    </Container>
  );
}

export default Products;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  place-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 18vw;
  border-radius: 8px;
  border: 1px solid #000;
  position: relative;
  padding: 4px 8px;
`;

const Heading = styled.span``;

const Description = styled.span``;

const ImageContainer = styled.div`
  .MuiSvgIcon-root {
    cursor: pointer;
    font-size: 28px !important;
    position: absolute;
    top: 4px;
    right: 4px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Price = styled.span``;

const Button = styled.button`
  cursor: pointer;
`;
