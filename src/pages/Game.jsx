import React from "react";
import "./Game.css";
import GameControls from "../components/GameControls";
import Player from "../components/Player";
import { GiBatMask, GiAlienStare } from "react-icons/gi";
import sound from "./../assets/sounds/aww.wav";

class Game extends React.Component {
  state = {
    currentScore: 0,
    player0: { id: 0, score: 0, isActive: false },
    player1: { id: 1, score: 0, isActive: true },
    pointsToWin: 100,
    userMessage: "Ready to Roll?",
  };

  awwSound = new Audio(sound);
  switchTurns = () => {
    //TODO find out if this syntax is doing what i thought and why no : is involved
    this.setState((prev) => (prev.player0.isActive = !prev.player0.isActive));
    this.setState((prev) => (prev.player1.isActive = !prev.player1.isActive));
    setTimeout(() => this.setState({ userMessage: "Ready to Roll?" }), 1000);
  };

  legitRoll({ die1, die2 }) {
    // checks if roll is legit, i.e. dice are different value
    return die1 === die2 ? false : true;
  }

  handleDiceResult = ({ die1, die2 }) => {
    // Checks if legit roll, if then add to current round score.
    if (this.legitRoll({ die1, die2 })) {
      this.setState((prev) => {
        return { currentScore: prev.currentScore + die1 + die2 };
      });
    } else {
      this.awwSound.play();
      this.setState({ currentScore: 0, userMessage: "AWWWWW" });
      setTimeout(() => this.switchTurns(), 1000);
      // TODO reset dice display!
    }
  };

  getActivePlayer() {
    const playerArray = [this.state.player0, this.state.player1];
    const activePlayer = playerArray.find((p) => p.isActive);
    return activePlayer;
  }

  hold = () => {
    // add current score to total player score, then reset current score
    const active = this.getActivePlayer();
    const activePlayerCopy = Object.assign({}, active);
    activePlayerCopy.score += this.state.currentScore;

    this.setState({ [`player${active.id}`]: activePlayerCopy });
    this.setState({ currentScore: 0 });
    this.switchTurns();
  };

  render() {
    return (
      <div>
        <h1>Welcome to Dice Game!</h1>
        <div className="playerWrapper">
          <div className="playerContainer">
            <Player
              id={this.state.player0.id}
              score={this.state.player0.score}
              isActive={this.state.player0.isActive}
            >
              <GiBatMask />
            </Player>
          </div>
          <div className="playerContainer">
            <Player
              id={this.state.player1.id}
              score={this.state.player1.score}
              isActive={this.state.player1.isActive}
            >
              <GiAlienStare />
            </Player>
          </div>
        </div>
        <div className="gameControls">
          <GameControls
            userMessage={this.state.userMessage}
            currentScore={this.state.currentScore}
            handleDiceResult={this.handleDiceResult}
            hold={this.hold}
            dice={[undefined, undefined]}
          />
        </div>
      </div>
    );
  }
}

export default Game;
