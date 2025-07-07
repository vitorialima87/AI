// Seletores de elementos HTML
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objetos com as perguntas e alternativas
const perguntas = [
  {
    enunciado: " IA pode escrever textos e responder perguntas?",
    alternativas: [" sim ", " não."]
  },
  {
    enunciado: " A inteligência artificial aprende com: ",
    alternativas: [" Experiências e dados ", " Sorte e adivinhação "]
  },
  {
    enunciado: "Um exemplo de uso da IA é: ",
    alternativas: [" Um robô que responde perguntas ", " Um espelho comum "]
  }
];

// Variável para controlar o índice da pergunta atual
let indiceAtual = 0;

// Função para exibir a pergunta atual na tela
function mostrarPergunta() {
  const perguntaAtual = perguntas[indiceAtual];
  caixaPerguntas.textContent = perguntaAtual.enunciado; // Define o texto do enunciado

  caixaAlternativas.innerHTML = ""; // Limpa as alternativas anteriores

  // Cria e adiciona os botões para cada alternativa
  perguntaAtual.alternativas.forEach((alternativa, index) => {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.addEventListener("click", () => escolherAlternativa(index)); // Adiciona evento de clique
    caixaAlternativas.appendChild(botao);
  });
}

// Função para lidar com a escolha de uma alternativa
function escolherAlternativa(indiceEscolhido) {
  // Aqui você pode adicionar lógica para verificar se a resposta está correta,
  // adicionar pontuação, etc. (se for o caso, ficaria entre esta linha e a próxima).

  indiceAtual++; // Avança para a próxima pergunta

  // Verifica se ainda há perguntas a serem exibidas ou se o quiz terminou
  if (indiceAtual < perguntas.length) {
    mostrarPergunta(); // Mostra a próxima pergunta
  } else {
    mostrarResultado(); // Exibe o resultado final do quiz
  }
}

// Função para exibir o resultado final do quiz
function mostrarResultado() {
  caixaPerguntas.style.display = "none"; // Oculta a caixa de perguntas
  caixaAlternativas.style.display = "none"; // Oculta as alternativas
  textoResultado.textContent = "Parabéns! Você completou o quiz."; // Define a mensagem de resultado
  caixaResultado.style.display = "block"; // Exibe a caixa de resultado
}

// Inicia o quiz exibindo a primeira pergunta
mostrarPergunta();
