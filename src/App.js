import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: [],
    };
  }

  /* fetching data from API */
  componentDidMount() {
    fetch(
      "https://unleash.site/api/agendas/list?event=5b86aa9be9bef44a7491e80f"
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          allData: data.data
        })
      )
      .catch(err => console.log("Error loading data from the server"));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main allData={this.state.allData} query={this.state.query} filteredData={this.state.filteredData} />
      </div>
    );
  }
}

export default App;
