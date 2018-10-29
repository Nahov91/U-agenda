import React, { Component } from 'react'

export default class AtGlance extends Component {
  render() {
    return (
      <div>
        <h1 className="title">AGENDA AT GLANCE</h1>
        <nav className="days">
        <a className="day-link" href="google.com">DAY 1</a>
        <a className="day-link" href="google.com">DAY 2</a>
        <img className="agendaImg" src="https://media.unleashgroup.io/admin/5b98c618e8d372a64882857e/e0789130-c63e-11e8-acce-c9e2624ac6b5.png" alt=""/>
        </nav>
      </div>
    )
  }
}
