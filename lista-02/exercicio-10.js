const prompt = require('prompt-sync')();

function makeNumberArray() {
    let continueLoop = 's';
    const numbers = [];

    do {
        const number = Number(prompt('Insira um número: '));
        numbers.push(number);
        continueLoop = prompt('Deseja adicionar outro número (s/n)? ').toLowerCase();
    } while (continueLoop === 's');

    return numbers;
}

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function min(numbers) {
    let min;
    numbers.forEach(num => {
        if (num < min || min === undefined) {
            min = num;
        }
    });
    return min;
}

function calcAverage(numbers) {
    return (sumNumbers(numbers)) / numbers.length;
}

function isEven(number) {
    return number % 2 === 0;
}

function countEvenNumbers(numbers) {
    let count = 0;
    for (let num of numbers) {
        if (isEven(num)) {
            count++;
        }
    }
    return count;
}

const numbers = makeNumberArray();
console.log(`Soma: ${sumNumbers(numbers)}`);
console.log(`Mínimo: ${min(numbers)}`);
console.log(`Média: ${calcAverage(numbers)}`);
console.log(`Quantidade de números pares: ${countEvenNumbers(numbers)}`);