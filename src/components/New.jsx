import React, { Component } from "react";
import { Form, Input, Scope } from "@rocketseat/unform";
import "../styles/New.css";
import { connect } from "react-redux";
import { handleAddProject } from "../actions/projects";
import { Link } from "react-router-dom";

function New(props) {
  function handleSubmit(data) {
    const { dispatch } = props;
    dispatch(handleAddProject(data));
    console.log(data);
    /**
     * {
     *   email: 'email@example.com',
     *   password: "123456"
     * }
     */
  }

  return (
    <Form className="Form" onSubmit={handleSubmit}>
      <Input name="name" placeholder="Nome do Sistema" type="text" />
      <Scope path="data">
        <Input
          className="kickass_field"
          name="tanques"
          placeholder="Nº de Tanques"
        />
        <Input name="volume" placeholder="Volume Unitário (m³)" />
        <Input name="densidade" placeholder="Densidade  " />
        <Input name="peso" placeholder="Peso Final" />
        <Input name="taxa" placeholder="Taxa de Arraçoamento" />
        <Input name="ca" placeholder="Conversão Alimentar" />
        <Input name="recirc" placeholder="Taxa de Recirculação" />
      </Scope>
      <button type="submit" class="btn">
        Dimensionar
      </button>
    </Form>
  );
}

export default connect()(New);
