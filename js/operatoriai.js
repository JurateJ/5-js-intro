/*

Matematiniai operatoriai

2+2
2*8
4-7
16/2

+=
-=

++    gali buti ir is kaires, ir is desines kintamojo, yra skirtumas, ar pirmiau sumazins, ar veliau, po veiksmo
--      --//--

*/

let pinigine = 0;
console.log(pinigine);

pinigine = pinigine + 100;  //100
pinigine = pinigine - 20;   //80
console.log(pinigine);

pinigine = pinigine + 100;  //180
pinigine = pinigine - 20;   //160
console.log(pinigine);

pinigine = pinigine + 100;  //260
pinigine = pinigine - 20;   //240
console.log(pinigine);

console.log('--------');

/*   +=   -=    */

let pocket = 0;
console.log(pocket);

pocket += 100;  //100
pocket -= 20;   //80
console.log(pocket);

pocket += 100;   //180
pocket -= 20;   //160
console.log(pocket);

pocket += 100;  //260
pocket -= 20;   //240
console.log(pocket);

console.log('--------');

/*
++ padidinti vienu vienetu
-- sumazinti vienu vienetu
*/

let i = 0;
console.log(i);

i = i + 1;
console.log(i);
i += 1;
console.log(i);
i++;
console.log(i);

i = i - 1;
console.log(i);
i -= 1;
console.log(i);
i--;
console.log(i);

console.log('--------');

let temperatura = -8;
console.log(`lauke dabar yra ${temperatura++} laipsniu`);  
//pirma atspausdina, po to padidina ir todel padidinimas matysis tik kitoj eilytej
console.log(`lauke dabar yra ${temperatura} laipsniu`);
console.log(`lauke dabar yra ${++temperatura} laipsniu`);

