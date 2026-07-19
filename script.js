/* ==========================================================================
   ARQUIVO SCRIPT.JS COMPLETO E UNIFICADO (BLINDADO CONTRA ERROS)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {

    // --- 1. BOTÃO DE ENTRAR NA TELA INICIAL ---
    const btnEnter = document.getElementById("enter");
    const introSection = document.getElementById("intro");
    if (btnEnter && introSection) {
        btnEnter.addEventListener("click", function() {
            introSection.style.opacity = "0";
            setTimeout(() => {
                introSection.style.display = "none";
            }, 500);
        });
    }

    // --- 2. LÓGICA DO GERADOR DE MOTIVOS ---
    const btnReason = document.getElementById("btn-reason");
    const reasonText = document.getElementById("reason-text");

    if (btnReason && reasonText) {
        const motivos = [
            "O jeito único como você sorri quando está com vergonha.",
            "Como o seu abraço consegue transformar qualquer dia ruim em um momento de paz.",
            "A sua paciência e o jeito carinhoso que você cuida de mim.",
            "A nossa sintonia, parecendo que nos conhecemos de outras vidas.",
            "Como os seus olhos brilham quando você fala de algo que ama.",
            "O fato de você ser minha melhor amiga e namorada ao mesmo tempo.",
            "Porque caminhar ao seu lado faz qualquer lugar simples parecer inesquecível.",
            "O seu apoio incondicional em todos os meus planos e sonhos."
        ];

        btnReason.addEventListener("click", function() {
            reasonText.style.opacity = 0;
            setTimeout(() => {
                const motivoAleatorio = motivos[Math.floor(Math.random() * motivos.length)];
                reasonText.innerText = motivoAleatorio;
                reasonText.style.opacity = 1;
            }, 200);
        });
    }

    // --- 3. LÓGICA DO QUIZ DO CASAL ---
    const perguntas = [
        {
            pergunta: "Qual é a nossa data oficial de namoro? 📆",
            opcoes: ["12 de Maio", "10 de Maio ❤️", "08 de Abril", "10 de Junho"],
            correta: 1,
            erroFeedback: "Errou?! Meu Deus, amor, anota aí para não esquecer o aniversário de namoro! 😂"
        },
        {
            pergunta: "Por qual motivo a gente quase nunca consegue aproveitar a sós? 🧐",
            opcoes: ["Falta de tempo", "Distância de SP", "Seu pai vigiando igual a um agente do FBI 👮‍♂️🕵️‍♂️", "A gente prefere ficar em grupo"],
            correta: 2,
            erroFeedback: "Errou! Mas ó, abre o olho que o sogrão está de olho! KKKKKKK 🤫"
        },
        {
            pergunta: "Qual foi a primeira pelúcia fofa que eu te dei de presente? 🧸",
            opcoes: ["Pikachu", "Um ursinho de coração", "Eevee do Pokémon! 🥰", "Um gatinho de pelúcia"],
            correta: 2,
            erroFeedback: "Não acredito que você esqueceu do nosso Eevee! Ele vai ficar triste... 🥺"
        },
        {
            pergunta: "Em qual meio de transporte eu fui e demorei QUINZE HORAS para chegar em casa? 🚌🤦‍♂️",
            opcoes: ["Avião turboélice", "Carro sem ar-condicionado", "No ônibus cor de rosa / ônibus da Barbie 💅🎀", "Trem cargueiro"],
            correta: 2,
            erroFeedback: "Como você esqueceu do ônibus rosa da Barbie de 15 horas?! KKKKKKKKK"
        },
        {
            pergunta: "Qual é o jogo favorito do Kauan? 🎮",
            opcoes: ["GTA V", "Minecraft 🧱⛏️", "Counter-Strike", "League of Legends"],
            correta: 1,
            erroFeedback: "Errou feio! O negócio dele é minerar e construir nossos blocos! Kk"
        },
        {
            pergunta: "Onde foi o nosso primeiríssimo beijo? 💋",
            opcoes: ["No cinema", "No Parque do Ibirapuera", "No show do Henrique e Juliano 🎤🎶", "Na Avenida Paulista"],
            correta: 2,
            erroFeedback: "Errou! Esqueceu do clima ao som de Henrique e Juliano? 🤨"
        },
        {
            pergunta: "E para fechar com chave de ouro: Você me ama? ❤️",
            opcoes: ["SIM, MUITO! 🥰", "Não ❌"],
            correta: 0,
            erroFeedback: "Como você conseguiu clicar aqui?! Esse botão era para estar trancado! KKKKK"
        }
    ];

    let perguntaAtual = 0;
    let pontuacao = 0;

    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const questionNumber = document.getElementById("question-number");
    const progress = document.getElementById("progress");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const scoreText = document.getElementById("score-text");
    const feedbackMessage = document.getElementById("feedback-message");
    const btnRestart = document.getElementById("btn-restart");

    function carregarPergunta() {
        if (!quizContainer || !questionText || !optionsContainer) return;
        
        if (perguntaAtual >= perguntas.length) {
            mostrarResultado();
            return;
        }

        const dados = perguntas[perguntaAtual];
        if (questionNumber) questionNumber.innerText = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
        if (progress) progress.style.width = `${((perguntaAtual + 1) / perguntas.length) * 100}%`;
        questionText.innerText = dados.pergunta;
        optionsContainer.innerHTML = "";

        dados.opcoes.forEach((opcao, index) => {
            const botao = document.createElement("button");
            botao.innerText = opcao;
            botao.classList.add("quiz-option-btn");
            
            if (perguntaAtual === perguntas.length - 1 && index === 1) {
                botao.style.position = "relative";
                botao.style.transition = "transform 0.1s ease";
                
                botao.addEventListener("mouseover", function() {
                    const x = Math.random() * 200 - 100; 
                    const y = Math.random() * 120 - 60;  
                    botao.style.transform = `translate(${x}px, ${y}px)`;
                });
                
                botao.addEventListener("click", function(e) {
                    e.preventDefault();
                    const x = Math.random() * 200 - 100;
                    const y = Math.random() * 120 - 60;
                    botao.style.transform = `translate(${x}px, ${y}px)`;
                });
            } else {
                botao.addEventListener("click", () => verificarResposta(index));
            }
            
            optionsContainer.appendChild(botao);
        });
    }

    function verificarResposta(opcaoSelecionada) {
        const dados = perguntas[perguntaAtual];
        const botoes = optionsContainer.querySelectorAll("button");

        botoes.forEach(b => b.disabled = true);

        if (opcaoSelecionada === dados.correta) {
            botoes[opcaoSelecionada].style.background = "#2ecc71"; 
            pontuacao++;
        } else {
            botoes[opcaoSelecionada].style.background = "#e74c3c"; 
            botoes[dados.correta].style.background = "#2ecc71"; 
            alert(dados.erroFeedback); 
        }

        setTimeout(() => {
            perguntaAtual++;
            carregarPergunta();
        }, 1800);
    }

    function mostrarResultado() {
        if (quizContainer) quizContainer.style.display = "none";
        if (resultContainer) resultContainer.style.display = "block";
        if (scoreText) scoreText.innerText = `Você acertou ${pontuacao} de 6 perguntas obrigatórias!`;

        if (feedbackMessage) {
            if (pontuacao >= 6) {
                feedbackMessage.innerHTML = "<p style='color:#2ecc71; font-weight:600;'>GABARITOU! 🏆 Você prestou atenção em cada detalhe. Te amo infinitamente, minha linda!</p>";
            } else if (pontuacao >= 4) {
                feedbackMessage.innerHTML = "<p style='color:#f1c40f;'>Foi bem! 🥰 Mas acho bom dar uma lida na nossa linha do tempo de novo para não errar, hein? Kk</p>";
            } else {
                feedbackMessage.innerHTML = "<p style='color:#e74c3c;'>Misericórdia, amor... 😂 Acho que as 15 horas de viagem apagaram sua memória! Vamos jogar de novo!</p>";
            }
        }
    }

    if (btnRestart) {
        btnRestart.addEventListener("click", function() {
            perguntaAtual = 0;
            pontuacao = 0;
            if (resultContainer) resultContainer.style.display = "none";
            if (quizContainer) quizContainer.style.display = "block";
            carregarPergunta();
        });
    }

    carregarPergunta();

    // --- 4. LÓGICA DA CÁPSULA DO TEMPO ---
    const btnUnlock = document.getElementById("btn-unlock");
    const passwordInput = document.getElementById("capsule-password");
    const lockedDiv = document.getElementById("capsule-locked");
    const unlockedDiv = document.getElementById("capsule-unlocked");
    const errorMsg = document.getElementById("error-msg");

    // SUA SENHA SECRETA:
    const SENHA_SECRETA = "1010"; 

    if (btnUnlock && passwordInput && lockedDiv && unlockedDiv) {
        btnUnlock.addEventListener("click", function() {
            if (passwordInput.value === SENHA_SECRETA) {
                lockedDiv.style.display = "none";
                unlockedDiv.style.display = "block";
                unlockedDiv.style.animation = "fadeIn 1s ease-in-out";
            } else {
                if (errorMsg) errorMsg.style.display = "block";
                passwordInput.style.border = "1px solid #ff4a4a";
                
                setTimeout(() => {
                    if (errorMsg) errorMsg.style.display = "none";
                    passwordInput.style.border = "none";
                }, 3000);
            }
        });
    }
});
    // --- 5. LOGICA DO CONTADOR DE TEMPO REAL ---
    function atualizarContador() {
        // Altere o ano (ex: 2024, 2025) para o ano real que vocês começaram a namorar!
        const dataNamoro = new Date("2026-05-10T00:00:00"); 
        const agora = new Date();
        const diferenca = agora - dataNamoro;

        if (diferenca < 0) return; // Evita bugar se a data for no futuro

        // Cálculos matemáticos de tempo
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Atualiza os números na tela colocando um "0" na frente se for menor que 10
        const elDias = document.getElementById("dias");
        const elHoras = document.getElementById("horas");
        const elMinutos = document.getElementById("minutos");
        const elSegundos = document.getElementById("segundos");

        if (elDias) elDias.innerText = String(dias).padStart(3, '0');
        if (elHoras) elHoras.innerText = String(horas).padStart(2, '0');
        if (elMinutos) elMinutos.innerText = String(minutos).padStart(2, '0');
        if (elSegundos) elSegundos.innerText = String(segundos).padStart(2, '0');
    }

    // Executa o contador a cada 1 segundo
    setInterval(atualizarContador, 1000);
    atualizarContador(); // Roda a primeira vez direto ao carregar

    // --- LÓGICA DO MURAL DE RECADOS (WHATSAPP) ---
    const btnSendMessage = document.getElementById("btn-send-message");
    const guestbookMessage = document.getElementById("guestbook-message");

    if (btnSendMessage && guestbookMessage) {
        btnSendMessage.addEventListener("click", function() {
            const texto = guestbookMessage.value.trim();

            // Verifica se ela não deixou a caixa em branco
            if (texto === "") {
                alert("Escreva alguma coisinha antes de enviar! 😘");
                return;
            }

            // SEU NÚMERO DE TELEFONE (Coloque com DDD, sem traços e sem espaços)
            // Exemplo: 55 + DDD + Seu Número (5548984466694)
            const seuNumero = "5548984466694"; 

            // Codifica o texto para formato de link de internet
            const textoFormatado = encodeURIComponent(`💌 *Recado do Site:* \n\n"${texto}"`);
            
            // Monta o link do WhatsApp
            const urlWhatsApp = `https://wa.me/send?phone=${seuNumero}&text=${textoFormatado}`;

            // Abre o WhatsApp em uma nova aba para enviar
            window.open(urlWhatsApp, "_blank");
            
            // Limpa a caixinha depois de enviar
            guestbookMessage.value = "";
        });
    }
