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
    pointsToWin: 20,
    userMessage: "Ready to Roll?",
    die1Value: undefined,
    die2Value: undefined,
    isButtonsDisabled: false,
  };

  awwSound = new Audio(sound);
  switchTurns = () => {
    //TODO find out if this syntax is doing what i thought and why no : is involved
    this.setState((prev) => (prev.player0.isActive = !prev.player0.isActive));
    this.setState((prev) => (prev.player1.isActive = !prev.player1.isActive));
  };

  legitRoll({ die1, die2 }) {
    // checks if roll is legit, i.e. dice are different value
    return die1 === die2 ? false : true;
  }

  updatePlayer = () => {
    console.log("player wins");
  };

  handleDiceResult = ({ die1, die2 }) => {
    this.setState({ die1Value: die1, die2Value: die2 });
    // Checks if legit roll, if so - add to current round score.

    if (this.legitRoll({ die1, die2 })) {
      // Update current score
      const dieSum = die1 + die2;
      this.setState((prev) => {
        return { currentScore: prev.currentScore + dieSum };
      });
      // Check if active player wins
      const activeP = this.getActivePlayer();
      if (
        activeP.score + this.state.currentScore + dieSum >
        this.state.pointsToWin
      ) {
        // We have a winner!
        const activePlayerCopy = Object.assign({}, activeP);
        activePlayerCopy.score += this.state.currentScore + dieSum;
        this.setState({
          userMessage: `Player ${activeP.id + 1} Wins!!`,
          isButtonsDisabled: true,
          [`player${activeP.id}`]: activePlayerCopy,
        });
      }
    } else {
      // Not a legit roll. Reset current score and switch turns.
      this.awwSound.currentTime = 0;
      this.awwSound.play();
      this.setState({
        // Immediately (asap..)
        currentScore: 0,
        userMessage: "AWWWWW",
        isButtonsDisabled: true,
      });
      setTimeout(() => this.switchTurns(), 1000);
      setTimeout(
        () =>
          this.setState({
            // After 1 second
            isButtonsDisabled: false,
            userMessage: "Ready to Roll?",
            die1Value: undefined,
            die2Value: undefined,
          }),
        1000
      );
    }
  };

  getActivePlayer() {
    const playerArray = [this.state.player0, this.state.player1];
    const activePlayer = playerArray.find((p) => p.isActive);
    return activePlayer;
  }

  hold = () => {
    // add current score to total player score, then reset current score
    const activeP = this.getActivePlayer();
    const activePlayerCopy = Object.assign({}, activeP);
    activePlayerCopy.score += this.state.currentScore;

    this.setState({ [`player${activeP.id}`]: activePlayerCopy });
    this.setState({
      currentScore: 0,
      die1Value: undefined,
      die2Value: undefined,
    });
    this.switchTurns();
  };

  newGame() {
    // Init game
    this.setState({
      currentScore: 0,
      player0: { id: 0, score: 0, isActive: false },
      player1: { id: 1, score: 0, isActive: true },
      userMessage: "Ready to Roll?",
      isButtonsDisabled: false,
      die1Value: undefined,
      die2Value: undefined,
    });
  }

  changePointsToWin(e) {
    this.setState({ pointsToWin: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="topMenu">
          <button id="newGame" onClick={() => this.newGame()}>
            New Game
          </button>
          <label htmlFor="pointsToWin" id="pointsLabel">
            Points to Win:
          </label>
          <input
            type="number"
            id="pointsToWin"
            placeholder="?"
            value={this.state.pointsToWin}
            onChange={(e) => this.changePointsToWin(e)}
          ></input>
        </div>
        <h1 className="top">Welcome to Dice Game!</h1>

        <div className="playerWrapper">
          <div
            className={
              this.state.player0.isActive
                ? "active playerContainer"
                : "playerContainer"
            }
          >
            <Player id={this.state.player0.id} score={this.state.player0.score}>
              <GiBatMask />
            </Player>
          </div>
          <div
            className={
              this.state.player1.isActive
                ? "active playerContainer"
                : "playerContainer"
            }
          >
            <Player id={this.state.player1.id} score={this.state.player1.score}>
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
            displayDice={this.state.displayDice}
            isButtonsDisabled={this.state.isButtonsDisabled}
            die1Value={this.state.die1Value}
            die2Value={this.state.die2Value}
          />
        </div>
      </div>
    );
  }
}

export default Game;
