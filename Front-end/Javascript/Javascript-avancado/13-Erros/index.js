let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if(typeof chaleiraEstaNoFogao != 'boolean') throw "somente o tipo boleano é aceito"

    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log("passo 1 finalizado: agua foi fervida");
      resolve();
    } else {
      const mensagemDeErro = "é necessario colocar a chaleira com a agua e ligar o fogão senão teu vafé não vai ficar pronto nunca"
      reject(mensagemDeErro);
    }
  });
};

let passarCafe = (aguaFervida) => {
  return new Promise((resolve) => {
    console.log("passo 2 finalizado: café foi passado");
    resolve(true);
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise((resolve) => {
    console.log("passa 3 finalizado: terminei de tomar o café");
    resolve(true);
  });
};

let lavarXicara = (cafeTomado) => {
  return new Promise((resolve) => {
    console.log("passo 4 finalizado: Terminei de lavar a xicara");
    resolve(true);
  });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

async function iniciarProcessoDeFazerCafe() {
  try{
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado) 
  }catch(erro){
    console.log(erro)
}finally{
console.log('Full de energiar para estudar!')
}
}
iniciarProcessoDeFazerCafe(chaleiraEstaNoFogao, fogaoEstaLigado)

