import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Projects.css";
import { Table, Tabs } from "antd";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

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
    const vazao = initialData.volume * initialData.recirc;
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
              <br />
              <h3>
                <strong>DIMENSIONAMENTO DA CAPACIDADE DE PRODUÇÃO</strong>
              </h3>
              <br />
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
                    value: volumeTotal + "m³"
                  },
                  {
                    key: "2",
                    name: "Densidade",
                    value: initialData.densidade + "kg/m³"
                  },
                  {
                    key: "3",
                    name: "Densidade Total",
                    value: densidadeTotal + "kg"
                  },
                  {
                    key: "4",
                    name: "Número de Tanques",
                    value: initialData.tanques + " unidades"
                  },
                  {
                    key: "5",
                    name: "Densidade",
                    value: initialData.densidade + "kg/m³"
                  },
                  {
                    key: "6",
                    name: "Densidade / Tanque",
                    value: densidadeTanque + "kg/Tanque"
                  },
                  {
                    key: "7",
                    name: "Volume unitário",
                    value: initialData.volume + "m³"
                  },
                  {
                    key: "8",
                    name: "Taxa de Arraçoamento",
                    value: initialData.taxa + "%"
                  },
                  {
                    key: "9",
                    name: "Taxa de Conversão Alimentar",
                    value: initialData.ca + ":1"
                  },
                  {
                    key: "10",
                    name: "Taxa de Recirculação",
                    value: initialData.recirc + "x/hora"
                  }
                ]}
                size="middle"
              />
              Com o arraçoamento de <strong>{aliDiaria}</strong> kg por dia e
              relacionando com os dados apresentados acima pode se chegar a
              seguinte conclusão:
              <br />
              <br />
              <br />
              <Table
                columns={[
                  {
                    title: aliDiaria + " kg de ração",
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
                    value: consumoO2 + " kg de 02"
                  },
                  {
                    key: "2",
                    name: "Gera",
                    value: solTotGer + " kg de ST"
                  },
                  {
                    key: "3",
                    name: "Gera",
                    value: nh3Ger + " kg de NH3"
                  }
                ]}
              />
              <h4>
                <strong>Resíduos Gerados</strong>
              </h4>
              Um dos principais pontos para o funcionamento correto do sistema é
              o cálculo correto do aporte de resíduos sólidos. Estes são a
              principal fonte de matéria orgânica do sistema. Sendo que
              representam cerca de 20 a 30% da ração aplicada Os sólidos
              produzidos nesse sistema são fracionados da seguinte maneira:
              <br />
              <br />
              Ilustrar
              <br />
              <br />
              <br />
              <h4>
                <strong>Produção Anual</strong>
              </h4>
              Se adotarmos a taxa de arraçoamento diária de {initialData.taxa}%
              da biomassa total e uma taxa de conversão alimentar de{" "}
              {initialData.ca}:1, podemos calcular a produção anual de
              organismos do sistema utilizando a seguinte fórmula:
              <br />
              <br />
              $$Pn (Produção Anual) = (Ração diaria *360) \over Conversão
              Alimentar.$$
              <br />
              Aplicando a formula para o sistema:
              <br />
              $$Pn (Produção Anual) = ({aliDiaria} *360) \over {initialData.ca}
              $$$$ = {prodAnual} kg/ano $$
              <br />
              <h4>
                <strong>Vazão do Sistema</strong>
              </h4>
              <br />A vazão do sistema é calculada multiplicando o volume do
              sistema ({volumeTotal} m³) pela taxa de recirculão, considerada
              neste caso {initialData.recirc}
              vezes/dia: $$Vazão = {volumeTotal}* {initialData.recirc} ={vazao}{" "}
              m³/hora $$
              <br />
            </TabPane>
            <TabPane tab="Filtro Biológico" key="2">
              <h3>
                <strong> DIMENSIONAMENTO DO FILTRO BIOLÓGICO</strong>
              </h3>
              A taxa de remoção de amônia no biofiltro é de 0,0003 kg de
              NH3/m²/dia. Sabendo que a produção de NH3 no sistema é de {nh3Ger}
              kg/dia, podemos calcular a área de biofiltro necessária para
              remover a amônia produzida por dia.
              <br />
              <br />
              Sendo assim a área necessária para o biofiltro é de 600 m2.
              <br />
              <br />O substrato para fixação das bactérias nitrificantes é o de
              esferas plásticas (bio-balls), que possuem as seguintes
              características.
              <br />
              <br /> Características do filtro biológico Tipo: esferas plásticas
              (bio-balls) Diâmetro: 3 cm Área específica: 1690 m²/m³ <br />
              <br />
              Podemos calcular o volume mínimo do biofiltro para remoção de toda
              matéria orgânica produzida, estabelecendo uma razão entre a área
              do biofiltro 600 m2 e a área específica do bio-balls 1690 m2/m3.
              Deste modo o volume do biofiltro é de 0,355m3.
              <br />
              <br /> A produção de amônia no sistema: Produção de amônia no
              sistema 0,45 kg de TAN/dia TAN: 0,46875 g/m3 . O filtro biológico
              do sistema tem as seguintes dimensões: Dimensões (Filtro
              biológico) Taxa de remoção de TAN: 0,3 g de TAN/m²/dia Área do
              filtro: 1500 m² Volume do filtro: 0,888 m³ Taxa de escoamento:
              6240 m³/dia Área (corte transversal) 4,69 m² Diâmetro: 2,44 m
              Altura: 0,19 m
            </TabPane>
            <TabPane tab="Demanda de Aeração" key="3">
              <h3>
                <strong> DIMENSIONAMENTO DA DEMANDA DE AERAÇÃO </strong>
              </h3>
              Sabemos que 1 Kg de peixe consome o equivalente a 0,2 g de
              oxigênio por hora. Sendo a quantidade máxima de peixes é de{" "}
              {numPeixes} no sistema ({densidadeTotal} Kg), teríamos um consumo
              total de:
              <br />
              <br />
              $$Consumo de O2 =0.2*{densidadeTotal}={consumoO2Peixes}de
              O2/hora$$
              <br />O que equivale a {consumoO2Peixes / 1000} kg de O2/hora.
              Multiplicando esse valor por 24 (horas/dia) temos o consumo diária
              de {(consumoO2Peixes * 24) / 1000} Kg O2/dia.
              <br />
              <br />O manejo alimentar adotado ({aliDiaria} Kg ração/dia)
              consome {consumoO2} kg de O2/dia. Assim, teremos um consumo diário
              total de:
              <br />
              <br />
              consumo total={(consumoO2Peixes * 24) / 1000}+{consumoO2}=
              {consumoO2Total} Kg O2/dia
              <br />
              <br /> Sabendo que a incorporação de oxigênio ocorre numa
              proporção de 0,3 kg de O2/HP/hora, e multiplicando esse valor por
              24 (horas/dia) obtemos a incorporação diária de oxigênio em 7,2 Kg
              O2/HP. <br />
              <br />
              Para saber a potência necessária de aeração no sistema fazemos da
              seguinte forma. Potência HP= conumo totaltaxa de incorporação
              Potência HP={consumoO2Total} Kg O2/d7,2 Kg O2/HP ={potencia}HP
              <br />
              <br /> Com a potência necessária de {potencia} HP <br />
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
