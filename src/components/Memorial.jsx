import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Projects.css";
import { Table, Tabs } from "antd";
import "katex/dist/katex.min.css";
import Producao from "./Producao";
import Residuos from "./Residuos";
import { NavLink } from "react-router-dom";
import Aeracao from "./Aeracao";

class Memorial extends Component {
  render() {
    const TabPane = Tabs.TabPane;

    function callback(key) {
      console.log(key);
    }
    const state = this.props;
    const memorial = state.state.projects[state.match.params.id];
    const initialData = {
      name: memorial.name,
      tanques: parseFloat(memorial.data.tanques),
      volume: parseFloat(memorial.data.volume),
      densidade: parseFloat(memorial.data.densidade),
      peso: parseFloat(memorial.data.peso),
      taxa: parseFloat(memorial.data.taxa) / 100,
      ca: parseFloat(memorial.data.ca),
      recirc: parseFloat(memorial.data.recirc)
    };
    const volumeTotal = initialData.volume * initialData.tanques;
    const densidadeTotal = volumeTotal * initialData.densidade;
    const densidadeTanque = densidadeTotal / initialData.tanques;
    const aliDiaria = initialData.taxa * densidadeTotal;
    const numPeixes = densidadeTotal / initialData.peso;
    const consumoO2 = 0.4 * aliDiaria;
    const solTotGer = 0.3 * aliDiaria;
    const nh3Ger = 0.03 * aliDiaria;
    const prodAnual = (aliDiaria * 360) / initialData.ca;
    const vazao = volumeTotal * initialData.recirc;
    const consumoO2Peixes = 0.2 * densidadeTotal;
    const consumoO2Total = (consumoO2Peixes * 24) / 1000 + consumoO2;
    const potencia = consumoO2Total / 7.2;

    console.log("prodAnual", prodAnual);

    return (
      <div>
        <div className="container-memorial">
          <Table
            columns={[
              {
                title: "Parâmetro",
                dataIndex: "name"
              },
              {
                title: "Valor",
                dataIndex: "value"
              }
            ]}
            dataSource={[
              {
                key: "1",
                name: "Nome",
                value: initialData.name
              },
              {
                key: "2",
                name: "Número de Tanques",
                value: initialData.tanques + " unidades"
              },
              {
                key: "3",
                name: "Volume",
                value: initialData.volume + " m³"
              },
              {
                key: "4",
                name: "Densidade",
                value: initialData.densidade + " kg/m³"
              },
              {
                key: "5",
                name: "Peso Final",
                value: initialData.peso + " kg"
              },
              {
                key: "6",
                name: "Taxa de Arraçoamento",
                value: initialData.taxa * 100 + " %"
              },
              {
                key: "7",
                name: "Conversão Alimentar",
                value: initialData.ca + ":1"
              },
              {
                key: "8",
                name: "Taxa de Recirculação",
                value: initialData.recirc + "x/hora"
              }
            ]}
            size="middle"
          />
          <NavLink className="btn" to="/new" initialData={initialData}>
            Editar Dados
          </NavLink>
        </div>
        <div className="container-memorial">
          <h2>
            <strong>Memorial de cálculo</strong>{" "}
          </h2>{" "}
          <br />
          Baseado na publicação do <strong>PhD. Fernando Kubitza</strong>, da
          edição número 95 de maio/junho de 2006,{" "}
          <strong>
            “Sistemas de recirulação: Sistemas fechados com tratamento e reuso
            da água”
          </strong>
          .
          <br />
          <br />
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Capacidade de Produção" key="1">
              <Producao
                volumeTotal={volumeTotal}
                initialData={initialData}
                densidadeTotal={densidadeTotal}
                densidadeTanque={densidadeTanque}
                aliDiaria={aliDiaria}
                numPeixes={numPeixes}
                consumoO2={consumoO2}
                solTotGer={solTotGer}
                nh3Ger={nh3Ger}
                prodAnual={prodAnual}
                vazao={vazao}
              />
            </TabPane>
            <TabPane tab="Filtro Biológico" key="2">
              <Residuos
                volumeTotal={volumeTotal}
                initialData={initialData}
                densidadeTotal={densidadeTotal}
                densidadeTanque={densidadeTanque}
                aliDiaria={aliDiaria}
                numPeixes={numPeixes}
                consumoO2={consumoO2}
                solTotGer={solTotGer}
                nh3Ger={nh3Ger}
                prodAnual={prodAnual}
                vazao={vazao}
              />
            </TabPane>
            <TabPane tab="Demanda de Aeração" key="3">
              <Aeracao
                volumeTotal={volumeTotal}
                initialData={initialData}
                densidadeTotal={densidadeTotal}
                densidadeTanque={densidadeTanque}
                aliDiaria={aliDiaria}
                numPeixes={numPeixes}
                consumoO2={consumoO2}
                solTotGer={solTotGer}
                nh3Ger={nh3Ger}
                prodAnual={prodAnual}
                vazao={vazao}
                consumoO2Peixes={consumoO2Peixes}
                consumoO2Total={consumoO2Total}
                potencia={potencia}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Memorial);
