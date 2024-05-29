const data = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    hobbies: ['futebol', 'programação', 'esportes'],
    pets: [
        { nome: 'Rex', tipo: 'cachorro' },
        { nome: 'Luna', tipo: 'gato' },
    ],
};

function propertyArrays(data) {
    const newObj = {};
    for (const prop in data) {
        if (Array.isArray(data[prop])) {
            newObj[prop] = data[prop];
        }
    }
    return newObj;
}

console.log(propertyArrays(data));
