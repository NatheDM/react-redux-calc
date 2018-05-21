import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  upUp() {
    this.setState({
      number: this.state.number + 1
    });
  }

  downDown() {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.upUp()}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={() => this.downDown()}>-</button>
      </div>
    );
  }
}

export default Counter;
