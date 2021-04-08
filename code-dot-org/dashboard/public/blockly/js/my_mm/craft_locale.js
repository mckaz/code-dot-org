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
"absolute":function(d){return "ပကတိကိန်း"},
"agentGenericFailureMessage":function(d){return "Coding ဆက်လုပ်ပါ၊အကူအညီအတွက်ကိုယ်စားလှယ်ကို အသုံးပြုပါ"},
"agentTooFewBlocksFailureMessage":function(d){return "ကိုယ်စားလှယ်ကို နေရာအမှန်ရောက်ရန်တစ်ချိန်ထဲမှာ blockတစ်ခုသာထည့်ပြီးကြိုးစားပါ"},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "ဂုဏ်ယူပါတယ်။သင်ဟာ စိန်တွေရှိတဲ့ လမ်းကိုတွေ့ပါပြီ. သင်ဟာ အခုချိန်မှာ "+craft_locale.p(d,"count",0,"en",{"one":"1diamond","other":craft_locale.n(d,"count")+" diamonds"})+" စုဆောင်းပြီးပါပြီ!"},
"blockActionAdd":function(d){return "add"},
"blockActionAttack":function(d){return "တိုက်ခိုက်သည်"},
"blockActionClone":function(d){return "blockအတုများ"},
"blockActionCloneFiltered":function(d){return "ကိုယ်ပွားသီးသန့်"},
"blockActionCollect":function(d){return "collect"},
"blockActionCollectAll":function(d){return "အားလုံးစုစည်းပါ"},
"blockActionDestroyEntity":function(d){return "ပျောက်ကွယ်သည်"},
"blockActionDetect":function(d){return "တွေ့ရှိသည်"},
"blockActionDetectRedstone":function(d){return "ကျောက်နီတွေ့ရှိသည်"},
"blockActionDrop":function(d){return "လွှတ်ချပါ"},
"blockActionDropAll":function(d){return "အားလုံးချပါ"},
"blockActionExecute":function(d){return "ညွှန်ကြားမှုကို လိုက်နာပါ"},
"blockActionExplodeEntity":function(d){return "ပေါက်ကွဲသည်"},
"blockActionFill":function(d){return "မှဖြည့်ပါ"},
"blockActionFlashEntity":function(d){return "မီးတောက်"},
"blockActionGetItemCount":function(d){return "item ကို ရေတွက်ပါ"},
"blockActionGetItemCountInSlotNumber":function(d){return "itemကို slot numberအတွင်း ရေတွက်ပါ"},
"blockActionGetItemDetail":function(d){return "itemအသေးစိတ်ကိုကြည့်ရန်"},
"blockActionGetItemDetailInSlotNumber":function(d){return "itemအသေးစိတ်ကိုslot numberထဲတွင်ရယူပါ"},
"blockActionGetItemSpace":function(d){return "itemအတွက်နေရာလပ်ချန်ထားပါ"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "itemနေရာလပ်ကို slot number ထဲတွင်ရယူပါ"},
"blockActionGive":function(d){return "ပေးပါ"},
"blockActionInspect":function(d){return "စုံစမ်းပါ"},
"blockActionInspectData":function(d){return "အချက်အလက်တွေကိုစစ်ပါ"},
"blockActionKill":function(d){return "ပစ်မှတ်ကို ဖျက်ဆီးပါ"},
"blockActionMove":function(d){return "move"},
"blockActionMoveAway":function(d){return "ဝေးဝေးကိုသွားပါ"},
"blockActionMoveForward":function(d){return "move forward"},
"blockActionMoveRandom":function(d){return "ကြုံရာရွှေ့ပါ"},
"blockActionMoveTo":function(d){return "သို့ရွှေ့ပါ"},
"blockActionMoveToward":function(d){return "ရှေ့သို့တစ်လှမ်းတိုးပါ"},
"blockActionPlaySound":function(d){return "အသံ ဖွင့်ပါ"},
"blockActionRepeat":function(d){return "ထပ်မံ ပြုလုပ်ပါ"},
"blockActionRepeatRandom":function(d){return "ကြုံရာထပ်လုပ်ပါ"},
"blockActionSetBlock":function(d){return "ပိတ်လိုက်ပါ"},
"blockActionSpawn":function(d){return "ပေါက်ပွှားသည်"},
"blockActionSummon":function(d){return "တစ်ဆင့်ခေါ်သည်"},
"blockActionTeleport":function(d){return "ပစ်မှတ်ကိုရွှေ့ပါ"},
"blockActionTeleportToPlayer":function(d){return "ကစားသမားထံ ပို့ဆောင်ပါ"},
"blockActionTestForBlock":function(d){return "blockအမျိုးအစားကို စစ်ဆေးပါ"},
"blockActionTestForBlocks":function(d){return "ပုံစံကို စစ်ဆေးပါ"},
"blockActionToScore":function(d){return "အမှတ်ရဖို့"},
"blockActionTransfer":function(d){return "ပြောင်းလိုက်ပါ"},
"blockActionWait":function(d){return "wait"},
"blockActionWith":function(d){return "နှင့်အတူ"},
"blockData":function(d){return "data ကိုပိတ်လိုက်ပါ"},
"blockDestroyBlock":function(d){return "blockကို ဖျက်ဆီးပါ"},
"blockIf":function(d){return "if"},
"blockIfLavaAhead":function(d){return "ချော်ရည်အရှေ့တွင်ရှိလျှင်"},
"blockIs":function(d){return "ရှိသည်"},
"blockMove":function(d){return "move"},
"blockMoveBackward":function(d){return "move backward"},
"blockMoveForward":function(d){return "move forward"},
"blockPlace":function(d){return "ထားပါ"},
"blockPlaceTorch":function(d){return "မီးတိုင်ကိုထားပါ"},
"blockPlaceXAheadAhead":function(d){return "ရှေ့သို့"},
"blockPlaceXAheadPlace":function(d){return "ထားပါ"},
"blockPlaceXPlace":function(d){return "ထားပါ"},
"blockPlantCrop":function(d){return "အသီးအနှံ စိုက်ပျိုးပါ"},
"blockShear":function(d){return "ညှပ်ပါ"},
"blockTill":function(d){return "လယ်ထွန်ပါ"},
"blockTillSoil":function(d){return "မြေကိုထွန်ယက်ပါ"},
"blockTurn":function(d){return "ကွေ့ပါ"},
"blockTurnLeft":function(d){return "turn left"},
"blockTurnRight":function(d){return "turn right"},
"blockType":function(d){return "blockပုံစံ"},
"blockTypeBedrock":function(d){return "အောက်ခံကျောက်"},
"blockTypeBricks":function(d){return "အုတ်ခဲများ"},
"blockTypeClay":function(d){return "မြေစေး"},
"blockTypeClayHardened":function(d){return "ဒဏ်ခံမြေစေး"},
"blockTypeCobblestone":function(d){return "လမ်းခင်းကျောက်"},
"blockTypeDirt":function(d){return "မြေစာမှုန့်"},
"blockTypeDirtCoarse":function(d){return "မြေစာခဲ"},
"blockTypeDoorIron":function(d){return "သံတံခါး"},
"blockTypeEmpty":function(d){return "ဘာမှမရှိ"},
"blockTypeFarmlandWet":function(d){return "စိုက်ပျိုးမြေ"},
"blockTypeGlass":function(d){return "ဖန်"},
"blockTypeGlowstone":function(d){return "ရောင်ပြန်ကျောက်"},
"blockTypeGrass":function(d){return "မြက်ခင်း"},
"blockTypeGravel":function(d){return "ကျောက်စရစ်ခဲ"},
"blockTypeLava":function(d){return "ချော်ရည်ပူ"},
"blockTypeLogAcacia":function(d){return "ထနောင်းပင်သစ်တုံး"},
"blockTypeLogBirch":function(d){return "ဘုဇပတ်ပင်သစ်တုံး"},
"blockTypeLogJungle":function(d){return "တောသစ်တုံး"},
"blockTypeLogOak":function(d){return "၀က်သစ်ချပင်သစ်တုံး"},
"blockTypeLogSpruce":function(d){return "ထင်းရှုးပင်သစ်တုံး"},
"blockTypeOreCoal":function(d){return "ကျောက်မီးသွေးအရိုင်း"},
"blockTypeOreDiamond":function(d){return "စိန်ရိုင်း"},
"blockTypeOreEmerald":function(d){return "မြကျောက်ရိုင်း"},
"blockTypeOreGold":function(d){return "ရွှေအရိုင်း"},
"blockTypeOreIron":function(d){return "သံရိုင်း"},
"blockTypeOreLapis":function(d){return "အပြာရောင်ကျောက်အရိုင်း"},
"blockTypeOreRedstone":function(d){return "အနီရောင်ကျောက်အရိုင်း"},
"blockTypePlanksAcacia":function(d){return "ထနောင်းကြမ်းခင်းပျဉ််ချပ်များ"},
"blockTypePlanksBirch":function(d){return "ဘုဇပတ်ပင်ကြမ်းခင်းပျဉ်ချပ်များ"},
"blockTypePlanksJungle":function(d){return "တောသစ်တုံးမှကြမ်းခင်းပျဉ်ချပ်များ"},
"blockTypePlanksOak":function(d){return "၀က်သစ်ချပင်ကြမ်းခင်းပျဉ်ချပ်များ"},
"blockTypePlanksSpruce":function(d){return "ထင်းရှုးပင်ကြမ်းခင်းပျဉ်ချပ်များ"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "ရထားသံလမ်း"},
"blockTypeRailsRedstoneTorch":function(d){return "ကျောက်တုံးနီမီးတိုင်"},
"blockTypeRedstoneWire":function(d){return "ကျောက်တုံးနီ ၀ါယာ"},
"blockTypeSand":function(d){return "သဲ"},
"blockTypeSandstone":function(d){return "သဲကျောက်"},
"blockTypeStone":function(d){return "ကျောက်တုံး"},
"blockTypeTnt":function(d){return "ယမ်းဘီလူး"},
"blockTypeTree":function(d){return "သစ်ပင်"},
"blockTypeWater":function(d){return "ရေ"},
"blockTypeWool":function(d){return "သိုးမွှေး"},
"blockTypeWoolBlue":function(d){return "အပြာရောင်သိုးမွှေး"},
"blockTypeWoolMagenta":function(d){return "ခရမ်းရောင်သိုးမွှေး"},
"blockTypeWoolOrange":function(d){return "လိမ္မော်ရောင်သိုးမွှေး"},
"blockTypeWoolPink":function(d){return "ပန်းရောင်သိုးမွှေး"},
"blockTypeWoolRed":function(d){return "အနီရောင်သိုးမွှေး"},
"blockTypeWoolYellow":function(d){return "အဝါရောင်သိုးမွှေး"},
"blockWhileXAheadAhead":function(d){return "ရှေ့သို့"},
"blockWhileXAheadDo":function(d){return "do"},
"blockWhileXAheadWhile":function(d){return "while"},
"cancel":function(d){return "ပယ်ဖျတ်သည်"},
"cloneMode":function(d){return "ကိုယ်ပွှားအသွင်"},
"cloneModeForce":function(d){return "ပြုလုပ်ပါ"},
"cloneModeMove":function(d){return "move"},
"cloneModeNormal":function(d){return "ပုံမှန်"},
"connectToCodeConnection":function(d){return "ဒီပရောဂျက်ကိုMinecraftရဲ့ပညာရေးEdition မှာစမ်းသပ်ရန်Code Connection Applicationကိုအသုံးပြုပါ"},
"destination":function(d){return "သွားမည့်နေရာ"},
"directionBack":function(d){return "နောက်သို့"},
"directionDown":function(d){return "down"},
"directionForward":function(d){return "ရှေ့သို့"},
"directionLeft":function(d){return "left"},
"directionMiddle":function(d){return "အလယ်"},
"directionRight":function(d){return "right"},
"directionUp":function(d){return "up"},
"downloadButton":function(d){return "ဒေါင်းလုပ်ဆွဲပါ"},
"entityType":function(d){return "သီးခြားပုံစံ"},
"entityTypeChicken":function(d){return "ကြက်ကလေး"},
"entityTypeCow":function(d){return "နွား"},
"entityTypeCreeper":function(d){return "တွားသွားသတ္တဝါ"},
"entityTypeIronGolem":function(d){return "သံကိုယ်​ထည်​သတ္တဝါကြီး"},
"entityTypePlayer":function(d){return "ကစားသမား"},
"entityTypeSheep":function(d){return "သိုး"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "တိုက်​ခိုက်​သောအခါ​"},
"eventTypeWhenDay":function(d){return "နေ့အချိန်​"},
"eventTypeWhenNight":function(d){return "ညအချိန်​"},
"eventTypeWhenRun":function(d){return "run တဲ့အခါ"},
"eventTypeWhenSpawned":function(d){return "ပေါက်​ဖွားချိန်​"},
"eventTypeWhenTouched":function(d){return "ထိ​တွေ့သည်​့အခါ"},
"eventTypeWhenUsed":function(d){return "အသုံးပြုသောအခါ"},
"forever":function(d){return "အမြဲတမ်​း"},
"from":function(d){return "မှ"},
"generatedCodeDescription":function(d){return "ဒီ ပဟေဠိထဲက အတားအဆီးတွေကို ဆွဲချခြင်း၊နေရာပြန်ချခြင်းဖြင့် သင်ဟာ Javascriptက ညွှန်ကြားချက်တွေကို လုပ်ပြီးသွားပါပြီ။ ဒီ codeကတော့ ကွန်ပျူတာဖန်သားပြင်ပေါ်မှာ ပေါ်လာမည့်အရာတွေကို ညွှန်ပြပါလိမ့်မယ်။ Minecraft မှာ သင်မြင်သမျှ လုပ်သမျှ\nအရာ အားလုံးဟာ အဲလိုကွန်ပျူတာ code တွေရဲ့ အခြေခံ အစပဲဖြစ်ပါတယ်"},
"getdataof":function(d){return "အချက်အလက်ရယူပါ"},
"getnameof":function(d){return "အမည်ရယူပါ"},
"houseSelectChooseFloorPlan":function(d){return "သင့်အိမ်အတွက် ကြမ်းပြင်အစီအစဉ်ကိုရွေးပါ"},
"houseSelectEasy":function(d){return "လွယ်လွယ်လေး"},
"houseSelectHard":function(d){return "ခက်ခက်ခဲခဲ"},
"houseSelectLetsBuild":function(d){return "အိမ်တစ်လုံးဆောက်ကြရအောင်"},
"houseSelectMedium":function(d){return "မခက်တခက်"},
"import":function(d){return "ထည့်သွင်းပါ"},
"importShareLinkBody":function(d){return "ဒီနေရာမှာသင့်ရဲ့Hour of Code share link ကိုရိုက်ထည့်ပါ၊ သင့်ရဲ့ codeကို Minecraft မှာ copy လုပ်ရန် 'import'ကို နှိပ်ပါ။"},
"importShareLinkHeader":function(d){return "Share link ကိုသွင်းပါ"},
"inSlotNumber":function(d){return "slot number ထဲတွင်"},
"itemTypeBlock":function(d){return "block"},
"itemTypeDecoration":function(d){return "အလှဆင်ခြင်း"},
"itemTypeMiscellaneous":function(d){return "အထွေထွေ"},
"itemTypeTool":function(d){return "ကိရိယာ"},
"items":function(d){return "အမျိုးအမည်(များ)"},
"itemsOfBlockType":function(d){return "block အမျိူးအစား(များ)"},
"level10FailureMessage":function(d){return "ဖြတ်သွားနိုင်ရန် ချော်ရည်ပူများကို ဖုံးအုပ်ပြီး အခြားတစ်ဖက်မှာ သံတုံး နှစ်ခုကိုမိုင်းတူးပါ"},
"level11FailureMessage":function(d){return "အကယ်၍ရှေ့တွင် ချော်ရည်ပူများရှိနေပါက လမ်းခင်းကျောက်ကိုခင်းပါ။ ထိုသို့ဖြင့် လမ်းတလျှောက်ရှိ မိုင်းများဘေးကင်းစွာ တူးဖော်နိုင်စေမည်"},
"level12FailureMessage":function(d){return "အနီရောင်ကျောက်တုံး၃ခုကိုတူးပါ.၄င်းဟာသင့်အိမ်တည်ဆောက်ခြင်းမှသင်ယူရတာတွေနှင့်အကယ်၍ရှေ့တွင် ချော်ရည်ပူများရှိနေပါကဆိုသည့်ဖော်ပြချက်ကိုအသုံးပြု၍ချော်ရည်ထဲကိုပြုတ်မကျစေရန်ပေါင်းစပ်ထားခြင်းဖြစ်သည်"},
"level13FailureMessage":function(d){return "သင်၏ တံခါးမှ မြေပုံ အစွန်းသို့မြေစာမှုန့်လမ်းကြောင်း တစ်လျှောက် ရထားသံလမ်းများနေရာချပါ"},
"level1FailureMessage":function(d){return "သိုးဆီသို့ လျောက်သွားရန် ညွှန်ကြားမှု ပြုလုပ်ပါ"},
"level1TooFewBlocksMessage":function(d){return "သိုးဆီသို့အရောက်သွားရန်ညွှန်ကြားခြင်းများပိုလုပ်ပါ"},
"level2FailureMessage":function(d){return "သစ်ပင်ကို ခုတ်လှဲရန် သစ်ပင်၏ ပင်စည်ဆီသို့သွားပြီး ''blockကို ဖျက်ဆီးပါ''အညွှန်းကိုနှိပ်ပါ"},
"level2TooFewBlocksMessage":function(d){return "သစ်ပင်ကို ခုတ်လှဲရန် ညွှန်ကြားမှုပိုသုံးဖို့ကြိုးစားပါ။ သစ်ပင်၏ ပင်စည်ဆီသို့သွား၍ ''blockကို ဖျက်ဆီးပါ''ညွှန်ကြားမှုကို သုံးပါ."},
"level3FailureMessage":function(d){return "သိုး၂ကောင်လုံး ဆီမှ သိုးမွေးရရန် တစ်ကောင်ချင်းဆီ သွား၍ ''ညှပ်ပါ''ညွှန်ကြားမှု ကို အသုံးပြုပါ။ သိုးတွေဆီရောက်ရန် ''ကွေ့ပါ''ညွှန်ကြားမှု သုံးဖို့ မမေ့ပါနှင့်"},
"level3TooFewBlocksMessage":function(d){return "သိုး၂ကောင်လုံးဆီမှ သိုးမွေးရရန် ညွှန်ကြားမှုပိုသုံးရန်ကြိုးစားပါ။ သိုးတစ်ကောင်ချင်းဆီထံသွား၍ ''ညှပ်ပါ''ညွှန်ကြားမှုကို အသုံးပြုပါ"},
"level4FailureMessage":function(d){return "ညွန်ကြားချက်″blockကို ဖျက်ဆီးပါ''ကို သစ်ပင်သုံးပင်၏ပင်စည်များတွင် အသုံးပြုရမည်"},
"level5FailureMessage":function(d){return "နံရံ တစ်ခုတည်ဆောက်ရန်မြေစာမှုန့်outline တွင် သင်၏ blocks များကိုနေရာချပါ။ ပန်းရောင် ''ထပ်မံ ပြုလုပ်ပါ''ညွှန်ကြားမှုသည် သူ့တွင်းရှိ ညွှန်ကြားမှု များနှင့်အတူ လုပ်ဆောင်ပါလိမ့်မည်"},
"level6FailureMessage":function(d){return "ပဟေဠိကို ဖြေရှင်းရန် အိမ်၏မြေစာမှုန့်outline တွင် blocks များကို နေရာချပါ"},
"level7FailureMessage":function(d){return "ညွန်ကြားချက်''စိုက်ပျိုးပါ''ကိုအသုံးပြု၍ ထွန်ယက်ထားသောမြေနက်တစ်ခုချင်းစီတွင် သီးနှံများကိုစိုက်ပျိုးပါ"},
"level8FailureMessage":function(d){return "နွယ်ပင်ကိုထိမိပါက ပေါက်ကွဲသွားပါလိမ့်မည်. နွယ်ပင်များကို ရှောင်ပြီးသင့်အိမ်ထဲဝင်ပါ"},
"level9FailureMessage":function(d){return "သင့်ရဲ့လမ်းကိုလင်းအောင် အနည်းဆုံးမီးတိုင်နှစ်ခု၊ANDမိုင်းအတွက် ကျောက်မီးသွေးနှစ်ခုထားဖို့ မမေ့ပါနဲ့."},
"maskMode":function(d){return "ဖုံးကွယ်မှုအနေအထား"},
"maskModeMasked":function(d){return "ဖုံးကွယ်ထားသော"},
"maskModeReplace":function(d){return "အစားထိုးသည်"},
"minecraftBlock":function(d){return "block"},
"minecraftNotConnected":function(d){return "Minecraft နှင့်ဆက်သွယ်မထားပါ"},
"miniBlockBricks":function(d){return "အုတ်ခဲများ"},
"miniBlockBucketLava":function(d){return "ချော်ရည်ပုံး"},
"miniBlockBucketWater":function(d){return "ရေပုံး"},
"miniBlockCarrots":function(d){return "မုန်လာဥနီများ"},
"miniBlockCoal":function(d){return "ကျောက်မီးသွေး"},
"miniBlockCobblestone":function(d){return "လမ်းခင်းကျောက်"},
"miniBlockDiamond":function(d){return "စိန်"},
"miniBlockDirt":function(d){return "မြေစာမှုန့်"},
"miniBlockDirtCoarse":function(d){return "မြေစာခဲ"},
"miniBlockEgg":function(d){return "ကြက်ဥ"},
"miniBlockEmerald":function(d){return "မြ"},
"miniBlockGravel":function(d){return "ကျောက်စရစ်ခဲ"},
"miniBlockGunPowder":function(d){return "ယမ်းမှုန့်"},
"miniBlockIngotGold":function(d){return "ရွှေချောင်း"},
"miniBlockIngotIron":function(d){return "သံချောင်း"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "ထနောင်းပင်သစ်တုံး"},
"miniBlockLogBirch":function(d){return "ဘုဇပတ်ပင်သစ်တုံး"},
"miniBlockLogJungle":function(d){return "တောသစ်တုံး"},
"miniBlockLogOak":function(d){return "၀က်သစ်ချပင်သစ်တုံး"},
"miniBlockLogSpruce":function(d){return "ထင်းရှုးပင်သစ်တုံး"},
"miniBlockMilk":function(d){return "နွားနို့"},
"miniBlockPlanksAcacia":function(d){return "ထနောင်းကြမ်းခင်းပျဉ််ချပ်များ"},
"miniBlockPlanksBirch":function(d){return "ဘုဇပတ်ပင်ကြမ်းခင်းပျဉ်ချပ်များ"},
"miniBlockPlanksJungle":function(d){return "တောသစ်တုံးမှကြမ်းခင်းပျဉ်ချပ်များ"},
"miniBlockPlanksOak":function(d){return "၀က်သစ်ချပင်ကြမ်းခင်းပျဉ်ချပ်များ"},
"miniBlockPlanksSpruce":function(d){return "ထင်းရှုးပင်ကြမ်းခင်းပျဉ်ချပ်များ"},
"miniBlockPoppy":function(d){return "ဘိန်းပင်"},
"miniBlockPotato":function(d){return "အာလူး"},
"miniBlockRedstoneDust":function(d){return "အနီရောင်ကျောက်တုန်းမှုန့်"},
"miniBlockSand":function(d){return "သဲ"},
"miniBlockSandstone":function(d){return "သဲကျောက်"},
"miniBlockSheep":function(d){return "သိုး"},
"miniBlockWheat":function(d){return "ဂျုံ"},
"miniBlockWool":function(d){return "သိုးမွှေး"},
"nextLevelMsg":function(d){return "ညာဏ်စမ်း"+craft_locale.v(d,"puzzleNumber")+"ပြီးပါပြီ။ဂုဏ်ယူပါတယ်!"},
"oldBlockHandling":function(d){return "blockအဟောင်းမှာ"},
"oldBlockHandlingsDestroy":function(d){return "ဖျက်ဆီးလိုက်ပါ"},
"oldBlockHandlingsKeep":function(d){return "သိမ်းထားပါ"},
"oldBlockHandlingsReplace":function(d){return "အစားထိုးသည်"},
"onBehalfOf":function(d){return "ကိုယ်စား"},
"playerSelectChooseCharacter":function(d){return "သင့်ပုံစံကိုရွေးပါ"},
"playerSelectChooseSelectButton":function(d){return "ရွေးချယ်ပါ"},
"playerSelectLetsGetStarted":function(d){return "စလိုက်ကြရအောင်"},
"quantity":function(d){return "အရေအတွက်"},
"reinfFeedbackMsg":function(d){return "သင့်ရဲ့ ဂိမ်းကိုပြန်ဆော့ဖို့ ''ဆက်ကစားပါ'' ကိုနှိပ်နိုင်ပါတယ်"},
"relative":function(d){return "ဆက်စပ်သော"},
"runAgent":function(d){return "ကိုယ်စားလှယ်စတင်လုပ်ဆောင်ပါ"},
"score":function(d){return "အမှတ်"},
"seconds":function(d){return "စက္ကန့်(များ)"},
"selectChooseButton":function(d){return "ရွေးချယ်ပါ"},
"soundTypeBump":function(d){return "တိုက်မိသံ"},
"soundTypeChickenBawk":function(d){return "ကြက်မ အော်မြည်သံ"},
"soundTypeChickenHurt":function(d){return "ကြက်အနာတရဖြစ်သံ"},
"soundTypeCollectedBlock":function(d){return "block စုဆောင်းသံ"},
"soundTypeCowHuff":function(d){return "နွားစိတ်တိုသံ"},
"soundTypeCowHurt":function(d){return "နွားဒဏ်ရာရသံ"},
"soundTypeCowMoo":function(d){return "နွား​အော်သံ"},
"soundTypeCowMooLong":function(d){return "နွားအသံဆွဲအော်သံ"},
"soundTypeCreeperHiss":function(d){return "နွယ်ပင်မှတရှူးရှူးမြည်သံ"},
"soundTypeDig_wood1":function(d){return "သစ်သားကျိုးသံ"},
"soundTypeDoorOpen":function(d){return "တံခါးပွင့်သွားသံ"},
"soundTypeExplode":function(d){return "ပေါက်ကွဲသံ"},
"soundTypeFailure":function(d){return "အဆင့် မ​အောင်မြင်သံ"},
"soundTypeFall":function(d){return "ပြုတ်ကျသံ"},
"soundTypeFizz":function(d){return "အမြှုပ်ထွက်သံ"},
"soundTypeFuse":function(d){return "စနက်ကြိုးသံ"},
"soundTypeIronGolemHit":function(d){return "သံကိုယ်​ထည်​ထိခိုက်သံ"},
"soundTypeMetalWhack":function(d){return "သတ္တု ရိုက်သံ"},
"soundTypeMinecart":function(d){return "မိုင်းသယ်လှည်းသံ"},
"soundTypePlaceBlock":function(d){return "blockနေရာချသံ"},
"soundTypePunch":function(d){return "ထိုးသံ"},
"soundTypeSheepBaa":function(d){return "သိုး​အော်သံ"},
"soundTypeStepFarmland":function(d){return "စိုက်ပျိုးမြေသို့ခြေချသံ"},
"soundTypeStepGrass":function(d){return "မြက်ခင်းနင်းသံ"},
"soundTypeStepGravel":function(d){return "ကျောက်စရစ်ပေါ်သို့ခြေချသံ"},
"soundTypeStepStone":function(d){return "ကျောက်တုံးပေါ်သို့ခြေချသံ"},
"soundTypeStepWood":function(d){return "သစ်သားပေါ်သို့ခြေချသံ"},
"soundTypeSuccess":function(d){return "အဆင့်အောင်မြင်သံ"},
"soundTypeZombieBrains":function(d){return "ဇိုမ်ပီး ညည်းတွားသံ"},
"soundTypeZombieGroan":function(d){return "ဇိုမ်ပီး မာန်ဖီသံ"},
"soundTypeZombieHurt":function(d){return "ဇိုမ်ပီး ဒဏ်ရာရသံ"},
"target":function(d){return "ပစ်မှတ်"},
"testModeAll":function(d){return "အားလုံး"},
"testModeMasked":function(d){return "ဖုံးကွယ်ထားသော"},
"tileData":function(d){return "အကွက်ရဲ့အချက်အလက်"},
"timeDay":function(d){return "day"},
"timeLong":function(d){return "ကြာသည်"},
"timeMedium":function(d){return "အလယ်အလတ်"},
"timeNight":function(d){return "night"},
"timeRandom":function(d){return "random"},
"timeSet":function(d){return "ပြုလုပ်ရန်အချိန်သတ်မှတ်သည်"},
"timeShort":function(d){return "တို​သော"},
"timeVeryLong":function(d){return "အလွန်ကြာသော"},
"timeVeryShort":function(d){return "အလွန်တို​သော"},
"to":function(d){return "သို့"},
"toSlotNumber":function(d){return "ဂဏန်း ထည့်ရန်"},
"tooManyBlocksFail":function(d){return "ပဟေဠိ"+craft_locale.v(d,"puzzleNumber")+"ပြီးဆုံးပါပြီ၊ဂုဏ်ယူပါတယ်!ဒီဟာကို"+craft_locale.p(d,"numBlocks",0,"en",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"တို့နှင့်လဲပြီးအောင်လုပ်နိုင်ပါတယ်"},
"turnRandom":function(d){return "ကြုံရာကျပန်းလှည့်ပါ"},
"useArrowKeys":function(d){return "blockများထပ်ထည့်ရန်မလိုပါ! မျှားနှ င့်ရွှေ့ပါ! ပစ္စည်းများသုံးရန် စပေ့ဘား (သို့ )ဂိမ်းဘုတ်ကိုနှိပ်ပါ"},
"weather":function(d){return "မိုး​လေဝသ"},
"weatherTypeClear":function(d){return "သာသာယာယာ"},
"weatherTypeRain":function(d){return "မိုးရွာသည်"},
"weatherTypeThunder":function(d){return "မိုးချုန်းသည်"}};