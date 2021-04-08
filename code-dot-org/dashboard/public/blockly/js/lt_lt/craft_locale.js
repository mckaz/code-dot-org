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
"at":function(d){return " "},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"lt",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "pridėk"},
"blockActionAttack":function(d){return "pulk"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "surink"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "pradink"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "išmesk"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "sprogti"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "sublykčiok"},
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
"blockActionMove":function(d){return "judėk"},
"blockActionMoveAway":function(d){return "judėk tolyn nuo"},
"blockActionMoveForward":function(d){return "ženk į priekį"},
"blockActionMoveRandom":function(d){return "judėk atsitiktinai"},
"blockActionMoveTo":function(d){return "judėk prie"},
"blockActionMoveToward":function(d){return "ženk žingsnį link"},
"blockActionPlaySound":function(d){return "grok garsą"},
"blockActionRepeat":function(d){return "kartok"},
"blockActionRepeatRandom":function(d){return "kartoti atsitiktinai"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "atsiras"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "tašką"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "luktelėk"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "sunaikink bloką"},
"blockIf":function(d){return "jei"},
"blockIfLavaAhead":function(d){return "jei lava priekyje"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "judėk"},
"blockMoveBackward":function(d){return "atgal"},
"blockMoveForward":function(d){return "ženk į priekį"},
"blockPlace":function(d){return "padėk"},
"blockPlaceTorch":function(d){return "padėk deglą"},
"blockPlaceXAheadAhead":function(d){return "priekyje"},
"blockPlaceXAheadPlace":function(d){return "padėk"},
"blockPlaceXPlace":function(d){return "padėk"},
"blockPlantCrop":function(d){return "sodink pasėlius"},
"blockShear":function(d){return "kirpk"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "sukasti dirvą"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "pasisuk į kairę"},
"blockTurnRight":function(d){return "pasisuk į dešinę"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "pamatinę uolieną"},
"blockTypeBricks":function(d){return "plytas"},
"blockTypeClay":function(d){return "molis"},
"blockTypeClayHardened":function(d){return "grūdintas molis"},
"blockTypeCobblestone":function(d){return "grindinį"},
"blockTypeDirt":function(d){return "žemę"},
"blockTypeDirtCoarse":function(d){return "rupią žemę"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "tuščias"},
"blockTypeFarmlandWet":function(d){return "dirvą"},
"blockTypeGlass":function(d){return "stiklą"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "žolę"},
"blockTypeGravel":function(d){return "žvyrą"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "akacijos rąstą"},
"blockTypeLogBirch":function(d){return "beržo rąstą"},
"blockTypeLogJungle":function(d){return "džiunglių rąstą"},
"blockTypeLogOak":function(d){return "ąžuolo rąstą"},
"blockTypeLogSpruce":function(d){return "eglės rąstą"},
"blockTypeOreCoal":function(d){return "anglies rūdą"},
"blockTypeOreDiamond":function(d){return "deimanto rūdą"},
"blockTypeOreEmerald":function(d){return "smaragdo rūdą"},
"blockTypeOreGold":function(d){return "aukso rūdą"},
"blockTypeOreIron":function(d){return "geležies rūdą"},
"blockTypeOreLapis":function(d){return "lazurito rūdą"},
"blockTypeOreRedstone":function(d){return "raudono akmens rūdą"},
"blockTypePlanksAcacia":function(d){return "akacijos lentas"},
"blockTypePlanksBirch":function(d){return "beržo lentas"},
"blockTypePlanksJungle":function(d){return "džiunglių lentas"},
"blockTypePlanksOak":function(d){return "ąžuolo lentas"},
"blockTypePlanksSpruce":function(d){return "eglės lentas"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "bėgiai"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "smėlį"},
"blockTypeSandstone":function(d){return "smiltainį"},
"blockTypeStone":function(d){return "akmenį"},
"blockTypeTnt":function(d){return "dinamitą"},
"blockTypeTree":function(d){return "medis"},
"blockTypeWater":function(d){return "vanduo"},
"blockTypeWool":function(d){return "vilną"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "priekyje"},
"blockWhileXAheadDo":function(d){return " "},
"blockWhileXAheadWhile":function(d){return "kol"},
"cancel":function(d){return "Atšaukti"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "judėk"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "apačioje"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "kairėje"},
"directionMiddle":function(d){return "viduryje"},
"directionRight":function(d){return "dešinėje"},
"directionUp":function(d){return "viršuje"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "viščiukas"},
"entityTypeCow":function(d){return "karvė"},
"entityTypeCreeper":function(d){return "pasalūnas (creeper)"},
"entityTypeIronGolem":function(d){return "geležinis golemas"},
"entityTypePlayer":function(d){return "žaidėjas"},
"entityTypeSheep":function(d){return "avis"},
"entityTypeZombie":function(d){return "zombis"},
"eventTypeWhenAttacked":function(d){return "kai užpultas"},
"eventTypeWhenDay":function(d){return "kai diena"},
"eventTypeWhenNight":function(d){return "kai naktis"},
"eventTypeWhenRun":function(d){return "paleidus"},
"eventTypeWhenSpawned":function(d){return "kai atsiras"},
"eventTypeWhenTouched":function(d){return "kai paliestas"},
"eventTypeWhenUsed":function(d){return "kai naudojamas"},
"forever":function(d){return "amžinai"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Tempdamas ir dėliodamas blokelius šiame galvosūkyje, tu sukūrei instrukcijų rinkinį kompiuterine kalba Javascript. Šis instrukcijų rinkinys (arba kitaip – kodas) pasako kompiuteriui, ką rodyti ekrane. Viskas, ką tu matai ir darai žaidime Minecraft, taip pat prasideda su panašiomis kompiuterinio kodo eilutėmis."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Pasirink savo namo planą."},
"houseSelectEasy":function(d){return "Lengvas"},
"houseSelectHard":function(d){return "Sunkus"},
"houseSelectLetsBuild":function(d){return "Pastatykime namą."},
"houseSelectMedium":function(d){return "Vidutinis"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "blokas"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Uždenk lavą, kad galėtum pereiti, o tada iškask du geležies blokus kitoje pusėje."},
"level11FailureMessage":function(d){return "Nepamiršk priekyje padėti grindinio, jei ten yra lava. Tokiu būdu tu galėsi saugiai iškasti šią išteklių eilę."},
"level12FailureMessage":function(d){return "Būtinai iškask 3 raudono akmens blokus. Tai apjungia visa tai, ką tu išmokai statydamas savo namą ir naudodamas „jei“ sakinį, kad neįkristum į lavą."},
"level13FailureMessage":function(d){return "Padėk „bėgius“ ant tako, vedančio nuo tavo namo durų iki žemėlapio krašto."},
"level1FailureMessage":function(d){return "Norint nueiti prie avies, reikia naudoti komandas."},
"level1TooFewBlocksMessage":function(d){return "Pabandyk panaudoti daugiau komandų, kad nueitum prie avies."},
"level2FailureMessage":function(d){return "Norėdamas nukirsti medį, prieik prie jo kamieno ir panaudok komandą „sunaikinti bloką“."},
"level2TooFewBlocksMessage":function(d){return "Pabandyk panaudoti daugiau komandų, kad nukirstum medį. Prieik prie jo kamieno ir panaudok komandą „sunaikinti bloką“."},
"level3FailureMessage":function(d){return "Norėdamas nukirpti vilną nuo abiejų avių, prieik prie kiekvienos ir panaudok komandą „kirpti“. Nepamiršk panaudoti pasisukimo komandų, kad pasiektum avis."},
"level3TooFewBlocksMessage":function(d){return "Pabandyk panaudoti daugiau komandų, kad nukirptum vilną nuo abiejų avių. Prieik prie kiekvienos ir panaudok komandą „kirpti“."},
"level4FailureMessage":function(d){return "Reikia panaudoti komandą „sunaikinti bloką“ visiems trims medžio kamienams."},
"level5FailureMessage":function(d){return "Norėdamas pastatyti sieną, išdėliok savo blokus ant kontūro iš žemių. Rausva komanda „kartoti“ vykdys kitas į ją įdėtas komandas, tokias kaip „padėti bloką“ arba „eiti pirmyn“."},
"level6FailureMessage":function(d){return "Norėdamas išspręsti galvosūkį, išdėliok blokus ant namo kontūro iš žemių."},
"level7FailureMessage":function(d){return "Norėdamas pasodinti pasėlius, ant kiekvienos sukastos dirvos naudok komandą „sodinti“."},
"level8FailureMessage":function(d){return "Jei tu paliesi pasalūną (creeper), jis susprogs. Prasėlink pro juos ir įeik į savo namą."},
"level9FailureMessage":function(d){return "Nepamiršk padėti bent 2 deglus, kad apšviestum savo kelią ir iškask BENT 2 anglies."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "blokas"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "plytas"},
"miniBlockBucketLava":function(d){return "lavos kibirą"},
"miniBlockBucketWater":function(d){return "vandens kibirą"},
"miniBlockCarrots":function(d){return "morkas"},
"miniBlockCoal":function(d){return "anglis"},
"miniBlockCobblestone":function(d){return "grindinį"},
"miniBlockDiamond":function(d){return "deimantą"},
"miniBlockDirt":function(d){return "žemę"},
"miniBlockDirtCoarse":function(d){return "rupią žemę"},
"miniBlockEgg":function(d){return "kiaušinį"},
"miniBlockEmerald":function(d){return "smaragdą"},
"miniBlockGravel":function(d){return "žvyrą"},
"miniBlockGunPowder":function(d){return "paraką"},
"miniBlockIngotGold":function(d){return "aukso luitą"},
"miniBlockIngotIron":function(d){return "geležies luitą"},
"miniBlockLapisLazuli":function(d){return "lazuritą"},
"miniBlockLogAcacia":function(d){return "akacijos rąstą"},
"miniBlockLogBirch":function(d){return "beržo rąstą"},
"miniBlockLogJungle":function(d){return "džiunglių rąstą"},
"miniBlockLogOak":function(d){return "ąžuolo rąstą"},
"miniBlockLogSpruce":function(d){return "eglės rąstą"},
"miniBlockMilk":function(d){return "pieną"},
"miniBlockPlanksAcacia":function(d){return "akacijos lentas"},
"miniBlockPlanksBirch":function(d){return "beržo lentas"},
"miniBlockPlanksJungle":function(d){return "džiunglių lentas"},
"miniBlockPlanksOak":function(d){return "ąžuolo lentas"},
"miniBlockPlanksSpruce":function(d){return "eglės lentas"},
"miniBlockPoppy":function(d){return "aguoną"},
"miniBlockPotato":function(d){return "bulvę"},
"miniBlockRedstoneDust":function(d){return "raudono akmens dulkes"},
"miniBlockSand":function(d){return "smėlį"},
"miniBlockSandstone":function(d){return "smiltainį"},
"miniBlockSheep":function(d){return "avis"},
"miniBlockWheat":function(d){return "kviečius"},
"miniBlockWool":function(d){return "vilną"},
"nextLevelMsg":function(d){return "Galvosūkis "+craft_locale.v(d,"puzzleNumber")+" baigtas. Sveikiname!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Pasirinkite savo veikėją."},
"playerSelectChooseSelectButton":function(d){return "Pasirinkti"},
"playerSelectLetsGetStarted":function(d){return "Pradėkime."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Paspausk \"Tęsti Žaidimą\" jei nori grįžti į žaidimą."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Rezultatas"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Pasirinkti"},
"soundTypeBump":function(d){return "susidūrimas"},
"soundTypeChickenBawk":function(d){return "viščiuko kudakavimas"},
"soundTypeChickenHurt":function(d){return "viščiuko sužalojimas"},
"soundTypeCollectedBlock":function(d){return "blokelio paėmimas"},
"soundTypeCowHuff":function(d){return "karvės supykinimas"},
"soundTypeCowHurt":function(d){return "karvės sužalojimas"},
"soundTypeCowMoo":function(d){return "karvės mūkimas"},
"soundTypeCowMooLong":function(d){return "karvės baubimas"},
"soundTypeCreeperHiss":function(d){return "pasalūno šnypštimas"},
"soundTypeDig_wood1":function(d){return "medienos lūžis"},
"soundTypeDoorOpen":function(d){return "durų atidarymas"},
"soundTypeExplode":function(d){return "sprogti"},
"soundTypeFailure":function(d){return "lygio nesėkmė"},
"soundTypeFall":function(d){return "kristi"},
"soundTypeFizz":function(d){return "šnypštimas"},
"soundTypeFuse":function(d){return "lydymas"},
"soundTypeIronGolemHit":function(d){return "geležinio golemo smūgis"},
"soundTypeMetalWhack":function(d){return "metalo trenksmas"},
"soundTypeMinecart":function(d){return "vagonėlis"},
"soundTypePlaceBlock":function(d){return "blokelio padėjimas"},
"soundTypePunch":function(d){return "smūgis"},
"soundTypeSheepBaa":function(d){return "avies bliovimas"},
"soundTypeStepFarmland":function(d){return "žingsnis žeme"},
"soundTypeStepGrass":function(d){return "žingsnis žole"},
"soundTypeStepGravel":function(d){return "žingsnis žvirgždu"},
"soundTypeStepStone":function(d){return "žingsnis akmeniu"},
"soundTypeStepWood":function(d){return "žingsnis medžiu"},
"soundTypeSuccess":function(d){return "lygio sėkmė"},
"soundTypeZombieBrains":function(d){return "zombio dejavimas"},
"soundTypeZombieGroan":function(d){return "zombio urzgimas"},
"soundTypeZombieHurt":function(d){return "zombio sužalojimas"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "diena"},
"timeLong":function(d){return "ilgai"},
"timeMedium":function(d){return "šiek tiek"},
"timeNight":function(d){return "naktis"},
"timeRandom":function(d){return "atsitiktinis"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "trumpai"},
"timeVeryLong":function(d){return "labai ilgai"},
"timeVeryShort":function(d){return "labai trumpai"},
"to":function(d){return "="},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Galvosūkis "+craft_locale.v(d,"puzzleNumber")+" baigtas. Sveikiname! Jį įmanoma išspręsti ir panaudojant "+craft_locale.p(d,"numBlocks",0,"lt",{"one":"1 blokelį","other":craft_locale.n(d,"numBlocks")+" blokelius"})+"."},
"turnRandom":function(d){return "pasisuk atsitiktinai"},
"useArrowKeys":function(d){return "Tau nereikia jokių blokelių! Judėk naudodamas rodykles ir spustelėk tarpo klavišą, kad galėtum naudoti daiktus."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};