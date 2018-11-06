import React, { Component } from "react";
import Post from "./Post";
import escapeRegExp from "escape-string-regexp";

export default class Sessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: this.props.allData,
      query: "",
      filteredData: [],
      topic: "",
      day: ""
    };
  }

  /* functions that update the search and selector fields */
  updateQuery(query) {
    this.setState({ query: query });
  }

  updateTopicSelector(topic) {
    this.setState({ topic: topic });
  }

  updateDaySelector(day) {
    this.setState({ day: day });
  }

  render() {
    /* Search and filter functionality. Currently items work one by one. Filtering for match. */
    let filteredData;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      filteredData = this.props.allData.filter(presentation =>
        match.test(presentation.title)
      );
    } else if (this.state.topic) {
      const match = new RegExp(escapeRegExp(this.state.topic), "i");
      filteredData = this.props.allData.filter(presentation =>
        match.test(presentation.stage.name)
      );
    } else if (this.state.day) {
      const match = new RegExp(escapeRegExp(this.state.day), "i");
      filteredData = this.props.allData.filter(presentation =>
        match.test(presentation.day)
      );
    } else {
      filteredData = this.props.allData;
    }

    /* creates array from stage names */
    const allStageNames = this.props.allData.map(
      presentation => presentation.stage.name
    );

    return (
      <section id="sessions">
        <h1 className="title">SESSIONS</h1>
        <div className="form-wrapper">
          <form action="" id="search-form">
            <input
              type="search"
              className="search"
              placeholder="Search name, keyword..."
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
            <select
              className="topic"
              name="Topic"
              defaultValue="Topic"
              onChange={event => this.updateTopicSelector(event.target.value)}
            >
              <option className="topic-name" value="Topic" disabled>
                Topic
              </option>
              {/* creating a set from stage names to get unique values than converting it back to array and mapping through it to create options for selector */}
              {[...new Set(allStageNames)].map(topic => (
                <option key={topic} value={topic}> {topic} </option>
              ))}
            </select>
            <select
              className="date"
              name="Day"
              defaultValue="Day"
              onChange={event => this.updateDaySelector(event.target.value)}
            >
              <option value="Day" disabled>
                Day
              </option>
              <option value="1">Day 1</option>
              <option value="2">Day 2</option>
            </select>
          </form>
        </div>
        <Post
          allData={this.props.allData}
          filteredData={filteredData}
          query={this.state.query}
        />
      </section>
    );
  }
}
