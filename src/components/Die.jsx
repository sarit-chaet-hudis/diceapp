import React from "react";
import "./Die.css";
import dice1 from "./../assets/images/1.png";
import dice2 from "./../assets/images/2.png";
import dice3 from "./../assets/images/3.png";
import dice4 from "./../assets/images/4.png";
import dice5 from "./../assets/images/5.png";
import dice6 from "./../assets/images/6.png";

class Die extends React.Component {
  showDice(dieValue) {
    switch (dieValue) {
      case 1:
        return dice1;
      case 2:
        return dice2;
      case 3:
        return dice3;
      case 4:
        return dice4;
      case 5:
        return dice5;
      case 6:
        return dice6;
      default:
        return undefined;
    }
  }
  render() {
    return (
      <img
        src={this.showDice(this.props.dieValue)}
        alt={`${this.props.dieValue}`}
      />
    );
  }
}

export default Die;
