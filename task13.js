function hexStringToRGB(hexString) {
  let rHex = hexString.slice(1, 3);
  let gHex = hexString.slice(3, 5);
  let bHex = hexString.slice(5, 7);
  let rChislo = parseInt(rHex, 16);
  let gChislo = parseInt(gHex, 16);
  let bChislo = parseInt(bHex, 16);
  return {
    r: rChislo,
    g: gChislo,
    b: bChislo
  };
}
