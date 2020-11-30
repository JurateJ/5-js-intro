const pazymiai = [10, 2, 8, 6];


/* pazymiai
- vidurkis
- isrikiuoti (min, max)
- surasti ar turi 2
- surasti min, max


console.log(marks);  isspausdins masyva su jo elementais
*/

// vidurkis

const sarasoSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] ;
const skaiciuKiekis = pazymiai.length;
console.log(pazymiai);
console.log(pazymiai.length);

const vidurkis = sarasoSuma / skaiciuKiekis;
console.log('vidurkis:', vidurkis);

/*
zodynas
sujungti reiksmes atgaline tvarka ir iterpti " ' "
*/

const zodynas = ['labas', 'rytas', 'Lietuva']; 
console.log(zodynas);

const sakinys = zodynas[2] + ',' + zodynas[1] + ',' + zodynas[0];
console.log(sakinys);

