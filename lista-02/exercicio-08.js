const prompt = require('prompt-sync')();

function calcHealthActivity(hours) {
    let pointsPerHour;
    const moneyPerPoint = 0.05;
    if(hours <= 10) {
        pointsPerHour = 2;
    } else if(hours > 10 && hours <= 20) {
        pointsPerHour = 5;
    } else if(hours > 20) {
        pointsPerHour = 10;
    }
    const totalPoints = pointsPerHour * hours;

    return `Sua pontuação total foi de ${totalPoints}pts. Você receberá R$${(totalPoints * moneyPerPoint).toFixed(2)}`;
}

const hours = Number(prompt('Quantas horas de atividade física você praticou este mês? '));
console.log(calcHealthActivity(hours));