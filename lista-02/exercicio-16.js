function getRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 20; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
}

function sortAscending(numbers) {
    const sortedNumbers = [];
    const unsortedNumbers = [...numbers];
    while (unsortedNumbers.length > 0) {
        let min = unsortedNumbers[0];
        let minIndex = 0;
        for (let i = 0; i < unsortedNumbers.length; i++) {
            if (unsortedNumbers[i] < min) {
                min = unsortedNumbers[i];
                minIndex = i;
            }
        }
        sortedNumbers.push(min);
        unsortedNumbers.splice(minIndex, 1);
    }
    return sortedNumbers;
}

const numbers = getRandomNumbers();
console.log(`Lista de números: ${numbers}`);
console.log(`Lista de números em ordem crescente: ${sortAscending(numbers)}`);
numbers.sort((a, b) => a - b); //também ordena em ordem crescente, função nativa do Javascript