import React from "react";

class Buttons extends React.Component {
  render(props) {
    return (
      <div className="container">
        <div className="btn">
          <button
            onClick={() => {
              this.props.ac();
            }}
          >
            AC
          </button>
          <button
            onClick={() => {
              this.props.neg();
            }}
          >
            +/-
          </button>
          <button
            onClick={() => {
              this.props.ce();
            }}
          >
            CE
          </button>
          <button
            className="dark"
            onClick={() => {
              this.props.b("/");
            }}
          >
            /
          </button>
        </div>

        <div className="btn">
          <button
            onClick={() => {
              this.props.p(7);
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              this.props.p(8);
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              this.props.p(9);
            }}
          >
            9
          </button>
          <button
            className="dark"
            onClick={() => {
              this.props.b("*");
            }}
          >
            ×
          </button>
        </div>

        <div className="btn">
          <button
            onClick={() => {
              this.props.p(4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              this.props.p(5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              this.props.p(6);
            }}
          >
            6
          </button>
          <button
            className="dark"
            onClick={() => {
              this.props.b("-");
            }}
          >
            -
          </button>
        </div>

        <div className="btn">
          <button
            onClick={() => {
              this.props.p(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              this.props.p(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              this.props.p(3);
            }}
          >
            3
          </button>
          <button
            className="dark"
            onClick={() => {
              this.props.b("+");
            }}
          >
            +
          </button>
        </div>

        <div className="btn">
          <button
            onClick={() => {
              this.props.dot();
            }}
          >
            .
          </button>
          <button
            onClick={() => {
              this.props.p(0);
            }}
            className="btn0"
          >
            0
          </button>
          <button
            className="dark"
            onClick={() => {
              this.props.c();
            }}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
