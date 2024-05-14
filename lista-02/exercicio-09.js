const prompt = require('prompt-sync')();

function calcMenWomenSalaries(employees) {
    let totalMenSalary = 0;
    let totalWomenSalary = 0;

    employees.forEach(employee => {
        if (employee.gender === 'masculino') {
            totalMenSalary += employee.salary;
        } else if (employee.gender === 'feminino') {
            totalWomenSalary += employee.salary;
        }
    });

    return `O valor total dos salários dos homens é R$${totalMenSalary.toFixed(2)}, e o valor total dos salários das mulheres é R$${totalWomenSalary.toFixed(2)}`;
}


let continueLoop = 's';
const employees = [];

while (continueLoop === 's') {
    const gender = prompt('Qual o gênero do funcionário (Masculino/Feminino)? ').toLowerCase();
    const salary = Number(prompt('Qual o salário do funcionário (Apenas números)? '));
    employees.push({ gender, salary });
    continueLoop = prompt('Deseja adicionar outro funcionário (s/n)? ').toLowerCase();
}

console.log(calcMenWomenSalaries(employees));