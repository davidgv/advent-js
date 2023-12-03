function findNaughtyStep(original, modified) {
  
  if (original.length > modified.length) { // se ha quitado un paso
    for (let i=0; i<original.length; i++) {
      if (original[i] != modified[i]) {
        return original[i];
      }
    }
  
  } else if (original.length < modified.length) { // se ha añadido un paso
    for (let i=0; i<modified.length; i++) {
      if (original[i] != modified[i]) {
        return modified[i];
      }
    }
  
  } else { // sin modificación
    return "";
  }

}