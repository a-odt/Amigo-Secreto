let nomes = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (!nome) {
    const titulo = document.querySelector(".section-title");
    
    titulo.textContent = "Por favor, insira um nome.";
        
    titulo.classList.add("titulo-erro");
    setTimeout(() => {
      titulo.textContent = "Digite o nome dos seus amigos"; 
      titulo.classList.remove("titulo-erro");
    }, 3000); s
    
    return; 
  }

 
  if (nomes.includes(nome)) {
   
    const titulo = document.querySelector(".section-title");
    titulo.textContent = "Este nome já foi adicionado!";
    titulo.classList.add("titulo-erro");

    setTimeout(() => {
      titulo.textContent = "Digite o nome dos seus amigos";
      titulo.classList.remove("titulo-erro");
    }, 3000);
    
    return; 
  }


  nomes.push(nome);
  input.value = "";
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < nomes.length; i++) {
    const li = document.createElement("li");
    li.textContent = nomes[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {

  if (nomes.length < 2) {
    const titulo = document.querySelector(".section-title");
    titulo.textContent = "Adicione pelo menos 2 amigos para poder sortear!";
    titulo.classList.add("titulo-erro");

    setTimeout(() => {
      titulo.textContent = "Digite o nome dos seus amigos";
      titulo.classList.remove("titulo-erro");
    }, 3000);
    
    return; 
  }

  const indiceAleatorio = Math.floor(Math.random() * nomes.length);
  const amigoSorteado = nomes[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
  li.classList.add("resultado-sorteio");
  resultado.appendChild(li);
}

function reiniciar() {
  nomes = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("amigo").value = "";

  const titulo = document.querySelector(".section-title");
  titulo.textContent = "Digite o nome dos seus amigos";
  titulo.classList.remove("titulo-erro");
}