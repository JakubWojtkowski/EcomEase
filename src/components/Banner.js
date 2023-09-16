import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Container>
      <HeadingText>Free Delivery!</HeadingText>
      <Description>
        Don't miss it out. Only today, get free<br></br> delivery on all of your
        orders.{" "}
      </Description>
      <Button>Browse products</Button>
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 85vw;
  margin: 20px auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: orange;
  color: rgba(255, 255, 255, 0.9);
  padding: 24px 32px;
  position: relative;
  letter-spacing: 0.5px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    ${
      "" /* background: url("");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat; */
    }
  }
`;

const HeadingText = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const Button = styled.div`
  margin-top: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  color: orange;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  padding: 10px 20px;
  width: 160px;
  text-align: center;
  cursor: pointer;
`;
