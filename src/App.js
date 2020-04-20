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
    };
    this.changingInput = this.changingInput.bind(this);
    this.equalizer = this.equalizer.bind(this);
    this.point = this.point.bind(this);
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
        this.setState({ num: this.state.num.slice(0, -1) });
      } else if (event.key === "=" || event.key === "Enter") {
        this.equalizer();
      } else if (event.key === ".") {
        this.point();
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

    if (b === "+" || b === "-" || b === "*" || b === "/") {
      if (this.state.num2 === null && this.state.results === null) {
        this.setState({ num2: +this.state.num, num: "" });
      } else {
        this.op(this.state.ope);
      }
    }
  };
  op = (c) => {
    if (c === "+") {
      if (this.state.results === null) {
        this.setState({
          results: this.state.num2 + +this.state.num,
          num: "",
          num2: null,
        });
      } else {
        this.setState({
          results: +this.state.num + this.state.results,
          num: "",
        });
      }
    } else if (c === "-") {
      if (this.state.results === null) {
        this.setState({
          results: this.state.num2 - +this.state.num,
          num: "",
          num2: null,
        });
      } else {
        this.setState({
          results: this.state.results - +this.state.num,
          num: "",
        });
      }
    } else if (c === "*") {
      if (this.state.num !== "") {
        if (this.state.results === null) {
          this.setState({
            results: this.state.num2 * +this.state.num,
            num: "",
            num2: null,
          });
        } else {
          this.setState({
            results: this.state.results * +this.state.num,
            num: "",
          });
        }
      }
    } else if (c === "/") {
      if (this.state.num !== "") {
        if (this.state.results === null) {
          this.setState({
            results: this.state.num2 / +this.state.num,
            num: "",
            num2: null,
          });
        } else {
          this.setState({
            results: this.state.results / +this.state.num,
            num: "",
          });
        }
      }
    }
  };
  equalizer = () => {
    if (this.state.ope !== "") {
      this.op(this.state.ope);
      this.setState({ num: "", ope: "" });
    }
  };

  backSpace = () => {
    this.setState({
      num: this.state.num.slice(0, -1),
    });
  };

  point = () => {
    if (this.state.num.indexOf(".") === -1) {
      if (this.state.num === "") {
        this.setState({
          num: this.state.num + "0.",
        });
      } else {
        this.setState({
          num: this.state.num + ".",
        });
      }
    }
  };
  negative = () => {
    if (this.state.num.indexOf("-") === -1) {
      this.setState({
        num: "-" + this.state.num,
      });
      console.log(this.state.num);
    } else {
      this.setState({
        num: this.state.num.substr(1),
      });
    }
  };

  clear = () => {
    this.setState({
      num: "",
      num2: null,
      results: null,
      ope: "",
    });
  };

  render() {
    let x = +this.state.num;
    if (this.state.results !== null && this.state.num === "") {
      x = this.state.results;
    }
    return (
      <div className="App">
        <div className="display">{x}</div>
        <Buttons
          p={this.changingInput}
          b={this.Oprations}
          c={this.equalizer}
          dot={this.point}
          ce={this.backSpace}
          ac={this.clear}
          neg={this.negative}
        />
      </div>
    );
  }
}

export default App;
