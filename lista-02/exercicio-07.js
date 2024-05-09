const prompt = require('prompt-sync')();

function rentCar(carType, days, km) {
    let pricePerKm;
    let pricePerDay;
    if (carType.toLowerCase() === 'popular') {
        pricePerDay = 90;
        km <= 100 ? pricePerKm = 0.20 : pricePerKm = 0.10;
    } else if (carType.toLowerCase() === 'luxo') {
        pricePerDay = 150;
        km <= 200 ? pricePerKm = 0.30 : pricePerKm = 0.25;
    }
    return `O valor total da sua locação foi de R$${((days * pricePerDay) + (km * pricePerKm)).toFixed(2)}`;
}

const carType = prompt('Qual o tipo de carro que deseja alugar? (popular ou luxo) ');
const days = Number(prompt('Por quantos dias deseja alugar o veículo? '));
const km = Number(prompt('Quantos km foram percorridos? '));
console.log(rentCar(carType, days, km));