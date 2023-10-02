import React from "react";
import styled from "styled-components";
import { ClimbingBoxLoader } from "react-spinners";

function Loader() {
  return (
    <Container>
      <ClimbingBoxLoader size={30} color="#ff9900" />
    </Container>
  );
}

export default Loader;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
