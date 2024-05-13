//MAXOFTWONUMBERS

function maxOfTwoNumbers(a,b){
    if (a>b){
    return a;
    } else{
    return b;
    }
    }
    console.log(maxOfTwoNumbers(15,12));
    
    //MAXOFTHRE3E

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
    console.log(maxOThree(8.5,2))

    //ISCHARACTERAVWEL

    const isCharacterAVowel = (char) => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.includes(char.toLowerCase());
    }
    // Test de función
    console.log(isCharacterAVowel('a')); // true
    console.log(isCharacterAVowel('b')); // false