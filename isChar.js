function isCharacterAVowel(char) {

    if (char === 'a' || 'e' || 'i' || 'o' || 'u') {
        return "Es una vocal";
    }
    else {
        return "Es una consonante";
    }
}

console.log(isCharacterAVowel("e"));
