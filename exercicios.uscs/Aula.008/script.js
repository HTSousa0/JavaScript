let nAlunos = +(prompt("Digite o número de alunos:"));
let notas = [];
let nomes = [];


for (let i = 0; i < nAlunos; i++) {
    nomes[i] = prompt("Digite o nome do aluno:");
}


for (let i = 0; i < nAlunos; i++) {
    notas[i] = +(prompt("Digite a nota do aluno:"));
}

let media = 0;
for (let i = 0; i < nAlunos; i++) {
    media += notas[i];
}
media /= nAlunos;

document.getElementById("resultado").innerHTML = "";
document.getElementById("resultado").innerHTML += 
("Média da turma: " + media + "<br>");


for (let i = 0; i < nAlunos; i++) {
    if (notas[i] >= media) {
        document.getElementById("resultado").innerHTML += 
        (nomes[i] + " foi aprovado com a nota " + notas[i] + "<br>");
    } else {
        document.getElementById("resultado").innerHTML += 
        (nomes[i] + " foi reprovado com a nota " + notas[i] + "<br>");
    }
}


document.getElementById("resultado").innerHTML +=
("Primeiro aluno: " + nomes[0] + " - Nota: " + notas[0] + "<br>");

document.getElementById("resultado").innerHTML +=
("Último aluno: " + nomes[nAlunos - 1] + " - Nota: " + notas[nAlunos - 1] + "<br>");

let meio;

if (nAlunos % 2 === 0) {

    meio = nAlunos / 2 - 1;
} else {

    meio = (nAlunos - 1) / 2;
}

document.getElementById("resultado").innerHTML +=
("Aluno do meio: " + nomes[meio] + " - Nota: " + notas[meio] + "<br>");

let busca = prompt("Digite o nome do aluno que deseja buscar:");
let encontrado = false;

for (let i = 0; i < nAlunos; i++) {
    if (nomes[i] === busca) {
        document.getElementById("resultado").innerHTML +=
        ("Nota de " + nomes[i] + ": " + notas[i] + "<br>");
        encontrado = true;
    }
}

if (!encontrado) {
    document.getElementById("resultado").innerHTML += ("Não encontrado<br>");
}

let maiorNota = notas[0];
let melhorAluno = nomes[0];

for (let i = 1; i < nAlunos; i++) {
    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
        melhorAluno = nomes[i];
    }
}

document.getElementById("resultado").innerHTML +=
("Melhor aluno: " + melhorAluno + " com nota " + maiorNota + "<br>");