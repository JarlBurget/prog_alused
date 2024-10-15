import rl from './input.js';

rl.question('Sisesta mitu korda äratada: ', mituKorda =>{
    for(let kord = 1; kord <= mituKorda; kord++){
        console.log('Tõuse ja sära!')
    }  
    rl.close()
})