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
"absolute":function(d){return "قدرمطلق"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "در"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"fa",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "اضافه کردن"},
"blockActionAttack":function(d){return "حمله"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "جمع آوری"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "ناپدید می شود"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "انداختن"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "منفجر کردن"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "flash"},
"blockActionGetItemCount":function(d){return "get item count"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "get item detail"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "give"},
"blockActionInspect":function(d){return "inspect"},
"blockActionInspectData":function(d){return "inspect data"},
"blockActionKill":function(d){return "kill target"},
"blockActionMove":function(d){return "حرکت"},
"blockActionMoveAway":function(d){return "move away from"},
"blockActionMoveForward":function(d){return "به جلو حرکت کردن"},
"blockActionMoveRandom":function(d){return "move random"},
"blockActionMoveTo":function(d){return "حرکت به سمت"},
"blockActionMoveToward":function(d){return "move a step toward"},
"blockActionPlaySound":function(d){return "پخش صدا"},
"blockActionRepeat":function(d){return "تکرار کن"},
"blockActionRepeatRandom":function(d){return "تکرار تصادفی"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "تخم ریزی کردن"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "to score"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "wait"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "نابود کردن بلوک"},
"blockIf":function(d){return "اگر"},
"blockIfLavaAhead":function(d){return "اگر گدازه ها جلو بودند"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "حرکت"},
"blockMoveBackward":function(d){return "حرکت به عقب"},
"blockMoveForward":function(d){return "به جلو حرکت کردن"},
"blockPlace":function(d){return "قرار دادن"},
"blockPlaceTorch":function(d){return "مشعل را قرار بده"},
"blockPlaceXAheadAhead":function(d){return "جلو"},
"blockPlaceXAheadPlace":function(d){return "قرار دادن"},
"blockPlaceXPlace":function(d){return "قرار دادن"},
"blockPlantCrop":function(d){return "گیاه کاشتن"},
"blockShear":function(d){return "چیدن پشم گوسفندان"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "خاک قابل کاشت"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "بپیچ به چپ"},
"blockTurnRight":function(d){return "بپیچ به راست"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "سنگ بستر"},
"blockTypeBricks":function(d){return "آجر"},
"blockTypeClay":function(d){return "خشت"},
"blockTypeClayHardened":function(d){return "خاک رس سخت شده"},
"blockTypeCobblestone":function(d){return "سنگ فرش"},
"blockTypeDirt":function(d){return "خاک"},
"blockTypeDirtCoarse":function(d){return "خاک درشت"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "خالی"},
"blockTypeFarmlandWet":function(d){return "زمین کشاورزی"},
"blockTypeGlass":function(d){return "شیشه"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "علف"},
"blockTypeGravel":function(d){return "سنگ ریزه"},
"blockTypeLava":function(d){return "گدازه"},
"blockTypeLogAcacia":function(d){return "شاخه اقاقیا"},
"blockTypeLogBirch":function(d){return "کنده درخت توس"},
"blockTypeLogJungle":function(d){return "کنده درخت جنگلی"},
"blockTypeLogOak":function(d){return "کنده بلوط"},
"blockTypeLogSpruce":function(d){return "کنده درخت صنوبر"},
"blockTypeOreCoal":function(d){return "سنگ معدن ذغال سنگ"},
"blockTypeOreDiamond":function(d){return "سنگ معدن الماس"},
"blockTypeOreEmerald":function(d){return "سنگ معدن زمرد"},
"blockTypeOreGold":function(d){return "سنگ معدن طلا"},
"blockTypeOreIron":function(d){return "سنگ معدن اهن"},
"blockTypeOreLapis":function(d){return "سنگ لاجورد"},
"blockTypeOreRedstone":function(d){return "سنگ معدن سنگ قرمز"},
"blockTypePlanksAcacia":function(d){return "قطعات چوب اقاقیا"},
"blockTypePlanksBirch":function(d){return "قطعات چوب توس"},
"blockTypePlanksJungle":function(d){return "چوب جنگلی"},
"blockTypePlanksOak":function(d){return "چوب بلوط"},
"blockTypePlanksSpruce":function(d){return "قطعات چوب صنوبر"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "راه آهن"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "شن"},
"blockTypeSandstone":function(d){return "ماسه سنگ"},
"blockTypeStone":function(d){return "سنگ"},
"blockTypeTnt":function(d){return "تی ان تی(مواد منفجره)"},
"blockTypeTree":function(d){return "درخت"},
"blockTypeWater":function(d){return "آب"},
"blockTypeWool":function(d){return "پشم"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "جلو"},
"blockWhileXAheadDo":function(d){return "انجام بده"},
"blockWhileXAheadWhile":function(d){return "هنگامیکه"},
"cancel":function(d){return "لغو کن"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "حرکت"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "پایین"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "سمت چپ"},
"directionMiddle":function(d){return "وسط"},
"directionRight":function(d){return "سمت راست"},
"directionUp":function(d){return "بالا"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "مرغ"},
"entityTypeCow":function(d){return "گاو"},
"entityTypeCreeper":function(d){return "خزنده"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "بازیکن"},
"entityTypeSheep":function(d){return "گوسفند"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "when attacked"},
"eventTypeWhenDay":function(d){return "when day"},
"eventTypeWhenNight":function(d){return "when night"},
"eventTypeWhenRun":function(d){return "زمان اجرا"},
"eventTypeWhenSpawned":function(d){return "when spawned"},
"eventTypeWhenTouched":function(d){return "when touched"},
"eventTypeWhenUsed":function(d){return "when used"},
"forever":function(d){return "forever"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "با کشاندن و قرار دادن بلوکها در این پازل، شما مجموعه ای از دستورالعملها به یک زبان کامپیوتری بنام جاوا اسکریپت بوجود آورده اید. این کدگذاری به کامپیوترها میگوید که چه چیزی را بر روی صفحه نمایش دهند. همچنین تمام آنچه شما در \"minecraft\" میبینید یا انجام میدهید با خطوطی از کدگذاری کامپیوتری شبیه اینها شروع میشود."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "نقشه و طرح مورد نظر را برای خانه خود انتخاب کنید."},
"houseSelectEasy":function(d){return "آسان"},
"houseSelectHard":function(d){return "سخت"},
"houseSelectLetsBuild":function(d){return "بیایید خونه بسازیم"},
"houseSelectMedium":function(d){return "متوسط"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "بلوک"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "بر روی گدازه ها پوشش قرار دهید تا بتوانید از روی آن عبور کنید سپس از دو بلوک آهن در سمت دیگر آهن استخراج کنید."},
"level11FailureMessage":function(d){return "مطمئن شوید که اگر گدازه در پیش است، سنگ فرش بر جلوی راهتان قرار دهید. این به شما اجازه میدهد که با امنیت این ردیف از منابع را استخراج نمایید."},
"level12FailureMessage":function(d){return "مطمئن شوید که سه بلوک سنگ قرمز را استخراج نمایید. این کار ترکیبی است از آنچه شما از ساختن خانه خود و استفاده از احکام” اگر ”برای جلوگیری از افتادن در گدازه یادگرفته اید."},
"level13FailureMessage":function(d){return "در طول مسیر خاکی از گوشه نقشه تا درب متعلق به خودتان” راه آهن” قرار دهید."},
"level1FailureMessage":function(d){return "شما باید از فرمانها برای رفتن به سمت گوسفند استفاده نمایید."},
"level1TooFewBlocksMessage":function(d){return "سعی کنید از فرمانهای بیشتری برای رفتن به سمت گوسفند استفاده کنید."},
"level2FailureMessage":function(d){return "برای قطعه قطعه کردن درخت ابتدا به سمت تنه ی آن حرکت کنید سپس با استفاده از فرمان”نابود کردن بلوک” این کار را انجام دهید."},
"level2TooFewBlocksMessage":function(d){return "برای قطعه قطعه کردن درخت سعی کنید از فرمانهای بیشتری استفاده کنید. به سمت تنه درخت بروید و با استفاده از فرمان” نابود کردن بلوک” این کار را انجام دهید."},
"level3FailureMessage":function(d){return "برای جمع آوری پشم از هر دو گوسفند به سمت هر کدام برو و فرمان \"چیدن پشم\" را استفاده کن. یادت باشد که از فرمانهای \"چرخیدن\" برای رسیدن به گوسفند استفاده کنی."},
"level3TooFewBlocksMessage":function(d){return "سعی کن از فرمانهای بیشتری استفاده کنی تا از هر دو گوسفند پشم جمع آوری نمایی. به سمت هر کدام برو و از فرمان \"چیدن پشم\" استفاده کن."},
"level4FailureMessage":function(d){return "شما باید با استفاده از فرمان\"نابود کردن بلوک\" سه تنه درخت را نابود کنید."},
"level5FailureMessage":function(d){return "بلوک های خود را در طرح کلی خاک برای ساخت دیوار قرار دهید. فرمان صورتی رنگ تکرار ٬ فرمانهایی را که در درون خودش دارد را مثل ”قرار دادن بلوک” و ” جلو حرکت کردن” اجرا خواهد کرد."},
"level6FailureMessage":function(d){return "بلوک ها را بر روی طرح خاکی خانه قرار دهید تا پازل کامل شود."},
"level7FailureMessage":function(d){return "از فر مان \"کاشتن\" برای قرار دادن دانه های زراعی روی هر قطعه خاک کشت تیره استفاده کن."},
"level8FailureMessage":function(d){return "اگر شما به یک گیاه پیچی برخورد کنید منفجر خواهد شد. در اطراف آنها پنهانی حرکت کنید و وارد خانه خود شوید."},
"level9FailureMessage":function(d){return "فراموش نکنید شما حداقل باید دو مشعل برای روشن کردن راه خود قرار دهید و حداقل دو زغال سنگ را استخراج کنید."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "بلوک"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "آجر"},
"miniBlockBucketLava":function(d){return "lava bucket"},
"miniBlockBucketWater":function(d){return "water bucket"},
"miniBlockCarrots":function(d){return "carrots"},
"miniBlockCoal":function(d){return "ذغال سنگ"},
"miniBlockCobblestone":function(d){return "سنگ فرش"},
"miniBlockDiamond":function(d){return "الماس"},
"miniBlockDirt":function(d){return "خاک"},
"miniBlockDirtCoarse":function(d){return "خاک درشت"},
"miniBlockEgg":function(d){return "تخم مرغ"},
"miniBlockEmerald":function(d){return "زمرد"},
"miniBlockGravel":function(d){return "سنگ ریزه"},
"miniBlockGunPowder":function(d){return "باروت"},
"miniBlockIngotGold":function(d){return "شمش طلا"},
"miniBlockIngotIron":function(d){return "شمش آهن"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "شاخه اقاقیا"},
"miniBlockLogBirch":function(d){return "کنده درخت توس"},
"miniBlockLogJungle":function(d){return "کنده درخت جنگلی"},
"miniBlockLogOak":function(d){return "کنده بلوط"},
"miniBlockLogSpruce":function(d){return "کنده درخت صنوبر"},
"miniBlockMilk":function(d){return "شیر"},
"miniBlockPlanksAcacia":function(d){return "قطعات چوب اقاقیا"},
"miniBlockPlanksBirch":function(d){return "قطعات چوب توس"},
"miniBlockPlanksJungle":function(d){return "چوب جنگلی"},
"miniBlockPlanksOak":function(d){return "چوب بلوط"},
"miniBlockPlanksSpruce":function(d){return "قطعات چوب صنوبر"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "سیب زمینی"},
"miniBlockRedstoneDust":function(d){return "redstone dust"},
"miniBlockSand":function(d){return "شن"},
"miniBlockSandstone":function(d){return "ماسه سنگ"},
"miniBlockSheep":function(d){return "گوسفند"},
"miniBlockWheat":function(d){return "گندم"},
"miniBlockWool":function(d){return "پشم"},
"nextLevelMsg":function(d){return craft_locale.v(d,"puzzleNumber")+" پازل تکمیل شد. تبریک میگم!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "شخصیت خود را انتخاب کنید."},
"playerSelectChooseSelectButton":function(d){return "انتخاب"},
"playerSelectLetsGetStarted":function(d){return "بیایید شروع کنید."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "شما می توانید دکمه \"نگه داشتن بازی\" را برای بازگشت به بازی خود فشار دهید."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "امتیاز"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "انتخاب"},
"soundTypeBump":function(d){return "bump"},
"soundTypeChickenBawk":function(d){return "chicken cluck"},
"soundTypeChickenHurt":function(d){return "chicken hurt"},
"soundTypeCollectedBlock":function(d){return "block collect"},
"soundTypeCowHuff":function(d){return "cow huff"},
"soundTypeCowHurt":function(d){return "cow hurt"},
"soundTypeCowMoo":function(d){return "cow moo"},
"soundTypeCowMooLong":function(d){return "cow mooo"},
"soundTypeCreeperHiss":function(d){return "creeper hiss"},
"soundTypeDig_wood1":function(d){return "wood break"},
"soundTypeDoorOpen":function(d){return "door open"},
"soundTypeExplode":function(d){return "منفجر کردن"},
"soundTypeFailure":function(d){return "level failure"},
"soundTypeFall":function(d){return "fall"},
"soundTypeFizz":function(d){return "fizz"},
"soundTypeFuse":function(d){return "fuse"},
"soundTypeIronGolemHit":function(d){return "iron golem hit"},
"soundTypeMetalWhack":function(d){return "metal whack"},
"soundTypeMinecart":function(d){return "minecart"},
"soundTypePlaceBlock":function(d){return "block place"},
"soundTypePunch":function(d){return "punch"},
"soundTypeSheepBaa":function(d){return "sheep baa"},
"soundTypeStepFarmland":function(d){return "step farmland"},
"soundTypeStepGrass":function(d){return "step grass"},
"soundTypeStepGravel":function(d){return "step gravel"},
"soundTypeStepStone":function(d){return "step stone"},
"soundTypeStepWood":function(d){return "step wood"},
"soundTypeSuccess":function(d){return "level success"},
"soundTypeZombieBrains":function(d){return "zombie moan"},
"soundTypeZombieGroan":function(d){return "zombie growl"},
"soundTypeZombieHurt":function(d){return "zombie hurt"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "روز"},
"timeLong":function(d){return "طولانی"},
"timeMedium":function(d){return "متوسط"},
"timeNight":function(d){return "شب"},
"timeRandom":function(d){return "تصادفی"},
"timeSet":function(d){return "time set"},
"timeShort":function(d){return "کوتاه"},
"timeVeryLong":function(d){return "بسیار طولانی"},
"timeVeryShort":function(d){return "بسیار کوتاه"},
"to":function(d){return "به"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "پازل"+craft_locale.v(d,"puzzleNumber")+" تکمیل شد. تبریک میگم! همچنین ممکن است که آن را با "+craft_locale.p(d,"numBlocks",0,"fa",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+" نیز تمام کنید."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};