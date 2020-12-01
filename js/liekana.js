/*
Suskaičiuoti, kiek nurodytame intervale (imtinai) yra skaičių, 
kurie dalijasi be liekanos 

%

sis budas geras ir matematiskai teisingas, bet jei intervalas didelis
skaiciavimas uztrunka
 jei iki didinsime paprastai 11000000000000 uztruks, 
 o jei su _ atskiriant tai pagreitins 1_100_000_000

*/

const nuo = 0;
const iki = 11;
const daliklis = 3;

let kiekis = 0;

//logic

for (let i=nuo; i<=iki; i++) {

    console.log(i, i/daliklis);
    if (i % daliklis === 0){
        kiekis++;
    }
}

console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių 
be liekanos iš ${daliklis} yra ${kiekis} vienetai`);

/* ar yra geresniu budu? */
