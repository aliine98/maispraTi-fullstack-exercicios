const prompt = require('prompt-sync')();

for (let i = 0; i < 5; i++) {
    const time = prompt('Insira um horário: (hh:mm:ss) ');
    const [h, m, s] = time.split(':').map(Number);

    if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59 || isNaN(h) || isNaN(m) || isNaN(s)) {
        console.log('Insira um horário válido');
    } else {
        console.log(`Horário ${i + 1} - ${h}:${m}:${s}`);
    }
    // const date = new Date();
    // date.setHours(h);
    // date.setMinutes(m);
    // date.setSeconds(s);
    // console.log(`Horário ${i + 1}: ${date.toLocaleTimeString()}`);
}