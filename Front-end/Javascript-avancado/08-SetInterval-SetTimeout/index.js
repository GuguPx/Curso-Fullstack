setTimeout(() => {
    alert('Olá mundo!')
});

setTimeout(() => {
    console.log('console dentro do setTimeOut')
}, 4000);

setInterval(() => {
    console.log('Console a cada 2 segundos')
}, 2000);

console.log('console depois do setTimeOut')

const idDoIntervalo = setInterval(() => {
                        console.log('Executando a cada 2 segundos')
}, 2000);
console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout()