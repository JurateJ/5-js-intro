/*

while () {

}

proceduros atliekamos tol, kol tenkinama salyga /os

*/

// let i = 0;

// while (i < 5) {
//     console.log('labas');
//     i++;
// }

// let m = 0;

// for (; m < 5;) {
//     console.log('rytas');
//     m++;
// }

// console.log(m)

// console.log('--------');


// const pazymiai = [5, 10, 8, 7];
// let sum = 0;
// let pazymysIndex = 0;
// let pazymiuKiekis = pazymiai.length;

// while (pazymysIndex < pazymiuKiekis) {
//     sum += pazymiai[pazymysIndex];
//     pazymysIndex++;
// ............................

// }


/*
sumuosim atsitiktini skaiciu tok kol gausim 10
dar suskaiciuosim kiek iteraciju gausis

*/

console.log(Math.random());
let randCount = 0;

let randomSum = 0;
while (randomSum<10) {
    randCount++;
    randomSum +=Math.random();
    console.log(randCount, ' ', randomSum);
}

/*

tas pats su FOR

*/

let randomSumFor = 0;
let randomCountFor = 0;

for (; randomSumFor < 10;)) {
    randomSumFor += Math.random();
    randCountFor++;
}

console.log(randCountFor, ' ', randomSumFor);



