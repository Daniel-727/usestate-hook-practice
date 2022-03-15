import React, { useState } from "react";

function App(props) {
  let time = new Date().toLocaleTimeString();
//console.log(time);


  let [currentTime, getTime] = useState(time); //useState is the hook we are using, we are initializing the state to be time.

   //

  function showTime() {
    getTime(currentTime = new Date().toLocaleTimeString()); //getTime is the function that updates the state, so we want to update currentTime to be the time right now, so we give it a new Date object
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  ); //props.ShowTime is a function that displays the current time, we have the onClick handler, so that when the button is clicked the showTime() function will execute and update the currentTime, and since in the h1 we are displaying the currentTime, the currentTime will be updated and rerendered to display the correct time.
}

export default App;
