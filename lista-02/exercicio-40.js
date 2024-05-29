const lottery = [1, 8, 15, 4, 20];
const participants = [];

for (let i = 0; i < 50; i++) {
    const participantNumbers = [];
    while (participantNumbers.length < 5) {
        const random = Math.floor(Math.random() * 20) + 1;
        if (participantNumbers.includes(random)) continue;
        participantNumbers.push(random);
    }
    participants.push(participantNumbers);
}

for (let i = 0; i < participants.length; i++) {
    let winner = true;
    for (let j = 0; j < participants[i].length; j++) {
        if (!lottery.includes(participants[i][j])) {
            winner = false;
            break;
        }
    }
    if (winner) {
        console.log(`Ganhador na aposta ${i + 1}, números: ${participants[i]}`);
    }
}
