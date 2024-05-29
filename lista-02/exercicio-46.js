const sales = [
    { seller: 'João', value: 100 },
    { seller: 'Maria', value: 200 },
    { seller: 'João', value: 300 },
    { seller: 'Maria', value: 400 },
    { seller: 'João', value: 500 },
];

function totalSalesBySeller(sales) {
    const totalSalesBySeller = {};

    for (let i = 0; i < sales.length; i++) {
        const seller = sales[i].seller;

        if (totalSalesBySeller[seller]) {
            totalSalesBySeller[seller] += sales[i].value;
        } else {
            totalSalesBySeller[seller] = sales[i].value;
        }
    }

    return totalSalesBySeller;
}

console.log('Total de vendas de cada vendedor:');
console.log(totalSalesBySeller(sales));
