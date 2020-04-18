import React from "react";
import "./App.css";
import Buttons from "./componants/Buttons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "",
      num2: null,
      results: null,
      ope: "",
      equal: null,
    };
    this.changingInput = this.changingInput.bind(this);
    this.equalizer = this.equalizer.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "0" ||
        event.key === "1" ||
        event.key === "2" ||
        event.key === "3" ||
        event.key === "4" ||
        event.key === "5" ||
        event.key === "6" ||
        event.key === "7" ||
        event.key === "8" ||
        event.key === "9"
      ) {
        this.changingInput(event.key);
      } else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
      ) {
        this.Oprations(event.key);
      } else if (event.key === "Backspace") {
        this.setState({
          num: this.state.num.slice(0, -1),
        });
      } else if (event.key === "=" || event.key === "Enter") {
        this.equalizer();
      }
    });
  }
  changingInput = (a) => {
    let num2 = this.state.num + a;
    this.setState({ num: num2 });
  };
  Oprations = (b) => {
    this.setState({
      ope: b,
    });
    if (b === "+") {
      if (this.state.num2 === null && this.state.results === null) {
        this.setState({ num2: +this.state.num, num: "" });
      } else if (this.state.results === null) {
        this.setState({
          results: this.state.num2 + +this.state.num,
          num: "",
          num2: null,
          ope: "",
        });
      } else {
        this.setState({
          results: +this.state.num + this.state.results,
          num: "",
          ope: "",
        });
      }
    } else if (b === "-") {
      if (this.state.num2 === null && this.state.results === null) {
        this.setState({ num2: +this.state.num, num: "" });
      } else if (this.state.results === null) {
        this.setState({
          results: this.state.num2 - +this.state.num,
          num: "",
          num2: null,
          ope: "",
        });
      } else {
        this.setState({
          results: this.state.results - +this.state.num,
          num: "",
          ope: "",
        });
      }
    } else if (b === "*") {
      if (this.state.num2 === null && this.state.results === null) {
        this.setState({ num2: +this.state.num, num: "" });
      } else if (this.state.results === null) {
        this.setState({
          results: this.state.num2 * +this.state.num,
          num: "",
          num2: null,
          ope: "",
        });
      } else {
        this.setState({
          results: this.state.results * +this.state.num,
          num: "",
          ope: "",
        });
      }
    } else if (b === "/") {
      if (this.state.num2 === null && this.state.results === null) {
        this.setState({ num2: +this.state.num, num: "" });
      } else if (this.state.results === null) {
        this.setState({
          results: this.state.num2 / +this.state.num,
          num: "",
          num2: null,
          ope: "",
        });
      } else {
        this.setState({
          results: this.state.results / +this.state.num,
          num: "",
          ope: "",
        });
      }
    }
  };

  equalizer() {
    if (this.state.ope !== "") {
      this.Oprations(this.state.ope);
      this.setState({
        num: this.state.results,
        results: null,
      });
    }
  }
  render() {
    let x = +this.state.num;
    if (this.state.results !== null && this.state.num === "") {
      x = this.state.results;
    }
    return (
      <div className="App">
        <input type="text" value={x} readOnly />
        <Buttons p={this.changingInput} b={this.Oprations} c={this.equalizer} />
      </div>
    );
  }
}

export default App;
