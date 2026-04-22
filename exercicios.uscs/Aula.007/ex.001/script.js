let operacao = prompt("Qual operação deseja realizar? (soma, subtracao, multiplicacao, divisao)");

let total = 0;
let rodando = true;
let primeiroNumero = true;

while (rodando === true) {
    let entrada = prompt('Digite um número ou "PARAR" para encerrar:');

    if (entrada === "PARAR") {
        rodando = false;
    } else {
        let numero = Number(entrada);

        if (operacao === "divisao" && numero === 0) {
            alert("Divisão por zero não é permitida!");
        } else {
            if (primeiroNumero === true) {
                total = numero;
                primeiroNumero = false;
            } else {
                if (operacao === "soma") {
                    total = total + numero;
                } else if (operacao === "subtracao") {
                    total = total - numero;
                } else if (operacao === "multiplicacao") {
                    total = total * numero;
                } else if (operacao === "divisao") {
                    total = total / numero;
                }
            }

            alert("Total até agora: " + total);
        }
    }
}

alert("Valor total da operação: " + total);
document.getElementById("resultado").innerHTML = "Resultado final: " + total;