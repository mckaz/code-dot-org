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
"absolute":function(d){return "valor absolut"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"ca",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "afegir"},
"blockActionAttack":function(d){return "ataca"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "agafa"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "desaparèixer"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "deixa anar"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "explota"},
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
"blockActionMove":function(d){return "moure's"},
"blockActionMoveAway":function(d){return "allunya't de"},
"blockActionMoveForward":function(d){return "avança"},
"blockActionMoveRandom":function(d){return "mou-te a l'atzar"},
"blockActionMoveTo":function(d){return "mou-te cap a "},
"blockActionMoveToward":function(d){return "mou-te un pas cap a"},
"blockActionPlaySound":function(d){return "reprodueix el so"},
"blockActionRepeat":function(d){return "repeteix"},
"blockActionRepeatRandom":function(d){return "repeat random"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "genera"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "to score"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "espera"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "destruir bloc"},
"blockIf":function(d){return "si"},
"blockIfLavaAhead":function(d){return "si hi ha lava davant"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "moure's"},
"blockMoveBackward":function(d){return "retrocedir"},
"blockMoveForward":function(d){return "avança"},
"blockPlace":function(d){return "posa"},
"blockPlaceTorch":function(d){return "posa una torxa"},
"blockPlaceXAheadAhead":function(d){return "endavant"},
"blockPlaceXAheadPlace":function(d){return "posa"},
"blockPlaceXPlace":function(d){return "posa"},
"blockPlantCrop":function(d){return "cultiu de plantes"},
"blockShear":function(d){return "tallar"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "fins a terra"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "gira a l'esquerra"},
"blockTurnRight":function(d){return "gira a la dreta"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "roca mare"},
"blockTypeBricks":function(d){return "maons"},
"blockTypeClay":function(d){return "argila"},
"blockTypeClayHardened":function(d){return "argila endurida (maons)"},
"blockTypeCobblestone":function(d){return "empedrat"},
"blockTypeDirt":function(d){return "terra"},
"blockTypeDirtCoarse":function(d){return "brutícia gruixuda"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "buit"},
"blockTypeFarmlandWet":function(d){return "terra de conreu"},
"blockTypeGlass":function(d){return "vidre"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "herba"},
"blockTypeGravel":function(d){return "grava"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "tronc d'acàcia"},
"blockTypeLogBirch":function(d){return "tronc de bedoll"},
"blockTypeLogJungle":function(d){return "jungla"},
"blockTypeLogOak":function(d){return "tronc de roure"},
"blockTypeLogSpruce":function(d){return "tronc polit"},
"blockTypeOreCoal":function(d){return "carbó"},
"blockTypeOreDiamond":function(d){return "diamant"},
"blockTypeOreEmerald":function(d){return "maragda"},
"blockTypeOreGold":function(d){return "or"},
"blockTypeOreIron":function(d){return "ferro"},
"blockTypeOreLapis":function(d){return "lapis"},
"blockTypeOreRedstone":function(d){return "pedra vermella"},
"blockTypePlanksAcacia":function(d){return "tauló d'acàcia"},
"blockTypePlanksBirch":function(d){return "tauló de bedoll"},
"blockTypePlanksJungle":function(d){return "tauló de la jungla"},
"blockTypePlanksOak":function(d){return "tauló de roure"},
"blockTypePlanksSpruce":function(d){return "taulers d'avet"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "via"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "sorra"},
"blockTypeSandstone":function(d){return "arenisca"},
"blockTypeStone":function(d){return "pedra"},
"blockTypeTnt":function(d){return "tNT"},
"blockTypeTree":function(d){return "arbre"},
"blockTypeWater":function(d){return "aigua"},
"blockTypeWool":function(d){return "llana"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "endavant"},
"blockWhileXAheadDo":function(d){return "fes"},
"blockWhileXAheadWhile":function(d){return "mentres"},
"cancel":function(d){return "Cancel·lar"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "moure's"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "avall"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "esquerra"},
"directionMiddle":function(d){return "centre"},
"directionRight":function(d){return "dret"},
"directionUp":function(d){return "cap amunt"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "gallina"},
"entityTypeCow":function(d){return "vaca"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "golem de ferro"},
"entityTypePlayer":function(d){return "jugador"},
"entityTypeSheep":function(d){return "ovella"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "when attacked"},
"eventTypeWhenDay":function(d){return "when day"},
"eventTypeWhenNight":function(d){return "when night"},
"eventTypeWhenRun":function(d){return "quan s'executa"},
"eventTypeWhenSpawned":function(d){return "when spawned"},
"eventTypeWhenTouched":function(d){return "when touched"},
"eventTypeWhenUsed":function(d){return "when used"},
"forever":function(d){return "forever"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "En posar els blocs d'aquest trencaclosques, has creat una sèrie d'instruccions en un llenguatge informàtic anomenat JavaScript. Aquest codi li diu a l'ordinador el que ha de mostrar a la pantalla. Tot el que fas i veus a Minecraft comença per línies de codi d'ordinador com aquestes."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Tria la planta de la teva casa."},
"houseSelectEasy":function(d){return "Senzill"},
"houseSelectHard":function(d){return "Difícil"},
"houseSelectLetsBuild":function(d){return "Construïm una casa."},
"houseSelectMedium":function(d){return "Mitjà"},
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
"level10FailureMessage":function(d){return "Cobreix la lava per creuar i després extreu dos dels blocs de ferro de l'altre costat."},
"level11FailureMessage":function(d){return "Assegura't de col·locar roques davant si hi ha lava. Això et permetrà extreure aquesta filera de recursos sense perill."},
"level12FailureMessage":function(d){return "No t'oblidis d'extreure 3 blocs de Redstone. Combina el que has après construint la teva casa i l'ús de sentències \"si\" per no caure en la lava."},
"level13FailureMessage":function(d){return "Col·locar \"rail\" al llarg del camí de terra que va de la teva porta a la vora del mapa."},
"level1FailureMessage":function(d){return "Has d'utilitzar ordres per caminar fins a l'ovella."},
"level1TooFewBlocksMessage":function(d){return "Prova a fer servir més ordres per caminar fins a l'ovella."},
"level2FailureMessage":function(d){return "Per talar un arbre, acosta't al tronc i fes servir l'ordre \"destruir bloc\"."},
"level2TooFewBlocksMessage":function(d){return "Prova a fer servir més ordres per talar l'arbre. Acosta't al tronc i fes servir l'ordre \"destruir bloc\"."},
"level3FailureMessage":function(d){return "Per obtenir la llana de les dues ovelles, acosta't a cadascuna d'elles i fa servir l'ordre \"esquilar\". No t'oblidis de fer servir les ordres de gir per arribar fins a les ovelles."},
"level3TooFewBlocksMessage":function(d){return "Prova a fer servir més ordres per obtenir la llana de les dues ovelles. Acosta't a cadascuna d'elles i fa servir l'ordre \"esquilar\"."},
"level4FailureMessage":function(d){return "Has d'utilitzar l'odre \"destruir bloc\" a cada un dels 3 troncs d'arbre."},
"level5FailureMessage":function(d){return "Col·loca els blocs en el contorn de terra per crear un mur. L'ordre rosa \"repetir\" executarà les ordres del seu interior, com \"col·locar bloc\" i \"avançar\"."},
"level6FailureMessage":function(d){return "Col·loca blocs en el contorn de terra de la casa per completar el trencaclosques."},
"level7FailureMessage":function(d){return "Utilitza l'ordre \"plantar\" per col·locar cultius en les parcel·les de sòl llaurat de color fosc."},
"level8FailureMessage":function(d){return "Si toques a un Creeper explotarà. Encercla'ls d'amagat i entra a casa teva."},
"level9FailureMessage":function(d){return "No oblidis col·locar almenys 2 torxes per il·luminar 'AND' extreure almenys 2 de carbó."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "bloc"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "maons"},
"miniBlockBucketLava":function(d){return "lava bucket"},
"miniBlockBucketWater":function(d){return "water bucket"},
"miniBlockCarrots":function(d){return "carrots"},
"miniBlockCoal":function(d){return "coal"},
"miniBlockCobblestone":function(d){return "empedrat"},
"miniBlockDiamond":function(d){return "diamond"},
"miniBlockDirt":function(d){return "terra"},
"miniBlockDirtCoarse":function(d){return "brutícia gruixuda"},
"miniBlockEgg":function(d){return "egg"},
"miniBlockEmerald":function(d){return "emerald"},
"miniBlockGravel":function(d){return "grava"},
"miniBlockGunPowder":function(d){return "gunpowder"},
"miniBlockIngotGold":function(d){return "gold ingot"},
"miniBlockIngotIron":function(d){return "iron ingot"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "tronc d'acàcia"},
"miniBlockLogBirch":function(d){return "tronc de bedoll"},
"miniBlockLogJungle":function(d){return "jungla"},
"miniBlockLogOak":function(d){return "tronc de roure"},
"miniBlockLogSpruce":function(d){return "tronc polit"},
"miniBlockMilk":function(d){return "milk"},
"miniBlockPlanksAcacia":function(d){return "tauló d'acàcia"},
"miniBlockPlanksBirch":function(d){return "tauló de bedoll"},
"miniBlockPlanksJungle":function(d){return "tauló de la jungla"},
"miniBlockPlanksOak":function(d){return "tauló de roure"},
"miniBlockPlanksSpruce":function(d){return "taulers d'avet"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "potato"},
"miniBlockRedstoneDust":function(d){return "redstone dust"},
"miniBlockSand":function(d){return "sorra"},
"miniBlockSandstone":function(d){return "arenisca"},
"miniBlockSheep":function(d){return "ovella"},
"miniBlockWheat":function(d){return "wheat"},
"miniBlockWool":function(d){return "llana"},
"nextLevelMsg":function(d){return "Trencaclosques "+craft_locale.v(d,"puzzleNumber")+" completat. Felicitats!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Tria el teu personatge."},
"playerSelectChooseSelectButton":function(d){return "Tria"},
"playerSelectLetsGetStarted":function(d){return "Som-hi."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Pots prémer \"Continua jugant\" per tornar a la partida."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Score"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Tria"},
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
"soundTypeExplode":function(d){return "explota"},
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
"timeDay":function(d){return "dia"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "medium"},
"timeNight":function(d){return "nit"},
"timeRandom":function(d){return "atzar"},
"timeSet":function(d){return "time set"},
"timeShort":function(d){return "short"},
"timeVeryLong":function(d){return "very long"},
"timeVeryShort":function(d){return "very short"},
"to":function(d){return "a"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Trencaclosques "+craft_locale.v(d,"puzzleNumber")+" completat. Enhorabona! També pots completar amb "+craft_locale.p(d,"numBlocks",0,"ca",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};