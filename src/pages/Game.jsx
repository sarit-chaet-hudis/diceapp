import React from "react";
import "./Game.css";
import GameControls from "../components/GameControls";
import Player from "../components/Player";

class Game extends React.Component {
  state = {
    currentScore: 0,
    player1: { id: 1, score: 0, isActive: false },
    player2: { id: 2, score: 0, isActive: true },
  };

  switchTurns = () => {
    this.setState((prev) => (prev.player1.isActive = !prev.player1.isActive));
    this.setState((prev) => (prev.player2.isActive = !prev.player2.isActive));
  };

  render() {
    return (
      <div>
        <p>This is Game!!</p>

        <div className="playerContainer">
          <Player
            id={this.state.player1.id}
            score={this.state.player1.score}
            isActive={this.state.player1.isActive}
          />
          <Player
            id={this.state.player2.id}
            score={this.state.player2.score}
            isActive={this.state.player2.isActive}
          />
        </div>
        <div className="gameControls">
          <GameControls />
        </div>
      </div>
    );
  }
}

export default Game;
