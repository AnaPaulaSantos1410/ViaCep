url = 'https://viacep.com.br/ws/13049052/json/'
dados = fetch(url)

    .then((response) => {
        return response.json();
    })

    .then((dados) => {
        console.log(dados);

        cep = document.getElementById("cep");
        logradouro = document.getElementById("logradouro");
        bairro = document.getElementById("bairro");
        complemento = document.getElementById("complemento");
        // Preenchendo os valores recebidos da API nos campos do formulário
        // O uso de "|| ''" serve como valor padrão: 
        cep.value = dados.cep || '';
        logradouro.value = dados.logradouro || '';
        bairro.value = dados.bairro || '';
        complemento.value = dados.complemento || '';


        // se o dado não existir ou vier indefinido/null, ele preenche com string vazia ('') para evitar erro ou texto "undefined"
    })




    .catch((erro) => {
        console.log(erro);

    });