import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <button className="headerLogo">
          <img
            src="https://res.cloudinary.com/nahov91/image/upload/v1540807689/3_black.png"
            alt=""
          />
        </button>
        <nav>
          <button className="headerImage">
            <img
              src="https://res.cloudinary.com/nahov91/image/upload/v1540807689/Shape.png"
              alt=""
            />
          </button>
          <button className="headerImage">
            <img
              src="https://res.cloudinary.com/nahov91/image/upload/v1540807689/profile_1335.png"
              alt=""
            />
          </button>
          <button className="headerImage">
            <img
              src="https://res.cloudinary.com/nahov91/image/upload/v1540807776/Shape_1.png"
              alt=""
            />
          </button>
        </nav>
      </header>
    );
  }
}
