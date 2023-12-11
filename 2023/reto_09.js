function adjustLights(lights) {
  let cambiosRojo1st = 0; // cambios necesarios usando el rojo primero
  let cambiosVerde1st = 0; // cambios necesarios usando el verde primero
  
  function cambiaLuz() {
    if (luzActual == "🔴") {
      return "🟢";
    } else {
      return "🔴";
    }
  }

  let luzActual = "🔴";
  lights.forEach(luz => {
    if (luz != luzActual) {
      cambiosRojo1st++;
    }
    luzActual = cambiaLuz();
  });

  luzActual = "🟢";
  lights.forEach(luz => {
    if (luz != luzActual) {
      cambiosVerde1st++;
    }
    luzActual = cambiaLuz();
  });

  if (cambiosRojo1st > cambiosVerde1st) {
    return cambiosVerde1st;
  } else {
    return cambiosRojo1st;
  }
}