import React from "react";
import "./Game.css";
import GameControls from "../components/GameControls";
import Player from "../components/Player";

class Game extends React.Component {
  state = { playerTurn: 1, player1Score: 0, player2Score: 0 };
  render() {
    return (
      <div>
        <p>This is Game!!</p>
        <p>Whos turn is it: {this.state.playerTurn}</p>
        <div className="playerContainer">
          <Player id="1" score={this.state.player1Score} />
          <Player id="2" score={this.state.player2Score} />
        </div>
        <div className="gameControls">
          <GameControls />
        </div>
      </div>
    );
  }
}

export default Game;
