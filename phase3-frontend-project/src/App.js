import React from "react";
import './App.css';
// import 'Household' from './Household.js';

function App() {
  return (
    <div >
      <header id="header">
        <img src="./LogoJPG.jpg" alt="logo" className="logo"/>
        <p>DropDown for User goes here</p>
      </header>
      <div id="household">
        household/people here
      </div>
      <div id="pets">
        pets here
      </div>
      <div id="tasks">
        tasks here
      </div>
    </div>
  );
}

export default App;
