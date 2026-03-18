let nome = String (prompt("Qual é o seu nome?"));
if (nome !== "") {
    document.getElementById("nome").innerText = "Nome: " + nome;

    let idade = String(prompt("Qual é a sua idade?"));
    if (idade !== "") {
        document.getElementById("idade").innerText = "Idade: " + idade;

        let cidade = String(prompt("Qual é a sua cidade?"));
        if (cidade !== "") {
            document.getElementById("cidade").innerText = "Cidade: " + cidade;

            let email = String(prompt("Qual é o seu email?"));
            if (email !== "") {
                document.getElementById("email").innerText = "Email: " + email;

                let area = String(prompt("Área de interesse?"));
                if (area !== "") {
                    document.getElementById("areadeinteresse").innerText = "Área de interesse: " + area;

                    let habilidades = String(prompt("Habilidades?"));
                    if (habilidades !== "") {
                        document.getElementById("habilidades").innerText = "Habilidades: " + habilidades;

                        let experiencia = String(prompt("Experiência?"));
                        if (experiencia !== "") {
                            document.getElementById("experiencia").innerText = "Experiência: " + experiencia;

                            let formacao = String(prompt("Formação?"));
                            if (formacao !== "") {
                                document.getElementById("formacao").innerText = "Formação: " + formacao;
                            }
                        }
                    }
                }
            }
        }
    }
}

alert("Cadastro finalizado");