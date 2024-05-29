const storeA = {
    item1: 10,
    item2: 15,
    item3: 20,
};
const storeB = {
    item1: 5,
    item3: 20,
    item4: 10,
};

function combineStores(storeA, storeB) {
    const combinedStore = {};

    for (const item in storeA) {
        combinedStore[item] = storeA[item];
    }

    for (const item in storeB) {
        if (combinedStore[item]) {
            combinedStore[item] += storeB[item];
            continue;
        } else {
            combinedStore[item] = storeB[item];
        }
    }
    return combinedStore;
}

console.log('Loja A: ', storeA);
console.log('Loja B: ', storeB);
console.log('Loja A e B combinadas: ', combineStores(storeA, storeB));
