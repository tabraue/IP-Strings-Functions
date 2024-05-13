 function  maxOfTwoNumber (a,b) {
    if (a>b){
        return a;
    }else{
        return b;
    }
    }
    console.log(maxOfTwoNumber(2,3));
    console.log(maxOfTwoNumber(7,3));



    function maxOfThree(a,b,c){
        if (a>b && a>c){
            return a;
        } else if (b>a && b>c) {
            return b;
        } else{
            return c;
        }
    }
    console.log(maxOfThree(2,4,8));
    console.log(maxOfThree(8,4,2))
 

const isChararcter = (char) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return volwels.includes(Char.toLowerCase());

}
console.log(isChararcter("a"));
console.log(isChararcter("b"));
