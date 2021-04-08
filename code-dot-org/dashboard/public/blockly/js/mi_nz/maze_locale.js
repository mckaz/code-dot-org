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
"at":function(d){return "ki"},
"atFlower":function(d){return "ki te putiputi"},
"atHoneycomb":function(d){return "ki te hanikoma"},
"avoidCowAndRemove":function(d){return "karohia te kau, ā, tangohia tētahi"},
"collect":function(d){return "kohia"},
"collectiblePresent":function(d){return "he kura e kitea ana"},
"collectorCollectTooltip":function(d){return "Kohia tētahi tuemi"},
"collectorCollectedEverything":function(d){return "E mihi ana! I kohia e koe "+maze_locale.p(d,"count",0,"en",{"one":"te tuemi ","other":"ngā tuemi "+maze_locale.n(d,"count")})+" katoa!"},
"collectorCollectedNothing":function(d){return "Me hanga waehere tonu! Me mātua kohikohi i te nui o ngā tuemi ka taea."},
"collectorCollectedSome":function(d){return "Pāia! I kohia e koe "+maze_locale.p(d,"count",0,"en",{"one":"tētahi tuemi ","other":"e "+maze_locale.n(d,"count")+" katoa ngā tuemi"})+"!"},
"collectorCollectedNotEnough":function(d){return "Haere tonu me te hanga waehere! Me kohikohi kotahi ia nei "+maze_locale.p(d,"goal",0,"en",{"one":"1 item","other":maze_locale.n(d,"goal")+" items"})+"."},
"collectorCollectedTooMany":function(d){return "He iti noa iho ngā tuemi o tēnei mokowā hei kohikohi māku."},
"collectorTooManyBlocks":function(d){return "E whakaae noa iho ki te whakamahi i ngā paraka e "+maze_locale.v(d,"blockLimit")+". Tirohia tō waehere ka ngana anō ai!"},
"continue":function(d){return "Haere tonu"},
"corn":function(d){return "kānga"},
"cornTooltip":function(d){return "Hauhakehia ētahi kānga"},
"didNotCollectAllCrops":function(d){return "Me kia kaua ētahi huakai e mahue atu!"},
"didNotCollectEverything":function(d){return "Me kaua ētahi waireka, ētahi mīere rānei e mahue atu!"},
"didNotPlantEverywhere":function(d){return "Me whakatō i tētahi mea ki ia pūrei oneone!"},
"dig":function(d){return "tangohia 1"},
"digTooltip":function(d){return "tangohia 1 te wae oneone"},
"dirE":function(d){return "Rāwhiti"},
"dirN":function(d){return "Raki"},
"dirS":function(d){return "Tonga"},
"dirW":function(d){return "Uru"},
"doCode":function(d){return "mahia"},
"elseCode":function(d){return "kē"},
"emptyCropError":function(d){return "Kua pau katoa te huakai."},
"fill":function(d){return "whakakīia 1"},
"fillN":function(d){return "whakakīia "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "whakakīia te tapawhā"},
"fillStack":function(d){return "whakakīia te putu "+maze_locale.v(d,"shovelfuls")+" rua"},
"fillTooltip":function(d){return "hoatu 1 te wae oneone"},
"finalLevel":function(d){return "Hūrō! Kua oti i a koe te panga whakamutunga."},
"flowerEmptyError":function(d){return "Kua pau katoa te waireka o tō putiputi."},
"get":function(d){return "get"},
"goal":function(d){return "goal"},
"has":function(d){return "he"},
"haslettuce":function(d){return "he rētihi"},
"hascorn":function(d){return "he kānga"},
"haspumpkin":function(d){return "he paukena"},
"heightParameter":function(d){return "teitei"},
"holePresent":function(d){return "he rua"},
"honey":function(d){return "mahi mīere"},
"honeyAvailable":function(d){return "mīere"},
"honeyTooltip":function(d){return "Mahi mīere i te waireka"},
"honeycombFullError":function(d){return "Karekau he wāhanga o tēnei hanikoma e wātea ana ki te mahi mīere anō."},
"ifCode":function(d){return "mēnā"},
"ifFlowerTooltip":function(d){return "Mēnā he putiputi/hanikoma kei tētahi ahunga kua tohua, me mahi hohenga."},
"ifInRepeatError":function(d){return "Me whai paraka \"mēnā\" ki roto i tētahi paraka \"tōai\". Me e raru ana koe, tēnā tirohia te taumata o mua me te kite i pēhea."},
"ifOnlyFlowerTooltip":function(d){return "Mēnā he putiputi kei tētahi ahunga kua tohua, me mahi hohenga."},
"ifPathAhead":function(d){return "mēnā ara ki mua"},
"ifTooltip":function(d){return "Mēnā he ara kei tētahi ahunga kua tohua, me mahi hohenga."},
"ifelseFlowerTooltip":function(d){return "Mēnā he putiputi/hanikoma kei tētahi ahunga kua tohua, me mahi i te rārangi hohenga tuatahi. Mena karekau, mahi i rārangi hohenga tuarua."},
"ifelseTooltip":function(d){return "Mēnā ara kei tētahi ahunga kua tohua, me mahi i te rārangi hohenga tuatahi. Mena karekau, mahi i rārangi hohenga tuarua."},
"insufficientHoney":function(d){return "Me hanga koe i te nui o te mīere e tika ana."},
"insufficientNectar":function(d){return "Me kohikohi koe i te nui o te waireka e tika ana."},
"lettuce":function(d){return "rētihi"},
"lettuceTooltip":function(d){return "Hauhakehia ētahi rētihi"},
"make":function(d){return "hangaia"},
"moveBackward":function(d){return "neke ki muri"},
"moveEastTooltip":function(d){return "Nekehia ahau kia kotahi te āputa ki te rāwhiti."},
"moveForward":function(d){return "neke ki mua"},
"moveForwardTooltip":function(d){return "Nekehia ahau kia kotahi te āputa ki mua."},
"moveNorthTooltip":function(d){return "Nekehia ahau kia kotahi te āputa ki te raki."},
"moveSouthTooltip":function(d){return "Nekehia ahau kia kotahi te āputa ki te tonga."},
"moveTooltip":function(d){return "Nekehia ahau kia kotahi te āputa ki mua/muri"},
"moveWestTooltip":function(d){return "Nekehia ahau kia kotahi te āputa ki te uru."},
"nectar":function(d){return "tiki waireka"},
"nectarRemaining":function(d){return "waireka"},
"nectarTooltip":function(d){return "Tiki waireka i tētahi putiputi"},
"nextLevel":function(d){return "Hūrō! Kua oti i a koe tēnei panga."},
"no":function(d){return "Kāore"},
"noPathAhead":function(d){return "kua aukatingia te ara"},
"noPathLeft":function(d){return "karekau he ara ki te taha mauī"},
"noPathRight":function(d){return "karekau he ara ki te taha matau"},
"notAtFlowerError":function(d){return "E āhei ana te tiki waireka i te putiputi anake."},
"notAtHoneycombError":function(d){return "E āhei ana te mahi mīere i tētahi hanikoma noa iho."},
"numBlocksNeeded":function(d){return "E āhei ana tēnei panga te whakaoti me ngā paraka e %1."},
"pathAhead":function(d){return "he ara ki mua"},
"pathLeft":function(d){return "mēnā he ara ki te taha mauī"},
"pathRight":function(d){return "mēnā he ara ki te taha matau"},
"pick":function(d){return "kato"},
"pilePresent":function(d){return "he pūkei"},
"plant":function(d){return "whakatō"},
"plantInNonSoilError":function(d){return "E whakaae ana kia whakatōkia e au tētahi ki te oneone hou anake."},
"plantTooltip":function(d){return "Whakatōkia he pihi"},
"pumpkin":function(d){return "paukena"},
"pumpkinTooltip":function(d){return "Hauhake i tētahi paukena"},
"putdownTower":function(d){return "whakatūria he pourewa"},
"removeAndAvoidTheCow":function(d){return "tangohia 1, karohia te kau"},
"removeN":function(d){return "tangohia kia "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "tangohia te pūkei"},
"removeSquare":function(d){return "tangohia te tapawhā"},
"removeStack":function(d){return "tangohia tētahi putunga "+maze_locale.v(d,"shovelfuls")+" pūkei"},
"repeatCarefullyError":function(d){return "Ki te whakaoti i tēnei, me āta whakaaro ki te tauira o ngā nekehanga e rua me te huringa kotahi ka hoatu ki te paraka \"tōai\". Kei te pai noa iho mena he huringa anō kei te mutunga."},
"repeatUntil":function(d){return "tōaitia kia"},
"repeatUntilBlocked":function(d){return "mēnā he ara kei mua tonu"},
"repeatUntilFinish":function(d){return "tōaitia kia mutu rā anō"},
"soil":function(d){return "oneone"},
"sprout":function(d){return "pihi"},
"step":function(d){return "Hipanga"},
"totalHoney":function(d){return "tapeke mīere"},
"totalNectar":function(d){return "tapeke waireka"},
"turnLeft":function(d){return "huri whakatemauī"},
"turnRight":function(d){return "huri whakatematau"},
"turnTooltip":function(d){return "Ka hurihia ahau ki te taha mauī, taha matau rānei mā te 90 putu."},
"uncheckedCloudError":function(d){return "Me mātua tirotiro i ngā kapua katoa kei tūpono he putiputi, he hanikoma rānei."},
"uncheckedPurpleError":function(d){return "Me mātua tirotiro i ngā putiputi tawa katoa kei tūpono he waireka ō rātou"},
"whileMsg":function(d){return "i te"},
"whileTooltip":function(d){return "Tōaitia ngā hohenga kua pōkaitia kia tae rā anō ki te pito mutunga."},
"word":function(d){return "Kimihia te kupu"},
"wrongCropError":function(d){return "Tē taea e au te huakai te hauhake i konei."},
"yes":function(d){return "Āe"},
"youSpelled":function(d){return "Nāu i tātaki i te kupu"}};