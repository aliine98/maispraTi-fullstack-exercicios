const prompt = require('prompt-sync')();

function sum(numbers) {
    let sum = 0;
    numbers.forEach(number => sum += number);
    return sum;
}

function getArithmeticProgression() {
    const firstTerm = Number(prompt('Insira o primeiro termo da progressão aritmética: '));
    const commonDifference = Number(prompt('Insira a razão da progressão aritmética: '));
    const numbers = [firstTerm];

    for (let i = 0; i < 9; i++) {
        numbers.push(numbers[i] + commonDifference);
    }
    return numbers;
}

const arithmeticProgression = getArithmeticProgression();
console.log(arithmeticProgression);
console.log(`Soma: ${sum(arithmeticProgression)}`);