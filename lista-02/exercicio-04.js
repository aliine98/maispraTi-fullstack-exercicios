const prompt = require('prompt-sync')();

function isTriangle(a, b, c) {
    return a < b + c && b < a + c && c < a + b;
}

const a = Number(prompt('Informe o tamanho do segmento de reta "a": '));
const b = Number(prompt('Informe o tamanho do segmento de reta "b": '));
const c = Number(prompt('Informe o tamanho do segmento de reta "c": '));

if (isTriangle(a, b, c)) {
    console.log('Os segmentos passados formam um triângulo.');
} else {
    console.log('Os segmentos passados não formam um triângulo.');
}