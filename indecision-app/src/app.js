console.log("app.js is running");

const app = {
  title: "Indecisious App",
  subtitle: "Put your life in the hands of a computer!!",
  options: ["One", "Two"]
};

//JSX - JavaScript XML
const template = (
  <div>
    <h1> {app.title} </h1>
    {app.subtitle && <p> {app.subtitle} </p>}

    <span>Books</span>
    {app.options.length > 0 ? (
      <ol>
        <li>{app.options[0]} </li>
        <li>{app.options[1]} </li>
      </ol>
    ) : (
      undefined
    )}
  </div>
);

//using if statements
//using ternary oeratiors
function getLocation(location) {
  if (location) {
    return <p>location: {location} </p>;
  }
}

const user = {
  name: "Michael Jordan",
  age: 12
  //location: "Houston Texas"
};
const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    {user.name ? <p>{user.name} </p> : undefined}
    {user.age >= 18 && <p>Age:{user.age}</p>}
    {getLocation(user.location)}
  </div>
);
// Create a templateTwo var jsx
//div  h1 =>Edgar Rojas
//p -> Age:44
//p-> location
//render templateTwo
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
