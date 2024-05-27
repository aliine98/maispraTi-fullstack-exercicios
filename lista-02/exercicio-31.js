const prompt = require('prompt-sync')();

function createMatrix() {
    const matrix = [];
    for (let i = 0; i < 30; i++) {
        matrix.push([]);
        for (let j = 0; j < 30; j++) {
            matrix[i].push(Math.floor(Math.random() * 50));
        }
    }
    return matrix;
}

function getCountOfEqualValues(matrix, number) {
    let count = 0;
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (matrix[i][j] === number) {
                count++;
            }
        }
    }
    return count;
}

function getDifferentValues(matrix, number) {
    const differentValues = [];
    for (let i = 0; i < 30; i++) {
        differentValues.push([]);
        for (let j = 0; j < 30; j++) {
            if (matrix[i][j] !== number) {
                differentValues[i].push(matrix[i][j]);
            }
        }
    }
    return differentValues;
}

const matrix = createMatrix();
const number = Number(prompt('Insira um valor para verificar na matriz: '));

console.log(matrix);
console.log(`Quantidade de valores iguais a ${number} na matriz: ${getCountOfEqualValues(matrix, number)}`);
console.log(`Matriz de valores diferentes de ${number}: `);
console.log(getDifferentValues(matrix, number));
