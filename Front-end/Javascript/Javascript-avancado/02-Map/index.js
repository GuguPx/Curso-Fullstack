let pessoas = [
    {nome: 'roberto', idade: 33 },
    {nome: 'Augusto', idade: 33 },
    {nome: 'Raphael', idade: 26 }
];

// let nomeDasPessoas = []
// for (let i = 0; i pessoas < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)
// }
// console.log(nomeDasPessoas)

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " têm " + pessoa.idade + " anos de idade");

console.log(nomeDasPessoas)