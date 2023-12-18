function calculateTime(deliveries) {

  function hora2Segundos(h, m, s) {
  // Convierte h:m:s a segundos
    return (parseInt(h)*3600 + parseInt(m)*60 + parseInt(s));
  }

  function segundos2Hora(s) {
  // Convierte segundos a "hh:mm:ss"
    let hor = Math.floor(s/3600);
    let horStr = hor.toString().padStart(2,"0");
    let min = Math.floor((s-(hor*3600))/60);
    let minStr = min.toString().padStart(2,"0");
    let seg = s-(hor*3600)-(min*60);
    let segStr = seg.toString().padStart(2,"0");
    return horStr+":"+minStr+":"+segStr;
  }

  let totalSegEntregas = 0;
  deliveries.forEach(entrega => {
    arrEntregas = entrega.split(":");
    totalSegEntregas += hora2Segundos(arrEntregas[0], arrEntregas[1], arrEntregas[2]);
  });

  if (totalSegEntregas >= (7*3600)) {
    return segundos2Hora(totalSegEntregas-(7*3600));
  } else {
    return "-" + segundos2Hora((7*3600)-totalSegEntregas);
  }
  
}