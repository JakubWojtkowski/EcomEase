import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Wrapper>
        <Main>
          <Heading>Sign in</Heading>
          <Description>Please sign in to your account</Description>
          <Form>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign in</Button>
          </Form>
          <Line>or</Line>
          <MiddleMain>
            <GoogleButton>
              <GoogleLogo src="/images/google-logo.png" alt="" /> Sign in with
              Google
            </GoogleButton>
          </MiddleMain>
        </Main>
        <LoginBanner>
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-earthearthplanetglobethird-planet-from-the-sun-1411526988004rc27u.png"
            alt=""
          />
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 48px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #e8e8e8;
  padding: 8px 10px;
  background: #f9f9f9;
  height: 42px;
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

  &:hover {
    background: #f9f9f9;
    color: #131921;
  }
`;

const GoogleButton = styled(Button)`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
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
  img {
    max-width: 75%;
    height: auto;
    object-fit: cover;
  }
`;
