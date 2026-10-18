function toWeirdCase(string){
  let slova = string.split(' ');
  let novyeSlova = [];
  for (let i = 0; i < slova.length; i++) {
    let slovo = slova[i];
    let izmenennoeSlovo = "";
    for (let j = 0; j < slovo.length; j++) {
      if (j % 2 === 0) {
        izmenennoeSlovo = izmenennoeSlovo + slovo[j].toUpperCase();
      } else {
        izmenennoeSlovo = izmenennoeSlovo + slovo[j].toLowerCase();
      }
    }
    novyeSlova.push(izmenennoeSlovo);
  }
  return novyeSlova.join(' ');
}
