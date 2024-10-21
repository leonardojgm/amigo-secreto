let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if (!amigo || amigo.value == ''){
        alert('Amigo não informado!');

        return;
    }

    if (amigos.includes(amigo.value.toUpperCase())){
        alert('Amigo já adicionado!');

        return;
    }

    amigos.push(amigo.value.toUpperCase());

    amigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    if (amigos.length < 4){
        alert('São necessários ao menos 4 amigos!');

        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');   

    console.log(amigos);

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1){
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[0]} <br>`;
        } else {            
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]} <br>`;
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length - 1; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];

    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function excluir(index) {
    amigos.splice(index, 1);

    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');

    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');

    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');

        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluir(i);
        });

        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}
