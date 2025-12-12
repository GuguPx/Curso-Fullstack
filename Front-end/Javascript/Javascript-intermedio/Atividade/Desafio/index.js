const txtCamObg = document.getElementsByClassName('camObg');
const camposObg = document.querySelectorAll('input, textarea')

function enviarForm() {
  for (let i = 0; i < 4; i++) {
    let confirm = camposObg[i];

    if(confirm.value === ""){
        confirm.classList.add ('naoValidado');
        txtCamObg[i].classList.add ('camObgOn');
        confirm.classList.remove ("validado");
    }else{
        confirm.classList.add ("validado")
        confirm.classList.remove ('naoValidado');
        txtCamObg[i].classList.remove ('camObgOn');

    }
  }
}
