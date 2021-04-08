var maze_locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"ga":function(n){return n==1?"one":(n==2?"two":"other")},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"mr":function(n){return n===1?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"te":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){maze_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){maze_locale.c(d,k);return d[k] in p?p[d[k]]:(k=maze_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){maze_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).maze_locale = {
"at":function(d){return "at"},
"atFlower":function(d){return "na cvijetu"},
"atHoneycomb":function(d){return "na saću"},
"avoidCowAndRemove":function(d){return "izbjegni kravu i ukloni 1"},
"collect":function(d){return "pokupi"},
"collectiblePresent":function(d){return "tu je nekakvo blagu"},
"collectorCollectTooltip":function(d){return "Pokupite predmet"},
"collectorCollectedEverything":function(d){return "Čestitamo! Pokupili se "+maze_locale.p(d,"count",0,"en",{"one":"predmet","other":"svi"+maze_locale.n(d,"count")+"predmeti"})+"!"},
"collectorCollectedNothing":function(d){return "Nastavite kodirati! Trebate pokupiti što je više moguće predmeta."},
"collectorCollectedSome":function(d){return "Great work! You collected "+maze_locale.v(d,"count")+" items!"},
"collectorCollectedNotEnough":function(d){return "Keep coding! You need to collect at least "+maze_locale.p(d,"goal",0,"en",{"one":"1 item","other":maze_locale.n(d,"goal")+" items"})+"."},
"collectorCollectedTooMany":function(d){return "That space doesn't have enough items for me to collect."},
"collectorTooManyBlocks":function(d){return "You can only use "+maze_locale.v(d,"blockLimit")+" blocks. Take a look at your code and try again!"},
"continue":function(d){return "Nastavi"},
"corn":function(d){return "kukuruz"},
"cornTooltip":function(d){return "Poženjite nešto kukuruza"},
"didNotCollectAllCrops":function(d){return "Budite sigurni da ne ostavite ništa usjeva iza sebe!"},
"didNotCollectEverything":function(d){return "Make sure you don't leave any nectar or honey behind!"},
"didNotPlantEverywhere":function(d){return "Make sure you plant something in every soil patch!"},
"dig":function(d){return "ukloni 1"},
"digTooltip":function(d){return "ukloni 1 komad zemlje"},
"dirE":function(d){return "Istok"},
"dirN":function(d){return "Sjever"},
"dirS":function(d){return "Jug"},
"dirW":function(d){return "Zapad"},
"doCode":function(d){return "uradi"},
"elseCode":function(d){return "inače"},
"emptyCropError":function(d){return "That crop is all gone."},
"fill":function(d){return "popuniti 1"},
"fillN":function(d){return "popuniti "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "popuni kvadrat"},
"fillStack":function(d){return "popuni stog od "+maze_locale.v(d,"shovelfuls")+" rupa"},
"fillTooltip":function(d){return "stavi 1 komad zemlje"},
"finalLevel":function(d){return "Čestitamo ! Riješili ste posljednji zadatak."},
"flowerEmptyError":function(d){return "Cvijet na kojem se nalaziš nema više nektara."},
"get":function(d){return "uzmi"},
"goal":function(d){return "goal"},
"has":function(d){return "has"},
"haslettuce":function(d){return "there is lettuce"},
"hascorn":function(d){return "ima kukuruz"},
"haspumpkin":function(d){return "ima bundeva"},
"heightParameter":function(d){return "visina"},
"holePresent":function(d){return "ovdje je rupa"},
"honey":function(d){return "napravi med"},
"honeyAvailable":function(d){return "med"},
"honeyTooltip":function(d){return "Pravi med od nektara"},
"honeycombFullError":function(d){return "Ovo saće nema više slobodnog prostora za med."},
"ifCode":function(d){return "ako"},
"ifFlowerTooltip":function(d){return "Ako u navedenom smjeru postoji cvijet ili saće, onda uradi neke akcije."},
"ifInRepeatError":function(d){return "Treba ti \"ako\" blok unutar \"ponovi\" bloka. Ako imaš problema s time, pogledaj prethodni nivo da vidiš kako to radi."},
"ifOnlyFlowerTooltip":function(d){return "Ukoliko imate cvijet u zadatom smijeru, onda uradite neke radnje."},
"ifPathAhead":function(d){return "ako je put ispred"},
"ifTooltip":function(d){return "Ako staza ide u zadanom smjeru, onda uradi neke akcije."},
"ifelseFlowerTooltip":function(d){return "Ako u navedenom smjeru postoji cvijet ili saće, onda uradi prvi blok akcija. Inače uradi drugi blok akcija."},
"ifelseTooltip":function(d){return "Ako staza vodi u zadanom smjeru, onda uradi prvu grupu akcija, a inače uradi drugu grupu akcija."},
"insufficientHoney":function(d){return "Koristiš sve odgovarajuće blokove, ali trebaš napraviti pravu količinu meda."},
"insufficientNectar":function(d){return "Koristiš sve odgovarajuće blokove, ali trebaš prikupiti pravu količinu nektara."},
"lettuce":function(d){return "zelena salata"},
"lettuceTooltip":function(d){return "Poženjite nešto salate"},
"make":function(d){return "kreiraj"},
"moveBackward":function(d){return "idi unatrag"},
"moveEastTooltip":function(d){return "Premjesti me za jedno polje na Istok."},
"moveForward":function(d){return "idi naprijed"},
"moveForwardTooltip":function(d){return "Pomakni me naprijed za jedno polje."},
"moveNorthTooltip":function(d){return "Pomakni me za jedno polje na Sjever."},
"moveSouthTooltip":function(d){return "Pomakni me za jedno polje na Jug."},
"moveTooltip":function(d){return "Pomakni me naprijed ili nazad za jedno polje"},
"moveWestTooltip":function(d){return "Pomakni me za jedno polje na Zapad."},
"nectar":function(d){return "pokupi nektar"},
"nectarRemaining":function(d){return "nektar"},
"nectarTooltip":function(d){return "Pokupi nektar sa cvijeta"},
"nextLevel":function(d){return "Čestitamo! Ovaj zadatak je riješen."},
"no":function(d){return "Ne"},
"noPathAhead":function(d){return "staza je blokirana"},
"noPathLeft":function(d){return "s lijeve strane nema staze"},
"noPathRight":function(d){return "s desne strane nema staze"},
"notAtFlowerError":function(d){return "Nektar možeš dobiti samo iz cvijeta."},
"notAtHoneycombError":function(d){return "Med možeš napraviti samo na saću."},
"numBlocksNeeded":function(d){return "Ovaj zadatak se može riješiti sa %1 blokova."},
"pathAhead":function(d){return "staza je ispred"},
"pathLeft":function(d){return "ako je staza lijevo"},
"pathRight":function(d){return "ako je staza desno"},
"pick":function(d){return "izaberi"},
"pilePresent":function(d){return "ovdje je hrpa"},
"plant":function(d){return "zasaditi"},
"plantInNonSoilError":function(d){return "Mogu samo nešto posaditi na svježem tlu."},
"plantTooltip":function(d){return "Plant a sprout"},
"pumpkin":function(d){return "pumpkin"},
"pumpkinTooltip":function(d){return "Berite bundevu"},
"putdownTower":function(d){return "spusti kulu"},
"removeAndAvoidTheCow":function(d){return "ukloni 1 i izbjegni kravu"},
"removeN":function(d){return "ukloni "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "ukloni hrpu"},
"removeSquare":function(d){return "ukloni kvadrat"},
"removeStack":function(d){return "ukloni stog od "+maze_locale.v(d,"shovelfuls")+" hrpa"},
"repeatCarefullyError":function(d){return "Da bi ovo riješio, dobro razmisli o uzorku sastavljenom od dva kretanja i jednog skretanja koji se stavlja u blok \"ponovi\". U redu je ako na kraju imaš jedno skretanje više."},
"repeatUntil":function(d){return "ponavljaj dok ne bude"},
"repeatUntilBlocked":function(d){return "dok je staza ispred"},
"repeatUntilFinish":function(d){return "ponavljaj dok ne završiš"},
"soil":function(d){return "tlo"},
"sprout":function(d){return "sprout"},
"step":function(d){return "Korak"},
"totalHoney":function(d){return "ukupna količina meda"},
"totalNectar":function(d){return "ukupna količina nektara"},
"turnLeft":function(d){return "okreni lijevo"},
"turnRight":function(d){return "okreni desno"},
"turnTooltip":function(d){return "Okreće me lijevo ili desno za 90 stepeni."},
"uncheckedCloudError":function(d){return "Dobro provjeri sve oblake da vidiš da li su cvjetovi ili saće."},
"uncheckedPurpleError":function(d){return "Dobro provjeri sve ljubičaste cvjetove da vidiš ima li na njima nektara"},
"whileMsg":function(d){return "dok"},
"whileTooltip":function(d){return "Ponavlja umetnute akcije dok se ne dosegne zadani cilj."},
"word":function(d){return "Pronađi riječ"},
"wrongCropError":function(d){return "Ne mogu požeti taj usjev odavde."},
"yes":function(d){return "Da"},
"youSpelled":function(d){return "Napisao si"}};