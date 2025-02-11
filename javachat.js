const questions = [
  "Oi! Eu sou o assistente virtual. Como posso te ajudar hoje?",
  "Você está enfrentando algum problema com a nossa página inicial?",
  "Você tem alguma dúvida sobre os cursos que oferecemos?",
  "Qual área de curso você tem mais interesse em explorar?",
  "Você está procurando por cursos relacionados a programação ou design?",
  "Gostaria de saber mais sobre o conteúdo dos cursos antes de se inscrever?",
  "Você tem alguma dúvida sobre os preços ou planos de pagamento dos cursos?",
  "Posso te ajudar com mais alguma coisa antes de você se inscrever no curso?"
];

let currentQuestionIndex = 0;

// Função para enviar a mensagem do chatbot
function sendMessage() {
  const userInput = document.getElementById("userInput").value.trim();
  if (userInput) {
    displayUserMessage(userInput);
    document.getElementById("userInput").value = ''; // Limpa o campo de input

    // Aguarda um pequeno tempo e depois exibe a próxima pergunta do chatbot
    setTimeout(displayNextQuestion, 500);
  }
}

// Função para exibir a mensagem do usuário
function displayUserMessage(message) {
  const chatWindow = document.getElementById("chatWindow");
  const userMessageDiv = document.createElement("div");
  userMessageDiv.classList.add("user-message", "fadeIn");
  userMessageDiv.textContent = message;
  chatWindow.appendChild(userMessageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Rola para a última mensagem
}

// Função para exibir a próxima pergunta do chatbot
function displayNextQuestion() {
  if (currentQuestionIndex < questions.length) {
    const chatWindow = document.getElementById("chatWindow");
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message", "fadeIn");
    botMessageDiv.textContent = questions[currentQuestionIndex];
    chatWindow.appendChild(botMessageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Rola para a última mensagem

    currentQuestionIndex++;
  } else {
    const chatWindow = document.getElementById("chatWindow");
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message", "fadeIn");
    botMessageDiv.textContent = "Se precisar de mais ajuda, estou por aqui! 😊";
    chatWindow.appendChild(botMessageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Rola para a última mensagem
  }
}

// Função que inicia a conversa assim que a página é carregada
window.onload = () => {
  setTimeout(displayNextQuestion, 500); // Primeira pergunta após 500ms
};
