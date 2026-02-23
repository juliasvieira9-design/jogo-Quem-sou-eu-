const animals = [
    { name: "Lobo-guará", image: "lobo-guara.webp", features: { mamifero: true, voa: false, aquatico: false, penas: false, pelos: true, casco: false, azul: false, pintas: false, laranja: true, listras_cauda: false, pernas_longas: true, juba: true, focinho_tubo: false, bico_grande: false, chifres: false, garras_escavar: false, felino: false, formigas: false, nota_20: true } },
    { name: "Onça-pintada", image: "onca-pintada.webp", features: { mamifero: true, voa: false, aquatico: false, penas: false, pelos: true, casco: false, azul: false, pintas: true, laranja: true, listras_cauda: false, pernas_longas: false, juba: false, focinho_tubo: false, bico_grande: false, chifres: false, garras_escavar: false, felino: true, formigas: false, nota_50: true } },
    { name: "Ararinha-azul", image: "arara-azul.webp", features: { mamifero: false, voa: true, aquatico: false, penas: true, pelos: false, casco: false, azul: true, pintas: false, laranja: false, listras_cauda: false, pernas_longas: false, juba: false, focinho_tubo: false, bico_grande: false, chifres: false, garras_escavar: false, felino: false, formigas: false } },
    { name: "Tamanduá-bandeira", image: "tamandua.webp", features: { mamifero: true, voa: false, aquatico: false, penas: false, pelos: true, casco: false, azul: false, pintas: false, laranja: false, listras_cauda: false, pernas_longas: false, juba: false, focinho_tubo: true, bico_grande: false, chifres: false, garras_escavar: true, felino: false, formigas: true, nota_100: false } },
    { name: "Capivara", image: "capivara.webp", features: { mamifero: true, voa: false, aquatico: true, penas: false, pelos: true, casco: false, azul: false, pintas: false, laranja: false, listras_cauda: false, pernas_longas: false, juba: false, focinho_tubo: false, bico_grande: false, chifres: false, garras_escavar: false, felino: false, formigas: false, roedor: true } },
    { name: "Tucano", image: "tucano.webp.jpg", features: { mamifero: false, voa: true, aquatico: false, penas: true, pelos: false, casco: false, azul: false, pintas: false, laranja: false, listras_cauda: false, pernas_longas: false, juba: false, focinho_tubo: false, bico_grande: true, chifres: false, garras_escavar: false, felino: false, formigas: false } },
    { name: "Piranha", image: "piranha.webp", features: { mamifero: false, voa: false, aquatico: true, penas: false, pelos: false, casco: false, azul: false, pintas: false, laranja: false, listras_cauda: false, pernas_longas: false, juba: false, focinho_tubo: false, bico_grande: false, chifres: false, garras_escavar: false, felino: false, carnivoro: true } },
    { name: "Cutia", image: "cutia.webp.jpg", features: { mamifero: true, voa: false, aquatico: false, penas: false, pelos: true, casco: false, azul: false, pintas: false, laranja: false, listras_cauda: false, pernas_longas: false, juba: false, focinho_tubo: false, bico_grande: false, chifres: false, garras_escavar: false, felino: false, roedor: true } },
    { name: "Tartaruga", image: "tartaruga.webp", features: { mamifero: false, voa: false, aquatico: true, penas: false, pelos: false, casco: true, azul: false, pintas: false, laranja: false, listras_cauda: false, pernas_longas: false, juba: false, focinho_tubo: false, bico_grande: false, chifres: false, garras_escavar: false, felino: false, herbivoro: true } },
    { name: "Mico-leão-dourado", image: "mico-leao.webp", features: { mamifero: true, voa: false, aquatico: false, penas: false, pelos: true, casco: false, azul: false, pintas: false, laranja: true, listras_cauda: false, pernas_longas: false, juba: true, focinho_tubo: false, bico_grande: false, chifres: false, garras_escavar: false, felino: false, nota_20: true } },
    { name: "Veado Catingueiro", image: "veado.webp", features: { mamifero: true, voa: false, aquatico: false, penas: false, pelos: true, casco: false, azul: false, pintas: false, laranja: false, listras_cauda: false, pernas_longas: true, juba: false, focinho_tubo: false, bico_grande: false, chifres: true, garras_escavar: false, felino: false, herbivoro: true } },
    { name: "Cachorro do Mato", image: "cachorro-mato.webp", features: { mamifero: true, voa: false, aquatico: false, penas: false, pelos: true, casco: false, azul: false, pintas: false, laranja: false, listras_cauda: false, pernas_longas: false, juba: false, focinho_tubo: false, bico_grande: false, chifres: false, garras_escavar: false, felino: false, carnivoro: true } },
    { name: "Quati", image: "quati.webp", features: { mamifero: true, voa: false, aquatico: false, penas: false, pelos: true, casco: false, azul: false, pintas: false, laranja: false, listras_cauda: true, pernas_longas: false, juba: false, focinho_tubo: true, bico_grande: false, chifres: false, garras_escavar: true, felino: false } },
    { name: "Jaguatirica", image: "jaguatirica.webp", features: { mamifero: true, voa: false, aquatico: false, penas: false, pelos: true, casco: false, azul: false, pintas: true, laranja: false, listras_cauda: false, pernas_longas: false, juba: false, focinho_tubo: false, bico_grande: false, chifres: false, garras_escavar: false, felino: true } }
];

