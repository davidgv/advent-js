/*  NOTA:
      El algoritmo parece funcionar bien en todos los casos, simulando el patrón buscado, incluso con valores extremos como 0, 1, 2, etc. Pero según los test del concurso, hay un test que no pasa. Este test está oculto (???), así que desconozco la causa del error.
*/

function drawGift(size, symbol) {
  let gift = "";

  for (let i=1; i<(size*2); i++) {
    // primera línea
    if (i==1) {
      gift += " ".repeat(size-1) + "#".repeat(size) + "\n";
    }
    // linea central
    else if (i==size) {
      gift += "#".repeat(size) + symbol.repeat(size-2) + "#\n";
    }
    // última línea
    else if (i==(size*2-1)) {
      gift += "#".repeat(size) + "\n";
    }
    // primer segmento
    else if (i<size) {
      let subcadena = " ".repeat(size-i);
      subcadena += ("#"+symbol.repeat(size-2)).repeat(size/2);
      subcadena = subcadena.substring(0, size*2-2);
      gift += subcadena + "#\n";
    }
    // segundo segmento
    else if (i>size) {
      let subcadena = ("#"+symbol.repeat(size-2)).repeat(size/2);
      subcadena = subcadena.substring(0, size*3-2-i) + "#";
      gift += subcadena + "\n";
    }
  }

  return gift;
}