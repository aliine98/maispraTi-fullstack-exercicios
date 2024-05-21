const mi = [];

for (let i = 0; i < 7; i++) {
    mi.push([]);
    for (let j = 0; j < 7; j++) {
        if (i == j) {
            mi[i].push(1);
        } else {
            mi[i].push(null);
        }
    }
}

console.log(mi);
