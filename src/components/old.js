import React, { Component } from "react";
import "../styles/New.css";
import { connect } from "react-redux";
import { handleAddProject } from "../actions/projects";
import { Link } from "react-router-dom";

class New extends Component {
  state = {};
  sendData = () => {
    const { dispatch } = this.props;
    //criar um checker para ver campos em branco
    dispatch(handleAddProject(this.state));
  };
  handleChange = name => e => {
    console.log(this.state);
    if (name !== "name") {
      this.setState({
        [name]: parseFloat(e.target.value)
      });
    } else {
      this.setState({
        [name]: e.target.value
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h3>Memorial</h3>
        <form className="form">
          <input
            type="text"
            id="name"
            placeholder="Nome do Sistema"
            onChange={this.handleChange("name")}
            required
          />
          <input
            type="text"
            id="name"
            placeholder="Nº de Tanques"
            onChange={this.handleChange("tanques")}
          />
          <input
            type="text"
            id="name"
            placeholder="Volume Unitário (m³)"
            onChange={this.handleChange("volume")}
          />
          <input
            type="text"
            id="name"
            placeholder="Densidade  "
            onChange={this.handleChange("densidade")}
          />
          <input
            type="text"
            id="name"
            placeholder="Peso Final"
            onChange={this.handleChange("peso")}
          />
          <input
            type="text"
            id="name"
            placeholder="Taxa de Arraçoamento"
            onChange={this.handleChange("taxa")}
          />
          <input
            type="text"
            id="name"
            placeholder="Conversão Alimentar"
            onChange={this.handleChange("ca")}
          />
          <input
            type="text"
            id="name"
            placeholder="Taxa de Recirculação"
            onChange={this.handleChange("recirc")}
          />
          <br />
          <Link to="/" class="btn" onClick={this.sendData}>
            Calcular
          </Link>
        </form>
      </div>
    );
  }
}
export default connect()(New);
