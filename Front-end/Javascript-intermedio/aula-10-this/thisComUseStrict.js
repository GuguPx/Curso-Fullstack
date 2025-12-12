// 'use strict'
// console.log(this)
// console.log(window)
// console.log(window === this)

// this.name = 'ricardo'

// function saudar() {
//     console.log('this no contexto da funcao', this)
//     console.log('Olá, ' + this.name)

// }
// saudar()

// let usuario = {
//     nome: 'ricardo',
//     saudar: function() {
//         console.log('this no contexto do metodo', this)
//         console.log('this.nome no contexto do metodo', this.nome)
//     }
// }
// usuario.saudar()

let comida = {
    nome: 'brocolis',
    temperatura: 0
}
comida.cozinhar = function(temperaturaDeCozimento) {
    this.temperatura = temperaturaDeCozimento;
}
console.log(comida)
comida.cozinhar(100)
console.log(comida)