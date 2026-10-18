function wave(str){
  let resultMassiv = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue; 
    }
    let doBukvy = str.slice(0, i);
    let tekushchayaBolshaya = str[i].toUpperCase();
    let posleBukvy = str.slice(i + 1);
    let novoeSlovo = doBukvy + tekushchayaBolshaya + posleBukvy;
    resultMassiv.push(novoeSlovo);
  }
  return resultMassiv;
}
