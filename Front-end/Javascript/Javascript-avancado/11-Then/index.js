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

let passarCafe = () => console.log('passando cafe')

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then()
console.log('fazendo café')