import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: this.props.allData,
      filteredData: this.props.filteredData,
      query: this.props.query
    };
  }

  render() {
    let filteredData = this.props.filteredData;
    return (
      <ul className="presentations-list">
        {/* displaying only the first 15 results */}
        {filteredData.slice(0, 15).map(presentation => (
          <li className="presentation-item" key={presentation._id}>
            <section className="post">
              <h5
                className="post-tag"
                style={{ background: presentation.stage.color }}
              >
                {" "}
                {presentation.stage.name}{" "}
              </h5>
              <div className="post-location">
                <img
                  src="https://res.cloudinary.com/nahov91/image/upload/v1540942137/Icon_24px_1.png"
                  alt="date"
                />
                <p> {presentation.stage.room} </p>
              </div>
              <div className="post-date">
                <img
                  src="https://res.cloudinary.com/nahov91/image/upload/v1540826910/Icon_24px.png"
                  alt="date"
                />
                <time>
                  {" "}
                  Day {presentation.day} {presentation.dateFrom}{" "}
                </time>
              </div>
              <h3 className="post-title"> {presentation.title} </h3>
              <p className="post-description">
                {" "}
                {presentation.abstract.substring(0, 220)}{" "}
                <a href="google.com" className="more-link">
                  ...More
                </a>{" "}
              </p>
              <ul className="creator-list">
                {presentation.speakers.map(speaker => (
                  <li key={speaker._id} className="creator">
                    <img
                      src={speaker.avatar.url}
                      alt={speaker.name}
                      className="creator-img"
                    />
                    <h5 className="creator-name"> {speaker.name} </h5>
                    <h6 className="creator-company">
                      {" "}
                      {speaker.post} · {speaker.company}{" "}
                    </h6>
                  </li>
                ))}
              </ul>
            </section>
          </li>
        ))}
      </ul>
    );
  }
}
