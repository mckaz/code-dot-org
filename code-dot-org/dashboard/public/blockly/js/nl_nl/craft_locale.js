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
"absolute":function(d){return "absoluut"},
"agentGenericFailureMessage":function(d){return "Blijf programmeren! Je kunt de agent altijd om hulp vragen."},
"agentTooFewBlocksFailureMessage":function(d){return "Probeer per keer maar één blok toe te voegen om de agent naar de juiste plek te leiden."},
"at":function(d){return "bij"},
"agentDiamondPathCongrats":function(d){return "Gefeliciteerd, je hebt het diamanten pad gevonden! Je hebt tot nu toe "+craft_locale.p(d,"count",0,"nl",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" gevonden!"},
"blockActionAdd":function(d){return "toevoegen"},
"blockActionAttack":function(d){return "aanval"},
"blockActionClone":function(d){return "blokken klonen"},
"blockActionCloneFiltered":function(d){return "alleen sluiten"},
"blockActionCollect":function(d){return "verzamel"},
"blockActionCollectAll":function(d){return "alles verzamelen"},
"blockActionDestroyEntity":function(d){return "verdwijnen"},
"blockActionDetect":function(d){return "detecteren"},
"blockActionDetectRedstone":function(d){return "redstone detecteren"},
"blockActionDrop":function(d){return "laten vallen"},
"blockActionDropAll":function(d){return "alles laten vallen"},
"blockActionExecute":function(d){return "opdracht uitvoeren"},
"blockActionExplodeEntity":function(d){return "ontploffen"},
"blockActionFill":function(d){return "vullen van"},
"blockActionFlashEntity":function(d){return "flits"},
"blockActionGetItemCount":function(d){return "aantal voorwerpen ophalen"},
"blockActionGetItemCountInSlotNumber":function(d){return "geef aantal items in vak nummer"},
"blockActionGetItemDetail":function(d){return "voorwerpgegevens ophalen"},
"blockActionGetItemDetailInSlotNumber":function(d){return "geef item details in vak nummer"},
"blockActionGetItemSpace":function(d){return "geef item dimensies"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "geef item dimensies in vak nummer"},
"blockActionGive":function(d){return "geef"},
"blockActionInspect":function(d){return "inspecteren"},
"blockActionInspectData":function(d){return "gegevens inspecteren"},
"blockActionKill":function(d){return "doelwit doden"},
"blockActionMove":function(d){return "ga"},
"blockActionMoveAway":function(d){return "weg bewegen van"},
"blockActionMoveForward":function(d){return "beweeg vooruit"},
"blockActionMoveRandom":function(d){return "willekeurig bewegen"},
"blockActionMoveTo":function(d){return "bewegen naar"},
"blockActionMoveToward":function(d){return "één stap naar voren"},
"blockActionPlaySound":function(d){return "geluid afspelen"},
"blockActionRepeat":function(d){return "herhaal"},
"blockActionRepeatRandom":function(d){return "willekeurig herhalen"},
"blockActionSetBlock":function(d){return "zet blok in"},
"blockActionSpawn":function(d){return "spawnen"},
"blockActionSummon":function(d){return "oproepen"},
"blockActionTeleport":function(d){return "doelwit teleporteren"},
"blockActionTeleportToPlayer":function(d){return "naar speler teleporteren"},
"blockActionTestForBlock":function(d){return "test of het blok type"},
"blockActionTestForBlocks":function(d){return "test of het patroon tussen"},
"blockActionToScore":function(d){return "score geven"},
"blockActionTransfer":function(d){return "overdragen"},
"blockActionWait":function(d){return "wacht"},
"blockActionWith":function(d){return "met"},
"blockData":function(d){return "blokgegevens"},
"blockDestroyBlock":function(d){return "vernietig blok"},
"blockIf":function(d){return "als"},
"blockIfLavaAhead":function(d){return "als lava voor je is"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "ga"},
"blockMoveBackward":function(d){return "ga achteruit"},
"blockMoveForward":function(d){return "beweeg vooruit"},
"blockPlace":function(d){return "plaats"},
"blockPlaceTorch":function(d){return "plaats toorts"},
"blockPlaceXAheadAhead":function(d){return "voor"},
"blockPlaceXAheadPlace":function(d){return "plaats"},
"blockPlaceXPlace":function(d){return "plaats"},
"blockPlantCrop":function(d){return "plant gewas"},
"blockShear":function(d){return "knip"},
"blockTill":function(d){return "omploegen"},
"blockTillSoil":function(d){return "ploeg grond"},
"blockTurn":function(d){return "draaien"},
"blockTurnLeft":function(d){return "Draai linksom"},
"blockTurnRight":function(d){return "Draai rechtsom"},
"blockType":function(d){return "bloktype"},
"blockTypeBedrock":function(d){return "bodemsteen"},
"blockTypeBricks":function(d){return "bakstenen"},
"blockTypeClay":function(d){return "klei"},
"blockTypeClayHardened":function(d){return "uitgeharde klei"},
"blockTypeCobblestone":function(d){return "keien"},
"blockTypeDirt":function(d){return "aarde"},
"blockTypeDirtCoarse":function(d){return "ruwe aarde"},
"blockTypeDoorIron":function(d){return "ijzeren deur"},
"blockTypeEmpty":function(d){return "leeg"},
"blockTypeFarmlandWet":function(d){return "akkerland"},
"blockTypeGlass":function(d){return "glas"},
"blockTypeGlowstone":function(d){return "gloeisteen"},
"blockTypeGrass":function(d){return "gras"},
"blockTypeGravel":function(d){return "grind"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "acaciahout"},
"blockTypeLogBirch":function(d){return "berkenhout"},
"blockTypeLogJungle":function(d){return "junglehout"},
"blockTypeLogOak":function(d){return "eikenhout"},
"blockTypeLogSpruce":function(d){return "sparrenhout"},
"blockTypeOreCoal":function(d){return "steenkoolerts"},
"blockTypeOreDiamond":function(d){return "diamanterts"},
"blockTypeOreEmerald":function(d){return "smaragderts"},
"blockTypeOreGold":function(d){return "gouderts"},
"blockTypeOreIron":function(d){return "ijzererts"},
"blockTypeOreLapis":function(d){return "lapiserts"},
"blockTypeOreRedstone":function(d){return "redstone-erts"},
"blockTypePlanksAcacia":function(d){return "acaciaplanken"},
"blockTypePlanksBirch":function(d){return "berkenhouten planken"},
"blockTypePlanksJungle":function(d){return "junglehouten planken"},
"blockTypePlanksOak":function(d){return "eikenhouten planken"},
"blockTypePlanksSpruce":function(d){return "sparrenhouten planken"},
"blockTypePressurePlateUp":function(d){return "drukplaat"},
"blockTypeRail":function(d){return "spoor"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone-fakkel"},
"blockTypeRedstoneWire":function(d){return "redstone-draad"},
"blockTypeSand":function(d){return "zand"},
"blockTypeSandstone":function(d){return "zandsteen"},
"blockTypeStone":function(d){return "steen"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "boom"},
"blockTypeWater":function(d){return "water"},
"blockTypeWool":function(d){return "wol"},
"blockTypeWoolBlue":function(d){return "blauwe wol"},
"blockTypeWoolMagenta":function(d){return "magenta wol"},
"blockTypeWoolOrange":function(d){return "oranje wol"},
"blockTypeWoolPink":function(d){return "roze wol"},
"blockTypeWoolRed":function(d){return "rode wol"},
"blockTypeWoolYellow":function(d){return "gele wol"},
"blockWhileXAheadAhead":function(d){return "voor"},
"blockWhileXAheadDo":function(d){return "voer uit"},
"blockWhileXAheadWhile":function(d){return "terwijl"},
"cancel":function(d){return "Annuleren"},
"cloneMode":function(d){return "kloon mode"},
"cloneModeForce":function(d){return "kracht"},
"cloneModeMove":function(d){return "ga"},
"cloneModeNormal":function(d){return "normaal"},
"connectToCodeConnection":function(d){return "Om dit project in Minecraft: Education Edition uit te voeren, moet je de applicatie Code Connection gebruiken."},
"destination":function(d){return "doel"},
"directionBack":function(d){return "terug"},
"directionDown":function(d){return "omlaag"},
"directionForward":function(d){return "naar voren"},
"directionLeft":function(d){return "links"},
"directionMiddle":function(d){return "midden"},
"directionRight":function(d){return "rechts"},
"directionUp":function(d){return "omhoog"},
"downloadButton":function(d){return "Downloaden"},
"entityType":function(d){return "entiteitstype"},
"entityTypeChicken":function(d){return "kip"},
"entityTypeCow":function(d){return "koe"},
"entityTypeCreeper":function(d){return "Creeper"},
"entityTypeIronGolem":function(d){return "ijzergolem"},
"entityTypePlayer":function(d){return "speler"},
"entityTypeSheep":function(d){return "schaap"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "wanneer aangevallen"},
"eventTypeWhenDay":function(d){return "wanneer overdag"},
"eventTypeWhenNight":function(d){return "wanneer 's nachts"},
"eventTypeWhenRun":function(d){return "als gestart"},
"eventTypeWhenSpawned":function(d){return "wanneer gespawned"},
"eventTypeWhenTouched":function(d){return "wanneer aangeraakt"},
"eventTypeWhenUsed":function(d){return "wanneer gebruikt"},
"forever":function(d){return "voor altijd"},
"from":function(d){return "van"},
"generatedCodeDescription":function(d){return "Door in deze puzzel blokken te plaatsen en te verschuiven, heb je een set instructies gevormd in de computertaal Javascript. Deze code vertelt computers wat ze op het scherm moeten laten zien. Alles wat je in Minecraft ziet en doet, begint met dit soort regels computercode."},
"getdataof":function(d){return "gegevens ophalen van"},
"getnameof":function(d){return "naam ophalen van"},
"houseSelectChooseFloorPlan":function(d){return "Kies de plattegrond voor je huis."},
"houseSelectEasy":function(d){return "Makkie"},
"houseSelectHard":function(d){return "Lastig"},
"houseSelectLetsBuild":function(d){return "Laten we een huis bouwen."},
"houseSelectMedium":function(d){return "Middelgroot"},
"import":function(d){return "Importeren"},
"importShareLinkBody":function(d){return "Typ je gedeelde Een Uur Code-koppeling hier en klik op \"Importeren\" om je code naar Minecraft te kopiëren"},
"importShareLinkHeader":function(d){return "Deelbare koppeling importeren"},
"inSlotNumber":function(d){return "in vak nummer"},
"itemTypeBlock":function(d){return "blok"},
"itemTypeDecoration":function(d){return "decoratie"},
"itemTypeMiscellaneous":function(d){return "diverse"},
"itemTypeTool":function(d){return "hulpmiddel"},
"items":function(d){return "voorwerp(en)"},
"itemsOfBlockType":function(d){return "voorwerp(en) met bloktype"},
"level10FailureMessage":function(d){return "Bedek de lava om over te steken, delf dan twee van de ijzeren blokken aan de overkant."},
"level11FailureMessage":function(d){return "Zorg dat je keien plaatst als er lava voor je is. Zo kun je veilig deze rij grondstoffen delven."},
"level12FailureMessage":function(d){return "Zorg dat je 3 redstoneblokken delft. Hier wordt wat je leerde toen je je huis bouwde, gecombineerd met het commando \"als\" om te voorkomen dat je in de lava valt."},
"level13FailureMessage":function(d){return "Plaats \"spoor\" langs het zandpad dat van je deur naar de rand van de kaart loopt."},
"level1FailureMessage":function(d){return "Je moet commando's gebruiken om naar het schaap te lopen."},
"level1TooFewBlocksMessage":function(d){return "Probeer meer commando's te gebruiken om naar het schaap te lopen."},
"level2FailureMessage":function(d){return "Als je de boom wilt omhakken, moet je naar de stam lopen en het commando \"vernietig blok\" gebruiken."},
"level2TooFewBlocksMessage":function(d){return "Probeer meer commando's te gebruiken om de boom om te hakken. Loop naar de stam en gebruik het commando \"vernietig blok\"."},
"level3FailureMessage":function(d){return "Als je wol van beide schapen wilt verzamelen, moet je naar elk schaap lopen en het commando \"knip\" gebruiken. Vergeet niet de draai-commando's te gebruiken om de schapen te bereiken."},
"level3TooFewBlocksMessage":function(d){return "Probeer meer commando's te gebruiken om wol van beide schapen te verzamelen. Loop naar elk schaap en gebruik het commando \"knip\"."},
"level4FailureMessage":function(d){return "Je moet het commando \"vernietig blok\" gebruiken op alle drie boomstammen."},
"level5FailureMessage":function(d){return "Plaats je blokken op de zandlijn om een muur te bouwen. Het roze commando \"herhaal\" gebruikt de commando's die erin geplaatst zijn, zoals \"plaats blok\" en \"beweeg vooruit\"."},
"level6FailureMessage":function(d){return "Plaats blokken op de zandlijnen van het huis om de puzzel te voltooien."},
"level7FailureMessage":function(d){return "Gebruik het commando \"plant\" om gewassen te planten op elk donker stuk omgeploegde grond."},
"level8FailureMessage":function(d){return "Als je een Creeper aanraakt, zal hij ontploffen. Sluip om hem heen om je huis binnen te gaan."},
"level9FailureMessage":function(d){return "Vergeet niet minstens 2 fakkels te plaatsen om je weg te verlichten EN delf minstens 2 steenkool."},
"maskMode":function(d){return "maskeringsmodus"},
"maskModeMasked":function(d){return "gemaskeerd"},
"maskModeReplace":function(d){return "vervangen"},
"minecraftBlock":function(d){return "blok"},
"minecraftNotConnected":function(d){return "Minecraft niet verbonden"},
"miniBlockBricks":function(d){return "bakstenen"},
"miniBlockBucketLava":function(d){return "lava-emmer"},
"miniBlockBucketWater":function(d){return "wateremmer"},
"miniBlockCarrots":function(d){return "wortels"},
"miniBlockCoal":function(d){return "steenkool"},
"miniBlockCobblestone":function(d){return "keien"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "aarde"},
"miniBlockDirtCoarse":function(d){return "ruwe aarde"},
"miniBlockEgg":function(d){return "ei"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "grind"},
"miniBlockGunPowder":function(d){return "buskruit"},
"miniBlockIngotGold":function(d){return "goudstaaf"},
"miniBlockIngotIron":function(d){return "ijzerstaaf"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "acaciahout"},
"miniBlockLogBirch":function(d){return "berkenhout"},
"miniBlockLogJungle":function(d){return "junglehout"},
"miniBlockLogOak":function(d){return "eikenhout"},
"miniBlockLogSpruce":function(d){return "sparrenhout"},
"miniBlockMilk":function(d){return "melk"},
"miniBlockPlanksAcacia":function(d){return "acaciaplanken"},
"miniBlockPlanksBirch":function(d){return "berkenhouten planken"},
"miniBlockPlanksJungle":function(d){return "junglehouten planken"},
"miniBlockPlanksOak":function(d){return "eikenhouten planken"},
"miniBlockPlanksSpruce":function(d){return "sparrenhouten planken"},
"miniBlockPoppy":function(d){return "klaproos"},
"miniBlockPotato":function(d){return "aardappel"},
"miniBlockRedstoneDust":function(d){return "Redstone-stof"},
"miniBlockSand":function(d){return "zand"},
"miniBlockSandstone":function(d){return "zandsteen"},
"miniBlockSheep":function(d){return "schaap"},
"miniBlockWheat":function(d){return "tarwe"},
"miniBlockWool":function(d){return "wol"},
"nextLevelMsg":function(d){return "Puzzel "+craft_locale.v(d,"puzzleNumber")+" voltooid. Gefeliciteerd!"},
"oldBlockHandling":function(d){return "oude blok op"},
"oldBlockHandlingsDestroy":function(d){return "vernietigen"},
"oldBlockHandlingsKeep":function(d){return "behouden"},
"oldBlockHandlingsReplace":function(d){return "vervangen"},
"onBehalfOf":function(d){return "namens"},
"playerSelectChooseCharacter":function(d){return "Kies je personage."},
"playerSelectChooseSelectButton":function(d){return "Selecteren"},
"playerSelectLetsGetStarted":function(d){return "Laten we beginnen."},
"quantity":function(d){return "aantal"},
"reinfFeedbackMsg":function(d){return "Druk op \"Verder spelen\" om verder te gaan met je spel."},
"relative":function(d){return "relatief"},
"runAgent":function(d){return "Agent uitvoeren"},
"score":function(d){return "Punt maken"},
"seconds":function(d){return "seconde(n)"},
"selectChooseButton":function(d){return "Selecteren"},
"soundTypeBump":function(d){return "stoot"},
"soundTypeChickenBawk":function(d){return "kakelende kip"},
"soundTypeChickenHurt":function(d){return "gekwetste kip"},
"soundTypeCollectedBlock":function(d){return "blok verzameld"},
"soundTypeCowHuff":function(d){return "kreunende koe"},
"soundTypeCowHurt":function(d){return "gewonde koe"},
"soundTypeCowMoo":function(d){return "loeiende koe"},
"soundTypeCowMooLong":function(d){return "lang loeiende koe"},
"soundTypeCreeperHiss":function(d){return "creeper gesis"},
"soundTypeDig_wood1":function(d){return "brekend hout"},
"soundTypeDoorOpen":function(d){return "geopende deur"},
"soundTypeExplode":function(d){return "ontploffen"},
"soundTypeFailure":function(d){return "level gefaald"},
"soundTypeFall":function(d){return "val"},
"soundTypeFizz":function(d){return "bubbelen"},
"soundTypeFuse":function(d){return "lont"},
"soundTypeIronGolemHit":function(d){return "slag ijzergolem"},
"soundTypeMetalWhack":function(d){return "metalen klap"},
"soundTypeMinecart":function(d){return "mijnkarretje"},
"soundTypePlaceBlock":function(d){return "geplaatst blok"},
"soundTypePunch":function(d){return "slaan"},
"soundTypeSheepBaa":function(d){return "blatend schaap"},
"soundTypeStepFarmland":function(d){return "stap akkerland"},
"soundTypeStepGrass":function(d){return "stap gras"},
"soundTypeStepGravel":function(d){return "stap grind"},
"soundTypeStepStone":function(d){return "stap steen"},
"soundTypeStepWood":function(d){return "stap hout"},
"soundTypeSuccess":function(d){return "level gehaald"},
"soundTypeZombieBrains":function(d){return "zombie kreun"},
"soundTypeZombieGroan":function(d){return "grommende zombie"},
"soundTypeZombieHurt":function(d){return "gewonde zombie"},
"target":function(d){return "doelwit"},
"testModeAll":function(d){return "alles"},
"testModeMasked":function(d){return "gemaskeerd"},
"tileData":function(d){return "tegelgegevens"},
"timeDay":function(d){return "dag"},
"timeLong":function(d){return "lang"},
"timeMedium":function(d){return "middellang"},
"timeNight":function(d){return "nacht"},
"timeRandom":function(d){return "willekeurig"},
"timeSet":function(d){return "tijd instellen op"},
"timeShort":function(d){return "kort"},
"timeVeryLong":function(d){return "heel lang"},
"timeVeryShort":function(d){return "heel kort"},
"to":function(d){return "aan"},
"toSlotNumber":function(d){return "naar vak nummer"},
"tooManyBlocksFail":function(d){return "Puzzel "+craft_locale.v(d,"puzzleNumber")+" voltooid. Gefeliciteerd! Dit is ook mogelijk met "+craft_locale.p(d,"numBlocks",0,"nl",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blockken"})+"."},
"turnRandom":function(d){return "willekeurig draaien"},
"useArrowKeys":function(d){return "Je hoeft geen blokken toe te voegen! Beweeg met de pijltoetsen en gebruik voorwerpen door op de spatiebalk te drukken of op het spelbord te tikken."},
"weather":function(d){return "weer"},
"weatherTypeClear":function(d){return "helder"},
"weatherTypeRain":function(d){return "regen"},
"weatherTypeThunder":function(d){return "onweer"}};