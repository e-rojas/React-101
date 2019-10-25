console.log("app.js is running");

//JSX - JavaScript XML
const template = (
  <div>
    <h1> This is a header </h1>
    <p> This is a big big change JSX from app.js </p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
const user = {
  name: "Michael Jordan",
  age: 52,
  location: "Houston Texas"
};
const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age:{user.age}</p>
    <p>Location: {user.location} </p>
  </div>
);
// Create a templateTwo var jsx
//div  h1 =>Edgar Rojas
//p -> Age:44
//p-> location
//render templateTwo
const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
