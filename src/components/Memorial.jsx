import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Memorial extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/memorial/${id}`);
  };
  render() {
    const { project } = this.props;
    if (project === null) {
      return <p>Este Memoria não exite </p>;
    }

    const id = 0;

    return (
      <Link to={`/memorial/${id}`} className="memorial">
        <p />
      </Link>
    );
  }
}

export default withRouter(connect()(Memorial));
