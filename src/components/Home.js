import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Products from "./Products";
import Categories from "./Categories";

function Home() {
  return (
    <Container>
      <Wrapper>
        <Banner />
        <Categories />
        <Products />
      </Wrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div``;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90vw;
`;
