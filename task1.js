function hasTwoCubeSums(n) {
	 let count = 0;
  for (let a = 1; a * a * a < n; a++) {
    let a3 = a * a * a;
    let b3 = n - a3;
    let b = Math.round(Math.pow(b3, 1/3));
    if (b * b * b === b3 && a <= b) {
      count++;
    }
  }
  return count >= 2;
}
