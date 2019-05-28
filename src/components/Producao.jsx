import React, { Fragment } from "react";
import { Table } from "antd";
import TeX from "@matejmazur/react-katex";

const Producao = props => {
  const _ = String.raw;
  return (
    <Fragment>
      <h3>
        <strong>DIMENSIONAMENTO DA CAPACIDADE DE PRODUÇÃO</strong>
      </h3>
      <Table
        columns={[
          {
            title: "1 kg de ração",
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
            name: "Consome",
            value: "0.4 kg de 02"
          },
          {
            key: "2",
            name: "Gera",
            value: "0.3 kg de ST"
          },
          {
            key: "3",
            name: "Gera",
            value: "0.03 kg de NH3"
          }
        ]}
        size="middle"
      />
      <Table
        columns={[
          {
            title: "Dados de Produtividade",
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
            name: "Volume Total",
            value: props.volumeTotal.toFixed(2) + " m³"
          },
          {
            key: "2",
            name: "Densidade",
            value: props.initialData.densidade.toFixed(2) + " kg/m³"
          },
          {
            key: "3",
            name: "Densidade Total",
            value: props.densidadeTotal.toFixed(2) + " kg"
          },
          {
            key: "4",
            name: "Número de Tanques",
            value: props.initialData.tanques + " unidades"
          },
          {
            key: "5",
            name: "Densidade / Tanque",
            value: props.densidadeTanque.toFixed(2) + " kg/Tanque"
          },
          {
            key: "6",
            name: "Volume unitário",
            value: props.initialData.volume.toFixed(2) + " m³"
          },
          {
            key: "7",
            name: "Taxa de Arraçoamento",
            value: props.initialData.taxa * 100 + " % da biomassa"
          },
          {
            key: "8",
            name: "Taxa de Conversão Alimentar",
            value: props.initialData.ca + " : 1"
          },
          {
            key: "9",
            name: "Taxa de Recirculação",
            value: props.initialData.recirc + " x/hora"
          }
        ]}
        size="middle"
      />
      Com o arraçoamento de <strong>{props.aliDiaria}</strong> kg por dia e
      relacionando com os dados apresentados acima pode-se chegar a seguinte
      conclusão:
      <br />
      <br />
      <br />
      <Table
        columns={[
          {
            title: props.aliDiaria.toFixed(2) + " kg de ração",
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
            name: "Consome",
            value: props.consumoO2.toFixed(2) + " kg de 02"
          },
          {
            key: "2",
            name: "Gera",
            value: props.solTotGer.toFixed(2) + " kg de ST"
          },
          {
            key: "3",
            name: "Gera",
            value: props.nh3Ger.toFixed(2) + " kg de NH3"
          }
        ]}
      />
      <h4>
        <strong>Resíduos Gerados</strong>
      </h4>
      Um dos principais pontos para o funcionamento correto do sistema é o
      cálculo correto do aporte de resíduos sólidos. Estes são a principal fonte
      de matéria orgânica do sistema. Sendo que representam cerca de 20 a 30% da
      ração aplicada Os sólidos produzidos nesse sistema são fracionados da
      seguinte maneira:
      <br />
      <br />
      <TeX block>{_`
        \begin{pmatrix}
           & Sedimenta    \to  ${(props.solTotGer / 2).toFixed(2)}   kg  \\
           & \nearrow  \\
        ${props.solTotGer.toFixed(
          2
        )} kg de ST  &  &  &   & Retidos No Filtro \to  ${(
        props.solTotGer / 4
      ).toFixed(2)}   kg  \\
           & \searrow &   \nearrow  &  &  \\
           &   Suspenção  &   &  &  \\
           &  & \searrow  &  &  \\
           &  &   &   & Dissolvidos  \to ${(props.solTotGer / 4).toFixed(
             2
           )}   kg \\ 
        \end{pmatrix}
        `}</TeX>
      <br />
      <br />
      <h4>
        <strong>Produção Anual</strong>
      </h4>
      Se adotarmos a taxa de arraçoamento diária de{" "}
      {props.initialData.taxa * 100}% da biomassa total e uma taxa de conversão
      alimentar de {props.initialData.ca}
      :1, podemos calcular a produção anual de organismos do sistema utilizando
      a seguinte fórmula:
      <br />
      <br />
      <TeX
        math={_`Pn (Produção Anual) = {\frac {Ração diária * 360} {Conversão Alimentar}}`}
        block
      />
      <br />
      <br />
      Aplicando a formula para o sistema:
      <br />
      <br />
      <TeX
        math={_`Pn (Produção Anual) = {\frac {${props.aliDiaria} * 360} {${
          props.initialData.ca
        }}} = ${props.prodAnual} kg/ano `}
        block
      />
      <br />
      <br />
      <h4>
        <strong>Vazão do Sistema</strong>
      </h4>
      <br />
      <br />A vazão do sistema é calculada multiplicando o volume do sistema (
      <strong>{props.volumeTotal} m³</strong>) pela taxa de recirculação,
      considerada neste caso{" "}
      <strong>{props.initialData.recirc} vezes/hora</strong>
      :
      <TeX
        math={_`Vazão = ${props.volumeTotal} * ${props.initialData.recirc} = ${
          props.vazao
        } m³/hora `}
        block
      />
      <br /> <br />
    </Fragment>
  );
};
export default Producao;
