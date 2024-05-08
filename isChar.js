let caracter = "AEIOU";

function isCharacterAVowel(caracter) {
  caracter = caracter.toLowerCase();

  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isCharacterAVowel(caracter));