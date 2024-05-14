function getFibonacci() {
    const numbers = [1,1];
    for(let i = 0; i < 8; i++) {
        numbers.push(numbers[i] + numbers[i+1]);
    }
    return numbers;
}

console.log(`10 primeiros números da sequência de Fibonacci: ${getFibonacci().join(', ')}`);