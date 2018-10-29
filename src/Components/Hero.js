import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <section id="hero-container">
        <div className="hero">
          <section className="event-data">
            <mark className="event-name">UNLEASH World Conference & Expo</mark>
            <div className="location">
              <img
                src="https://res.cloudinary.com/nahov91/image/upload/v1540814595/ic_location_on.png"
                alt="location"
              />
              <p> Amsterdam Rai</p>
            </div>
            <div className="time">
              <img
                src="https://res.cloudinary.com/nahov91/image/upload/v1540814506/ic_event.png"
                alt="date"
              />
              <time> 23-24. October 2018 </time>
            </div>
          </section>
          <h1 className="hero-title">AGENDA</h1>
          <a href="google.com" className="btn">
            BOOK NOW
          </a>
        </div>
      </section>
    );
  }
}
