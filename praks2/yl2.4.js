import rl from './input.js';

rl.question('Kas soovite istekoha ise valida? Sisestage "ise" või "loos": ', valik => {
    if (valik == 'ise') {
        // Kasutaja valib ise
        rl.question('Kas soovite istuda akna ääres? Sisestage "aken" või "muu": ', koht => {
            if (koht == 'aken') {
                console.log('Valisite ise.');
                console.log('Aknakoht.');
            } else if (koht == 'muu') {
                console.log('Valisite ise.');
                console.log('Vahekäigukoht.');
            } else {
                console.log('Vale sisend!');
            }
            rl.close();
        });
    } else if (valik == 'loos') {
        // Kasutaja valib loosiga
        let loos = Math.random(); // Genereerime juhusliku numbri vahemikus 0-1
        console.log('Istekoht loositi.');
        if (loos < 1 / 3) {
            console.log('Aknakoht.');
        } else {
            console.log('Vahekäigukoht.');
        }
        rl.close();
    } else {
        console.log('Vale sisend! Palun proovige uuesti.');
        rl.close();
    }
});