import React from "react";
import "./Game.css";
import GameControls from "../components/GameControls";
import Player from "../components/Player";

class Game extends React.Component {
  state = {
    currentScore: 0,
    player0: { id: 0, score: 0, isActive: false },
    player1: { id: 1, score: 0, isActive: true },
  };

  switchTurns = () => {
    //TODO find out if this syntax is doing what i thought and why no : is involved
    this.setState((prev) => (prev.player0.isActive = !prev.player0.isActive));
    this.setState((prev) => (prev.player1.isActive = !prev.player1.isActive));
  };

  addDiceResult = (result) => {
    this.setState((prev) => {
      return { currentScore: prev.currentScore + result };
    });
  };

  getActivePlayer() {
    const playerArray = [this.state.player0, this.state.player1];
    const activePlayer = playerArray.find((p) => p.isActive);
    return activePlayer;
  }

  hold = () => {
    // add current score to total player score, then reset current score
    const active = this.getActivePlayer();
    console.log(`active player is ${active.id}`);
    const activePlayerCopy = Object.assign({}, active);
    activePlayerCopy.score += this.state.currentScore;
    console.log(`new score of active copy is ${activePlayerCopy.score}`);

    this.setState({ [`player${active.id}`]: activePlayerCopy });
    this.setState({ currentScore: 0 });
    this.switchTurns();
  };

  render() {
    return (
      <div>
        <p>This is Game!!</p>

        <div className="playerContainer">
          <Player
            id={this.state.player0.id}
            score={this.state.player0.score}
            isActive={this.state.player0.isActive}
          />
          <Player
            id={this.state.player1.id}
            score={this.state.player1.score}
            isActive={this.state.player1.isActive}
          />
        </div>
        <div className="gameControls">
          <GameControls
            currentScore={this.state.currentScore}
            addDiceResult={this.addDiceResult}
            hold={this.hold}
          />
        </div>
      </div>
    );
  }
}

export default Game;
