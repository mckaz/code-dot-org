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
"at":function(d){return "හිදී"},
"atFlower":function(d){return "මලේදී"},
"atHoneycomb":function(d){return "මී වදයේදී"},
"avoidCowAndRemove":function(d){return "ගවයාව මගහැර 1ක් ඉවත් කරන්න"},
"collect":function(d){return "එකතු කරන්න"},
"collectiblePresent":function(d){return "නිධානයක් පිලිබඳ හෝඩුවාවක් ඇත"},
"collectorCollectTooltip":function(d){return "කුමක් හෝ දෙයක් එකතු කරගන්න"},
"collectorCollectedEverything":function(d){return "සුභ පැතුම්! ඔබ විසින් භාණ්ඩ "+maze_locale.v(d,"count")+" ම එකතු කර ඇත!"},
"collectorCollectedNothing":function(d){return "ඔබට හැකි තරම් භාණ්ඩ එකතු කර ගත හැකියි. ඉදිරියටම යන්න."},
"collectorCollectedSome":function(d){return "සුභ පැතුම්! ඔබ විසින් භාණ්ඩ "+maze_locale.v(d,"count")+" ම එකතු කර ඇත!"},
"collectorCollectedNotEnough":function(d){return "Keep coding! You need to collect at least "+maze_locale.p(d,"goal",0,"en",{"one":"1 item","other":maze_locale.n(d,"goal")+" items"})+"."},
"collectorCollectedTooMany":function(d){return "එම ඉඩ තුල මට එකතු කිරීමට ප්රමාණවත් තරම් භාණ්ඩ නැත."},
"collectorTooManyBlocks":function(d){return "ඔබට භාවිත කල හැක්කේ කැබැලි "+maze_locale.v(d,"blockLimit")+" ක් පමණයි. නැවතත් උත්සාහ කර බලන්න!"},
"continue":function(d){return "ඉදිරියට යන්න"},
"corn":function(d){return "ඉරිඟු"},
"cornTooltip":function(d){return "ඉරිඟු අස්වැන්නේ කොටසක් නෙලාගන්න"},
"didNotCollectAllCrops":function(d){return "බෝග වගාබිම් පසුකර මඟනොහැරීමට වගබලාගන්න!"},
"didNotCollectEverything":function(d){return "පලතුරු යුෂ හෝ පැණි දමා එන්න එපා!"},
"didNotPlantEverywhere":function(d){return "සෑම පාත්තියකම පැළැටියක් රෝපණය කිරීමට වගබලාගන්න!"},
"dig":function(d){return "1ක් ඉවත් කරන්න"},
"digTooltip":function(d){return "පස් ඒකක 1 ඉවත් කරන්න"},
"dirE":function(d){return "නැ"},
"dirN":function(d){return "උ"},
"dirS":function(d){return "ද"},
"dirW":function(d){return "බ"},
"doCode":function(d){return "do"},
"elseCode":function(d){return "else"},
"emptyCropError":function(d){return "එම බෝග සියල්ල ඉවරයි."},
"fill":function(d){return "1ක් පුරවන්න"},
"fillN":function(d){return maze_locale.v(d,"shovelfuls")+" පුරවන්න"},
"fillSquare":function(d){return "චතුරශ්‍රය පුරවන්න"},
"fillStack":function(d){return maze_locale.v(d,"shovelfuls")+" හිඩැස් ගොඩ ගසන්න"},
"fillTooltip":function(d){return "පස් ඒකක 1ක් ස්ථාන ගත කරන්න"},
"finalLevel":function(d){return "සුභපැතුම්! ඔබ අවසාන ප්‍රහේලිකාව විසඳා ඇත."},
"flowerEmptyError":function(d){return "ඔබ සිටින මල තුල තව දුරටත් මල්පැණි නැත."},
"get":function(d){return "ලබාගන්න"},
"goal":function(d){return "goal"},
"has":function(d){return "ඇත"},
"haslettuce":function(d){return "මෙන්න සළාද කොළ"},
"hascorn":function(d){return "බඩ ඉරිඟු ඇත"},
"haspumpkin":function(d){return "වට්ටක්කා ඇත"},
"heightParameter":function(d){return "උස"},
"holePresent":function(d){return "සිදුරක් ඇත"},
"honey":function(d){return "මී පැණි සකසන්න"},
"honeyAvailable":function(d){return "මී පැණි"},
"honeyTooltip":function(d){return "මී පැණි වලින් පැණි සකසන්න"},
"honeycombFullError":function(d){return "මෙම මීවදයෙ මී පැනි එකතු කරන්න තව ඉඩ නැත."},
"ifCode":function(d){return "if"},
"ifFlowerTooltip":function(d){return "සඳහන් කර ඇති දිශාවේ මලක් හෝ පැණි කුලකයක් තිබේ නම් විධාන කිහිපයක් ක්‍රියාත්මක කර බලන්න."},
"ifInRepeatError":function(d){return "ඔබට නැවතත් ක්‍රියාත්මක වන කැබැල්ල ඇතුලත කොන්දේසි පරික්ශා කිරීමේ කැබැල්ලක් අවශ්‍ය ඇත. ඔබට ගැටලුවක් ඇතිවුණොත් පෙර අවස්ථාවට ගොස් පරික්ශා කර බලන්න."},
"ifOnlyFlowerTooltip":function(d){return "සඳහන් කර ඇති දිශාවේ මලක් තිබේනම් විධාන කිහිපයක් ක්‍රියාත්මක කර බලන්න."},
"ifPathAhead":function(d){return "පාරක් තිබෙයි නම්"},
"ifTooltip":function(d){return "සඳහන් කර ඇති දිශාවේ මාර්ගයක් තිබේනම් විධාන කිහිපයක් ක්‍රියාත්මක කර බලන්න."},
"ifelseFlowerTooltip":function(d){return "සඳහන් කර ඇති මාර්ගයේ මලක් හෝ පැණි කුලකයක් තිබේනම් මුලින්ම ඇති කැබැල්ල ක්‍රියාත්මක කරන්න. නැතහොත් දෙවෙනි කැබැල්ල ක්‍රියාත්මක කරන්න."},
"ifelseTooltip":function(d){return "සඳහන් කර ඇති මාර්ගයේ මාර්ගයක් තිබේනම් මුලින්ම ඇති කැබැල්ල ක්‍රියාත්මක කරන්න. නැතහොත් දෙවෙනි කැබැල්ල ක්‍රියාත්මක කරන්න."},
"insufficientHoney":function(d){return "ඔබ විසින් නියමිත පැණි ප්‍රමාණය එකතු කර ගත යුතුය."},
"insufficientNectar":function(d){return "ඔබ විසින් නියමිත පැණි ප්‍රමාණය එකතු කර ගත යුතුය."},
"lettuce":function(d){return "සළාද කොළ"},
"lettuceTooltip":function(d){return "සළාද කොළ ටිකක් නෙලාගන්න"},
"make":function(d){return "සකසන්න"},
"moveBackward":function(d){return "පසුපසට යන්න"},
"moveEastTooltip":function(d){return "මාව එක පියවරකින් නැගෙනහිරට ගෙන යන්න."},
"moveForward":function(d){return "ඉදිරියට යන්න"},
"moveForwardTooltip":function(d){return "මාව එක පියවරකින් ඉදිරියට ගෙන යන්න."},
"moveNorthTooltip":function(d){return "මාව එක පියවරකින් උතුරට ගෙන යන්න."},
"moveSouthTooltip":function(d){return "මාව එක පියවරකින් දකුණට ගෙන යන්න."},
"moveTooltip":function(d){return "මාව එක පියවරකින් ඉදිරියට/පසුපසට ගෙන යන්න"},
"moveWestTooltip":function(d){return "මාව එක පියවරකින් බටහිරට ගෙන යන්න."},
"nectar":function(d){return "මල්පැණි ලබාගන්න"},
"nectarRemaining":function(d){return "මල් පැණි"},
"nectarTooltip":function(d){return "මලකින් මල් පැණි ලබාගන්න"},
"nextLevel":function(d){return "සුබ පැතුම්! ඔබට මෙම ප්‍රහේලිකාව සම්පූර්ණ කර ඇත."},
"no":function(d){return "නැහැ"},
"noPathAhead":function(d){return "මාර්ගය අවහිර කර ඇත"},
"noPathLeft":function(d){return "වමට මාර්ගයක් නොමැත"},
"noPathRight":function(d){return "දකුණට මාර්ගයක් නොමැත"},
"notAtFlowerError":function(d){return "ඔබට පැණි ලබා ගත හැක්කේ මලකින් පමණයි."},
"notAtHoneycombError":function(d){return "පැණි කුලකයකින් ලබා ගත හැක්කේ පැණි පමණයි."},
"numBlocksNeeded":function(d){return "ප්‍රහේලිකාව කැබැලි %1කින් සම්පූර්ණ කල හැකියි."},
"pathAhead":function(d){return "මාර්ගය ඉදිරියෙන්"},
"pathLeft":function(d){return "if path to the left"},
"pathRight":function(d){return "if path to the right"},
"pick":function(d){return "අහුලන්න"},
"pilePresent":function(d){return "කුළුණක් තියෙනවා"},
"plant":function(d){return "පැළෑටිය"},
"plantInNonSoilError":function(d){return "මට කිසිවක් වගා කර හැක්කේ නැවුම් පසේ පමනයි."},
"plantTooltip":function(d){return "පැළ රිකිල්ලක් රෝපණය කරන්න"},
"pumpkin":function(d){return "වට්ටක්කා"},
"pumpkinTooltip":function(d){return "වට්ටක්කා අස්වැන්න නෙලාගන්න"},
"putdownTower":function(d){return "කුළුණ බිඳ දමන්න"},
"removeAndAvoidTheCow":function(d){return "1 ක් ඉවත් කර ගවයාව මග හරින්න"},
"removeN":function(d){return maze_locale.v(d,"shovelfuls")+" ඉවත් කරන්න"},
"removePile":function(d){return "ගොඩක් ඉවත් කරන්න"},
"removeSquare":function(d){return "චතුරශ්‍රය ඉවත් කරන්න"},
"removeStack":function(d){return maze_locale.v(d,"shovelfuls")+" ගොඩම ඉවත් කරන්න"},
"repeatCarefullyError":function(d){return "මෙය විසඳීමට නම්, චලන දෙකකින් යුතු විවිධ ආකාර උත්සාහ කර නැවත ක්‍රියාත්මක කිරීමේ විධානය ක්‍රියාත්මක කරන්න. අවසානයේ අමතර චලනයක් එක් වුණාට ගැටලුවක් නැත."},
"repeatUntil":function(d){return "repeat until"},
"repeatUntilBlocked":function(d){return "ඉදිරියෙන් මාර්ගයක් ඇති තුරු"},
"repeatUntilFinish":function(d){return "repeat until finish"},
"soil":function(d){return "පස"},
"sprout":function(d){return "අංකුරය"},
"step":function(d){return "පියවර"},
"totalHoney":function(d){return "සම්පූර්ණ මී පැණි ප්‍රමාණය"},
"totalNectar":function(d){return "සම්පූර්ණ මල් පැණි ප්‍රමාණය"},
"turnLeft":function(d){return "වමට හැරෙන්න"},
"turnRight":function(d){return "දකුණට හැරෙන්න"},
"turnTooltip":function(d){return "මාව වමට හෝ දකුණට අංශක 90 කින් හරවන්න."},
"uncheckedCloudError":function(d){return "මල් හෝ මී වද ඇත්දැයි සියලුම වලාකුළු පරීක්ෂා කිරීමට වග බලා ගන්න."},
"uncheckedPurpleError":function(d){return "මල්පැණි ඇත්දැයි සියලුම දම් පාට මල් පරීක්ෂා කිරීමට වග බලා ගන්න"},
"whileMsg":function(d){return "එතෙක්"},
"whileTooltip":function(d){return "අවසන් අදියරට පැමිණෙන තුරු අඩංගු කර ඇති විධාන ක්‍රියාත්මක කරන්න."},
"word":function(d){return "වචනය සොයන්න"},
"wrongCropError":function(d){return "මට ඒ වගාබිමේ අස්වැන්න මෙතැන සිට නෙලාගැනීමට නොහැක."},
"yes":function(d){return "ඔව්"},
"youSpelled":function(d){return "ඔයා කිව්වා"}};