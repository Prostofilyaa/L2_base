function expandedForm(num) {
  let strokaChisla = num.toString();
  let massivChastej = [];
  for (let i = 0; i < strokaChisla.length; i++) {
    if (strokaChisla[i] !== '0') {
      let nuli = "";
      let kolichestvoNulej = strokaChisla.length - i - 1;
      for (let j = 0; j < kolichestvoNulej; j++) {
        nuli = nuli + "0";
      }
      massivChastej.push(strokaChisla[i] + nuli);
    }
  }
  return massivChastej.join(' + ');
}
