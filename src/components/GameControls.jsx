import React from "react";
import Die from "./Die";

class GameControls extends React.Component {
  render() {
    return (
      <>
        hi Im Game Controls
        <Die />
        <Die />
        <button id="roll">Roll</button>
        <button id="hold">Hold</button>
      </>
    );
  }
}

export default GameControls;
