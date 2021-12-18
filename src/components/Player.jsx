import React from "react";
import "./Player.css";

class Player extends React.Component {
  render() {
    return (
      <div>
        <p className="avatar">{this.props.children}</p>
        <h3>Player {this.props.id + 1}</h3>
        <p>My Score is {this.props.score}</p>
      </div>
    );
  }
}

Player.defaultProps = {
  isActive: false,
  id: 0,
  score: 0,
};

export default Player;
