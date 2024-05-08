

function maxOfThree(a,b,c,) {
    if(a > b && a > c){
    return a;
    } else if (b > a && b > c){
    return b;
    } else if (c > a && c > b){
    return c;
    } else {
    return "Todos los números son iguales";
    }   
}
console.log(maxOfThree(7,9,2));