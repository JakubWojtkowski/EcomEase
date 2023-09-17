import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Banner from "./Banner";
import Products from "./Products";

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Banner />
        <Products />
      </Main>
    </Container>
  );
}

export default Home;

const Container = styled.div`
`;

const Main = styled.div`
  margin: 0 auto;
  width: 90vw;
`;
