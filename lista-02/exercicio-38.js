const prompt = require('prompt-sync')();

function getNumbers() {
    const numbers = [];
    for (let i = 0; i < 6; i++) {
        numbers.push(parseInt(prompt(`Insira o ${i + 1}º número: `)));
    }
    return numbers;
}

function getVariable() {
    const variable = parseInt(prompt('Insira a variável (1, 2, 3, 4 ou 5): '));
    return variable;
}

const numbers = getNumbers();
const variable = getVariable();
let result = 0;
switch (variable) {
    case 1:
        result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        console.log(`Soma: ${result}`);
        break;
    case 2:
        result = 1;
        for (let i = 0; i < numbers.length; i++) {
            result *= numbers[i];
        }
        console.log(`Multiplicação: ${result}`);
        break;
    case 3:
        result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        result /= numbers.length;
        console.log(`Média: ${result}`);
        break;
    case 4:
        numbers.sort((a, b) => b - a);
        console.log(`Ordem decrescente: ${numbers}`);
        break;
    case 5:
        result = numbers;
        console.log(`Original: ${result}`);
        break;
    default:
        break;
}
