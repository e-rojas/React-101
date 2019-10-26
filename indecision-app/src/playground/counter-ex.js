//______________________

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
//button -1
const minusOne = () => {
  count--;
  renderCounterApp();
};
//reset
const reset = () => {
  count = 0;
  renderCounterApp();
};
const template_3 = (
  <div>
    <h1>{count} </h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);

//this lines render over and over which demonstrates
const renderCounterApp = () => {
  const template_3 = (
    <div>
      <h1>{count} </h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(template_3, appRoot);
};
renderCounterApp();
