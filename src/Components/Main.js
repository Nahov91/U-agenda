import React, { Component } from "react";
import Hero from "./Hero";
import AtGlance from "./AtGlance";
import Sessions from "./Sessions";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: this.props.allData,
    };
  }

  render() {
    return (
      <div>
        <Hero allData={this.props.allData} />
        <AtGlance />
        <Sessions allData={this.props.allData} />
      </div>
    );
  }
}
