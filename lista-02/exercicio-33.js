const prompt = require('prompt-sync')();

function createMatrix() {
    const matrix = [];
    for (let i = 0; i < 3; i++) {
        matrix.push([]);
        for (let j = 0; j < 3; j++) {
            matrix[i].push(Number(prompt(`Insira o valor da linha ${i + 1} e coluna ${j + 1}: `)));
        }
    }
    return matrix;
}

function multiplyDiagonal(matrix) {
    let average = getSecondaryDiagonalAverage(matrix);
    const multiplied = [];
    for (let i = 0; i < matrix.length; i++) {
        multiplied.push(matrix[i][i] * average);
    }
    return multiplied;
}

function getSecondaryDiagonalAverage(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][2 - i];
    }
    return sum / matrix.length;
}

const matrix = createMatrix();
const multiplied = multiplyDiagonal(matrix);
console.log(matrix);
console.log(`Números da diagonal principal multiplicada pela média dos números da diagonal secundária: `, multiplied);
