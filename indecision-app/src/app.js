//Parent componet
class IndecisionApp extends React.Component {
  render() {
    const title = "Indesicion";
    const subTitle = "Put your life in the hands of a computer!";
    const options = ["Thing one", "Thing two", "Thing three"];

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
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
        <h1>{this.props.title}</h1>
        <h2> {this.props.subTitle} </h2>
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
        <p> these are :{this.props.options.length} </p>
        {this.props.options.map((optionText, index) => (
          <Option option={optionText} key={index} />
        ))}
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
        <p>Option: {this.props.option} </p>
      </div>
    );
  }
}
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>Type Option Here!!! </p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