const questions = {
    mamifero: "O animal é um mamífero?",
    voa: "Ele é capaz de voar?",
    aquatico: "O animal vive principalmente na água?",
    penas: "O corpo é coberto por penas?",
    pelos: "O animal possui pelos?",
    casco: "A pele é protegida por uma carapaça ou casco duro?",
    azul: "O pelo (ou pena) é predominantemente azul?",
    pintas: "O animal tem manchas escuras (pintinhas) pelo corpo?",
    laranja: "A cor do pelo é predominantemente laranja ou dourada?",
    listras_cauda: "Ele possui listras na cauda?",
    pernas_longas: "O animal tem pernas muito longas e finas?",
    juba: "Ele possui uma 'juba' ou pelos mais longos no pescoço?",
    focinho_tubo: "Ele possui o focinho comprido e fino (formato de tubo)?",
    bico_grande: "Ele possui um bico grande e colorido?",
    chifres: "O animal tem chifres (mesmo que pequenos)?",
    garras_escavar: "As patas possuem garras fortes para escavar?",
    felino: "O animal é considerado um grande felino?",
    formigas: "Ele se alimenta principalmente de formigas e cupins?",
    roedor: "O animal é conhecido por ser um roedor?",
    carnivoro: "É um animal carnívoro (caçador)?",
    herbivoro: "É um animal herbívoro (come apenas plantas)?",
    nota_20: "O animal é o símbolo da nota de 20 reais?",
    nota_50: "O animal é o símbolo da nota de 50 reais?"
};

let possibleAnimals = [];
let usedQuestions = [];

function start() {
    possibleAnimals = [...animals];
    usedQuestions = [];
    document.getElementById("animalImage").style.display = "none";
    nextStep();
}

function nextStep() {
    if (possibleAnimals.length <= 1) {
        showResult();
        return;
    }

    // Encontra a melhor pergunta: aquela que divide a lista de animais atuais de forma mais equilibrada
    let bestQuery = "";
    let minDiff = possibleAnimals.length;

    const availableFeatures = Object.keys(questions).filter(f => !usedQuestions.includes(f));

    availableFeatures.forEach(feature => {
        const countSim = possibleAnimals.filter(a => a.features[feature]).length;
        const countNao = possibleAnimals.length - countSim;
        const diff = Math.abs(countSim - countNao);
        
        // Se a pergunta elimina animais, ela é candidata
        if (countSim > 0 && countNao > 0 && diff < minDiff) {
            minDiff = diff;
            bestQuery = feature;
        }
    });

    // Se não houver mais perguntas úteis para diferenciar
    if (!bestQuery) {
        showResult();
        return;
    }

    renderQuestion(bestQuery);
}

function renderQuestion(feature) {
    const qEl = document.getElementById("question");
    const bEl = document.getElementById("buttons");
    
    qEl.textContent = questions[feature];
    bEl.innerHTML = `
        <button class="btn-sim" onclick="handleAnswer('${feature}', true)">Sim</button>
        <button class="btn-nao" onclick="handleAnswer('${feature}', false)">Não</button>
    `;
}

function handleAnswer(feature, val) {
    usedQuestions.push(feature);
    possibleAnimals = possibleAnimals.filter(a => a.features[feature] === val);
    nextStep();
}

function showResult() {
    const qEl = document.getElementById("question");
    const bEl = document.getElementById("buttons");
    const img = document.getElementById("animalImage");

    if (possibleAnimals.length === 0) {
        qEl.textContent = "Não encontrei esse animal no meu banco de dados! 😢";
    } else {
        const result = possibleAnimals[0];
        qEl.textContent = "Você pensou no(a): " + result.name + "!";
        img.src = result.image;
        img.style.display = "block";
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    }

    bEl.innerHTML = '<button id="startBtn" onclick="start()">Jogar Novamente</button>';
}

document.getElementById("startBtn").onclick = start;
