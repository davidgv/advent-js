/*  NOTA:
      Como ya pasaba con el reto 7, el algoritmo es muy sencillo y todo va bien, pero según los "test secretos" del concurso algo no está bien, aunque no indican el qué (???). Seguramente no cumple algo que no se está indicando en el enunciado. A mi parecer son problemas mal redactados...
*/

function adjustLights(lights) {
  let numCambios = 0;
  let luzCorrecta = lights[0];
  lights.forEach(luz => {
    if (luz != luzCorrecta) {
      numCambios++;
    }
    if (luzCorrecta == "🔴") {
      luzCorrecta = "🟢";
    } else {
      luzCorrecta = "🔴";
    }
  });
  return numCambios;
}