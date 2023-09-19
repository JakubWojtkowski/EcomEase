import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "../firebase.config";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { Link } from "react-router-dom";

function Products() {
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    async function getItems() {
      // recommended
      const q = query(
        collection(db, "categories"),
        where("categoryName", "==", "Recommended")
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setCategoryId(doc.id);
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
        {items &&
          items.map((item, index) => {
            return (
              <Product key={index} item={item}>
                <Link to={`/detail/${categoryId}/${item.id}`}></Link>
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
