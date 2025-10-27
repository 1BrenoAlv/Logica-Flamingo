  let nomeCompleto = prompt("Digite seu nome:")
        alert(nomeCompleto)
        let idade = prompt("Digite sua idade:")
        alert(idade)
        let endereco = prompt("Digite seu endereço:")
        alert(endereco)
        let email = prompt("Digite seu email:")
        alert(email)
        let cidade = prompt("Digite sua cidade:")
        alert(cidade)

        alert(`Olá ${nomeCompleto}, seja bem vindo!`)

        let frase = `Meu nome é ${nomeCompleto}, tenho ${idade} anos.\n Meu endereço é ${endereco} e minha cidade é ${cidade}\n Meu email é ${email}!`
        document.getElementById("nome-tela").innerText = nomeCompleto
        document.getElementById("idade-tela").innerText = idade
        document.getElementById("frase").innerText = frase