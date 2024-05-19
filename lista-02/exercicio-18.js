const prompt = require('prompt-sync')();

const employee = { nome: '', salario: 0, cargo: '' };
for (const key in employee) {
    const value = prompt(`Insira o ${key} do funcionário: `);
    employee[key] = value;
}
console.log(employee);