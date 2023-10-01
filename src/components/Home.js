import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Products from "./Product/Products";
import { useDispatch } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
import { setProducts } from "../features/product/productSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      onSnapshot(collection(db, "categories"), (snapshot) => {
        let tempProducts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        dispatch(setProducts(tempProducts));
      });
    };

    getProducts();
  }, [dispatch]);

  return (
    <Container>
      <Banner />
      <Products />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
