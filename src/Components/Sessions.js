import React, { Component } from "react";
import Post from "./Post";
import escapeRegExp from "escape-string-regexp"

export default class Sessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: this.props.allData,
      query: "",
      filteredData: [],
      topic:""
    };
  }

  updateQuery(query) {
    this.setState({query:query})
  }

  updateTopicSelector(topic) {
    this.setState({topic: topic})
  }


  render() {
    
    let filteredData;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      filteredData = this.props.allData.filter(presentation=> 
        match.test(presentation.title));
    } else if (this.state.topic) { 
      const match = new RegExp(escapeRegExp(this.state.topic), "i");
      filteredData = this.props.allData.filter(presentation=>
        match.test(presentation.stage.name))
    } else {
      filteredData = this.props.allData;
    }

    const allStageNames = this.props.allData.map(presentation=>(presentation.stage.name));

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
            <select className="topic" name="Topic" defaultValue="Topic" onChange={(event) => this.updateTopicSelector(event.target.value)}>
              <option className="topic-name" value="Topic" disabled>
                Topic
              </option>
              {[...new Set(allStageNames)].map(topic=>
              <option value={topic}> {topic} </option>
            )}
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
