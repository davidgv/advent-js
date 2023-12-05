function decode(message) {
  let reg_exp;
  do {
    reg_exp = /\(([^()]+)\)/g;
    let subcadena_array = message.match(reg_exp);
    let subcadena = subcadena_array[0]; // subcadena de paréntesis más interior y corta
    let index_subcadena = message.indexOf(subcadena); // posición de la subcadena
    let subcadena_invertida = "";
    for (let i=1; i<(subcadena.length-1); i++) { // invertimos la subcadena
      subcadena_invertida = subcadena[i] + subcadena_invertida;
    }
    // juntamos las piezas...
    message = message.substring(0, index_subcadena) + subcadena_invertida + message.substring((index_subcadena + subcadena.length), message.length);
  } while (message.search(reg_exp) != -1); // hasta que no haya más subcadenas entre paréntesis
  return(message);
}