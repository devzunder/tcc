import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";
import "../styles/New.css";
import { connect } from "react-redux";
import { handleAddProject } from "../actions/projects";
import { Link } from "react-router-dom";

class New extends Component {
  render() {
    function handleSubmit(data) {
      console.log(data);
      const { dispatch } = this.props;
      //criar um checker para ver campos em branco
      dispatch(handleAddProject(data));
      /**
       * {
       *   email: 'email@example.com',
       *   password: "123456"
       * }
       */
    }

    return (
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do Sistema" />
        <Input name="tanques" type="number" placeholder="Nº de Tanques" />
        <Input name="volume" type="number" placeholder="Volume Unitário (m³)" />
        <Input name="densidade" type="number" placeholder="Densidade  " />
        <Input name="peso" type="number" placeholder="Peso Final" />
        <Input name="taxa" type="number" placeholder="Taxa de Arraçoamento" />
        <Input name="ca" type="number" placeholder="Conversão Alimentar" />
        <Input name="recirc" type="number" placeholder="Taxa de Recirculação" />
        <button type="submit" class="btn">
          Dimensionar
        </button>
      </Form>
    );
  }
}

export default connect()(New);
