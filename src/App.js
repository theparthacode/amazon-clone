import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./pages/homepage/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/account">
          <Header />
          <h1>Account Page</h1>
        </Route>
        <Route path="/order">
          <Header />
          <h1>Orders Page</h1>
        </Route>
        <Route path="/cart">
          <Header />
          <h1>Carts Page</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
