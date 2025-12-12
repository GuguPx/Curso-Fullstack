let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log("passo 1 finalizado: agua foi fervida");
      resolve();
    } else {
      console.log(
        "é necessario colocar a chaleira com a agua e ligar o fogão senão teu vafé não vai ficar pronto nunca"
      );
      reject();
    }
  });
};

let passarOCafe = (aguaFervida) => {
  return new Promise((resolve) => {
    console.log("passo 2 finalizado: café foi passado");
    resolve(true);
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise((resolve) => {
    console.log("passa 4 finalizado: terminei de tomar o café");
    resolve(true);
  });
};

let lavarXicara = (cafeTomado) => {
  return new Promise((resolve) => {
    console.log("passo 5 finalizado: Terminei de lavar a xicara");
    resolve(true);
  });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(() => {
    return passarOCafe();
  })
  .then(() => {
    return tomarCafe();
  })
  .then(() => {
    return lavarXicara();
  })
  .then(() => {
    console.log("Finalizado ritual do café, bora ESTUDAR");
  });
