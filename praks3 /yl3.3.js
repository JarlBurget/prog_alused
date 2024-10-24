import rl from './input.js';

// Küsime kasutajalt täringute arvu
rl.question('Sisesta vajalike täringute arv: ', (taringuteArv) => {
        for (let kord = 1; kord <= taringuteArv; kord++) {
        console.log(Math.ceil(Math.random() * 6));
            
     } 
    rl.close()
});