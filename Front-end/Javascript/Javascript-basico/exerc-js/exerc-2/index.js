let pagamento = prompt("Voce pagou o boleto? (sim ou não)");
let boletoPago = pagamento.toLowerCase() === "sim";

if(boletoPago) {
    alert("O boleto está pago");
}else {
    alert("O boleto não está pago");
}