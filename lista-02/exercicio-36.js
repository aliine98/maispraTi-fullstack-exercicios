function getLottery() {
    const lottery = [];
    while (lottery.length < 13) {
        const random = Math.floor(Math.random() * 20) + 1;
        if (lottery.includes(random)) continue;
        lottery.push(random);
    }
    return lottery;
}

function getParticipants() {
    const participants = [];
    for (let i = 0; i < 100; i++) {
        const cardNumber = i + 1;
        const numbers = [];
        while (numbers.length < 13) {
            const random = Math.floor(Math.random() * 20) + 1;
            if (numbers.includes(random)) continue;
            numbers.push(random);
        }
        participants.push({ cardNumber, numbers });
    }
    return participants;
}

const lottery = getLottery();

const participants = getParticipants();

for (let i = 0; i < participants.length; i++) {
    const participant = participants[i];
    let correctNumbers = 0;
    for (let j = 0; j < participant.numbers.length; j++) {
        if (lottery.includes(participant.numbers[j])) {
            correctNumbers++;
        }
    }
    if (correctNumbers === 13) {
        console.log(`Parabéns participante ${participant.cardNumber}, você foi o ganhador.`);
    } else {
        console.log(`O participante ${participant.cardNumber} acertou ${correctNumbers} números.`);
    }
}
