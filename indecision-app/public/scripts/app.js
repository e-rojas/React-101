"use strict";

console.log("app.js is running");

var app = {
  title: "Indecisious App",
  subtitle: "Put your life in the hands of a computer!!",
  options: []
};

//JSX - JavaScript XML
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};
var removeAll = function removeAll() {
  app.options.length = 0;
  render();
};
var onMakeDesicion = function onMakeDesicion() {
  var randomNumber = Math.floor(Math.random() * app.options.length);
  console.log(randomNumber);
};
//Render function
var render = function render() {
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
    app.options.length > 0 ? "Here are your options" : "No options!!",
    React.createElement(
      "ol",
      null,
      app.options.map(function (item, index) {
        return React.createElement(
          "li",
          { key: index },
          item
        );
      })
    ),
    React.createElement(
      "p",
      null,
      app.options.length,
      " "
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDesicion },
      "What should I do"
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option "
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

//eactDOM.render(template, appRoot);
render();
