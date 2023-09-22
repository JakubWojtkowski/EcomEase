import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductViewer from "./components/ProductViewer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/detail/:categoryId/:id">
            <ProductViewer />
          </Route>

          <Route path="/login">
            <Login />
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
