
const neapmokestinamasMinimumas = 500;
const PVM = 20;

const pajamos1 = [100, 500, 800, 5000, 15000];
const mokesciai1 = mokesciai(pajamos1);  

   
    let moketinaSuma = 0;

    for (let i = 0; i< pajamos.length; i++) {
        const uzdarbis = pajamos[i];

        if (uzdarbis > neapmokestinamasMinimumas) {
            moketinaSuma += uzdarbis - neapmokestinamasMinimumas;
        }

    }

    console.log(pajamos)

    return moketinaSuma * PVM / 100;
}

// const mokesciai1 = (800-500+5000-500+15000-500)/20*100;


//mokes nuo 3 paskutiniu skaiciuionst mokesciai1 = mokesciai(pajamos1);
console.log('pirmas susimoka:', mokesciai1);

const pajamos2 = [100, 500, 200];               // is akies 0
const mokesciai2 = mokesciai(pajamos2);
console.log('antras susimoka:', mokesciai2);

const pajamos3 = [10000, 10000, 10000, 10000, 10000, 10000];
const mokesciai3 = mokesciai(pajamos3);
console.log('trecias susimoka:', mokesciai3);
