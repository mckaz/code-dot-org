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
"absolute":function(d){return "absolut(ă)"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "la"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"ro",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "adaugă"},
"blockActionAttack":function(d){return "atac"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "colectează"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "dispar"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "pozitioneaza"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "explodează"},
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
"blockActionMove":function(d){return "mută"},
"blockActionMoveAway":function(d){return "mergi departe de"},
"blockActionMoveForward":function(d){return "mută înainte"},
"blockActionMoveRandom":function(d){return "mergi la întâmplare"},
"blockActionMoveTo":function(d){return "mută la"},
"blockActionMoveToward":function(d){return "mută un pas spre"},
"blockActionPlaySound":function(d){return "reda sunetul"},
"blockActionRepeat":function(d){return "repetă"},
"blockActionRepeatRandom":function(d){return "repetare aleatorie"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "genereaza"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "să înscrie"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "aşteaptă"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "distruge bloc"},
"blockIf":function(d){return "dacă"},
"blockIfLavaAhead":function(d){return "dacă este lavă în față"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "mută"},
"blockMoveBackward":function(d){return "mută înapoi"},
"blockMoveForward":function(d){return "mută înainte"},
"blockPlace":function(d){return "plaseaza"},
"blockPlaceTorch":function(d){return "plaseaza torta"},
"blockPlaceXAheadAhead":function(d){return "inainte"},
"blockPlaceXAheadPlace":function(d){return "plaseaza"},
"blockPlaceXPlace":function(d){return "plaseaza"},
"blockPlantCrop":function(d){return "planteaza recolta"},
"blockShear":function(d){return "taie"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "ara solul"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "ia-o la stânga"},
"blockTurnRight":function(d){return "ia-o la dreapta"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "roca"},
"blockTypeBricks":function(d){return "caramizi"},
"blockTypeClay":function(d){return "lut"},
"blockTypeClayHardened":function(d){return "lut intarit"},
"blockTypeCobblestone":function(d){return "pietruială"},
"blockTypeDirt":function(d){return "noroi"},
"blockTypeDirtCoarse":function(d){return "murdărie mare"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "gol"},
"blockTypeFarmlandWet":function(d){return "terenuri agricole"},
"blockTypeGlass":function(d){return "sticlă"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "iarba"},
"blockTypeGravel":function(d){return "pietris"},
"blockTypeLava":function(d){return "lavă"},
"blockTypeLogAcacia":function(d){return "salcâm"},
"blockTypeLogBirch":function(d){return "mesteacan"},
"blockTypeLogJungle":function(d){return "jungla"},
"blockTypeLogOak":function(d){return "stejar"},
"blockTypeLogSpruce":function(d){return "molid"},
"blockTypeOreCoal":function(d){return "minereu de cărbune"},
"blockTypeOreDiamond":function(d){return "minereu de diamant"},
"blockTypeOreEmerald":function(d){return "minereu de smarald"},
"blockTypeOreGold":function(d){return "minereu de aur"},
"blockTypeOreIron":function(d){return "minereu de fier"},
"blockTypeOreLapis":function(d){return "minereu de lapis"},
"blockTypeOreRedstone":function(d){return "minereu de pietre rosii"},
"blockTypePlanksAcacia":function(d){return "cherestea de salcam"},
"blockTypePlanksBirch":function(d){return "cherestea de mesteacan"},
"blockTypePlanksJungle":function(d){return "scanduri"},
"blockTypePlanksOak":function(d){return "cherestea de stejar"},
"blockTypePlanksSpruce":function(d){return "cherestea de molid"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "şină"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "nisip"},
"blockTypeSandstone":function(d){return "gresie"},
"blockTypeStone":function(d){return "piatra"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "copac"},
"blockTypeWater":function(d){return "apă"},
"blockTypeWool":function(d){return "lână"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "inainte"},
"blockWhileXAheadDo":function(d){return "fă"},
"blockWhileXAheadWhile":function(d){return "în timp ce"},
"cancel":function(d){return "Anulează"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "mută"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "jos"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "stânga"},
"directionMiddle":function(d){return "mijloc"},
"directionRight":function(d){return "dreapta"},
"directionUp":function(d){return "sus"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "gaina"},
"entityTypeCow":function(d){return "vacă"},
"entityTypeCreeper":function(d){return "vierme"},
"entityTypeIronGolem":function(d){return "golem de fier"},
"entityTypePlayer":function(d){return "jucător"},
"entityTypeSheep":function(d){return "oaie"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "cand e atacat"},
"eventTypeWhenDay":function(d){return "cand ziua"},
"eventTypeWhenNight":function(d){return "cand noaptea"},
"eventTypeWhenRun":function(d){return "când rulezi"},
"eventTypeWhenSpawned":function(d){return "cand prinde viata"},
"eventTypeWhenTouched":function(d){return "cand e atins"},
"eventTypeWhenUsed":function(d){return "cand e utilizat"},
"forever":function(d){return "pentru totdeauna"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Prin glisarea şi plasarea de blocuri în acest puzzle, ai creat un set de instrucţiuni într-un limbaj de calculator numit Javascript. Acest cod le spune calculatoarelor ce să afişeze pe ecran. Tot ceea ce vezi şi faci în Minecraft începe, de asemenea, cu linii de cod pentru calculator ca acestea."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Alege planul de etaj pentru casa ta."},
"houseSelectEasy":function(d){return "Uşor"},
"houseSelectHard":function(d){return "Greu"},
"houseSelectLetsBuild":function(d){return "Hai să construim o casă."},
"houseSelectMedium":function(d){return "Medium"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "bloc"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Acopera lava pentru a merge peste ea, apoi pune 2 blocuri de fier pe partea cealalta."},
"level11FailureMessage":function(d){return "Asigura-te sa plasezi pietrele in fata daca exista lava. Acestea te vor lasa sa pastrezi in siguranta resursele."},
"level12FailureMessage":function(d){return "Asigura-te sa ai 3 blocuri de minereu rosu. Aceasta miscare combina ce ai invatat din construirea casei tale si folosind \"daca\" pentru a evita caderea in lava."},
"level13FailureMessage":function(d){return "Aseaza \"șine\" pe calea de noroi ce duce de la usa ta pana la marginea hartii."},
"level1FailureMessage":function(d){return "Trebuie sa folosesti comenzi pentru a ajunge la oi."},
"level1TooFewBlocksMessage":function(d){return "Incercati mai multe comenzi pentru a ajunge la oi."},
"level2FailureMessage":function(d){return "Pentru a taia un copac, mergi pana la baza lui si foloseste comanda \"distruge bloc\"."},
"level2TooFewBlocksMessage":function(d){return "Încercaţi să utilizaţi mai multe comenzi pentru taia copacul. Mergeti catre baza lui si folositi blocul \"distruge\"."},
"level3FailureMessage":function(d){return "Pentru a aduna lana de la ambele oi, mergeti catre ele si utilizati comanda \"forfcare\". Amintiti-va sa folositi comanda \"intoarcere\" pentru a ajunge la oi."},
"level3TooFewBlocksMessage":function(d){return "Incearca sa folosesti mai multe comenzi pentru a aduna lana de la ambele oi. Mergi catre fiecare si utilizeaza comanda \"forfecare\"."},
"level4FailureMessage":function(d){return "Trebuie sa folosesti blocul \"distruge\" pentru cele 3 trunchiuri."},
"level5FailureMessage":function(d){return "Aseaza-ti blocurile pe conturul de noroi pentru a face un zid. Comanda roz \"repeta\" va rula comenzile incluse in el, ca si \"pune blocul\" sau \"mergi inainte\"."},
"level6FailureMessage":function(d){return "Pune blocurile pe conturul de noroi din fata casei pentru a completa puzzle-ul."},
"level7FailureMessage":function(d){return "Foloseste comanda \"planteaza\" pentru a cultiva pe fiecare parte de sol inchis la culoare."},
"level8FailureMessage":function(d){return "Daca atingi un vierme va exploda. Strecoara-te in jurul lor si intra in casa ta."},
"level9FailureMessage":function(d){return "Nu uita sa asezi cel putin 2 torte pentru a-ti lumina drumul si pune cel putin 2 carbuni."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "bloc"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "caramizi"},
"miniBlockBucketLava":function(d){return "găleată de lavă"},
"miniBlockBucketWater":function(d){return "găleată de apă"},
"miniBlockCarrots":function(d){return "morcovi"},
"miniBlockCoal":function(d){return "cărbune"},
"miniBlockCobblestone":function(d){return "pietruială"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "noroi"},
"miniBlockDirtCoarse":function(d){return "murdărie mare"},
"miniBlockEgg":function(d){return "ou"},
"miniBlockEmerald":function(d){return "smarald"},
"miniBlockGravel":function(d){return "pietris"},
"miniBlockGunPowder":function(d){return "praf de puşcă"},
"miniBlockIngotGold":function(d){return "lingou aur"},
"miniBlockIngotIron":function(d){return "lingou de fier"},
"miniBlockLapisLazuli":function(d){return "minereu albastru"},
"miniBlockLogAcacia":function(d){return "salcâm"},
"miniBlockLogBirch":function(d){return "mesteacan"},
"miniBlockLogJungle":function(d){return "jungla"},
"miniBlockLogOak":function(d){return "stejar"},
"miniBlockLogSpruce":function(d){return "molid"},
"miniBlockMilk":function(d){return "lapte"},
"miniBlockPlanksAcacia":function(d){return "cherestea de salcam"},
"miniBlockPlanksBirch":function(d){return "cherestea de mesteacan"},
"miniBlockPlanksJungle":function(d){return "scanduri"},
"miniBlockPlanksOak":function(d){return "cherestea de stejar"},
"miniBlockPlanksSpruce":function(d){return "cherestea de molid"},
"miniBlockPoppy":function(d){return "mac"},
"miniBlockPotato":function(d){return "cartof"},
"miniBlockRedstoneDust":function(d){return "prad de piatrs rosie"},
"miniBlockSand":function(d){return "nisip"},
"miniBlockSandstone":function(d){return "gresie"},
"miniBlockSheep":function(d){return "oaie"},
"miniBlockWheat":function(d){return "grâu"},
"miniBlockWool":function(d){return "lână"},
"nextLevelMsg":function(d){return "Puzzle-ul "+craft_locale.v(d,"puzzleNumber")+" finalizat. Felicitări!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Alege-ti personajul."},
"playerSelectChooseSelectButton":function(d){return "Selectare"},
"playerSelectLetsGetStarted":function(d){return "Haideţi să începem."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Poți apăsa \"Joacă în continuare\" pentru a reveni la jocul tău."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Scor"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Selectare"},
"soundTypeBump":function(d){return "bump"},
"soundTypeChickenBawk":function(d){return "cotcodacit"},
"soundTypeChickenHurt":function(d){return "pui ranit"},
"soundTypeCollectedBlock":function(d){return "bloc colectat"},
"soundTypeCowHuff":function(d){return "copita"},
"soundTypeCowHurt":function(d){return "vaca ranita"},
"soundTypeCowMoo":function(d){return "sunet moo"},
"soundTypeCowMooLong":function(d){return "sunet mooo"},
"soundTypeCreeperHiss":function(d){return "sunet ascutit"},
"soundTypeDig_wood1":function(d){return "lemn rupt"},
"soundTypeDoorOpen":function(d){return "deschidere usa"},
"soundTypeExplode":function(d){return "explodează"},
"soundTypeFailure":function(d){return "level esuat"},
"soundTypeFall":function(d){return "cadere"},
"soundTypeFizz":function(d){return "inghetare"},
"soundTypeFuse":function(d){return "fitil"},
"soundTypeIronGolemHit":function(d){return "lovitura golem de fier"},
"soundTypeMetalWhack":function(d){return "metal"},
"soundTypeMinecart":function(d){return "vagon de minereu"},
"soundTypePlaceBlock":function(d){return "loc pentru bloc"},
"soundTypePunch":function(d){return "pumn"},
"soundTypeSheepBaa":function(d){return "sunet de oaie"},
"soundTypeStepFarmland":function(d){return "bloc teren agricol"},
"soundTypeStepGrass":function(d){return "bloc iarba"},
"soundTypeStepGravel":function(d){return "bloc pietris"},
"soundTypeStepStone":function(d){return "bloc piatra"},
"soundTypeStepWood":function(d){return "bloc lemn"},
"soundTypeSuccess":function(d){return "nivel succes"},
"soundTypeZombieBrains":function(d){return "zombie geme"},
"soundTypeZombieGroan":function(d){return "zombie scoate sunet"},
"soundTypeZombieHurt":function(d){return "zombie lovit"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "zi"},
"timeLong":function(d){return "lung"},
"timeMedium":function(d){return "mediu"},
"timeNight":function(d){return "noapte"},
"timeRandom":function(d){return "aleator"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "scurt"},
"timeVeryLong":function(d){return "foarte lung"},
"timeVeryShort":function(d){return "foarte scurt"},
"to":function(d){return "la"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Puzzle-ul "+craft_locale.v(d,"puzzleNumber")+" finalizat. Felicitări! De asemenea, este posibil să îl completezi cu "+craft_locale.p(d,"numBlocks",0,"ro",{"one":"1 bloc","other":craft_locale.n(d,"numBlocks")+" blocuri"})+"."},
"turnRandom":function(d){return "intoarecere la intamplare"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};