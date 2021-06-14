let poleas = {
  title: "Poleas",
  image:
    "https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/poleas.jpg?alt=media&token=01bfbee0-e057-480e-ba5f-b99205d6b018",
};
let bicicletas = {
  title: "Bicicletas",
  image:
    "https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/bicycle.png?alt=media&token=c1f63916-d5b9-4369-a730-019fbe1ce9ed",
};
let BancoPesas = {
  title: "Banco de Pesas",
  image:
    "https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/banco-pesas.jpg?alt=media&token=63063c8b-a659-4af5-ae48-ddf996029adb",
};
let caminadoras = {
  title: "Caminadoras",
  image:
    "https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/caminadora.jpg?alt=media&token=75f3a02b-21a5-4187-9704-560cf6fc7f29",
};
let crossfit = {
  title: "Crossfit",
  image:
    "https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/crossfit.jpg?alt=media&token=e9fa51f1-9d83-4270-ae36-2b0035b17725",
};
let elipticas = {
  title: "Elipticas",
  image:
    "https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/eliptica.jpg?alt=media&token=c5e67941-660f-4884-b5fc-e1b4662ba308",
};
let remo = {
  title: "Remo",
  image:
    "https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/remo.jpg?alt=media&token=d0a774fc-5f7d-41e9-93bb-c4771530a868",
};
let PrensaPierna = {
  title: "Prensa de Pierna",
  image:
    "https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/prensa-pierna.jpg?alt=media&token=7c8b2882-b61a-4b5a-83c7-3b711395bd46",
};

function getMachine(mach) {
  switch (mach) {
    case "poleas":
      return poleas;
    case "bicicletas":
      return bicicletas;
    case "BancoPesas":
      return BancoPesas;
    case "caminadoras":
      return caminadoras;
    case "crossfit":
      return crossfit;
    case "elipticas":
      return elipticas;
    case "remo":
      return remo;
    case "PrensaPierna":
      return PrensaPierna;
  }
}

export { getMachine };
