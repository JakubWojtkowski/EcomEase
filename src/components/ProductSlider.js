import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function ProductSlider({ categoryItems, categoryId }) {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 4,
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

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container>
      {categoryItems && (
        <Slider {...settings}>
          {categoryItems.map((item, index) => {
            return (
              <Slide key={index}>
                <Link to={`/detail/${categoryId}/${item.id}`} action="replace">
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
                        src={item.image}
                        alt="product jpg"
                        loading="lazy"
                      />
                    </ImageContainer>
                    <Heading>{item.model}</Heading>
                    <Description>{item.name}</Description>
                    <Price>${item.price}</Price>
                  </Product>
                </Link>
              </Slide>
            );
          })}
        </Slider>
      )}
    </Container>
  );
}

export default ProductSlider;

const Container = styled.div`
  margin: 20px auto;

  a {
    text-decoration: none;
    color: #303030;
  }

  .slick-prev {
    position: absolute !important;
    left: 0;
    z-index: 99 !important;
  }

  .slick-next {
    position: absolute !important;
    right: 0;
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
  margin-bottom: 4px;
`;

const ImageContainer = styled.div`
  border-radius: 8px;
  padding: 20px;
  height: 28vh;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    height: 22vh;
    padding: 18px;
  }

  @media only screen and (max-width: 425px) {
    height: 18vh;
  }
  @media only screen and (max-width: 374px) {
    height: 14vh;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Price = styled.span`
  font-weight: bold;
  padding-top: 10px;
`;
