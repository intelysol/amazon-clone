import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/">
            <h1>HOME PAGE!!!</h1>
            <Header />
          </Route>
        </Switch>

        {/* Header */}
        {/* Home */}
      </div>
    </Router>
  );
}

export default App;
