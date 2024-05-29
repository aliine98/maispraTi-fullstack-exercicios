const prompt = require('prompt-sync')();

function getNumberList() {
    const numbers = [];
    for (let i = 0; i < 100; i++) {
        numbers.push(Number(prompt('Insira um valor: ')));
    }
    return numbers;
}

function getListWithoutNegatives(list) {
    const numbers = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] > 0) {
            numbers.push(list[i]);
        }
    }
    return numbers;
}

const A = getNumberList();
const B = getListWithoutNegatives(A);
console.log(B);
