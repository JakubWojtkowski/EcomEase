import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase.config";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

function Products() {
  const [favorite, SetFavorite] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      // recommended
      const q = query(
        collection(db, "categories"),
        where("categoryName", "==", "Recommended")
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        const qItems = query(collection(db, `categories/${doc.id}/items`));

        onSnapshot(qItems, (snapshot) => {
          setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
      });
    }

    getItems();
  }, []);

  console.log(items);

  return (
    <Container>
      <SectionHeading>Recommended For You</SectionHeading>
      <Main>
        {items?.map((item, index) => {
          return (
            <Product key={index}>
              <IconButton onClick={() => SetFavorite(!favorite)}>
                {favorite === true ? <Favorite /> : <FavoriteBorderOutlined />}
              </IconButton>
              <ImageContainer>
                <Image src={item.image} alt="item image" />
              </ImageContainer>
              <Heading>{item.model}</Heading>
              <Description>{item.category}</Description>
              <Price>${item.price}</Price>
            </Product>
          );
        })}
      </Main>
    </Container>
  );
}

export default Products;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  color: #303030;
`;

const SectionHeading = styled.h1`
  margin-bottom: 20px;
  letter-spacing: 0.25px;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  place-items: center;

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
