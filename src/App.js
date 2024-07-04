import './App.css';
import React from "react";
import 'boxicons/css/boxicons.min.css';

function App() {
  const [btnText,setBtnText]=React.useState("Off");
  const [bulbState,setBulbState]=React.useState(false);
  const changeState=()=>{
    setBulbState(!bulbState);
    setBtnText(bulbState?"On":"Off");
  }
  return (
    <div className="App">
      <h1 className='title'>Light Bulb</h1>
      <div className={bulbState?'bulb-light':'bulb-light-off'}>
        <i class='bx bxs-bulb'></i>
      </div>
      <button className={bulbState?"btn light-on":"btn"} onClick={()=>changeState()}>{btnText}</button>
    </div>
  );
}

export default App;
