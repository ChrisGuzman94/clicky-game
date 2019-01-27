import React, { Component } from "react";

class navBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <ul>
          <li className="navbar-brand mb-0 h1">
            Highscore:
            <li className="badge badge-warning">{this.props.highscore}</li>
          </li>
          <li className="navbar-brand mb-0 h1">
            CurrentScore:
            <li className="badge badge-warning">{this.props.currentScore}</li>
          </li>
        </ul>
        <h2>Click any character to begin!</h2>
      </nav>
    );
  }
}

export default navBar;
