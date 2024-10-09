import rl from './input.js';

rl.question('Sisesta kirja suurus megabaitides: ', suurus => {
    rl.question('Sisesta kirja teema pealkiri (jäta tühjaks, kui puudub): ', pealkiri => {
        rl.question('Kas kirjaga on kaasas fail? (jah/ei): ', fail => {
            // Teisendame kirja suuruse arvuks ja kontrollime tingimusi ühe tingimuslausega
            const suurusMB = parseFloat(suurus);
            const onSpam = !pealkiri.trim() || (fail.toLowerCase() === 'jah' && suurusMB > 1);

            if (onSpam) {
                console.log('Kiri on spämm.');
            } else {
                console.log('Kiri ei ole spämm.');
            }

            rl.close();
        });
    });
});