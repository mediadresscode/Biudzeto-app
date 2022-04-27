import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EarnsForm from "./components/EarnsForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import CostsForm from "./components/CostsForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <IntroPage />
          </Route>
          <Route path="/HomePage">
            <HomePage />
          </Route>
          <Route path="/LoginForm">
            <LoginForm />
          </Route>
          <Route path="/RegistrationForm">
            <RegistrationForm />
          </Route>
          <Route exact path="/EarnsForm.js">
            <div className="page">
              <EarnsForm />
              <CostsForm />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
