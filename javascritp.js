function maxOfTwoNumbers(a,b){
    if (a>b){
    return a;
    } else{
    return b;
    }
    }
    console.log(maxOfTwoNumbers(15,12));
    
    
    function maxOThree( a,b,c) {
        if (a>b && a >c){
            return a;
            
        }else if(b>a && b>c){
            return b;
        }else {
            return c;
        }
    }
    console.log(maxOThree(5,2,8))