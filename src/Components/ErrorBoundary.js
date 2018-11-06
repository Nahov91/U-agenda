import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="error-message">
          <h1 className="error-title">
            Uh-oh. Failed to load data from the server.
          </h1>
          <p className="error-desc">
            The required data can't be loaded due to an error. Please try again
            in a few minutes!
          </p>
        </section>
      );
    }

    return this.props.children;
  }
}
