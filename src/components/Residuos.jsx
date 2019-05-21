import React, { Fragment } from "react";
import { Table } from "antd";

const Residuos = props => {
  const areaFiltro =
    (props.vazao * 24) /
    ((props.nh3Ger / 0.0003) * (props.nh3Ger / 0.0003 / 1690));

  const diametro = Math.sqrt((4 * areaFiltro) / 3.1416);
  const volumeFiltro = props.nh3Ger / 0.0003 / 1690;
  const alturaFiltro = 4 * (volumeFiltro / (3.1416 * Math.pow(diametro, 2)));
  return (
    <Fragment>
      <h3>
        <strong> DIMENSIONAMENTO DO FILTRO BIOLÓGICO</strong>
      </h3>
      A taxa de remoção de amônia no biofiltro é de 0,0003 kg de NH3/m²/dia.
      Sabendo que a produção de NH3 no sistema é de{" "}
      <strong>{props.nh3Ger} </strong>
      kg/dia, podemos calcular a área de biofiltro necessária para remover a
      amônia produzida por dia.
      <br />
      <br />
      Sendo assim a área necessária para o biofiltro é de{" "}
      <strong>{props.nh3Ger / 0.0003} m2</strong>.
      <br />
      <br />
      Um substrato para fornecer área de superfície para bactérias nitrificantes
      de tipo bio-balls, possui as seguintes características:
      <br />
      <br />
      <Table
        columns={[
          {
            title: "Bio-balls",
            dataIndex: "name"
          },
          {
            title: "",
            dataIndex: "value"
          }
        ]}
        dataSource={[
          {
            key: "1",
            name: "Tipo",
            value: "Esferas Plásticas"
          },
          {
            key: "2",
            name: "Diâmetro",
            value: " 3cm³"
          },
          {
            key: "3",
            name: "Área superficial específica",
            value: "1690m²/m³"
          }
        ]}
      />
      <br />
      <br />
      Podemos calcular o volume mínimo do biofiltro para remoção de toda matéria
      orgânica produzida, estabelecendo uma razão entre a área do biofiltro{" "}
      <strong>
        {props.nh3Ger / 0.0003}
        m2
      </strong>{" "}
      e a área específica do bio-balls 1690 m2/m³. Deste modo o volume do
      biofiltro é de <strong>{props.nh3Ger / 0.0003 / 1690}m³</strong>.
      <Table
        columns={[
          {
            title: "Produção de Amônia do Sistema",
            dataIndex: "name"
          },
          {
            title: "",
            dataIndex: "value"
          }
        ]}
        dataSource={[
          {
            key: "1",
            name: 0.03 * props.aliDiaria,
            value: "kg de TAN/dia"
          },
          {
            key: "2",
            name: "TAN",
            value:
              (0.03 * props.aliDiaria * 1000) / (24 * props.volumeTotal) +
              " g/m³"
          }
        ]}
      />
      O Filtro biológico do sistema terá as seguintes dimensões:
      <br />
      <br />
      <Table
        columns={[
          {
            title: "Dimensões(Filtro biológico) ",
            dataIndex: "name"
          },
          {
            title: "",
            dataIndex: "value"
          }
        ]}
        dataSource={[
          {
            key: "1",
            name: "Taxa de remoção de TAN",
            value: "0,3 g de TAN/m²/dia"
          },
          {
            key: "2",
            name: "Área do filtro",
            value: props.nh3Ger / 0.0003 + " m²"
          },
          {
            key: "3",
            name: "Volume do filtro",
            value: props.nh3Ger / 0.0003 / 1690 + " m³"
          },
          {
            key: "4",
            name: "Taxa de escoamento",
            value: props.vazao * 24 + " m³/dia"
          },
          {
            key: "5",
            name: "Área (corte transversal)",
            value: areaFiltro + " m²"
          },
          {
            key: "6",
            name: "Diâmetro",
            value: diametro + " m"
          },
          {
            key: "7",
            name: "Altura",
            value: alturaFiltro + " m"
          }
        ]}
        size="middle"
      />
    </Fragment>
  );
};
export default Residuos;
