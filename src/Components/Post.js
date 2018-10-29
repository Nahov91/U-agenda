import React, { Component } from 'react'
import Creator from './Creator';

export default class Post extends Component {
  render() {
    return (
      <>
      <section className="post">
        <h5 className="post-tag"></h5>
        <p className="post-place"></p>
        <date className="post-date"></date>
        <h3 className="post-title"></h3>
        <p className="post-description"></p>
        <Creator></Creator>
        </section>
      </>
    )
  }
}
