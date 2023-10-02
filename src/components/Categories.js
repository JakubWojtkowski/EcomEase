import { Close, Help, Settings } from "@mui/icons-material";
import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Categories(props) {
  const categories = useSelector(selectProducts);

  return (
    <Container>
      <Logo>
        EcomEase
        <LogoArrow src={"/images/arrow-logo.png"} />
      </Logo>
      <CloseIcon onClick={() => props.showCategories()}>
        <Close />
      </CloseIcon>
      <Main>
        <Heading>Select category:</Heading>
        {categories?.map((category, index) => {
          return (
            <Link
              to={`/detail/${categories[index].id}`}
              key={index}
              onClick={() => props.showCategories()}
            >
              <Category>{category.categoryName}</Category>
            </Link>
          );
        })}
      </Main>
      <SettingsContainer>
        <Icon>
          <Help /> Help
        </Icon>
        <Icon>
          <Settings /> Settings
        </Icon>
      </SettingsContainer>
    </Container>
  );
}

export default Categories;

const fadeIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  background-color: #131921;
  color: rgba(255, 255, 255, 0.9);
  padding: 16px;
  letter-spacing: 0.25px;
  gap: 32px;
  font-size: 14px;
  animation: ${fadeIn} 500ms ease-in-out;
`;

const CloseIcon = styled.div`
  cursor: pointer;
  z-index: 99;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  .MuiSvgIcon-root {
    position: absolute;
    top: 0;
    right: 0;
    margin: 16px;
    font-size: 32px !important;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  padding-left: 2px;
  z-index: 2;
`;

const LogoArrow = styled.img`
  position: absolute;
  width: clamp(2rem, 5vw, 3rem);
  bottom: -10px;
  left: 18px;
`;

const Heading = styled.h2``;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;

  a {
    color: rgba(255, 255, 255, 0.9) !important;
  }
`;

const Category = styled.div`
  padding: 14px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 250ms ease-in-out;

  &:hover {
    border: 2px solid #232f3e;
    background: #232f3e;
    border-left: 2px solid #ff9900;
  }
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;
  gap: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 250ms ease-in-out;

  .MuiSvgIcon-root {
    font-size: 18px;
  }

  &:hover {
    border: 2px solid #232f3e;
    background: #232f3e;
    border-left: 2px solid #ff9900;
  }
`;
