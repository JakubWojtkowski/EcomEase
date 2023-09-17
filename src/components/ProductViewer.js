import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";

function ProductViewer() {
  return (
    <Container>
      <Upper>
        <Path>
          EcomEase / electronics / mobile phones /{" "}
          <b>Apple iPhone 14 128GB silver</b>
        </Path>
      </Upper>

      <Main>
        <Product>
          <Image
            src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png"
            alt=""
          />
        </Product>
        <ProductDescription>
          <Heading>Apple iPhone 14 128GB silver</Heading>
          <Description>
            Choose a phone whose battery does not need to be recharged even if
            it is used intensively all day long - choose the Apple iPhone 14
            model. It is distinguished by high efficiency thanks to the A15
            Bionic processor and excellent image quality thanks to the Super
            Retina XDR OLED display.
          </Description>
          <hr></hr>
          <Ratings>Ratings: 4.26 / 5 (209)</Ratings>
          <Quantity>
            <QuantityButton>
              <IconButton>
                <Remove />
              </IconButton>
              1
              <IconButton>
                <Add />
              </IconButton>
            </QuantityButton>
            <QuantityText>
              Only<span> 12 items </span> left!
              <br></br> Don't miss it.
            </QuantityText>
          </Quantity>
          <AddToCartBtn>Add to Cart</AddToCartBtn>
        </ProductDescription>
      </Main>

      <Bottom></Bottom>
    </Container>
  );
}

export default ProductViewer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 50px auto;
  width: 90vw;
  color: #303030;
`;

const Upper = styled.div``;

const Path = styled.div`
  color: rgba(0, 0, 0, 0.7);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Product = styled.div`
  padding: 64px;
  background: #f9f5f6;
  border-radius: 16px;

  @media only screen and (max-width: 768px) {
    height: auto;
    width: 75%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  hr {
    opacity: 0.25;
  }
`;

const Heading = styled.h2`
  letter-spacing: 0.5px;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 1.75;
`;

const Ratings = styled.span``;

const Quantity = styled.div`
  display: flex;
  gap: 20px;
`;

const QuantityText = styled.div`
  span {
    color: orange;
  }
`;

const QuantityButton = styled.div`
  background: #f9f5f6;
  width: 140px;
  border-radius: 32px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px 8px;

  ${
    "" /* .Mui {
    cursor: pointer;
  } */
  }
`;

const AddToCartBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 42px;
  background: orange;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid orange;
  border-radius: 32px;
  margin: 40px 0;
  padding: 2px 4px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 0.25px;
  font-size: 14px;
  transition: all 250ms ease-in-out;

  &:hover {
    background: #fefefe;
    color: orange;
  }
`;

const Bottom = styled.div``;
