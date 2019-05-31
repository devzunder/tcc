import React, { Component } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Card, Icon } from "antd";
import { NavLink } from "react-router-dom";
import { handleDeleteProject } from "../actions/projects";
import Swal from "sweetalert2";
const { Meta } = Card;

class Project extends Component {
  handleDelete = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    const deleteId = parseFloat(this.props.id);
    console.log("delete ", this.props.id);
    Swal.fire({
      title: "Você tem certeza?",
      text: "Não será possível reverter essa ação!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sim, quero deletar!"
    }).then(result => {
      if (result.value) {
        try {
          dispatch(handleDeleteProject(deleteId));
        } catch (e) {
          console.warn(e);
        } finally {
          Swal.fire(
            "Deletado!",
            "O seu dimensionamento foi removido.",
            "success"
          );
        }
      }
    });
  };
  render() {
    const { project } = this.props;
    return (
      <div className="item">
        <Card
          style={{
            marginLeft: 30,
            marginTop: 16,
            marginRight: 30,
            marginBottom: 0
          }}
          actions={[
            <NavLink to={`project/${this.props.id}`}>
              <Icon type="eye" />
            </NavLink>,
            <Icon type="delete" onClick={this.handleDelete} />
          ]}
        >
          <Meta
            title={project.name}
            description={`Sistema com  ${
              project.data.tanques
            } tanques e volume unitário de ${project.data.volume} m³`}
          />
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
