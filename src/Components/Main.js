import React, { Component } from 'react'
import Hero from "./Hero"
import AtGlance from './AtGlance';
import Sessions from './Sessions';


export default class Main extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <AtGlance/>
        <Sessions/>
      </div>
    )
  }
}
