function calculateTime(deliveries) {
  let totalHor = 0;
  let totalMin = 0;
  let totalSeg = 0;
  deliveries.forEach(tiempoEntrega => {
    totalHor += parseInt(tiempoEntrega[0]);
    totalMin += parseInt(tiempoEntrega[1]);
    totalSeg += parseInt(tiempoEntrega[2]);
  });
  totalMin += Math.floor(totalSeg/60);
  totalHor += Math.floor(totalMin);

  console.log([totalHor, totalMin, totalSeg]);
}

calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
]) // '-05:29:00'