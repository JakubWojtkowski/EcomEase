import { Help, Settings } from "@mui/icons-material";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase.config";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      onSnapshot(collection(db, "categories"), (snapshot) => {
        let tempCategories = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setCategories(tempCategories);
      });
    };

    getCategories();
  }, []);

  console.log(categories);

  return (
    <Container>
      <Logo>
        EcomEase
        <LogoArrow src={"/images/arrow-logo.png"} />
      </Logo>
      <Main>
        <Heading>Select category:</Heading>
        {categories?.map((category, index) => {
          return <Category key={index}>{category.categoryName}</Category>;
        })}
      </Main>
      <SettingsContainer>
        <Icon>
          <Settings /> Settings
        </Icon>
        <Icon>
          <Help /> Help
        </Icon>
      </SettingsContainer>
    </Container>
  );
}

export default Categories;

const Container = styled.div`
  width: 276px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #131921;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  letter-spacing: 0.25px;
  gap: 48px;
  font-size: 14px;
  flex: 0.2;
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

const Heading = styled.h1`
  font-size: 32px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
