import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductViewer from "./components/ProductViewer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import Checkout from "./components/Checkout";

function App() {
  const user = useSelector(selectUser);

  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/detail/:categoryId/:id">
            <ProductViewer />
          </Route>

          <Route path="/login">
            {user.name === null ? <Login /> : <Home />}
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
