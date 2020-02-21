import React from 'react';
import './App.css';
import CardList from "./components/CardList";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {/* <h1 className="Header">React Wars</h1> */}
      <img src={require("./img/starwarz.png")} alt="react wars logo" />
      <h2 style={{fontFamily: 'Odibee Sans',fontSize:`60px`,color:`LIGHTCYAN`}}>Cast of Characters</h2>
      <CardList />
    </div>
  );
}

export default App;
