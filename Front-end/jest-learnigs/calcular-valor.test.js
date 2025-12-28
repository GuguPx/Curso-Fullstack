const calcularValorPedido = require('./calcular-valor');

it('não deve cobrar valor de frete quando valor for superior a 500', () =>{
    //AAA - 3 passos de criação de um teste
    //Arrange - arrumar
    const meuPedido = {
    itens:[
        {nome:'poção de vida', valor: 300},
        {nome:'espada de cobre', valor: 200},{nome:'Entrega', valor: 150, entrega: true}
        ]
    }
    //Act - Ação
   const resultado = calcularValorPedido(meuPedido);
   //Assert - asserção
   expect(resultado).toBe(650)
})

it('deve cobrar valor de frete caso valor dos produtos seja EXATAMENTE 500',() => {
    const meuPedido = {
        itens:[
            {nome:'sanduíche', valor:500},
            {nome:'Frete', valor: 100, entrega: true}
        ]
    };
    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600)
})
//CASO OS ESTADOS DE ENTREGAS SEJAM RS OU SC, DEVE SER ACRESCIDO O VALOR DA ENTREGA EM 30%
it('deve adicionar um acréscimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens:[
            {nome: 'Aluguel', valor: 400},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(520);
})
it('deve adicionar um acréscimo de 20% no valor da entrega do pedido caso o estado seja SC', () => {
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens:[
            {nome: 'Aluguel', valor: 400},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSC)

    expect(resultado).toBe(520);
})
it('não deve adicionar um acréscimo de 20% no valor da entrega do pedido caso o estado seja SP', () => {
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens:[
            {nome: 'Aluguel', valor: 400},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSP)

    expect(resultado).toBe(500);
})