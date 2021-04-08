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
"absolute":function(d){return "निरपेक्ष"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "पर"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"hi",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "जोड़ें"},
"blockActionAttack":function(d){return "hamla"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "एकत्र"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "गायब"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "girana"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "विस्फोट"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "chamak"},
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
"blockActionMove":function(d){return "move"},
"blockActionMoveAway":function(d){return "yaha se hatt jao"},
"blockActionMoveForward":function(d){return "आगे जाएं"},
"blockActionMoveRandom":function(d){return "यादृच्छिक चाल"},
"blockActionMoveTo":function(d){return "udhar hato"},
"blockActionMoveToward":function(d){return "ek kadam aage badhe"},
"blockActionPlaySound":function(d){return "ध्वनि चलाएँ"},
"blockActionRepeat":function(d){return "दोहराएँ"},
"blockActionRepeatRandom":function(d){return "यादृच्छिक दोहराएँ"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "spawn"},
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
"blockDestroyBlock":function(d){return "ब्लॉक नष्ट करें"},
"blockIf":function(d){return "if"},
"blockIfLavaAhead":function(d){return "यदि लावा आगे हो"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "move"},
"blockMoveBackward":function(d){return "पीछे जाएँ"},
"blockMoveForward":function(d){return "आगे जाएं"},
"blockPlace":function(d){return "रखें"},
"blockPlaceTorch":function(d){return "टॉर्च रखें"},
"blockPlaceXAheadAhead":function(d){return "आगे"},
"blockPlaceXAheadPlace":function(d){return "रखें"},
"blockPlaceXPlace":function(d){return "रखें"},
"blockPlantCrop":function(d){return "फसल रोपें"},
"blockShear":function(d){return "कतरन"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "ज़मीन जोतें"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "बाएँ मुड़ें"},
"blockTurnRight":function(d){return "दाएँ मुड़ें"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "आधार-चट्टान"},
"blockTypeBricks":function(d){return "ईंट"},
"blockTypeClay":function(d){return "चिकनी मिट्टी"},
"blockTypeClayHardened":function(d){return "कठोर मिट्टी"},
"blockTypeCobblestone":function(d){return "गोल पत्थर"},
"blockTypeDirt":function(d){return "गर्द"},
"blockTypeDirtCoarse":function(d){return "मोटी गर्द"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "खाली"},
"blockTypeFarmlandWet":function(d){return "खेत"},
"blockTypeGlass":function(d){return "काँच"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "घास"},
"blockTypeGravel":function(d){return "कंकड"},
"blockTypeLava":function(d){return "लावा"},
"blockTypeLogAcacia":function(d){return "बबूल का लट्ठा"},
"blockTypeLogBirch":function(d){return "भोज वृक्ष का लट्ठा"},
"blockTypeLogJungle":function(d){return "जंगल लट्ठा"},
"blockTypeLogOak":function(d){return "शाहबलूत का लट्ठा"},
"blockTypeLogSpruce":function(d){return "फ़र वृक्ष का लट्ठा"},
"blockTypeOreCoal":function(d){return "कोयला अयस्क"},
"blockTypeOreDiamond":function(d){return "हीरा अयस्क"},
"blockTypeOreEmerald":function(d){return "पन्ना अयस्क"},
"blockTypeOreGold":function(d){return "सोने का अयस्क"},
"blockTypeOreIron":function(d){return "लौह अयस्क"},
"blockTypeOreLapis":function(d){return "लापिस अयस्क"},
"blockTypeOreRedstone":function(d){return "रेडस्टोन अयस्क"},
"blockTypePlanksAcacia":function(d){return "बबूल के तख्ते"},
"blockTypePlanksBirch":function(d){return "भोज के तख्ते"},
"blockTypePlanksJungle":function(d){return "जंगल तख्ते"},
"blockTypePlanksOak":function(d){return "शाहबलूत के तख्ते"},
"blockTypePlanksSpruce":function(d){return "फ़र के तख्ते"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "रेलिंग"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "रेत"},
"blockTypeSandstone":function(d){return "बलुआ पत्थर"},
"blockTypeStone":function(d){return "पत्थर"},
"blockTypeTnt":function(d){return "टीएनटी"},
"blockTypeTree":function(d){return "पेड़"},
"blockTypeWater":function(d){return "पानी"},
"blockTypeWool":function(d){return "ऊन"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "आगे"},
"blockWhileXAheadDo":function(d){return "do"},
"blockWhileXAheadWhile":function(d){return "जबकि"},
"cancel":function(d){return "रद्द करें"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "move"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "down"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "left"},
"directionMiddle":function(d){return "मध्य"},
"directionRight":function(d){return "right"},
"directionUp":function(d){return "up"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "murghi"},
"entityTypeCow":function(d){return "गाय"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "खिलाड़ी"},
"entityTypeSheep":function(d){return "भेड़"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "जब हमला किया"},
"eventTypeWhenDay":function(d){return "जब दिन"},
"eventTypeWhenNight":function(d){return "जब रात"},
"eventTypeWhenRun":function(d){return "जब चलाएँ"},
"eventTypeWhenSpawned":function(d){return "जब पैदा की"},
"eventTypeWhenTouched":function(d){return "जब छुआ"},
"eventTypeWhenUsed":function(d){return "जब प्रयोग किया जाता"},
"forever":function(d){return "हमेशा के लिए"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "इस पहेली में ब्लॉक को खींचते और रखते हुए, आपने Javascript नामक कंप्यूटर भाषा में निर्देशों का सेट तैयार किया है।  यह कोड कंप्यूटर को बताता है कि स्क्रीन पर क्या प्रदर्शित किया जाए। Minecraft में आप जो भी देखते और करते हैं, वह भी इन जैसे कंप्यूटर कोड की लाइनों के साथ शुरू होता है।"},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "अपने घर के फ़्लोर-प्लान का चयन करें।"},
"houseSelectEasy":function(d){return "आसान"},
"houseSelectHard":function(d){return "कठिन"},
"houseSelectLetsBuild":function(d){return "आइए एक घर का निर्माण करें।"},
"houseSelectMedium":function(d){return "मध्यम"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "ब्लॉक"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "पार करने के लिए लावा को ढकें, फिर दूसरी ओर दो लौह खंड को खोदें।"},
"level11FailureMessage":function(d){return "यदि आगे लावा है तो आगे गोल पत्थर रखना सुनिश्चित करें। यह आपको संसाधनों की इस पंक्ति का सुरक्षित खनन करने देगा।"},
"level12FailureMessage":function(d){return "3 रेडस्टोन ब्लॉक का खनन सुनिश्चित करें। इसमें अपने घर के निर्माण से आपने जो सीखा और लावा में गिरने से बचने के लिए \"if\" स्टेटमेंट के प्रयोग का संयोजन है।"},
"level13FailureMessage":function(d){return "आपके दरवाज़े से नक्शे के किनारे तक जाने वाले गर्द मार्ग पर \"rail\" रखें।"},
"level1FailureMessage":function(d){return "भेड़ तक चल कर जाने के लिए आपको कुछ कमांड इस्तेमाल करने की ज़रूरत होगी।"},
"level1TooFewBlocksMessage":function(d){return "भेड़ तक जाने के लिए अनेक कमांड के उपयोग की कोशिश करें।"},
"level2FailureMessage":function(d){return "पेड़ को काटने के लिए, उसके तने के पास जाएँ और \"destroy block\" कमांड का उपयोग करें।"},
"level2TooFewBlocksMessage":function(d){return "पेड़ काटने के लिए अनेक कमांड के उपयोग की कोशिश करें। उसके तने के पास जाएँ और \"destroy block\" कमांड का उपयोग करें।"},
"level3FailureMessage":function(d){return "दोनों भेड़ों से ऊन इकट्ठा करने के लिए, हरेक के पास जाएँ और \"shear\" कमांड का उपयोग करें। भेड़ तक पहुँचने के लिए मुड़े (turn) कमांड का उपयोग करना न भूलें।"},
"level3TooFewBlocksMessage":function(d){return "दोनों भेड़ों से ऊन इकट्ठा करने के लिए अनेक कमांड के उपयोग की कोशिश करें। प्रत्येक के पास जाएँ और \"shear\" कमांड का उपयोग करें।"},
"level4FailureMessage":function(d){return "आपको तीन तनों से प्रत्येक पर \"destroy block\" कमांड का उपयोग करना चाहिए।"},
"level5FailureMessage":function(d){return "दीवार बनाने के लिए अपने ब्लॉक गर्द की आउटलाइन पर रखें। गुलाबी \"repeat\" कमांड उसके अंदर मौजूद \"place block\" और \"move forward\" जैसे कमांड चलाएगा।"},
"level6FailureMessage":function(d){return "पहेली पूरा करने के लिए घर की गर्द आउटलाइन पर ब्लॉक रखें।"},
"level7FailureMessage":function(d){return "गहरी जोती गई भूमि के प्रत्येक भाग में फसल रखने के लिए \"plant\" कमांड का उपयोग करें।"},
"level8FailureMessage":function(d){return "यदि आप किसी बेल को छूते हैं तो वह विस्फोटित होगी। उनसे बच कर जाएँ और अपने घर में प्रवेश करें।"},
"level9FailureMessage":function(d){return "अपने रास्ते को प्रकाशित करने के लिए कम से कम 2 टॉर्च जलाना और कम से कम 2 कोयले खोदना न भूलें।"},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "ब्लॉक"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "ईंट"},
"miniBlockBucketLava":function(d){return "लावा बाल्टी"},
"miniBlockBucketWater":function(d){return "पानी बाल्टी"},
"miniBlockCarrots":function(d){return "गाजर"},
"miniBlockCoal":function(d){return "कोयला"},
"miniBlockCobblestone":function(d){return "गोल पत्थर"},
"miniBlockDiamond":function(d){return "हीरा"},
"miniBlockDirt":function(d){return "गर्द"},
"miniBlockDirtCoarse":function(d){return "मोटी गर्द"},
"miniBlockEgg":function(d){return "अंडा"},
"miniBlockEmerald":function(d){return "पन्ना"},
"miniBlockGravel":function(d){return "कंकड"},
"miniBlockGunPowder":function(d){return "बारूद"},
"miniBlockIngotGold":function(d){return "सोने पिंड"},
"miniBlockIngotIron":function(d){return "लौह पिंड"},
"miniBlockLapisLazuli":function(d){return "लापीस लाजुली"},
"miniBlockLogAcacia":function(d){return "बबूल का लट्ठा"},
"miniBlockLogBirch":function(d){return "भोज वृक्ष का लट्ठा"},
"miniBlockLogJungle":function(d){return "जंगल लट्ठा"},
"miniBlockLogOak":function(d){return "शाहबलूत का लट्ठा"},
"miniBlockLogSpruce":function(d){return "फ़र वृक्ष का लट्ठा"},
"miniBlockMilk":function(d){return "दूध"},
"miniBlockPlanksAcacia":function(d){return "बबूल के तख्ते"},
"miniBlockPlanksBirch":function(d){return "भोज के तख्ते"},
"miniBlockPlanksJungle":function(d){return "जंगल तख्ते"},
"miniBlockPlanksOak":function(d){return "शाहबलूत के तख्ते"},
"miniBlockPlanksSpruce":function(d){return "फ़र के तख्ते"},
"miniBlockPoppy":function(d){return "पोस्ता"},
"miniBlockPotato":function(d){return "आलू"},
"miniBlockRedstoneDust":function(d){return "redstone धूल"},
"miniBlockSand":function(d){return "रेत"},
"miniBlockSandstone":function(d){return "बलुआ पत्थर"},
"miniBlockSheep":function(d){return "भेड़"},
"miniBlockWheat":function(d){return "गेहूं"},
"miniBlockWool":function(d){return "ऊन"},
"nextLevelMsg":function(d){return "पहेली "+craft_locale.v(d,"puzzleNumber")+" संपन्न। बधाई!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "अपना किरदार चुनें।"},
"playerSelectChooseSelectButton":function(d){return "चयन करें"},
"playerSelectLetsGetStarted":function(d){return "आइए शुरूआत करते हैं।"},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "अपना गेम खेलने के लिए वापस जाने हेतु आप \"Keep Playing\" दबा सकते हैं।"},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "स्कोर"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "चयन करें"},
"soundTypeBump":function(d){return "टक्कर"},
"soundTypeChickenBawk":function(d){return "chicken cluck"},
"soundTypeChickenHurt":function(d){return "chicken hurt"},
"soundTypeCollectedBlock":function(d){return "ब्लॉक ले लीजिए"},
"soundTypeCowHuff":function(d){return "गाय आवेश"},
"soundTypeCowHurt":function(d){return "गाय चोट"},
"soundTypeCowMoo":function(d){return "गाय राँभना"},
"soundTypeCowMooLong":function(d){return "cow mooo"},
"soundTypeCreeperHiss":function(d){return "creeper hiss"},
"soundTypeDig_wood1":function(d){return "wood break"},
"soundTypeDoorOpen":function(d){return "door open"},
"soundTypeExplode":function(d){return "विस्फोट"},
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
"timeDay":function(d){return "दिन"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "medium"},
"timeNight":function(d){return "रात"},
"timeRandom":function(d){return "यादृच्छिक"},
"timeSet":function(d){return "time set"},
"timeShort":function(d){return "short"},
"timeVeryLong":function(d){return "very long"},
"timeVeryShort":function(d){return "very short"},
"to":function(d){return "करने के लिए"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "पहेली "+craft_locale.v(d,"puzzleNumber")+" संपन्न। बधाई! उसे "+craft_locale.p(d,"numBlocks",0,"hi",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+" के साथ पूरा करना भी संभव है."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};