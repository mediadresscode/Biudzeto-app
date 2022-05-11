import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EarnsForm from "./components/EarnsForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IntroPage from "./components/IntroPage";
//import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import CostsForm from "./components/CostsForm";
import EarnList from "./components/EarnList";
import CostList from "./components/CostList";
import Edit from "./components/Edit";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />  
      <Footer />
        <Switch>
          <Route exact path="/">
            <IntroPage />
          </Route>
          {/* <Route path="/HomePage">
            <HomePage />
          </Route> */}
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
          <Route exact path="/EarnList.js">
              <EarnList />
            </Route>
            <Route exact path="/CostList.js">
              <CostList />
            </Route>
            <Route path="/earns/edit/:id">
              <Edit />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
