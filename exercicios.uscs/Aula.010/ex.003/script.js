

function divida() {

    let valor = +prompt("Digite o valor da dívida:");
    document.write("Valor da dívida: R$ " + valor + "<br>");

    let juros = +prompt("Digite a taxa de juros mensal:");
    document.write("Taxa de juros mensal: " + juros + "%<br>");

    let meses = +prompt("Digite o número de meses para pagamento:");
    document.write("Número de meses para pagamento: " + meses + "<br>");

    let valorFinal = valor * Math.pow((1 + juros / 100), meses);

    document.write("Valor total a ser pago: R$ " + valorFinal.toFixed(2));

}

divida();