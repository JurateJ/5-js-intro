// dirbsim tik su skaiciais, bet tas pat galioja boolean, txt

// jei vietoj let butu const, butu error

//PRIMITYVIOS REIKSMES: skaicius, textas, boolean

let a= 5;
let b= 100;

console.log(a);
console.log(b);

b = a;

console.log(a);
console.log(b);


console.log('---------');

//KOMPLEKSINES REIKSMES: array, ateity object
// dalinasi ta pacia atmintimi, nes sarasai milziniski, 

const listA = [11, 22];
let listB = [800, 900];

listB = listA;

console.log(listA);
console.log(listB);

// error nera, nes sarasas negali but pakeistas (const), bet atskira reiksme gali but pakeista

listA[0] = 2;

console.log(listA);
console.log(listB);

// kai reiksmes primityvios, kiekv reiksme turi savo atminties lastele
// o kai sarasai - jie vienam pasikeitus, kitas kuris jau automatiskai



