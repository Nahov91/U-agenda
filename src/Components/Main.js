import React, { Component } from "react";
import Hero from "./Hero";
import AtGlance from "./AtGlance";
import Sessions from "./Sessions";
import ErrorBoundary from "./ErrorBoundary";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: this.props.allData
    };
  }

  render() {
    return (
      <div>
        <Hero allData={this.props.allData} />
          <AtGlance />
        <ErrorBoundary>
          <Sessions allData={this.props.allData} />
        </ErrorBoundary>
      </div>
    );
  }
}
