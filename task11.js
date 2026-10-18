function domainName(url){
  let tekst = url;
  tekst = tekst.replace("https://", "");
  tekst = tekst.replace("http://", "");
  tekst = tekst.replace("www.", "");
  let chasti = tekst.split('.');
  return chasti[0];
}
