import React from "react";
import Die from "./Die";

class GameControls extends React.Component {
  roll = () => {
    const result = Math.ceil(Math.random() * 11) + 1;
    console.log(`result of throw dice is ${result}`);
    this.props.addDiceResult(result);
  };

  render() {
    return (
      <>
        hi Im Game Controls
        <p>Current score is: {this.props.currentScore}</p>
        <Die />
        <Die />
        <button id="roll" onClick={this.roll}>
          Roll
        </button>
        <button id="hold" onClick={this.props.hold}>
          Hold
        </button>
      </>
    );
  }
}

export default GameControls;
