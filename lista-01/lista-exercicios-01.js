const prompt = require('prompt-sync')();
// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
console.log('Exercício 01: Celsius para Fahrenheit');
const celsius = prompt('Insira uma temperatura em graus Celsius: ');
const fahrenheit = celsius * 1.8 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);
console.log('----------------------------------');

// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
console.log('Exercício 02: Eleitores');
const eleitores = prompt('Insira o total de eleitores: ');
const votosBrancos = prompt('Insira o total de votos brancos: ');
const votosNulos = prompt('Insira o total de votos nulos: ');
const votosValidos = prompt('Insira o total de votos válidos: ');
const brancos = (votosBrancos / eleitores) * 100;
const nulos = (votosNulos / eleitores) * 100;
const validos = (votosValidos / eleitores) * 100;
console.log(`Percentual de votos brancos: ${brancos}%`);
console.log(`Percentual de votos nulos: ${nulos}%`);
console.log(`Percentual de votos válidos: ${validos}%`);
console.log('----------------------------------');

/*
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.
*/
console.log('Exercício 03: Operações');
const num01 = parseInt(prompt('Insira o primeiro número: '));
const num02 = parseInt(prompt('Insira o segundo número: '));
const num3 = parseInt(prompt('Insira o terceiro número: '));
let num4 = parseInt(prompt('Insira o quarto número: '));
const somaCom25 = num01 + 25;
const triplo = num02 * 3;
const porcentagem = num3 * 0.12;
console.log(`num4 = ${num4}`);
num4 = num01 + num02 + num3;
console.log(`${num01} + 25 = ${somaCom25}`);
console.log(`${num02} * 3 = ${triplo}`);
console.log(`12% de ${num3} = ${porcentagem}`);
console.log(`${num01} + ${num02} + ${num3} = ${num4}`);
console.log('----------------------------------');

//4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).
//5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0
console.log('Exercício 04 e 05: Média');
const nota1 = parseFloat(prompt('Insira a primeira nota: '));
const nota2 = parseFloat(prompt('Insira a segunda nota: '));
const media = (nota1 + nota2) / 2;
if (media >= 6) {
    console.log(`Sua media foi de ${media}. PARABÉNS! Você foi aprovado`);
} else {
    console.log('Você foi REPROVADO! Estude mais');
}

/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
console.log('Exercício 06: Triângulo');
const A = parseFloat(prompt('Insira o primeiro lado: '));
const B = parseFloat(prompt('Insira o segundo lado: '));
const C = parseFloat(prompt('Insira o terceiro lado: '));
if(A < B + C && B < A + C && C < A + B) {
    if(A === B && B === C) {
        console.log('Triângulo eqúilátero');
    } else if(A === B || A === C || B === C) {
        console.log('Triângulo isósceles');
    } else {
        console.log('Triângulo escaleno');
    }
} else {
    console.log('Os lados fornecidos não formam um triângulo');
}
console.log('----------------------------------');

//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
console.log('Exercício 07: Macas');
const maças = parseInt(prompt('Insira o número de maçãs compradas: '));
const valor = maças < 12 ? 0.30 : 0.25;
const total = maças * valor;
console.log(`Total da compra: R$ ${total}`);
console.log('----------------------------------');

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
console.log('Exercício 08: Ordem crescente');
const num1 = parseInt(prompt('Insira o primeiro número: '));
const num2 = parseInt(prompt('Insira o segundo número: '));
if (num1 > num2) {
    console.log(`${num2}, ${num1}`);
} else if(num1 < num2) {
    console.log(`${num1}, ${num2}`);
} else {
    console.log('Os números são iguais');
}
console.log('----------------------------------');

/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
|   Código  |    Região   |
|     1     |     Sul     |
|     2     |    Norte    |
|     3     |    Leste    |
|     4     |    Oeste    |
|   5, 6    |   Nordeste  |
|  7, 8, 9  |   Sudeste   |
| 10 até 20 | Centro-oeste|
| 25 até 50 |   Nordeste  |
|   outros  |  Importado  |
*/
console.log('Exercício 09: Código de origem');
const origem = parseInt(prompt('Insira o código de origem: '));
if(origem === 1) {
    console.log('Sul');
} else if(origem === 2) {
    console.log('Norte');
} else if(origem === 3) {
    console.log('Leste');
} else if(origem === 4) {
    console.log('Oeste');
} else if(origem === 5 || origem === 6) {
    console.log('Nordeste');
} else if(origem === 7 || origem === 8 || origem === 9) {
    console.log('Sudeste');
} else if(origem >= 10 && origem <= 20) {
    console.log('Centro-oeste');
} else if(origem >= 25 && origem <= 50) {
    console.log('Nordeste');
} else {
    console.log('Importado');
}
console.log('----------------------------------');

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
console.log('Exercício 10: Repetição');
const num10 = parseInt(prompt('Insira um número: '));
for(let i = 0; i < 10; i++) {
    console.log(num10);
}
console.log('----------------------------------');

//11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.
console.log('Exercício 11: Par ou Ímpar');
let num11 = parseInt(prompt('Insira um número: '));
while(num11 > 0 && num11 !== null) {
    if(num11 % 2 === 0) {
        console.log(`${num11} e par`);
    } else {
        console.log(`${num11} e Ímpar`);
    }
    num11 = parseInt(prompt('Insira um número: '));
}
console.log('----------------------------------');

//12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.
console.log('Exercício 12: Divisíveis por 11, com resto 5');
for(let i = 1000; i <= 1999; i++) {
    if(i % 11 === 5) {
        console.log(i);
    }
}
console.log('----------------------------------');

/*
13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/
console.log('Exercício 13: Tabuada');
for(let i = 0; i < 5; i++) {
    const N = parseInt(prompt('Insira um número: '));
    console.log(`Tabuada de ${N}`);
    for(let j = 1; j <= N; j++) {
        console.log(`${j} x ${N} = ${j * N}`);
    }
}
console.log('----------------------------------');

//14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
console.log('Exercício 14: Média com decimais');
let num14 = parseFloat(prompt('Insira um número: '));
let soma14 = 0;
let cont = 0;
while (num14 > 0) {
    soma14 += num14;
    cont++;
    num14 = parseFloat(prompt('Insira um número: '));
}
console.log(`Soma: ${soma14}`);
console.log(`Quantidade de números: ${cont}`);
console.log(`Média: ${soma14 / cont}`);
console.log('----------------------------------');

//15. Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.
console.log('Exercício 15: Média ponderada');
let num15 = parseFloat(prompt('Insira um número: '));
let peso = parseFloat(prompt('Insira o peso: '));
let soma = 0;
let somaPesos = 0;
while (num15 > 0) {
    soma += num15 * peso;
    somaPesos += peso;
    num15 = parseFloat(prompt('Insira um número: '));
    peso = parseFloat(prompt('Insira o peso: '));
}
console.log(`Soma: ${soma}`);
console.log(`Soma dos pesos: ${somaPesos}`);
console.log(`Média: ${soma / somaPesos}`);
console.log('----------------------------------');

// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
console.log('Exercício 16: Numeros primos');
let contador = 0;
let num16 = 100;
let divisor = 2;
while(contador < 50) {
    while(divisor < num16) {
        if(num16 % divisor === 0) {
            num16++;
            divisor = 2;
        } else {
            divisor++;
        }
    }
    console.log(num16);
    num16++;
    contador++;
    divisor = 2;
}