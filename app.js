//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.

//Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.

let amigos = [];

//Implemente uma função para adicionar amigos

function adicionarAmigo() {
    let inputAmigo = document.getElementById ('amigo'); 
    let nome = inputAmigo.value.trim();
    
        if (nome === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    inputAmigo.value = ''; // Limpa o campo de entrada

    console.log("Lista de amigos:", amigos); // Exibe a lista no console

    atualizarLista();
}

//Implementa uma função para atualizar a lista de amigos.
//Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. 
// Use innerHTML para limpar a lista antes de adicionar novos elementos.
//Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
//Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
//Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
//Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.

function atualizarLista() {
    let lista = document.getElementById ('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    })
}

//Implementa uma função para sortear os amigos.
//Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.
//Use Math.random() e Math.floor() para obter um índice aleatório.
//Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
//Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
//Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
//Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.

function sortearAmigo() {
    if (amigos.length === 0) { 
        alert ('Adicione o nome de um amigo antes do sorteio!');
        return;
    }

    let indiceSorteado = Math.floor (Math.random()* amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById('resultado').textContent = `Amigo sorteado: ${amigoSorteado}`;
 }

