const prompt = require('prompt-sync')();

function getNamesList() {
    const names = [];
    for (let i = 0; i < 7; i++) {
        names.push(prompt('Insira um nome: '));
    }
    return names;
}

function reverseNames(names) {
    const reversedNames = [];
    for (let i = names.length - 1; i >= 0; i--) {
        reversedNames.push(names[i]);
    }
    return reversedNames;
}

const names = getNamesList();
console.log(reverseNames(names));
console.log(names.reverse()); //modifica o array original