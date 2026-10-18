function findMissing(list) {
  let dlinna = list.length;
  let shag = (list[dlinna - 1] - list[0]) / dlinna;
  for (let i = 0; i < dlinna - 1; i++) {
    let raznica = list[i + 1] - list[i];
    if (raznica !== shag) {
      return list[i] + shag;
    }
  }
  return list[0];
}
