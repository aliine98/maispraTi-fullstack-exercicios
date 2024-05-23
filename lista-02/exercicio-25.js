function createMatrix(rows, columns) {
    const m = [];
    for (let i = 0; i < rows; i++) {
        m.push([]);
        for (let j = 0; j < columns; j++) {
            m[i].push(Math.floor(Math.random() * 50));
        }
    }

    return m;
}

function sumColumn(matrix, col) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][col];
    }
    return sum;
}

const matrix = createMatrix(15, 20);

matrix[0].forEach((_, j) => {
    console.log(`Soma da coluna ${j + 1} = ${sumColumn(matrix, j)}`);
});
