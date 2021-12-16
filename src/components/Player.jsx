import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { id, myScore } = this.props;
    return (
      <div>
        <p>Im Player {this.props.id}</p>
        <p>My Score is {this.props.score}</p>
      </div>
    );
  }
}

export default Player;
