function calculadora() {

    let n1 = +prompt("Digite o primeiro número:");
    document.write("Primeiro número: " + n1 + "<br>");

    let n2 = +prompt("Digite o segundo número:");
    document.write("Segundo número: " + n2 + "<br>");

    let op = prompt("Digite a operação desejada: +, -, *, /");
    document.write("Operação escolhida: " + op + "<br>");

    if (op == "+") {
        document.write("Resultado: " + (n1 + n2));
    }
    else if (op == "-") {
        document.write("Resultado: " + (n1 - n2));
    }
    else if (op == "*") {
        document.write("Resultado: " + (n1 * n2));
    }
    else if (op == "/") {
        document.write("Resultado: " + (n1 / n2));
    }
    else {
        document.write("Operação inválida");
    }

}

calculadora();