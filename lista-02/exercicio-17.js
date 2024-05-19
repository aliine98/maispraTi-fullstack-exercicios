const prompt = require('prompt-sync')();

function getPeople() {
    const names = [];
    const ages = [];
    for(let i = 0; i < 9; i++) {
        names.push(prompt('Insira o nome da pessoa: '));
        ages.push(Number(prompt('Insira a idade da pessoa: ')));
    }
    return {names, ages};
}

function getYoungerPeople(names, ages) {
    const youngerPeople = [];
    for(let i = 0; i < ages.length; i++) {
        if(ages[i] < 18) {
            youngerPeople.push({nome: names[i], idade: ages[i]});
        }
    }
    return youngerPeople;
}

const {names, ages} = getPeople();
const youngerPeople = getYoungerPeople(names, ages);
console.log('Pessoas menores de 18: ');
for (person of youngerPeople) {
    console.log(person);
}