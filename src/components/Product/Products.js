import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "../../firebase.config";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import Categories from "../Categories";
import { Menu } from "@mui/icons-material";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Products() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [category, setCategory] = useState({
    id: "",
    name: "",
  });

  const showCategories = () => {
    setCategoriesOpen((current) => !current);
  };

  useEffect(() => {
    async function getItems() {
      if (!categoryId) {
        // fetching recommended products
        const q = query(
          collection(db, "categories"),
          where("categoryName", "==", "Recommended")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setCategory((category) => ({
            ...category,
            id: doc.id,
            name: doc.data().categoryName,
          }));
          // items
          const qItems = query(collection(db, `categories/${doc.id}/items`));
          onSnapshot(qItems, (snapshot) => {
            setItems(
              snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
          });
        });
      } else {
        // fetching all products from current category
        onSnapshot(
          collection(db, `categories/${categoryId}/items`),
          (snapshot) => {
            let tempProducts = snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            });
            setItems(tempProducts);
          }
        );
      }
    }

    getItems();
  }, [categoryId]);

  return (
    <Container>
      {isCategoriesOpen ? (
        <Categories showCategories={showCategories} />
      ) : (
        <CategoriesBtn onClick={() => setCategoriesOpen(true)}>
          <Menu />{" "}
        </CategoriesBtn>
      )}
      <Wrapper>
        <SectionHeading>Recommended For You</SectionHeading>
        <Main>
          {items &&
            items.map((item, index) => {
              return (
                <Link to={`/detail/${categoryId}/${item.id}`} key={index}>
                  <Product item={item}></Product>
                </Link>
              );
            })}
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Products;

const Container = styled.div`
  padding: 20px 0;
  color: #303030;

  a {
    text-decoration: none;
    color: #303030;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
  padding: 0 12px;
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

const CategoriesBtn = styled.div`
  position: fixed;
  width: 40px;
  height: 48px;
  transform: translateX(-22%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: orange;
  color: #132921;

  .MuiSvgIcon-root {
    padding-left: 4px;
  }

  @media (max-width: 768px) {
    width: 32px;
  }
`;
