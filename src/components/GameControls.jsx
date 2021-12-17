import React from "react";
import Die from "./Die";
import "./GameControls.css";
import { GiRollingDices } from "react-icons/gi";
import { MdFrontHand } from "react-icons/md";

class GameControls extends React.Component {
  state = { die1Value: undefined, die2Value: undefined };
  roll = () => {
    const die1 = Math.ceil(Math.random() * 6);
    const die2 = Math.ceil(Math.random() * 6);
    this.showDice({ die1, die2 });
    this.props.addDiceResult(die1 + die2);
  };

  showDice({ die1, die2 }) {
    this.setState(() => {
      return { die1Value: die1, die2Value: die2 };
    });
  }

  resetDice() {
    this.setState(() => {
      return { die1Value: undefined, die2Value: undefined };
    });
  }

  render() {
    return (
      <>
        hi Im Game Controls
        <p>Current score is: {this.props.currentScore}</p>
        <div className="diceContainer">
          <Die dieValue={this.state.die1Value} />
          <Die dieValue={this.state.die2Value} />
        </div>
        <button id="roll" onClick={this.roll}>
          Roll <GiRollingDices />
        </button>
        <button
          id="hold"
          onClick={() => {
            this.props.hold();
            this.resetDice();
          }}
        >
          Hold <MdFrontHand />
        </button>
      </>
    );
  }
}

export default GameControls;
