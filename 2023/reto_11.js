function getIndexsForPalindrome(word) {
  
  function esPalin(word2) {
  // comprueba si una palabra es un palíndromo
    let word2a = word2.substring(0, (word2.length)/2);
    let word2b = word2.substring(Math.ceil(word2.length/2), word2.length).split("").reverse().join("");
    if (word2a === word2b) {
      return true;
    } else {
      return false;
    }
  }

  if (esPalin(word)) {
    return [];
  } else {
    for (let i=0; i<(word.length-1); i++) {
      for (let j=1; j<(word.length); j++) {
        let arrayWord = word.split("");
        let tmp = arrayWord[i];
        arrayWord[i] = arrayWord[j];
        arrayWord[j] = tmp;
        let newWord = arrayWord.join("");
        if (esPalin(newWord)) {
          return [i,j];
        }
      }
    }
    return null;
  }

}