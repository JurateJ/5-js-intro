/* 
isvesti zodi is kito galo

einu is galo i prieki su for
pasiimu raide 
raides lipinu 
*/

const text = 'Labas!';

let backward = '';

console.log(text);
console.log(text.length);

//imame raides i galo ciklo metu
for (let i=text.length-1; i>=0; i--) {
    
    const letter = text[i];
    backward += letter;

    console.log(i, letter, backward);
        
}


