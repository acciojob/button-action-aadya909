import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[isVisible ,setIsVisible]=useState(false);
  const handleClick=()=>{
    setIsVisible(true);
  };

  return (
    <div className="App" id="main">
      <button id="click" onClick={handleClick}>Click Me</button>
      <p id="para"
      className={isVisible?'show':'hide'}>
      Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
      // Do not alter the main div
    </div>
  );
}

export default App;
