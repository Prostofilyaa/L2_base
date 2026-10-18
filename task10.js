function bingo(ticket, win){
  let kolichestvoPobed = 0;
  for (let i = 0; i < ticket.length; i++) {
    let kartochка = ticket[i];
    let stroka = kartochка[0];
    let chislo = kartochка[1];
    let estSovpadenie = false;
    for (let j = 0; j < stroka.length; j++) {
      if (stroka.charCodeAt(j) === chislo) {
        estSovpadenie = true;
      }
    }
    if (estSovpadenie === true) {
      kolichestvoPobed = kolichestvoPobed + 1;
    }
  }
  if (kolichestvoPobed >= win) {
    return 'Winner!';
  } else {
    return 'Loser!';
  }
}
