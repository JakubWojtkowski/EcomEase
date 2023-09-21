import React, { useState } from "react";
import styled from "styled-components";
import {
  ArrowDropDown,
  FavoriteBorder,
  LocalGroceryStoreOutlined,
  NotificationsOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import SidebarCart from "./SidebarCart";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCart = () => {
    !isCartOpen && (document.body.style.overflowY = "hidden");

    setIsCartOpen((current) => !current);
  };

  console.log("header ", isCartOpen);

  return (
    <Container>
      {isCartOpen && <SidebarCart isOpen={isCartOpen} showCart={showCart} />}
      <Wrapper>
        <Logo>
          EcomEase
          <LogoArrow src={"/images/arrow-logo.png"} />
        </Logo>

        <NavMenu>
          <SearchBar>
            <Input type="text" placeholder="Search" />
            <Categories>
              All categories<ArrowDropDown></ArrowDropDown>
            </Categories>
            <SearchIcon>
              <SearchOutlined />
            </SearchIcon>
          </SearchBar>

          <Buttons>
            <IconButton>
              <FavoriteBorder />
            </IconButton>

            <IconButton onClick={showCart}>
              <CartIcon>
                <LocalGroceryStoreOutlined />
                <QuantityCircle>0</QuantityCircle>
              </CartIcon>
            </IconButton>

            <IconButton>
              <NotificationsOutlined />
            </IconButton>

            <IconButton>
              <UserAvatar>
                <Avatar />
                <ArrowDropDown></ArrowDropDown>
              </UserAvatar>
            </IconButton>
          </Buttons>
        </NavMenu>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  background: #131921;
  color: #fff;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-family: "Inter";
  padding-left: 2px;
`;

const LogoArrow = styled.img`
  position: absolute;
  width: clamp(2rem, 5vw, 3rem);
  bottom: -10px;
  left: 18px;
`;

const NavMenu = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  background: #232f3e;
  border-radius: 6px;
  overflow: hidden;
  height: 36px;
  margin-right: 60px;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Input = styled.input`
  background: #232f3e;
  border: none;
  padding: 4px 10px;
  color: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
  }
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 8px;
  border-left: 2px solid #303f53;
`;

const SearchIcon = styled.div`
  background: orange;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 36px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.9) !important;
    font-size: 24px !important;

    @media only screen and (max-width: 600px) {
      font-size: 16px !important;
    }
  }
`;

const CartIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: orange;
  border-radius: 4px;
  padding: 6px;
`;

const QuantityCircle = styled.span`
  position: absolute;
  background: #fff;
  color: #131921;
  border-radius: 50%;
  font-size: 11px;
  height: 16px;
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  right: -4px;
  top: -6px;
  font-weight: bold;
`;

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;

  @media only screen and (max-width: 1024px) {
    margin-left: 20px;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 10px;
  }
`;
