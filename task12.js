function longest(arr, n) {
  let kopiyaMassiva = [];
  for (let i = 0; i < arr.length; i++) {
    kopiyaMassiva.push(arr[i]);
  }
  for (let i = 0; i < kopiyaMassiva.length; i++) {
    for (let j = 0; j < kopiyaMassiva.length - 1; j++) {
      if (kopiyaMassiva[j].length < kopiyaMassiva[j + 1].length) {
        let vremennaya = kopiyaMassiva[j];
        kopiyaMassiva[j] = kopiyaMassiva[j + 1];
        kopiyaMassiva[j + 1] = vremennaya;
      }
    }
  }
  return kopiyaMassiva[n - 1];
}
