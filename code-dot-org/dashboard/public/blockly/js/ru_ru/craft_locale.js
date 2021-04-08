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
"agentGenericFailureMessage":function(d){return "Продолжайте программировать! Не забывайте обращаться за помощью к исполнителю."},
"agentTooFewBlocksFailureMessage":function(d){return "Попробуйте добавить по одному блоку каждый раз, чтобы исполнитель добрался до нужного места."},
"at":function(d){return "в"},
"agentDiamondPathCongrats":function(d){return "Поздравляем, вы нашли алмазную дорожку!  Вы собрали "+craft_locale.p(d,"count",0,"ru",{"one":"1 diamond","other":craft_locale.n(d,"count")+" алмазов"})+" !"},
"blockActionAdd":function(d){return "добавить"},
"blockActionAttack":function(d){return "атакует"},
"blockActionClone":function(d){return "клонировать блоки"},
"blockActionCloneFiltered":function(d){return "только клон"},
"blockActionCollect":function(d){return "собрать"},
"blockActionCollectAll":function(d){return "собрать всё"},
"blockActionDestroyEntity":function(d){return "исчезнуть"},
"blockActionDetect":function(d){return "обнаружить"},
"blockActionDetectRedstone":function(d){return "обнаружить красный камень"},
"blockActionDrop":function(d){return "выложить"},
"blockActionDropAll":function(d){return "выложить всё"},
"blockActionExecute":function(d){return "выполнить команду"},
"blockActionExplodeEntity":function(d){return "взорвать"},
"blockActionFill":function(d){return "заполнить"},
"blockActionFlashEntity":function(d){return "мерцать"},
"blockActionGetItemCount":function(d){return "получить количество элементов"},
"blockActionGetItemCountInSlotNumber":function(d){return "получить количество элементов в номер слота"},
"blockActionGetItemDetail":function(d){return "получить деталь элемента"},
"blockActionGetItemDetailInSlotNumber":function(d){return "получить детали элемента в номер слота"},
"blockActionGetItemSpace":function(d){return "получить место элемента"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "дать"},
"blockActionInspect":function(d){return "изучить"},
"blockActionInspectData":function(d){return "изучить данные"},
"blockActionKill":function(d){return "убить цель"},
"blockActionMove":function(d){return "переместить"},
"blockActionMoveAway":function(d){return "двигаться от"},
"blockActionMoveForward":function(d){return "переместить вперед"},
"blockActionMoveRandom":function(d){return "двигаться случайно"},
"blockActionMoveTo":function(d){return "двигаться к"},
"blockActionMoveToward":function(d){return "сделать шаг вперед"},
"blockActionPlaySound":function(d){return "проиграть звук"},
"blockActionRepeat":function(d){return "повторить"},
"blockActionRepeatRandom":function(d){return "повторить случайно"},
"blockActionSetBlock":function(d){return "установите блок"},
"blockActionSpawn":function(d){return "создать"},
"blockActionSummon":function(d){return "призвать"},
"blockActionTeleport":function(d){return "перенести цель"},
"blockActionTeleportToPlayer":function(d){return "перенестись к игроку"},
"blockActionTestForBlock":function(d){return "проверяет тип блока"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "к счету"},
"blockActionTransfer":function(d){return "переместить"},
"blockActionWait":function(d){return "подождите"},
"blockActionWith":function(d){return "с"},
"blockData":function(d){return "данные блока"},
"blockDestroyBlock":function(d){return "удалить блок"},
"blockIf":function(d){return "если"},
"blockIfLavaAhead":function(d){return "если впереди лава"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "переместить"},
"blockMoveBackward":function(d){return "переместить назад"},
"blockMoveForward":function(d){return "переместить вперед"},
"blockPlace":function(d){return "разместить"},
"blockPlaceTorch":function(d){return "разместить фонарь"},
"blockPlaceXAheadAhead":function(d){return "вперед"},
"blockPlaceXAheadPlace":function(d){return "разместить"},
"blockPlaceXPlace":function(d){return "разместить"},
"blockPlantCrop":function(d){return "посадить растение"},
"blockShear":function(d){return "стричь"},
"blockTill":function(d){return "до"},
"blockTillSoil":function(d){return "пахать землю"},
"blockTurn":function(d){return "повернуть"},
"blockTurnLeft":function(d){return "повернуть налево"},
"blockTurnRight":function(d){return "повернуть направо"},
"blockType":function(d){return "тип блока"},
"blockTypeBedrock":function(d){return "основа"},
"blockTypeBricks":function(d){return "кирпичи"},
"blockTypeClay":function(d){return "глина"},
"blockTypeClayHardened":function(d){return "обожженная глина"},
"blockTypeCobblestone":function(d){return "булыжник"},
"blockTypeDirt":function(d){return "земля"},
"blockTypeDirtCoarse":function(d){return "крупнозернистая земля"},
"blockTypeDoorIron":function(d){return "железная дверь"},
"blockTypeEmpty":function(d){return "пустой"},
"blockTypeFarmlandWet":function(d){return "ферма"},
"blockTypeGlass":function(d){return "стекло"},
"blockTypeGlowstone":function(d){return "светящийся камень"},
"blockTypeGrass":function(d){return "трава"},
"blockTypeGravel":function(d){return "гравий"},
"blockTypeLava":function(d){return "лава"},
"blockTypeLogAcacia":function(d){return "акациевое бревно"},
"blockTypeLogBirch":function(d){return "березовое бревно"},
"blockTypeLogJungle":function(d){return "бревно тропического дерева"},
"blockTypeLogOak":function(d){return "дубовый ствол"},
"blockTypeLogSpruce":function(d){return "сосновое бревно"},
"blockTypeOreCoal":function(d){return "угольная руда"},
"blockTypeOreDiamond":function(d){return "алмазная руда"},
"blockTypeOreEmerald":function(d){return "изумрудная руда"},
"blockTypeOreGold":function(d){return "золотая руда"},
"blockTypeOreIron":function(d){return "железная руда"},
"blockTypeOreLapis":function(d){return "лазуритовая руда"},
"blockTypeOreRedstone":function(d){return "красная руда"},
"blockTypePlanksAcacia":function(d){return "доски из акации"},
"blockTypePlanksBirch":function(d){return "березовые доски"},
"blockTypePlanksJungle":function(d){return "доски из тропического дерева"},
"blockTypePlanksOak":function(d){return "дубовые доски"},
"blockTypePlanksSpruce":function(d){return "сосновые доски"},
"blockTypePressurePlateUp":function(d){return "нажимная пластина"},
"blockTypeRail":function(d){return "рельсы"},
"blockTypeRailsRedstoneTorch":function(d){return "факел из красного камня"},
"blockTypeRedstoneWire":function(d){return "провод из красного камня"},
"blockTypeSand":function(d){return "песок"},
"blockTypeSandstone":function(d){return "песчаник"},
"blockTypeStone":function(d){return "камень"},
"blockTypeTnt":function(d){return "взрывчатка"},
"blockTypeTree":function(d){return "дерево"},
"blockTypeWater":function(d){return "вода"},
"blockTypeWool":function(d){return "шерсть"},
"blockTypeWoolBlue":function(d){return "голубая шерсть"},
"blockTypeWoolMagenta":function(d){return "малиновая шерсть"},
"blockTypeWoolOrange":function(d){return "оранжевая шерсть"},
"blockTypeWoolPink":function(d){return "розовая шерсть"},
"blockTypeWoolRed":function(d){return "красная шерсть"},
"blockTypeWoolYellow":function(d){return "желтая шерсть"},
"blockWhileXAheadAhead":function(d){return "вперед"},
"blockWhileXAheadDo":function(d){return "выполнить"},
"blockWhileXAheadWhile":function(d){return "пока"},
"cancel":function(d){return "Отмена"},
"cloneMode":function(d){return "режим клонирования"},
"cloneModeForce":function(d){return "сила"},
"cloneModeMove":function(d){return "переместить"},
"cloneModeNormal":function(d){return "норма"},
"connectToCodeConnection":function(d){return "Чтобы выполнить этот проект в Minecraft: Education Edition, используйте приложение Code Connection."},
"destination":function(d){return "пункт назначения"},
"directionBack":function(d){return "назад"},
"directionDown":function(d){return "вниз"},
"directionForward":function(d){return "вперед"},
"directionLeft":function(d){return "влево"},
"directionMiddle":function(d){return "середина"},
"directionRight":function(d){return "вправо"},
"directionUp":function(d){return "вверх"},
"downloadButton":function(d){return "Скачать"},
"entityType":function(d){return "тип сущности"},
"entityTypeChicken":function(d){return "курица"},
"entityTypeCow":function(d){return "корова"},
"entityTypeCreeper":function(d){return "крипер"},
"entityTypeIronGolem":function(d){return "железный голем"},
"entityTypePlayer":function(d){return "игрок"},
"entityTypeSheep":function(d){return "овца"},
"entityTypeZombie":function(d){return "зомби"},
"eventTypeWhenAttacked":function(d){return "атакован"},
"eventTypeWhenDay":function(d){return "днем"},
"eventTypeWhenNight":function(d){return "ночью"},
"eventTypeWhenRun":function(d){return "при запуске"},
"eventTypeWhenSpawned":function(d){return "при создании"},
"eventTypeWhenTouched":function(d){return "при касании"},
"eventTypeWhenUsed":function(d){return "при использовании"},
"forever":function(d){return "всегда"},
"from":function(d){return "от"},
"generatedCodeDescription":function(d){return "Перетаскивая и размещая блоки в этой головоломке, вы создали ряд инструкций на компьютерном языке Javascript. Этот код говорит компьютерам, что нужно отображать на экране. Все, что вы видите и делаете в Minecraft, также начинается с таких строк компьютерного кода."},
"getdataof":function(d){return "получить данные"},
"getnameof":function(d){return "получить имя"},
"houseSelectChooseFloorPlan":function(d){return "Выберите план этажа для своего дома."},
"houseSelectEasy":function(d){return "Легко"},
"houseSelectHard":function(d){return "Сложно"},
"houseSelectLetsBuild":function(d){return "Давай построим дом."},
"houseSelectMedium":function(d){return "Средний"},
"import":function(d){return "Импортировать"},
"importShareLinkBody":function(d){return "Введите здесь ссылку общего доступа Часа Кода и нажмите «Импорт», чтобы скопировать свой код в Minecraft."},
"importShareLinkHeader":function(d){return "Импорт ссылки общего доступа"},
"inSlotNumber":function(d){return "в ячейке номер"},
"itemTypeBlock":function(d){return "блок"},
"itemTypeDecoration":function(d){return "украшение"},
"itemTypeMiscellaneous":function(d){return "разное"},
"itemTypeTool":function(d){return "инструмент"},
"items":function(d){return "задание(я)"},
"itemsOfBlockType":function(d){return "предмет(ы) типа"},
"level10FailureMessage":function(d){return "Засыпьте лаву, чтобы ее можно было перейти. Затем выкопайте два блока железа по другую сторону."},
"level11FailureMessage":function(d){return "Не забудьте положить булыжник, если впереди есть лава. Это позволит вам без опаски добыть ресурсы."},
"level12FailureMessage":function(d){return "Не забудьте выкопать 3 блока красного камня. В сочетании с использованием проверок, полученные при постройке дома знания позволят вам избежать падения в лаву."},
"level13FailureMessage":function(d){return "Положите рельсы на земляную дорожку от края карты до своей двери."},
"level1FailureMessage":function(d){return "Чтобы подойти к овце, нужно использовать команды."},
"level1TooFewBlocksMessage":function(d){return "Попробуйте использовать больше команд, чтобы подойти к овце."},
"level2FailureMessage":function(d){return "Чтобы срубить дерево, подойдите к его стволу и используйте команду уничтожения блока."},
"level2TooFewBlocksMessage":function(d){return "Попробуйте использовать больше команд, чтобы срубить дерево. Подойдите к его стволу и используйте команду уничтожения блока."},
"level3FailureMessage":function(d){return "Чтобы собрать шерсть с обеих овец, подойдите к каждой и используйте команду стрижки. Чтобы добраться до овцы, не забывайте использовать команды поворота."},
"level3TooFewBlocksMessage":function(d){return "Попробуйте использовать больше команд, чтобы собрать шерсть с обеих овец. Подойдите к каждой и используйте команду стрижки."},
"level4FailureMessage":function(d){return "Вам нужно использовать команду уничтожения блока для каждого из трех стволов."},
"level5FailureMessage":function(d){return "Чтобы построить стену, разместите блоки на земле по периметру. При использовании розовой команды повтора будут выполняться размещенные в ней команды вроде установки блока и движения вперед."},
"level6FailureMessage":function(d){return "Чтобы пройти головоломку, разместите блоки на земле по периметру дома."},
"level7FailureMessage":function(d){return "Используйте команду посадки, чтобы разместить растения на каждом участке темной вспаханной земли."},
"level8FailureMessage":function(d){return "Если коснуться крипера, он взорвется. Осторожно обойдите их и войдите в дом."},
"level9FailureMessage":function(d){return "Осветите себе путь хотя бы 2 факелами И добудьте не менее 2 ед. угля."},
"maskMode":function(d){return "вид маски"},
"maskModeMasked":function(d){return "скрыто"},
"maskModeReplace":function(d){return "заменить"},
"minecraftBlock":function(d){return "блок"},
"minecraftNotConnected":function(d){return "Minecraft не подключен"},
"miniBlockBricks":function(d){return "кирпичи"},
"miniBlockBucketLava":function(d){return "ведро лавы"},
"miniBlockBucketWater":function(d){return "ведро воды"},
"miniBlockCarrots":function(d){return "морковь"},
"miniBlockCoal":function(d){return "уголь"},
"miniBlockCobblestone":function(d){return "булыжник"},
"miniBlockDiamond":function(d){return "алмаз"},
"miniBlockDirt":function(d){return "земля"},
"miniBlockDirtCoarse":function(d){return "крупнозернистая земля"},
"miniBlockEgg":function(d){return "яйцо"},
"miniBlockEmerald":function(d){return "изумруд"},
"miniBlockGravel":function(d){return "гравий"},
"miniBlockGunPowder":function(d){return "порох"},
"miniBlockIngotGold":function(d){return "золотой слиток"},
"miniBlockIngotIron":function(d){return "железный слиток"},
"miniBlockLapisLazuli":function(d){return "лазурит"},
"miniBlockLogAcacia":function(d){return "акациевое бревно"},
"miniBlockLogBirch":function(d){return "березовое бревно"},
"miniBlockLogJungle":function(d){return "бревно тропического дерева"},
"miniBlockLogOak":function(d){return "дубовый ствол"},
"miniBlockLogSpruce":function(d){return "сосновое бревно"},
"miniBlockMilk":function(d){return "молоко"},
"miniBlockPlanksAcacia":function(d){return "доски из акации"},
"miniBlockPlanksBirch":function(d){return "березовые доски"},
"miniBlockPlanksJungle":function(d){return "доски из тропического дерева"},
"miniBlockPlanksOak":function(d){return "дубовые доски"},
"miniBlockPlanksSpruce":function(d){return "сосновые доски"},
"miniBlockPoppy":function(d){return "мак"},
"miniBlockPotato":function(d){return "картофель"},
"miniBlockRedstoneDust":function(d){return "пыль красного камня"},
"miniBlockSand":function(d){return "песок"},
"miniBlockSandstone":function(d){return "песчаник"},
"miniBlockSheep":function(d){return "овца"},
"miniBlockWheat":function(d){return "пшеница"},
"miniBlockWool":function(d){return "шерсть"},
"nextLevelMsg":function(d){return "Головоломка "+craft_locale.v(d,"puzzleNumber")+" решена. Поздравляем!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "уничтожить"},
"oldBlockHandlingsKeep":function(d){return "оставить"},
"oldBlockHandlingsReplace":function(d){return "заменить"},
"onBehalfOf":function(d){return "от имени"},
"playerSelectChooseCharacter":function(d){return "Выберите персонажа."},
"playerSelectChooseSelectButton":function(d){return "Выбрать"},
"playerSelectLetsGetStarted":function(d){return "Начнем!"},
"quantity":function(d){return "количество"},
"reinfFeedbackMsg":function(d){return "Вы можете нажать \"Продолжаем играть\" и вернуться к игре."},
"relative":function(d){return "относительный"},
"runAgent":function(d){return "Запустить Agent"},
"score":function(d){return "Счет"},
"seconds":function(d){return "с"},
"selectChooseButton":function(d){return "Выбрать"},
"soundTypeBump":function(d){return "глухой удар"},
"soundTypeChickenBawk":function(d){return "кудахтанье курицы"},
"soundTypeChickenHurt":function(d){return "курице больно"},
"soundTypeCollectedBlock":function(d){return "сбор блока"},
"soundTypeCowHuff":function(d){return "фырканье коровы"},
"soundTypeCowHurt":function(d){return "корове больно"},
"soundTypeCowMoo":function(d){return "мычание коровы"},
"soundTypeCowMooLong":function(d){return "протяжное мычание коровы"},
"soundTypeCreeperHiss":function(d){return "шипение крипера"},
"soundTypeDig_wood1":function(d){return "треск древесины"},
"soundTypeDoorOpen":function(d){return "открытие двери"},
"soundTypeExplode":function(d){return "взорвать"},
"soundTypeFailure":function(d){return "уровень не пройден"},
"soundTypeFall":function(d){return "падение"},
"soundTypeFizz":function(d){return "шипение"},
"soundTypeFuse":function(d){return "соединение"},
"soundTypeIronGolemHit":function(d){return "удар железного голема"},
"soundTypeMetalWhack":function(d){return "скрежет металла"},
"soundTypeMinecart":function(d){return "вагонетка"},
"soundTypePlaceBlock":function(d){return "размещение блока"},
"soundTypePunch":function(d){return "отбрасывание"},
"soundTypeSheepBaa":function(d){return "блеяние овцы"},
"soundTypeStepFarmland":function(d){return "шаг по ферме"},
"soundTypeStepGrass":function(d){return "шаг по траве"},
"soundTypeStepGravel":function(d){return "шаг по гравию"},
"soundTypeStepStone":function(d){return "шаг по камню"},
"soundTypeStepWood":function(d){return "шаг по дереву"},
"soundTypeSuccess":function(d){return "уровень пройден"},
"soundTypeZombieBrains":function(d){return "стон зомби"},
"soundTypeZombieGroan":function(d){return "рычание зомби"},
"soundTypeZombieHurt":function(d){return "зомби больно"},
"target":function(d){return "цель"},
"testModeAll":function(d){return "все"},
"testModeMasked":function(d){return "скрыто"},
"tileData":function(d){return "данные плитки"},
"timeDay":function(d){return "день"},
"timeLong":function(d){return "долго"},
"timeMedium":function(d){return "средне"},
"timeNight":function(d){return "ночь"},
"timeRandom":function(d){return "случайный"},
"timeSet":function(d){return "задать время"},
"timeShort":function(d){return "недолго"},
"timeVeryLong":function(d){return "очень долго"},
"timeVeryShort":function(d){return "очень недолго"},
"to":function(d){return "к"},
"toSlotNumber":function(d){return "в ячейку номер"},
"tooManyBlocksFail":function(d){return "Задание "+craft_locale.v(d,"puzzleNumber")+" выполнено. Поздравляем! Также его можно выполнить с помощью "+craft_locale.p(d,"numBlocks",0,"ru",{"one":"1 блока","other":craft_locale.n(d,"numBlocks")+" блоков"})+"."},
"turnRandom":function(d){return "повернуть случайно"},
"useArrowKeys":function(d){return "Вам не нужно добавлять какие-либо блоки! Перемещайтесь с помощью клавиш со стрелками и используйте предметы с помощью клавиши ПРОБЕЛ или касанием игрового поля."},
"weather":function(d){return "погода"},
"weatherTypeClear":function(d){return "ясно"},
"weatherTypeRain":function(d){return "дождь"},
"weatherTypeThunder":function(d){return "гром"}};