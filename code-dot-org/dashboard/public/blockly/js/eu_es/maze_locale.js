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
"atFlower":function(d){return "lorean"},
"atHoneycomb":function(d){return "abaraskan"},
"avoidCowAndRemove":function(d){return "saihestu behia eta ezabatu bat"},
"collect":function(d){return "uzta bildu"},
"collectiblePresent":function(d){return "altxor bat dago"},
"collectorCollectTooltip":function(d){return "Hartu elementu bat"},
"collectorCollectedEverything":function(d){return "Zorionak! "+maze_locale.v(d,"count")+" elementuak bildu dituzu!"},
"collectorCollectedNothing":function(d){return "Segi kodetzen! Ahal bezainbeste elementu bildu behar dituzu."},
"collectorCollectedSome":function(d){return "Lan ederra! "+maze_locale.v(d,"count")+" elementu jaso dituzu!"},
"collectorCollectedNotEnough":function(d){return "Jarraitu programatzen! Gutxienez "+maze_locale.p(d,"goal",0,"eu",{"one":"ítem bat","other":maze_locale.n(d,"goal")+" ítems"})+" bildu behar duzu."},
"collectorCollectedTooMany":function(d){return "Espazio horrek ez du nik biltzeko nahiko alerik."},
"collectorTooManyBlocks":function(d){return maze_locale.v(d,"blockLimit")+" bloke baino ezin duzu erabili. Berrikusi zure kodea eta saiatu berriro!"},
"continue":function(d){return "Jarraitu"},
"corn":function(d){return "artoa"},
"cornTooltip":function(d){return "Arto uzta"},
"didNotCollectAllCrops":function(d){return "Labore guztiak bildu dituzula ziurta ezazu!"},
"didNotCollectEverything":function(d){return "Nektar eta ezti guztia aldean daramazula ziurta ezazu!"},
"didNotPlantEverywhere":function(d){return "Lursaileko lauki bakoitzean zerbait landatu duzula ziurta ezazu!"},
"dig":function(d){return "ezabatu bat"},
"digTooltip":function(d){return "ezabatu lur unitate bat"},
"dirE":function(d){return "E"},
"dirN":function(d){return "I"},
"dirS":function(d){return "H"},
"dirW":function(d){return "M"},
"doCode":function(d){return "egin"},
"elseCode":function(d){return "bestela"},
"emptyCropError":function(d){return "Labore hori bukatu da."},
"fill":function(d){return "bete bat"},
"fillN":function(d){return "bete "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "bete karratua"},
"fillStack":function(d){return maze_locale.v(d,"shovelfuls")+" zulo mordoa bete"},
"fillTooltip":function(d){return "kokatu lur unitate bat"},
"finalLevel":function(d){return "Zorionak! Amaierako puzlea ebatzi duzu."},
"flowerEmptyError":function(d){return "Lore honek ez du nektar gehiago."},
"get":function(d){return "jaso"},
"goal":function(d){return "helburua"},
"has":function(d){return "dauka"},
"haslettuce":function(d){return "han badago letxugarik"},
"hascorn":function(d){return "han badago artorik"},
"haspumpkin":function(d){return "badago kuiarik"},
"heightParameter":function(d){return "Altuera"},
"holePresent":function(d){return "Zulo bat dago"},
"honey":function(d){return "egin eztia"},
"honeyAvailable":function(d){return "eztia"},
"honeyTooltip":function(d){return "Egin eztia nektarrarekin"},
"honeycombFullError":function(d){return "Abaraskak ez dauka tokia ezti gehiago gordetzeko."},
"ifCode":function(d){return "baldin"},
"ifFlowerTooltip":function(d){return "Baldin eta zehazturiko norabidean lore/abaraskarik badago, egin zenbait ekintza."},
"ifInRepeatError":function(d){return "\"baldin\" bloke bat erabili behar duzu \"errepikatu\" bloke baten barruan. Zailtasunak badituzu, errepika ezazu aurreko maila, nola erabili ikusteko."},
"ifOnlyFlowerTooltip":function(d){return "Zehaztutako norabidean lorerik badago, egin ekintza batzuk."},
"ifPathAhead":function(d){return "Aurrean bidea bada"},
"ifTooltip":function(d){return "Zehaztutako norabidean bidea bada, orduan egin ekintza batzuk."},
"ifelseFlowerTooltip":function(d){return "Baldin eta zehazturiko norabidean lore/abaraskarik badago, egin lehen blokeko ekintzak. Bestela, egin bigarren blokeko ekintzak."},
"ifelseTooltip":function(d){return "Zehaztutako norabidean bidea bada, orduan egin lehenengo blokeko ekintzak. Bestela, egin bigarren blokeko ekintzak."},
"insufficientHoney":function(d){return "Ezti kopuru egokia egin behar duzu."},
"insufficientNectar":function(d){return "Nektar kopuru egokia bildu behar duzu."},
"lettuce":function(d){return "letxuga"},
"lettuceTooltip":function(d){return "Letxugaren bat bildu"},
"make":function(d){return "Egin"},
"moveBackward":function(d){return "atzera mugitu"},
"moveEastTooltip":function(d){return "Mugi nazazu ekialdera espazio bat."},
"moveForward":function(d){return "mugitu aurrera"},
"moveForwardTooltip":function(d){return "Mugi nazazu espazio bat aurrera."},
"moveNorthTooltip":function(d){return "Mugi nazazu iparraldera espazio bat."},
"moveSouthTooltip":function(d){return "Mugi nazazu hegoaldera espazio bat."},
"moveTooltip":function(d){return "Mugi nazazu aurrera/atzera hutsune bat"},
"moveWestTooltip":function(d){return "Mugi nazazu mendebaldera espazio bat."},
"nectar":function(d){return "lortu nektarra"},
"nectarRemaining":function(d){return "nektar"},
"nectarTooltip":function(d){return "Lortu nektarra lore batetik"},
"nextLevel":function(d){return "Zorionak! Puzle hau osatu duzu."},
"no":function(d){return "Ez"},
"noPathAhead":function(d){return "Bidea blokeatua dago"},
"noPathLeft":function(d){return "ez dago biderik ezkerraldera"},
"noPathRight":function(d){return "ez dago biderik eskuinaldera"},
"notAtFlowerError":function(d){return "Lore batetik bakarrik lor dezakezu nektarra."},
"notAtHoneycombError":function(d){return "Eztia abaraska batean bakarrik egin dezakezu."},
"numBlocksNeeded":function(d){return "Puzle hau %1 blokeekin ebaz daiteke."},
"pathAhead":function(d){return "bidea aurrean"},
"pathLeft":function(d){return "ezkerrera bidea badago"},
"pathRight":function(d){return "eskuinera bidea baldin badago"},
"pick":function(d){return "aukera"},
"pilePresent":function(d){return "meta bat dago"},
"plant":function(d){return "landare"},
"plantInNonSoilError":function(d){return "Lursoru berrian baino ezin duzu landatu."},
"plantTooltip":function(d){return "Kimu bat landatu"},
"pumpkin":function(d){return "kalabaza"},
"pumpkinTooltip":function(d){return "Kuia bat bildu"},
"putdownTower":function(d){return "dorrea lurrera bota"},
"removeAndAvoidTheCow":function(d){return "ezabatu bat eta saihestu behia"},
"removeN":function(d){return "ezabatu "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "ezabatu meta"},
"removeSquare":function(d){return "ezabatu karratua"},
"removeStack":function(d){return "ezabatu "+maze_locale.v(d,"shovelfuls")+" meta multzoa"},
"repeatCarefullyError":function(d){return "Hau ebazteko, pentsatu bi mugimendu eta bira baten sekuentzia \"errepikatu\" blokearen barruan jartzeko. Ongi dago, bira gehigarri bat bukaeran egitea."},
"repeatUntil":function(d){return "errepikatu %1 arte"},
"repeatUntilBlocked":function(d){return "aurrean bidea dagoen bitartean"},
"repeatUntilFinish":function(d){return "errepikatu bukatu arte"},
"soil":function(d){return "soroa"},
"sprout":function(d){return "kimua"},
"step":function(d){return "Pauso"},
"totalHoney":function(d){return "eztia guztira"},
"totalNectar":function(d){return "nektarra guztira"},
"turnLeft":function(d){return "biratu ezkerrera"},
"turnRight":function(d){return "biratu eskuinera"},
"turnTooltip":function(d){return "90 gradu biratzen nau eskuin edo ezkerrera."},
"uncheckedCloudError":function(d){return "Ziurtatu hodei guztiak begiratzen dituzula loreak edo abaraskak dauden ikusteko."},
"uncheckedPurpleError":function(d){return "Ziurtatu lore more guztiak berrikusi dituzula, nektarra duten begiratzeko"},
"whileMsg":function(d){return "bitartean"},
"whileTooltip":function(d){return "Errepikatu barruko ekintzak bukaerako puntua eskuratu arte."},
"word":function(d){return "Bilatu hitza"},
"wrongCropError":function(d){return "Hemendik ezin dut bildu labore hori."},
"yes":function(d){return "Bai"},
"youSpelled":function(d){return "Idatzi duzu"}};