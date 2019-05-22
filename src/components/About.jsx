import React from "react";
import UFSC from "../assets/img/UFSC.svg";
import RC from "../assets/img/react.svg";
import Unform from "../assets/img/unform.png";
import Redux from "../assets/img/Redux.png";
import Rocket from "../assets/img/Rocketseat.png";
import Logo from "../assets/img/logocolor.svg";

const About = () => {
  return (
    <div className="container-memorial">
      <h3>
        <strong>Sobre</strong>
      </h3>
      Ao verificar a lacuna de informações quanto a SRAs e a falta de softwares
      especializados e voltados para a área da aquicultura, verificou-se a
      viabilidade do desenvolvimento de um software web para dimensionamento de
      SRAs com ênfase em biofiltros, consumo de oxigênio e necessidade de
      aeração e da capacidade de produção.
      <br />
      <br /> Além desse mercado inexplorado que gerou a possibilidade do
      desenvolvimento do projeto, existe a motivação pessoal do autor que busca
      o desenvolvimento pessoal e profissional na área com o intuito de lançar
      novos produtos relacionados no mercado. Assim o projeto tem por foco, o
      desenvolvimento completo de um software capaz de gerar um memorial de
      cálculo de fácil leitura ao produtor independente da experiência.
      <br />
      <br />
      O projeto aborda uma área inexplorada no Departamento de Aquicultura da
      Universidade Federal de Santa Catarina, e pode se tornar fonte de
      inspiração para outros alunos do curso a explorar áreas que não são
      abordadas dentro de sala de aula.
      <br />
      <br />
      <div className="logos">
        <hr />
        <img src={RC} alt="Logo React" style={{ width: 100, padding: 10 }} />
        <img src={Redux} alt="Logo Redux" style={{ width: 100, padding: 10 }} />
        <img
          src={Unform}
          alt="Logo Unform"
          style={{ width: 100, padding: 10 }}
        />
        <img src={UFSC} alt="Logo UFSC" style={{ width: 100, padding: 10 }} />
        <img
          src={Rocket}
          alt="Logo Rocketseat"
          style={{ width: 100, padding: 10 }}
        />
        <img
          src={Logo}
          alt="Logo AquaScript"
          style={{ width: 100, padding: 10 }}
        />
      </div>
    </div>
  );
};

export default About;
