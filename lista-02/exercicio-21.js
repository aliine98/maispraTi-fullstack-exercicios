const prompt = require('prompt-sync')();

function getIdealWeight(height, gender) {
    if (gender === 'M') {
        return 72.7 * height - 58;
    } else if (gender === 'F') {
        return 62.1 * height - 44.7;
    }
}

const height = Number(prompt('Insira sua altura em metros (Ex.: 1.75): '));
const gender = prompt('Insira seu gênero (M/F): ').toUpperCase();
console.log(`Seu peso ideal é ${getIdealWeight(height, gender).toFixed(2)} kg.`);