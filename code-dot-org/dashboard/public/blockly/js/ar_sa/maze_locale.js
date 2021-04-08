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
"at":function(d){return "عند"},
"atFlower":function(d){return "في زهرة"},
"atHoneycomb":function(d){return "في قرص العسل"},
"avoidCowAndRemove":function(d){return "تجنب البقرة وإزالة 1"},
"collect":function(d){return "جمع"},
"collectiblePresent":function(d){return "هناك بعض الكنوز"},
"collectorCollectTooltip":function(d){return "اجمع عنصراً"},
"collectorCollectedEverything":function(d){return "تهانينا! لقد قمت بجمع كل "+maze_locale.v(d,"count")+" العناصر!"},
"collectorCollectedNothing":function(d){return "استمر بكتابة التعليمات البرمجية! أنت تحتاج لجمع أكبر قدر من العناصر بقدر ما يمكنك."},
"collectorCollectedSome":function(d){return "عمل عظيم! لقد جمعت "+maze_locale.v(d,"count")+" من العناصر!"},
"collectorCollectedNotEnough":function(d){return "Keep coding! You need to collect at least "+maze_locale.p(d,"gçàoal",0,"ar",{"one":"1 item","other":maze_locale.n(d,"gçàoal")+" items"})+"."},
"collectorCollectedTooMany":function(d){return "أن الفضاء لا تملك ما يكفي من المواد لكي أجمعها."},
"collectorTooManyBlocks":function(d){return "يمكنك فقط استخدام "+maze_locale.v(d,"blockLimit")+" كتل. ألقي نظرة على التعليمات البرمجية الخاصة بك و حاول مجدداً!"},
"continue":function(d){return "إستمرار"},
"corn":function(d){return "الذرة"},
"cornTooltip":function(d){return "حصاد بعض الذرة"},
"didNotCollectAllCrops":function(d){return "تأكد من أنك لا تترك أيا من الرحيق أو العسل ورائك!"},
"didNotCollectEverything":function(d){return "تأكد من أنك لا تترك أيا من الرحيق أو العسل ورائك!"},
"didNotPlantEverywhere":function(d){return "تأكد من أن تزرع شيء بكل بقعة متربة!"},
"dig":function(d){return "إزالة 1"},
"digTooltip":function(d){return "ازل وحدة 1 من التراب"},
"dirE":function(d){return "ش"},
"dirN":function(d){return "شم"},
"dirS":function(d){return "ج"},
"dirW":function(d){return "شر"},
"doCode":function(d){return "نفّذ"},
"elseCode":function(d){return "وإلا"},
"emptyCropError":function(d){return "هذا المحصول ذهب كل شيء."},
"fill":function(d){return "تعبئة 1"},
"fillN":function(d){return "تعبئة "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "تعبئة مربع"},
"fillStack":function(d){return "ملء كومة من ثقوب "+maze_locale.v(d,"shovelfuls")},
"fillTooltip":function(d){return "وضع وحدة 1 من التراب"},
"finalLevel":function(d){return "تهانينا! لقد قمت بحل اللغز الأخير."},
"flowerEmptyError":function(d){return "الزهرة التي تقف عليها لم تعد تحتوي على المزيد من الرحيق."},
"get":function(d){return "الحصول على"},
"goal":function(d){return "goal"},
"has":function(d){return "قد"},
"haslettuce":function(d){return "يوجد خس"},
"hascorn":function(d){return "هناك ذرة"},
"haspumpkin":function(d){return "هناك قرع"},
"heightParameter":function(d){return "الارتفاع"},
"holePresent":function(d){return "يوجد هناك ثقب"},
"honey":function(d){return "إنتاج العسل"},
"honeyAvailable":function(d){return "العسل"},
"honeyTooltip":function(d){return "إنتاج العسل من الرحيق"},
"honeycombFullError":function(d){return "لا يتسع قرص العسل هذا للمزيد من العسل."},
"ifCode":function(d){return "إذا"},
"ifFlowerTooltip":function(d){return "اذا كان هناك زهرة / عسل في الاتجاه المحدد، عندها قم بتنفيذ ببعض الإجراءات."},
"ifInRepeatError":function(d){return "أنت بحاجة إلى كتلة \"إذا\" داخل كتلة \"تكرار\". إذا كنت تواجه مشاكل، حاول المستوى السابق مرة أخرى لمعرفة كيف يعمل."},
"ifOnlyFlowerTooltip":function(d){return "اذا كان هناك زهره في اتجاه محدد. عندها قم ببعض الإجراءت."},
"ifPathAhead":function(d){return "إذا كان الطريق سالكا"},
"ifTooltip":function(d){return "إذا كان الطريق سالكا في الاتجاه المحدد، قم بتنفيذ بعض الإجراءات."},
"ifelseFlowerTooltip":function(d){return "إذا كانت هناك زهرة / عسل في الاتجاه المحدد، قم بتنفيذ المربع البرمجي الأول من الإجراءات. وإلا، قم بتنفيذ المربع البرمجي الثاني من الإجراءات."},
"ifelseTooltip":function(d){return "إذا كان الطريق سالكا في الاتجاه المحدد، قم بتنفيذ المربع البرمجي الأول من الإجراءات. وإلا، قم بتنفيذ المربع البرمجي الثاني من الإجراءات."},
"insufficientHoney":function(d){return "انت بحاجة لصنع الكمية الصحيحة من العسل. "},
"insufficientNectar":function(d){return "انت بحاجة لجمع الكميه الصحيحة من الرحيق."},
"lettuce":function(d){return "خس"},
"lettuceTooltip":function(d){return "حصد بعض الخس"},
"make":function(d){return "إنتاج"},
"moveBackward":function(d){return "الانتقال للخلف"},
"moveEastTooltip":function(d){return "التحريك للشرق مسافة واحدة."},
"moveForward":function(d){return "تحريك إلى الأمام"},
"moveForwardTooltip":function(d){return "التحريك للأمام مقدار مسافة واحدة."},
"moveNorthTooltip":function(d){return "تحريك للشمال مسافة واحدة."},
"moveSouthTooltip":function(d){return "تحريك للجنوب مسافة واحدة."},
"moveTooltip":function(d){return "التحريك مسافة واحدة إلى الأمام / الخلف"},
"moveWestTooltip":function(d){return "تحريك للغرب مسافة واحدة."},
"nectar":function(d){return "الحصول على الرحيق"},
"nectarRemaining":function(d){return "رحيق"},
"nectarTooltip":function(d){return "الحصول على الرحيق من زهرة"},
"nextLevel":function(d){return "تهانينا! لقد قمت بإكمال هذا اللغز."},
"no":function(d){return "لا"},
"noPathAhead":function(d){return "الممر مغلق"},
"noPathLeft":function(d){return "لايوجد ممر على اليسار"},
"noPathRight":function(d){return "لايوجد ممر على اليمين"},
"notAtFlowerError":function(d){return "يمكنك فقط الحصول على الرحيق من زهرة."},
"notAtHoneycombError":function(d){return "يمكنك فقط إنتاج العسل من قُرص العسل."},
"numBlocksNeeded":function(d){return "يمكن حل هذا اللغز باستخدام %1 مربعات برمجية."},
"pathAhead":function(d){return "الممر سالك"},
"pathLeft":function(d){return "إذا يوجد ممر على اليسار"},
"pathRight":function(d){return "إذا يوجد ممر على اليمين"},
"pick":function(d){return "اختر"},
"pilePresent":function(d){return "هناك كومة"},
"plant":function(d){return "ازرع"},
"plantInNonSoilError":function(d){return "انا فقط استطيع زرع شيء في التربة الطازجة."},
"plantTooltip":function(d){return "أزرع البراعم"},
"pumpkin":function(d){return "اليقطين"},
"pumpkinTooltip":function(d){return "حصاد القرع"},
"putdownTower":function(d){return "ضع البرج"},
"removeAndAvoidTheCow":function(d){return "إزالة 1 وتجنب البقرة"},
"removeN":function(d){return "إزالة "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "إزالة كومة"},
"removeSquare":function(d){return "إزالة مربع"},
"removeStack":function(d){return "إزالة تكدس أكوام "+maze_locale.v(d,"shovelfuls")},
"repeatCarefullyError":function(d){return "لحل هذه المشكلة ، فكر بعناية بنمط يتكون من حركتين والتفاف واحد لوضعه في مجموعة \"تكرار\". لا بأس من عمل التفاف إضافي في النهاية."},
"repeatUntil":function(d){return "التكرار حتى"},
"repeatUntilBlocked":function(d){return "التكرار طالما الطريق سالكا"},
"repeatUntilFinish":function(d){return "التكرار حتى النهاية"},
"soil":function(d){return "التربة"},
"sprout":function(d){return "براعم"},
"step":function(d){return "الخطوة"},
"totalHoney":function(d){return "مجموع العسل"},
"totalNectar":function(d){return "مجموع الرحيق"},
"turnLeft":function(d){return "اتجه إلى اليسار"},
"turnRight":function(d){return "اتجه إلى اليمين"},
"turnTooltip":function(d){return "تحويل اتجاه اللاعب يمينا أو يسارا بمقدار 90 درجة."},
"uncheckedCloudError":function(d){return "تأكد من التحقق من جميع الغيوم لمعرفة فيما اذا كانت أزهارا أو عسلاً."},
"uncheckedPurpleError":function(d){return "تاكد من التحقق من جميع الزهور البنفسجية لمعرفة فيما إذا كان فيها رحيق"},
"whileMsg":function(d){return "التكرار طالما"},
"whileTooltip":function(d){return "تكرار الإجراءات المغلقة حتى الوصول إلى نقطة النهاية."},
"word":function(d){return "ابحث عن الكلمة"},
"wrongCropError":function(d){return "أنا لا استطيع حصاد هذا المحصول من هنا."},
"yes":function(d){return "نعم"},
"youSpelled":function(d){return "قمت بكتابة"}};