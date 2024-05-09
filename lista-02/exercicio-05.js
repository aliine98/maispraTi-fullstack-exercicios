const prompt = require('prompt-sync')();

function joKenPo(player) {
    const options = ['pedra', 'papel', 'tesoura'];
    const computer = options[Math.floor(Math.random() * options.length)];
    const playerOption = player.toLowerCase();
    if (playerOption === computer) {
        return 'Empate!';
    } else if (playerOption === 'pedra') {
        return computer === 'papel' ? `Perdeu! Computador escolheu ${computer}` : `Ganhou! Computador escolheu ${computer}`;
    } else if (playerOption === 'papel') {
        return computer === 'tesoura' ? `Perdeu! Computador escolheu ${computer}` : `Ganhou! Computador escolheu ${computer}`;
    } else if (playerOption === 'tesoura') {
        return computer === 'pedra' ? `Perdeu! Computador escolheu ${computer}` : `Ganhou! Computador escolheu ${computer}`;
    }
}

const player = prompt('Pedra, Papel ou Tesoura? ');
console.log(joKenPo(player));