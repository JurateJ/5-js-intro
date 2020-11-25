// Kintamųjų inicijavimas

// 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis.
// Po kiekvieno jų inicijavimo, išvesti į console

const kint1 = 5;
console.log(kint1);
const kint2 = 6;
console.log(kint2);
const kint3 = 7;
console.log(kint3);
// console.log('Pirmas kintamasis yra ', kint1, ', antras yra ', kint2, 'trečias yra ', kint3 );

// sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const tt1 = 'pirmas';
console.log(tt1);
const tt2 = 'antr';
console.log(tt2);
const tt3 = 'trec';
console.log(tt3);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// const pazymiai = [10, 2, 7, 6];

const sar1 = [5, 8, 10, 11, 13];
console.log(sar1);
const sar2 = [0, 2, 14, 18, 20];
console.log(sar2);
const sar3 = [0, 5, 15, 20, 25];
console.log(sar3);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// const zodynas = ['labas', 'rytas', 'Lietuva'];

const sartext1 = ['pirmad', 'antrad', 'treciad', 'ketvirtad', 'penktad'];
console.log(sartext1);
const sartext2 = ['sausis', 'vasaris', 'kovas', 'balandis', 'gegužė'];
console.log(sartext2);
const sartext3 = ['mama', 'tete', 'brolis', 'sesuo', 'mociute'];
console.log(sartext3);


// Veiksmai su kintamaisiais

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console

console.log(kint1+kint2+kint3);

// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console

console.log(tt1, ' ', tt2, ' ', tt3);

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// a) 1-2+3-4+5
// b) Rezultatą išvesti į console

const pilnasSarasas1 = sar1[0] - sar1[1] + sar1[2] - sar1[3] + sar1[4];
console.log(pilnasSarasas1);
const pilnasSarasas2 = sar2[0]-sar1[1]+sar1[2]-sar1[3]+sar1[4];
console.log(pilnasSarasas2);

// Sujungti sąrašų vertes, kurių tipas yra tekstai, 
// nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

st1 = pilnasSartext1[0] + pilnasSartext1[1] + pilnasSartext1[2] - pilnasSartext1[3] + pilnasSartext1[4];
// const sartext1 = ['pirmad', 'antrad', 'treciad', 'ketvirtad', 'penktad'];
console.log(pilnasSartext1);







