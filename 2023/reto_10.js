function createChristmasTree(ornaments, height) {
  let arbol = "";
  let decoIndex = 0; // ornaments[decoIndex] = elemento a dibujar

  // ramas
  for (let altura=1; altura<=height; altura++) {
    arbol += " ".repeat(height-altura);
    for (let i=1; i<=altura; i++) {
      arbol += ornaments[decoIndex];
      if (decoIndex == ornaments.length-1) {
        decoIndex = 0;
      } else {
        decoIndex++;
      }
      if (i != altura) {
        arbol += " "; // espacio entre decoraciones
      } else {
        arbol += "\n"; // fin de altura
      }
    }
  }

  // tronco
  arbol += " ".repeat(height-1)+"|\n";

  return arbol;
}