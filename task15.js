function howManyTimes(time1, time2){
  const t1 = new Date(time1.replace(' ', 'T')).getTime();
  const t2 = new Date(time2.replace(' ', 'T')).getTime();
  let current = new Date(t1);
  current.setSeconds(0);
  current.setMilliseconds(0);
  if (current.getMinutes() < 30) {
    current.setMinutes(0);
  } else {
    current.setMinutes(30);
  }
  let totalStrikes = 0;
  while (current.getTime() < t2) {
    const currTime = current.getTime();
    const mins = current.getMinutes();
    if (mins === 0) {
      let h = current.getHours() % 12;
      if (h === 0) h = 12;
      for (let i = 0; i < h; i++) {
        const strikeTime = currTime + i * 1000;
        if (strikeTime >= t1 && strikeTime < t2) {
          totalStrikes++;
        }
      }
    } else if (mins === 30) {
      if (currTime >= t1 && currTime < t2) {
        totalStrikes++;
      }
    }
    current.setMinutes(current.getMinutes() + 30);
  }
  return totalStrikes;
}
