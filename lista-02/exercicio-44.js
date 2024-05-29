function countStringProperties(obj) {
    let count = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            count++;
        }
    }
    return count;
}

const obj = { a: 1, b: 'string', c: true, d: 'hello', e: 0 };
const result = countStringProperties(obj);
console.log(`Número de propriedades que são string: ${result}`);
