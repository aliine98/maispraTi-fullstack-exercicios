const prompt = require('prompt-sync')();

function calcTicket(distance) {
    if (distance <= 200) {
        const ticket = distance * 0.5;
        return ticket.toFixed(2);
    } else {
        const ticket = distance * 0.45;
        return ticket.toFixed(2);
    }
}

const distance = prompt('Qual foi a distância que deseja percorrer em Km? ');

console.log(`O valor da passagem é de R$${calcTicket(distance)}`);