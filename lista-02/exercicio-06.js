const prompt = require('prompt-sync')();

function drawNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

function play() {
    const num = Number(prompt('Escolha um número entre 1 e 5: '));
    const drawnNum = drawNumber();
    if(num === drawnNum) {
        console.log('Parabéns, você acertou!');
    } else {
        console.log(`Que pena, você errou. O número correto era ${drawnNum}.`);
    }
}

play();