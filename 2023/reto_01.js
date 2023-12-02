function findFirstRepeated(gifts) {
  let tmp = [];
  for (let i=0; i<gifts.length; i++) {
    if (tmp.includes(gifts[i])) {
      return gifts[i];
    } else {
      tmp.push(gifts[i]);
    }
  }
  return -1;
}