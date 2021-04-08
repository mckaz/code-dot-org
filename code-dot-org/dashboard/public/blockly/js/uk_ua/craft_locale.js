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
"agentGenericFailureMessage":function(d){return "Продовжуйте програмувати! Не забувайте використовувати Agent, якщо вам знадобиться допомога."},
"agentTooFewBlocksFailureMessage":function(d){return "Спробуйте додавати по одному блоку за раз, щоб Agent опинився в потрібному місці."},
"at":function(d){return "на"},
"agentDiamondPathCongrats":function(d){return "Вітаємо, ви знайшли алмазний шлях! Ви вже зібрали "+craft_locale.p(d,"count",0,"uk",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"!"},
"blockActionAdd":function(d){return "додати"},
"blockActionAttack":function(d){return "атакувати"},
"blockActionClone":function(d){return "клонувати блоки"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "збирати"},
"blockActionCollectAll":function(d){return "зібрати все"},
"blockActionDestroyEntity":function(d){return "зникнути"},
"blockActionDetect":function(d){return "виявити"},
"blockActionDetectRedstone":function(d){return "виявити редстоун"},
"blockActionDrop":function(d){return "скинути"},
"blockActionDropAll":function(d){return "викинути все"},
"blockActionExecute":function(d){return "виконати команду"},
"blockActionExplodeEntity":function(d){return "вибухнути"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "миготіти"},
"blockActionGetItemCount":function(d){return "отримати кількість елементів"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "отримати відомості про елемент"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "give"},
"blockActionInspect":function(d){return "перевірити"},
"blockActionInspectData":function(d){return "перевірити дані"},
"blockActionKill":function(d){return "вбити ціль"},
"blockActionMove":function(d){return "переміститись"},
"blockActionMoveAway":function(d){return "рухатись від"},
"blockActionMoveForward":function(d){return "рухатись вперед"},
"blockActionMoveRandom":function(d){return "переміщуватись випадково"},
"blockActionMoveTo":function(d){return "рухатись до"},
"blockActionMoveToward":function(d){return "зробити крок до"},
"blockActionPlaySound":function(d){return "відтворити звук"},
"blockActionRepeat":function(d){return "повторити"},
"blockActionRepeatRandom":function(d){return "повторити випадково"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "створити"},
"blockActionSummon":function(d){return "викликати"},
"blockActionTeleport":function(d){return "телепортувати ціль"},
"blockActionTeleportToPlayer":function(d){return "телепортувати до гравця"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "до балу"},
"blockActionTransfer":function(d){return "передати"},
"blockActionWait":function(d){return "чекати"},
"blockActionWith":function(d){return "з"},
"blockData":function(d){return "дані блока"},
"blockDestroyBlock":function(d){return "знищити блок"},
"blockIf":function(d){return "якщо"},
"blockIfLavaAhead":function(d){return "якщо попереду лава"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "переміститись"},
"blockMoveBackward":function(d){return "рухатися назад"},
"blockMoveForward":function(d){return "рухатись вперед"},
"blockPlace":function(d){return "поставити"},
"blockPlaceTorch":function(d){return "поставити факел"},
"blockPlaceXAheadAhead":function(d){return "попереду"},
"blockPlaceXAheadPlace":function(d){return "поставити"},
"blockPlaceXPlace":function(d){return "поставити"},
"blockPlantCrop":function(d){return "посадити рослину"},
"blockShear":function(d){return "стригти"},
"blockTill":function(d){return "орати"},
"blockTillSoil":function(d){return "орати землю"},
"blockTurn":function(d){return "повернутися"},
"blockTurnLeft":function(d){return "повернути ліворуч"},
"blockTurnRight":function(d){return "повернути праворуч"},
"blockType":function(d){return "тип блока"},
"blockTypeBedrock":function(d){return "скеля"},
"blockTypeBricks":function(d){return "цеглини"},
"blockTypeClay":function(d){return "глина"},
"blockTypeClayHardened":function(d){return "загартована глина"},
"blockTypeCobblestone":function(d){return "бруківка"},
"blockTypeDirt":function(d){return "земля"},
"blockTypeDirtCoarse":function(d){return "грубий бруд"},
"blockTypeDoorIron":function(d){return "залізні двері"},
"blockTypeEmpty":function(d){return "пусто"},
"blockTypeFarmlandWet":function(d){return "поле"},
"blockTypeGlass":function(d){return "скло"},
"blockTypeGlowstone":function(d){return "світлокамінь"},
"blockTypeGrass":function(d){return "трава"},
"blockTypeGravel":function(d){return "гравій"},
"blockTypeLava":function(d){return "лава"},
"blockTypeLogAcacia":function(d){return "акацієва колода"},
"blockTypeLogBirch":function(d){return "березова колода"},
"blockTypeLogJungle":function(d){return "тропічна колода"},
"blockTypeLogOak":function(d){return "дубова колода"},
"blockTypeLogSpruce":function(d){return "ялинова колода"},
"blockTypeOreCoal":function(d){return "вугільна руда"},
"blockTypeOreDiamond":function(d){return "діамантова руда"},
"blockTypeOreEmerald":function(d){return "смарагдова руда"},
"blockTypeOreGold":function(d){return "золота руда"},
"blockTypeOreIron":function(d){return "залізна руда"},
"blockTypeOreLapis":function(d){return "лазуритова руда"},
"blockTypeOreRedstone":function(d){return "червона руда"},
"blockTypePlanksAcacia":function(d){return "акацієві дошки"},
"blockTypePlanksBirch":function(d){return "березові дошки"},
"blockTypePlanksJungle":function(d){return "тропічні дошки"},
"blockTypePlanksOak":function(d){return "дубові дошки"},
"blockTypePlanksSpruce":function(d){return "ялинові дошки"},
"blockTypePressurePlateUp":function(d){return "притискна пластина"},
"blockTypeRail":function(d){return "колія"},
"blockTypeRailsRedstoneTorch":function(d){return "факел із редстоуну"},
"blockTypeRedstoneWire":function(d){return "дріт із редстоуну"},
"blockTypeSand":function(d){return "пісок"},
"blockTypeSandstone":function(d){return "пісковик"},
"blockTypeStone":function(d){return "камінь"},
"blockTypeTnt":function(d){return "динаміт"},
"blockTypeTree":function(d){return "дерево"},
"blockTypeWater":function(d){return "вода"},
"blockTypeWool":function(d){return "вовна"},
"blockTypeWoolBlue":function(d){return "блакитна вовна"},
"blockTypeWoolMagenta":function(d){return "пурпурова вовна"},
"blockTypeWoolOrange":function(d){return "помаранчева вовна"},
"blockTypeWoolPink":function(d){return "рожева вовна"},
"blockTypeWoolRed":function(d){return "червона вовна"},
"blockTypeWoolYellow":function(d){return "жовта вовна"},
"blockWhileXAheadAhead":function(d){return "попереду"},
"blockWhileXAheadDo":function(d){return "робити"},
"blockWhileXAheadWhile":function(d){return "поки"},
"cancel":function(d){return "Скасувати"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "змусити"},
"cloneModeMove":function(d){return "переміститись"},
"cloneModeNormal":function(d){return "нормальний"},
"connectToCodeConnection":function(d){return "Щоб запустити цей проект у Minecraft: Education Edition, скористайтеся програмою Кодове підключення."},
"destination":function(d){return "призначення"},
"directionBack":function(d){return "назад"},
"directionDown":function(d){return "вниз"},
"directionForward":function(d){return "уперед"},
"directionLeft":function(d){return "ліворуч"},
"directionMiddle":function(d){return "посередині"},
"directionRight":function(d){return "праворуч"},
"directionUp":function(d){return "вгору"},
"downloadButton":function(d){return "Завантажити"},
"entityType":function(d){return "тип елемента"},
"entityTypeChicken":function(d){return "курка"},
"entityTypeCow":function(d){return "корова"},
"entityTypeCreeper":function(d){return "кріпер"},
"entityTypeIronGolem":function(d){return "залізний голем"},
"entityTypePlayer":function(d){return "гравець"},
"entityTypeSheep":function(d){return "вівця"},
"entityTypeZombie":function(d){return "зомбі"},
"eventTypeWhenAttacked":function(d){return "коли атакований"},
"eventTypeWhenDay":function(d){return "коли настає день"},
"eventTypeWhenNight":function(d){return "коли настає ніч"},
"eventTypeWhenRun":function(d){return "коли гра починається"},
"eventTypeWhenSpawned":function(d){return "коли створено"},
"eventTypeWhenTouched":function(d){return "коли торкається"},
"eventTypeWhenUsed":function(d){return "коли використовується"},
"forever":function(d){return "постійно"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Перетягуючи блоки у цьому завданні, можна створити набір інструкцій мовою програмування JavaScript. Цей код вкаже комп'ютеру, що саме відображати на екрані. Все, що ти бачиш і робиш у Майнкрафт також починається з рядків коду, схожих на цей."},
"getdataof":function(d){return "отримати відомості про"},
"getnameof":function(d){return "отримати ім’я"},
"houseSelectChooseFloorPlan":function(d){return "Обери план будинку."},
"houseSelectEasy":function(d){return "Легкий"},
"houseSelectHard":function(d){return "Складний"},
"houseSelectLetsBuild":function(d){return "Збудуємо будинок."},
"houseSelectMedium":function(d){return "Середній"},
"import":function(d){return "Імпорт"},
"importShareLinkBody":function(d){return "Введіть своє посилання на завдання з Години Коду та натисніть \"Імпорт\", щоб скопіювати свій код до Minecraft"},
"importShareLinkHeader":function(d){return "Імпортувати посилання на завдання"},
"inSlotNumber":function(d){return "у слоті номер"},
"itemTypeBlock":function(d){return "блок"},
"itemTypeDecoration":function(d){return "декор"},
"itemTypeMiscellaneous":function(d){return "різне"},
"itemTypeTool":function(d){return "інструмент"},
"items":function(d){return "елемент(и)"},
"itemsOfBlockType":function(d){return "елемент(и) блока типу"},
"level10FailureMessage":function(d){return "Прикрий лаву, щоб можна було пройти, а тоді добудь два залізні блоки з іншого боку."},
"level11FailureMessage":function(d){return "Переконайся, що шлях попереду замощений бруківкою, якщо там лава. Це дозволить безпечно добути цей рядок ресурсів."},
"level12FailureMessage":function(d){return "Не забудь добути 3 блоки червогої руди. Це поєднує вже вивчене під час будівництва будинку з використанням команди \"якщо\", щоб запобігти падінню у лаву."},
"level13FailureMessage":function(d){return "Розмісти \"колію\" вздовж шляху від дверей будинку до краю карти."},
"level1FailureMessage":function(d){return "Потрібно використати команди, щоб дістатись до вівці."},
"level1TooFewBlocksMessage":function(d){return "Спробуй використати більше команд, щоб дістатись до вівці."},
"level2FailureMessage":function(d){return "Щоб зрубати дерево, підійди до стовбура і використай команду \"знищити блок\"."},
"level2TooFewBlocksMessage":function(d){return "Спробуй використати більше команд, щоб зрубати дерево. Підійди до стовбура і використай команду \"знищити блок\"."},
"level3FailureMessage":function(d){return "Щоб зібрати вовну з обох овець, підійди до кожної з них і використай команду \"стригти\". Не забудь використати команду повороту, щоб дістатись до кожної вівці."},
"level3TooFewBlocksMessage":function(d){return "Спробуй використати більше команд, щоб зібрати вовну з обох овець. Підійди до кожної і використай команду \"стригти\"."},
"level4FailureMessage":function(d){return "Потрібно використати команду \"знищити блок\" на кожному з трьох стовбурів дерев."},
"level5FailureMessage":function(d){return "Розмісти блоки на земляних обрисах, щоб збудувати стіну. Рожева команда \"повторити\" виконуватиме команди, розміщені всередині, такі як \"поставити блок\" та \"рухатись вперед\"."},
"level6FailureMessage":function(d){return "Розмісти блоки на земляних обрисах будинку, щоб виконати завдання."},
"level7FailureMessage":function(d){return "Використай команду \"посадити\", щоб посадити рослини на кожному блоці темного обробленого ґрунту."},
"level8FailureMessage":function(d){return "Якщо торкнешся кріпера, він вибухне. Проберись повз них і дістанься дому."},
"level9FailureMessage":function(d){return "Не забудь розмістити принаймні 2 факели, щоб освітити шлях І добути принаймні 2 блоки вугілля."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "замасковано"},
"maskModeReplace":function(d){return "замінити"},
"minecraftBlock":function(d){return "блок"},
"minecraftNotConnected":function(d){return "Minecraft не підключено"},
"miniBlockBricks":function(d){return "цеглини"},
"miniBlockBucketLava":function(d){return "відро лави"},
"miniBlockBucketWater":function(d){return "відро води"},
"miniBlockCarrots":function(d){return "морква"},
"miniBlockCoal":function(d){return "вугілля"},
"miniBlockCobblestone":function(d){return "бруківка"},
"miniBlockDiamond":function(d){return "діамант"},
"miniBlockDirt":function(d){return "земля"},
"miniBlockDirtCoarse":function(d){return "грубий бруд"},
"miniBlockEgg":function(d){return "яйце"},
"miniBlockEmerald":function(d){return "смарагд"},
"miniBlockGravel":function(d){return "гравій"},
"miniBlockGunPowder":function(d){return "порох"},
"miniBlockIngotGold":function(d){return "золотий злиток"},
"miniBlockIngotIron":function(d){return "залізний злиток"},
"miniBlockLapisLazuli":function(d){return "лазур"},
"miniBlockLogAcacia":function(d){return "акацієва колода"},
"miniBlockLogBirch":function(d){return "березова колода"},
"miniBlockLogJungle":function(d){return "тропічна колода"},
"miniBlockLogOak":function(d){return "дубова колода"},
"miniBlockLogSpruce":function(d){return "ялинова колода"},
"miniBlockMilk":function(d){return "молоко"},
"miniBlockPlanksAcacia":function(d){return "акацієві дошки"},
"miniBlockPlanksBirch":function(d){return "березові дошки"},
"miniBlockPlanksJungle":function(d){return "тропічні дошки"},
"miniBlockPlanksOak":function(d){return "дубові дошки"},
"miniBlockPlanksSpruce":function(d){return "ялинові дошки"},
"miniBlockPoppy":function(d){return "мак"},
"miniBlockPotato":function(d){return "картопля"},
"miniBlockRedstoneDust":function(d){return "пил редстоун"},
"miniBlockSand":function(d){return "пісок"},
"miniBlockSandstone":function(d){return "пісковик"},
"miniBlockSheep":function(d){return "вівця"},
"miniBlockWheat":function(d){return "пшениця"},
"miniBlockWool":function(d){return "вовна"},
"nextLevelMsg":function(d){return "Завдання "+craft_locale.v(d,"puzzleNumber")+" виконано. Вітаємо!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "знищити"},
"oldBlockHandlingsKeep":function(d){return "зберегти"},
"oldBlockHandlingsReplace":function(d){return "замінити"},
"onBehalfOf":function(d){return "від імені"},
"playerSelectChooseCharacter":function(d){return "Обери персонажа."},
"playerSelectChooseSelectButton":function(d){return "Обрати"},
"playerSelectLetsGetStarted":function(d){return "Розпочнемо."},
"quantity":function(d){return "кількість"},
"reinfFeedbackMsg":function(d){return "Можеш натиснути \"Грати далі\", щоб повернутись до своєї гри."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Запустити Agent"},
"score":function(d){return "Рахунок"},
"seconds":function(d){return "секунда(-и)"},
"selectChooseButton":function(d){return "Обрати"},
"soundTypeBump":function(d){return "поштовх"},
"soundTypeChickenBawk":function(d){return "курка кудкудакає"},
"soundTypeChickenHurt":function(d){return "курці боляче"},
"soundTypeCollectedBlock":function(d){return "блок взято"},
"soundTypeCowHuff":function(d){return "корова пхикає"},
"soundTypeCowHurt":function(d){return "корові боляче"},
"soundTypeCowMoo":function(d){return "корова мукає"},
"soundTypeCowMooLong":function(d){return "корова мууукає"},
"soundTypeCreeperHiss":function(d){return "кріпер шипить"},
"soundTypeDig_wood1":function(d){return "дерево ламається"},
"soundTypeDoorOpen":function(d){return "двері відкриваються"},
"soundTypeExplode":function(d){return "вибухнути"},
"soundTypeFailure":function(d){return "рівень програно"},
"soundTypeFall":function(d){return "падіння"},
"soundTypeFizz":function(d){return "шипіння"},
"soundTypeFuse":function(d){return "запалення"},
"soundTypeIronGolemHit":function(d){return "залізному голему боляче"},
"soundTypeMetalWhack":function(d){return "металевий удар"},
"soundTypeMinecart":function(d){return "вагонетка"},
"soundTypePlaceBlock":function(d){return "блок поставлено"},
"soundTypePunch":function(d){return "удар"},
"soundTypeSheepBaa":function(d){return "вівця бекає"},
"soundTypeStepFarmland":function(d){return "крок по ріллі"},
"soundTypeStepGrass":function(d){return "крок по траві"},
"soundTypeStepGravel":function(d){return "крок по гравію"},
"soundTypeStepStone":function(d){return "крок по каменю"},
"soundTypeStepWood":function(d){return "крок по дереву"},
"soundTypeSuccess":function(d){return "рівень пройдено"},
"soundTypeZombieBrains":function(d){return "зомбі стогне"},
"soundTypeZombieGroan":function(d){return "зомбі гарчить"},
"soundTypeZombieHurt":function(d){return "зомбі боляче"},
"target":function(d){return "ціль"},
"testModeAll":function(d){return "усі"},
"testModeMasked":function(d){return "замасковано"},
"tileData":function(d){return "блокові дані"},
"timeDay":function(d){return "день"},
"timeLong":function(d){return "довго"},
"timeMedium":function(d){return "середньо"},
"timeNight":function(d){return "ніч"},
"timeRandom":function(d){return "випадковий"},
"timeSet":function(d){return "установити час на"},
"timeShort":function(d){return "коротко"},
"timeVeryLong":function(d){return "дуже довго"},
"timeVeryShort":function(d){return "дуже коротко"},
"to":function(d){return "до"},
"toSlotNumber":function(d){return "до слоту номер"},
"tooManyBlocksFail":function(d){return "Завдання "+craft_locale.v(d,"puzzleNumber")+" виконано. Вітаємо! Це завдання можна виконати "+craft_locale.p(d,"numBlocks",0,"uk",{"one":"1 блоком","other":craft_locale.n(d,"numBlocks")+" блоками"})+"."},
"turnRandom":function(d){return "повернути випадково"},
"useArrowKeys":function(d){return "Не потрібно додавати жодних блоків! Можна пересуватися за допомогою стрілок і використовувати елементи, натискаючи пробіл або торкаючись ігрової панелі."},
"weather":function(d){return "погода"},
"weatherTypeClear":function(d){return "ясно"},
"weatherTypeRain":function(d){return "дощ"},
"weatherTypeThunder":function(d){return "грім"}};