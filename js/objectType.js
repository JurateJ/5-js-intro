/*

kintamuju tipai

console.log(skaiciu, typeof skaiciu);    jei norim suzinoti kintamojo tupa



*/

const skaiciu = 7;                  //number
const teksta = 'abcde';             //string 
const tiesa = true;                 //boolean
const melas = false;                //boolean
const pazymiai = [5, 10];           // object (array)
const zodziai = ['labas', 'rytas'];  // object (array)

//visi sie kintamieji is esme yra objektai

console.log(skaiciu, typeof skaiciu);
console.log(teksta, typeof teksta);
console.log(tiesa, typeof tiesa);
console.log(false, typeof false);
console.log(pazymiai, typeof pazymiai);
console.log(zodziai, typeof zodziai);

// zmogus = [vardas, pavarde, kiek metu...]
// const znogus = ['vardenis', 'pavardenis', 99, 1921, false, true, 2, 2, 1]

const arrayZmogus = ['vardenis', 'pavardenis', 99, 1921, false, true, 2, 2, 1]

const zmogus = {
    vardas: 'vardenis',
    pavarde: 'pavardenis',
    amzius: 99,
    gMetai: 1921,
    turiSuni: false,
    tevai: [
        {
            vardas: 'Onute',
            lytis: true
        },
        {
            vardas: 'Petras',
            lytis: false
        }
    ]
}
console.log(zmogus);
console.log(zmogus['vardas']);
console.log(zmogus['gMetai']);

// tas pats, tik paprasciau:

console.log(zmogus);
console.log(zmogus.vardas);
console.log(zmogus.turiSuni);
console.log(zmogus.gMetai);

console.log('------------');

const auto = {
    marke: 'Tesla',
    pavarde: 'pavardenis',
    modelis: '3',
    spalva: 'raudona',
    baterija: 100,
    sedynes: 4,
}

// console.log(`Mano ${auto.marke} yra ${auto.spalva} ir turi ${auto.sedynes} sedynes`);

console.log('------------');



// zmogui priskirsim auto

zmogus.automobilis = auto;

console.log(zmogus);
console.log(zmogus.automobilis.marke);
console.log(zmogus.tevai[0].vardas);
console.log(zmogus.tevai[1].vardas);






