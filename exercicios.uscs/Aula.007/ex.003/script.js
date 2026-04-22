let saldo = 500;
let rodando = true;
while (rodando === true) {
    let entrada = prompt('Digite um produto ');
    let preco = prompt('Digite o preço do produto ');
    let quantidade = prompt('Digite a quantidade do produto ') 
        custo = preco * quantidade;

    if ( custo <= saldo) {
        saldo = saldo - custo;
        document.getElementById("resultado").innerHTML = "Produto adicionado ao carrinho. Saldo restante: " + saldo;
    } else {
        document.getElementById("resultado").innerHTML = "Saldo insuficiente para adicionar este produto ao carrinho.";
        rodando = false;
    }
}