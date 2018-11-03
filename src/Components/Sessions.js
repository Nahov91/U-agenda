import React, { Component } from "react";
import Post from "./Post";
import escapeRegExp from "escape-string-regexp"

export default class Sessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: this.props.allData,
      query: "",
      filteredData: []
    };
  }

  updateQuery(query) {
    this.setState({query:query})
  }

  render() {
    
    let filteredData;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      filteredData = this.props.allData.filter(presentation=> 
        match.test(presentation.title));
    } else {
      filteredData = this.props.allData;
    }

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
              onChange={(event) => this.updateQuery(event.target.value)}
            />
            <select className="topic" name="Topic" defaultValue="Topic">
              <option value="Topic" disabled>
                Topic
              </option>
              <option value="going digital">Going digital</option>
              <option value="second">Second</option>
            </select>
            <select className="date" name="Day" defaultValue="Day">
              <option value="Day" disabled>
                Day
              </option>
              <option value="Day 1">Day 1</option>
              <option value="Day 2">Day 2</option>
            </select>
          </form>
        </div>
        <Post allData={this.props.allData} filteredData={filteredData} query={this.state.query} />
      </section>
    );
  }
}
