import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Projects.css";

class Memorial extends Component {
  render() {
    const state = this.props;
    console.log(state.state.projects[state.match.params.id]);
    return <div />;
  }
}

function mapStateToProps(state, { projects }) {
  return { state };
}

export default connect(mapStateToProps)(Memorial);
