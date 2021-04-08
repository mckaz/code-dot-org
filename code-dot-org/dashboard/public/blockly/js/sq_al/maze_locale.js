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
"at":function(d){return "tek"},
"atFlower":function(d){return "në lule"},
"atHoneycomb":function(d){return "në koshere"},
"avoidCowAndRemove":function(d){return "shmang lopën dhe hiq 1"},
"collect":function(d){return "mbledh"},
"collectiblePresent":function(d){return "këtu ka thesar"},
"collectorCollectTooltip":function(d){return "Mbledh një artikull"},
"collectorCollectedEverything":function(d){return "Urime! Ju keni mbledhur të gjithë "+maze_locale.v(d,"count")+" artikujt!"},
"collectorCollectedNothing":function(d){return "Vazhdo të kodosh. Ti duhesh të mbledhësh sa më shumë artikuj që mundesh."},
"collectorCollectedSome":function(d){return "Punë e mirë! Keni mbledhur "+maze_locale.v(d,"count")+" artikuj!"},
"collectorCollectedNotEnough":function(d){return "Vazhdo të kodosh. Ju duhet të mblidhni të paktën "+maze_locale.p(d,"goal",0,"sq",{"one":"1 item","other":maze_locale.n(d,"goal")+"items"})+"."},
"collectorCollectedTooMany":function(d){return "Kjo hapësirë nuk ka artikuj të mjaftueshme për mua për të mbledhur.\n\n\n"},
"collectorTooManyBlocks":function(d){return "Ju mundeni të përdorni vetëm "+maze_locale.v(d,"blockLimit")+" blloqe. Shiko edhe një herë kodin dhe provo përsëri!"},
"continue":function(d){return "Vazhdo"},
"corn":function(d){return "misër"},
"cornTooltip":function(d){return "Korrni misrin"},
"didNotCollectAllCrops":function(d){return "Sigurohuni që nuk lini asnjë prodhim pas!"},
"didNotCollectEverything":function(d){return "Sigurohuni që nuk lini asnjë nektar apo mjaltë pas!"},
"didNotPlantEverywhere":function(d){return "Sigurohuni që mbillni në çdo ngastër toke!"},
"dig":function(d){return "hiq 1"},
"digTooltip":function(d){return "hiq 1 njësi baltë"},
"dirE":function(d){return "E"},
"dirN":function(d){return "V"},
"dirS":function(d){return "J"},
"dirW":function(d){return "P"},
"doCode":function(d){return "ekzekuto"},
"elseCode":function(d){return "përndryshe"},
"emptyCropError":function(d){return "Ai prodhim është e hequr tërësisht."},
"fill":function(d){return "mbush 1"},
"fillN":function(d){return "mbush "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "mbush katrorin"},
"fillStack":function(d){return "mbush raftet "+maze_locale.v(d,"shovelfuls")+" e vrimave"},
"fillTooltip":function(d){return "vendos 1 njësi baltë"},
"finalLevel":function(d){return "Urime! Ju keni përfunduar puzzle-in përfundimatar."},
"flowerEmptyError":function(d){return "Lulja në të cilën je ti, nuk ka më nektar."},
"get":function(d){return "merr"},
"goal":function(d){return "goal"},
"has":function(d){return "ka"},
"haslettuce":function(d){return "aty ka marule"},
"hascorn":function(d){return "aty ka misër"},
"haspumpkin":function(d){return "aty ka kunguj"},
"heightParameter":function(d){return "gjatësia"},
"holePresent":function(d){return "ka një gropë"},
"honey":function(d){return "bëj mjaltë"},
"honeyAvailable":function(d){return "mjaltë"},
"honeyTooltip":function(d){return "Bëj mjaltë nga nektari"},
"honeycombFullError":function(d){return "Kjo koshere nuk ka më hapsira për më shumë mjaltë."},
"ifCode":function(d){return "nëse"},
"ifFlowerTooltip":function(d){return "Nëse ka një lule/koshere në drejtimin e caktuar, atëhere bëj disa veprime."},
"ifInRepeatError":function(d){return "Ti ke nevojë për një bllok \"if\" brenda një blloku \"repeat\". Nëse ke probleme, provo nivelin e mëparshëm përsëri, për të parë se si funksionoi atje."},
"ifOnlyFlowerTooltip":function(d){return "Nëse ka vend në një drejtim të caktuar, atëhere bëj disa veprime."},
"ifPathAhead":function(d){return "nëse ka vend përpara"},
"ifTooltip":function(d){return "Nëse ka vend në një drejtim të caktuar, atëhere bëj disa veprime."},
"ifelseFlowerTooltip":function(d){return "Nëse ka një lule/koshere në drejtimin e caktuar, atëhere bëj bllokun e parë të veprimeve. Përndryshe, bëj bllokun e dytë të veprimeve."},
"ifelseTooltip":function(d){return "Nëse ka një rrugë në drejtimin e caktuar, atëherë bëj veprimet e bllokut të parë. Përndryshe, bëj veprimet e bllokut të dytë."},
"insufficientHoney":function(d){return "Duhet të bësh sasinë e duhur të mjaltit."},
"insufficientNectar":function(d){return "Duhet të mbledhësh sasinë e duhur të nektarit."},
"lettuce":function(d){return "lakër"},
"lettuceTooltip":function(d){return "Korr pak lakër"},
"make":function(d){return "bëj"},
"moveBackward":function(d){return "lëviz mbrapa"},
"moveEastTooltip":function(d){return "Më lëviz me një hapësirë në lindje."},
"moveForward":function(d){return "levis perpara"},
"moveForwardTooltip":function(d){return "Më lëviz përpara me një hapësirë."},
"moveNorthTooltip":function(d){return "Më lëviz me një hapësirë në veri."},
"moveSouthTooltip":function(d){return "Më lëviz me një hapësirë në jug."},
"moveTooltip":function(d){return "Më lëviz me një hapësirë përpara/mbrapa"},
"moveWestTooltip":function(d){return "Më lëviz me një hapësirë në perëndim."},
"nectar":function(d){return "merr nektar"},
"nectarRemaining":function(d){return "nektar"},
"nectarTooltip":function(d){return "Merr nektar nga një lule"},
"nextLevel":function(d){return "Urime! Ti ke përfunduar këtë puzzle."},
"no":function(d){return "Jo"},
"noPathAhead":function(d){return "rruga është e bllokuar"},
"noPathLeft":function(d){return "nuk ka rrugë në të majtë"},
"noPathRight":function(d){return "nuk ka rrugë në të djathtë"},
"notAtFlowerError":function(d){return "Ti mund të marrësh nektar vetëm nga një lule."},
"notAtHoneycombError":function(d){return "Ti mund të bësh mjaltë vetëm në koshere."},
"numBlocksNeeded":function(d){return "Ky puzzle mund të zgjidhet me %1 rreshta."},
"pathAhead":function(d){return "rrugë përpara"},
"pathLeft":function(d){return "nëse ka rrugë në të majtë"},
"pathRight":function(d){return "nëse ka rrugë në të djathtë"},
"pick":function(d){return "zgjidh"},
"pilePresent":function(d){return "është një grumbull"},
"plant":function(d){return "mbill"},
"plantInNonSoilError":function(d){return "Unë mund të mbjell diçka vetëm në tokë të freskët."},
"plantTooltip":function(d){return "Mbjell një filiz"},
"pumpkin":function(d){return "kungull"},
"pumpkinTooltip":function(d){return "Korr një kungull"},
"putdownTower":function(d){return "vendos ne toke nje kulle"},
"removeAndAvoidTheCow":function(d){return "hiq 1 dhe shmang lopën"},
"removeN":function(d){return "hiq "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "hiq grumbullin"},
"removeSquare":function(d){return "hiq katrorin"},
"removeStack":function(d){return "hiq një grumbull prej "+maze_locale.v(d,"shovelfuls")},
"repeatCarefullyError":function(d){return "Për ta zgjidhur këtë, mendo me kujdes rreth modelit të dy lëvizjeve dhe të një kthimi për ti vendosur në bllokun \"repeat\". Nuk ka problem nëse ke një kthesë në fund."},
"repeatUntil":function(d){return "perserit derisa"},
"repeatUntilBlocked":function(d){return "ndërsa përpara ke rrugë"},
"repeatUntilFinish":function(d){return "përsërit deri sa të mbarojë"},
"soil":function(d){return "tokë"},
"sprout":function(d){return "filiz"},
"step":function(d){return "Një hap"},
"totalHoney":function(d){return "totali i mjaltit"},
"totalNectar":function(d){return "nektari total"},
"turnLeft":function(d){return "kthehu majtas"},
"turnRight":function(d){return "kthehu djathtas"},
"turnTooltip":function(d){return "Më kthen majtas ose djathtas me 90 gradë."},
"uncheckedCloudError":function(d){return "Sigurohu të kontrollosh të gjitha retë, për të parë nëse janë lule apo koshere."},
"uncheckedPurpleError":function(d){return "Sigurohu të kontrollosh të gjitha lulet lejla për të parë nëse ato kanë nektar"},
"whileMsg":function(d){return "ndërsa"},
"whileTooltip":function(d){return "Përsërit veprimet e brendshme derisa të arrihet pika e mbarimit."},
"word":function(d){return "Gjej fjalën"},
"wrongCropError":function(d){return "Nuk mund ta korr atë prodhim nga këtu."},
"yes":function(d){return "Po"},
"youSpelled":function(d){return "Ti gërmëzove"}};