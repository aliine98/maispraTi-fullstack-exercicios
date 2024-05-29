const merge = (obj1, obj2) => {
    const result = { ...obj1, ...obj2 };
    return result;
};

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const result = merge(obj1, obj2);
console.log('Objeto resultante da união entre obj1 e obj2:', result);
