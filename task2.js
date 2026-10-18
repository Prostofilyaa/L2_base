function ipv4Parser(ip, mask) {
  let ipParts = ip.split('.');
  let maskParts = mask.split('.');
  let netParts = [];
  let hostParts = [];
  for (let i = 0; i < 4; i++) {
    let ipNum = Number(ipParts[i]);
    let maskNum = Number(maskParts[i]);
    let netNum = ipNum & maskNum;
    let hostNum = ipNum & (~maskNum & 255);
    netParts.push(netNum);
    hostParts.push(hostNum);
  }
  let netString = netParts.join('.');
  let hostString = hostParts.join('.');
  return [netString, hostString];
}
