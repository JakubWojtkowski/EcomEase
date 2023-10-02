import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Products from "./Product/Products";

function Home() {
  return (
    <Container>
      <Banner />
      <Products />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
