const prompt = require('prompt-sync')();

function getNumbersList() {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Number(prompt('Insira um número: ')));
    }
    return numbers;
}

function getEvenNumbers(numbers) {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push({numero: numbers[i], posicao: i});
        }
    }
    return evenNumbers;
}

const numbers = getNumbersList();
const evenNumbers = getEvenNumbers(numbers);
evenNumbers.forEach(el => {
    console.log(`O número ${el.numero} é par e está na posição ${el.posicao}`);
});