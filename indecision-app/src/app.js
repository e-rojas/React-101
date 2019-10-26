//Parent componet
class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}
//Header component
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer!</h2>
      </div>
    );
  }
}
//Action component
class Action extends React.Component {
  render() {
    return (
      <div>
        <button>what should I do?</button>
      </div>
    );
  }
}
//Options component rendering child Option component
class Options extends React.Component {
  render() {
    return (
      <div>
        <Option />
      </div>
    );
  }
}
//Option component
class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Individual Option </p>
      </div>
    );
  }
}
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>Type Option Here!!!</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
