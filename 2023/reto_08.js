function organizeGifts(gifts) {
  let almacen_tmp = []; // almacén temporal, sin organizar
  let almacen_org = ""; // almacén final, ya organizado

  gifts.match(/\d+\w/g).forEach(par => {
    var unidades = par.match(/\d+/)[0];
    var tipo_regalo = par.match(/[a-z]/)[0];
    almacen_tmp.push([tipo_regalo, parseInt(unidades)]);
  });

  almacen_tmp.forEach( grupo => {
    while (grupo[1] >= 50) {
      almacen_org += "["+grupo[0]+"]";
      grupo[1] -= 50;
    }
    while (grupo[1] >= 10) {
      almacen_org += "{"+grupo[0]+"}";
      grupo[1] -= 10;
    }
    if (grupo[1] >=1 ) {
      almacen_org += "(" + grupo[0].repeat(grupo[1]) + ")";
    }
  });

  return almacen_org;
}