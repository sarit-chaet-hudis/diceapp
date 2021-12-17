import React from "react";
import "./Player.css";

class Player extends React.Component {
  render() {
    return (
      <div className={this.props.isActive ? "active" : undefined}>
        <p className="avatar">{this.props.children}</p>
        <h3>Player {this.props.id}</h3>
        <p>My Score is {this.props.score}</p>
        <p
          className={this.props.isActive ? undefined : "hide"}
          style={{ color: "red" }}
        >
          My turn!
        </p>
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
