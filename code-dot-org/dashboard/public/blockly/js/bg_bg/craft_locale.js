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
"absolute":function(d){return "абсолютна стойност"},
"agentGenericFailureMessage":function(d){return "Продължавайте да пишете код! Не забравяйте да използвате Agent за помощ."},
"agentTooFewBlocksFailureMessage":function(d){return "Пробвайте да добавите един блок, за да придвижвате Agent до правилното място."},
"at":function(d){return "в"},
"agentDiamondPathCongrats":function(d){return "Поздравления, намерихте диамантената пътека! Досега сте събрали "+craft_locale.p(d,"count",0,"bg",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"!"},
"blockActionAdd":function(d){return "добавяне"},
"blockActionAttack":function(d){return "атака"},
"blockActionClone":function(d){return "клониране на блокове"},
"blockActionCloneFiltered":function(d){return "клонинг само"},
"blockActionCollect":function(d){return "събери"},
"blockActionCollectAll":function(d){return "събери всички"},
"blockActionDestroyEntity":function(d){return "изчезване"},
"blockActionDetect":function(d){return "откриване"},
"blockActionDetectRedstone":function(d){return "откриване на червен камък"},
"blockActionDrop":function(d){return "пуска"},
"blockActionDropAll":function(d){return "пускане на всички"},
"blockActionExecute":function(d){return "изпълняване на команда"},
"blockActionExplodeEntity":function(d){return "експлозия"},
"blockActionFill":function(d){return "запълни от"},
"blockActionFlashEntity":function(d){return "мълния"},
"blockActionGetItemCount":function(d){return "получаване на брой предмети"},
"blockActionGetItemCountInSlotNumber":function(d){return "вземи брой елементи в слот номер"},
"blockActionGetItemDetail":function(d){return "получаване на подробни данни за предмет"},
"blockActionGetItemDetailInSlotNumber":function(d){return "вземи брой елементи в слот номер"},
"blockActionGetItemSpace":function(d){return "постави елемента на мястото"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "вземи брой елементи в слот номер"},
"blockActionGive":function(d){return "дай"},
"blockActionInspect":function(d){return "инспектиране"},
"blockActionInspectData":function(d){return "инспектиране на данни"},
"blockActionKill":function(d){return "убиване на цел"},
"blockActionMove":function(d){return "Премести"},
"blockActionMoveAway":function(d){return "отдалечи се от"},
"blockActionMoveForward":function(d){return "върви напред"},
"blockActionMoveRandom":function(d){return "случайно преместване"},
"blockActionMoveTo":function(d){return "премести в"},
"blockActionMoveToward":function(d){return "премести се една стъпка към"},
"blockActionPlaySound":function(d){return "възпроизвежда звук"},
"blockActionRepeat":function(d){return "повтори"},
"blockActionRepeatRandom":function(d){return "повтори случайно"},
"blockActionSetBlock":function(d){return "задава блок на"},
"blockActionSpawn":function(d){return "създава"},
"blockActionSummon":function(d){return "призоваване"},
"blockActionTeleport":function(d){return "телепортиране на цел"},
"blockActionTeleportToPlayer":function(d){return "телепортиране към играч"},
"blockActionTestForBlock":function(d){return "проверява какъв тип е блока"},
"blockActionTestForBlocks":function(d){return "тества дали модел между"},
"blockActionToScore":function(d){return "към резултат"},
"blockActionTransfer":function(d){return "прехвърляне"},
"blockActionWait":function(d){return "изчакване"},
"blockActionWith":function(d){return "с"},
"blockData":function(d){return "данни за блок"},
"blockDestroyBlock":function(d){return "унищожи блок"},
"blockIf":function(d){return "ако"},
"blockIfLavaAhead":function(d){return "Ако има лава отпред"},
"blockIs":function(d){return "е"},
"blockMove":function(d){return "Премести"},
"blockMoveBackward":function(d){return "премести назад"},
"blockMoveForward":function(d){return "върви напред"},
"blockPlace":function(d){return "постави"},
"blockPlaceTorch":function(d){return "постави факел"},
"blockPlaceXAheadAhead":function(d){return "отпред"},
"blockPlaceXAheadPlace":function(d){return "постави"},
"blockPlaceXPlace":function(d){return "постави"},
"blockPlantCrop":function(d){return "засади растение"},
"blockShear":function(d){return "острижи"},
"blockTill":function(d){return "прекопаване"},
"blockTillSoil":function(d){return "обработване на почвата"},
"blockTurn":function(d){return "завъртане"},
"blockTurnLeft":function(d){return "завърти наляво"},
"blockTurnRight":function(d){return "завърти надясно"},
"blockType":function(d){return "тип блок"},
"blockTypeBedrock":function(d){return "скала"},
"blockTypeBricks":function(d){return "тухли"},
"blockTypeClay":function(d){return "глина"},
"blockTypeClayHardened":function(d){return "втвърдена глина"},
"blockTypeCobblestone":function(d){return "калдъръм"},
"blockTypeDirt":function(d){return "земя"},
"blockTypeDirtCoarse":function(d){return "камениста почва"},
"blockTypeDoorIron":function(d){return "желязна врата"},
"blockTypeEmpty":function(d){return "празно"},
"blockTypeFarmlandWet":function(d){return "земеделска земя"},
"blockTypeGlass":function(d){return "стъкло"},
"blockTypeGlowstone":function(d){return "светещ камък"},
"blockTypeGrass":function(d){return "трева"},
"blockTypeGravel":function(d){return "чакъл"},
"blockTypeLava":function(d){return "лава"},
"blockTypeLogAcacia":function(d){return "акациев дънер"},
"blockTypeLogBirch":function(d){return "брезов дънер"},
"blockTypeLogJungle":function(d){return "дънер от джунглата"},
"blockTypeLogOak":function(d){return "дъбов дънер"},
"blockTypeLogSpruce":function(d){return "смърчов дънер"},
"blockTypeOreCoal":function(d){return "въглища"},
"blockTypeOreDiamond":function(d){return "диаманти"},
"blockTypeOreEmerald":function(d){return "изумруди"},
"blockTypeOreGold":function(d){return "златна руда"},
"blockTypeOreIron":function(d){return "желязна руда"},
"blockTypeOreLapis":function(d){return "лапис руда"},
"blockTypeOreRedstone":function(d){return "червени камъни"},
"blockTypePlanksAcacia":function(d){return "акациеви дъски"},
"blockTypePlanksBirch":function(d){return "брезови дъски"},
"blockTypePlanksJungle":function(d){return "джунглови дъски"},
"blockTypePlanksOak":function(d){return "дъбови дъски"},
"blockTypePlanksSpruce":function(d){return "смърчови дъски"},
"blockTypePressurePlateUp":function(d){return "активираща плоча"},
"blockTypeRail":function(d){return "релса"},
"blockTypeRailsRedstoneTorch":function(d){return "факел от червен камък"},
"blockTypeRedstoneWire":function(d){return "жица от червен камък"},
"blockTypeSand":function(d){return "пясък"},
"blockTypeSandstone":function(d){return "пясъчник"},
"blockTypeStone":function(d){return "камък"},
"blockTypeTnt":function(d){return "tnt"},
"blockTypeTree":function(d){return "дърво"},
"blockTypeWater":function(d){return "вода"},
"blockTypeWool":function(d){return "вълна"},
"blockTypeWoolBlue":function(d){return "синя вълна"},
"blockTypeWoolMagenta":function(d){return "пурпурна вълна"},
"blockTypeWoolOrange":function(d){return "оранжева вълна"},
"blockTypeWoolPink":function(d){return "розова вълна"},
"blockTypeWoolRed":function(d){return "червена вълна"},
"blockTypeWoolYellow":function(d){return "жълта вълна"},
"blockWhileXAheadAhead":function(d){return "отпред"},
"blockWhileXAheadDo":function(d){return "прави"},
"blockWhileXAheadWhile":function(d){return "докато"},
"cancel":function(d){return "Отмени"},
"cloneMode":function(d){return "клонинг режим"},
"cloneModeForce":function(d){return "сила"},
"cloneModeMove":function(d){return "Премести"},
"cloneModeNormal":function(d){return "нормално"},
"connectToCodeConnection":function(d){return "За да изпълнявате този проект в Minecraft: Education Edition, използвайте приложението „Code Connection“."},
"destination":function(d){return "местоназначение"},
"directionBack":function(d){return "назад"},
"directionDown":function(d){return "надолу"},
"directionForward":function(d){return "напред"},
"directionLeft":function(d){return "наляво"},
"directionMiddle":function(d){return "среда"},
"directionRight":function(d){return "надясно"},
"directionUp":function(d){return "нагоре"},
"downloadButton":function(d){return "Изтегляне"},
"entityType":function(d){return "тип обект"},
"entityTypeChicken":function(d){return "пиле"},
"entityTypeCow":function(d){return "крава"},
"entityTypeCreeper":function(d){return "пълзящо растение"},
"entityTypeIronGolem":function(d){return "желязен голем"},
"entityTypePlayer":function(d){return "играч"},
"entityTypeSheep":function(d){return "овце"},
"entityTypeZombie":function(d){return "зомби"},
"eventTypeWhenAttacked":function(d){return "когато е атакуван"},
"eventTypeWhenDay":function(d){return "когато е ден"},
"eventTypeWhenNight":function(d){return "когато е нощ"},
"eventTypeWhenRun":function(d){return "при стартиране"},
"eventTypeWhenSpawned":function(d){return "когато се зареди"},
"eventTypeWhenTouched":function(d){return "при докосване"},
"eventTypeWhenUsed":function(d){return "при използване"},
"forever":function(d){return "завинаги"},
"from":function(d){return "от"},
"generatedCodeDescription":function(d){return "Чрез плъзгане и пускане на блокове в този пъзел, Вие ще създавате набор от инструкции на компютърен език, наречен Javascript. Този код казва на компютрите какво да се показва на екрана. Всичко, което видите и направите в Minecraft, също започва с редове на компютърен код като тези."},
"getdataof":function(d){return "получаване на данни от"},
"getnameof":function(d){return "получаване на име от"},
"houseSelectChooseFloorPlan":function(d){return "Изберете план за къщата си."},
"houseSelectEasy":function(d){return "Лесно"},
"houseSelectHard":function(d){return "Трудно"},
"houseSelectLetsBuild":function(d){return "Нека да построим къща."},
"houseSelectMedium":function(d){return "Средно"},
"import":function(d){return "Импортиране"},
"importShareLinkBody":function(d){return "Въведете вашата връзка за споделяне от „Час на Кодирането“ \"Импортиране\", за да копирате вашия код в Minecraft"},
"importShareLinkHeader":function(d){return "Импортиране на връзка за споделяне"},
"inSlotNumber":function(d){return "в слот номер"},
"itemTypeBlock":function(d){return "блок"},
"itemTypeDecoration":function(d){return "декорация"},
"itemTypeMiscellaneous":function(d){return "допълнителни настройки"},
"itemTypeTool":function(d){return "инструмент"},
"items":function(d){return "предмет(и)"},
"itemsOfBlockType":function(d){return "предмет(и) от тип блок"},
"level10FailureMessage":function(d){return "Покрий лавата, за да прекосиш. След това изкопай два железни блока от другата страна."},
"level11FailureMessage":function(d){return "Не забравяйте да поставите калдъръм, ако има лава напред. Така безопасно ще копаете ресурси на този ред."},
"level12FailureMessage":function(d){return "Необходимо е да изкопаете 3 блока червен камък. Трябва да комбинирате всичко научено от построяването на вашата къща и използването на „ако“ блоковете, за да избегнете падането в лавата."},
"level13FailureMessage":function(d){return "Постави \"релса\" по пясъчния път, която да води от твоята врата до границата на картата."},
"level1FailureMessage":function(d){return "Трябва да използваш командите, за да отидеш до овцете."},
"level1TooFewBlocksMessage":function(d){return "Опитай се да използваш повече команди, за да стигнеш до овцете."},
"level2FailureMessage":function(d){return "За да отсечете дърво, отидете до основата му и използвайте командата \"унищожи блок\"."},
"level2TooFewBlocksMessage":function(d){return "Опитайте да използвате повече команди, за да отрежете дървото. Използвайте командата \"унищожи блок\"."},
"level3FailureMessage":function(d){return "За да съберете вълната от двете овце, отидете до всяка и използвайте команда \"острижи\". Не забравяйте да използвате командата \"завърти\", за да достигнете до овцата."},
"level3TooFewBlocksMessage":function(d){return "Опитайте да използвате още команди, за да съберете вълна. Когато отидете до всяка овца използвайте командата \"острижи\"."},
"level4FailureMessage":function(d){return "Трябва да използвате командата \"унищожи блок\" на всеки от трите ствола."},
"level5FailureMessage":function(d){return "Поставете блоковете върху очертания план, за да построите стена. Розовата команда \"повтори\" ще изпълни всички команди, вмъкнати в блока ѝ, като \"постави блок\" и \"върви напред\"."},
"level6FailureMessage":function(d){return "Поставете блокове върху очертаният план за къща, за да завършите пъзела."},
"level7FailureMessage":function(d){return "Използвайте командата \"засади\", за да поставите посеви в разораната земя."},
"level8FailureMessage":function(d){return "Ако докоснете пълзящите растения, те ще експлодират. Промъкнете се около тях, за да влезете в къщата."},
"level9FailureMessage":function(d){return "Не забравайте да поставите 2 факли, които да осветяват пътя и да добиете поне 2 парчета въглища."},
"maskMode":function(d){return "режим на маска"},
"maskModeMasked":function(d){return "маскиран"},
"maskModeReplace":function(d){return "заменяне"},
"minecraftBlock":function(d){return "блок"},
"minecraftNotConnected":function(d){return "Minecraft не е свързана"},
"miniBlockBricks":function(d){return "тухли"},
"miniBlockBucketLava":function(d){return "кофа с лава"},
"miniBlockBucketWater":function(d){return "кофа с вода"},
"miniBlockCarrots":function(d){return "моркови"},
"miniBlockCoal":function(d){return "въглища"},
"miniBlockCobblestone":function(d){return "калдъръм"},
"miniBlockDiamond":function(d){return "диамант"},
"miniBlockDirt":function(d){return "земя"},
"miniBlockDirtCoarse":function(d){return "камениста почва"},
"miniBlockEgg":function(d){return "яйце"},
"miniBlockEmerald":function(d){return "емералд"},
"miniBlockGravel":function(d){return "чакъл"},
"miniBlockGunPowder":function(d){return "барут"},
"miniBlockIngotGold":function(d){return "кюлче злато"},
"miniBlockIngotIron":function(d){return "слитък желязо"},
"miniBlockLapisLazuli":function(d){return "лазурит"},
"miniBlockLogAcacia":function(d){return "акациев дънер"},
"miniBlockLogBirch":function(d){return "брезов дънер"},
"miniBlockLogJungle":function(d){return "дънер от джунглата"},
"miniBlockLogOak":function(d){return "дъбов дънер"},
"miniBlockLogSpruce":function(d){return "смърчов дънер"},
"miniBlockMilk":function(d){return "мляко"},
"miniBlockPlanksAcacia":function(d){return "акациеви дъски"},
"miniBlockPlanksBirch":function(d){return "брезови дъски"},
"miniBlockPlanksJungle":function(d){return "джунглови дъски"},
"miniBlockPlanksOak":function(d){return "дъбови дъски"},
"miniBlockPlanksSpruce":function(d){return "смърчови дъски"},
"miniBlockPoppy":function(d){return "мак"},
"miniBlockPotato":function(d){return "картофи"},
"miniBlockRedstoneDust":function(d){return "редстоун прах"},
"miniBlockSand":function(d){return "пясък"},
"miniBlockSandstone":function(d){return "пясъчник"},
"miniBlockSheep":function(d){return "овце"},
"miniBlockWheat":function(d){return "пшеница"},
"miniBlockWool":function(d){return "вълна"},
"nextLevelMsg":function(d){return "Пъзел "+craft_locale.v(d,"puzzleNumber")+" завършен. Поздравления!"},
"oldBlockHandling":function(d){return "стар блок в"},
"oldBlockHandlingsDestroy":function(d){return "разрушаване"},
"oldBlockHandlingsKeep":function(d){return "запази"},
"oldBlockHandlingsReplace":function(d){return "заменяне"},
"onBehalfOf":function(d){return "от името на"},
"playerSelectChooseCharacter":function(d){return "Изберете герой."},
"playerSelectChooseSelectButton":function(d){return "Изберете"},
"playerSelectLetsGetStarted":function(d){return "Нека да започнем."},
"quantity":function(d){return "количество"},
"reinfFeedbackMsg":function(d){return "Можете да натиснете \"Запази игра\", за да играете отново играта си."},
"relative":function(d){return "относително"},
"runAgent":function(d){return "Стартира Агента"},
"score":function(d){return "Резултат"},
"seconds":function(d){return "секунда(и)"},
"selectChooseButton":function(d){return "Изберете"},
"soundTypeBump":function(d){return "бум"},
"soundTypeChickenBawk":function(d){return "кудкудякане"},
"soundTypeChickenHurt":function(d){return "наранено пиле"},
"soundTypeCollectedBlock":function(d){return "събиране на блок"},
"soundTypeCowHuff":function(d){return "сумтене на крава"},
"soundTypeCowHurt":function(d){return "наранена крава"},
"soundTypeCowMoo":function(d){return "мучене на крава"},
"soundTypeCowMooLong":function(d){return "дълго мучене на крава"},
"soundTypeCreeperHiss":function(d){return "пълзящото растение съска"},
"soundTypeDig_wood1":function(d){return "счупване на дърво"},
"soundTypeDoorOpen":function(d){return "отваряне на врата"},
"soundTypeExplode":function(d){return "експлозия"},
"soundTypeFailure":function(d){return "нивото не е минато"},
"soundTypeFall":function(d){return "падане"},
"soundTypeFizz":function(d){return "съскане"},
"soundTypeFuse":function(d){return "изгаряне"},
"soundTypeIronGolemHit":function(d){return "удар на железен голем"},
"soundTypeMetalWhack":function(d){return "стържене на метал"},
"soundTypeMinecart":function(d){return "минна количка"},
"soundTypePlaceBlock":function(d){return "поставяне на блок"},
"soundTypePunch":function(d){return "удар"},
"soundTypeSheepBaa":function(d){return "блеене на овца"},
"soundTypeStepFarmland":function(d){return "стъпки по земя"},
"soundTypeStepGrass":function(d){return "стъпки по трева"},
"soundTypeStepGravel":function(d){return "стъпки по чакъл"},
"soundTypeStepStone":function(d){return "стъпки по камък"},
"soundTypeStepWood":function(d){return "стъпки по дърво"},
"soundTypeSuccess":function(d){return "успешно минато ниво"},
"soundTypeZombieBrains":function(d){return "стенещо зомби"},
"soundTypeZombieGroan":function(d){return "ръмжащо зомби"},
"soundTypeZombieHurt":function(d){return "наранено зомби"},
"target":function(d){return "цел"},
"testModeAll":function(d){return "всички"},
"testModeMasked":function(d){return "маскиран"},
"tileData":function(d){return "данни за плочките"},
"timeDay":function(d){return "ден"},
"timeLong":function(d){return "дълго"},
"timeMedium":function(d){return "средно"},
"timeNight":function(d){return "нощ"},
"timeRandom":function(d){return "случаен"},
"timeSet":function(d){return "настройване на времето на"},
"timeShort":function(d){return "късо"},
"timeVeryLong":function(d){return "много дълго"},
"timeVeryShort":function(d){return "много кратко"},
"to":function(d){return "до"},
"toSlotNumber":function(d){return "в слот номер"},
"tooManyBlocksFail":function(d){return "Пъзел "+craft_locale.v(d,"puzzleNumber")+" завършен. Поздравления! Той може да се завърши с "+craft_locale.p(d,"numBlocks",0,"bg",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "случайно завъртане"},
"useArrowKeys":function(d){return "Не е нужно да добавяш блокове! Движи се със стрелките и натисни Интервал или щракни на таблото, за да използваш елементите."},
"weather":function(d){return "време"},
"weatherTypeClear":function(d){return "ясно"},
"weatherTypeRain":function(d){return "дъжд"},
"weatherTypeThunder":function(d){return "гръм"}};