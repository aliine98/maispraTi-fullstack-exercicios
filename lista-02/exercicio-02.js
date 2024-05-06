const prompt = require('prompt-sync')();

function calcTrafficFine(speed) {
    const maxSpeed = 80;

    if (speed > maxSpeed) {
        const overSpeed = speed - maxSpeed;
        const trafficFine = overSpeed * 5;
        return `Multa de R$${trafficFine.toFixed(2)}`;
    } else {
        return 'Sem Multa';
    }
}

console.log(calcTrafficFine(prompt('Qual foi a velocidade do seu veículo? ')));