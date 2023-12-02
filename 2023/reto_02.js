function manufacture(gifts, materials) {
  let regalos_posibles = [];
  let tenemos_materiales;

  for (let i=0; i<gifts.length; i++) { // recorremos gifts
    tenemos_materiales = true;

    for (let j=0; j<gifts[i].length; j++) { // recorremos gifts[i]
      if (!materials.includes(gifts[i][j])) {
        // no tenemos materiales para gifts[i]
        tenemos_materiales = false;
      }
    }

    if (tenemos_materiales) {
      regalos_posibles.push(gifts[i]);
    }
  }

  return regalos_posibles;
}