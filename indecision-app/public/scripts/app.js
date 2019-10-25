"use strict";

console.log("app.js is running");

//JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    " This is a big big change JSX from app.js "
  ),
  React.createElement(
    "h1",
    null,
    " This is a header "
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Michael Jordan"
  ),
  React.createElement(
    "p",
    null,
    "Age: 47"
  ),
  React.createElement(
    "p",
    null,
    "Location: Los Angeles Californina"
  )
);
// Create a templateTwo var jsx
//div  h1 =>Edgar Rojas
//p -> Age:44
//p-> location
//render templateTwo
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
