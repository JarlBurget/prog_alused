import rl from './input.js';

rl.question('Sisesta pöialpoiste arv ', poialpoisteArv => {
    let lumivalgekeseOunteArv = 14; // Algne õunte arv

    for(let i = 1; i <= poialpoisteArv; i++){
        let ounad = Math.ceil(Math.random() * 2); // Suvaliselt jagatud õunad kas 1 või 2 
        lumivalgekeseOunteArv -= ounad;
        console.log(`Pöialpoiss ${i} saab ${ounad} õuna.`);
    }

    console.log(`Lumivalgekese õunte arv on nüüd ${lumivalgekeseOunteArv}`);
    rl.close();
});