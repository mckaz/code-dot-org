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
"absolute":function(d){return "absoluttverdi"},
"agentGenericFailureMessage":function(d){return "Hald fram å kode! Hugs å bruke agenten for hjelp."},
"agentTooFewBlocksFailureMessage":function(d){return "Prøv å leggje til ein blokk om gongen for å få agenten til riktig stad."},
"at":function(d){return "på"},
"agentDiamondPathCongrats":function(d){return "Gratulerer, du har funne diamantstien! Du har samla "+craft_locale.p(d,"count",0,"en",{"one":"1 diamant","other":craft_locale.n(d,"count")+" diamantar"})+" så langt."},
"blockActionAdd":function(d){return "legg til"},
"blockActionAttack":function(d){return "angrip"},
"blockActionClone":function(d){return "klon blokker"},
"blockActionCloneFiltered":function(d){return "klon berre"},
"blockActionCollect":function(d){return "samle"},
"blockActionCollectAll":function(d){return "samle alle"},
"blockActionDestroyEntity":function(d){return "forsvinne"},
"blockActionDetect":function(d){return "oppdag"},
"blockActionDetectRedstone":function(d){return "oppdag redstone"},
"blockActionDrop":function(d){return "slepp"},
"blockActionDropAll":function(d){return "slepp alle"},
"blockActionExecute":function(d){return "kjøyr kommando"},
"blockActionExplodeEntity":function(d){return "eksploder"},
"blockActionFill":function(d){return "fyll frå"},
"blockActionFlashEntity":function(d){return "blink"},
"blockActionGetItemCount":function(d){return "tal på blokker"},
"blockActionGetItemCountInSlotNumber":function(d){return "tal på blokker i spor nummer"},
"blockActionGetItemDetail":function(d){return "få blokkinfo"},
"blockActionGetItemDetailInSlotNumber":function(d){return "få blokkinfo frå spor nummer"},
"blockActionGetItemSpace":function(d){return "få blokkplass"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "få blokkplass i spor nummer"},
"blockActionGive":function(d){return "gi"},
"blockActionInspect":function(d){return "undersøk"},
"blockActionInspectData":function(d){return "undersøk data"},
"blockActionKill":function(d){return "drep målet"},
"blockActionMove":function(d){return "flytt"},
"blockActionMoveAway":function(d){return "gå vekk frå"},
"blockActionMoveForward":function(d){return "gå framover"},
"blockActionMoveRandom":function(d){return "gå tilfeldig"},
"blockActionMoveTo":function(d){return "gå til"},
"blockActionMoveToward":function(d){return "gå eit skritt mot"},
"blockActionPlaySound":function(d){return "spel lyd"},
"blockActionRepeat":function(d){return "gjenta"},
"blockActionRepeatRandom":function(d){return "gjenta tilfeldig"},
"blockActionSetBlock":function(d){return "sett blokk til"},
"blockActionSpawn":function(d){return "sett ut"},
"blockActionSummon":function(d){return "tilkall"},
"blockActionTeleport":function(d){return "teleport mål"},
"blockActionTeleportToPlayer":function(d){return "teleport til spelar"},
"blockActionTestForBlock":function(d){return "testar om blokktype"},
"blockActionTestForBlocks":function(d){return "test om mønsteret mellom"},
"blockActionToScore":function(d){return "til poengsum"},
"blockActionTransfer":function(d){return "overføring"},
"blockActionWait":function(d){return "vent"},
"blockActionWith":function(d){return "med"},
"blockData":function(d){return "blokkdata"},
"blockDestroyBlock":function(d){return "øydelegg blokk"},
"blockIf":function(d){return "viss"},
"blockIfLavaAhead":function(d){return "viss lava foran"},
"blockIs":function(d){return "er"},
"blockMove":function(d){return "flytt"},
"blockMoveBackward":function(d){return "flytt bakover"},
"blockMoveForward":function(d){return "gå framover"},
"blockPlace":function(d){return "plasser"},
"blockPlaceTorch":function(d){return "plasser fakkel"},
"blockPlaceXAheadAhead":function(d){return "foran"},
"blockPlaceXAheadPlace":function(d){return "plasser"},
"blockPlaceXPlace":function(d){return "plasser"},
"blockPlantCrop":function(d){return "plant avling"},
"blockShear":function(d){return "klipp"},
"blockTill":function(d){return "til"},
"blockTillSoil":function(d){return "pløy åker"},
"blockTurn":function(d){return "snu"},
"blockTurnLeft":function(d){return "snu mot venstre"},
"blockTurnRight":function(d){return "snu mot høgre"},
"blockType":function(d){return "blokktype"},
"blockTypeBedrock":function(d){return "grunnfjell"},
"blockTypeBricks":function(d){return "murstein"},
"blockTypeClay":function(d){return "leire"},
"blockTypeClayHardened":function(d){return "herda leire"},
"blockTypeCobblestone":function(d){return "brustein"},
"blockTypeDirt":function(d){return "jord"},
"blockTypeDirtCoarse":function(d){return "grov jord"},
"blockTypeDoorIron":function(d){return "jerndør"},
"blockTypeEmpty":function(d){return "tom"},
"blockTypeFarmlandWet":function(d){return "åker"},
"blockTypeGlass":function(d){return "glas"},
"blockTypeGlowstone":function(d){return "glødestein"},
"blockTypeGrass":function(d){return "gras"},
"blockTypeGravel":function(d){return "grus"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "akasiekubbe"},
"blockTypeLogBirch":function(d){return "bjørkekubbe"},
"blockTypeLogJungle":function(d){return "jungelkubbe"},
"blockTypeLogOak":function(d){return "eikekubbe"},
"blockTypeLogSpruce":function(d){return "grankubbe"},
"blockTypeOreCoal":function(d){return "kolåre"},
"blockTypeOreDiamond":function(d){return "diamantåre"},
"blockTypeOreEmerald":function(d){return "smaragdåre"},
"blockTypeOreGold":function(d){return "gullåre"},
"blockTypeOreIron":function(d){return "jernåre"},
"blockTypeOreLapis":function(d){return "lapisåre"},
"blockTypeOreRedstone":function(d){return "redstoneåre"},
"blockTypePlanksAcacia":function(d){return "akasieplanker"},
"blockTypePlanksBirch":function(d){return "bjørkeplanker"},
"blockTypePlanksJungle":function(d){return "jungelplanker"},
"blockTypePlanksOak":function(d){return "eikeplanker"},
"blockTypePlanksSpruce":function(d){return "granplanker"},
"blockTypePressurePlateUp":function(d){return "trykkplate"},
"blockTypeRail":function(d){return "spor"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone fakkel"},
"blockTypeRedstoneWire":function(d){return "redstone tråd"},
"blockTypeSand":function(d){return "sand"},
"blockTypeSandstone":function(d){return "sandstein"},
"blockTypeStone":function(d){return "stein"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "tre"},
"blockTypeWater":function(d){return "vatn"},
"blockTypeWool":function(d){return "ull"},
"blockTypeWoolBlue":function(d){return "blå ull"},
"blockTypeWoolMagenta":function(d){return "lilla ull"},
"blockTypeWoolOrange":function(d){return "oransje ull"},
"blockTypeWoolPink":function(d){return "rosa ull"},
"blockTypeWoolRed":function(d){return "rød ull"},
"blockTypeWoolYellow":function(d){return "gul ull"},
"blockWhileXAheadAhead":function(d){return "foran"},
"blockWhileXAheadDo":function(d){return "gjer"},
"blockWhileXAheadWhile":function(d){return "så lenge"},
"cancel":function(d){return "Avbryt"},
"cloneMode":function(d){return "klonemodus"},
"cloneModeForce":function(d){return "tvinge"},
"cloneModeMove":function(d){return "flytt"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "For å kjøyre dette prosjektet i Minecraft: Education Edition, bruk Code Connection-appen."},
"destination":function(d){return "mål"},
"directionBack":function(d){return "tilbake"},
"directionDown":function(d){return "ned"},
"directionForward":function(d){return "fram"},
"directionLeft":function(d){return "venstre"},
"directionMiddle":function(d){return "midten"},
"directionRight":function(d){return "høgre"},
"directionUp":function(d){return "opp"},
"downloadButton":function(d){return "Last ned"},
"entityType":function(d){return "figurtype"},
"entityTypeChicken":function(d){return "kylling"},
"entityTypeCow":function(d){return "ku"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "jerngolem"},
"entityTypePlayer":function(d){return "spelar"},
"entityTypeSheep":function(d){return "sau"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "når angripen"},
"eventTypeWhenDay":function(d){return "når dag"},
"eventTypeWhenNight":function(d){return "når natt"},
"eventTypeWhenRun":function(d){return "når den køyrer"},
"eventTypeWhenSpawned":function(d){return "når sett ut"},
"eventTypeWhenTouched":function(d){return "når teken på"},
"eventTypeWhenUsed":function(d){return "når brukt"},
"forever":function(d){return "for alltid"},
"from":function(d){return "frå"},
"generatedCodeDescription":function(d){return "Ved å dra og plassere blokker i denne oppgåva, har du òg laga eit sett med instruksjonar i et programmeringsspråk som heiter Javascript. Koden fortel datamaskina kva han skal vise på skjermen. Alt du ser og gjer i Minecraft startar og med slik kode."},
"getdataof":function(d){return "få data om"},
"getnameof":function(d){return "få namn på"},
"houseSelectChooseFloorPlan":function(d){return "Velg plantegninen for huset ditt."},
"houseSelectEasy":function(d){return "Enkel"},
"houseSelectHard":function(d){return "Vanskelig"},
"houseSelectLetsBuild":function(d){return "La oss bygge eit hus."},
"houseSelectMedium":function(d){return "Middels"},
"import":function(d){return "Importér"},
"importShareLinkBody":function(d){return "Skriv inn lenka til Kodetimen og klikk \"Importér\" for å kopiere koden din til Minecraft"},
"importShareLinkHeader":function(d){return "Importér ei lenke"},
"inSlotNumber":function(d){return "i spor nummer"},
"itemTypeBlock":function(d){return "blokk"},
"itemTypeDecoration":function(d){return "pynt"},
"itemTypeMiscellaneous":function(d){return "forskjellig"},
"itemTypeTool":function(d){return "verktøy"},
"items":function(d){return "element"},
"itemsOfBlockType":function(d){return "element av blokktype"},
"level10FailureMessage":function(d){return "Dekk til lavaen og gå over slik at du kan utvinne jern frå to blokker på den andre sida."},
"level11FailureMessage":function(d){return "Pass på å plassere brustein foran deg om det er lava der. Da kan du trygt grave ut denne raden med ressursar."},
"level12FailureMessage":function(d){return "Pass på at du utvinn tre redstone-blokker. Kombiner kva du lærte når du bygde huset ditt med \"viss\"-tester for å unngå å falle i lavaen."},
"level13FailureMessage":function(d){return "Plasser skinner langs stien frå døra din og heilt ut til kanten!"},
"level1FailureMessage":function(d){return "Bruk kommandoar for å gå til sauen."},
"level1TooFewBlocksMessage":function(d){return "Prøv å bruke fleire kommandoar for å gå til sauen!"},
"level2FailureMessage":function(d){return "For å kutte ned eit tre, må du gå til stammen og bruke \"øydelegg blokk\"-kommandoen."},
"level2TooFewBlocksMessage":function(d){return "Prøv å bruke fleire kommandoar for å hugge ned treet! Gå til stammen og bruk \"øydeleg blokk\"-kommandoen."},
"level3FailureMessage":function(d){return "For å samle ull frå begge sauene, må du gå til begge og bruke \"klipp\"-kommandoen. Husk å bruke \"snu\"-kommandoar for å kome fram til sauene!"},
"level3TooFewBlocksMessage":function(d){return "Prøv å bruke fleire kommandoar for å samle ull frå begge sauane! Gå til ein og ein og bruk \"klipp\"-kommandoen!"},
"level4FailureMessage":function(d){return "Du må bruke \"øydeleg blokk\"-kommandoen på alle tre trestammane."},
"level5FailureMessage":function(d){return "Plasser blokkene dine på omrisset på bakken for å byggje ein vegg! Den rosa \"gjenta\"-kommandoen vil repetere kommandoane som står inne i den. Slike som \"plasser blokk\" og \"gå framover\"."},
"level6FailureMessage":function(d){return "Plasser blokker på omrisset av huset for å fullføre oppgåva!"},
"level7FailureMessage":function(d){return "Bruk kommandoen \"plant avling\" for å plante på kvart felt med mørk, pløyd jord."},
"level8FailureMessage":function(d){return "Dersom du kjem borti ein Creeper, vil den eksplodere. Snik deg rundt dei og gå inn i huset ditt!"},
"level9FailureMessage":function(d){return "Gløym ikkje å plassere minst to faklar for å lyse opp vegen din, og du må utvinne minst to kol for å fullføre dette nivået."},
"maskMode":function(d){return "maskemodus"},
"maskModeMasked":function(d){return "maskert"},
"maskModeReplace":function(d){return "bytt ut"},
"minecraftBlock":function(d){return "blokk"},
"minecraftNotConnected":function(d){return "Minecraft er ikkje tilkobla"},
"miniBlockBricks":function(d){return "murstein"},
"miniBlockBucketLava":function(d){return "lavabøtte"},
"miniBlockBucketWater":function(d){return "vassbøtte"},
"miniBlockCarrots":function(d){return "gulrøter"},
"miniBlockCoal":function(d){return "kol"},
"miniBlockCobblestone":function(d){return "brustein"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "jord"},
"miniBlockDirtCoarse":function(d){return "grov jord"},
"miniBlockEgg":function(d){return "egg"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "grus"},
"miniBlockGunPowder":function(d){return "krut"},
"miniBlockIngotGold":function(d){return "gullbarre"},
"miniBlockIngotIron":function(d){return "jernbarre"},
"miniBlockLapisLazuli":function(d){return "lasurstein"},
"miniBlockLogAcacia":function(d){return "akasiekubbe"},
"miniBlockLogBirch":function(d){return "bjørkekubbe"},
"miniBlockLogJungle":function(d){return "jungelkubbe"},
"miniBlockLogOak":function(d){return "eikekubbe"},
"miniBlockLogSpruce":function(d){return "grankubbe"},
"miniBlockMilk":function(d){return "mjølk"},
"miniBlockPlanksAcacia":function(d){return "akasieplanker"},
"miniBlockPlanksBirch":function(d){return "bjørkeplanker"},
"miniBlockPlanksJungle":function(d){return "jungelplanker"},
"miniBlockPlanksOak":function(d){return "eikeplanker"},
"miniBlockPlanksSpruce":function(d){return "granplanker"},
"miniBlockPoppy":function(d){return "blome"},
"miniBlockPotato":function(d){return "potet"},
"miniBlockRedstoneDust":function(d){return "redstone støv"},
"miniBlockSand":function(d){return "sand"},
"miniBlockSandstone":function(d){return "sandstein"},
"miniBlockSheep":function(d){return "sau"},
"miniBlockWheat":function(d){return "kveite"},
"miniBlockWool":function(d){return "ull"},
"nextLevelMsg":function(d){return "Oppgåve "+craft_locale.v(d,"puzzleNumber")+" er fullført. Gratulerer!"},
"oldBlockHandling":function(d){return "gamle blokka på"},
"oldBlockHandlingsDestroy":function(d){return "øydelegg"},
"oldBlockHandlingsKeep":function(d){return "behald"},
"oldBlockHandlingsReplace":function(d){return "bytt ut"},
"onBehalfOf":function(d){return "på vegne av"},
"playerSelectChooseCharacter":function(d){return "Vel ein avatar!"},
"playerSelectChooseSelectButton":function(d){return "Vel"},
"playerSelectLetsGetStarted":function(d){return "Lat oss begynne."},
"quantity":function(d){return "antall"},
"reinfFeedbackMsg":function(d){return "Du kan trykke \"Fortsett å spele\" for å gå tilbake til spelet ditt."},
"relative":function(d){return "relativ"},
"runAgent":function(d){return "Køyr agenten"},
"score":function(d){return "Poengsum"},
"seconds":function(d){return "sekund"},
"selectChooseButton":function(d){return "Vel"},
"soundTypeBump":function(d){return "dunk"},
"soundTypeChickenBawk":function(d){return "kyllingklukk"},
"soundTypeChickenHurt":function(d){return "kylling skadd"},
"soundTypeCollectedBlock":function(d){return "blokk samla"},
"soundTypeCowHuff":function(d){return "ku pust"},
"soundTypeCowHurt":function(d){return "ku skadd"},
"soundTypeCowMoo":function(d){return "ku møø"},
"soundTypeCowMooLong":function(d){return "ku møøø"},
"soundTypeCreeperHiss":function(d){return "creeper-fres"},
"soundTypeDig_wood1":function(d){return "treverk knus"},
"soundTypeDoorOpen":function(d){return "dør opne"},
"soundTypeExplode":function(d){return "eksploder"},
"soundTypeFailure":function(d){return "nivå mislykka"},
"soundTypeFall":function(d){return "fall"},
"soundTypeFizz":function(d){return "frese"},
"soundTypeFuse":function(d){return "lunte"},
"soundTypeIronGolemHit":function(d){return "jerngolem treff"},
"soundTypeMetalWhack":function(d){return "metall klunk"},
"soundTypeMinecart":function(d){return "gruvevogn"},
"soundTypePlaceBlock":function(d){return "blokk plasser"},
"soundTypePunch":function(d){return "slå"},
"soundTypeSheepBaa":function(d){return "sau bææ"},
"soundTypeStepFarmland":function(d){return "skritt åker"},
"soundTypeStepGrass":function(d){return "skritt gras"},
"soundTypeStepGravel":function(d){return "skritt grus"},
"soundTypeStepStone":function(d){return "skritt stein"},
"soundTypeStepWood":function(d){return "skritt treverk"},
"soundTypeSuccess":function(d){return "nivå suksess"},
"soundTypeZombieBrains":function(d){return "zombie stønn"},
"soundTypeZombieGroan":function(d){return "zombie knurr"},
"soundTypeZombieHurt":function(d){return "zombie skadd"},
"target":function(d){return "mål"},
"testModeAll":function(d){return "alle"},
"testModeMasked":function(d){return "maskert"},
"tileData":function(d){return "flisdata"},
"timeDay":function(d){return "dag"},
"timeLong":function(d){return "lang"},
"timeMedium":function(d){return "middels"},
"timeNight":function(d){return "natt"},
"timeRandom":function(d){return "tilfeldig"},
"timeSet":function(d){return "still klokka til"},
"timeShort":function(d){return "kort"},
"timeVeryLong":function(d){return "veldig lang"},
"timeVeryShort":function(d){return "veldig kort"},
"to":function(d){return "til"},
"toSlotNumber":function(d){return "til spor nummer"},
"tooManyBlocksFail":function(d){return "Oppgåve "+craft_locale.v(d,"puzzleNumber")+" er fullført. Gratulerer! Det er og mulig å fullføre den med "+craft_locale.p(d,"numBlocks",0,"en",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "snu tilfeldig"},
"useArrowKeys":function(d){return "Du treng ikkje legge til blokker! Flytt med pilane, og trykk mellomrom eller trykk på spelebrettet for å bruke ting."},
"weather":function(d){return "vær"},
"weatherTypeClear":function(d){return "tøm"},
"weatherTypeRain":function(d){return "regn"},
"weatherTypeThunder":function(d){return "torden"}};