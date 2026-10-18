function isCircleSorted( arr ){
  let kolichestvoNarushenij = 0;
  for (let i = 0; i < arr.length; i++) {
    let tekushchee = arr[i];
    let sleduyushchee;
    if (i === arr.length - 1) {
      sleduyushchee = arr[0];
    } else {
      sleduyushchee = arr[i + 1];
    }
    if (tekushchee > sleduyushchee) {
      kolichestvoNarushenij = kolichestvoNarushenij + 1;
    }
  }
  if (kolichestvoNarushenij <= 1) {
    return true;
  } else {
    return false;
  }
}
