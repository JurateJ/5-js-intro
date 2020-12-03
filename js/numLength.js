
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );


// sukurem fja kuri patikrins ar yra taskas skaiciuje(t.y ar skaicius ne integer)

function hasDot(text) {
    for (let i = 0; i<text.length; i++) {
        const letter = text[i];
        if (letter === '.') {
            return true;
        }
    }
    return false;
}

function numLength (num) {

    //input validation - ar skaicius

    if (typeof num !== 'number') {
        return 'ERROR: duotas ne skaicius';
    }
    if (!isFinite(num)) {
        return 'ERROR: duotas ne skaicius';
    }

    //logic
    // ábcdefgh'-> 8  butu   .toString

    let lenth = 0;
    const textNumber = '' + num;
    length = textNumber.length;

    if (hasDot(textnumber)) {
        length--;
    }

    // randame minuso zenkla / neigiama skaiciu
    if (num < 0) {
        length--;
    }

    // return
    return length;
}

console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(37060123456), '->', 11);

console.log(numLength('labas'));
console.log(numLength(NaN));

console.log(numLength('---------'));

console.log(numLength(3.1415));
console.log(numLength(numLength));
console.log(numLength(-Infinity));
console.log(numLength(Infinity));

console.log(numLength(10000000000000000000000000000000000000000), '->',58);
