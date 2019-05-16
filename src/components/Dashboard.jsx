import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "./Project.jsx";

class Dashboard extends Component {
  render() {
    console.log(this.props.projectsIds);
    return (
      <div>
        <ul className="list row">
          {this.props.projectsIds.map(id => (
            <li key={id}>
              <Project id={id} key={id} />
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
export default connect(mapStateToProps)(Dashboard);
