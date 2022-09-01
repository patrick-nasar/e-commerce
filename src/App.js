import "./App.css";
import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar1 from "./components/NavBar";
import Footer2 from "./components/Footer2";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/Products";
import CategoriesPage from "./pages/Categories";
import CartPage from "./pages/Cart";
import ProductPage from "./pages/Product";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Registration";
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router >
      <div className="App">
        <NavBar1 />
        <Switch>
           <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/Categories">
            <CategoriesPage />
          </Route>
          <Route exact path="/Products">
            <ProductsPage />
          </Route>
          <Route exact path="/Product">
            <ProductPage />
          </Route>
          <Route exact path="/Cart">
            <CartPage />
          </Route>
          <Route exact path="/Login">
            <LoginPage />
          </Route>
          <Route exact path="/Register">
            <RegisterPage />
          </Route>
        </Switch>
        <Footer2 />
      </div>
    </Router>
  );
}

export default App;
