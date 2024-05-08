function maxOfNumbers(a,b){
    if(a > b){
        return "El mayor es " + a;
    } else if(b > a){
        return  "El mayor es " + b;
    } else {
        return "Los números son iguales";
    }

}
console.log(maxOfNumbers(32,67));
