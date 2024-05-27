function createMatrix() {
    let matrix = [];
    for (let i = 0; i < 12; i++) {
        matrix[i] = [];
        for (let j = 0; j < 13; j++) {
            matrix[i][j] = Math.floor(Math.random() * 50);
        }
    }
    return matrix;
}

function getBiggestElement(matrix, row) {
    let biggest = matrix[row][0];
    for (let i = 0; i < matrix[row].length; i++) {
        if (Math.abs(matrix[row][i]) > Math.abs(biggest)) {
            biggest = matrix[row][i];
        }
    }
    return biggest;
}

function divideByBiggestElement(matrix) {
    const matrixDivided = [];
    for (let i = 0; i < matrix.length; i++) {
        matrixDivided.push([]);
        const biggestElement = getBiggestElement(matrix, i);
        for (let j = 0; j < matrix[i].length; j++) {
            matrixDivided[i].push(Number((matrix[i][j] / biggestElement).toFixed(2)));
        }
    }
    return matrixDivided;
}

const matrix = createMatrix();
const matrixDivided = divideByBiggestElement(matrix);
console.log(matrix);
console.log(matrixDivided);
