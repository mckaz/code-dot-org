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
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"hr",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "dodati"},
"blockActionAttack":function(d){return "napad"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "collect"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "nestati"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "ispusti"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "eksplodiraj"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "bljesni"},
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
"blockActionMoveRandom":function(d){return "pomakni se u slučajnom smjeru"},
"blockActionMoveTo":function(d){return "pomakni se prema"},
"blockActionMoveToward":function(d){return "korak naprijed"},
"blockActionPlaySound":function(d){return "pusti zvuk"},
"blockActionRepeat":function(d){return "ponovi"},
"blockActionRepeatRandom":function(d){return "ponavljaj slučajno"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "stvori"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "na rezultat"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "wait"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "uništiti blok"},
"blockIf":function(d){return "ako"},
"blockIfLavaAhead":function(d){return "ako lava ispred"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "pomakni"},
"blockMoveBackward":function(d){return "idi unatrag"},
"blockMoveForward":function(d){return "idi naprijed"},
"blockPlace":function(d){return "postaviti"},
"blockPlaceTorch":function(d){return "postavi baklju"},
"blockPlaceXAheadAhead":function(d){return "naprijed"},
"blockPlaceXAheadPlace":function(d){return "postaviti"},
"blockPlaceXPlace":function(d){return "postaviti"},
"blockPlantCrop":function(d){return "zasadite usjev"},
"blockShear":function(d){return "ošišaj"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "prekopaj tlo"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "okreni lijevo"},
"blockTurnRight":function(d){return "okreni desno"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "temelj"},
"blockTypeBricks":function(d){return "cigle"},
"blockTypeClay":function(d){return "glina"},
"blockTypeClayHardened":function(d){return "печена глина"},
"blockTypeCobblestone":function(d){return "kocka kaldrme"},
"blockTypeDirt":function(d){return "zemlja"},
"blockTypeDirtCoarse":function(d){return "gruba zemlja"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "prazno"},
"blockTypeFarmlandWet":function(d){return "obrađena zemlja"},
"blockTypeGlass":function(d){return "staklo"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "trava"},
"blockTypeGravel":function(d){return "šljunak"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "cjepanica akacije"},
"blockTypeLogBirch":function(d){return "cjepanica breze"},
"blockTypeLogJungle":function(d){return "džungla daska"},
"blockTypeLogOak":function(d){return "cjepanica hrasta"},
"blockTypeLogSpruce":function(d){return "cjepanica smrekovine"},
"blockTypeOreCoal":function(d){return "ruda ugljena"},
"blockTypeOreDiamond":function(d){return "ruda dijamanta"},
"blockTypeOreEmerald":function(d){return "ruda smaragda"},
"blockTypeOreGold":function(d){return "ruda zlata"},
"blockTypeOreIron":function(d){return "ruda željeza"},
"blockTypeOreLapis":function(d){return "ruda lazulita"},
"blockTypeOreRedstone":function(d){return "ruda crvenog kamena"},
"blockTypePlanksAcacia":function(d){return "daska akacije"},
"blockTypePlanksBirch":function(d){return "daska breze"},
"blockTypePlanksJungle":function(d){return "džungla daske"},
"blockTypePlanksOak":function(d){return "daska hrasta"},
"blockTypePlanksSpruce":function(d){return "daska smrekovine"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "tračnica"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "pijesak"},
"blockTypeSandstone":function(d){return "pješčani kamen"},
"blockTypeStone":function(d){return "kamen"},
"blockTypeTnt":function(d){return "dinamit"},
"blockTypeTree":function(d){return "drvo"},
"blockTypeWater":function(d){return "voda"},
"blockTypeWool":function(d){return "vuna"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "naprijed"},
"blockWhileXAheadDo":function(d){return "napravi"},
"blockWhileXAheadWhile":function(d){return "dok"},
"cancel":function(d){return "Odustani"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "pomakni"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "dolje"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "lijevo"},
"directionMiddle":function(d){return "sredina"},
"directionRight":function(d){return "desno"},
"directionUp":function(d){return "gore"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "kokoš"},
"entityTypeCow":function(d){return "krava"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "željezni golem"},
"entityTypePlayer":function(d){return "igrač"},
"entityTypeSheep":function(d){return "ovca"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "kad je napadnut"},
"eventTypeWhenDay":function(d){return "kad je dan"},
"eventTypeWhenNight":function(d){return "dok je noć"},
"eventTypeWhenRun":function(d){return "pri pokretanju"},
"eventTypeWhenSpawned":function(d){return "kad je stvoren"},
"eventTypeWhenTouched":function(d){return "kad je dotaknut"},
"eventTypeWhenUsed":function(d){return "kad je iskorišten"},
"forever":function(d){return "zauvijek"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Povlačenjem i postavljanjem blokova u ovoj zagonetki, stvorit ćete skup uputa u računalnom jeziku Javascript. Ovaj kod govori računalu što će prikazati na zaslonu. Sve što vidite i radite u Minecraftu također počinje sa linijama računalnog koda poput ovih."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Odaberite tlocrt za svoju kuću."},
"houseSelectEasy":function(d){return "Lagano"},
"houseSelectHard":function(d){return "Teško"},
"houseSelectLetsBuild":function(d){return "Ajmo sagraditi kuću."},
"houseSelectMedium":function(d){return "Srednje"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "blok"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Pokrij lavu da prođeš preko, onda iskopaj dva željezna bloka na drugoj strani."},
"level11FailureMessage":function(d){return "Postavi kamen ako je lava naprijed. To će ti dopustit da sigurno iskopaš ovaj red resursa."},
"level12FailureMessage":function(d){return "Iskopajte 3 redstone bloka. Ovime kombinirajte ono što ste naučili gradeći svoju kuću i korištenjem \"ako(if)\" izraza kako bi izbjegli pad u lavu."},
"level13FailureMessage":function(d){return "Postavi \"tračnice\" uz zemljani put koji vodi od tvojih vrata do kraja mape."},
"level1FailureMessage":function(d){return "Moraš koristiti komande da dohodaš do ovce."},
"level1TooFewBlocksMessage":function(d){return "Probaj koristiti još komandi da dođeš do ovce."},
"level2FailureMessage":function(d){return "Kako biste srušli drvo, hodajte do stabla i upotrijebite naredbu \"uništi blok\"."},
"level2TooFewBlocksMessage":function(d){return "Pokušaj koristiti više nardbi za nasjeckati drvo. Dođi do debla i koristi \"uništi blok\" naredbu."},
"level3FailureMessage":function(d){return "Za prikupiti vunu od obadvije ovce, potrebno je doći do svake i koristiti naredbu \"šišanje\". Koristite naredbu za okrenuti se kako bi došli do ovce."},
"level3TooFewBlocksMessage":function(d){return "Pokušajte koristiti više naredbi kako bi prikupili vunu od ovaca. Dođite do svake od njih i koristite naredbu \"šišaj\"."},
"level4FailureMessage":function(d){return "Morate koristiti \"uništi blok\" naredbu na svakom od tri debla."},
"level5FailureMessage":function(d){return "Postavite svoje blokove u blatni dio kako bi izgradili zid. Roza \"ponovi\" naredba će pokrenuti naredbe unutar nje, poput \"postavi blok\" i \"naprijed\"."},
"level6FailureMessage":function(d){return "Postavite blok na blatnu konturu kuće kako bi završili zadatak."},
"level7FailureMessage":function(d){return "Koristite \"zasadi\" naredbu kako bi posadili usjev na svaki komad uzoranog tla."},
"level8FailureMessage":function(d){return "Ako dodaknete \"creepera\", eksplodirati će. Šunjajte se oko njih i uđite u svoju kuću."},
"level9FailureMessage":function(d){return "Ne zaboravite postaviti najmanje 2 lampe da bi osvjetlili put i izrudarite najmanje 2 ugljena."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "blok"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "cigle"},
"miniBlockBucketLava":function(d){return "kanta lave"},
"miniBlockBucketWater":function(d){return "kanta vode"},
"miniBlockCarrots":function(d){return "mrkve"},
"miniBlockCoal":function(d){return "ugljen"},
"miniBlockCobblestone":function(d){return "kocka kaldrme"},
"miniBlockDiamond":function(d){return "dijamant"},
"miniBlockDirt":function(d){return "zemlja"},
"miniBlockDirtCoarse":function(d){return "gruba zemlja"},
"miniBlockEgg":function(d){return "jaje"},
"miniBlockEmerald":function(d){return "emerald"},
"miniBlockGravel":function(d){return "šljunak"},
"miniBlockGunPowder":function(d){return "gunpowder"},
"miniBlockIngotGold":function(d){return "gold ingot"},
"miniBlockIngotIron":function(d){return "iron ingot"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "cjepanica akacije"},
"miniBlockLogBirch":function(d){return "cjepanica breze"},
"miniBlockLogJungle":function(d){return "džungla daska"},
"miniBlockLogOak":function(d){return "cjepanica hrasta"},
"miniBlockLogSpruce":function(d){return "cjepanica smrekovine"},
"miniBlockMilk":function(d){return "milk"},
"miniBlockPlanksAcacia":function(d){return "daska akacije"},
"miniBlockPlanksBirch":function(d){return "daska breze"},
"miniBlockPlanksJungle":function(d){return "džungla daske"},
"miniBlockPlanksOak":function(d){return "daska hrasta"},
"miniBlockPlanksSpruce":function(d){return "daska smrekovine"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "potato"},
"miniBlockRedstoneDust":function(d){return "redstone dust"},
"miniBlockSand":function(d){return "pijesak"},
"miniBlockSandstone":function(d){return "pješčani kamen"},
"miniBlockSheep":function(d){return "ovca"},
"miniBlockWheat":function(d){return "wheat"},
"miniBlockWool":function(d){return "vuna"},
"nextLevelMsg":function(d){return "Zagonetka "+craft_locale.v(d,"puzzleNumber")+" dovršena. Čestitamo!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Odaberite svoj lik."},
"playerSelectChooseSelectButton":function(d){return "Odaberi"},
"playerSelectLetsGetStarted":function(d){return "Hajde da počnemo."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Možete izabrati \"Nastavi igrati\" da bi se vratili u svoju igru."},
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
"timeDay":function(d){return "dan"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "medium"},
"timeNight":function(d){return "noć"},
"timeRandom":function(d){return "slučajno odabran"},
"timeSet":function(d){return "time set"},
"timeShort":function(d){return "short"},
"timeVeryLong":function(d){return "very long"},
"timeVeryShort":function(d){return "very short"},
"to":function(d){return "na"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Zagonetka "+craft_locale.v(d,"puzzleNumber")+" je dovršena. Čestitam! Također je moguće završiti ju sa "+craft_locale.p(d,"numBlocks",0,"hr",{"jedna":"jednom kockom","other":craft_locale.n(d,"numBlocks")+" kocki"})+"."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};