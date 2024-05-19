const employees = [{
    matricula: 1,
    name: 'João',
    salary: 2000
}, {
    matricula: 2,
    name: 'Maria',
    salary: 3000
}];

for (const employee of employees) {
    const deduction = employee.salary * 0.12;
    const salary = employee.salary - deduction;
    console.log(`Matrícula: ${employee.matricula}`);
    console.log(`Nome: ${employee.name}`);
    console.log(`Salário bruto: R$${employee.salary.toFixed(2)}`);
    console.log(`Dedução INSS: R$${deduction.toFixed(2)}`);
    console.log(`Salário líquido: R$${salary.toFixed(2)}`);
    console.log('-----------------');
}