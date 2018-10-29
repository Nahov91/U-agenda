import React, { Component } from "react";

export default class AtGlance extends Component {
  render() {
    return (
      <section id="agenda-at-glance">
        <h1 className="title">AGENDA AT GLANCE</h1>
        <nav className="day-selector">
          <a className="day-link" href="google.com">
            DAY 1
          </a>
          <a className="day-link" href="google.com">
            DAY 2
          </a>
        </nav>
        <button className="to-calendar">
          <img
            src="https://res.cloudinary.com/nahov91/image/upload/v1540826910/Icon_24px.png"
            alt="calendar"
          />
          <p> Add to calendar</p>
        </button>
        <section className="agenda-container">
          <img
            className="agenda-image"
            src="https://media.unleashgroup.io/admin/5b98c618e8d372a64882857e/e0789130-c63e-11e8-acce-c9e2624ac6b5.png"
            alt=""
          />
        </section>
      </section>
    );
  }
}
