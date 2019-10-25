console.log("app.js is running");

//JSX - JavaScript XML
const template = (
  <div>
    <p> This is a big big change JSX from app.js </p>
    <h1> This is a header </h1>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
const templateTwo = (
  <div>
    <h1>Michael Jordan</h1>
    <p>Age: 47</p>
    <p>Location: Los Angeles Californina</p>
  </div>
);
// Create a templateTwo var jsx
//div  h1 =>Edgar Rojas
//p -> Age:44
//p-> location
//render templateTwo
const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
