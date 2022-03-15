import React, { useState } from "react";

function App() { //got rid of props, because we're not actually using any props
  let time = new Date().toLocaleTimeString();
//console.log(time);


  let [currentTime, getTime] = useState(time); //useState is the hook we are using, we are initializing the state to be time.

   //

  function showTime() {
    getTime(currentTime = new Date().toLocaleTimeString()); //getTime is the function that updates the state, so we want to update currentTime to be the time right now, so we give it a new Date object
  }

  setInterval(showTime, 1000);//using the setInterval method to call the showTime method every 1000 milliseconds (1 second) so the currentTime will update and be re-rendered every second

  return (
    <div className="container">
      <h1>{currentTime}</h1>
    </div>
  ); //we got rid of the button since we no longer need it to execute the showTime function
}

export default App;
