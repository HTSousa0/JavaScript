function saudar () {
const nome =
document.getElementById ("nome") ;
const message =
document.getElementById ("mensagem")
const exibir_nome = nome.value ;
message.textContent =
`Olá ${exibir_nome},bem−vindo ao curso !`;
}