let valorCompra = Number(prompt('Insira o valor da sua compra:'));
let valorFinal;
if (valorCompra >= 100 && valorCompra <= 199.99) {
    let desconto = valorCompra * 0.10;
    valorFinal = valorCompra - desconto;
    console.log('Desconto de 10% aplicado! R$', valorFinal);
} else if (valorCompra >= 200) {
    let desconto = valorCompra * 0.20;
    valorFinal = valorCompra - desconto;
    console.log('Desconto de 20% aplicado! R$', valorFinal);
} else {
    valorFinal = valorCompra;
    console.log('Sem descontos aplicados à sua compra! R$', valorFinal);
}