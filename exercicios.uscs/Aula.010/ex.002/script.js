function media() {
    let soma = 0
    let n = +prompt ("Quantos números deseja digitar? ")
    document.write ("Digite " + n + " números: <br>")
    for (let i = 0; i < n; i++) {
        let num = +prompt ("Digite o número " + (i + 1) + ": ")
        soma += num
        document.write ("Número: " + num + "<br>")
    }
    let media = soma / n
    document.write ("A média é: " + media)
}
media()