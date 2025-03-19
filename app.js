// Inicializa a lista de amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    // Captura o valor inserido no campo de texto
    let nomeAmigo = document.getElementById('amigo').value;

    // Verifica se o nome não está vazio
    if (nomeAmigo !== '') {
        // Adiciona o nome à lista de amigos
        amigos.push(nomeAmigo);

        // Atualiza a exibição da lista de amigos
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = ''; // Limpa a lista atual antes de atualizá-la

        // Exibe cada amigo da lista
        amigos.forEach(amigo => {
            let item = document.createElement('p');
            item.textContent = amigo;
            lista.appendChild(item);
        });

        // Limpa o campo de texto após adicionar
        document.getElementById('amigo').value = '';
    }
    else
        alert("Escreva um nome para adicionar à lista");
    
}

function sortearAmigo(){
    let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    let listaSorteio = document.getElementById('resultado');
    listaSorteio.innerHTML = '';
    let item = document.createElement('p');
    item.textContent = `${amigoAleatorio} foi o amigo sorteado`;
    listaSorteio.appendChild(item);

}

// Função para embaralhar a lista de amigos
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca de posição
    }
    return array;
}

// Função para sortear quem pega quem
function sortear() {
    // Verifica se há pelo menos dois amigos para sortear
    if (amigos.length >= 2) {
        // Embaralha a lista de amigos
        let amigosEmbaralhados = embaralhar([...amigos]);

        // Cria uma lista de resultados do sorteio
        let listaSorteio = document.getElementById('resultado');
        listaSorteio.innerHTML = ''; // Limpa o resultado anterior

        // Pareia os amigos (o último amigo sorteado pega o primeiro)
        for (let i = 0; i < amigosEmbaralhados.length; i++) {
            let amigo1 = amigosEmbaralhados[i];
            let amigo2 = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length]; // Cicla a lista para o primeiro amigo
            let item = document.createElement('p');
            item.textContent = `${amigo1} pega ${amigo2}`;
            listaSorteio.appendChild(item);
        }
    } else {
        alert('Adicione pelo menos dois amigos para sortear.');
    }
}

// Função para reiniciar a lista de amigos e limpar as áreas exibidas
function reiniciar() {
    // Limpa a lista de amigos
    amigos = [];

    // Limpa a exibição da lista de amigos
    document.getElementById('lista-amigos').innerHTML = '';

    // Limpa o resultado do sorteio
    document.getElementById('lista-sorteio').textContent = '';
}
