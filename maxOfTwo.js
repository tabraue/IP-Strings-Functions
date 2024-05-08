let numero1 = 10;
let numero2 = 20;

function maxOfTwoNumbers(numero1, numero2) {
    if (numero1 < numero2) {
        return numero2;
    } else {
        return numero1;
    }
}

console.log(maxOfTwoNumbers(numero1, numero2));