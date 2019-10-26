console.log("app.js is running");

const app = {
  title: "Indecisious App",
  subtitle: "Put your life in the hands of a computer!!",
  options: []
};

//JSX - JavaScript XML
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};
const removeAll = () => {
  app.options.length = 0;
  render();
};
const onMakeDesicion = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  console.log(randomNumber);
};
//Render function
const render = () => {
  const template = (
    <div>
      <h1> {app.title} </h1>
      {app.subtitle && <p> {app.subtitle} </p>}
      {app.options.length > 0 ? "Here are your options" : "No options!!"}
      <ol>
        {app.options.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <p>{app.options.length} </p>
      <button disabled={app.options.length === 0} onClick={onMakeDesicion}>
        What should I do
      </button>
      <button onClick={removeAll}>Remove All</button>
      <br />
      <br />
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option </button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

//eactDOM.render(template, appRoot);
render();
