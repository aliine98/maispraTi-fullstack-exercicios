const array = ['a', 'b', 'c', 'a', 'b', 'a'];
const obj = {};
for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
        obj[array[i]]++;
    } else {
        obj[array[i]] = 1;
    }
}

console.log(obj);
