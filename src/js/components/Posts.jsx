import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Posts extends Component {
  componentDidMount() {
    this.props.getData(); // call new action creator
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.remoteArticles.slice(3, 6)
});

// const mapDispatchToProps = {

// }

export default connect(
  mapStateToProps,
  { getData }
)(Posts);
