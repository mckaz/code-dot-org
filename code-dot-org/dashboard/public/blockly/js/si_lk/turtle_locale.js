var turtle_locale = {lc:{"ar":function(n){
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
v:function(d,k){turtle_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){turtle_locale.c(d,k);return d[k] in p?p[d[k]]:(k=turtle_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){turtle_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).turtle_locale = {
"blocksUsed":function(d){return "භාවිත කරන ලද කැබලි ගණන:%1"},
"branches":function(d){return "ශාඛා"},
"catColour":function(d){return "පාට"},
"catControl":function(d){return "ලූපයන්"},
"catMath":function(d){return "ගණිත"},
"catProcedures":function(d){return "ශ්‍රිතයන්"},
"catTurtle":function(d){return "ක්‍රියාවන්"},
"catVariables":function(d){return "විචල්‍යන්"},
"catLogic":function(d){return "තර්කය"},
"colourTooltip":function(d){return "පැන්සලයෙ පාට වෙනස් වේ."},
"createACircle":function(d){return "රවුමක් නිර්මාන කරන්න"},
"createSnowflakeSquare":function(d){return "සමචතුරශ්‍රාකාර හිම බිඳිත්තක් නිර්මාණය කරන්න"},
"createSnowflakeParallelogram":function(d){return "සමාන්තරාශ්‍රාකාර හිම බිඳිත්තක් නිර්මාණය කරන්න"},
"createSnowflakeLine":function(d){return "රේඛීය හිම බිඳිත්තක් නිර්මාණය කරන්න"},
"createSnowflakeSpiral":function(d){return "සර්පිලාකාර හිම බිඳිත්තක් නිර්මාණය කරන්න"},
"createSnowflakeFlower":function(d){return "මලක් වැනි හිම බිඳිත්තක් නිර්මාණය කරන්න"},
"createSnowflakeFractal":function(d){return "භාගික හිම බිඳිත්තක් නිර්මාණය කරන්න"},
"createSnowflakeRandom":function(d){return "අහඹු හැඩැති හිම බිඳිත්තක් නිර්මාණය කරන්න"},
"createASnowflakeBranch":function(d){return "හිම පියලි ශාඛාවක් නිර්මාණය කරන්න"},
"degrees":function(d){return "අංශක​"},
"depth":function(d){return "ගැඹුර​"},
"dots":function(d){return "පික්සල"},
"drawACircle":function(d){return "රවුමක් අඳින්න"},
"drawAFlower":function(d){return "මලක් අඳින්න"},
"drawAHexagon":function(d){return "ෂඩස්‍රයක් අඳින්න"},
"drawAHouse":function(d){return "ගෙයක් අඳින්න"},
"drawAPlanet":function(d){return "ග්‍රහලොවක් අඳින්න"},
"drawARhombus":function(d){return "රොම්බසයක් අඳින්න"},
"drawARobot":function(d){return "රොබෝවෙක් අදින්න"},
"drawARocket":function(d){return "රොකටයක් අදින්න"},
"drawASnowflake":function(d){return "හිම පියල්ලක් අඳින්න"},
"drawASnowman":function(d){return "හිම මිනිසෙක් අඳින්න"},
"drawASquare":function(d){return "සමචතුරස්‍රයක් අඳින්න"},
"drawAStar":function(d){return "තරුවක් අඳින්න"},
"drawATree":function(d){return "ගසක් අඳින්න"},
"drawATriangle":function(d){return "ත්‍රිකොණයක් අඳින්න"},
"drawUpperWave":function(d){return "ඉහළ තරංගයක් අඳින්න"},
"drawLowerWave":function(d){return "අඩු තරංගයක් අඳින්න"},
"drawSticker":function(d){return "ස්ටිකරයක් අඳින්න"},
"heightParameter":function(d){return "උස"},
"hideTurtle":function(d){return "චිත්‍ර ශිල්පියා සඟවන්න"},
"jump":function(d){return "පනින්න"},
"jumpTo":function(d){return "ට පනින්න"},
"jumpBackward":function(d){return "වරක් පිටිපස්සට යන්න"},
"jumpForward":function(d){return "වරක් ඉදිරියට යන්න"},
"jumpTooltip":function(d){return "කිසිම ලකුණක් ඉතිරි නොකර චිත්‍ර ශිල්පියා පියවර කරන්න."},
"jumpEastTooltip":function(d){return "කිසිම ලකුණක් ඉතිරි නොකර චිත්‍ර ශිල්පියා නැගෙනහිරට පියවර කරන්න."},
"jumpNorthTooltip":function(d){return "කිසිම ලකුණක් ඉතිරි නොකර චිත්‍ර ශිල්පියා උතුරට පියවර කරන්න."},
"jumpNortheastTooltip":function(d){return "කිසිම සලකුණක් ඉතිරි නොකර චිත්‍ර ශිල්පියා ඊසාන දෙසට චලනය කරන්න."},
"jumpNorthwestTooltip":function(d){return "කිසිම සලකුණක් ඉතිරි නොකර චිත්‍ර ශිල්පියා වයඹ දෙසට චලනය කරන්න."},
"jumpSouthTooltip":function(d){return "කිසිම ලකුණක් ඉතිරි නොකර චිත්‍ර ශිල්පියා දකුණට පියවර කරන්න."},
"jumpSoutheastTooltip":function(d){return "කිසිම සලකුණක් ඉතිරි නොකර චිත්‍ර ශිල්පියා ගිණිකොණ දෙසට චලනය කරන්න."},
"jumpSouthwestTooltip":function(d){return "කිසිම සලකුණක් ඉතිරි නොකර චිත්‍ර ශිල්පියා නිරිත දෙසට චලනය කරන්න."},
"jumpWestTooltip":function(d){return "කිසිම ලකුණක් ඉතිරි නොකර චිත්‍ර ශිල්පියා බටහිරට පියවර කරන්න."},
"lengthFeedback":function(d){return "ඔබ නිවරදියි පියවර දිග හැර."},
"lengthParameter":function(d){return "දිග"},
"loopVariable":function(d){return "බාධා කරන්න"},
"moveBackward":function(d){return "ආපස්සට පියවර"},
"moveEastTooltip":function(d){return "චිත්‍ර ශිල්පියා නැගෙනහිරට පියවර කරන්න."},
"moveForward":function(d){return "ඉදිරියට පියවර"},
"moveForwardTooltip":function(d){return "චිත්‍ර ශිල්පියා ඉදිරියට පියවර කරන්න."},
"moveNorthTooltip":function(d){return "චිත්‍ර ශිල්පියා උතුරට පියවර කරන්න."},
"moveNortheastTooltip":function(d){return "චිත්‍ර ශිල්පියා ඊසාන දෙසට චලනය කරන්න."},
"moveNorthwestTooltip":function(d){return "ශිල්පියා වයඹ දෙසට චලනය කරන්න."},
"moveSouthTooltip":function(d){return "චිත්‍ර ශිල්පියා දකුණට පියවර කරන්න."},
"moveSoutheastTooltip":function(d){return "චිත්‍ර ශිල්පියා ගිණිකොණ දෙසට චලනය කරන්න."},
"moveSouthwestTooltip":function(d){return "චිත්‍ර ශිල්පියා නිරිත දෙසට චලනය කරන්න."},
"moveWestTooltip":function(d){return "චිත්‍ර ශිල්පියා බටහිරට පියවර කරන්න."},
"moveTooltip":function(d){return "චිත්‍ර ශිල්පියා ඉදිරියට හෝ ආපස්සට නිශ්චිත ප්‍රමානයකින් පියවර කරන්න."},
"notBlackColour":function(d){return "ප්‍රහේලිකාවේ වර්ණය සඳහා කලු පාට හැර වෙනත් පැහැයක් තෝරා ගත යුතුය."},
"numBlocksNeeded":function(d){return "ප්‍රහේලිකාව කැබැලි %1කින් විසඳිය හැකි මුත් ඔබ කැබැලි %2ක් භාවිත කර ඇත."},
"penDown":function(d){return "පැන්සල පහතට"},
"penTooltip":function(d){return "චිත්‍රය ඇඳීමට හෝ ඇඳීමෙන් ඉවත් වීමට පැන්සල උඩට හෝ පහතට චලනය කරන්න."},
"penUp":function(d){return "පැන්සල උඩට"},
"reinfFeedbackMsg":function(d){return "මෙන්න ඔබේ චිත්‍රය. ඔබට තවදුරටත් මෙය ඇඳිය හැකියි. නැතහොත් ඊළඟ ප්‍රහේලිකාවට යා හැකියි."},
"setAlpha":function(d){return "ඇල්ෆා සකසන්න"},
"setCharacter":function(d){return "set character to "+turtle_locale.v(d,"character")},
"setColour":function(d){return "පැහැය සකසන්න"},
"setPattern":function(d){return "රටාව සකස් කිරීම"},
"setWidth":function(d){return "පළල සකසන්න"},
"shareDrawing":function(d){return "ඔබගේ ඇඳීම බෙදාගන්න:"},
"showMe":function(d){return "මාව පෙන්වන්න"},
"showTurtle":function(d){return "චිත්‍ර ශිල්පියා පෙන්වන්න"},
"sizeParameter":function(d){return "විශාලත්වය"},
"step":function(d){return "පියවර"},
"tooFewColours":function(d){return "අවම වශයෙන් වර්ණ %1ක් වත් භාවිත කරන්න. ඔබ භාවිත කර ඇත්තේ %2යි."},
"turnLeft":function(d){return "කින් වමට හැරෙන්න"},
"turnRight":function(d){return "කින් දකුණට හැරෙන්න"},
"turnRightTooltip":function(d){return "චිත්‍ර ශිල්පියා නිශ්චිත කෝණයකින් දකුනට හරවන්න."},
"turnTooltip":function(d){return "චිත්‍ර ශිල්පියා නිශ්චිත කෝණයකින් දකුනට හෝ වමට හරවන්න."},
"turtleVisibilityTooltip":function(d){return "චිත්‍ර ශිල්පියා දෘශ්යමාන හෝ අදෘශ්යමාන කරන්න."},
"widthTooltip":function(d){return "පැන්සලේ පළල වෙනස් කිරීම."},
"wrongColour":function(d){return "වැරදි වර්ණය ඇත්තේ ඔබේ පින්තූර ය තුලයි. මෙම ප්‍රහේලිකාව සඳහා %1 විය යුතුයි."}};