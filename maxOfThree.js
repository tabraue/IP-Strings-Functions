let numero1 = 10;
let numero2 = 20;
let numero3 = 50;

function maxOfThree (numero1, numero2, numero3) {
    if(numero1 < numero2) {
        return numero2;
    }
    else{return numero3;}
}

console.log(maxOfThree(numero1, numero2, numero3));