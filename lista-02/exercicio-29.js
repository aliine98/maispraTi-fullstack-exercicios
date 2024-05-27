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

function sumDiagonal(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }
    return sum;
}

function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}

const matrix = createMatrix();
console.log(matrix);
console.log(`Soma da linha 4: ${sumRow(matrix, 3)}`);
console.log(`Soma da coluna 2: ${sumColumn(matrix, 1)}`);
console.log(`Soma da diagonal principal: ${sumDiagonal(matrix)}`);
console.log(`Soma da matriz: ${sumMatrix(matrix)}`);
