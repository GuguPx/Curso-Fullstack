const imagens = [
  "src/imagem1.jpg",
  "src/imagem2.jpg",
  "src/imagem3.jpg",
  "src/imagem4.jpg",
];

const cores = ["#C50000", "#D9DD10", "#A63A17", "#10ACDD"];
const numeroImg = ["1","2","3","4"]
const planoDeFundo = document.querySelector("main");

const setaDireita = document.querySelector("#setaDireita");

const setaEsquerda = document.querySelector("#setaEsquerda");

const saibaMais = document.querySelector("#saibaMais");

const imgNum = document.querySelector('#imgNum');
let indice = 0;

setaEsquerda.onclick = null;
setaEsquerda.style.opacity = "50%";

function proxImagem() {
  indice++;

  planoDeFundo.style.backgroundImage = `url('${imagens[indice]}')`;
  saibaMais.style.color = `${cores[indice]}`;
  imgNum.innerHTML = `${numeroImg[indice]}`;

  if(indice > 0){
    setaEsquerda.onclick = imagemAnt;
    setaEsquerda.style.opacity = "100%";

  }
  if (indice === imagens.length - 1) {
    setaDireita.onclick = null;
    setaDireita.style.opacity = "50%";
  }
}
function imagemAnt() {
  indice--;
  planoDeFundo.style.backgroundImage = `url('${imagens[indice]}')`;
  saibaMais.style.color = `${cores[indice]}`;
  imgNum.innerHTML = `${numeroImg[indice]}`;

  if(indice < imagens.length - 1){
    setaDireita.onclick = proxImagem;
    setaDireita.style.opacity = "100%"
  }
  if (indice === 0) {
    setaEsquerda.onclick = null;
    setaEsquerda.style.opacity = "50%";
  }
}
