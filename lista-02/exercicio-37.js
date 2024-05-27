function getAnswerKey() {
    const possibleAnswers = ['A', 'B', 'C', 'D', 'E'];
    const answers = [];
    for (let i = 0; i < 20; i++) {
        const random = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
        answers.push(random);
    }
    return answers;
}

function getStudents() {
    const students = [];
    const possibleAnswers = ['A', 'B', 'C', 'D', 'E'];
    for (let i = 0; i < 50; i++) {
        const id = i + 1;
        const answers = getAnswerKey();
        console.log(answers);
        students.push({ id, answers });
    }
    return students;
}

const students = getStudents();
const answerKey = getAnswerKey();
console.log('answerKey:', answerKey);

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    let correctNumbers = 0;
    for (let j = 0; j < student.answers.length; j++) {
        if (answerKey[i] === student.answers[j]) {
            correctNumbers++;
        }
    }
    if (correctNumbers >= 12) {
        console.log(`Parabéns estudante ${student.id}, você foi aprovado.`);
    } else {
        console.log(`O estudante ${student.id} foi reprovado.`);
    }
}
