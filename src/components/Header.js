import React, { useState } from "react";
import styled from "styled-components";
import {
  ArrowDropDown,
  ArrowDropUp,
  FavoriteBorder,
  Help,
  LocalGroceryStoreOutlined,
  LocalShipping,
  Login,
  Logout,
  ManageAccounts,
  NotificationsOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import SidebarCart from "./SidebarCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectUserPhoto,
  setUserSignIn,
  setUserSignOut,
} from "../features/user/userSlice";
import { selectCart } from "../features/cart/cartSlice";
import { auth } from "../firebase.config";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // temp
  const user = useSelector(selectUser);
  const userPhoto = useSelector(selectUserPhoto);
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });

    return total;
  };

  const showCart = () => {
    !isCartOpen && (document.body.style.overflowY = "hidden");
    setIsCartOpen((current) => !current);
  };

  const showDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const signOut = async () => {
    try {
      await auth.signOut().then((result) => {
        dispatch(setUserSignOut());
        history.push("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserSignIn({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, [user, dispatch]);

  return (
    <Container>
      {isCartOpen && <SidebarCart isOpen={isCartOpen} showCart={showCart} />}
      <Wrapper>
        <Link to={"/"}>
          <Logo>
            EcomEase
            <LogoArrow src={"/images/arrow-logo.png"} />
          </Logo>
        </Link>

        <NavMenu>
          <SearchBar>
            <Input type="text" placeholder="Search" />

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
                <QuantityCircle>{getTotalQuantity() || 0}</QuantityCircle>
              </CartIcon>
            </IconButton>

            <IconButton>
              <NotificationsOutlined />
            </IconButton>

            <IconButton onClick={showDropDown}>
              <UserAvatar>
                <AvatarContainer>
                  <Avatar src={userPhoto} />
                </AvatarContainer>
                {isDropdownOpen && (
                  <UserDropdown>
                    <UserDropdownItems>
                      <UserDropdownItem>
                        <ManageAccounts />
                        Account
                      </UserDropdownItem>
                      <UserDropdownItem>
                        <LocalShipping />
                        Orders
                      </UserDropdownItem>
                      <UserDropdownItem>
                        <Help />
                        Help
                      </UserDropdownItem>
                      {user.name !== null ? (
                        <UserDropdownItem onClick={signOut}>
                          <Logout />
                          Sign Out
                        </UserDropdownItem>
                      ) : (
                        <Link to={"/login"}>
                          <UserDropdownItem>
                            <Login />
                            Sign In
                          </UserDropdownItem>
                        </Link>
                      )}
                    </UserDropdownItems>
                  </UserDropdown>
                )}
                {isDropdownOpen ? <ArrowDropUp /> : <ArrowDropDown />}
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
  color: rgba(255, 255, 255, 0.9);
  display: flex;

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
  }
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
  width: 240px;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  background: #ff9900;
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
  background: #ff9900;
  border-radius: 4px;
  padding: 6px;

  .MuiSvgIcon-root {
    color: #131921 !important;
  }
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
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 1024px) {
    margin-left: 20px;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0px;
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  border-radius: 50%;
  border: 2px solid #ff9900;
`;

const UserDropdown = styled.div`
  position: absolute;
  padding-top: 6px;
  z-index: 1;
  width: 120px;
  height: 140px;
  top: 48px;
  bottom: 0;
  left: -40px;
  background: #131921;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  animation: fadeIn 250ms ease-in-out;

  @media only screen and (max-width: 425px) {
    width: 100px;
    font-size: 12px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const UserDropdownItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
`;

const UserDropdownItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px 8px;
  gap: 8px;
  transition: all 200ms ease-in-out;

  .MuiSvgIcon-root {
    font-size: 16px !important;
  }

  &:hover {
    background: #232f3e;
  }

  @media only screen and (max-width: 600px) {
    padding: 8px 10px;
  }
`;
