const prompt = require('prompt-sync')();

function createMatrix() {
    const m = [];
    for (let i = 0; i < 6; i++) {
        m.push([]);
        for (let j = 0; j < 6; j++) {
            const num = Number(prompt(`Informe o número da posição ${i + 1}, ${j + 1} da matriz: `));
            m[i].push(num);
        }
    }
    return m;
}

function multiplyMatrixByNumber(m, n) {
    const multiplied = [];
    m.forEach(row => row.forEach(num => multiplied.push(num * n)));
    return multiplied;
}

const matrix = createMatrix();
const number = Number(prompt('Insira um valor para multiplicar pela matriz: '));
console.log(`${multiplyMatrixByNumber(matrix, number)}`);
