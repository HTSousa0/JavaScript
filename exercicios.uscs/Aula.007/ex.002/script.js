let totalPontos = 0;

for (let i = 1; i <= 10; i++) {
    let golsTime = +prompt("Partida " +  i  + " Quantos gols o seu time fez?");
    let golsAdversario = +prompt("Partida " + i + " Quantos gols o adversário fez?");

    if (golsTime > golsAdversario) {
        totalPontos = totalPontos + 3;
    } else if (golsTime === golsAdversario) {
        totalPontos = totalPontos + 1;
    } else {
        totalPontos = totalPontos + 0;
    }
}

alert("Total de pontos: " + totalPontos);
document.getElementById("resultado").innerHTML = "Total de pontos: " + totalPontos;