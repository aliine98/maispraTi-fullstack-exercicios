const transactions = [
    { id: 1, value: 1000, date: '2024-01-01', category: 'food' },
    { id: 2, value: 2000, date: '2024-01-02', category: 'clothes' },
    { id: 3, value: 3000, date: '2024-01-03', category: 'food' },
];

function groupByCategory(transactions) {
    const groupedTransactions = {};
    for (const transaction of transactions) {
        const category = transaction.category;
        if (!groupedTransactions[category]) {
            groupedTransactions[category] = [];
        }
        groupedTransactions[category].push(transaction);
    }
    return groupedTransactions;
}

console.log(transactions);
console.log('Transações agrupadas por categoria:');
console.log(groupByCategory(transactions));
