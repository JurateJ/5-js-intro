
// const darzove = 'morka';

// switch (darzove) {
//     case 'morka':
//         console.log('gerai regejimui');
//         break;
//     case 'bulve':
//         console.log('darzoviu duona');
//         break;
//     case 'bulve':
//         console.log('Storas raudonas');
//         break; 
//     case 'bulve':
//         console.log('darzoviu duona');
//         break;
        
//     default:
//         console.log('Ne darzove');
// }


/* KADA swithé nereikia kas kiekv case naudoti break?
Kai uzdavinys yra apie darbo procesa ir galimybe ji perimti kazkuriame proceso zingsnyje
*/

/*
PORCESAS: rytinio gerimo gamyba
-pasiimti puodeli
-isideti pagrindini ingredienta
-isideti saldiklio
-uzpilti vandens
-ismaisyti
-gerti
*/

const etapas = 'puodelis';

switch  (etapas) {
    case 'puodelis':
        console.log('1) pasiimti puodeli');
    case 'ingredientas':
        console.log('2) isideti pagrindini ingredienta');
    case 'saldiklis':
        console.log('3) isideti saldiklio');    
    case 'vanduo':
        console.log('4) uzpilti vandens');
    case 'ismaisyti':
        console.log('5) ismaisyti');  
    case 'gerti':
        console.log('6) gerti');
        break;                    

    }