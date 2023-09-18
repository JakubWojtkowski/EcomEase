import {
  Add,
  AllInbox,
  Favorite,
  LocalShippingOutlined,
  Remove,
} from "@mui/icons-material";
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
          <hr></hr>
          <DeliveryInf>
            <FirstInf>
              <IconInf>
                <LocalShippingOutlined /> Free Delivery
              </IconInf>
              <DescriptionInf>
                <span>
                  Free shipping within the country. Check shipping cost to your
                  country <span>here</span>
                </span>
              </DescriptionInf>
            </FirstInf>

            <SecondInf>
              <IconInf>
                <AllInbox />
                Return Delivery
              </IconInf>
              <DescriptionInf>
                <span>
                  Ordered products can be returned free of charge and without
                  giving a reason within 30 days
                </span>
              </DescriptionInf>
            </SecondInf>
          </DeliveryInf>
          <AddButtons>
            <AddBtn>Add to Cart</AddBtn>
            <AddBtnFavorite>
              Add to Favorite <Favorite />
            </AddBtnFavorite>
          </AddButtons>
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
  margin: 0 auto auto auto;
  padding: 48px;
  background: #f9f5f6;
  border-radius: 16px;

  @media only screen and (max-width: 768px) {
    height: auto;
    width: 85%;
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
    opacity: 0.15;
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
  font-size: 14px;
  line-height: 1.5;
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
`;

const DeliveryInf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 20px 0;
`;

const FirstInf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  border: 2px solid #f5f5f5;
  border-radius: 16px;
  padding: 20px;
  letter-spacing: 0.25px;

  span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1.5;
  }

  span > span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const IconInf = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DescriptionInf = styled.div``;

const SecondInf = styled(FirstInf)``;

const AddButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const AddBtn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 48px;
  background: orange;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid orange;
  border-radius: 32px;
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

const AddBtnFavorite = styled(AddBtn)`
  color: orange;
  background: rgba(255, 255, 255, 0.9);
  gap: 4px;

  &:hover {
    background: orange;
    color: rgba(255, 255, 255, 0.9);
  }

  .MuiSvgIcon-root {
    font-size: 20px !important;
  }
`;

const Bottom = styled.div``;
