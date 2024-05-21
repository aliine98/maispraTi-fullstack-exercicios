const prompt = require('prompt-sync')();

function getPopulationInfo(population) {
    let totalSalary = 0;
    let totalChildren = 0;
    let greatestSalary = 0;
    let familyWithSalaryLessThan350 = 0;

    for (const family of population) {
        if (family.salary > greatestSalary) {
            greatestSalary = family.salary;
        }

        if(family.salary <= 350) {
            familyWithSalaryLessThan350++;
        }

        totalSalary += family.salary;
        totalChildren += family.children;
    }

    const percentageWithSalaryLessThan350 = (familyWithSalaryLessThan350 / population.length) * 100;

    return {
        mediaSalario: totalSalary / population.length,
        mediaFilhos: totalChildren / population.length,
        maiorSalario: greatestSalary,
        porcentagem: percentageWithSalaryLessThan350
    };

};

const population = [];
let continueLoop = 's';
do {
    const family = {
        salary: Number(prompt('Qual o valor da renda familiar? ')),
        children: Number(prompt('Quantos filhos? '))
    }
    population.push(family);
    continueLoop = prompt('Deseja continuar? (s/n) ');
} while (continueLoop === 's');

const populationInfo = getPopulationInfo(population);

console.log(`População: ${population.length}`);
console.log(`Média de renda familiar: ${populationInfo.mediaSalario.toFixed(2)}`);
console.log(`Média de filhos: ${populationInfo.mediaFilhos.toFixed(2)}`);
console.log(`Maior renda familiar: ${populationInfo.maiorSalario}`);
console.log(`Porcentagem de pessoas com renda familiar inferior a R$ 350,00: ${populationInfo.porcentagem.toFixed(2)}%`);