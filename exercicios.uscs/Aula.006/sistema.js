let valorCompra = +prompt('Insira o valor da sua compra:')
let desconto1 = valorCompra * 0.10
let desconto2 = valorCompra * 0.20
let valorFinal = valorCompra - desconto1 && valorCompra - desconto2

if (valorCompra >= 100.00 && valorCompra <= 199.99) {
    console.log('Desconto de 10% aplicado! R$', + valorFinal)
}
else if (valorCompra >= 200.00) {
    console.log('Desconto de 20% aplicado! R$', + valorFinal)

} else { console.log('Sem descontos aplicados à sua compra!') }









