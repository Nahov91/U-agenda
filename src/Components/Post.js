import React, { Component } from "react";
import Creator from "./Creator";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: this.props.allData
    };
  }

  render() {
    return (
      <ul className="presentations-list">
      {this.props.allData.map(presentation=>(
        <li className="presentation-item" key={presentation._id}>
          <section className="post">
            <h5 className="post-tag" style={{ background: presentation.stage.color}} > {presentation.stage.name} </h5>
            <div className="post-location">
              <img
                src="https://res.cloudinary.com/nahov91/image/upload/v1540942137/Icon_24px_1.png"
                alt="date"
              />
              <p> {presentation.stage.room} </p>
            </div>
            <div className="post-date">
            <img
                src="https://res.cloudinary.com/nahov91/image/upload/v1540826910/Icon_24px.png"
                alt="date"
              />
              <time> Day {presentation.day} {presentation.dateFrom} </time>
            </div>
            <h3 className="post-title"> {presentation.title} </h3>
            <p className="post-description"> {presentation.abstract.substring(0,220)} <a href="google.com" className="more-link">...More</a> </p>
            <Creator />
          </section>
        </li>
      ))}
      </ul>
    );
  }
}
