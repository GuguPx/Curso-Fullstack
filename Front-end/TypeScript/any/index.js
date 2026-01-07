// let moviesCount:any = 10;
// moviesCount ='10';//Quando atribuído com o tipo any qualquer valor é aceito
function sum(number1, number2) {
    return number1 + number2;
}
console.log('O valor virá certo :', sum(10, 20));
//Utilizando o ANY para os parameters
function sumAny(number3, number4) {
    return number3 + number4;
}
console.log('o valor irar vim "concatenado":', sumAny('10', 20));
