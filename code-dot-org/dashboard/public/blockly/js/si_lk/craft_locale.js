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
"absolute":function(d){return "නිරපේක්ෂ"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "හිදී"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"en",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "එක් කරන්න"},
"blockActionAttack":function(d){return "attack"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "එකතු කරන්න"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "අතුරැදහන්"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "drop"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "explode"},
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
"blockActionMove":function(d){return "යන්න"},
"blockActionMoveAway":function(d){return "move away from"},
"blockActionMoveForward":function(d){return "ඉදිරියට යන්න"},
"blockActionMoveRandom":function(d){return "move random"},
"blockActionMoveTo":function(d){return "move to"},
"blockActionMoveToward":function(d){return "move a step toward"},
"blockActionPlaySound":function(d){return "play sound"},
"blockActionRepeat":function(d){return "repeat"},
"blockActionRepeatRandom":function(d){return "repeat random"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "spawn"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "to score"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "බලා සිටින්න"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "බාධකය විනාශ කරන්න"},
"blockIf":function(d){return "if"},
"blockIfLavaAhead":function(d){return "ඉදිරියෙහි ලෝ දිය ඇත්නම්"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "යන්න"},
"blockMoveBackward":function(d){return "පසුපසට යන්න"},
"blockMoveForward":function(d){return "ඉදිරියට යන්න"},
"blockPlace":function(d){return "ස්ථානයේ"},
"blockPlaceTorch":function(d){return "විදුලි පන්දමක් පිහිටුවන්න"},
"blockPlaceXAheadAhead":function(d){return "ඉදිරියෙහි"},
"blockPlaceXAheadPlace":function(d){return "ස්ථානයේ"},
"blockPlaceXPlace":function(d){return "ස්ථානයේ"},
"blockPlantCrop":function(d){return "පැළයක් සිටුවන්න"},
"blockShear":function(d){return "ලොම් කපන්න"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "පස කොටන්න"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "වමට හැරෙන්න"},
"blockTurnRight":function(d){return "දකුණට හැරෙන්න"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "ගල"},
"blockTypeBricks":function(d){return "ගඩොල්"},
"blockTypeClay":function(d){return "මැටි"},
"blockTypeClayHardened":function(d){return "ඝණ වූ මැටි"},
"blockTypeCobblestone":function(d){return "වටකුරු ගල්"},
"blockTypeDirt":function(d){return "අපවිත්‍ර දෑ"},
"blockTypeDirtCoarse":function(d){return "රළු පස්"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "හිස්"},
"blockTypeFarmlandWet":function(d){return "ගොවිබිම"},
"blockTypeGlass":function(d){return "වීදුරු"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "තණකොළ"},
"blockTypeGravel":function(d){return "බොරලු"},
"blockTypeLava":function(d){return "ලෝ දිය"},
"blockTypeLogAcacia":function(d){return "ඇකේෂියා ලී කොට"},
"blockTypeLogBirch":function(d){return "බර්ච් ලී කොට"},
"blockTypeLogJungle":function(d){return "කැලෑ දැව කොටය"},
"blockTypeLogOak":function(d){return "ඕක් ලී කොට"},
"blockTypeLogSpruce":function(d){return "දැව කොටය"},
"blockTypeOreCoal":function(d){return "ගල් අඟුරු ලෝපස්"},
"blockTypeOreDiamond":function(d){return "දියමන්ති ලෝපස්"},
"blockTypeOreEmerald":function(d){return "මරකත ලෝපස්"},
"blockTypeOreGold":function(d){return "රන් ලෝපස්"},
"blockTypeOreIron":function(d){return "යපස්"},
"blockTypeOreLapis":function(d){return "දීප්තිමත් නිල්මැණික්"},
"blockTypeOreRedstone":function(d){return "දීප්තිමත් රතුමැණික්"},
"blockTypePlanksAcacia":function(d){return "ඇකේශියා ලෑලි"},
"blockTypePlanksBirch":function(d){return "බර්ච් ලෑලි"},
"blockTypePlanksJungle":function(d){return "කැළෑ ලෑලි"},
"blockTypePlanksOak":function(d){return "ඕක් ලෑලි"},
"blockTypePlanksSpruce":function(d){return "දැව ලෑලි"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "රේල් පීල්ල"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "වැලි"},
"blockTypeSandstone":function(d){return "වැලිගල්"},
"blockTypeStone":function(d){return "ගල"},
"blockTypeTnt":function(d){return "පුපුරන ද්‍රව්‍ය"},
"blockTypeTree":function(d){return "ගස"},
"blockTypeWater":function(d){return "ජලය"},
"blockTypeWool":function(d){return "ලොම්"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "ඉදිරියෙහි"},
"blockWhileXAheadDo":function(d){return "do"},
"blockWhileXAheadWhile":function(d){return "එතෙක්"},
"cancel":function(d){return "අවලංගු කරන්න"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "යන්න"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "යට"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "වම"},
"directionMiddle":function(d){return "middle"},
"directionRight":function(d){return "දකුණ"},
"directionUp":function(d){return "උඩ"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "chicken"},
"entityTypeCow":function(d){return "cow"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "player"},
"entityTypeSheep":function(d){return "sheep"},
"entityTypeZombie":function(d){return "පිල්ලිය"},
"eventTypeWhenAttacked":function(d){return "when attacked"},
"eventTypeWhenDay":function(d){return "when day"},
"eventTypeWhenNight":function(d){return "when night"},
"eventTypeWhenRun":function(d){return "දුවන විට"},
"eventTypeWhenSpawned":function(d){return "when spawned"},
"eventTypeWhenTouched":function(d){return "when touched"},
"eventTypeWhenUsed":function(d){return "when used"},
"forever":function(d){return "forever"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "මෙම ප්‍රෙහෙලිකාවේ ඇති බ්ලොක්ස් ඇදගෙන යාමෙන් හා ස්ථානගත කිරීමෙන් ඔබ විසින් පරිගණකයට උපදෙස් මාලාවක් සපයණුලබයි මෙහිදී භාවිතාවන පරිගණක භාෂාව JavaScript ලෙස හැදින්වේ. මෙම පරිගණක කේත, ඔබේ පරිගණකයේ කුමක් සංදර්ශණය කලයුතු දැයි පරිගණකයට උපදෙස් ලබාදේ. ඔබ විසින් මෙම Minecraft ක්‍රීඩාවේ කරණුලබන හා ඔබට පෙනෙන සියලුම ක්‍රියාවන් මෙවැනි පරිගණක කේතයන් සමූහයකින් සමන්විත වේ."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "ඔබේ නිවස සඳහා මහල් සැලස්ම තෝරාගන්න."},
"houseSelectEasy":function(d){return "පහසු"},
"houseSelectHard":function(d){return "ඉතා අමාරු"},
"houseSelectLetsBuild":function(d){return "නිවසක් තනමු."},
"houseSelectMedium":function(d){return "මධ්‍යස්ත"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "කොටස"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "මේ හරහා ගමන්කිරීමට ලෝදිය ආවරණයකරන්න, ඊට පසු යකඩ බ්ලොක් දෙකක් කනින්න."},
"level11FailureMessage":function(d){return "ලෝදිය තිබේනම් වටකුරුගල් වලින් ලෝදිය ආවරණයකරන්න. එයින් ඔබට සම්පත් කැනීමට සුරක්ෂිතව ගමන්කිරීම පහසු කරවනු ඇත."},
"level12FailureMessage":function(d){return "රතු පාෂාණ බ්ලොක් 3ක් කැණීමට අමතක කරන්න එපා. මෙහිදී ඔබ if විධානය භාවිතාකරමින් ලෝදිය වෙත වැටීම වලකාලයි. මේ සඳහා ඔබ පෙරදී ඔබගේ නිවස සෑදීමට යොදාගත් දැනුම භාවිත කළ හැකිය."},
"level13FailureMessage":function(d){return "ඔබේ නිවසේ දොරේ සිට සිතියමේ කෙලවර දක්වා ඇති රේඛාව මත පීල්ල තබන්න."},
"level1FailureMessage":function(d){return "බැටලුවාව ඉදිරියට ගෙනයාමට විධානයන් යොදාගන්න."},
"level1TooFewBlocksMessage":function(d){return "බැටළුවා වෙත ඇවිද යාමට තවත් විධාන භාවිතා කිරීමට උත්සාහ කරන්න."},
"level2FailureMessage":function(d){return "ගස කපාදැමීමට ගස ඉදිරියට ගොස් \"බ්ලොක් එක විනාශකරන්න\" විධානය යොදන්න."},
"level2TooFewBlocksMessage":function(d){return "ගස කපා දැමීමට විධානයන් හැකිතාක් භාවිත කරන්න. ගසෙහි කදවෙත ගමන්කර \"බ්ලොක් එක විනාශකරන්න\" විධානය ලබාදෙන්න."},
"level3FailureMessage":function(d){return "බැටළුවන්ගෙන් ලොම් ගැනීමට එක් එක් බැටළුවා වෙත ගොස් ලොම් කැපීමේ විධානය භාවිත කරන්න. බැටළුවන් වෙත ළඟා වීමට හැරවීමේ විධාන භාවිත කරන්න."},
"level3TooFewBlocksMessage":function(d){return "තවත් විධාන භාවිත කරමින් බැටළුවන්ගෙන් ලොම් ගැනීමට උත්සාහ කරන්න. බැටළුවන් වෙත ළඟා වීමට හැරවීමේ විධාන භාවිත කරන්න."},
"level4FailureMessage":function(d){return "සියලුම ගස් වල ඇති බිඳ දැමීමේ කැබැල්ල ඔබ විසින් භාවිත කල යුතුයි."},
"level5FailureMessage":function(d){return "බිත්තිය සෑදීමට කැබැලි වටේ ඇති රේඛාව මත තබන්න. රෝස පැහැති විධානය මගින් එම කැබැලි ඇතුලත ඇති කේත ක්‍රියාත්මක කල හැකියි."},
"level6FailureMessage":function(d){return "ප්‍රහේලිකාව විසඳීම සඳහා නිවස වටේ ඇති රේඛාව මත කැබැලි තබන්න."},
"level7FailureMessage":function(d){return "අඳුරු පැහැති බිම් කොටස් වල පැල සිටුවීම සඳහා පැල කිරීමේ විධානය භාවිත කරන්න."},
"level8FailureMessage":function(d){return "ගස් වැල් මග හරිමින් නිවසට ඇතුලු වීමට උත්සාහ කරන්න. ඒවායෙහි ගෑවීමකින් පිපිරීම් ඇත්විය හැක."},
"level9FailureMessage":function(d){return "ඔබේ මඟ එළියකර ගැනීමට අවම වශයෙන් ආලෝක පන්දම් 2ක් තැබීමට හා ගල් අඟුරු 2ක් වත් කැනීමට අමතක කරන්න එපා."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "කොටස"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "ගඩොල්"},
"miniBlockBucketLava":function(d){return "lava bucket"},
"miniBlockBucketWater":function(d){return "water bucket"},
"miniBlockCarrots":function(d){return "carrots"},
"miniBlockCoal":function(d){return "coal"},
"miniBlockCobblestone":function(d){return "වටකුරු ගල්"},
"miniBlockDiamond":function(d){return "diamond"},
"miniBlockDirt":function(d){return "අපවිත්‍ර දෑ"},
"miniBlockDirtCoarse":function(d){return "රළු පස්"},
"miniBlockEgg":function(d){return "egg"},
"miniBlockEmerald":function(d){return "emerald"},
"miniBlockGravel":function(d){return "බොරලු"},
"miniBlockGunPowder":function(d){return "gunpowder"},
"miniBlockIngotGold":function(d){return "gold ingot"},
"miniBlockIngotIron":function(d){return "iron ingot"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "ඇකේෂියා ලී කොට"},
"miniBlockLogBirch":function(d){return "බර්ච් ලී කොට"},
"miniBlockLogJungle":function(d){return "කැලෑ දැව කොටය"},
"miniBlockLogOak":function(d){return "ඕක් ලී කොට"},
"miniBlockLogSpruce":function(d){return "දැව කොටය"},
"miniBlockMilk":function(d){return "milk"},
"miniBlockPlanksAcacia":function(d){return "ඇකේශියා ලෑලි"},
"miniBlockPlanksBirch":function(d){return "බර්ච් ලෑලි"},
"miniBlockPlanksJungle":function(d){return "කැළෑ ලෑලි"},
"miniBlockPlanksOak":function(d){return "ඕක් ලෑලි"},
"miniBlockPlanksSpruce":function(d){return "දැව ලෑලි"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "potato"},
"miniBlockRedstoneDust":function(d){return "redstone dust"},
"miniBlockSand":function(d){return "වැලි"},
"miniBlockSandstone":function(d){return "වැලිගල්"},
"miniBlockSheep":function(d){return "sheep"},
"miniBlockWheat":function(d){return "wheat"},
"miniBlockWool":function(d){return "ලොම්"},
"nextLevelMsg":function(d){return "සුභ පැතුම්! ප්‍රේහෙලිකා අංක "+craft_locale.v(d,"puzzleNumber")+" සම්පූර්නයි"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "ඔබගේ චරිතය තෝරා ගන්න."},
"playerSelectChooseSelectButton":function(d){return "තෝරන්න"},
"playerSelectLetsGetStarted":function(d){return "දැන් පටන් ගමු."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "නැවත ක්‍රීඩා කිරීමට \"දිගටම ක්‍රීඩා කරන්න\" ඔබන්න."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Score"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "තෝරන්න"},
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
"soundTypeExplode":function(d){return "explode"},
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
"timeDay":function(d){return "දිනය"},
"timeLong":function(d){return "දිගු කාලයක්"},
"timeMedium":function(d){return "මධ්‍යස්ත"},
"timeNight":function(d){return "රැය"},
"timeRandom":function(d){return "අහඹු"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "කෙටි කාලයක්"},
"timeVeryLong":function(d){return "ඉතා දිගු කාලයක්"},
"timeVeryShort":function(d){return "ඉතා කෙටි කාලයක්"},
"to":function(d){return "වෙත"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return craft_locale.v(d,"puzzleNumber")+" වැනි ප්‍රේහෙලිකාව සම්පූර්ණයි. සුභ පැතුම්! "+craft_locale.p(d,"numBlocks",0,"en",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+" සමඟ ද එය සම්පූර්ණ කිරීමට හැකියාව ඇත."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};