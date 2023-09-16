import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Banner from "./Banner";

function Home() {
  return (
    <Container>
      <Header />
      <Banner />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
