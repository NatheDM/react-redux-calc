import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  number: state.number
});

const mapDispatchToProps = dispatch => ({
  upUp: () => dispatch({ type: "UPUP" }),
  downDown: () => dispatch({ type: "DOWNDOWN" }),
  doubleDouble: () => dispatch({ type: "DOUBLEDOUBLE" })
});

const Counter = props => (
  <div>
    <button onClick={() => props.upUp()}>+</button>
    <h1>{props.number}</h1>
    <button onClick={() => props.downDown()}>-</button>
    <br />
    <button onClick={() => props.doubleDouble()}>*2</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
