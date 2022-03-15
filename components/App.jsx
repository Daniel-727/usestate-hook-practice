import React, { useState } from "react";

function App(props) {
  let time = new Date().toLocaleTimeString();
//console.log(time);


  let [currentTime, getTime] = useState(time); //useState is the hook we are using, we are initializing the state to be time. we are not really trying to do much with the time, but display it. so getTime, the function that updates the state, doesn't do anything but display the currentTime

   //

  function showTime() {
    getTime(currentTime = new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  ); //props.ShowTime is a function that displays the current time
}

export default App;
