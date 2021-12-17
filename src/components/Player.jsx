import React from "react";
import "./Player.css";

class Player extends React.Component {
  render() {
    return (
      <div className={this.props.isActive ? "active" : undefined}>
        <p className="avatar">{this.props.children}</p>
        <p>Im Player {this.props.id}</p>
        <p className={this.props.isActive ? undefined : "hide"}>My turn!</p>
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
