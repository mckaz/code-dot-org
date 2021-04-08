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
"absolute":function(d){return "absolutua"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"eu",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "gehitu"},
"blockActionAttack":function(d){return "eraso egin"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "uzta bildu"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "desagertu"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "bota"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "eztandarazi"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "flasheatu"},
"blockActionGetItemCount":function(d){return "get item count"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "get item detail"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "eman"},
"blockActionInspect":function(d){return "inspect"},
"blockActionInspectData":function(d){return "inspect data"},
"blockActionKill":function(d){return "kill target"},
"blockActionMove":function(d){return "mugitu"},
"blockActionMoveAway":function(d){return "mugitu hemendik"},
"blockActionMoveForward":function(d){return "mugitu aurrera"},
"blockActionMoveRandom":function(d){return "ausaz mugitu"},
"blockActionMoveTo":function(d){return "mugitu hona"},
"blockActionMoveToward":function(d){return "mugitu pauso bat nonbaitera"},
"blockActionPlaySound":function(d){return "erreproduzitu soinua"},
"blockActionRepeat":function(d){return "errepikatu"},
"blockActionRepeatRandom":function(d){return "errepikatu ausaz"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "sortu"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "puntuatu"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "itxaronaldia"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "txikitu blokea"},
"blockIf":function(d){return "baldin"},
"blockIfLavaAhead":function(d){return "aurrean laba badago"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "mugitu"},
"blockMoveBackward":function(d){return "atzera mugitu"},
"blockMoveForward":function(d){return "mugitu aurrera"},
"blockPlace":function(d){return "kokatu"},
"blockPlaceTorch":function(d){return "argi-zuzia kokatu"},
"blockPlaceXAheadAhead":function(d){return "aurrean"},
"blockPlaceXAheadPlace":function(d){return "kokatu"},
"blockPlaceXPlace":function(d){return "kokatu"},
"blockPlantCrop":function(d){return "uzta landatu"},
"blockShear":function(d){return "ilea moztu"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "lurra landu"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "biratu ezkerrera"},
"blockTurnRight":function(d){return "biratu eskuinera"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "harkaitz"},
"blockTypeBricks":function(d){return "adreiluak"},
"blockTypeClay":function(d){return "buztin"},
"blockTypeClayHardened":function(d){return "buztin lehorra"},
"blockTypeCobblestone":function(d){return "galtzada-harri"},
"blockTypeDirt":function(d){return "lurra"},
"blockTypeDirtCoarse":function(d){return "lur zakarra"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "huts"},
"blockTypeFarmlandWet":function(d){return "laborantzako lurra"},
"blockTypeGlass":function(d){return "beira"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "belarra"},
"blockTypeGravel":function(d){return "hartxintxar"},
"blockTypeLava":function(d){return "laba"},
"blockTypeLogAcacia":function(d){return "akazia egurra"},
"blockTypeLogBirch":function(d){return "urki egurra"},
"blockTypeLogJungle":function(d){return "oihaneko zuhaitzen egurra"},
"blockTypeLogOak":function(d){return "haritz egurra"},
"blockTypeLogSpruce":function(d){return "izei egurra"},
"blockTypeOreCoal":function(d){return "ikatz mineral"},
"blockTypeOreDiamond":function(d){return "diamante mineral"},
"blockTypeOreEmerald":function(d){return "esmeralda mineral"},
"blockTypeOreGold":function(d){return "urre mineral"},
"blockTypeOreIron":function(d){return "burdin mineral"},
"blockTypeOreLapis":function(d){return "lapis mineral"},
"blockTypeOreRedstone":function(d){return "harri gorrixka mea"},
"blockTypePlanksAcacia":function(d){return "akazia oholak"},
"blockTypePlanksBirch":function(d){return "urki oholak"},
"blockTypePlanksJungle":function(d){return "oihaneko zuhaitzen oholak"},
"blockTypePlanksOak":function(d){return "haritz oholak"},
"blockTypePlanksSpruce":function(d){return "izei oholak"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "erraila"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "hondarra"},
"blockTypeSandstone":function(d){return "hareharria"},
"blockTypeStone":function(d){return "harria"},
"blockTypeTnt":function(d){return "dinamita"},
"blockTypeTree":function(d){return "zuhaitza"},
"blockTypeWater":function(d){return "ura"},
"blockTypeWool":function(d){return "artile"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "aurrean"},
"blockWhileXAheadDo":function(d){return "egin"},
"blockWhileXAheadWhile":function(d){return "bitartean"},
"cancel":function(d){return "Ezeztatu"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "mugitu"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "atzera"},
"directionDown":function(d){return "behera"},
"directionForward":function(d){return "aurrera"},
"directionLeft":function(d){return "ezkerrera"},
"directionMiddle":function(d){return "erdia"},
"directionRight":function(d){return "eskuinera"},
"directionUp":function(d){return "gora"},
"downloadButton":function(d){return "Deskargatu"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "oilaskoa"},
"entityTypeCow":function(d){return "behia"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "burdin golema"},
"entityTypePlayer":function(d){return "jokalaria"},
"entityTypeSheep":function(d){return "ardia"},
"entityTypeZombie":function(d){return "zonbi"},
"eventTypeWhenAttacked":function(d){return "erasotua denean"},
"eventTypeWhenDay":function(d){return "eguna denean"},
"eventTypeWhenNight":function(d){return "gaua denean"},
"eventTypeWhenRun":function(d){return "martxan dagoenean"},
"eventTypeWhenSpawned":function(d){return "sortutakoan"},
"eventTypeWhenTouched":function(d){return "ukitua izatean"},
"eventTypeWhenUsed":function(d){return "erabilia izatean"},
"forever":function(d){return "betiko"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Ariketa honetan blokeak arrastatu eta kokatuz, Javascript izeneko konputagailu lengoaia batean agindu sekuentzia bat sortu duzu. Kode honek ordenagailuari esaten dio zer azaldu pantailan. Minecraften ikusi eta egiten duzun guztia honelako konputagailu kode batekin hasten da."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Aukeratu zure etxerako planoa."},
"houseSelectEasy":function(d){return "Erraza"},
"houseSelectHard":function(d){return "Zaila"},
"houseSelectLetsBuild":function(d){return "Eraiki dezagun etxe bat."},
"houseSelectMedium":function(d){return "Ertaina"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "bloke"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tresna"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Estali laba, gainetik pasatzeko. Orduan, erauzi beste aldean dauden burdin blokeetako bi."},
"level11FailureMessage":function(d){return "Ziurtatu galtzada-harriak zure aurretik jartzen dituzula, aurrean laba baldin badago. Horri esker, baliabide lerro hau erauzi ahal izango duzu."},
"level12FailureMessage":function(d){return "Ziurtatu harri gorrixkaren 3 bloke suntsitu dituzula. Horrekin, zure etxea eraikitzen ikasi duzuna konbinatu egiten da \"baldin\" aginduen erabilerarekin, laban erortzen saihesteko."},
"level13FailureMessage":function(d){return "Kokatu \"errail\" bat zure atetik mapako mugaraino doan lurrezko bidean."},
"level1FailureMessage":function(d){return "Aginduak erabili behar dituzu ardiarenganaino joateko."},
"level1TooFewBlocksMessage":function(d){return "Saiatu agindu gehiago erabiltzen ardiarenganaino iristeko."},
"level2FailureMessage":function(d){return "Zuhaitz bat botatzeko, joan bere enborreraino eta erabili \"txikitu blokea\" agindua."},
"level2TooFewBlocksMessage":function(d){return "Saiatu agindu gehiago erabiltzen zuhaitza botatzeko. Joan bere enborreraino eta erabili \"txikitu blokea\" agindua."},
"level3FailureMessage":function(d){return "Bi ardiengandik artilea biltzeko, joan bakoitzarenganaino eta erabili \"moztu\" agindua. Gogoratu biraketa aginduak erabili beharko dituzula ardienganaino iristeko."},
"level3TooFewBlocksMessage":function(d){return "Saiatu agindu gehiago erabiltzen artilea biltzeko bi ardiengandik. Joan bakoitzarenganaino eta erabili \"moztu\" agindua."},
"level4FailureMessage":function(d){return "\"txikitu blokea\" agindua erabili behar duzu hiru zuhaitzen enborretan."},
"level5FailureMessage":function(d){return "Kokatu zure blokeak lurrezko lerroan, horma bat eraikitzeko. \"errepikatu\" agindu arrosak egikarituko ditu bere barruan kokaturiko aginduak, \"kokatu blokea\" eta \"mugitu aurrera\" bezalakoak."},
"level6FailureMessage":function(d){return "Kokatu blokeak etxearen perimetroko lurrezko marran, ariketa amaitzeko."},
"level7FailureMessage":function(d){return "Erabili \"landatu\" agindua landareak kokatzeko ilundutako zoruko sail bakoitzean."},
"level8FailureMessage":function(d){return "Landare igokari bat ukitzen baduzu, lehertu egingo da. Saihestu itzazu eta sartu zure etxean."},
"level9FailureMessage":function(d){return "Ez ahaztu gutxienez 2 lastargi kokatzeaz zure bidea argitzeko ETA 2 ikatz erauzteaz."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "bloke"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "adreiluak"},
"miniBlockBucketLava":function(d){return "laba ontzia"},
"miniBlockBucketWater":function(d){return "ur ontzia"},
"miniBlockCarrots":function(d){return "azenaorioak"},
"miniBlockCoal":function(d){return "ikatza"},
"miniBlockCobblestone":function(d){return "galtzada-harri"},
"miniBlockDiamond":function(d){return "diamantea"},
"miniBlockDirt":function(d){return "lurra"},
"miniBlockDirtCoarse":function(d){return "lur zakarra"},
"miniBlockEgg":function(d){return "arrautza"},
"miniBlockEmerald":function(d){return "esmeralda"},
"miniBlockGravel":function(d){return "hartxintxar"},
"miniBlockGunPowder":function(d){return "polbora"},
"miniBlockIngotGold":function(d){return "urre lingotea"},
"miniBlockIngotIron":function(d){return "burdin totxoa"},
"miniBlockLapisLazuli":function(d){return "lapis azulia"},
"miniBlockLogAcacia":function(d){return "akazia egurra"},
"miniBlockLogBirch":function(d){return "urki egurra"},
"miniBlockLogJungle":function(d){return "oihaneko zuhaitzen egurra"},
"miniBlockLogOak":function(d){return "haritz egurra"},
"miniBlockLogSpruce":function(d){return "izei egurra"},
"miniBlockMilk":function(d){return "esnea"},
"miniBlockPlanksAcacia":function(d){return "akazia oholak"},
"miniBlockPlanksBirch":function(d){return "urki oholak"},
"miniBlockPlanksJungle":function(d){return "oihaneko zuhaitzen oholak"},
"miniBlockPlanksOak":function(d){return "haritz oholak"},
"miniBlockPlanksSpruce":function(d){return "izei oholak"},
"miniBlockPoppy":function(d){return "mitxoleta"},
"miniBlockPotato":function(d){return "patata"},
"miniBlockRedstoneDust":function(d){return "harri gorri hautsa"},
"miniBlockSand":function(d){return "hondarra"},
"miniBlockSandstone":function(d){return "hareharria"},
"miniBlockSheep":function(d){return "ardia"},
"miniBlockWheat":function(d){return "garia"},
"miniBlockWool":function(d){return "artile"},
"nextLevelMsg":function(d){return craft_locale.v(d,"puzzleNumber")+". ariketa osatuta. Zorionak!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Aukeratu zure pertsonaia."},
"playerSelectChooseSelectButton":function(d){return "Aukeratu"},
"playerSelectLetsGetStarted":function(d){return "Has gaitezen."},
"quantity":function(d){return "kopurua"},
"reinfFeedbackMsg":function(d){return "\"Jokatzen jarraitu\" sakatu dezakezu zure jokoan jokatzen jarraitzeko."},
"relative":function(d){return "erlatiboa"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Puntuaketa"},
"seconds":function(d){return "segundo"},
"selectChooseButton":function(d){return "Aukeratu"},
"soundTypeBump":function(d){return "txokea"},
"soundTypeChickenBawk":function(d){return "oilaskoaren kukurrukua"},
"soundTypeChickenHurt":function(d){return "oilaskoaren mina"},
"soundTypeCollectedBlock":function(d){return "bloke bilduma"},
"soundTypeCowHuff":function(d){return "behiaren arnasestua"},
"soundTypeCowHurt":function(d){return "behiaren mina"},
"soundTypeCowMoo":function(d){return "behiaren mua"},
"soundTypeCowMooLong":function(d){return "behiaren marru luzea"},
"soundTypeCreeperHiss":function(d){return "creeperren txistua"},
"soundTypeDig_wood1":function(d){return "egur puskatua"},
"soundTypeDoorOpen":function(d){return "ate irekia"},
"soundTypeExplode":function(d){return "eztandarazi"},
"soundTypeFailure":function(d){return "gainditu gabeko maila"},
"soundTypeFall":function(d){return "erorketa"},
"soundTypeFizz":function(d){return "irakinaldia"},
"soundTypeFuse":function(d){return "beruna"},
"soundTypeIronGolemHit":function(d){return "burdinazko golema jo"},
"soundTypeMetalWhack":function(d){return "metal kolpea"},
"soundTypeMinecart":function(d){return "bagoneta"},
"soundTypePlaceBlock":function(d){return "blokea jarri"},
"soundTypePunch":function(d){return "ukabilkada"},
"soundTypeSheepBaa":function(d){return "ardi beeka"},
"soundTypeStepFarmland":function(d){return "urratsa soroan"},
"soundTypeStepGrass":function(d){return "urratsa larrean"},
"soundTypeStepGravel":function(d){return "urratsa hartxintxarretan"},
"soundTypeStepStone":function(d){return "urratsa harrian"},
"soundTypeStepWood":function(d){return "urratsa egurrean"},
"soundTypeSuccess":function(d){return "maila gainditua"},
"soundTypeZombieBrains":function(d){return "zonbi intziria"},
"soundTypeZombieGroan":function(d){return "zonbi orroa"},
"soundTypeZombieHurt":function(d){return "zonbi mindua"},
"target":function(d){return "helburua"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "eguna"},
"timeLong":function(d){return "luzea"},
"timeMedium":function(d){return "ertaina"},
"timeNight":function(d){return "gaua"},
"timeRandom":function(d){return "ausazkoa"},
"timeSet":function(d){return "time set"},
"timeShort":function(d){return "motza"},
"timeVeryLong":function(d){return "oso luzea"},
"timeVeryShort":function(d){return "oso motza"},
"to":function(d){return "-ra"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return craft_locale.v(d,"puzzleNumber")+". ariketa amaituta. Zorionak! "+craft_locale.p(d,"numBlocks",0,"eu",{"one":"bloke batekin","other":craft_locale.n(d,"numBlocks")+" blokerekin"})+" ere osatu daiteke."},
"turnRandom":function(d){return "ausaz biratu"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "eguraldia"},
"weatherTypeClear":function(d){return "oskarbi"},
"weatherTypeRain":function(d){return "euria"},
"weatherTypeThunder":function(d){return "trumoia"}};