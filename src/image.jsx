import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <img
        onClick={this.props.clickHandler}
        style={this.props.style}
        src={this.props.src}
        alt=""
        id={this.props.id}
      />
    );
  }
}
