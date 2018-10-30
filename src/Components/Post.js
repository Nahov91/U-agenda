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
            <p className="post-location"> {presentation.stage.room} </p>
            <date className="post-date"> Day {presentation.day} {presentation.dateFrom} </date>
            <h3 className="post-title"> {presentation.title} </h3>
            <p className="post-description"> {presentation.abstract} </p>
            <Creator />
          </section>
        </li>
      ))}
      </ul>
    );
  }
}
