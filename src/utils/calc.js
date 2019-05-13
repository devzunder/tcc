const dimensionar = data => {
  const totalVol = data.unitVol * data.tanks;
  const totalDensity = totalVol * data.density;
  const feed = totalDensity * (data.feedRate / 100);
  console.log("volume total = ", totalVol);
  console.log("Densidade total = ", totalDensity);
  console.log("Alimentação diária de ", feed);
  //data.finalWeight
  //data.feedRate
  //data.feedConversion
  //data.renewRate
};

const valor = {
  name: "sistema",
  unitVol: 10,
  tanks: 4,
  density: 15,
  feedRate: 2.5,
  feedConversion: 1.5
};

dimensionar(valor);

const nome = "Lucas";
const texto = `Ola ${nome}
tudo bem com você?
Gostaria de saber se o texto saiu como o planejado`;
console.log(texto);
