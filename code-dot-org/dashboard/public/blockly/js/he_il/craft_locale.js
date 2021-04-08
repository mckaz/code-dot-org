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
"absolute":function(d){return "ערך מוחלט"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "ב"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"he",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "הוסף"},
"blockActionAttack":function(d){return "התקף"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "collect"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "העלם"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "השלך"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "התפוצץ"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "הבהב"},
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
"blockActionMove":function(d){return "זוז"},
"blockActionMoveAway":function(d){return "התרחק מ"},
"blockActionMoveForward":function(d){return "לזוז קדימה"},
"blockActionMoveRandom":function(d){return "התקדם בכיוון רנדומלי"},
"blockActionMoveTo":function(d){return "זוז אל"},
"blockActionMoveToward":function(d){return "התקדם צעד קדימה"},
"blockActionPlaySound":function(d){return "השמע צליל"},
"blockActionRepeat":function(d){return "חזור שוב"},
"blockActionRepeatRandom":function(d){return "repeat random"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "הושרץ"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "להשיג נקודות"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "wait"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "השמד בלוק"},
"blockIf":function(d){return "אם"},
"blockIfLavaAhead":function(d){return "אם לבה נמצאת מקדימה"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "זוז"},
"blockMoveBackward":function(d){return "זוז אחורה"},
"blockMoveForward":function(d){return "לזוז קדימה"},
"blockPlace":function(d){return "מקם"},
"blockPlaceTorch":function(d){return "שים לפיד"},
"blockPlaceXAheadAhead":function(d){return "קדימה"},
"blockPlaceXAheadPlace":function(d){return "מקם"},
"blockPlaceXPlace":function(d){return "מקם"},
"blockPlantCrop":function(d){return "שתול יבול"},
"blockShear":function(d){return "לגזוז"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "חרוש את האדמה"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "פנה שמאלה"},
"blockTurnRight":function(d){return "פנה ימינה"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "אבן יסוד"},
"blockTypeBricks":function(d){return "לבנים"},
"blockTypeClay":function(d){return "חימר"},
"blockTypeClayHardened":function(d){return "חימר קשה"},
"blockTypeCobblestone":function(d){return "אבן"},
"blockTypeDirt":function(d){return "אדמה"},
"blockTypeDirtCoarse":function(d){return "אדמה גסה"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "ריק"},
"blockTypeFarmlandWet":function(d){return "אדמה חקלאית"},
"blockTypeGlass":function(d){return "זכוכית"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "דשא"},
"blockTypeGravel":function(d){return "חצץ"},
"blockTypeLava":function(d){return "לבה"},
"blockTypeLogAcacia":function(d){return "בול עץ שיטה"},
"blockTypeLogBirch":function(d){return "בול עץ ליבנה"},
"blockTypeLogJungle":function(d){return "בול עץ ג'ונגל"},
"blockTypeLogOak":function(d){return "בול עץ אלון"},
"blockTypeLogSpruce":function(d){return "בול עץ אשוחית"},
"blockTypeOreCoal":function(d){return "עפרות פחם"},
"blockTypeOreDiamond":function(d){return "עפרת יהלומים"},
"blockTypeOreEmerald":function(d){return "עפרת ברקת"},
"blockTypeOreGold":function(d){return "עפרת זהב"},
"blockTypeOreIron":function(d){return "עפרת ברזל"},
"blockTypeOreLapis":function(d){return "עפרת לפיס"},
"blockTypeOreRedstone":function(d){return "עפרת רדסטון"},
"blockTypePlanksAcacia":function(d){return "קרשי שיטה"},
"blockTypePlanksBirch":function(d){return "קרשי ליבנה"},
"blockTypePlanksJungle":function(d){return "קרשי ג'ונגל"},
"blockTypePlanksOak":function(d){return "קרשי אלון"},
"blockTypePlanksSpruce":function(d){return "קרשי אשוחית"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "מסילה"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "חול"},
"blockTypeSandstone":function(d){return "אבן חול"},
"blockTypeStone":function(d){return "אבן"},
"blockTypeTnt":function(d){return "חומר נפץ"},
"blockTypeTree":function(d){return "עץ"},
"blockTypeWater":function(d){return "מים"},
"blockTypeWool":function(d){return "צמר"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "קדימה"},
"blockWhileXAheadDo":function(d){return "בצע"},
"blockWhileXAheadWhile":function(d){return "כאשר"},
"cancel":function(d){return "בטל"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "זוז"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "למטה"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "שמאלה"},
"directionMiddle":function(d){return "אמצע"},
"directionRight":function(d){return "ימינה"},
"directionUp":function(d){return "למעלה"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "תרנגולת"},
"entityTypeCow":function(d){return "פרה"},
"entityTypeCreeper":function(d){return "קריפר"},
"entityTypeIronGolem":function(d){return "גולם ברזל"},
"entityTypePlayer":function(d){return "שחקן"},
"entityTypeSheep":function(d){return "כבשה"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "כאשר מותקף"},
"eventTypeWhenDay":function(d){return "אם יום"},
"eventTypeWhenNight":function(d){return "אם לילה"},
"eventTypeWhenRun":function(d){return "התחל ריצה"},
"eventTypeWhenSpawned":function(d){return "כאשר מזומן"},
"eventTypeWhenTouched":function(d){return "כאשר נוגעים בו"},
"eventTypeWhenUsed":function(d){return "כאשר משומש"},
"forever":function(d){return "כל הזמן"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "על-ידי גרירה והצבת בלוקים כאלו, ניתן ליצור אוסף של הוראות בשפת קוד למחשב - הנקראת ג'אווה סקריפט (Javascript). קוד זה מורה למחשב מה להציג על המסך. כל מה שאתם רואים ועושים במיינקראפט גם הוא מתחיל עם שורות קוד שכאלו."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "בחר את תוכנית הבית שלך."},
"houseSelectEasy":function(d){return "קל"},
"houseSelectHard":function(d){return "קשה"},
"houseSelectLetsBuild":function(d){return "בואו נבנה בית."},
"houseSelectMedium":function(d){return "בינוני"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "בלוק"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "כסה את הלבה על מנת לחצות ואז חצוב שני בלוקי ברזל בצד השני."},
"level11FailureMessage":function(d){return "הקפידו למקם ריצוף אם יש לבה מלפנים. פעולה זו תאפשר לכם לחצוב בבטחה שורה זו של משאבים."},
"level12FailureMessage":function(d){return "הקפידו על חציבת 3 בלוקי רדסטון. פעולה זו משלבת את מה שלמדתם מבניית הבית שלכם ושימוש במשפטי \"אם\" כדי להימנע מנפילה לתוך הלבה."},
"level13FailureMessage":function(d){return "מקם מסילה לאורך שביל עפר המוביל מהדלת שלך עד לקצה המפה."},
"level1FailureMessage":function(d){return "עליך להשתמש בפקודות כדי להגיע אל הכבשים."},
"level1TooFewBlocksMessage":function(d){return "נסו להשתמש בפקודות נוספות על מנת להוליך אתןהכבשים."},
"level2FailureMessage":function(d){return "על מנת לכרות עץ, עליכם ללכת עד שתגיעו אל הגזע שלו, ולהשתמש בפקודה \"להשמיד את הבלוק\"."},
"level2TooFewBlocksMessage":function(d){return "נסו להשתמש בפקודות נוספות על מנת לכרות את העץ. לכו אל גזעו והשתמשו בפקודה \"להשמיד את הבלוק\"."},
"level3FailureMessage":function(d){return "כדי לאסוף צמר של כבשה, עליכם ללכת לכל כבשה ולהשתמש בפקודה \"גזירה\". זכרו להשתמש בפקודות פנייה כדי להגיע אל הכבשים."},
"level3TooFewBlocksMessage":function(d){return "נסה להשתמש בפקודות נוספות על מנת לאסוף צמר של כבשה. לכו לכל כבשה והשתמשו בפקודה \"גזירה\"."},
"level4FailureMessage":function(d){return "עליכם להשתמש בפקודה \"השמד בלוק\" על כל אחד משלושת הגזעים."},
"level5FailureMessage":function(d){return "מקמו בלוקים על קווי העפר על מנת לבנות קיר. הפקודה בצבע ורוד \"חזור\" תפעיל פקודות הממוקמות בתוכה, כמו \"מקם אבן\" ו-\"להתקדם\"."},
"level6FailureMessage":function(d){return "מקמו בלוקים על קווי העפר של הבית כדי להשלים את הפאזל."},
"level7FailureMessage":function(d){return "השתמשו בפקודה \"שתול\" על מנת למקם יבולים על כל חלקת אדמה כהה."},
"level8FailureMessage":function(d){return "אם תגעו במטפס הוא יתפוצץ. עליכם להתגנב מסביב, ולהיכנס לבית שלכם."},
"level9FailureMessage":function(d){return "אל תשכחו להציב לפחות 2 לפידים כדי להאיר את דרככם ולכרות לפחות 2 בלוקי פחם."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "בלוק"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "לבנים"},
"miniBlockBucketLava":function(d){return "דלי לבה"},
"miniBlockBucketWater":function(d){return "דלי מים"},
"miniBlockCarrots":function(d){return "גזרים"},
"miniBlockCoal":function(d){return "פחם"},
"miniBlockCobblestone":function(d){return "אבן"},
"miniBlockDiamond":function(d){return "יהלום"},
"miniBlockDirt":function(d){return "אדמה"},
"miniBlockDirtCoarse":function(d){return "אדמה גסה"},
"miniBlockEgg":function(d){return "ביצה"},
"miniBlockEmerald":function(d){return "אזמרגד"},
"miniBlockGravel":function(d){return "חצץ"},
"miniBlockGunPowder":function(d){return "אבק שרפה"},
"miniBlockIngotGold":function(d){return "מטיל זהב"},
"miniBlockIngotIron":function(d){return "מטיל ברזל"},
"miniBlockLapisLazuli":function(d){return "לאפיס לאזולי"},
"miniBlockLogAcacia":function(d){return "בול עץ שיטה"},
"miniBlockLogBirch":function(d){return "בול עץ ליבנה"},
"miniBlockLogJungle":function(d){return "בול עץ ג'ונגל"},
"miniBlockLogOak":function(d){return "בול עץ אלון"},
"miniBlockLogSpruce":function(d){return "בול עץ אשוחית"},
"miniBlockMilk":function(d){return "חלב"},
"miniBlockPlanksAcacia":function(d){return "קרשי שיטה"},
"miniBlockPlanksBirch":function(d){return "קרשי ליבנה"},
"miniBlockPlanksJungle":function(d){return "קרשי ג'ונגל"},
"miniBlockPlanksOak":function(d){return "קרשי אלון"},
"miniBlockPlanksSpruce":function(d){return "קרשי אשוחית"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "תפוח אדמה"},
"miniBlockRedstoneDust":function(d){return "אבקת נחושת"},
"miniBlockSand":function(d){return "חול"},
"miniBlockSandstone":function(d){return "אבן חול"},
"miniBlockSheep":function(d){return "כבשה"},
"miniBlockWheat":function(d){return "חיטה"},
"miniBlockWool":function(d){return "צמר"},
"nextLevelMsg":function(d){return "פאזל "+craft_locale.v(d,"puzzleNumber")+" הושלם. מזל טוב!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "בחר דמות."},
"playerSelectChooseSelectButton":function(d){return "בחר"},
"playerSelectLetsGetStarted":function(d){return "בואו נתחיל."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "באפשרותך להקיש \"להמשיך לשחק\" על מנת לחזור לשחק את המשחק."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "ניקוד"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "בחר"},
"soundTypeBump":function(d){return "התקלות"},
"soundTypeChickenBawk":function(d){return "קרקור תרנגולת"},
"soundTypeChickenHurt":function(d){return "פגיעה בתרנגולת"},
"soundTypeCollectedBlock":function(d){return "אסוף בלוק"},
"soundTypeCowHuff":function(d){return "נהמת פרה"},
"soundTypeCowHurt":function(d){return "פגיעה בפרה"},
"soundTypeCowMoo":function(d){return "געייה של פרה"},
"soundTypeCowMooLong":function(d){return "געייה ארוכה של פרה"},
"soundTypeCreeperHiss":function(d){return "לחישה של הקריפר"},
"soundTypeDig_wood1":function(d){return "שבירה של עץ"},
"soundTypeDoorOpen":function(d){return "פתיחה של דלת"},
"soundTypeExplode":function(d){return "התפוצץ"},
"soundTypeFailure":function(d){return "כשלון ברמה"},
"soundTypeFall":function(d){return "נפילה"},
"soundTypeFizz":function(d){return "תסס"},
"soundTypeFuse":function(d){return "התכה"},
"soundTypeIronGolemHit":function(d){return "מכה של גולם ברזל"},
"soundTypeMetalWhack":function(d){return "הלימה במתכת"},
"soundTypeMinecart":function(d){return "עגלת מכרה"},
"soundTypePlaceBlock":function(d){return "מקם בלוק"},
"soundTypePunch":function(d){return "הכה"},
"soundTypeSheepBaa":function(d){return "פעייה של כבשה"},
"soundTypeStepFarmland":function(d){return "צעידה בחווה"},
"soundTypeStepGrass":function(d){return "צעידה על דשא"},
"soundTypeStepGravel":function(d){return "צעידה על חצץ"},
"soundTypeStepStone":function(d){return "צעידה על אבן"},
"soundTypeStepWood":function(d){return "צעידה על עץ"},
"soundTypeSuccess":function(d){return "הצלחה ברמה"},
"soundTypeZombieBrains":function(d){return "גניחה של זומבי"},
"soundTypeZombieGroan":function(d){return "נהימה של זומבי"},
"soundTypeZombieHurt":function(d){return "פגיעה בזומבי"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "יום"},
"timeLong":function(d){return "ארוך"},
"timeMedium":function(d){return "בינוני"},
"timeNight":function(d){return "לילה"},
"timeRandom":function(d){return "אקראי"},
"timeSet":function(d){return "time set"},
"timeShort":function(d){return "קצר"},
"timeVeryLong":function(d){return "ארוך מאד"},
"timeVeryShort":function(d){return "קצר מאוד"},
"to":function(d){return "ל-"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "פאזל "+craft_locale.v(d,"puzzleNumber")+" הושלם. מזל טוב! אפשר גם להשלים את זה עם "+craft_locale.p(d,"numBlocks",0,"he",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "הסתובב בכיוון אקראי"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};