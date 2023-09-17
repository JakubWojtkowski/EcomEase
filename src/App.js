import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductViewer from "./components/ProductViewer";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <ProductViewer />
          </Route>

          <Route path="/login">{/* <Login></Login> */}</Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
