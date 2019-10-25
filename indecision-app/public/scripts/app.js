"use strict";

console.log("app.js is running");

var app = {
  title: "Indecisious App",
  subtitle: "Put your life in the hands of a computer!!",
  options: ["One", "Two"]
};

//JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " ",
    app.title,
    " "
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    " ",
    app.subtitle,
    " "
  ),
  React.createElement(
    "span",
    null,
    "Books"
  ),
  app.options.length > 0 ? React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      app.options[0],
      " "
    ),
    React.createElement(
      "li",
      null,
      app.options[1],
      " "
    )
  ) : undefined
);

//using if statements
//using ternary oeratiors
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "location: ",
      location,
      " "
    );
  }
}

var user = {
  name: "Michael Jordan",
  age: 12
  //location: "Houston Texas"
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  user.name ? React.createElement(
    "p",
    null,
    user.name,
    " "
  ) : undefined,
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age:",
    user.age
  ),
  getLocation(user.location)
);
// Create a templateTwo var jsx
//div  h1 =>Edgar Rojas
//p -> Age:44
//p-> location
//render templateTwo
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
