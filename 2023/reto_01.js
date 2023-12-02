const giftIds = [2, 4, 3, 5, 1]

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

console.log(findFirstRepeated(giftIds));
