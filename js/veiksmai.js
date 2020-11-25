/* Matematines operacijos */

const skaicius1 = 5;
const skaicius2 = 8;
const suma = skaicius1 + skaicius2;

console.log(skaicius1);
console.log(skaicius2);
console.log(suma);

const skaicius3 = 5;
const skaicius4 = 8;
const skirtumas = skaicius3 - skaicius4;

console.log(skaicius3, skaicius4, skirtumas);

console.log(skaicius3, '-', skaicius4, '=', skirtumas);

const sandauga = skaicius1 * skaicius2;
console.log(skaicius1, '*', skaicius2, '=', sandauga);

const dalmuo = skaicius1 / skaicius2;
console.log(skaicius1, '/', skaicius2, '=', dalmuo);

console.log(2+2);
console.log(skaicius1 * skaicius2);

console.log('-------');

const zodis1 = 'Labas';
const zodis2 = 'rytas';
const zodis3 = 'Lietuvele';

//Labas rytas Lietuvele
//Labas!!

const sakinys1 = zodis1 + ' ' + zodis2 + ', ' + zodis3;
const sakinys2 = zodis1 + '!';

console.log(sakinys1);
console.log(sakinys2);

/* tekstu inicijacimo/rasymo subtilybes */

const txt1 = "Lorem";  //  pageidaujama
const txt2 = 'ipsum';  //leidziama

// Sakinyje yra vienguba ' kabute, ideti i  " "
// Sakinyje yra vienguba " kabute, ideti i  ' '

const txt3 = "sakinyje vienguba ' kabute ";
const txt4 = 'sakinyje vienguba " kabute';
console.log(txt3);
console.log(txt4);

// Sakinyje yra vienguba ' kabute IR " kabutes
// tada pries kiekv tekste esancia kabute \'    arba    \"

const txt5 = "sakinyje vienguba \' kabute ir dviguba \" kabutes ";
console.log(txt5);


