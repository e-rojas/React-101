let visibility = false;

const toggleBtn = () => {
  visibility = !visibility;
  console.log(visibility);
  render();
};
const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleBtn}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && <h4>These are some details</h4>}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
