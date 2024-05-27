function createMatrix() {
    const matrix = [];
    for (let i = 0; i < 50; i++) {
        matrix.push([]);
        for (let j = 0; j < 50; j++) {
            matrix[i].push(Math.floor(Math.random() * 50));
        }
    }
    return matrix;
}

function multiplyMatrix(matrix) {
    const matrixResult = [];
    for (let i = 0; i < matrix.length; i++) {
        const diagonal = matrix[i][i];
        matrixResult.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            matrixResult[i].push(diagonal * matrix[i][j]);
        }
    }
    return matrixResult;
}

const matrix = createMatrix();
const matrixResult = multiplyMatrix(matrix);
console.log('Matriz após a multiplicação: ');
console.log(matrixResult);
