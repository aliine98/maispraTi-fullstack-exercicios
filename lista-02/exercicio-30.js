const prompt = require('prompt-sync')();

function createMatrix() {
    const matrix = [];
    for (let i = 0; i < 5; i++) {
        matrix.push([]);
        for (let j = 0; j < 5; j++) {
            matrix[i].push(Number(prompt(`Insira o valor da linha ${i + 1}, coluna ${j + 1} da matriz: `)));
        }
    }
    return matrix;
}

function sumRow(matrix, row) {
    let sum = 0;
    for (let i = 0; i < matrix[row].length; i++) {
        sum += matrix[row][i];
    }
    return sum;
}

function sumColumn(matrix, col) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][col];
    }
    return sum;
}

const matrix = createMatrix();
const rowSums = [];
const columnSums = [];
for (let i = 0; i < 5; i++) {
    rowSums.push(sumRow(matrix, i));
    columnSums.push(sumColumn(matrix, i));
}

console.log(matrix);
console.log(rowSums);
console.log(columnSums);
