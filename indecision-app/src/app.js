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

//Create remove all button above list
//onclick handler reset it back to 0 wipe the array and re-render
//Render function
const render = () => {
  const template = (
    <div>
      <h1> {app.title} </h1>
      {app.subtitle && <p> {app.subtitle} </p>}

      {app.options.length > 0 ? "Here are your options" : "No options!!"}
      <p>{app.options.length} </p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option </button>
        <br />
        <br />
        <button onClick={removeAll}>Remove All</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

//eactDOM.render(template, appRoot);
render();
