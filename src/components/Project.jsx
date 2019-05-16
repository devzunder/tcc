import React, { Component } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Card, Icon } from "antd";
import { NavLink } from "react-router-dom";
import { handleDeleteProject } from "../actions/projects";
const { Meta } = Card;

class Project extends Component {
  handleDelete = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    console.log("delete ", this.props.id);
    dispatch(handleDeleteProject(this.props.id));
  };
  render() {
    const { project } = this.props;
    return (
      <div>
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <NavLink to={`project/${this.props.id}`}>
              <Icon type="eye" />
            </NavLink>,
            <Icon type="delete" onClick={this.handleDelete} />
          ]}
        >
          <Meta title={project.name} description="This is the description" />
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ projects }, { id }) {
  const project = projects[id];
  return {
    //authedUser,
    project: project
      ? project /*formatTweet(tweet, /*users[tweet.author], authedUser, parentTweet ) */
      : null
  };
}

export default connect(mapStateToProps)(Project);
