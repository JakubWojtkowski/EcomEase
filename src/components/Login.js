import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  const [isVisibilityOff, setIsVisibilityOff] = useState(true);

  const switchPassword = (e) => {
    const password = document.querySelector("#password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type", type);

    setIsVisibilityOff(!isVisibilityOff);
  };

  return (
    <Container>
      <Wrapper>
        <Main>
          <Heading>Sign in</Heading>
          <Description>Please sign in to your account</Description>
          <Form>
            <Input type="email" placeholder="Email" required />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
            {isVisibilityOff ? (
              <VisibilityOff onClick={switchPassword} />
            ) : (
              <Visibility onClick={switchPassword} />
            )}
            <Button type="submit">Sign in</Button>
          </Form>
          <Line>or</Line>
          <MiddleMain>
            <Button type="submit">
              <GoogleLogo src="/images/google-logo.png" alt="" /> Sign in with
              Google
            </Button>
          </MiddleMain>
        </Main>
        <LoginBanner>
          <img src="/images/login.png" alt="" loading="lazy" />
        </LoginBanner>
      </Wrapper>
    </Container>
  );
}

export default Login;

const Container = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  color: #303030;
  max-width: 1200px;
  margin: 10vh auto;

  place-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  margin-bottom: 8px;
`;

const Description = styled.div`
  opacity: 0.75;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 48px;
  position: relative;

  .MuiSvgIcon-root {
    position: absolute;
    cursor: pointer;
    bottom: 76px;
    right: 16px;
    margin-left: 30px;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #e8e8e8;
  padding: 8px 10px;
  background: #f9f9f9;
  height: 42px;
  font-size: 16px;
  letter-spacing: 0.25px;
  width: 300px;
  transition: all 250ms ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 1px solid #333333;
  }
`;

const Button = styled.button`
  border: 1px solid #131921;
  background: #303030;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 32px;
  padding: 12px 32px;
  height: 42px;
  letter-spacing: 0.5px;
  background-color: #131921;
  cursor: pointer;
  font-weight: bold;
  transition: all 250ms ease-in-out;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #f9f9f9;
    color: #131921;
  }
`;

const GoogleLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const MiddleMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  hr {
    flex: 1;
    border: 1px solid #e8e8e8;
  }
`;

const Line = styled.div`
  text-align: center;
  margin: 24px 0;
`;

const LoginBanner = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media only screen and (max-width: 768px) {
    grid-row: 1;
  }
`;
