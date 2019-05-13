import React, { Component } from "react";
import "../styles/New.css";
import { connect } from "react-redux";
import { handleAddProject } from "../actions/projects";

class New extends Component {
  state = {};
  sendData = data => {
    data.preventDefault();
    const { dispatch } = this.props;
    dispatch(handleAddProject(this.state));
  };
  handleChange = name => e => {
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
        <h1>Formulário</h1>
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
          <button type="submit" onClick={this.sendData}>
            Dimensionar
          </button>
        </form>
      </div>
    );
  }
}
export default connect()(New);
