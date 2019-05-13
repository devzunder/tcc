import React, { Component } from "react";
import { connect } from "react-redux";
import Memorial from "./Memorial.jsx";
import { NavLink } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <div>
        <NavLink className="btn" type="submit" to="/new">
          Dimensionar
        </NavLink>
        <ul className="list">
          {this.props.projectsIds.map(id => (
            <li key={id}>
              <Memorial id={id}>${id}</Memorial>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ projects }) {
  return {
    projectsIds: Object.keys(projects)
  };
}
export default connect(mapStateToProps)(Projects);
