function maxOfTwoNumber(number, number1) {
    if (number < number1) {
        return number1;
    }
    else {
        return number;
    }

}
maxOfTwoNumber(2, 4)
console.log(maxOfTwoNumber(2, 4))


function maxOfThree (number, number2, number3){
    if (number > number2 && number > number3){
        return number;

    }
    else if(number2 > number && number2 > number3){
        return number2;
    } else{return number3}
}
maxOfThree(2, 4, 6)
console.log(maxOfThree(2, 10, 6))

