function multiply(pirmasisDaugiklis, antrasisDaugiklis) {
    console.log('gauta pirma reiskme', pirmasisDaugiklis);
    console.log('gauta antra reiskme',antrasisDaugiklis);

    const sandauga = pirmasisDaugiklis * antrasisDaugiklis;
    console.log('sandauga',sandauga);

    return sandauga;

}

const skaicius1 = 4;
const skaicius2 = 8;
const skaicius3 = -5;

rez = multiply(skaicius1, skaicius2);

console.log('Rezultatas', rez);   //32

// console.log(multiply(skaicius3, skaicius2)); //32
// console.log(multiply(99, -11)); //-1089