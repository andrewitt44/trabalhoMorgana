const perguntas = [
    {
        pergunta: "Conte sobre uma realização sua que te dá orgulho.",
        respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
        correta: 0,
    },

    {
        pergunta: "Por que você está procurando por outro emprego? ",
        respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
        correta: 0,
    },

    {
        pergunta: "Diga algo que só você consegue oferecer.",
        respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
        correta: 0,
    },

    {
        pergunta: "Por que você está procurando por outro emprego?",
        respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
        correta: 0,
    },

    {
        pergunta: "Conte sobre uma vez em que você discordou de seu chefe.",
        respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
        correta: 1,
    },

    {
        pergunta: "Fale sobre suas experiências de liderança.",
        respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
        correta: 1,
    },

///////////////////////////////////////////////////////////////
    {
      pergunta: "Por que você quer sair de sua empresa atual?",
      respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
      correta: 1,
    },
    {
        pergunta: "Onde você se vê em cinco anos?E em dez?",
        respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
        correta: 2,
    },
    {
      pergunta: "Conte sobre uma vez em que você foi além do esperado em um projeto.",
      respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
      correta: 1,
    },
    {
        pergunta: "Qual o nome do nosso CEO/Presidente?",
        respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
        correta: 3,
    },
    {
        pergunta: "O que você pensa em fazer nos seus primeiros 30/60/90 dias nesse novo emprego?",
        respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
        correta: 2,
    },
    {
        pergunta: "Quem são nossos competidores?",
        respostas: ["Pessoal", "Experiência", "Futuro", "Empresa"],
        correta: 3,
    }
    
  ];
  
  let pontuacao = 0;
  let indicePerguntaAtual = 0;
  
  const containerPergunta = document.getElementById("container-pergunta");
  const botaoFinalizar = document.getElementById("botao-finalizar");
  const exibirPontuacao = document.getElementById("pontuacao");
  
  function carregarPergunta() {
    if (indicePerguntaAtual >= perguntas.length) {
      botaoFinalizar.style.display = "block";
      return;
    }
  
    const dadosPergunta = perguntas[indicePerguntaAtual];
    containerPergunta.innerHTML = `
      <h2>${dadosPergunta.pergunta}</h2>
      ${dadosPergunta.respostas
        .map(
          (resposta, indice) =>
            `<button onclick="verificarResposta(${indice})">${resposta}</button>`
        )
        .join("")}
    `;
  }
  
  function verificarResposta(indiceSelecionado) {
    const dadosPergunta = perguntas[indicePerguntaAtual];
    const botoes = document.querySelectorAll("#container-pergunta button");
  
    botoes[dadosPergunta.correta].classList.add("correto");
  
    if (indiceSelecionado !== dadosPergunta.correta) {
      botoes[indiceSelecionado].classList.add("errado");
    } else {
      pontuacao++;
    }
  
    botoes.forEach((botao) => (botao.disabled = true));
  
    indicePerguntaAtual++;
    setTimeout(carregarPergunta, 2000);
  }
  
  function finalizarJogo() {
    containerPergunta.style.display = "none";
    botaoFinalizar.style.display = "none";
    exibirPontuacao.style.display = "block";
    exibirPontuacao.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
  }
  
  carregarPergunta();
  