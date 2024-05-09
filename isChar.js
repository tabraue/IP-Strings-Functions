function isCharacterAVowel(char) {
    var lowerChar = char.toLowerCase();
    
    return lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u';
  }
  
  console.log(isCharacterAVowel('a'));
  console.log(isCharacterAVowel('b')); 