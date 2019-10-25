"use strict";

console.log("app.js is running");

//JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " This is a header "
  ),
  React.createElement(
    "p",
    null,
    " This is a big big change JSX from app.js "
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
var user = {
  name: "Michael Jordan",
  age: 52,
  location: "Houston Texas"
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age:",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location,
    " "
  )
);
// Create a templateTwo var jsx
//div  h1 =>Edgar Rojas
//p -> Age:44
//p-> location
//render templateTwo
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
