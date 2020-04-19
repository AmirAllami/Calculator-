import React from "react";

class Buttons extends React.Component {
  render(props) {
    return (
      <div>
        <div className="first-case"></div>
        <button
          onClick={() => {
            this.props.p(0);
          }}
        >
          0
        </button>
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
          onClick={() => {
            this.props.b("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.b("-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.props.b("*");
          }}
        >
          ×
        </button>
        <button
          onClick={() => {
            this.props.b("/");
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            this.props.c();
          }}
        >
          =
        </button>
        <button
          onClick={() => {
            this.props.dot();
          }}
        >
          .
        </button>
        <button
          onClick={() => {
            this.props.ac();
          }}
        >
          AC
        </button>
        <button>+/-</button>
        <button
          onClick={() => {
            this.props.ce();
          }}
        >
          CE
        </button>
      </div>
    );
  }
}

export default Buttons;
