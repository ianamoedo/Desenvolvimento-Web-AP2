const divElencoFeminino = document.getElementById("lista_imagens_elenco_feminino");
const divElencoMasculino = document.getElementById("lista_imagens_elenco_masculino");

jogadores.forEach((jogador) => {
  const imgJogador = document.createElement('img');
  imgJogador.src = jogador.imagem;
  imgJogador.style.width = "90%";

  const nomeJogador = document.createElement('p');
  nomeJogador.innerHTML = jogador.nome;
  nomeJogador.style.fontWeight = "bolder";

  const divJogador = document.createElement('div');
  divJogador.className = "jogador";
  divJogador.appendChild(imgJogador);
  divJogador.appendChild(nomeJogador);

  divJogador.dataset.nome = jogador.nome;
  divJogador.dataset.nome_completo = jogador.nome_completo;
  divJogador.dataset.imagem = jogador.imagem;
  divJogador.dataset.descricao = jogador.descricao;
  divJogador.dataset.posicao = jogador.posicao;
  divJogador.dataset.altura = jogador.altura;
  divJogador.dataset.nascimento = jogador.nascimento;

  if (jogador.elenco === "feminino") {
    divElencoFeminino.appendChild(divJogador);
  } else {
    divElencoMasculino.appendChild(divJogador);
  }
});

const storageJogador = document.querySelectorAll(".jogador");

storageJogador.forEach((divJogador) => {
  divJogador.addEventListener("click", (evento) => {
    const divJogador = evento.currentTarget;

    localStorage.setItem('nome', divJogador.dataset.nome);
    localStorage.setItem('nome_completo', divJogador.dataset.nome_completo);
    localStorage.setItem('imagem', divJogador.dataset.imagem);
    localStorage.setItem('descricao', divJogador.dataset.descricao);
    localStorage.setItem('posicao', divJogador.dataset.posicao);
    localStorage.setItem('altura', divJogador.dataset.altura);
    localStorage.setItem('nascimento', divJogador.dataset.nascimento);

    window.location.href = "./detalhes.html";
  });
});