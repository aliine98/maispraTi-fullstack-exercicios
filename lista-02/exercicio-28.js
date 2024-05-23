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

function sumUpperTriangularNumbers(m) {
    let sum = 0;
    for (let i = 0; i < m.length; i++) {
        for (let j = i + 1; j < m[i].length; j++) {
            sum += m[i][j];
        }
    }
    return sum;
}

function sumLowerTriangularNumbers(m) {
    let sum = 0;
    for (let i = 1; i < m.length; i++) {
        for (let j = 0; j < i; j++) {
            sum += m[i][j];
        }
    }
    return sum;
}

const m = createMatrix(10, 10);
console.log('Matriz: ');
console.log(m);
console.log(`Soma dos elementos acima da diagonal principal: ${sumUpperTriangularNumbers(m)}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${sumLowerTriangularNumbers(m)}`);
