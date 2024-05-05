const prompt = require('prompt-sync')();

const cigarettesPerDay = prompt('Quantos cigarros você fuma por dia? ');
const yearsSmoking = prompt('Ha quantos anos você fuma? ');

function calcLostDays(cigarettesPerDay, yearsSmoking) {
    const totalCigarettes = cigarettesPerDay * (yearsSmoking * 365);
    const minutesLost = totalCigarettes * 10;
    const daysLost = Math.ceil(minutesLost / 1440);

    return `Voce perdeu ${daysLost} dias de vida.`;
}

console.log(calcLostDays(cigarettesPerDay, yearsSmoking));