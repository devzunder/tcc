import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Projects.css";

class Memorial extends Component {
  render() {
    const state = this.props;
    const memorial = state.state.projects[state.match.params.id];
    const data = {
      name: memorial.name,
      tanques: parseFloat(memorial.data.tanques),
      volume: parseFloat(memorial.data.volume),
      densidade: parseFloat(memorial.data.densidade),
      peso: parseFloat(memorial.data.peso),
      taxa: parseFloat(memorial.data.taxa),
      ca: parseFloat(memorial.data.ca),
      recirc: parseFloat(memorial.data.recirc)
    };
    console.log(data);
    return (
      <div>
        <div className="container-memorial">
          <h3>Dados inseridos</h3>
          <br />
          Nome: {memorial.name}
          <br />
          Número de tanques: {data.tanques}
          <br />
          Volume: {data.volume}
          <br />
          Densidade: {data.densidade}
          <br />
          Peso Final: {data.peso}
          <br />
          Taxa de Arraçoamento: {data.taxa}
          <br />
          Conversão Alimentar: {data.ca}
          <br />
          Taxa de Recirculação: {data.recirc}
        </div>
        <div className="container-memorial">
          <h3>Dados inseridos</h3>
          <br />
          Nome: {memorial.name}
          <br />
          Número de tanques: {data.tanques}
          <br />
          Volume: {data.volume}
          <br />
          Densidade: {data.densidade}
          <br />
          Peso Final: {data.peso}
          <br />
          Taxa de Arraçoamento: {data.taxa}
          <br />
          Conversão Alimentar: {data.ca}
          <br />
          Taxa de Recirculação: {data.recirc}
        </div>
        <div className="container-memorial">
          <h3>Dados inseridos</h3>
          <br />
          Nome: {memorial.name}
          <br />
          Número de tanques: {data.tanques}
          <br />
          Volume: {data.volume}
          <br />
          Densidade: {data.densidade}
          <br />
          Peso Final: {data.peso}
          <br />
          Taxa de Arraçoamento: {data.taxa}
          <br />
          Conversão Alimentar: {data.ca}
          <br />
          Taxa de Recirculação: {data.recirc}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, { projects }) {
  return { state };
}

export default connect(mapStateToProps)(Memorial);
