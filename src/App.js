import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductViewer from "./components/Product/ProductViewer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import Checkout from "./components/Checkout";
import Loader from "./components/Loader";
import { setProducts } from "./features/product/productSlice";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      onSnapshot(collection(db, "categories"), (snapshot) => {
        let tempProducts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        dispatch(setProducts(tempProducts));
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
    };

    getProducts();
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Router>
            <Header />
            <Switch>
              <Route path="/detail/:categoryId/:id">
                <ProductViewer />
              </Route>

              <Route path="/detail/:categoryId/">
                <Home />
              </Route>

              <Route path="/login">
                {user.name === null ? <Login /> : <Home />}
              </Route>

              <Route path="/checkout">
                {user.name !== null ? <Checkout /> : <Home />}
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </Container>
      )}
    </>
  );
}

export default App;

const Container = styled.div``;
