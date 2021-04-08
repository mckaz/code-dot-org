var craft_locale = {lc:{"ar":function(n){
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
v:function(d,k){craft_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){craft_locale.c(d,k);return d[k] in p?p[d[k]]:(k=craft_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){craft_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).craft_locale = {
"absolute":function(d){return "مُطلق"},
"agentGenericFailureMessage":function(d){return "استمر في البرمجة! تذكر استخدام العامل للمساعدة."},
"agentTooFewBlocksFailureMessage":function(d){return "حاول إضافة مربع واحد فقط في كل مرة لتوصيل العامل للمكان الصحيح."},
"at":function(d){return "عند"},
"agentDiamondPathCongrats":function(d){return "مبروك، لقد وجدت مكان الماسة! لقد جمعت "+craft_locale.p(d,"count",0,"ar",{"one":"ماسة واحدة","other":craft_locale.n(d,"count")+" ماسات"})+" حتى الآن!"},
"blockActionAdd":function(d){return "إضافة"},
"blockActionAttack":function(d){return "اهجم"},
"blockActionClone":function(d){return "استنسخ المربعات"},
"blockActionCloneFiltered":function(d){return "استنساخ فقط"},
"blockActionCollect":function(d){return "جمع"},
"blockActionCollectAll":function(d){return "اجمع الكل"},
"blockActionDestroyEntity":function(d){return "تختفي"},
"blockActionDetect":function(d){return "اكتشف"},
"blockActionDetectRedstone":function(d){return "اكتشف الحجر الأحمر"},
"blockActionDrop":function(d){return "اسقط"},
"blockActionDropAll":function(d){return "اترك الكل"},
"blockActionExecute":function(d){return "نفذ الأمر"},
"blockActionExplodeEntity":function(d){return "فجر"},
"blockActionFill":function(d){return "املأ من"},
"blockActionFlashEntity":function(d){return "فلاش"},
"blockActionGetItemCount":function(d){return "احصل على عدد العناصر"},
"blockActionGetItemCountInSlotNumber":function(d){return "احصل على عدد العناصر في الفتحة رقم"},
"blockActionGetItemDetail":function(d){return "احصل على وصف العنصر"},
"blockActionGetItemDetailInSlotNumber":function(d){return "احصل على وصف العنصر في الفتحة رقم"},
"blockActionGetItemSpace":function(d){return "احصل على مكان العنصر"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "احصل على مكان العنصر في الفتحة رقم"},
"blockActionGive":function(d){return "اعطي"},
"blockActionInspect":function(d){return "افحص"},
"blockActionInspectData":function(d){return "افحص البيانات"},
"blockActionKill":function(d){return "اقتل الهدف"},
"blockActionMove":function(d){return "تحريك"},
"blockActionMoveAway":function(d){return "تحرك بعيداً عن"},
"blockActionMoveForward":function(d){return "تحريك إلى الأمام"},
"blockActionMoveRandom":function(d){return "تحرك عشوائي"},
"blockActionMoveTo":function(d){return "تحرك إلى"},
"blockActionMoveToward":function(d){return "تحرك خطوة باتجاه"},
"blockActionPlaySound":function(d){return "تشغيل صوت"},
"blockActionRepeat":function(d){return "تكرار"},
"blockActionRepeatRandom":function(d){return "كرر عشوائي"},
"blockActionSetBlock":function(d){return "عين المربع الى"},
"blockActionSpawn":function(d){return "اظهر"},
"blockActionSummon":function(d){return "استدعي"},
"blockActionTeleport":function(d){return "انقل الهدف"},
"blockActionTeleportToPlayer":function(d){return "انتقل الى اللاعب"},
"blockActionTestForBlock":function(d){return "تختبر اذا كان نوع المربع"},
"blockActionTestForBlocks":function(d){return "تختبر اذا كان النمط بين"},
"blockActionToScore":function(d){return "إلى مجموع النقاط"},
"blockActionTransfer":function(d){return "انقل"},
"blockActionWait":function(d){return "انتظر"},
"blockActionWith":function(d){return "مع"},
"blockData":function(d){return "بيانات المربع"},
"blockDestroyBlock":function(d){return "كتلة التدمير"},
"blockIf":function(d){return "إذا كان"},
"blockIfLavaAhead":function(d){return "في حالة وجود حمم أمامك"},
"blockIs":function(d){return "هو"},
"blockMove":function(d){return "تحريك"},
"blockMoveBackward":function(d){return "الانتقال للخلف"},
"blockMoveForward":function(d){return "تحريك إلى الأمام"},
"blockPlace":function(d){return "ضع"},
"blockPlaceTorch":function(d){return "ضع المصباح"},
"blockPlaceXAheadAhead":function(d){return "في الأمام"},
"blockPlaceXAheadPlace":function(d){return "ضع"},
"blockPlaceXPlace":function(d){return "ضع"},
"blockPlantCrop":function(d){return "ازرع المحصول"},
"blockShear":function(d){return "قص"},
"blockTill":function(d){return "حتى"},
"blockTillSoil":function(d){return "احرث التربة"},
"blockTurn":function(d){return "إستدر"},
"blockTurnLeft":function(d){return "اتجه إلى اليسار"},
"blockTurnRight":function(d){return "اتجه إلى اليمين"},
"blockType":function(d){return "نوع المربع"},
"blockTypeBedrock":function(d){return "صخر الأديم"},
"blockTypeBricks":function(d){return "الطوب"},
"blockTypeClay":function(d){return "الطين"},
"blockTypeClayHardened":function(d){return "كتلة صلدة"},
"blockTypeCobblestone":function(d){return "حصاة"},
"blockTypeDirt":function(d){return "كتلة ترابية"},
"blockTypeDirtCoarse":function(d){return "كتلة ترابية خشنة"},
"blockTypeDoorIron":function(d){return "باب حديدي"},
"blockTypeEmpty":function(d){return "فارغ"},
"blockTypeFarmlandWet":function(d){return "أرض زراعية"},
"blockTypeGlass":function(d){return "زجاج"},
"blockTypeGlowstone":function(d){return "حجر مشع"},
"blockTypeGrass":function(d){return "عشب"},
"blockTypeGravel":function(d){return "حصى"},
"blockTypeLava":function(d){return "حمم"},
"blockTypeLogAcacia":function(d){return "خشب السنط"},
"blockTypeLogBirch":function(d){return "خشب البتولا"},
"blockTypeLogJungle":function(d){return "خشب الغابات"},
"blockTypeLogOak":function(d){return "خشب البلوط"},
"blockTypeLogSpruce":function(d){return "خشب أبيض"},
"blockTypeOreCoal":function(d){return "خام الفحم"},
"blockTypeOreDiamond":function(d){return "خام الماس"},
"blockTypeOreEmerald":function(d){return "خام الزمرد"},
"blockTypeOreGold":function(d){return "خام الذهب"},
"blockTypeOreIron":function(d){return "خام الحديد"},
"blockTypeOreLapis":function(d){return "خام الحصاة"},
"blockTypeOreRedstone":function(d){return "خام الحجر الأحمر"},
"blockTypePlanksAcacia":function(d){return "ألواح خشب السنط"},
"blockTypePlanksBirch":function(d){return "ألواح خشب البتولا"},
"blockTypePlanksJungle":function(d){return "ألواح خشب الغابات"},
"blockTypePlanksOak":function(d){return "ألواح خشب البلوط"},
"blockTypePlanksSpruce":function(d){return "ألواح الخشب الأبيض"},
"blockTypePressurePlateUp":function(d){return "لوحة الضغط"},
"blockTypeRail":function(d){return "قضيب"},
"blockTypeRailsRedstoneTorch":function(d){return "شعلة الحجر الأحمر"},
"blockTypeRedstoneWire":function(d){return "سلك الحجر الأحمر"},
"blockTypeSand":function(d){return "رمل"},
"blockTypeSandstone":function(d){return "حجر رملي"},
"blockTypeStone":function(d){return "حجر"},
"blockTypeTnt":function(d){return "تي. إن. تي"},
"blockTypeTree":function(d){return "شجرة"},
"blockTypeWater":function(d){return "ماء"},
"blockTypeWool":function(d){return "صوف"},
"blockTypeWoolBlue":function(d){return "صوف أزرق"},
"blockTypeWoolMagenta":function(d){return "صوف ارجواني"},
"blockTypeWoolOrange":function(d){return "صوف برتقالي"},
"blockTypeWoolPink":function(d){return "صوف زهري"},
"blockTypeWoolRed":function(d){return "صوف أحمر"},
"blockTypeWoolYellow":function(d){return "صوف أصفر"},
"blockWhileXAheadAhead":function(d){return "في الأمام"},
"blockWhileXAheadDo":function(d){return "نفّذ"},
"blockWhileXAheadWhile":function(d){return "أكرر طالما"},
"cancel":function(d){return "إلغاء"},
"cloneMode":function(d){return "وضع الاستنساخ"},
"cloneModeForce":function(d){return "أجبر"},
"cloneModeMove":function(d){return "تحريك"},
"cloneModeNormal":function(d){return "عادي"},
"connectToCodeConnection":function(d){return "لتشغيل هذا المشروع في الاصدار التعليمي من Minecraft، الرجاء استخدام تطبيق \"رمز الاتصال\"."},
"destination":function(d){return "الوجهة"},
"directionBack":function(d){return "الخلف"},
"directionDown":function(d){return "الأسفل"},
"directionForward":function(d){return "الأمام"},
"directionLeft":function(d){return "اليسار"},
"directionMiddle":function(d){return "المنتصف"},
"directionRight":function(d){return "اليمين"},
"directionUp":function(d){return "الأعلى"},
"downloadButton":function(d){return "تنزيل"},
"entityType":function(d){return "نوع الكيان"},
"entityTypeChicken":function(d){return "دجاجة"},
"entityTypeCow":function(d){return "بقرة"},
"entityTypeCreeper":function(d){return "وحش زاحف"},
"entityTypeIronGolem":function(d){return "الروبوت الحديدي"},
"entityTypePlayer":function(d){return "لاعب"},
"entityTypeSheep":function(d){return "خروف"},
"entityTypeZombie":function(d){return "زومبى"},
"eventTypeWhenAttacked":function(d){return "عند التعرض لهجوم"},
"eventTypeWhenDay":function(d){return "عند حلول النهار"},
"eventTypeWhenNight":function(d){return "عند حلول الليل"},
"eventTypeWhenRun":function(d){return "عند التشغيل"},
"eventTypeWhenSpawned":function(d){return "عند الظهور"},
"eventTypeWhenTouched":function(d){return "عند اللمس"},
"eventTypeWhenUsed":function(d){return "عند الاستخدام"},
"forever":function(d){return "إلى الأبد"},
"from":function(d){return "من"},
"generatedCodeDescription":function(d){return "بسحب الكتل ووضعها في هذا اللغز، فإنك بذلك قد تمكّنت من إنشاء مجموعة من التعليمات بإحدى لغات الكمبيوتر التي تعرف باسم Javascript. وتخبر هذه التعليمات البرمجية أجهزة الكمبيوتر بما يجب عرضه على الشاشة. وكذلك كل ما تراه وتنفّذه في Minecraft يبدأ بأسطر تعليمات برمجية كهذه."},
"getdataof":function(d){return "احصل على بيانات"},
"getnameof":function(d){return "احصل على اسم"},
"houseSelectChooseFloorPlan":function(d){return "اختر مخطط الطابق الخاص بمنزلك."},
"houseSelectEasy":function(d){return "سهل"},
"houseSelectHard":function(d){return "صعب"},
"houseSelectLetsBuild":function(d){return "هيا بنا نبني منزلاً."},
"houseSelectMedium":function(d){return "متوسط"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "ضع رابط مشاركة \"ساعة من البرمجة\" الخاص بك هنا ثم اضغط على \"استيراد\" لنسخ تعليماتك البرمجية في Minecraft"},
"importShareLinkHeader":function(d){return "إيراد رابط المشاركة"},
"inSlotNumber":function(d){return "في الفتحة رقم"},
"itemTypeBlock":function(d){return "كتلة"},
"itemTypeDecoration":function(d){return "ديكور"},
"itemTypeMiscellaneous":function(d){return "أدوات متنوعة"},
"itemTypeTool":function(d){return "أداة"},
"items":function(d){return "عنصر(عناصر)"},
"itemsOfBlockType":function(d){return "عنصر(عناصر) من المربع الذي نوعه"},
"level10FailureMessage":function(d){return "قم بتغطية الحمم للسير عليها، ثم احفر للحصول على كتلتين حديديتين على الجانب الآخر."},
"level11FailureMessage":function(d){return "في حالة وجود حمم أمامك، تأكد من وضع الحصاة أمامك. يتيح لك ذلك حفر صف الموارد المعني بأمان."},
"level12FailureMessage":function(d){return "تأكد من حفر 3 كتل من الحجر الأحمر. ويجمع ذلك ما تعلمته من بناء منزلك واستخدام عبارات \"if\" لتجنب السقوط في الحمم."},
"level13FailureMessage":function(d){return "ضع \"rail\" على طول مسار الكتل الترابية من بابك حتى حدود الخريطة."},
"level1FailureMessage":function(d){return "يجب عليك استخدام أوامر للسير باتجاه الخراف."},
"level1TooFewBlocksMessage":function(d){return "جرّب استخدام المزيد من الأوامر للسير باتجاه الخراف."},
"level2FailureMessage":function(d){return "لقطع شجرة، تحرّك للوصول إلى جذعها واستخدم الأمر \"destroy block\"."},
"level2TooFewBlocksMessage":function(d){return "جرّب استخدام المزيد من الأوامر لقطع شجرة. تحرّك للوصول إلى جذعها واستخدم الأمر \"destroy block\"."},
"level3FailureMessage":function(d){return "لتجميع الصوف من الخروفين، تحرّك تجاه كل منهما واستخدم الأمر \"shear\". تذكر استخدام أوامر الاتجاهات للوصول إلى الخروفين."},
"level3TooFewBlocksMessage":function(d){return "جرّب استخدام المزيد من الأوامر لتجميع الصوف من الخروفين. تحرّك تجاه كل منهما واستخدم الأمر \"shear\"."},
"level4FailureMessage":function(d){return "يتعين عليك استخدام الأمر \"destroy block\" عند كل جذع من جذوع الشجرات الثلاث."},
"level5FailureMessage":function(d){return "ضع الكتل على حدود الكتل الترابية لبناء جدار. سيعمل الأمر \"repeat\" القرنفلي على تشغيل أوامر موجودة بداخله، مثل \"place block\" و\"move forward\"."},
"level6FailureMessage":function(d){return "ضع الكتل داخل حدود الكتل الترابية الخاصة بالمنزل لإكمال اللغز."},
"level7FailureMessage":function(d){return "استخدم الأمر \"plant\" لوضع المحاصيل بكل رقعة من التربة المحروثة الداكنة."},
"level8FailureMessage":function(d){return "إذا لمست أحد المخلوقات العدائية، فسينفجر. تسلل حول تلك المخلوقات وأدخل منزلك."},
"level9FailureMessage":function(d){return "لا تنس وضع مصباحين على الأقل لإضاءة طريقك وكذلك الحفر لاستخراج كتلتين من الفحم على الأقل."},
"maskMode":function(d){return "وضع التخفي"},
"maskModeMasked":function(d){return "متخفي"},
"maskModeReplace":function(d){return "إستبدل"},
"minecraftBlock":function(d){return "كتلة"},
"minecraftNotConnected":function(d){return "Minecraft غير متصلة"},
"miniBlockBricks":function(d){return "الطوب"},
"miniBlockBucketLava":function(d){return "دلو الحمم البركانية"},
"miniBlockBucketWater":function(d){return "دلو الماء"},
"miniBlockCarrots":function(d){return "جزر"},
"miniBlockCoal":function(d){return "فحم"},
"miniBlockCobblestone":function(d){return "حصاة"},
"miniBlockDiamond":function(d){return "ماسة"},
"miniBlockDirt":function(d){return "كتلة ترابية"},
"miniBlockDirtCoarse":function(d){return "كتلة ترابية خشنة"},
"miniBlockEgg":function(d){return "بيضة"},
"miniBlockEmerald":function(d){return "زمردة"},
"miniBlockGravel":function(d){return "حصى"},
"miniBlockGunPowder":function(d){return "بارود"},
"miniBlockIngotGold":function(d){return "سبيكة ذهب"},
"miniBlockIngotIron":function(d){return "سبيكة حديد"},
"miniBlockLapisLazuli":function(d){return "اللازورد"},
"miniBlockLogAcacia":function(d){return "خشب السنط"},
"miniBlockLogBirch":function(d){return "خشب البتولا"},
"miniBlockLogJungle":function(d){return "خشب الغابات"},
"miniBlockLogOak":function(d){return "خشب البلوط"},
"miniBlockLogSpruce":function(d){return "خشب أبيض"},
"miniBlockMilk":function(d){return "حليب"},
"miniBlockPlanksAcacia":function(d){return "ألواح خشب السنط"},
"miniBlockPlanksBirch":function(d){return "ألواح خشب البتولا"},
"miniBlockPlanksJungle":function(d){return "ألواح خشب الغابات"},
"miniBlockPlanksOak":function(d){return "ألواح خشب البلوط"},
"miniBlockPlanksSpruce":function(d){return "ألواح الخشب الأبيض"},
"miniBlockPoppy":function(d){return "زهرة"},
"miniBlockPotato":function(d){return "بطاطس"},
"miniBlockRedstoneDust":function(d){return "غبار الحجر الاحمر"},
"miniBlockSand":function(d){return "رمل"},
"miniBlockSandstone":function(d){return "حجر رملي"},
"miniBlockSheep":function(d){return "خروف"},
"miniBlockWheat":function(d){return "قمح"},
"miniBlockWool":function(d){return "صوف"},
"nextLevelMsg":function(d){return "اكتمل اللغز "+craft_locale.v(d,"puzzleNumber")+". تهانينا!"},
"oldBlockHandling":function(d){return "المربع القديم في"},
"oldBlockHandlingsDestroy":function(d){return "دمر"},
"oldBlockHandlingsKeep":function(d){return "احتفظ"},
"oldBlockHandlingsReplace":function(d){return "إستبدل"},
"onBehalfOf":function(d){return "نيابة عن"},
"playerSelectChooseCharacter":function(d){return "اختر شخصيتك."},
"playerSelectChooseSelectButton":function(d){return "تحديد"},
"playerSelectLetsGetStarted":function(d){return "لنبدأ."},
"quantity":function(d){return "كمية"},
"reinfFeedbackMsg":function(d){return "يمكنك الضغط على \"Keep Playing\" للعودة إلى ممارسة اللعبة."},
"relative":function(d){return "نسبي"},
"runAgent":function(d){return "تشغيل العامل"},
"score":function(d){return "مجموع النقاط"},
"seconds":function(d){return "ثانية(ثوانٍ)"},
"selectChooseButton":function(d){return "تحديد"},
"soundTypeBump":function(d){return "ارتطام"},
"soundTypeChickenBawk":function(d){return "قرقرة الدجاج"},
"soundTypeChickenHurt":function(d){return "دجاجة مصابة"},
"soundTypeCollectedBlock":function(d){return "اخذ المكعب"},
"soundTypeCowHuff":function(d){return "غضب البقرة"},
"soundTypeCowHurt":function(d){return "بقرة مصابة"},
"soundTypeCowMoo":function(d){return "خوار البقرة"},
"soundTypeCowMooLong":function(d){return "خوار البقرة"},
"soundTypeCreeperHiss":function(d){return "حفيف الوحش الزاحف"},
"soundTypeDig_wood1":function(d){return "كسر الخشب"},
"soundTypeDoorOpen":function(d){return "الباب مفتوح"},
"soundTypeExplode":function(d){return "فجر"},
"soundTypeFailure":function(d){return "فشل المستوى"},
"soundTypeFall":function(d){return "سقوط"},
"soundTypeFizz":function(d){return "فوران"},
"soundTypeFuse":function(d){return "فتيل"},
"soundTypeIronGolemHit":function(d){return "ضرب الروبوت الحديدي"},
"soundTypeMetalWhack":function(d){return "ضربة حديدية"},
"soundTypeMinecart":function(d){return "عربة المنجم"},
"soundTypePlaceBlock":function(d){return "وضع مكعب"},
"soundTypePunch":function(d){return "لكمة"},
"soundTypeSheepBaa":function(d){return "ثُغَاء الخروف"},
"soundTypeStepFarmland":function(d){return "خطوة أرض زراعية"},
"soundTypeStepGrass":function(d){return "خطوة عشب"},
"soundTypeStepGravel":function(d){return "خطوة حصى"},
"soundTypeStepStone":function(d){return "خطوة حجر"},
"soundTypeStepWood":function(d){return "خطوة خشب"},
"soundTypeSuccess":function(d){return "المستوى ناجح"},
"soundTypeZombieBrains":function(d){return "زومبي يعوي"},
"soundTypeZombieGroan":function(d){return "زومبي يتذمر"},
"soundTypeZombieHurt":function(d){return "زومبي مصاب"},
"target":function(d){return "الهدف"},
"testModeAll":function(d){return "الكل"},
"testModeMasked":function(d){return "متخفي"},
"tileData":function(d){return "بيانات البلاطة"},
"timeDay":function(d){return "يوم"},
"timeLong":function(d){return "طويل"},
"timeMedium":function(d){return "متوسط"},
"timeNight":function(d){return "ليل"},
"timeRandom":function(d){return "عشوائي"},
"timeSet":function(d){return "اضبط الوقت إلى"},
"timeShort":function(d){return "قصير"},
"timeVeryLong":function(d){return "طويل جداً"},
"timeVeryShort":function(d){return "قصير جداً"},
"to":function(d){return "إلى"},
"toSlotNumber":function(d){return "إلى الفتحة رقم"},
"tooManyBlocksFail":function(d){return "اكتمل اللغز "+craft_locale.v(d,"puzzleNumber")+". تهانينا! يمكنك أيضًا إكماله من خلال "+craft_locale.p(d,"numBlocks",0,"ar",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "استدر عشوائي"},
"useArrowKeys":function(d){return "لا تحتاج إلى إضافة أي مربعات! تحرك بالأسهم (من لوحة المفاتيح) واضغط على المسطرة أو نافذة اللعبة لإستخدام الأدوات."},
"weather":function(d){return "الطقس"},
"weatherTypeClear":function(d){return "صافي"},
"weatherTypeRain":function(d){return "مطر"},
"weatherTypeThunder":function(d){return "رعد"}};