import React from "react";
import Die from "./Die";
import "./GameControls.css";
import { GiRollingDices } from "react-icons/gi";
import { MdFrontHand } from "react-icons/md";
import sound from "./../assets/sounds/dice-sound.mp3";

class GameControls extends React.Component {
  diceSound = new Audio(sound);
  roll = () => {
    this.diceSound.currentTime = 0;
    this.diceSound.play();
    const die1 = Math.ceil(Math.random() * 6);
    const die2 = Math.ceil(Math.random() * 6);
    this.props.handleDiceResult({ die1, die2 });
  };

  renderButtons() {
    if (!this.props.isButtonsDisabled) {
      // Render enabled buttons
      return (
        <>
          <button id="roll" onClick={this.roll}>
            Roll <GiRollingDices />
          </button>
          <button
            id="hold"
            onClick={() => {
              this.props.hold();
            }}
          >
            Hold <MdFrontHand />
          </button>
        </>
      );
    } else {
      // Render disabled buttons
      return (
        <>
          <button id="roll" disabled>
            Roll <GiRollingDices />
          </button>
          <button id="hold" disabled>
            Hold <MdFrontHand />
          </button>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <h3 className="userMessage">{this.props.userMessage}</h3>
        <div className="diceContainer">
          <Die dieValue={this.props.die1Value} />
          <Die dieValue={this.props.die2Value} />
        </div>
        <h3>Current score is: {this.props.currentScore}</h3>
        {this.renderButtons()}
      </>
    );
  }
}

export default GameControls;
