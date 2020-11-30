
/*  

if - salygos funkcija

galimi lyginimo operatoriai: >, <, ==, !=, >=, <=, ===, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini:  ==, !=
- draudziami: =, =>, =<, !>, !< 

kitokiu

funkciju uzrasymas:
if () {}
if () {} else {}
if () {} else if () {} else if () {} ... else if () {}
if () {} else if () {} else if () {} ... else if () {} else {}    cia yra nestinimas

kuri varianta naudoti, priklauso nuo uzdavinio salygos

() 
{} 

*/

const a = 0;
const b = 2;

// ar a yra daugiau uz b?

if (a > b) {
    console.log('taip, 4 yra daugiau uz 2');
}

if (a < b) {
    console.log('A < B');
} else {
    console.log('A nera maziau uz B');
}

const duSkaiciai = [800, 612];

// const pirmasSkaicius = duSkaiciai[0];
// const antrasSkaicius = duSkaiciai[1];    
// geresnis kodo skaitomumas
// const duSkaiciaiRez = `${pirmasSkaicius} yra daugiau uz ${antrasSkaicius}`;



if (duSkaiciai[0] > duSkaiciai[1]) {
    // 6 yra daugiau uz 612
    const duSkaiciaiRez = `${duSkaiciai[0]} yra daugiau uz ${duSkaiciai[1]}`;
    console.log(duSkaiciaiRez);
} else {
    console.log('didesnis antrasis skaicius', duSkaiciai[1]);
}

console.log('------');

const diena = 'trec';
if (diena === 'pir'){
    console.log('pirmadienis');
} else {
    if (diena === 'ant'){
        console.log('antradienis');
    } else {
        console.log('Ne pirmadienis ir ne antradienis...');
    }
    
}

// virsuj buvo eglute is kodo padares
// cia geresnis ir skaitomesnis nestinimo atvejis

const day = 'tue';

if (day === 'mon') {
    console.log('monday');
} else if (day === 'tue') {
    console.log('tuesday');
} else if (day === 'wed') {
    console.log('wednesday');
} else if (day === 'thu') {
    console.log('thursday');
} else if (day === 'fri') {
    console.log('friday'); 
} else {
    console.log('nera tokio');
}

// var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var tlenght = txt.length;
// var res = txt.slice(1, tlenght-1);
// console.log(res);

console.clear();


if (7 !== 7) {
    console.log('POzityvas');   
} else {
    console.log('NEgatyvas'); 
}




