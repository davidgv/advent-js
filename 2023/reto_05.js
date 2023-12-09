function cyberReindeer(road, time) {
  let movimientos = [road]; // el primer movimiento viene dado
  let ciclo = 2; // intervalo de 1 a "time"
  let antes_trineo = "."; // valor que había antes de llegar el trineo

  while (ciclo <= time) {

    if (ciclo > 5) { // se abren las barreras
      road =  road.replaceAll("|", "*");
    }

    let pos_trineo = road.search("[S]");
    if (road[pos_trineo+1] != "|") { // no hay barrera delante
      let antes_trineo_tmp = road[pos_trineo+1];
      road = road.substring(0, pos_trineo) + antes_trineo + "S" + road.substring(pos_trineo+2, road.length);
      antes_trineo = antes_trineo_tmp;
    }

    movimientos.push(road);
    ciclo++;
  }

  return movimientos;
}