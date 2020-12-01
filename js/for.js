
/*
for () {}
i iteratorius, seka kiek kartus ciklas prasisuko
jei i nesikeis, pakibs kodas ir gali uzlauzt kompa
*/

const pajamos = [100, 200, 300, 100, 100, 0, 100];
let menuo = 0
let pinigine = 0;
console.log(pinigine);

pinigine += pajamos[menuo++]; 
console.log(pinigine);

pinigine += pajamos[menuo++];  
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++]; 
console.log(pinigine);

pinigine += pajamos[menuo++];    
console.log(pinigine);

pinigine += pajamos[menuo++];   
console.log(pinigine);

pinigine += pajamos[menuo++];   
console.log(pinigine);


console.log('----i isvedimas--------');

for (let  i=0; i<=5; i++) {
    console.log('dabar i yra ', i);
    
}

/*
for (let  i=0; i<=5; i--) {         // irgi bus nesamone, mazes i isjungt per task manager, daznai ne is karto leis isjungt, tada 
  i = 0; 0<=5 -> log
  i = -1; 0<=5 -> log
  i = -2; 0<=5 -> log  .... begalinis, narsykle nerodys klaidos
}
*/

// console.log('--Susumuoja pinigine----------');

const alga = [100, 200, 300, 100, 100, 0, 100];
const masKiekis = alga.length;
console.log(masKiekis);

let suma = 0;

for (let i=0; i< masKiekis; i++) {
    let algute = alga[i];
    suma += algute;
    console.log(i + ')', algute, '->', suma);
}

console.log(`piniginej yra ${suma}. `);


console.log('----average skaiciavimas--------');

const marks = [10, 2, 8, 4, 6, 1];     // mark ar marks yra skirtumas, nes daugiskaita reikstu kad tai sarasas
let sum = 0;
const count = marks.length;

// vietoj count kaip ir galetume rasyt tiesiai marks.length, bet geriau is anksto
// priskirti ir kiekv karta cikle neit tikrint, ar nepakito saraso ilgis
//
// bet jei numatau kad ciklo metu saraso dydis gali keistis, geriau rasyti marks.length

for (let i=0; i<count; i++){ 
    const mark =  marks[i];
    sum += mark;
    console.log(i + ')', mark, '->', sum);
}

const average = sum / count;

console.log(`pazymiu vidurkis yra ${average}. `); 


const txt = 'abcdef';
const firstLetter = txt[0]

console.log(firstLetter);
console.log(txt[1]);
console.log(txt[2]);
console.log(txt[3]);
console.log(txt[4]);

