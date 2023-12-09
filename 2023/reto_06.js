function maxDistance(movements) {
  let distancia_max = 0;

  // calculo de < y >
  let movs_array = movements.split("");
  movs_array.forEach(caracter => {
    if (caracter == "<") {
      distancia_max--;
    }
    if (caracter == ">") {
      distancia_max++;
    }
  });

  // cuántos asteriscos ??
  if (movements.search(/\*/g) == -1) {
    var num_asteriscos = 0;
  } else {
    var num_asteriscos = movements.match(/\*/g).length;
  }

  // añadimos los asteríscos a favor del valor mayor
  if (distancia_max < 0) {
    distancia_max = distancia_max - num_asteriscos;
  }
  if (distancia_max >= 0) {
    distancia_max = distancia_max + num_asteriscos;
  }

  return Math.abs(distancia_max);
}