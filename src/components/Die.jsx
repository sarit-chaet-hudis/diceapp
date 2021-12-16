import React from "react";

class Die extends React.Component {
  render() {
    return <p className="Die">{this.props.dieValue}</p>;
  }
}

export default Die;
