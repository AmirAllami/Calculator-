import React from "react";

import "./App.css";
import Buttons from "./componants/Buttons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "",
    };
    this.changingInput = this.changingInput.bind(this);
  }
  changingInput = (a) => {
    let num2 = this.state.num + a;
    this.setState({ num: num2 });
  };
  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.num} />
        <Buttons p={this.changingInput} />
      </div>
    );
  }
}

export default App;
