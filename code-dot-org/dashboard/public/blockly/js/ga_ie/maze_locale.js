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
"at":function(d){return "ag"},
"atFlower":function(d){return "ag bláth"},
"atHoneycomb":function(d){return "ag cíor mheala"},
"avoidCowAndRemove":function(d){return "seachain an bhó agus bain 1"},
"collect":function(d){return "bailigh"},
"collectiblePresent":function(d){return "tá maoinchiste ann"},
"collectorCollectTooltip":function(d){return "Bailigh rud éigin"},
"collectorCollectedEverything":function(d){return "Comhghairdeas! Bhailigh tú "+maze_locale.p(d,"count",0,"ga",{"one":"an rud amháin","two":"an dá rud","few":"na "+maze_locale.n(d,"count")+" rud","many":"na "+maze_locale.n(d,"count")+" rud","other":"na "+maze_locale.n(d,"count")+" rud"})+" a bhí ann!"},
"collectorCollectedNothing":function(d){return "Lean ort! Bailigh an líon is mó rudaí agus is féidir leat."},
"collectorCollectedSome":function(d){return "Maith thú! Bhailigh tú "+maze_locale.p(d,"count",0,"ga",{"one":"rud amháin","two":"dhá rud","few":maze_locale.n(d,"count")+" rud","many":maze_locale.n(d,"count")+" rud","other":maze_locale.n(d,"count")+" rud"})+"!"},
"collectorCollectedNotEnough":function(d){return "Lean ort! Ní mór duit ar a laghad "+maze_locale.p(d,"goal",0,"ga",{"one":"rud amháin","two":"dhá rud","few":maze_locale.n(d,"goal")+" rud","many":maze_locale.n(d,"goal")+" rud","other":maze_locale.n(d,"goal")+" rud"})+"."},
"collectorCollectedTooMany":function(d){return "Níl a dóthain rudaí le bailiú san áit seo."},
"collectorTooManyBlocks":function(d){return "Ní féidir níos mó na "+maze_locale.v(d,"blockLimit")+" bloc a úsáid. Féach ar do chód agus bain triail eile as!"},
"continue":function(d){return "Ar aghaidh"},
"corn":function(d){return "arbhar"},
"cornTooltip":function(d){return "Bain arbhar"},
"didNotCollectAllCrops":function(d){return "Ná fág aon bharr i do dhiaidh!"},
"didNotCollectEverything":function(d){return "Ná fág aon neachtar nó mhil i do dhiaidh!"},
"didNotPlantEverywhere":function(d){return "Caithfidh tú rud éigin a phlandú i ngach áit ithreach!"},
"dig":function(d){return "bain 1"},
"digTooltip":function(d){return "bain 1 lód ithreach"},
"dirE":function(d){return "O"},
"dirN":function(d){return "T"},
"dirS":function(d){return "D"},
"dirW":function(d){return "I"},
"doCode":function(d){return " "},
"elseCode":function(d){return "i ngach cás eile"},
"emptyCropError":function(d){return "Níl aon chuid den bharr seo fágtha."},
"fill":function(d){return "líon 1"},
"fillN":function(d){return "líon "+maze_locale.v(d,"shovelfuls")+" sluasaid"},
"fillSquare":function(d){return "líon cearnóg"},
"fillStack":function(d){return "líon cruach "+maze_locale.v(d,"shovelfuls")+" poll"},
"fillTooltip":function(d){return "cuir 1 lód ithreach"},
"finalLevel":function(d){return "Comhghairdeas! Chríochnaigh tú an dúshlán deireanach."},
"flowerEmptyError":function(d){return "Níl aon neachtar sa mbláth seo."},
"get":function(d){return "get"},
"goal":function(d){return "sprioc"},
"has":function(d){return "- is éard atá aige/aici:"},
"haslettuce":function(d){return "leitís anseo"},
"hascorn":function(d){return "tá arbhar ann"},
"haspumpkin":function(d){return "tá puimcíní ann"},
"heightParameter":function(d){return "airde"},
"holePresent":function(d){return "poll anseo"},
"honey":function(d){return "déan mil"},
"honeyAvailable":function(d){return "mil"},
"honeyTooltip":function(d){return "Déan mil as neachtar"},
"honeycombFullError":function(d){return "Níl áit sa chíor mheala seo do thuilleadh meala."},
"ifCode":function(d){return "má"},
"ifFlowerTooltip":function(d){return "Má tá bláth/cíor mheala ann sa treo sonraithe, cuir gníomhartha i bhfeidhm."},
"ifInRepeatError":function(d){return "Ní mór duit bloc \"má\" a úsáid taobh istigh de bhloc \"athdhéan\". Má tá tú i bponc, caith súil siar ar an leibhéal roimhe seo agus féach conas a oibríonn sé."},
"ifOnlyFlowerTooltip":function(d){return "Má tá bláth ann sa treo sonraithe, cuir gníomhartha i bhfeidhm."},
"ifPathAhead":function(d){return "má tá cosán ann os do chomhair"},
"ifTooltip":function(d){return "Má tá cosán ann sa treo sonraithe, cuir gníomhartha i bhfeidhm."},
"ifelseFlowerTooltip":function(d){return "Má tá bláth/cíor mheala ann sa treo sonraithe, cuir an chéad bhloc i bhfeidhm. Mura bhfuil, cuir an dara bloc i bhfeidhm."},
"ifelseTooltip":function(d){return "Má tá cosán ann sa treo sonraithe, cuir an chéad bhloc i bhfeidhm. Mura bhfuil cosán ann, cuir an dara bloc i bhfeidhm."},
"insufficientHoney":function(d){return "Caithfidh tú an méid ceart meala a dhéanamh."},
"insufficientNectar":function(d){return "Caithfidh tú an méid ceart neachtair a bhailiú."},
"lettuce":function(d){return "leitís"},
"lettuceTooltip":function(d){return "Bain leitís"},
"make":function(d){return "déan"},
"moveBackward":function(d){return "téigh ar gcúl"},
"moveEastTooltip":function(d){return "Aistríonn seo an carachtar spás amháin soir."},
"moveForward":function(d){return "téigh ar aghaidh"},
"moveForwardTooltip":function(d){return "Aistríonn seo an carachtar spás amháin ar aghaidh."},
"moveNorthTooltip":function(d){return "Aistríonn seo an carachtar spás amháin ó thuaidh."},
"moveSouthTooltip":function(d){return "Aistríonn seo an carachtar spás amháin ó dheas."},
"moveTooltip":function(d){return "Aistríonn seo an carachtar spás amháín ar aghaidh/ar gcúl"},
"moveWestTooltip":function(d){return "Aistríonn seo an carachtar spás amháin siar."},
"nectar":function(d){return "faigh neachtar"},
"nectarRemaining":function(d){return "neachtar"},
"nectarTooltip":function(d){return "Faigheann seo neachtar ó bhláth"},
"nextLevel":function(d){return "Comhghairdeas! Chríochnaigh tú an dúshlán seo."},
"no":function(d){return "Níl"},
"noPathAhead":function(d){return "tá an cosán faoi bhac"},
"noPathLeft":function(d){return "níl aon chosán ar chlé"},
"noPathRight":function(d){return "níl aon chosán ar dheis"},
"notAtFlowerError":function(d){return "Is féidir neachtar a fháil ó bhláthanna amháin."},
"notAtHoneycombError":function(d){return "Is féidir mil a dhéanamh ag cíor mheala amháin."},
"numBlocksNeeded":function(d){return "Is féidir an dúshlán seo a chríochnú le %1 bloc."},
"pathAhead":function(d){return "cosán os do chomhair"},
"pathLeft":function(d){return "má tá cosán ann ar chlé"},
"pathRight":function(d){return "má tá cosán ann ar dheis"},
"pick":function(d){return "pioc"},
"pilePresent":function(d){return "carn anseo"},
"plant":function(d){return "plandaigh"},
"plantInNonSoilError":function(d){return "In ithir úr amháin is féidir rudaí a phlandú."},
"plantTooltip":function(d){return "Plandaigh bachlóg"},
"pumpkin":function(d){return "puimcín"},
"pumpkinTooltip":function(d){return "Bain puimcín"},
"putdownTower":function(d){return "cuir túr anseo"},
"removeAndAvoidTheCow":function(d){return "bain 1 agus seachain an bhó"},
"removeN":function(d){return "bain "+maze_locale.v(d,"shovelfuls")+" sluasaid"},
"removePile":function(d){return "bain carn"},
"removeSquare":function(d){return "bain cearnóg"},
"removeStack":function(d){return "bain cruach "+maze_locale.v(d,"shovelfuls")+" carn"},
"repeatCarefullyError":function(d){return "Chun teacht ar réiteach, déan machnamh ar orduithe oiriúnacha le cur isteach sa bhloc \"athdhéan\", dhá aistriú agus casadh amháin. Is cuma má tá ordú sa bhreis agat ag an deireadh."},
"repeatUntil":function(d){return "athdhéan go dtí"},
"repeatUntilBlocked":function(d){return "chomh fada is atá cosán os do chomhair"},
"repeatUntilFinish":function(d){return "athdhéan go dtí an deireadh"},
"soil":function(d){return "ithir"},
"sprout":function(d){return "bachlóg"},
"step":function(d){return "Céim"},
"totalHoney":function(d){return "méid iomlán meala"},
"totalNectar":function(d){return "méid iomlán neachtair"},
"turnLeft":function(d){return "cas ar chlé"},
"turnRight":function(d){return "cas ar dheis"},
"turnTooltip":function(d){return "Casann seo an carachtar 90 céim ar chlé nó ar dheis."},
"uncheckedCloudError":function(d){return "Ba chóir duit na scamaill go léir a iniúchadh le féachaint an bláthanna nó cíora meala iad."},
"uncheckedPurpleError":function(d){return "Ba chóir duit gach bláth corcra a iniúchadh le féachaint an bhfuil neachtar ann"},
"whileMsg":function(d){return "chomh fada is atá"},
"whileTooltip":function(d){return "Athdhéan na horduithe istigh go dtí go mbainfear an críochphointe amach."},
"word":function(d){return "Aimsigh an focal"},
"wrongCropError":function(d){return "Ní féidir liom an barr sin a bhaint anseo."},
"yes":function(d){return "Tá"},
"youSpelled":function(d){return "Litrigh tú"}};