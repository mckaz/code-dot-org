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
"absolute":function(d){return "modulis"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "pie"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"lv",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "pievienot"},
"blockActionAttack":function(d){return "uzbrukt"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "iegūt"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "pazust"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "nomest"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "eksplodēt"},
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
"blockActionMove":function(d){return "pārvietot"},
"blockActionMoveAway":function(d){return "move away from"},
"blockActionMoveForward":function(d){return "pārvietot uz priekšu"},
"blockActionMoveRandom":function(d){return "move random"},
"blockActionMoveTo":function(d){return "move to"},
"blockActionMoveToward":function(d){return "move a step toward"},
"blockActionPlaySound":function(d){return "play sound"},
"blockActionRepeat":function(d){return "atkārtot"},
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
"blockActionWait":function(d){return "wait"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "iznīcināt bloku"},
"blockIf":function(d){return "Ja"},
"blockIfLavaAhead":function(d){return "ja priekšā atrodas lava"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "pārvietot"},
"blockMoveBackward":function(d){return "pārvietot uz atpakaļ"},
"blockMoveForward":function(d){return "pārvietot uz priekšu"},
"blockPlace":function(d){return "nolikt"},
"blockPlaceTorch":function(d){return "nolikt lāpu"},
"blockPlaceXAheadAhead":function(d){return "priekšā"},
"blockPlaceXAheadPlace":function(d){return "nolikt"},
"blockPlaceXPlace":function(d){return "nolikt"},
"blockPlantCrop":function(d){return "iestādīt augu"},
"blockShear":function(d){return "apcirpt"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "till soil"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "pagriezt pa kreisi"},
"blockTurnRight":function(d){return "pagriezt pa labi"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "pamats"},
"blockTypeBricks":function(d){return "ķieģeļi"},
"blockTypeClay":function(d){return "māls"},
"blockTypeClayHardened":function(d){return "ciets māls"},
"blockTypeCobblestone":function(d){return "bruģakmens"},
"blockTypeDirt":function(d){return "zeme"},
"blockTypeDirtCoarse":function(d){return "rupja zeme"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "tukšs"},
"blockTypeFarmlandWet":function(d){return "lauksaimniecības zeme"},
"blockTypeGlass":function(d){return "stikls"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "zāle"},
"blockTypeGravel":function(d){return "grants"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "akācijas baļķis"},
"blockTypeLogBirch":function(d){return "bērza baļķis"},
"blockTypeLogJungle":function(d){return "džungļu baļķis"},
"blockTypeLogOak":function(d){return "ozola baļķis"},
"blockTypeLogSpruce":function(d){return "egles baļķis"},
"blockTypeOreCoal":function(d){return "ogles"},
"blockTypeOreDiamond":function(d){return "dimanta rūda"},
"blockTypeOreEmerald":function(d){return "smaragda rūda"},
"blockTypeOreGold":function(d){return "zelta rūda"},
"blockTypeOreIron":function(d){return "dzelzs rūda"},
"blockTypeOreLapis":function(d){return "lazurīta rūda"},
"blockTypeOreRedstone":function(d){return "sarkanakmeņa rūda"},
"blockTypePlanksAcacia":function(d){return "akācijas dēļi"},
"blockTypePlanksBirch":function(d){return "bērza dēļi"},
"blockTypePlanksJungle":function(d){return "džungļu dēļi"},
"blockTypePlanksOak":function(d){return "ozola dēļi"},
"blockTypePlanksSpruce":function(d){return "egles dēļi"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "sliedes"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "smiltis"},
"blockTypeSandstone":function(d){return "smilšakmens"},
"blockTypeStone":function(d){return "akmens"},
"blockTypeTnt":function(d){return "dinamīts"},
"blockTypeTree":function(d){return "koks"},
"blockTypeWater":function(d){return "ūdens"},
"blockTypeWool":function(d){return "vilna"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "priekšā"},
"blockWhileXAheadDo":function(d){return "darīt"},
"blockWhileXAheadWhile":function(d){return "kamēr"},
"cancel":function(d){return "Atcelt"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "pārvietot"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "uz leju"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "pa kreisi"},
"directionMiddle":function(d){return "middle"},
"directionRight":function(d){return "pa labi"},
"directionUp":function(d){return "uz augšu"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "chicken"},
"entityTypeCow":function(d){return "cow"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "player"},
"entityTypeSheep":function(d){return "sheep"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "when attacked"},
"eventTypeWhenDay":function(d){return "when day"},
"eventTypeWhenNight":function(d){return "when night"},
"eventTypeWhenRun":function(d){return "kad izpilda"},
"eventTypeWhenSpawned":function(d){return "when spawned"},
"eventTypeWhenTouched":function(d){return "when touched"},
"eventTypeWhenUsed":function(d){return "when used"},
"forever":function(d){return "forever"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Velkot un pārvietojot blokus šajā uzdevumā, tu izveidoju instrukciju virkni \"javascript\" datoru valodā. Šī instrukcija, jeb kods, norāda datoram ko attēlot uz ekrāna. Visu ko tu redzi un dari Minecraft spēlē arī sākas ar līdzīgām koda virknēm."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Izvēlies savas mājas iekārtojuma plānu."},
"houseSelectEasy":function(d){return "Viegls"},
"houseSelectHard":function(d){return "Grūts"},
"houseSelectLetsBuild":function(d){return "Uzbūvēsim māju."},
"houseSelectMedium":function(d){return "Vidējs"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "bloks"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Aizsedz lavu, lai tiktu pāri, tad izroc divus dzelzs rūdas gabalus otrā pusē."},
"level11FailureMessage":function(d){return "Pārliecinieties, ka esat uzlicis bruģakmeni, ja priekšā ir lava. Tas ļaus droši izmantot šo resursu rindu."},
"level12FailureMessage":function(d){return "Pārliecinieties, ka izrokat 3 sarkanā akmens blokus. Tas apvieno to, ko esat iemācījušies no savas ēkas celtniecības un \"if\" lietošanas, lai neiekristu lavā."},
"level13FailureMessage":function(d){return "Place \"rail\" along the dirt path leading from your door to the edge of the map."},
"level1FailureMessage":function(d){return "Jums jāizmanto komandas, lai aizietu līdz aitām."},
"level1TooFewBlocksMessage":function(d){return "Pamēģiniet izmantot vairāk komandu, lai aizietu līdz aitām."},
"level2FailureMessage":function(d){return "Lai nocirstu koku, aizejiet līdz tā stumbram un izmantojiet komandu \"iznīcināt bloku\"."},
"level2TooFewBlocksMessage":function(d){return "Pamēģiniet izmantot vairāk komandu, lai nocirstu koku. Aizejiet līdz tā stumbram un izmantojiet komandu \"iznīcināt bloku\"."},
"level3FailureMessage":function(d){return "Lai savāktu vilnu no abām aitām, aizej pie katras un izmanto \"apcirpt\" komandu. Neaizmirsti izmantot pagriešanās komandas, lai sasniegtu aitas."},
"level3TooFewBlocksMessage":function(d){return "Pamēģiniet izmantot vairāk komandu, lai savāktu no aitām vilnu. Aizejiet līdz katrai un izmantojiet komandu \"apcirpt\"."},
"level4FailureMessage":function(d){return "Jums jāizmanto komanda \"iznīcināt bloku\" katram no trim koku stumbriem."},
"level5FailureMessage":function(d){return "Place your blocks on the dirt outline to build a wall. The pink \"repeat\" command will run commands placed inside it, like \"place block\" and \"move forward\"."},
"level6FailureMessage":function(d){return "Place blocks on the dirt outline of the house to complete the puzzle."},
"level7FailureMessage":function(d){return "Use the \"plant\" command to place crops on each patch of dark tilled soil."},
"level8FailureMessage":function(d){return "If you touch a creeper it will explode. Sneak around them and enter your house."},
"level9FailureMessage":function(d){return "Neaizmirsti uzlikt vismaz 2 lāpas, lai izgaismotu savu ceļu, un izroc vismaz 2 ogles."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "bloks"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "ķieģeļi"},
"miniBlockBucketLava":function(d){return "lava bucket"},
"miniBlockBucketWater":function(d){return "water bucket"},
"miniBlockCarrots":function(d){return "carrots"},
"miniBlockCoal":function(d){return "coal"},
"miniBlockCobblestone":function(d){return "bruģakmens"},
"miniBlockDiamond":function(d){return "diamond"},
"miniBlockDirt":function(d){return "zeme"},
"miniBlockDirtCoarse":function(d){return "rupja zeme"},
"miniBlockEgg":function(d){return "egg"},
"miniBlockEmerald":function(d){return "emerald"},
"miniBlockGravel":function(d){return "grants"},
"miniBlockGunPowder":function(d){return "gunpowder"},
"miniBlockIngotGold":function(d){return "gold ingot"},
"miniBlockIngotIron":function(d){return "iron ingot"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "akācijas baļķis"},
"miniBlockLogBirch":function(d){return "bērza baļķis"},
"miniBlockLogJungle":function(d){return "džungļu baļķis"},
"miniBlockLogOak":function(d){return "ozola baļķis"},
"miniBlockLogSpruce":function(d){return "egles baļķis"},
"miniBlockMilk":function(d){return "milk"},
"miniBlockPlanksAcacia":function(d){return "akācijas dēļi"},
"miniBlockPlanksBirch":function(d){return "bērza dēļi"},
"miniBlockPlanksJungle":function(d){return "džungļu dēļi"},
"miniBlockPlanksOak":function(d){return "ozola dēļi"},
"miniBlockPlanksSpruce":function(d){return "egles dēļi"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "potato"},
"miniBlockRedstoneDust":function(d){return "redstone dust"},
"miniBlockSand":function(d){return "smiltis"},
"miniBlockSandstone":function(d){return "smilšakmens"},
"miniBlockSheep":function(d){return "sheep"},
"miniBlockWheat":function(d){return "wheat"},
"miniBlockWool":function(d){return "vilna"},
"nextLevelMsg":function(d){return "Uzdevums "+craft_locale.v(d,"puzzleNumber")+" ir veiksmīgi pabeigts. Apsveicam!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Izvēlies savu tēlu."},
"playerSelectChooseSelectButton":function(d){return "Izvēlēties"},
"playerSelectLetsGetStarted":function(d){return "Sāksim."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Spied \"Turpināt spēli\" lai atgrieztos pie spēles."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Score"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Izvēlēties"},
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
"soundTypeExplode":function(d){return "eksplodēt"},
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
"timeDay":function(d){return "diena"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "medium"},
"timeNight":function(d){return "nakts"},
"timeRandom":function(d){return "nejaušs"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "short"},
"timeVeryLong":function(d){return "very long"},
"timeVeryShort":function(d){return "very short"},
"to":function(d){return "darīt"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Uzdevums "+craft_locale.v(d,"puzzleNumber")+" ir pabeigts. Apsveicam! Šo uzdevumu ir iespējams izpildīt arī ar "+craft_locale.p(d,"numBlocks",0,"lv",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};