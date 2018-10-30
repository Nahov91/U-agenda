import React, { Component } from 'react';
import Post from "./Post"

export default class Sessions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allData: this.props.allData,
          }
    }


    render() {
        return (
            <section id="sessions">
                <h1 className="title">SESSIONS</h1>
                <div className="form-wrapper">
                    <form action="" id="search-form">
                        <input type="search" className="search" placeholder="Search name, keyword..." />
                        <select  className="topic" name="Topic">
                            <option value="Topic" disabled selected value>Topic</option>
                            <option value="going digital">Going digital</option>
                            <option value="second">Second</option>
                        </select>
                        <select className="date" name="Day">
                            <option value="Day" disabled selected value>Day</option>
                            <option value="Day 1">Day 1</option>
                            <option value="Day 2">Day 2</option>
                        </select>
                    </form>
                </div>
                <Post allData= {this.props.allData}/>
            </section>
        )
    }
}
