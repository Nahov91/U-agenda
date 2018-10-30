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
      <ul className="events-list">
        <li>
          <section className="post">
            <h5 className="post-tag" />
            <p className="post-place" />
            <date className="post-date" />
            <h3 className="post-title" />
            <p className="post-description" />
            <Creator />
          </section>
        </li>
      </ul>
    );
  }
}
