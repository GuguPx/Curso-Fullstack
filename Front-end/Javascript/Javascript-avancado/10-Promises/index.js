/*
Pendente
Realizada Resolve
Recusaa Reject
Estabelecida
*/

// new Promise((resolve, reject) => {

// })

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver agua')
            resolve()
        }else{
            console.log('é necessario ligar o fogão e colocar a chaleira no fogao para ferver a agua')
            reject()
        }
    })
}
let chaleiraEstaNoFogao = false
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')