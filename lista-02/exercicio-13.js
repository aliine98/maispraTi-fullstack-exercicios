function getFibonacci() {
    const numbers = [];
    let i = 1;
    while(i < 14) {
        if(i === 1) {
            numbers.push(i);
            numbers.push(i);
        }
        numbers.push(numbers[i-1] + numbers[i]);
        i++;
    }
    return numbers;
}

console.log(`15 primeiros números da sequência de Fibonacci: ${getFibonacci().join(', ')}`);