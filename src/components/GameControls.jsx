import React from "react";
import Die from "./Die";

class GameControls extends React.Component {
  roll = () => {
    const die1 = Math.ceil(Math.random() * 6);
    const die2 = Math.ceil(Math.random() * 6);
    console.log(`die 1 is ${die1}, die 2 is ${die2}`);

    this.props.addDiceResult(die1 + die2);
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
