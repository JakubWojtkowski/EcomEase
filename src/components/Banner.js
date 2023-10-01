import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Container>
      <Wrapper>
        <HeadingText>Free Delivery!</HeadingText>
        <Description>
          Don't miss it out. Only today, get free<br></br> delivery on all of
          your orders.
        </Description>
        <Button>Browse products</Button>
      </Wrapper>
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  border-radius: 8px;
  background: #ff9900;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  letter-spacing: 0.5px;
  max-width: 1200px;
  width: 90vw;
  margin: 30px auto;
  padding: 24px 32px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: 425px) {
    justify-content: center;
    align-items: center;
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

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;
