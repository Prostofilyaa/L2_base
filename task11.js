function solution(str){
  let resultMassiv = [];
  for (let i = 0; i < str.length; i = i + 2) {
    let pervyjSimvol = str[i];
    let vtorojSimvol = str[i + 1];
    if (vtorojSimvol === undefined) {
      vtorojSimvol = "_";
    }
    let para = pervyjSimvol + vtorojSimvol;
    resultMassiv.push(para);
  }
  return resultMassiv;
}
