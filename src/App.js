import React from "react";
import styled from "styled-components";
import Home from "./components/Home";

function App() {
  return (
    <Container>
      <Home />
      {/* <Login></Login> */}
    </Container>
  );
}

export default App;

const Container = styled.div``;
