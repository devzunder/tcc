import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Projects.css";

class Memorial extends Component {
  render() {
    const state = this.props;
    const memorial = state.state.projects[state.match.params.id];
    console.log(memorial);
    return (
      <div>
        Nome: {memorial.name}
        <br />
        Número de tanques: {memorial.data.tanques}
        <br />
        Volume: {memorial.data.volume}
        <br />
        Densidade: {memorial.data.densidade}
        <br />
        Peso Final: {memorial.data.peso}
        <br />
        Taxa de Arraçoamento: {memorial.data.taxa}
        <br />
        Conversão Alimentar: {memorial.data.ca}
        <br />
        Taxa de Recirculação: {memorial.data.recirc}
      </div>
    );
  }
}

function mapStateToProps(state, { projects }) {
  return { state };
}

export default connect(mapStateToProps)(Memorial);
