import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <Container key={index}>
        <CardImage></CardImage>
        <CardInfo>
          <Skeleton count={2} />
        </CardInfo>
        <CardPrice>
          <Skeleton count={0.25} />
        </CardPrice>
      </Container>
    ));
}

export default CardSkeleton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  gap: 10px;
`;
const CardImage = styled.div`
  width: 100%;
  height: 24vh;
  background: #efeeef;
  border-radius: 8px;

  @media only screen (max-width: 1024px) {
    height: 12vh;
  }
`;
const CardInfo = styled.div`
  width: 85%;
  padding-left: 16px;
`;
const CardPrice = styled.div`
  padding-left: 16px;
`;
