import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date();
let timeOfTheDay = "";

let wordColor = {
  color: "",
};

if (currentTime >= 0 && currentTime < 12) {
  timeOfTheDay = "Good morning";
  wordColor.color = "red";
} else if (currentTime >= 12 && currentTime < 18) {
  timeOfTheDay = "Good afternoon";
  wordColor.color = "green";
} else {
  timeOfTheDay = "Good evening";
  wordColor.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={wordColor}>
      {timeOfTheDay}
    </h1>
  </div>,
  document.getElementById("root")
);
