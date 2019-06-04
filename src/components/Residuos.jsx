import React, { Fragment } from "react";
import { Table } from "antd";

const Residuos = props => {
  const area = (props.nh3Ger / 0.001) * 2;

  const volumeFiltro = area / 1690;

  return (
    <Fragment>
      <h3>
        <strong> DIMENSIONAMENTO DO FILTRO BIOLÓGICO</strong>
      </h3>
      A taxa de remoção de amônia no biofiltro é de 0,001 kg de NH3/m²/dia.
      Sabendo que a produção de NH3 no sistema é de{" "}
      <strong>{props.nh3Ger.toFixed(2)} </strong>
      kg/dia, podemos calcular a área de biofiltro necessária para remover a
      amônia produzida por dia.
      <br />
      <br />
      Sendo assim a área necessária para o biofiltro é de{" "}
      <strong>{(props.nh3Ger / 0.001).toFixed(2)} m²</strong>, ao utilizarmos um
      fator de segurança 2 temos <strong>{area.toFixed(2)} m².</strong>
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
            value: "3.00 cm³"
          },
          {
            key: "3",
            name: "Área superficial específica",
            value: "1690.00 m²/m³"
          }
        ]}
      />
      Podemos calcular o volume mínimo do biofiltro para remoção de toda matéria
      orgânica produzida, estabelecendo uma razão entre a área do biofiltro{" "}
      <strong>
        {area.toFixed(2)}
        m²
      </strong>{" "}
      e a área específica do bio-balls 1690 m²/m³. <br /> <br /> Deste modo o
      volume do biofiltro é de <strong>{volumeFiltro.toFixed(2)}m³</strong>
      <br /> <br />
      {/*<Table
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
            name: 0.03 * props.aliDiaria.toFixed(2),
            value: " kg de TAN/dia"
          },
          {
            key: "2",
            name: "TAN",
            value:
              (
                (0.03 * props.aliDiaria * 1000) /
                (24 * props.volumeTotal)
              ).toFixed(2) + " g/m³"
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
            value: "0.30 g de TAN/m²/dia"
          },
          {
            key: "2",
            name: "Área do filtro",
            value: (props.nh3Ger / 0.0003).toFixed(2) + " m²"
          },
          {
            key: "3",
            name: "Volume do filtro",
            value: (props.nh3Ger / 0.0003 / 1690).toFixed(2) + " m³"
          },
          {
            key: "4",
            name: "Taxa de escoamento",
            value: (props.vazao * 24).toFixed(2) + " m³/dia"
          },
          {
            key: "5",
            name: "Área Superficial",
            value: areaFiltro.toFixed(2) + " m²"
          },
          {
            key: "6",
            name: "Volume",
            value: diametro.toFixed(2) + " m³"
          }
        ]}
        size="middle"
      />*/}
    </Fragment>
  );
};
export default Residuos;
