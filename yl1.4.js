const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Sisesta oma nimi: ', nimi => {
    rl.question('Sisesta lubatud kiirus (km/h): ', (lubatud) => {
        rl.question('Sisesta tegelik kiirus (km/h): ', (tegelik) => {
            let trahv = (tegelik - lubatud) * 3
            trahv = Math.min(trahv, 190)
            console.log(`${nimi}, kiiruse ületamise eest on teile trahv ${trahv} eurot.`)
            console.log(trahv)
        rl.close()
   })
})
})
