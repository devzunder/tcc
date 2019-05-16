import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Project from "./Project.jsx";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

class Dashboard extends Component {
  render() {
    console.log(this.props.projectsIds);
    return (
      <Fragment>
        <div style={{ marginTop: 10, margin: 30 }}>
          <NavLink className="btn" to="/new">
            Dimensionar
          </NavLink>
        </div>
        <Row type="flex" justify="center" align="top">
          <div>
            <ul className="list">
              {this.props.projectsIds.map(id => (
                <Col
                  sm={{ span: 9, offset: 2 }}
                  lg={{ span: 6, offset: 2 }}
                  md={{ span: 7, offset: 2 }}
                >
                  <li key={id}>
                    <Project id={id} key={id} />
                  </li>
                </Col>
              ))}
            </ul>
          </div>
        </Row>
      </Fragment>
    );
  }
}

function mapStateToProps({ projects }) {
  return {
    projectsIds: Object.keys(projects)
  };
}
export default connect(mapStateToProps)(Dashboard);
