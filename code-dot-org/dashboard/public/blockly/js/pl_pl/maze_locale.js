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
"at":function(d){return "na/w/o"},
"atFlower":function(d){return "na kwiatku"},
"atHoneycomb":function(d){return "na plastrze miodu"},
"avoidCowAndRemove":function(d){return "unikaj krowy i usuń 1"},
"collect":function(d){return "zbierz"},
"collectiblePresent":function(d){return "tu jest jakiś skarb"},
"collectorCollectTooltip":function(d){return "Weź rzecz"},
"collectorCollectedEverything":function(d){return "Gratulacje! Zebrałeś wszystkie "+maze_locale.p(d,"count",0,"pl",{"one":"the item","other":"all "+maze_locale.n(d,"count")+" items"})+"!"},
"collectorCollectedNothing":function(d){return "Nadal koduj! Musisz zebrać tak dużo rzeczy, jak tylko potrafisz."},
"collectorCollectedSome":function(d){return "Świetna robota! Zebrałeś "+maze_locale.p(d,"count",0,"pl",{"one":"1 item","other":maze_locale.n(d,"count")+" items"})+"!"},
"collectorCollectedNotEnough":function(d){return "Koduj! Potrzebujesz zebrać co najmniej "+maze_locale.p(d,"cel",0,"pl",{"jeden":"1 item","other":maze_locale.n(d,"cel")+" items"})+"."},
"collectorCollectedTooMany":function(d){return "Na tym miejscu nie ma dość elementów dla mnie do zebrania."},
"collectorTooManyBlocks":function(d){return "Możesz użyć tylko bloków "+maze_locale.v(d,"blockLimit")+". Spójrz na swój kod i spróbuj ponownie!"},
"continue":function(d){return "Kontynuuj"},
"corn":function(d){return "kukurydza"},
"cornTooltip":function(d){return "Zbierz trochę kukurydzy"},
"didNotCollectAllCrops":function(d){return "Upewnij się, że nie pozostawiasz żadnych plonów!"},
"didNotCollectEverything":function(d){return "Upewnij się, że nie zostawiasz za sobą żadnego nektaru albo miodu!"},
"didNotPlantEverywhere":function(d){return "Upewnij się, że sadzisz cokolwiek na każdym skrawku gleby!"},
"dig":function(d){return "usuń 1"},
"digTooltip":function(d){return "usuń 1 jednostkę śmieci"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "W"},
"doCode":function(d){return "wykonaj"},
"elseCode":function(d){return "w przeciwnym razie"},
"emptyCropError":function(d){return "Tych plonów już nie ma."},
"fill":function(d){return "wypełnij 1"},
"fillN":function(d){return "wypełnij "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "wypełnij kwadrat"},
"fillStack":function(d){return "wypełnij stos "+maze_locale.v(d,"shovelfuls")+" otworów"},
"fillTooltip":function(d){return "umieść 1 jednostkę śmieci"},
"finalLevel":function(d){return "Gratulacje! Rozwiązałeś końcową łamigłówkę."},
"flowerEmptyError":function(d){return "Kwiat, na którym jesteś nie ma już nektaru."},
"get":function(d){return "weź"},
"goal":function(d){return "cel"},
"has":function(d){return "ma"},
"haslettuce":function(d){return "jest sałata"},
"hascorn":function(d){return "jest kukurydza"},
"haspumpkin":function(d){return "są dynie"},
"heightParameter":function(d){return "wysokość"},
"holePresent":function(d){return "tam jest otwór"},
"honey":function(d){return "produkuj miód"},
"honeyAvailable":function(d){return "miód"},
"honeyTooltip":function(d){return "Produkuj miód z nektaru"},
"honeycombFullError":function(d){return "W tym plastrze miodu nie ma miejsca na więcej miodu."},
"ifCode":function(d){return "jeśli (if)"},
"ifFlowerTooltip":function(d){return "Jeśli jest kwiat/plaster miodu w określonym kierunku, to wykonaj pewne akcje."},
"ifInRepeatError":function(d){return "Potrzebujesz bloku \"jeśli\" (if) umieszczonego w bloku \"powtarzaj\" (repeat). Jeśli masz jakiś problem, to wróć na poprzedni poziom, by zobaczyć, jak to działa."},
"ifOnlyFlowerTooltip":function(d){return "Jeśli jest kwiat w określonym kierunku, to wykonaj pewne działania."},
"ifPathAhead":function(d){return "jeśli jest ścieżka do przodu"},
"ifTooltip":function(d){return "Jeśli jest ścieżka w określonym kierunku, to wykonaj pewne działania."},
"ifelseFlowerTooltip":function(d){return "Jeśli jest kwiat/plaster miodu w określonym kierunku, to wykonaj pierwszy blok akcji. W przeciwnym razie wykonaj drugi blok akcji."},
"ifelseTooltip":function(d){return "Jeśli jest ścieżka w określonym kierunku, to wykonaj pierwszy blok działań. W przeciwnym razie, wykonaj drugi blok działań."},
"insufficientHoney":function(d){return "Musisz wyprodukować odpowiednią ilość miodu."},
"insufficientNectar":function(d){return "Musisz zgromadzić odpowiednią ilość nektaru."},
"lettuce":function(d){return "sałata"},
"lettuceTooltip":function(d){return "Zbierz trochę sałaty"},
"make":function(d){return "zrób"},
"moveBackward":function(d){return "idź do tyłu"},
"moveEastTooltip":function(d){return "Przesuń mnie o jedno miejsce na wschód."},
"moveForward":function(d){return "idź do przodu"},
"moveForwardTooltip":function(d){return "Przesuń mnie do przodu o jedno miejsce."},
"moveNorthTooltip":function(d){return "Przesuń mnie o jedno miejsce na północ."},
"moveSouthTooltip":function(d){return "Przesuń mnie o jedno miejsce na południe."},
"moveTooltip":function(d){return "Przesuń mnie o jedno miejsce do przodu/do tyłu "},
"moveWestTooltip":function(d){return "Przesuń mnie o jedno miejsce na zachód."},
"nectar":function(d){return "pobierz nektar"},
"nectarRemaining":function(d){return "nektar"},
"nectarTooltip":function(d){return "Pobierz nektar z kwiatu"},
"nextLevel":function(d){return "Gratulacje! Ukończyłeś tę łamigłówkę."},
"no":function(d){return "Nie"},
"noPathAhead":function(d){return "ścieżka jest zablokowana"},
"noPathLeft":function(d){return "nie ma ścieżki w lewo"},
"noPathRight":function(d){return "nie ma ścieżki w prawo"},
"notAtFlowerError":function(d){return "Możesz pobrać nektar tylko z kwiatu."},
"notAtHoneycombError":function(d){return "Możesz produkować miód tylko w plastrze miodu."},
"numBlocksNeeded":function(d){return "Ta łamigłówka może być rozwiązana z użyciem %1 bloków."},
"pathAhead":function(d){return "ścieżka do przodu"},
"pathLeft":function(d){return "jeśli jest ścieżka w lewo"},
"pathRight":function(d){return "jeśli jest ścieżka w prawo"},
"pick":function(d){return "zbierz"},
"pilePresent":function(d){return "jest tam sterta"},
"plant":function(d){return "roślina"},
"plantInNonSoilError":function(d){return "Mogę tylko coś sadzić w świeżej glebie."},
"plantTooltip":function(d){return "Posadź kiełki"},
"pumpkin":function(d){return "dynia"},
"pumpkinTooltip":function(d){return "Zbierz dynię"},
"putdownTower":function(d){return "postaw wieżę na ziemi"},
"removeAndAvoidTheCow":function(d){return "usuń 1 i unikaj krowy"},
"removeN":function(d){return "usuń "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "usuń stos"},
"removeSquare":function(d){return "usuń kwadrat"},
"removeStack":function(d){return "usuń stos "+maze_locale.v(d,"shovelfuls")+" stosów"},
"repeatCarefullyError":function(d){return "Aby to rozwiązać, pomyśl uważnie o układzie dwóch ruchów i jednego obrotu umieszczając ten układ w bloku \"powtórz\". W porządku jest, jeśli na końcu będzie dodatkowy obrót."},
"repeatUntil":function(d){return "powtarzaj aż"},
"repeatUntilBlocked":function(d){return "dopóki jest ścieżka do przodu"},
"repeatUntilFinish":function(d){return "powtarzaj aż będzie koniec"},
"soil":function(d){return "gleba"},
"sprout":function(d){return "kiełki"},
"step":function(d){return "Krok"},
"totalHoney":function(d){return "cały miód"},
"totalNectar":function(d){return "cały nektar"},
"turnLeft":function(d){return "skręć w lewo"},
"turnRight":function(d){return "skręć w prawo"},
"turnTooltip":function(d){return "Obraca mnie w lewo lub w prawo o 90 stopni."},
"uncheckedCloudError":function(d){return "Upewnij się, że sprawdziłeś wszystkie chmury aby się przekonać, czy nie ma kwiatów lub plastrów miodu."},
"uncheckedPurpleError":function(d){return "Upewnij się, że sprawdziłeś wszystkie fioletowe kwiaty, czy mają nektar"},
"whileMsg":function(d){return "dopóki"},
"whileTooltip":function(d){return "Powtarzaj wymienione czynności, aż do osiągnięcia punktu końcowego."},
"word":function(d){return "Znajdź słowa"},
"wrongCropError":function(d){return "Nie mogę stąd zebrać tych plonów."},
"yes":function(d){return "Tak"},
"youSpelled":function(d){return "Przeliterowałeś"}};