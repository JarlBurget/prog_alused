import rl from "./input.js";

rl.question('Sisesta Leedu perenimi: ', perenimi=>{
    if(perenimi.slice(-2) == 'ne') {
        console.log('Abielus')
    } else if(perenimi.slice(-2) == 'te') {
        console.log('Vallaline')
    } else if(perenimi.slice(-1) == 'e') {
            console.log('Määramata')
    } else {
        console.log('Pole leedulanna nimi')
    } 
rl.close()
})