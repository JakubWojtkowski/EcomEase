import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";

function ProductSlider({ categoryItems }) {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const [favorite, SetFavorite] = useState(false);

  return (
    <Container>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <Slide key={index}>
              <Product>
                <IconButton onClick={() => SetFavorite(!favorite)}>
                  {favorite === true ? (
                    <Favorite />
                  ) : (
                    <FavoriteBorderOutlined />
                  )}
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
            </Slide>
          );
        })}
      </Slider>
    </Container>
  );
}

export default ProductSlider;

const Container = styled.div`
  margin: 20px auto;

  .slick-prev {
    position: absolute !important;
    left: 15px;
    z-index: 99 !important;
  }

  .slick-next {
    position: absolute !important;
    right: 15px;
    z-index: 99 !important;
  }

  .slick-prev::before {
    color: #000 !important;
  }

  .slick-next::before {
    color: #000 !important;
  }
`;

const Slide = styled.div`
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
