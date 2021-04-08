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
"agentGenericFailureMessage":function(d){return "Fortsett å kode! Husk å bruke agenten for hjelp."},
"agentTooFewBlocksFailureMessage":function(d){return "Prøv å legge til en blokk om gangen for å få agenten til riktig sted."},
"at":function(d){return "ved"},
"agentDiamondPathCongrats":function(d){return "Gratulerer, fant du diamantstien! Du har samlet "+craft_locale.p(d,"count",0,"no",{"one":"1 diamant","other":craft_locale.n(d,"count")+" diamanter"})+" så langt!"},
"blockActionAdd":function(d){return "legg til"},
"blockActionAttack":function(d){return "angrip"},
"blockActionClone":function(d){return "klone blokker"},
"blockActionCloneFiltered":function(d){return "klone bare"},
"blockActionCollect":function(d){return "samle"},
"blockActionCollectAll":function(d){return "samle alle"},
"blockActionDestroyEntity":function(d){return "forsvinne"},
"blockActionDetect":function(d){return "oppdag"},
"blockActionDetectRedstone":function(d){return "oppdag redstone"},
"blockActionDrop":function(d){return "slipp"},
"blockActionDropAll":function(d){return "slipp alle"},
"blockActionExecute":function(d){return "kjør kommando"},
"blockActionExplodeEntity":function(d){return "eksploder"},
"blockActionFill":function(d){return "fyll fra"},
"blockActionFlashEntity":function(d){return "blink"},
"blockActionGetItemCount":function(d){return "hent antall gjenstander"},
"blockActionGetItemCountInSlotNumber":function(d){return "hent gjenstand antall i spornummer"},
"blockActionGetItemDetail":function(d){return "hent gjenstand detalj"},
"blockActionGetItemDetailInSlotNumber":function(d){return "hent gjenstand detalj i spornummer"},
"blockActionGetItemSpace":function(d){return "hent gjenstand plass"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "hent gjenstand plass i spornummer"},
"blockActionGive":function(d){return "gi"},
"blockActionInspect":function(d){return "undersøk"},
"blockActionInspectData":function(d){return "undersøk data"},
"blockActionKill":function(d){return "drep mål"},
"blockActionMove":function(d){return "flytt"},
"blockActionMoveAway":function(d){return "gå bort fra"},
"blockActionMoveForward":function(d){return "gå fremover"},
"blockActionMoveRandom":function(d){return "gå tilfeldig"},
"blockActionMoveTo":function(d){return "gå til"},
"blockActionMoveToward":function(d){return "gå et skritt mot"},
"blockActionPlaySound":function(d){return "spill lyd"},
"blockActionRepeat":function(d){return "gjenta"},
"blockActionRepeatRandom":function(d){return "gjenta tilfeldig"},
"blockActionSetBlock":function(d){return "sett blokk til"},
"blockActionSpawn":function(d){return "sett ut"},
"blockActionSummon":function(d){return "tilkall"},
"blockActionTeleport":function(d){return "teleporter mål"},
"blockActionTeleportToPlayer":function(d){return "teleporter til spiller"},
"blockActionTestForBlock":function(d){return "test om blokktype"},
"blockActionTestForBlocks":function(d){return "test om mønsteret mellom"},
"blockActionToScore":function(d){return "til poengsum"},
"blockActionTransfer":function(d){return "overfør"},
"blockActionWait":function(d){return "vent"},
"blockActionWith":function(d){return "med"},
"blockData":function(d){return "blokk data"},
"blockDestroyBlock":function(d){return "ødelegg blokk"},
"blockIf":function(d){return "hvis"},
"blockIfLavaAhead":function(d){return "hvis lava foran"},
"blockIs":function(d){return "er"},
"blockMove":function(d){return "flytt"},
"blockMoveBackward":function(d){return "gå bakover"},
"blockMoveForward":function(d){return "gå fremover"},
"blockPlace":function(d){return "plasser"},
"blockPlaceTorch":function(d){return "plasser fakkel"},
"blockPlaceXAheadAhead":function(d){return "foran"},
"blockPlaceXAheadPlace":function(d){return "plasser"},
"blockPlaceXPlace":function(d){return "plasser"},
"blockPlantCrop":function(d){return "plant avling"},
"blockShear":function(d){return "klipp"},
"blockTill":function(d){return "til"},
"blockTillSoil":function(d){return "kultiver jord"},
"blockTurn":function(d){return "snu"},
"blockTurnLeft":function(d){return "snu mot venstre"},
"blockTurnRight":function(d){return "snu mot høyre"},
"blockType":function(d){return "blokk type"},
"blockTypeBedrock":function(d){return "grunnfjell"},
"blockTypeBricks":function(d){return "teglsteiner"},
"blockTypeClay":function(d){return "leire"},
"blockTypeClayHardened":function(d){return "herdet leire"},
"blockTypeCobblestone":function(d){return "brostein"},
"blockTypeDirt":function(d){return "jord"},
"blockTypeDirtCoarse":function(d){return "grov jord"},
"blockTypeDoorIron":function(d){return "jerndør"},
"blockTypeEmpty":function(d){return "tom"},
"blockTypeFarmlandWet":function(d){return "dyrkbar jord"},
"blockTypeGlass":function(d){return "glas"},
"blockTypeGlowstone":function(d){return "glødestein"},
"blockTypeGrass":function(d){return "gress"},
"blockTypeGravel":function(d){return "grus"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "akasiekubbe"},
"blockTypeLogBirch":function(d){return "bjørkekubbe"},
"blockTypeLogJungle":function(d){return "jungeltrekubbe"},
"blockTypeLogOak":function(d){return "eikekubbe"},
"blockTypeLogSpruce":function(d){return "grankubbe"},
"blockTypeOreCoal":function(d){return "kullmalm"},
"blockTypeOreDiamond":function(d){return "diamantmalm"},
"blockTypeOreEmerald":function(d){return "smaragdmalm"},
"blockTypeOreGold":function(d){return "gullmalm"},
"blockTypeOreIron":function(d){return "jernmalm"},
"blockTypeOreLapis":function(d){return "lasurmalm"},
"blockTypeOreRedstone":function(d){return "redstone-malm"},
"blockTypePlanksAcacia":function(d){return "akasieplanker"},
"blockTypePlanksBirch":function(d){return "bjørkeplanker"},
"blockTypePlanksJungle":function(d){return "jungeltreplanker"},
"blockTypePlanksOak":function(d){return "eikeplanker"},
"blockTypePlanksSpruce":function(d){return "granplanker"},
"blockTypePressurePlateUp":function(d){return "trykkplate"},
"blockTypeRail":function(d){return "skinne"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone fakkel"},
"blockTypeRedstoneWire":function(d){return "redstone tråd"},
"blockTypeSand":function(d){return "sand"},
"blockTypeSandstone":function(d){return "sandstein"},
"blockTypeStone":function(d){return "stein"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "tre"},
"blockTypeWater":function(d){return "vann"},
"blockTypeWool":function(d){return "ull"},
"blockTypeWoolBlue":function(d){return "blå ull"},
"blockTypeWoolMagenta":function(d){return "magenta ull"},
"blockTypeWoolOrange":function(d){return "oransje ull"},
"blockTypeWoolPink":function(d){return "rosa ull"},
"blockTypeWoolRed":function(d){return "rød ull"},
"blockTypeWoolYellow":function(d){return "gul ull"},
"blockWhileXAheadAhead":function(d){return "foran"},
"blockWhileXAheadDo":function(d){return "gjør"},
"blockWhileXAheadWhile":function(d){return "gjenta hvis"},
"cancel":function(d){return "Avbryt"},
"cloneMode":function(d){return "klone modus"},
"cloneModeForce":function(d){return "tving"},
"cloneModeMove":function(d){return "flytt"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "For å kjøre dette prosjektet i Minecraft: Education Edition bruk Code Connection-applikasjonen."},
"destination":function(d){return "mål"},
"directionBack":function(d){return "tilbake"},
"directionDown":function(d){return "ned"},
"directionForward":function(d){return "forover"},
"directionLeft":function(d){return "venstre"},
"directionMiddle":function(d){return "midten"},
"directionRight":function(d){return "høyre"},
"directionUp":function(d){return "opp"},
"downloadButton":function(d){return "Last ned"},
"entityType":function(d){return "figur type"},
"entityTypeChicken":function(d){return "kylling"},
"entityTypeCow":function(d){return "ku"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "jerngolem"},
"entityTypePlayer":function(d){return "spiller"},
"entityTypeSheep":function(d){return "sau"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "når angrepet"},
"eventTypeWhenDay":function(d){return "når dag"},
"eventTypeWhenNight":function(d){return "når natt"},
"eventTypeWhenRun":function(d){return "når den kjører"},
"eventTypeWhenSpawned":function(d){return "når satt ut"},
"eventTypeWhenTouched":function(d){return "når tatt på"},
"eventTypeWhenUsed":function(d){return "når brukt"},
"forever":function(d){return "for alltid"},
"from":function(d){return "fra"},
"generatedCodeDescription":function(d){return "Ved å dra og plassere blokker i denne oppgaven har du skapt instruksjoner i programmeringsspråket Javascript. Denne programmeringskoden forteller datamaskiner hva de skal vise på skjermen. Alt du ser og gjør i Minecraft, begynner også med kodelinjer som dette."},
"getdataof":function(d){return "hent data fra"},
"getnameof":function(d){return "hent navn på"},
"houseSelectChooseFloorPlan":function(d){return "Velg planløsning for huset ditt."},
"houseSelectEasy":function(d){return "Lett"},
"houseSelectHard":function(d){return "Vanskelig"},
"houseSelectLetsBuild":function(d){return "La oss bygge et hus."},
"houseSelectMedium":function(d){return "Middels"},
"import":function(d){return "Importer"},
"importShareLinkBody":function(d){return "Skriv inn lenken til Kodetimen her og trykk \"Importer\" for å kopiere koden din inn i Minecraft"},
"importShareLinkHeader":function(d){return "Importer en lenke"},
"inSlotNumber":function(d){return "i spor nummer"},
"itemTypeBlock":function(d){return "blokk"},
"itemTypeDecoration":function(d){return "pynt"},
"itemTypeMiscellaneous":function(d){return "forskjellig"},
"itemTypeTool":function(d){return "verktøy"},
"items":function(d){return "gjenstand(er)"},
"itemsOfBlockType":function(d){return "gjenstand(er) av blokk type"},
"level10FailureMessage":function(d){return "Dekk til lavaen for å komme deg over den. Så utvinner du to av jernblokkene på den andre siden."},
"level11FailureMessage":function(d){return "Husk å plassere brostein foran deg hvis det er lava der. Da kan du trygt utvinne denne raden med ressurser."},
"level12FailureMessage":function(d){return "Du må utvinne 3 redstone-blokker. Dette utgjør en kombinasjon av det du lærte da du bygde huset, og bruk av \"hvis\"-kommandoer for å ikke falle ned i lavaen."},
"level13FailureMessage":function(d){return "Plasser \"skinne\" langs jordstien som går fra huset ditt til enden av kartet."},
"level1FailureMessage":function(d){return "Du må bruke kommandoer for å gå bort til sauen."},
"level1TooFewBlocksMessage":function(d){return "Prøv å bruke flere kommandoer for å gå bort til sauen."},
"level2FailureMessage":function(d){return "For å hugge ned et tre går du bort til stammen og bruker kommandoen \"ødelegg blokk\"."},
"level2TooFewBlocksMessage":function(d){return "Prøv å bruke flere kommandoer for å hugge ned treet. Gå til stammen og bruk kommandoen \"ødelegg blokk\"."},
"level3FailureMessage":function(d){return "For å samle ull fra begge sauene går du til hver av dem og bruker kommandoen \"klipp\". Husk å bruke snu-kommandoer for å komme deg til sauen."},
"level3TooFewBlocksMessage":function(d){return "Prøv å bruke flere kommandoer for å samle ull fra begge sauene. Gå til hver av dem og bruk kommandoen \"klipp\"."},
"level4FailureMessage":function(d){return "Du må bruke kommandoen \"ødelegg blokk\" på hver av de tre trestammene."},
"level5FailureMessage":function(d){return "Plasser blokkene på jordomrisset for å bygge en vegg. Den rosa \"gjenta\"-kommandoen utfører kommandoer som er plassert inni den, slik som \"plasser blokk\" og \"flytt fremover\"."},
"level6FailureMessage":function(d){return "Plasser blokker på husets jordomriss for å fullføre oppgaven."},
"level7FailureMessage":function(d){return "Bruk kommandoen \"plant\" for å plassere avlinger på hver lapp med mørk, kultivert jord."},
"level8FailureMessage":function(d){return "Creepere eksploderer hvis du kommer borti dem. Snik deg rundt dem og gå inn i huset."},
"level9FailureMessage":function(d){return "Ikke glem å plassere minst 2 fakler til å lyse opp, OG utvinne minst to kull."},
"maskMode":function(d){return "maskeringsmodus"},
"maskModeMasked":function(d){return "maskert"},
"maskModeReplace":function(d){return "erstatt"},
"minecraftBlock":function(d){return "blokk"},
"minecraftNotConnected":function(d){return "Minecraft ikke tilkoblet"},
"miniBlockBricks":function(d){return "teglsteiner"},
"miniBlockBucketLava":function(d){return "lavabøtte"},
"miniBlockBucketWater":function(d){return "vannbøtte"},
"miniBlockCarrots":function(d){return "gulrøtter"},
"miniBlockCoal":function(d){return "kull"},
"miniBlockCobblestone":function(d){return "brostein"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "jord"},
"miniBlockDirtCoarse":function(d){return "grov jord"},
"miniBlockEgg":function(d){return "egg"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "grus"},
"miniBlockGunPowder":function(d){return "krutt"},
"miniBlockIngotGold":function(d){return "gullblokk"},
"miniBlockIngotIron":function(d){return "jernblokk"},
"miniBlockLapisLazuli":function(d){return "lasurstein"},
"miniBlockLogAcacia":function(d){return "akasiekubbe"},
"miniBlockLogBirch":function(d){return "bjørkekubbe"},
"miniBlockLogJungle":function(d){return "jungeltrekubbe"},
"miniBlockLogOak":function(d){return "eikekubbe"},
"miniBlockLogSpruce":function(d){return "grankubbe"},
"miniBlockMilk":function(d){return "melk"},
"miniBlockPlanksAcacia":function(d){return "akasieplanker"},
"miniBlockPlanksBirch":function(d){return "bjørkeplanker"},
"miniBlockPlanksJungle":function(d){return "jungeltreplanker"},
"miniBlockPlanksOak":function(d){return "eikeplanker"},
"miniBlockPlanksSpruce":function(d){return "granplanker"},
"miniBlockPoppy":function(d){return "blomst"},
"miniBlockPotato":function(d){return "potet"},
"miniBlockRedstoneDust":function(d){return "redstone støv"},
"miniBlockSand":function(d){return "sand"},
"miniBlockSandstone":function(d){return "sandstein"},
"miniBlockSheep":function(d){return "sau"},
"miniBlockWheat":function(d){return "hvete"},
"miniBlockWool":function(d){return "ull"},
"nextLevelMsg":function(d){return "Oppgave "+craft_locale.v(d,"puzzleNumber")+" er fullført. Gratulerer!"},
"oldBlockHandling":function(d){return "gammel blokk ved"},
"oldBlockHandlingsDestroy":function(d){return "ødelegg"},
"oldBlockHandlingsKeep":function(d){return "behold"},
"oldBlockHandlingsReplace":function(d){return "erstatt"},
"onBehalfOf":function(d){return "på vegne av"},
"playerSelectChooseCharacter":function(d){return "Velg en figur."},
"playerSelectChooseSelectButton":function(d){return "Velg"},
"playerSelectLetsGetStarted":function(d){return "La oss komme i gang."},
"quantity":function(d){return "antall"},
"reinfFeedbackMsg":function(d){return "Du kan trykke \"Fortsett å spille\" for å fortsette med spillet ditt."},
"relative":function(d){return "relativ"},
"runAgent":function(d){return "Kjør agenten"},
"score":function(d){return "Poengsum"},
"seconds":function(d){return "sekund(er)"},
"selectChooseButton":function(d){return "Velg"},
"soundTypeBump":function(d){return "dunk"},
"soundTypeChickenBawk":function(d){return "kylling klukk"},
"soundTypeChickenHurt":function(d){return "kylling skadd"},
"soundTypeCollectedBlock":function(d){return "blokk samlet"},
"soundTypeCowHuff":function(d){return "ku pust"},
"soundTypeCowHurt":function(d){return "ku skadd"},
"soundTypeCowMoo":function(d){return "ku møø"},
"soundTypeCowMooLong":function(d){return "ku møøø"},
"soundTypeCreeperHiss":function(d){return "creeper-fres"},
"soundTypeDig_wood1":function(d){return "treverk knus"},
"soundTypeDoorOpen":function(d){return "dør åpne"},
"soundTypeExplode":function(d){return "eksploder"},
"soundTypeFailure":function(d){return "nivå mislykket"},
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
"soundTypeStepGrass":function(d){return "skritt gress"},
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
"timeSet":function(d){return "sett tid til"},
"timeShort":function(d){return "kort"},
"timeVeryLong":function(d){return "svært lang"},
"timeVeryShort":function(d){return "svært kort"},
"to":function(d){return "til"},
"toSlotNumber":function(d){return "til spornummer"},
"tooManyBlocksFail":function(d){return "Oppgave "+craft_locale.v(d,"puzzleNumber")+" fullført. Gratulerer! Du er også mulig å fullføre oppgaven med "+craft_locale.p(d,"numBlocks",0,"no",{"one":"1 blokk","other":craft_locale.n(d,"numBlocks")+" blokker"})+"."},
"turnRandom":function(d){return "snu tilfeldig"},
"useArrowKeys":function(d){return "Du trenger ikke legge til noen blokker! Flytt ved å bruke piltastene og press mellomrom eller trykk på spillbrettet for å bruke gjenstander."},
"weather":function(d){return "vær"},
"weatherTypeClear":function(d){return "tøm"},
"weatherTypeRain":function(d){return "regn"},
"weatherTypeThunder":function(d){return "torden"}};