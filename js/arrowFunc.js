

// iprastine fjos deklaracija

function sum(a, b) {
    return a+b;
}

console.log(sum(8,9));
console.log(sum(88,98));

// kintamajam priskirta anonimine fja

const atimtis = function (a, b) {
    return a-b;
}
console.log(atimtis(14,5));
console.log(atimtis(14,55));

console.log('-----------');

const dalyba = function (a,b) {
    return a / b;
}
console.log(dalyba(81,3));

// arrow function (rodykline funkcija) 
// ismetam zodi funkcija ir cietoj to =>

const dalyba1 =  (a,b) => {
    return a / b;
}
console.log(dalyba1(81,3));

// arrow function  - jei logika sudaryta atik is 1 proceduros: 
// istrinam return ir {}

const dalyba2 =  (a,b) => a / b;

console.log(dalyba2(81,3));

// arrow function  - jei gaunamas tik 1 parametras (butinai gaunamas)
// nerasom ()

const kvadratu =  (a) => a*a;

console.log(kvadratu(3));