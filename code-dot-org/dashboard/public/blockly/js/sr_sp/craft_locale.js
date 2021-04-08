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
"absolute":function(d){return "апсолутна вредност"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"sr",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "add"},
"blockActionAttack":function(d){return "нападни"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "collect"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "нестани"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "спусти"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "разнеси"},
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
"blockActionMove":function(d){return "помери"},
"blockActionMoveAway":function(d){return "удаљи се од"},
"blockActionMoveForward":function(d){return "помери се напред"},
"blockActionMoveRandom":function(d){return "померај се насумично"},
"blockActionMoveTo":function(d){return "помери ка"},
"blockActionMoveToward":function(d){return "помери се корак напред"},
"blockActionPlaySound":function(d){return "свирај звук"},
"blockActionRepeat":function(d){return "понови"},
"blockActionRepeatRandom":function(d){return "понављај насумично"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "креирај"},
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
"blockDestroyBlock":function(d){return "уништи блок"},
"blockIf":function(d){return "ако"},
"blockIfLavaAhead":function(d){return "ако је лава испред"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "помери"},
"blockMoveBackward":function(d){return "помери се уназад"},
"blockMoveForward":function(d){return "помери се напред"},
"blockPlace":function(d){return "постави"},
"blockPlaceTorch":function(d){return "постави бакљу"},
"blockPlaceXAheadAhead":function(d){return "испред"},
"blockPlaceXAheadPlace":function(d){return "постави"},
"blockPlaceXPlace":function(d){return "постави"},
"blockPlantCrop":function(d){return "посади усеве"},
"blockShear":function(d){return "ошишај"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "орање тла"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "окрени се лево"},
"blockTurnRight":function(d){return "окрени се десно"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "темељ"},
"blockTypeBricks":function(d){return "цигле"},
"blockTypeClay":function(d){return "глина"},
"blockTypeClayHardened":function(d){return "стврднута глина"},
"blockTypeCobblestone":function(d){return "калдрма"},
"blockTypeDirt":function(d){return "прашина"},
"blockTypeDirtCoarse":function(d){return "груба земља"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "празно"},
"blockTypeFarmlandWet":function(d){return "обрадиво земљиште"},
"blockTypeGlass":function(d){return "стакло"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "трава"},
"blockTypeGravel":function(d){return "шљунак"},
"blockTypeLava":function(d){return "лава"},
"blockTypeLogAcacia":function(d){return "цепаница багрема"},
"blockTypeLogBirch":function(d){return "цепаница брезе"},
"blockTypeLogJungle":function(d){return "дрво из џунгле"},
"blockTypeLogOak":function(d){return "цепаница храста"},
"blockTypeLogSpruce":function(d){return "цепаница смреке"},
"blockTypeOreCoal":function(d){return "руда угља"},
"blockTypeOreDiamond":function(d){return "руда дијаманта"},
"blockTypeOreEmerald":function(d){return "руда смарагда"},
"blockTypeOreGold":function(d){return "руда злата"},
"blockTypeOreIron":function(d){return "руда гвожђа"},
"blockTypeOreLapis":function(d){return "руда лаписа"},
"blockTypeOreRedstone":function(d){return "руда црвеног камена"},
"blockTypePlanksAcacia":function(d){return "багремова даска"},
"blockTypePlanksBirch":function(d){return "брезина даска"},
"blockTypePlanksJungle":function(d){return "даска дрвета из џунгле"},
"blockTypePlanksOak":function(d){return "храстова даска"},
"blockTypePlanksSpruce":function(d){return "смрекина даска"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "пруга"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "песак"},
"blockTypeSandstone":function(d){return "коцка песка"},
"blockTypeStone":function(d){return "камен"},
"blockTypeTnt":function(d){return "Динамит"},
"blockTypeTree":function(d){return "дрво"},
"blockTypeWater":function(d){return "вода"},
"blockTypeWool":function(d){return "вуна"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "испред"},
"blockWhileXAheadDo":function(d){return "уради"},
"blockWhileXAheadWhile":function(d){return "док"},
"cancel":function(d){return "Откажи"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "помери"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "назад"},
"directionDown":function(d){return "доле"},
"directionForward":function(d){return "напред"},
"directionLeft":function(d){return "лево"},
"directionMiddle":function(d){return "средњи"},
"directionRight":function(d){return "десно"},
"directionUp":function(d){return "горе"},
"downloadButton":function(d){return "Преузимање"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "пиле"},
"entityTypeCow":function(d){return "крава"},
"entityTypeCreeper":function(d){return "крипер"},
"entityTypeIronGolem":function(d){return "гвоздени сељак"},
"entityTypePlayer":function(d){return "играч"},
"entityTypeSheep":function(d){return "овца"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "кад си нападнут"},
"eventTypeWhenDay":function(d){return "кад је дан"},
"eventTypeWhenNight":function(d){return "кад је ноћ"},
"eventTypeWhenRun":function(d){return "Када кренеш"},
"eventTypeWhenSpawned":function(d){return "кад је креиран"},
"eventTypeWhenTouched":function(d){return "кад је дотакнут"},
"eventTypeWhenUsed":function(d){return "кад је кориштен"},
"forever":function(d){return "заувек"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Превлачењем и постављањем блокова у овој мозгалици, направили сте низ инструкција у програмском језику који се зове Javascript. Овај кôд налаже рачунару шта да прикаже на екрану. Такође све што видите у Мајнкрафту почиње са неколико линија кода попут овог."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Одаберите план своје куће."},
"houseSelectEasy":function(d){return "Лако"},
"houseSelectHard":function(d){return "Тешко"},
"houseSelectLetsBuild":function(d){return "Хајде да направимо кућу."},
"houseSelectMedium":function(d){return "Средње"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "блок"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Покриј лаву да би могао-ла да пређеш преко ње, а онда ископај два блока гвожђа на другој страни."},
"level11FailureMessage":function(d){return "Обавезно постави калдрму ако је лава испред тебе. Ово ће ти омогућити да безбедно ископаш овај ред ресурса."},
"level12FailureMessage":function(d){return "Обавезно ископај 3 блока црвеног камена. Ово комбинује шта си научио-ла код прављења своје куће и коришђење \"ако\" наредбе да би избегао пад у лаву."},
"level13FailureMessage":function(d){return "Постави \"пругу\" дуж пута од прашине који води од твојих врата до ивице мапе."},
"level1FailureMessage":function(d){return "Треба да користиш команде како би дошао-ла до овце."},
"level1TooFewBlocksMessage":function(d){return "Покушај да користиш више команди да дођеш до оваца."},
"level2FailureMessage":function(d){return "Да посечеш дрво, мораш да дошеташ то његовог дебла и искористиш \"уништи блок\" команду."},
"level2TooFewBlocksMessage":function(d){return "Покушај да искористиш још команди за сечу дрвета. Дошетај до његовог стабла и употреби \"уништи блок\" команду."},
"level3FailureMessage":function(d){return "Да сакупиш вуну од обе овце, дошетај до сваке од њих и употреби \"шишај\" команду. Не заборави да користиш команде за окретање како би дошао-ла до оваца."},
"level3TooFewBlocksMessage":function(d){return "Покушај да користиш више команди како би прикупио-ла вуну од обе овце. Ходај према свакој и користи команду \"ошишај\"."},
"level4FailureMessage":function(d){return "Мораш користити команду \"уништи блок\" на сваком од три стабла."},
"level5FailureMessage":function(d){return "Постави своје блокове на блокове прашине да саградиш зид. Роза \"понављај\" команда ће покренути команде стављене унутар ње, као на пример \"постави блок\" и \"помери се напред\"."},
"level6FailureMessage":function(d){return "Постави блокове на ивицу блокова прашине да саградиш кућу и решиш мозгалицу."},
"level7FailureMessage":function(d){return "Користи команду \"посади биљни усев\" да би поставио усеве на сваки део тамне изоране земље."},
"level8FailureMessage":function(d){return "Ако додирнеш крипера он ће да експлодира. Прошуњај се поред њих и уђи у своју кућу."},
"level9FailureMessage":function(d){return "Не заборави да поставиш најмање 2 бакље да осветлиш свој пут и ископаш најмање 2 угља."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "замени"},
"minecraftBlock":function(d){return "блок"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "цигле"},
"miniBlockBucketLava":function(d){return "lava bucket"},
"miniBlockBucketWater":function(d){return "кофа воде"},
"miniBlockCarrots":function(d){return "шаргарепе"},
"miniBlockCoal":function(d){return "угаљ"},
"miniBlockCobblestone":function(d){return "калдрма"},
"miniBlockDiamond":function(d){return "дијамант"},
"miniBlockDirt":function(d){return "прашина"},
"miniBlockDirtCoarse":function(d){return "груба земља"},
"miniBlockEgg":function(d){return "јаје"},
"miniBlockEmerald":function(d){return "смарагд"},
"miniBlockGravel":function(d){return "шљунак"},
"miniBlockGunPowder":function(d){return "барут"},
"miniBlockIngotGold":function(d){return "златна шипка"},
"miniBlockIngotIron":function(d){return "гвоздена шипка"},
"miniBlockLapisLazuli":function(d){return "лазулит"},
"miniBlockLogAcacia":function(d){return "цепаница багрема"},
"miniBlockLogBirch":function(d){return "цепаница брезе"},
"miniBlockLogJungle":function(d){return "дрво из џунгле"},
"miniBlockLogOak":function(d){return "цепаница храста"},
"miniBlockLogSpruce":function(d){return "цепаница смреке"},
"miniBlockMilk":function(d){return "млеко"},
"miniBlockPlanksAcacia":function(d){return "багремова даска"},
"miniBlockPlanksBirch":function(d){return "брезина даска"},
"miniBlockPlanksJungle":function(d){return "даска дрвета из џунгле"},
"miniBlockPlanksOak":function(d){return "храстова даска"},
"miniBlockPlanksSpruce":function(d){return "смрекина даска"},
"miniBlockPoppy":function(d){return "мак"},
"miniBlockPotato":function(d){return "кромпир"},
"miniBlockRedstoneDust":function(d){return "прашина црвеног камена"},
"miniBlockSand":function(d){return "песак"},
"miniBlockSandstone":function(d){return "коцка песка"},
"miniBlockSheep":function(d){return "овца"},
"miniBlockWheat":function(d){return "пшеница"},
"miniBlockWool":function(d){return "вуна"},
"nextLevelMsg":function(d){return "Мозгалица "+craft_locale.v(d,"puzzleNumber")+" завршена. Честитам!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "уништи"},
"oldBlockHandlingsKeep":function(d){return "сачувај"},
"oldBlockHandlingsReplace":function(d){return "замени"},
"onBehalfOf":function(d){return "у име"},
"playerSelectChooseCharacter":function(d){return "Одабери свог лика."},
"playerSelectChooseSelectButton":function(d){return "Изабери"},
"playerSelectLetsGetStarted":function(d){return "Хајде да почнемо."},
"quantity":function(d){return "количина"},
"reinfFeedbackMsg":function(d){return "Притисни \"Настави игру\" да се вратиш на играње игре."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Резултат"},
"seconds":function(d){return "секунде"},
"selectChooseButton":function(d){return "Изабери"},
"soundTypeBump":function(d){return "bump"},
"soundTypeChickenBawk":function(d){return "кокодакање"},
"soundTypeChickenHurt":function(d){return "пиле повређено"},
"soundTypeCollectedBlock":function(d){return "блок покупљен"},
"soundTypeCowHuff":function(d){return "cow huff"},
"soundTypeCowHurt":function(d){return "cow hurt"},
"soundTypeCowMoo":function(d){return "cow moo"},
"soundTypeCowMooLong":function(d){return "cow mooo"},
"soundTypeCreeperHiss":function(d){return "сиктање гмизавца"},
"soundTypeDig_wood1":function(d){return "ломљење дрва"},
"soundTypeDoorOpen":function(d){return "отварање врата"},
"soundTypeExplode":function(d){return "разнеси"},
"soundTypeFailure":function(d){return "level failure"},
"soundTypeFall":function(d){return "пад"},
"soundTypeFizz":function(d){return "газирано"},
"soundTypeFuse":function(d){return "фитиљ"},
"soundTypeIronGolemHit":function(d){return "удар гвозденог голема"},
"soundTypeMetalWhack":function(d){return "метални тресак"},
"soundTypeMinecart":function(d){return "рударска колица"},
"soundTypePlaceBlock":function(d){return "постављање блока"},
"soundTypePunch":function(d){return "песница"},
"soundTypeSheepBaa":function(d){return "блејање овце"},
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
"timeDay":function(d){return "day"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "средње"},
"timeNight":function(d){return "Ноћ"},
"timeRandom":function(d){return "насумичан"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "кратко"},
"timeVeryLong":function(d){return "веома дугачко"},
"timeVeryShort":function(d){return "веома кратко"},
"to":function(d){return "до"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Мозгалица "+craft_locale.v(d,"puzzleNumber")+" је завршена. Честитам! Такође је могуће завршити је помоћу "+craft_locale.p(d,"numBlocks",0,"sr",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "окрени насумично"},
"useArrowKeys":function(d){return "Не мораш да додаш ниједан блок! Померај се користећи стрелице и притискај размакницу да користиш објекте."},
"weather":function(d){return "време"},
"weatherTypeClear":function(d){return "ведро"},
"weatherTypeRain":function(d){return "киша"},
"weatherTypeThunder":function(d){return "грмљавина"}};