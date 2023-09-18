import {
  Apartment,
  Facebook,
  GitHub,
  Help,
  Instagram,
  Payment,
  Public,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Main>
          <LeftMain>
            <MainListHeading>
              <Help />
              Help and information
            </MainListHeading>
            {["Rules", "Delivery", "Parcel returns", "Track your order"].map(
              (item, index) => {
                return <MainListItem key={index}>{item}</MainListItem>;
              }
            )}
          </LeftMain>

          <RightMain>
            <MainListHeading>
              <Apartment />
              About EcomEase
            </MainListHeading>
            {["Career", "Press", "Reviews", "History"].map((item, index) => {
              return <MainListItem key={index}>{item}</MainListItem>;
            })}
          </RightMain>

          <MiddleMain>
            <MainListHeading>
              <Payment />
              Payment Methods
            </MainListHeading>
            <Image src="/images/visa-mastercard-logo.png" alt="" />
          </MiddleMain>

          <MiddleMain>
            <MainListHeading>
              <Public />
              Follow Us
            </MainListHeading>
            <Socials>
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Instagram</span>
            </Socials>
          </MiddleMain>
        </Main>

        <Copyright>
          EcomEase 2023 © Created by Jakub Wojtkowski
          <a
            href="https://github.com/JakubWojtkowski/EcomEase"
            rel="noreferrer"
            target="_blank"
          >
            <GitHub />
          </a>
        </Copyright>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background: #131921;
  color: #fff;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
`;

const Main = styled.div`
  display: grid;
  width: 100%;
  place-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 10px;
  color: rgba(255, 255, 255, 0.9);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-items: start;
    grid-gap: 24px;
  }
`;

const LeftMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainListHeading = styled.h4`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
  padding: 8px;
`;

const MainListItem = styled.li`
  list-style: none;
  font-size: 14px;
  padding: 8px 0 8px 24px;
  cursor: pointer;
  transition: all 250m s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

const MiddleMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;

  span {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-top: 8px;
  }
`;

const RightMain = styled.div``;

const Image = styled.img`
  width: 50%;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Copyright = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  padding-top: 32px;
  letter-spacing: 0.25px;

  .MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    transition: all 250ms ease-in-out;

    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;
