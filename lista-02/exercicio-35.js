const prompt = require('prompt-sync')();

const evens = [];
const odds = [];

function getNumbers() {
    const numberList = [];
    for (let i = 0; i < 30; i++) {
        numberList.push(Number(prompt('Insira um número: ')));
    }
    return numberList;
}

const numberList = getNumbers();
for (const number of numberList) {
    if (number % 2 === 0 && evens.length < 5) {
        evens.push(number);
    } else if (number % 2 !== 0 && odds.length < 5) {
        odds.push(number);
    }
    if (evens.length === 5) {
        console.log(`Vetor par: ${evens}`);
        evens.splice(0);
    }
    if (odds.length === 5) {
        console.log(`Vetor impar: ${odds}`);
        odds.splice(0);
    }
}
