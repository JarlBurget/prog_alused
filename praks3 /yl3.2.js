import rl from './input.js';


// Küsime kasutajalt ringide arvu
rl.question('Sisesta ringide arv (mittenegatiivne täisarv): ', (ringideArv) => {
    let porganditeSumma = 0;

    // Muudame sisendi täisarvuks
    ringideArv = parseInt(ringideArv);

    // Kontrollime, kas kasutaja sisestas korrektse arvu
    if (isNaN(ringideArv) || ringideArv < 0) {
        console.log("Palun sisesta mittenegatiivne täisarv.");
    } else {
        // Läbime tsükli iga ringi jaoks
        for (let ring = 1; ring <= ringideArv; ring++) {
            // Kui ring on paarisarv, lisame vastava arvu porgandeid
            if (ring % 2 === 0) {
                porganditeSumma += ring;
            }
        }

        // Väljastame saadavate porgandite koguarvu
        console.log("Porgandite koguarv: " + porganditeSumma);
    }

    // Sulgeme readline liidese
    rl.close();
});