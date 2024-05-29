const obj = { a: 1, b: 2, c: 3 };

function transformObject(obj, fn) {
    const newObj = {};
    for (const key in obj) {
        newObj[key] = fn(obj[key]);
    }
    return newObj;
}

const result = transformObject(obj, x => x * 2);
console.log(result);
