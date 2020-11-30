/* 
Ternary

naudojamas del savo trumpumo

tiesiog IF kuris gali buti tik true ir false

PVZ

If klausimas ? jeigu teigiamas ats : jeigu neigiamas ats

galima niekad nenaudoti, vietoj jo if

*/


// console.log(4 === 2 ? 'Daugiau' : 'Ne daugiau');

// const amziausRiba = 40;

// const amzius = 99;
// const verdiktas = amzius >= amziausRiba ? 'I prezidentus!' : 'Dar palauk...';
// console.log(`Jei tau ${amzius} - ${verdiktas}`);

// console.log('--------');

// const makesSense = false;
// const ats = makesSense ? 'taip' : 'ne';
// console.log(ats);

console.log('---sezonai su if-----');

const sezonas = 'ruduo';
const temp = 50;

if (sezonas === 'vasara') {
    if (temp > 10) {
        console.log('maike');
    } else {
        console.log('golfas');
    }
} else {
    if (temp > 10) {
        console.log('megztinis');
    } else {
        console.log('striuke');
    }
}

console.log('---sezonai su ternary-----');

const kaVilktis = sezonas === 'vasara' ?
     temp > 10 ?    
        'maike' : 
        'golfas' 
    : temp > 10 ? 
        'megztinis' : 
        'striuke';
            
console.log(kaVilktis); 


