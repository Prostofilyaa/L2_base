function primeFactors(n) {
  let strokaOtveta = "";
  let chislo = n;
  for (let i = 2; i <= chislo; i++) {
    let stepen = 0;
    while (chislo % i === 0) {
      stepen = stepen + 1;
      chislo = chislo / i;
    }
    if (stepen > 0) {
      if (stepen === 1) {
        strokaOtveta = strokaOtveta + "(" + i + ")";
      } else {
        strokaOtveta = strokaOtveta + "(" + i + "**" + stepen + ")";
      }
    }
  }
  return strokaOtveta;
}
