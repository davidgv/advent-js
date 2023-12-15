function checkIsValidCopy(original, copy) {

  if (original.length == copy.length) {
    var tam = original.length;
  } else {
    return false; // no coinciden en tamaño
  }

  function gradoDegradacion(caracter) {
  // Devuelve el grado de degradación de un "caracter" (0-6)
    if (/[A-Z]/.test(caracter)) {
      var grado = 0;
    } else if (/[a-z]/.test(caracter)) {
      var grado = 1;
    } else if (caracter == "#") {
      var grado = 2;
    } else if (caracter == "+") {
      var grado = 3;
    } else if (caracter == ":") {
      var grado = 4;
    } else if (caracter == ".") {
      var grado = 5;
    } else if (caracter == " ") {
      var grado = 6;
    }
    return grado;
  }

  for (let i=0; i<tam; i++) {
    let degraOriginal = gradoDegradacion(original[i]);
    let degraCopia = gradoDegradacion(copy[i]);
    if (degraOriginal > degraCopia) {
    // El original no puede estar más degradado que la copia
      return false;
    }
    if ( (degraOriginal < 2) && (degraCopia < 2) && (original[i].toLowerCase() != copy[i].toLowerCase()) ) {
    // Son dos letras distintas
      return false;
    }
  }
  
  return true; // La copia es una degradación del original
}