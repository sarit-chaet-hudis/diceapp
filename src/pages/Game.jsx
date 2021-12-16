import React from "react";
import GameControls from "../components/GameControls";
import Player from "../components/Player";

class Game extends React.Component {
  // state = { currentPlayer: 1 };
  render() {
    return (
      <div>
        <p>This is Game!!</p>
        <p>this is my state: {this.state}</p>
        <Player />
        <Player />
        <GameControls />
      </div>
    );
  }
}

export default Game;
