import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import EarnsForm from "./components/EarnsForm";
import RegistrationForm from './components/RegistrationForm'; 


function App() {
  return (
    <>
   
    <div className="App">
      <header className="App-header">
       <Header/>
      </header>
      <div className='Earns'>
      <h1>Pajamos</h1>
        <EarnsForm/>
      </div>
      <footer className="App-footer">
      <Footer/>
      </footer>
    </div>
    </>
  );
}

export default App;
