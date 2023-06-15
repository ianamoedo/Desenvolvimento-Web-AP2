const nome = localStorage.getItem('nome');
const nome_completo = localStorage.getItem('nome_completo');
const imagem = localStorage.getItem('imagem');
const descricao = localStorage.getItem('descricao');
const posicao = localStorage.getItem('posicao');
const altura = localStorage.getItem('altura');
const nascimento = localStorage.getItem('nascimento');


document.addEventListener('DOMContentLoaded', function() {

  const informacao_jogador = document.createElement('div');
  informacao_jogador.id = 'informacao_jogador';
  informacao_jogador.style.textTransform = 'capitalize';
  informacao_jogador.style.fontWeight = 'bolder';
  informacao_jogador.style.textAlign = 'center';
  

  const informacao_foto = document.createElement('div');
  informacao_foto.id = 'informacao_foto';

  const nome_p = document.createElement('p');
  nome_p.textContent = nome;

  const imagem_p = document.createElement('img');
  imagem_p.src = imagem;


  const posicao_p = document.createElement('p');
  posicao_p.textContent = posicao;

  informacao_foto.appendChild(imagem_p);
  informacao_foto.appendChild(nome_p);
  informacao_foto.appendChild(posicao_p);

  informacao_jogador.appendChild(informacao_foto);

  const informacao_detalhes = document.createElement('div');
  informacao_detalhes.id = 'informacao_detalhes';

  const descricao_p = document.createElement('p');
  descricao_p.textContent = descricao;

  const nome_completo_p = document.createElement('p');
  nome_completo_p.textContent = 'Nome completo: ' + nome_completo;

  const nascimento_p = document.createElement('p');
  nascimento_p.textContent = 'Nascimento: ' + nascimento;

  const altura_p = document.createElement('p');
  altura_p.textContent = 'Altura: ' + altura;

  informacao_detalhes.appendChild(descricao_p);
  informacao_detalhes.appendChild(nome_completo_p);
  informacao_detalhes.appendChild(nascimento_p);
  informacao_detalhes.appendChild(altura_p);

  informacao_jogador.appendChild(informacao_detalhes);

  const tudo = document.createElement('div');
  tudo.id = 'tudo';
  tudo.appendChild(informacao_jogador);

  const voltar = document.createElement('a');
  voltar.innerHTML = 'VOLTAR';
  voltar.className = 'botao_voltar';
  voltar.style.textDecoration = 'none';
  voltar.style.color = '#red';
  voltar.style.fontSize = '50px';
  voltar.href = './index.html';

  document.body.appendChild(voltar);
  document.body.appendChild(tudo);
});