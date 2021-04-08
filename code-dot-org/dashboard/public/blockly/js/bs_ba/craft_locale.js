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
"absolute":function(d){return "apsolutna vrijednost"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"en",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "dodaj"},
"blockActionAttack":function(d){return "attack"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "pokupi"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "nestani"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "drop"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "eksplodiraj"},
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
"blockActionMove":function(d){return "pomakni"},
"blockActionMoveAway":function(d){return "odmakni se od"},
"blockActionMoveForward":function(d){return "idi naprijed"},
"blockActionMoveRandom":function(d){return "move random"},
"blockActionMoveTo":function(d){return "move to"},
"blockActionMoveToward":function(d){return "move a step toward"},
"blockActionPlaySound":function(d){return "play sound"},
"blockActionRepeat":function(d){return "ponovi"},
"blockActionRepeatRandom":function(d){return "repeat random"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "spawn"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleportiraj metu"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "to score"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "čekaj"},
"blockActionWith":function(d){return "sa"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "uništi blok"},
"blockIf":function(d){return "ako"},
"blockIfLavaAhead":function(d){return "ako je lava ispred"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "pomakni"},
"blockMoveBackward":function(d){return "idi unatrag"},
"blockMoveForward":function(d){return "idi naprijed"},
"blockPlace":function(d){return "postavi"},
"blockPlaceTorch":function(d){return "postavite baklju"},
"blockPlaceXAheadAhead":function(d){return "ispred"},
"blockPlaceXAheadPlace":function(d){return "postavi"},
"blockPlaceXPlace":function(d){return "postavi"},
"blockPlantCrop":function(d){return "zasadite usjev"},
"blockShear":function(d){return "ošišaj"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "prekopaj tlo"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "okreni lijevo"},
"blockTurnRight":function(d){return "okreni desno"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "temelj"},
"blockTypeBricks":function(d){return "blokovi"},
"blockTypeClay":function(d){return "glina"},
"blockTypeClayHardened":function(d){return "tvrda glina"},
"blockTypeCobblestone":function(d){return "kaldrma"},
"blockTypeDirt":function(d){return "blato"},
"blockTypeDirtCoarse":function(d){return "krupno blato"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "prazno"},
"blockTypeFarmlandWet":function(d){return "plodno tlo"},
"blockTypeGlass":function(d){return "staklo"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "trava"},
"blockTypeGravel":function(d){return "makadam"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "stablo bagrema"},
"blockTypeLogBirch":function(d){return "stablo breze"},
"blockTypeLogJungle":function(d){return "stablo džungle"},
"blockTypeLogOak":function(d){return "stablo hrasta"},
"blockTypeLogSpruce":function(d){return "stablo smreke"},
"blockTypeOreCoal":function(d){return "ruda ugljena"},
"blockTypeOreDiamond":function(d){return "ruda dijamanta"},
"blockTypeOreEmerald":function(d){return "ruda smaragda"},
"blockTypeOreGold":function(d){return "ruda zlata"},
"blockTypeOreIron":function(d){return "ruda željeza"},
"blockTypeOreLapis":function(d){return "lapis ruda"},
"blockTypeOreRedstone":function(d){return "ruda crvenog kamena"},
"blockTypePlanksAcacia":function(d){return "daska bagrema"},
"blockTypePlanksBirch":function(d){return "daska breze"},
"blockTypePlanksJungle":function(d){return "daska džungle"},
"blockTypePlanksOak":function(d){return "daska hrasta"},
"blockTypePlanksSpruce":function(d){return "daska smreke"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "tračnica"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "pijesak"},
"blockTypeSandstone":function(d){return "šljunak"},
"blockTypeStone":function(d){return "kamen"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "drvo"},
"blockTypeWater":function(d){return "voda"},
"blockTypeWool":function(d){return "vuna"},
"blockTypeWoolBlue":function(d){return "plava vuna"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "ispred"},
"blockWhileXAheadDo":function(d){return "uradi"},
"blockWhileXAheadWhile":function(d){return "dok"},
"cancel":function(d){return "Poništi"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "pomakni"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "odredište"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "dolje"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "lijevo"},
"directionMiddle":function(d){return "srednji"},
"directionRight":function(d){return "desno"},
"directionUp":function(d){return "gore"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "pile"},
"entityTypeCow":function(d){return "krava"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "igrač"},
"entityTypeSheep":function(d){return "ovca"},
"entityTypeZombie":function(d){return "zombi"},
"eventTypeWhenAttacked":function(d){return "when attacked"},
"eventTypeWhenDay":function(d){return "when day"},
"eventTypeWhenNight":function(d){return "when night"},
"eventTypeWhenRun":function(d){return "pri pokretanju"},
"eventTypeWhenSpawned":function(d){return "when spawned"},
"eventTypeWhenTouched":function(d){return "when touched"},
"eventTypeWhenUsed":function(d){return "when used"},
"forever":function(d){return "zauvijek"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Premještajući i postavljajući blokove u ovoj zagonetci, kreirate niz instrukcija u programskom jeziku koji se naziva Javascirpt. Ovaj kod govori računaru šta da prikaže na ekranu. Sve što vidite ili radite u igri Minecraft takođe započinje linijama koda sličnim ovima."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Odaberite plan za vašu kuću."},
"houseSelectEasy":function(d){return "Lahko"},
"houseSelectHard":function(d){return "Teško"},
"houseSelectLetsBuild":function(d){return "Izgradimo kuću."},
"houseSelectMedium":function(d){return "Srednje"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "blok"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "alatka"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Prekrijte lavu kako bi prešli preko iste, a onda izvadite dva bloka željeza sa druge strane."},
"level11FailureMessage":function(d){return "Morate postaviti kaldrmu ukoliko imate lavu ispred. Ovo vam omogučuje da sigurno vadite ove resurse."},
"level12FailureMessage":function(d){return "Morate iskopati 3 bloka crvenog kamena. Ovdje kombinujete ono što ste naučili u gradnji vaše kuće i korištenja \"ako\" naredbe da bi izbjegli da upadnete u lavu."},
"level13FailureMessage":function(d){return "Postavite \"tračnice\" preko puta koji vodi do vaših vrata na ivici mape."},
"level1FailureMessage":function(d){return "Morate koristiti komande kako bi ste došli do ovce."},
"level1TooFewBlocksMessage":function(d){return "Probajte da koristite više komandi kako bi došli do ovce."},
"level2FailureMessage":function(d){return "Kako bi ste isjekli drvo, idite do stabla i upotrijebite komandu \"uništi blok\"."},
"level2TooFewBlocksMessage":function(d){return "Probajte koristiti više komandi kako bi ste isjekli drvo. Krećite se do stabla i iskoristite komandu \"uništi blok\"."},
"level3FailureMessage":function(d){return "Kako bi ste prikupili vunu sa obje ovce, približite se svakoj ovci i upotrijebite komandu \"ošišati\". Ne zaboravite korisiti komandu zakreni kako bi ste došli do ovce."},
"level3TooFewBlocksMessage":function(d){return "Porbajte iskoristiti još komandi kako bi ste skupili vunu sa obje ovce. Priđite svakoj od njih i iskoristite komandu \"ošišati\"."},
"level4FailureMessage":function(d){return "Morate iskoristiti \"uništi blok\" komandu na svakom od tri stabla drveta."},
"level5FailureMessage":function(d){return "Postavite blokove na označeno mjesto kako bi ste napravili zid. Roza komanda \"ponovi\" pokrenut će komande unutar nje, kao \"postavi blok\" i \"idi naprijed\"."},
"level6FailureMessage":function(d){return "Postavite blokove na označeno tlo za kuću kako bi ste završili zagonetku."},
"level7FailureMessage":function(d){return "Koristite komandu \"zasadi\" kako bi ste zasadili usjeve na svaki komad tamnog zemljišta."},
"level8FailureMessage":function(d){return "Ukoliko dodirnete puzavca, eksplodirat će. Zaobiđite ga i uđite u svoju kuću."},
"level9FailureMessage":function(d){return "Ne zaboravite da postavite bar 2 baklje kako bi osvijetlili svoj put i iskopali barem 2 komada ugljena."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "blok"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "blokovi"},
"miniBlockBucketLava":function(d){return "lava bucket"},
"miniBlockBucketWater":function(d){return "water bucket"},
"miniBlockCarrots":function(d){return "mrkve"},
"miniBlockCoal":function(d){return "ugalj"},
"miniBlockCobblestone":function(d){return "kaldrma"},
"miniBlockDiamond":function(d){return "dijamant"},
"miniBlockDirt":function(d){return "blato"},
"miniBlockDirtCoarse":function(d){return "krupno blato"},
"miniBlockEgg":function(d){return "jaje"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "makadam"},
"miniBlockGunPowder":function(d){return "barut"},
"miniBlockIngotGold":function(d){return "gold ingot"},
"miniBlockIngotIron":function(d){return "iron ingot"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "stablo bagrema"},
"miniBlockLogBirch":function(d){return "stablo breze"},
"miniBlockLogJungle":function(d){return "stablo džungle"},
"miniBlockLogOak":function(d){return "stablo hrasta"},
"miniBlockLogSpruce":function(d){return "stablo smreke"},
"miniBlockMilk":function(d){return "mlijeko"},
"miniBlockPlanksAcacia":function(d){return "daska bagrema"},
"miniBlockPlanksBirch":function(d){return "daska breze"},
"miniBlockPlanksJungle":function(d){return "daska džungle"},
"miniBlockPlanksOak":function(d){return "daska hrasta"},
"miniBlockPlanksSpruce":function(d){return "daska smreke"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "potato"},
"miniBlockRedstoneDust":function(d){return "redstone dust"},
"miniBlockSand":function(d){return "pijesak"},
"miniBlockSandstone":function(d){return "šljunak"},
"miniBlockSheep":function(d){return "ovca"},
"miniBlockWheat":function(d){return "wheat"},
"miniBlockWool":function(d){return "vuna"},
"nextLevelMsg":function(d){return "Zagonetka "+craft_locale.v(d,"puzzleNumber")+" završena. Čestitamo!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Odaberite svoj lik."},
"playerSelectChooseSelectButton":function(d){return "Odaberi"},
"playerSelectLetsGetStarted":function(d){return "Započnimo."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Možete kliknuti na \"Nastavi Igrati\" kako bi nastavili igru."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Score"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Odaberi"},
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
"soundTypeExplode":function(d){return "eksplodiraj"},
"soundTypeFailure":function(d){return "level failure"},
"soundTypeFall":function(d){return "fall"},
"soundTypeFizz":function(d){return "fizz"},
"soundTypeFuse":function(d){return "fuse"},
"soundTypeIronGolemHit":function(d){return "iron golem hit"},
"soundTypeMetalWhack":function(d){return "metal whack"},
"soundTypeMinecart":function(d){return "minecart"},
"soundTypePlaceBlock":function(d){return "block place"},
"soundTypePunch":function(d){return "udarac"},
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
"timeDay":function(d){return "dan"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "medium"},
"timeNight":function(d){return "noć"},
"timeRandom":function(d){return "slučajno odabran"},
"timeSet":function(d){return "time set"},
"timeShort":function(d){return "kratko"},
"timeVeryLong":function(d){return "veoma dugo"},
"timeVeryShort":function(d){return "vrlo kratko"},
"to":function(d){return " "},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Zagonetka "+craft_locale.v(d,"puzzleNumber")+" završena. Čestitamo! Možete je završiti i sa "+craft_locale.p(d,"numBlocks",0,"en",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "vrijeme"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "kiša"},
"weatherTypeThunder":function(d){return "grom"}};