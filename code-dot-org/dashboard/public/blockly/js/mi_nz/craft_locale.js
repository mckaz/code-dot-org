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
"absolute":function(d){return "pūmau"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "ki"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"en",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "tāpiri"},
"blockActionAttack":function(d){return "whakaeke"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "kohia"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "whakangaro"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "tuku"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "whakapahū"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "kōwhā"},
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
"blockActionMove":function(d){return "neke"},
"blockActionMoveAway":function(d){return "neke atu i"},
"blockActionMoveForward":function(d){return "neke ki mua"},
"blockActionMoveRandom":function(d){return "neke matapōkere"},
"blockActionMoveTo":function(d){return "neke ki"},
"blockActionMoveToward":function(d){return "neke kia kotahi hipanga ki"},
"blockActionPlaySound":function(d){return "whakatangi oro"},
"blockActionRepeat":function(d){return "tōai"},
"blockActionRepeatRandom":function(d){return "tōai matapōkere"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "whakaputa"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "whiwhi piro"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "tatari"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "kōpenupenuhia te paraka"},
"blockIf":function(d){return "mēnā"},
"blockIfLavaAhead":function(d){return "mēnā he tahepuia ki mua"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "neke"},
"blockMoveBackward":function(d){return "neke ki muri"},
"blockMoveForward":function(d){return "neke ki mua"},
"blockPlace":function(d){return "hoatu"},
"blockPlaceTorch":function(d){return "hoatu rama"},
"blockPlaceXAheadAhead":function(d){return "ki mua"},
"blockPlaceXAheadPlace":function(d){return "hoatu"},
"blockPlaceXPlace":function(d){return "hoatu"},
"blockPlantCrop":function(d){return "huakai tipu"},
"blockShear":function(d){return "kuti huruhuru"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "whakarite i te whenua"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "huri whakatemauī"},
"blockTurnRight":function(d){return "huri whakatematau"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "kōhatu tē anea"},
"blockTypeBricks":function(d){return "pereki"},
"blockTypeClay":function(d){return "uku"},
"blockTypeClayHardened":function(d){return "uku tetepe"},
"blockTypeCobblestone":function(d){return "poro kōhatu"},
"blockTypeDirt":function(d){return "oneone"},
"blockTypeDirtCoarse":function(d){return "oneone matanui"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "piako"},
"blockTypeFarmlandWet":function(d){return "whenuapāmu"},
"blockTypeGlass":function(d){return "kōata"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "pātītī"},
"blockTypeGravel":function(d){return "kirikōhatu"},
"blockTypeLava":function(d){return "tahepuia"},
"blockTypeLogAcacia":function(d){return "kōporo keiha"},
"blockTypeLogBirch":function(d){return "kōporo hiriwa"},
"blockTypeLogJungle":function(d){return "kōporo ngahere"},
"blockTypeLogOak":function(d){return "kōporo oke"},
"blockTypeLogSpruce":function(d){return "kōporo kahikatea"},
"blockTypeOreCoal":function(d){return "tokahuke waro"},
"blockTypeOreDiamond":function(d){return "tokahuke taimana"},
"blockTypeOreEmerald":function(d){return "tokahuke kānapanapa"},
"blockTypeOreGold":function(d){return "tokahuke kōura"},
"blockTypeOreIron":function(d){return "tokahuke rino"},
"blockTypeOreLapis":function(d){return "tokahuke ōrangi"},
"blockTypeOreRedstone":function(d){return "tokahuke kōhatukura"},
"blockTypePlanksAcacia":function(d){return "papa keiha"},
"blockTypePlanksBirch":function(d){return "papa hiriwa"},
"blockTypePlanksJungle":function(d){return "papa ngahere"},
"blockTypePlanksOak":function(d){return "papa oke"},
"blockTypePlanksSpruce":function(d){return "papa kahikatea"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "tārawa"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "kirikiri"},
"blockTypeSandstone":function(d){return "hōanga"},
"blockTypeStone":function(d){return "kōhatu"},
"blockTypeTnt":function(d){return "tnt"},
"blockTypeTree":function(d){return "rākau"},
"blockTypeWater":function(d){return "wai"},
"blockTypeWool":function(d){return "wūru"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "ki mua"},
"blockWhileXAheadDo":function(d){return "mahia"},
"blockWhileXAheadWhile":function(d){return "i te"},
"cancel":function(d){return "Whakakore"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "neke"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "whakararo"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "whakamauī"},
"directionMiddle":function(d){return "waenganui"},
"directionRight":function(d){return "whakamatau"},
"directionUp":function(d){return "whakarunga"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "heihei"},
"entityTypeCow":function(d){return "kau"},
"entityTypeCreeper":function(d){return "konihi"},
"entityTypeIronGolem":function(d){return "taipō rino"},
"entityTypePlayer":function(d){return "kaitākaro"},
"entityTypeSheep":function(d){return "hipi"},
"entityTypeZombie":function(d){return "kairoro"},
"eventTypeWhenAttacked":function(d){return "ina whakaekea"},
"eventTypeWhenDay":function(d){return "ina awatea"},
"eventTypeWhenNight":function(d){return "i te pō"},
"eventTypeWhenRun":function(d){return "ina whakahaerehia"},
"eventTypeWhenSpawned":function(d){return "ina whakaputa"},
"eventTypeWhenTouched":function(d){return "ina pāngia"},
"eventTypeWhenUsed":function(d){return "ina whakamahia"},
"forever":function(d){return "āke, āke"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Nā te mea i tōia, i hoatu hoki i ngā paraka ki te panga nei kua waihangahia e koe tētahi rārangi tohutohu i tētahi reo rorohiko e kīia nei ko, Javascript. Mā tēnei waehere e whakamōhio atu ki te rorohiko me whakaatu i te aha ki te mata. Katoa ngā mea ka kitea, ka mahia hoki e koe i Mahimana ka tīmata ki ngā rārangi waehere rorohiko pēnei i ēnei."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Kōwhiria tētahi mahere kaupapa mō tō whare."},
"houseSelectEasy":function(d){return "Ngāwari"},
"houseSelectHard":function(d){return "Uaua"},
"houseSelectLetsBuild":function(d){return "Tēnā kia hanga whare tātou."},
"houseSelectMedium":function(d){return "Waenga"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "paraka"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Uhia te tahepuia ka āhei ai tō whakawhiti kātahi ka huke i ngā paraka rino e rua ki tērā atu taha."},
"level11FailureMessage":function(d){return "Mēnā he tahepuia ki mua me mātua maumahara ki te hoatu i te poro kōhatu. Mā tēnei ka haumaru tō huke i tēnei rārangi rauemi."},
"level12FailureMessage":function(d){return "Me mātua huke i ngā paraka kōhatukura. Ka whakakotahi tēnei mahi i ngā mea kua ako koe mō te hanga whare me te whakamahi i ngā tauākī \"mēnā\" ki te karo i tō taka ki te tahepuia."},
"level13FailureMessage":function(d){return "Hoatu he \"tārawa\" ki te ara oneone, tērā ara ka haere i tō whare ki te kokona o te mahere whenua."},
"level1FailureMessage":function(d){return "Me mātua whakamahi i ngā whakahau ki te whakahīkoi i te hipi."},
"level1TooFewBlocksMessage":function(d){return "Whakamātauria ētahi whakahau anō ki te whakahīkoi i te hipi."},
"level2FailureMessage":function(d){return "Ki te turaki i te rākau me hīkoi atu ki tōna pūtake me te whakamahi i te whakahau \"kōpenupenuhia te paraka\"."},
"level2TooFewBlocksMessage":function(d){return "Whakamātauria ētahi whakahau anō whakahau ki te turaki i te rākau. Me hīkoi atu ki tōna pūtake me te whakamahi i te whakahau \"kōpenupenuhia te paraka\"."},
"level3FailureMessage":function(d){return "Ki te kohikohi wūru i ngā hipi e rua me hikoi atu ki ia hipi me te whakamahi i te whakahau \"kuti huruhuru\". Me maumahara ki te whakamahi i ngā whakahau whakahuri kia tae pai atu ai ki te hipi."},
"level3TooFewBlocksMessage":function(d){return "Whakamātauria ētahi whakahau anō ki te kohikohi wūru i ngā hipi e rua. Me hikoi atu ki ia hipi me te whakamahi i te whakahau \"kuti huruhuru\"."},
"level4FailureMessage":function(d){return "Me mātua whakamahi koe i te whakahau \"kōpenupenuhia te paraka\" ki ngā pūtake rākau e toru."},
"level5FailureMessage":function(d){return "Me hoatu koe i ō paraka ki te hua oneone ki te whakatū pātū. Mā te whakahau \"tōai\" māwhero e tuku i ngā whakahau kei roto pēnei i te \"hoatu paraka\" me te \"neke ki mua\"."},
"level6FailureMessage":function(d){return "Ki te whakaoti i te panga me hoatu paraka ki te hua oneone o te whare."},
"level7FailureMessage":function(d){return "Whakamahia te whakahau \"whakatō\" ki te hoatu i ngā huakai ki ia tiwha o te whenua pōuri kua whakaritea kētia."},
"level8FailureMessage":function(d){return "Kia pā te ringa ki tētahi konihi ka pahū ake ia. Kia whakamoho tō haere kātahi, ka kuhu atu ki tō whare."},
"level9FailureMessage":function(d){return "Kaua e wareware ki te hoatu i ngā rama e 2 neke atu kia whiti mai te ara, ā, mainahia kia 2 waro neke atu rānei."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "paraka"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "pereki"},
"miniBlockBucketLava":function(d){return "pākete tahepuia"},
"miniBlockBucketWater":function(d){return "pākete wai"},
"miniBlockCarrots":function(d){return "kāroti"},
"miniBlockCoal":function(d){return "waro"},
"miniBlockCobblestone":function(d){return "poro kōhatu"},
"miniBlockDiamond":function(d){return "taimana"},
"miniBlockDirt":function(d){return "oneone"},
"miniBlockDirtCoarse":function(d){return "oneone matanui"},
"miniBlockEgg":function(d){return "hua"},
"miniBlockEmerald":function(d){return "kānapanapa"},
"miniBlockGravel":function(d){return "kirikōhatu"},
"miniBlockGunPowder":function(d){return "paurapū"},
"miniBlockIngotGold":function(d){return "poro kōura"},
"miniBlockIngotIron":function(d){return "poro rino"},
"miniBlockLapisLazuli":function(d){return "tokahuke ōrangi"},
"miniBlockLogAcacia":function(d){return "kōporo keiha"},
"miniBlockLogBirch":function(d){return "kōporo hiriwa"},
"miniBlockLogJungle":function(d){return "kōporo ngahere"},
"miniBlockLogOak":function(d){return "kōporo oke"},
"miniBlockLogSpruce":function(d){return "kōporo kahikatea"},
"miniBlockMilk":function(d){return "miraka"},
"miniBlockPlanksAcacia":function(d){return "papa keiha"},
"miniBlockPlanksBirch":function(d){return "papa hiriwa"},
"miniBlockPlanksJungle":function(d){return "papa ngahere"},
"miniBlockPlanksOak":function(d){return "papa oke"},
"miniBlockPlanksSpruce":function(d){return "papa kahikatea"},
"miniBlockPoppy":function(d){return "papi"},
"miniBlockPotato":function(d){return "rīwai"},
"miniBlockRedstoneDust":function(d){return "puehu kōhatukura"},
"miniBlockSand":function(d){return "kirikiri"},
"miniBlockSandstone":function(d){return "hōanga"},
"miniBlockSheep":function(d){return "hipi"},
"miniBlockWheat":function(d){return "witi"},
"miniBlockWool":function(d){return "wūru"},
"nextLevelMsg":function(d){return "Kua tutuki a koe te panga "+craft_locale.v(d,"puzzleNumber")+". E mihi ana!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Kōwhiritia tō kiripuaki."},
"playerSelectChooseSelectButton":function(d){return "Tīpako"},
"playerSelectLetsGetStarted":function(d){return "Tēnā kia tīmata tātou."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Ki te hoki atu ki tō kēmu tākaro anō ai me pēhi i te \"Tākaro Tonu\"."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Tapeke piro"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Tīpako"},
"soundTypeBump":function(d){return "rutu"},
"soundTypeChickenBawk":function(d){return "te tangi a te heihei"},
"soundTypeChickenHurt":function(d){return "kua whara te heihei"},
"soundTypeCollectedBlock":function(d){return "kohia te paraka"},
"soundTypeCowHuff":function(d){return "kau whakarikiriki"},
"soundTypeCowHurt":function(d){return "kau kua whara"},
"soundTypeCowMoo":function(d){return "tangi mūū a te kau"},
"soundTypeCowMooLong":function(d){return "tangi mūūū a te kau"},
"soundTypeCreeperHiss":function(d){return "hihī konihi"},
"soundTypeDig_wood1":function(d){return "ka whati te rākau"},
"soundTypeDoorOpen":function(d){return "ka tuwhera te tatau"},
"soundTypeExplode":function(d){return "whakapahū"},
"soundTypeFailure":function(d){return "mūhore taumata"},
"soundTypeFall":function(d){return "taka"},
"soundTypeFizz":function(d){return "korohihī"},
"soundTypeFuse":function(d){return "wiki"},
"soundTypeIronGolemHit":function(d){return "kua patua te taipō rino"},
"soundTypeMetalWhack":function(d){return "patu mētara"},
"soundTypeMinecart":function(d){return "kāta huke"},
"soundTypePlaceBlock":function(d){return "hoatu paraka"},
"soundTypePunch":function(d){return "meke"},
"soundTypeSheepBaa":function(d){return "tangi baa a te hipi"},
"soundTypeStepFarmland":function(d){return "hipanga whenuapāmu"},
"soundTypeStepGrass":function(d){return "hipanga pātītī"},
"soundTypeStepGravel":function(d){return "hipanga kirikōhatu"},
"soundTypeStepStone":function(d){return "hipanga kōhatu"},
"soundTypeStepWood":function(d){return "hipanga rākau"},
"soundTypeSuccess":function(d){return "eke taumata"},
"soundTypeZombieBrains":function(d){return "aurere kairoro"},
"soundTypeZombieGroan":function(d){return "ngunguru kairoro"},
"soundTypeZombieHurt":function(d){return "kua whara te kairoro"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "rā"},
"timeLong":function(d){return "roa"},
"timeMedium":function(d){return "wawaenga"},
"timeNight":function(d){return "pō"},
"timeRandom":function(d){return "random"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "poto"},
"timeVeryLong":function(d){return "tino roa"},
"timeVeryShort":function(d){return "tino poto"},
"to":function(d){return "ki te"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Kua oti te panga "+craft_locale.v(d,"puzzleNumber")+". E mihi ana! E āhei ana taua panga te whakaoti me "+craft_locale.p(d,"numBlocks",0,"en",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" paraka"})+"."},
"turnRandom":function(d){return "huri matapōkere"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};