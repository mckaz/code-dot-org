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
"absolute":function(d){return "модуль"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"en",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "add"},
"blockActionAttack":function(d){return "шабуыл"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "жинау"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "Жоғалу"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "түсіру"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "жарылу"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "жарқылдау"},
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
"blockActionMove":function(d){return "жылжы"},
"blockActionMoveAway":function(d){return "ары қозғалу"},
"blockActionMoveForward":function(d){return "алдыға қозғалу"},
"blockActionMoveRandom":function(d){return "кездейсоқ қозғалу"},
"blockActionMoveTo":function(d){return "қозғалу"},
"blockActionMoveToward":function(d){return "бір қадам алдыға жылжу"},
"blockActionPlaySound":function(d){return "дыбыс ойнау"},
"blockActionRepeat":function(d){return "қайтала"},
"blockActionRepeatRandom":function(d){return "кездейсоқ қайталау"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "жұмыртқалау"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "балл беру"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "wait"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "блокты жою"},
"blockIf":function(d){return "егер"},
"blockIfLavaAhead":function(d){return "Егер алда лава болса"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "жылжы"},
"blockMoveBackward":function(d){return "артқа қозғалу"},
"blockMoveForward":function(d){return "алдыға қозғалу"},
"blockPlace":function(d){return "орнату"},
"blockPlaceTorch":function(d){return "Шам орнату"},
"blockPlaceXAheadAhead":function(d){return "алдында"},
"blockPlaceXAheadPlace":function(d){return "орнату"},
"blockPlaceXPlace":function(d){return "орнату"},
"blockPlantCrop":function(d){return "егін егу"},
"blockShear":function(d){return "жүн кесу"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "топыраққа дейін"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "солға бұрылу"},
"blockTurnRight":function(d){return "оңға бұрылу"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "топырақ"},
"blockTypeBricks":function(d){return "кірпіш"},
"blockTypeClay":function(d){return "Саз"},
"blockTypeClayHardened":function(d){return "шыңдалған саз"},
"blockTypeCobblestone":function(d){return "төселген"},
"blockTypeDirt":function(d){return "балшық"},
"blockTypeDirtCoarse":function(d){return "қатты балшық"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "бос"},
"blockTypeFarmlandWet":function(d){return "ауыл шаруашылығы учаскесі"},
"blockTypeGlass":function(d){return "шыны"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "шөп"},
"blockTypeGravel":function(d){return "құмтас"},
"blockTypeLava":function(d){return "лава"},
"blockTypeLogAcacia":function(d){return "акация журналы"},
"blockTypeLogBirch":function(d){return "қайың"},
"blockTypeLogJungle":function(d){return "Тропикалық ағаштың діңгегі"},
"blockTypeLogOak":function(d){return "емен"},
"blockTypeLogSpruce":function(d){return "шырша"},
"blockTypeOreCoal":function(d){return "көмір кені"},
"blockTypeOreDiamond":function(d){return "алмас кені"},
"blockTypeOreEmerald":function(d){return "изумруд кені"},
"blockTypeOreGold":function(d){return "алтын кені"},
"blockTypeOreIron":function(d){return "темір кені"},
"blockTypeOreLapis":function(d){return "лазурит кені"},
"blockTypeOreRedstone":function(d){return "қызыл кен"},
"blockTypePlanksAcacia":function(d){return "ағаш тақталар"},
"blockTypePlanksBirch":function(d){return "қайың тақталар"},
"blockTypePlanksJungle":function(d){return "тропикалық ағаш тақталары"},
"blockTypePlanksOak":function(d){return "емен тақталар"},
"blockTypePlanksSpruce":function(d){return "шырша тақталар"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "рельс"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "құм"},
"blockTypeSandstone":function(d){return "құмтас"},
"blockTypeStone":function(d){return "тас"},
"blockTypeTnt":function(d){return "тротил"},
"blockTypeTree":function(d){return "ағаш"},
"blockTypeWater":function(d){return "су"},
"blockTypeWool":function(d){return "жүн"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "алдында"},
"blockWhileXAheadDo":function(d){return "жасау"},
"blockWhileXAheadWhile":function(d){return "болған кезде "},
"cancel":function(d){return "Болдырмау"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "жылжы"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "төмен"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "солға"},
"directionMiddle":function(d){return "орта"},
"directionRight":function(d){return "оңға"},
"directionUp":function(d){return "жоғары"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "тауық"},
"entityTypeCow":function(d){return "сиыр"},
"entityTypeCreeper":function(d){return "крипер"},
"entityTypeIronGolem":function(d){return "темір кені"},
"entityTypePlayer":function(d){return "ойыншы"},
"entityTypeSheep":function(d){return "қой"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "шабуылданғанда"},
"eventTypeWhenDay":function(d){return "күндіз"},
"eventTypeWhenNight":function(d){return "түнде"},
"eventTypeWhenRun":function(d){return "қосу кезінде"},
"eventTypeWhenSpawned":function(d){return "жұмыртқалағанда"},
"eventTypeWhenTouched":function(d){return "тигенде"},
"eventTypeWhenUsed":function(d){return "қолданылғанда"},
"forever":function(d){return "мәңгі"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Сіз бұл тапсырмада блоктарды орнын ауыстыру және орналастыру арқылы  Javascript бағдарламалау тіліндегі нұсқаулықтар жиынын құрдыңыз. Бұл код компьютерге экранға не шығару қажеттігін көрсетеді. Сіз Minecratf-тан көретін және жасайтын барлық заттар да осы секілді компьютерлік кодтан басталады."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Үйіңіздіт қабат жоспарыт таңдаңыз."},
"houseSelectEasy":function(d){return "оңай"},
"houseSelectHard":function(d){return "қиын"},
"houseSelectLetsBuild":function(d){return "Үй салып көрейік."},
"houseSelectMedium":function(d){return "Орта"},
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
"level10FailureMessage":function(d){return "Лавадан өту үшін оның бетін жабыңыз да, арғы жақтан екі темір блок табыңыз."},
"level11FailureMessage":function(d){return "Егер алдыңызда лава бар болса, міндетті түрде алдыңызға үлкен тастарды орналастырыңыз. Осылайша сіз ресурстарды қауіпсіз таба аласыз."},
"level12FailureMessage":function(d){return "Міндетті түрдк 3 қызыл тас блогын табыңыз. Ол үшін сізге үйді соғу кезіндегі үйренген біліміңіз және \"егер\" операторы қажет болады."},
"level13FailureMessage":function(d){return "Сіздің табалдырығыңыздан картаның шетіне дейін алып баратын жолдың бойына \"рельстерді\" орналастырыңыз."},
"level1FailureMessage":function(d){return "Қойға жақындау үшін сізге командаларды қолдану қажет."},
"level1TooFewBlocksMessage":function(d){return "Қойға жақындау үшін басқа командаларды қолданып көріңіз."},
"level2FailureMessage":function(d){return "Ағашты шабу үшін оның дініне жақындап, \"блокты жою\" командасын қолданыңыз."},
"level2TooFewBlocksMessage":function(d){return "Ағашты шабу үшін басқа командаларды қолданып көріңіз. Оның дініне жақындап \"блокты жою\" командасын қолданыңыз."},
"level3FailureMessage":function(d){return "Екі қойдың да жүнін жинап алу үшін оның әрқайсысына жақындап \"қырқу\" командасын қолданыңыз. Қойларға жақындау үшін бұрылу командасын қолдануды естен шығармаңыз."},
"level3TooFewBlocksMessage":function(d){return "Екі қойдығ да жүнін жинап алу үшін басқа командаларды қолданып көріңіз. Олардың әрқайсысына жақындап, \"қырқу\" командасын қолданыңыз."},
"level4FailureMessage":function(d){return "Үш діңнің әрқайсысына \"блокты жою\" командасын қолдану қажет."},
"level5FailureMessage":function(d){return "Қабырғаны соғу үшін жер контуры үстіне блоктарды орналастырыңыз. Қызғылт \"қайталау\" командасы өзінің ішінде орналастырылған \"блокты орналастыру\" және \"алдыға жүру\" секілді командаларды қайталауға мүмкіндік береді."},
"level6FailureMessage":function(d){return "Тапсырманы шешу үшін үйдің жер контурында блоктарды орналастырыңыз."},
"level7FailureMessage":function(d){return "Қара аударылған жер бөлігіне көшеттерді отырғызу үшін \"отырғызу\" командасын қолданыңыз."},
"level8FailureMessage":function(d){return "Егерде криперге тисетін болсаңыз ол жарылып кетеді. Оны сақтықпен айналып өтіп өз үйіңізге кіріңіз."},
"level9FailureMessage":function(d){return "Өз жолыңызды жарықтандыру үшін кем дегенде 2мшамшырақ орналастыруды ұмытпаңыз және кем дегенде 2 кқмір блогын табыңыз."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "блок"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "кірпіш"},
"miniBlockBucketLava":function(d){return "лава шелегі"},
"miniBlockBucketWater":function(d){return "су шелегі"},
"miniBlockCarrots":function(d){return "сәбіздер"},
"miniBlockCoal":function(d){return "көмір"},
"miniBlockCobblestone":function(d){return "төселген"},
"miniBlockDiamond":function(d){return "алмас"},
"miniBlockDirt":function(d){return "балшық"},
"miniBlockDirtCoarse":function(d){return "қатты балшық"},
"miniBlockEgg":function(d){return "жұмыртқа"},
"miniBlockEmerald":function(d){return "зүмірет"},
"miniBlockGravel":function(d){return "құмтас"},
"miniBlockGunPowder":function(d){return "дәрі"},
"miniBlockIngotGold":function(d){return "алтын құйма"},
"miniBlockIngotIron":function(d){return "темір құйма"},
"miniBlockLapisLazuli":function(d){return "лазурит"},
"miniBlockLogAcacia":function(d){return "акация журналы"},
"miniBlockLogBirch":function(d){return "қайың"},
"miniBlockLogJungle":function(d){return "Тропикалық ағаштың діңгегі"},
"miniBlockLogOak":function(d){return "емен"},
"miniBlockLogSpruce":function(d){return "шырша"},
"miniBlockMilk":function(d){return "сүт"},
"miniBlockPlanksAcacia":function(d){return "ағаш тақталар"},
"miniBlockPlanksBirch":function(d){return "қайың тақталар"},
"miniBlockPlanksJungle":function(d){return "тропикалық ағаш тақталары"},
"miniBlockPlanksOak":function(d){return "емен тақталар"},
"miniBlockPlanksSpruce":function(d){return "шырша тақталар"},
"miniBlockPoppy":function(d){return "көкнәр"},
"miniBlockPotato":function(d){return "картоп"},
"miniBlockRedstoneDust":function(d){return "қызылтас шаңы"},
"miniBlockSand":function(d){return "құм"},
"miniBlockSandstone":function(d){return "құмтас"},
"miniBlockSheep":function(d){return "қой"},
"miniBlockWheat":function(d){return "бидай"},
"miniBlockWool":function(d){return "жүн"},
"nextLevelMsg":function(d){return "Басқатырғыш "+craft_locale.v(d,"puzzleNumber")+" шешілді. Құттықтаймыз!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Кейіпкер таңдаңыз."},
"playerSelectChooseSelectButton":function(d){return "Таңдау"},
"playerSelectLetsGetStarted":function(d){return "Бастайық."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Ойынға қайта оралу үшін «Ойынды жалғастыру» батырмасына басыңыз."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Ұпай"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Таңдау"},
"soundTypeBump":function(d){return "соғу"},
"soundTypeChickenBawk":function(d){return "тауықтың қыт-қыттауы"},
"soundTypeChickenHurt":function(d){return "тауыққа зақым келді"},
"soundTypeCollectedBlock":function(d){return "блок жинау"},
"soundTypeCowHuff":function(d){return "сиыр ызалануы"},
"soundTypeCowHurt":function(d){return "сиыр зақымдануы"},
"soundTypeCowMoo":function(d){return "сиыр мөңіреуі"},
"soundTypeCowMooLong":function(d){return "сиыр мөңіреуі"},
"soundTypeCreeperHiss":function(d){return "крипер ысылдауы"},
"soundTypeDig_wood1":function(d){return "ағаш сынуы"},
"soundTypeDoorOpen":function(d){return "есік ашылуы"},
"soundTypeExplode":function(d){return "жарылу"},
"soundTypeFailure":function(d){return "деңгейді сәтсәз өту"},
"soundTypeFall":function(d){return "құлау"},
"soundTypeFizz":function(d){return "шыжылдау"},
"soundTypeFuse":function(d){return "жарғыш"},
"soundTypeIronGolemHit":function(d){return "темір кені"},
"soundTypeMetalWhack":function(d){return "металл соққысы"},
"soundTypeMinecart":function(d){return "шахта арбасы"},
"soundTypePlaceBlock":function(d){return "блок қою"},
"soundTypePunch":function(d){return "соққы"},
"soundTypeSheepBaa":function(d){return "қойдың мәәәлеуі"},
"soundTypeStepFarmland":function(d){return "дала алқабы"},
"soundTypeStepGrass":function(d){return "шөпті бас"},
"soundTypeStepGravel":function(d){return "құмтасты бас"},
"soundTypeStepStone":function(d){return "тасты бас"},
"soundTypeStepWood":function(d){return "ағашты бас"},
"soundTypeSuccess":function(d){return "деңгейді өттің"},
"soundTypeZombieBrains":function(d){return "зомби ыңқылы"},
"soundTypeZombieGroan":function(d){return "зомби күңкілдеуі"},
"soundTypeZombieHurt":function(d){return "зомби жарақаттануы"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "күн"},
"timeLong":function(d){return "ұзын"},
"timeMedium":function(d){return "орта"},
"timeNight":function(d){return "түн"},
"timeRandom":function(d){return "кездейсоқ"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "қысқа"},
"timeVeryLong":function(d){return "өте ұзын"},
"timeVeryShort":function(d){return "өте қысқа"},
"to":function(d){return "дейін"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Басқатырғыш "+craft_locale.v(d,"puzzleNumber")+" шешілді. Құттықтаймыз! Ее также можно решить с помощью "+craft_locale.p(d,"numBlocks",0,"en",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "кездейсоқ бұрылу"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};