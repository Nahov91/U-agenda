import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: {},
    }
  }


  componentDidMount() {
    fetch('https://unleash.site/api/agendas/list?event=5b86aa9be9bef44a7491e80f')
    .then(response => response.json())
    .then(data =>
      this.setState({
        allData: data,
      }))
      .catch(err => alert("Error loading data from the server"));
  }
  

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Main/>
      </div>
    );
  }
}

export default App;
