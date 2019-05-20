import React, { Fragment } from "react";
import TeX from "@matejmazur/react-katex";

const Aeracao = props => {
  const _ = String.raw;
  return (
    <Fragment>
      <h3>
        <strong> DIMENSIONAMENTO DA DEMANDA DE AERAÇÃO </strong>
      </h3>
      Sabemos que 1 Kg de peixe consome o equivalente a 0,2 g de oxigênio por
      hora. Sendo a quantidade máxima de peixes é de{" "}
      <strong>{props.numPeixes}</strong> no sistema (
      <strong>{props.densidadeTotal} Kg</strong>), teríamos um consumo total de:
      <br />
      <br />
      <TeX
        math={_`Consumo de O2 = 0.2 * ${props.densidadeTotal} = ${
          props.consumoO2Peixes
        }g de O2/hora`}
        block
      />
      <br />
      <br />O que equivale a{" "}
      <strong>{props.consumoO2Peixes / 1000} kg de O2/hora</strong>.
      Multiplicando esse valor por 24 (horas/dia) temos o consumo diária de{" "}
      <strong>{(props.consumoO2Peixes * 24) / 1000} Kg O2/dia</strong>.
      <br />
      <br />O manejo alimentar adotado (
      <strong>{props.aliDiaria} Kg ração/dia</strong>) consome{" "}
      <strong>{props.consumoO2} kg de O2/dia</strong>. Assim, teremos um consumo
      diário total de:
      <br />
      <br />
      <TeX
        math={_`Consumo Total = ${(props.consumoO2Peixes * 24) / 1000}+${
          props.consumoO2
        } =
        ${props.consumoO2Total} Kg O2/dia`}
        block
      />
      <br />
      <br /> Sabendo que a incorporação de oxigênio ocorre numa proporção de 0,3
      kg de O2/HP/hora, e multiplicando esse valor por 24 (horas/dia) obtemos a
      incorporação diária de oxigênio em 7,2 Kg O2/HP. <br />
      <br />
      Para saber a potência necessária de aeração no sistema fazemos da seguinte
      forma.
      <br />
      <br />
      <TeX
        math={_`Potência (HP) = {\frac {Consumo Total} {Taxa de incorporação}}`}
        block
      />
      <TeX
        math={_`Potência (HP) = {\frac {${
          props.consumoO2Total
        } kd O2/dia} {7,2 kg O2/HP}} = ${props.potencia} HP `}
        block
      />
      <br /> Com a potência necessária de <strong>{props.potencia} HP </strong>
      <br />
    </Fragment>
  );
};
export default Aeracao;
