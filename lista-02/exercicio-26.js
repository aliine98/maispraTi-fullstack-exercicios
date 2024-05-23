function createMatrix(rows, columns) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < columns; j++) {
            matrix[i].push(Math.floor(Math.random() * 50));
        }
    }

    return matrix;
}

function multiplyMatrices(matrixA, matrixB) {
    const result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result.push([]);
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrixB.length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i].push(sum);
        }
    }
    return result;
}

const matrixA = createMatrix(3, 5);
const matrixB = createMatrix(5, 3);
console.log('Matriz A:');
matrixA.forEach(r => console.log(...r));
console.log('----------');
console.log('Matriz B:');
matrixB.forEach(r => console.log(...r));
console.log('----------');
console.log('Matriz produto:');
multiplyMatrices(matrixA, matrixB).forEach(r => console.log(...r));
console.log('----------');
