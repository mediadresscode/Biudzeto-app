import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import EarnsForm from "./components/EarnsForm";


function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <header className="App-header">
       <Header/>
      </header>
      <div className='Earns'>
      <h1>Pajamos</h1>
        <EarnsForm/>
      </div>
      </Switch>
      <footer className="App-footer">
      <Footer/>
      </footer>
    </div>
    </Router>
  );
}

export default App;
