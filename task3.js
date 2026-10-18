function whatCentury(year) {
  let yearNum = Number(year);
  let vek = Math.ceil(yearNum / 100);
  if (vek >= 11 && vek <= 19) {
    return vek + "th";
  }
  let poslednyayaCifra = vek % 10;
  if (poslednyayaCifra === 1) {
    return vek + "st";
  } else if (poslednyayaCifra === 2) {
    return vek + "nd";
  } else if (poslednyayaCifra === 3) {
    return vek + "rd";
  } else {
    return vek + "th";
  }
}
