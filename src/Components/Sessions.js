import React, { Component } from 'react';
import Post from "./Post"

export default class Sessions extends Component {
    render() {
        return (
            <>
                <h1 className="title">SESSIONS</h1>
                <form action="" id="search-form">
                    <input type="search" className="search" placeholder="Search name, keyword" />
                    <select name="Topic" id="topic">
                        <option value="first">First</option>
                        <option value="second">Second</option>
                    </select>
                    <input type="date" id="date" />
                </form>
                <Post/>
            </>
        )
    }
}
