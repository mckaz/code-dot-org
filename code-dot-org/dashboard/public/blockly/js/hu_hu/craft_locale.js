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
"absolute":function(d){return "abszolútérték"},
"agentGenericFailureMessage":function(d){return "Kódolj tovább! És ne feledd igénybe venni az Agent segítségét."},
"agentTooFewBlocksFailureMessage":function(d){return "Próbálj egyszerre egy blokkot hozzáadni, hogy az Agent a megfelelő helyre jusson."},
"at":function(d){return "nál"},
"agentDiamondPathCongrats":function(d){return "Gratulálunk, megtaláltad a gyémántutat! Eddig "+craft_locale.p(d,"count",0,"hu",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"ot találtál!"},
"blockActionAdd":function(d){return "add hozzá"},
"blockActionAttack":function(d){return "támadás"},
"blockActionClone":function(d){return "blokkok klónozása"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "begyűjtés"},
"blockActionCollectAll":function(d){return "összes begyűjtése"},
"blockActionDestroyEntity":function(d){return "eltűntetés"},
"blockActionDetect":function(d){return "észlelés"},
"blockActionDetectRedstone":function(d){return "vöröskő észlelése"},
"blockActionDrop":function(d){return "eldobás"},
"blockActionDropAll":function(d){return "összes eldobása"},
"blockActionExecute":function(d){return "parancs végrehajtása"},
"blockActionExplodeEntity":function(d){return "robbantás"},
"blockActionFill":function(d){return "űrlap kitöltése"},
"blockActionFlashEntity":function(d){return "felvillantás"},
"blockActionGetItemCount":function(d){return "elemek megszámolása"},
"blockActionGetItemCountInSlotNumber":function(d){return "add meg az elem számát slot számban"},
"blockActionGetItemDetail":function(d){return "add meg az elem leírását"},
"blockActionGetItemDetailInSlotNumber":function(d){return "add meg az elem leírását slot számban"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "ad"},
"blockActionInspect":function(d){return "ellenőrzés"},
"blockActionInspectData":function(d){return "adatok ellenőrzése"},
"blockActionKill":function(d){return "cél megölése"},
"blockActionMove":function(d){return "mozogj"},
"blockActionMoveAway":function(d){return "mozgás elfelé"},
"blockActionMoveForward":function(d){return "előrelépni"},
"blockActionMoveRandom":function(d){return "mozgás találomra"},
"blockActionMoveTo":function(d){return "mozgás ide"},
"blockActionMoveToward":function(d){return "mozgás egy lépéssel ebbe az irányba"},
"blockActionPlaySound":function(d){return "hang lejátszása"},
"blockActionRepeat":function(d){return "Ismételd"},
"blockActionRepeatRandom":function(d){return "ismétlés véletlenszerűen"},
"blockActionSetBlock":function(d){return "állítsd a blokkot"},
"blockActionSpawn":function(d){return "teremtés"},
"blockActionSummon":function(d){return "idézés"},
"blockActionTeleport":function(d){return "cél teleportálása"},
"blockActionTeleportToPlayer":function(d){return "teleportálás a játékoshoz"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "a pontszámhoz"},
"blockActionTransfer":function(d){return "áthelyezés"},
"blockActionWait":function(d){return "várj"},
"blockActionWith":function(d){return "ezzel"},
"blockData":function(d){return "blokk adatai"},
"blockDestroyBlock":function(d){return "blokk megsemmisítése"},
"blockIf":function(d){return "Ha"},
"blockIfLavaAhead":function(d){return "ha láva van előtte"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "mozogj"},
"blockMoveBackward":function(d){return "menj hátrafelé"},
"blockMoveForward":function(d){return "előrelépni"},
"blockPlace":function(d){return "elhelyez"},
"blockPlaceTorch":function(d){return "fáklya elhelyezése"},
"blockPlaceXAheadAhead":function(d){return "eléje"},
"blockPlaceXAheadPlace":function(d){return "elhelyez"},
"blockPlaceXPlace":function(d){return "elhelyez"},
"blockPlantCrop":function(d){return "mag ültetés"},
"blockShear":function(d){return "nyírás"},
"blockTill":function(d){return "megművelés"},
"blockTillSoil":function(d){return "felszánt"},
"blockTurn":function(d){return "fordulás"},
"blockTurnLeft":function(d){return "fordulj balra"},
"blockTurnRight":function(d){return "fordulj jobbra"},
"blockType":function(d){return "blokk típusa"},
"blockTypeBedrock":function(d){return "alapkőzet"},
"blockTypeBricks":function(d){return "tégla"},
"blockTypeClay":function(d){return "agyag"},
"blockTypeClayHardened":function(d){return "keményített agyag"},
"blockTypeCobblestone":function(d){return "macskakő"},
"blockTypeDirt":function(d){return "föld"},
"blockTypeDirtCoarse":function(d){return "durva föld"},
"blockTypeDoorIron":function(d){return "vasajtó"},
"blockTypeEmpty":function(d){return "üres"},
"blockTypeFarmlandWet":function(d){return "termőföld"},
"blockTypeGlass":function(d){return "üveg"},
"blockTypeGlowstone":function(d){return "izzókő"},
"blockTypeGrass":function(d){return "fű"},
"blockTypeGravel":function(d){return "kavics"},
"blockTypeLava":function(d){return "láva"},
"blockTypeLogAcacia":function(d){return "akác rönk"},
"blockTypeLogBirch":function(d){return "nyírfa rönk"},
"blockTypeLogJungle":function(d){return "trópusi rönk"},
"blockTypeLogOak":function(d){return "tölgyfa rönk"},
"blockTypeLogSpruce":function(d){return "fenyő rönk"},
"blockTypeOreCoal":function(d){return "szénérc"},
"blockTypeOreDiamond":function(d){return "gyémánt érc"},
"blockTypeOreEmerald":function(d){return "smaragd érc"},
"blockTypeOreGold":function(d){return "aranyérc"},
"blockTypeOreIron":function(d){return "vasérc"},
"blockTypeOreLapis":function(d){return "lapis érc"},
"blockTypeOreRedstone":function(d){return "vöröskő érc"},
"blockTypePlanksAcacia":function(d){return "akác deszka"},
"blockTypePlanksBirch":function(d){return "nyírfa deszka"},
"blockTypePlanksJungle":function(d){return "dzsungelfadeszkák"},
"blockTypePlanksOak":function(d){return "tölgyfa deszka"},
"blockTypePlanksSpruce":function(d){return "fenyő deszka"},
"blockTypePressurePlateUp":function(d){return "nyomólap"},
"blockTypeRail":function(d){return "sín"},
"blockTypeRailsRedstoneTorch":function(d){return "vöröskő fáklya"},
"blockTypeRedstoneWire":function(d){return "vöröskő drót"},
"blockTypeSand":function(d){return "homok"},
"blockTypeSandstone":function(d){return "homokkő"},
"blockTypeStone":function(d){return "kő"},
"blockTypeTnt":function(d){return "tnt"},
"blockTypeTree":function(d){return "fa"},
"blockTypeWater":function(d){return "víz"},
"blockTypeWool":function(d){return "gyapjú"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "eléje"},
"blockWhileXAheadDo":function(d){return "csináld"},
"blockWhileXAheadWhile":function(d){return "amíg"},
"cancel":function(d){return "Mégsem"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "mozogj"},
"cloneModeNormal":function(d){return "normál"},
"connectToCodeConnection":function(d){return "A projekt futtatásához a Minecraft: Education Edition kiadásban használd a Code Connection alkalmazást."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "vissza"},
"directionDown":function(d){return "le"},
"directionForward":function(d){return "előre"},
"directionLeft":function(d){return "balra"},
"directionMiddle":function(d){return "középre"},
"directionRight":function(d){return "jobbra"},
"directionUp":function(d){return "fel"},
"downloadButton":function(d){return "Letöltés"},
"entityType":function(d){return "entitás típusa"},
"entityTypeChicken":function(d){return "csirke"},
"entityTypeCow":function(d){return "tehén"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "vasgólem"},
"entityTypePlayer":function(d){return "játékos"},
"entityTypeSheep":function(d){return "juh"},
"entityTypeZombie":function(d){return "zombi"},
"eventTypeWhenAttacked":function(d){return "amikor megtámadják"},
"eventTypeWhenDay":function(d){return "nappal"},
"eventTypeWhenNight":function(d){return "éjjel"},
"eventTypeWhenRun":function(d){return "futtatáskor"},
"eventTypeWhenSpawned":function(d){return "amikor megszületik"},
"eventTypeWhenTouched":function(d){return "amikor megérintik"},
"eventTypeWhenUsed":function(d){return "amikor használják"},
"forever":function(d){return "mindig"},
"from":function(d){return "ettől"},
"generatedCodeDescription":function(d){return "A puzzle-darabok elhelyezésével igazából utasításokat adtál ki, melyek a JavaScript nevű programozási nyelven íródtak. Ez az utasítás-sorozat (programkód) mondja meg a számítógépnek, hogy mit és hogyan jelenítsen meg a képernyőn. Bármi, amit a Minecraftban látsz és csinálsz ilyen programkódban íródott."},
"getdataof":function(d){return "a következő adatainak lekérése"},
"getnameof":function(d){return "a következő nevének lekérése"},
"houseSelectChooseFloorPlan":function(d){return "Válaszd ki a ház alaprajzát."},
"houseSelectEasy":function(d){return "Könnyű"},
"houseSelectHard":function(d){return "Nehéz"},
"houseSelectLetsBuild":function(d){return "Építsünk házat."},
"houseSelectMedium":function(d){return "Közepes"},
"import":function(d){return "Importálás"},
"importShareLinkBody":function(d){return "Másold ide a Kódolás Órája megosztási hivatkozását, majd a kód importálásához a Minecraftba kattints az \"Importálás\" gombra"},
"importShareLinkHeader":function(d){return "Megosztási hivatkozás importálása"},
"inSlotNumber":function(d){return "ezen a helyen"},
"itemTypeBlock":function(d){return "blokk"},
"itemTypeDecoration":function(d){return "díszítés"},
"itemTypeMiscellaneous":function(d){return "egyéb"},
"itemTypeTool":function(d){return "szerszám"},
"items":function(d){return "elem"},
"itemsOfBlockType":function(d){return "blokktípusú elem"},
"level10FailureMessage":function(d){return "Fedd le a lávát hogy keresztülsétálhass rajta, aztán bányássz ki két vas-blokkot a túloldalon."},
"level11FailureMessage":function(d){return "Ha előtted láva van, helyezz oda zúzottkövet. Így biztonságosan kibányászhatod ezeket az erőforrásokat."},
"level12FailureMessage":function(d){return "Bányássz ki 3 vöröskő blokkot. Ehhez kombinálnod kell a házad felépítésével és a láva elkerülésére alkalmazott \"ha\" utasításokkal kapcsolatban tanultakat."},
"level13FailureMessage":function(d){return "Helyezz el egy \"sín\"-t a földúton, hogy az elvezessen a házad ajtajától a térkép széléhez."},
"level1FailureMessage":function(d){return "Parancsokat kell használnod ahhoz, hogy odasétálj a birkához."},
"level1TooFewBlocksMessage":function(d){return "Próbálj ki további parancsokat is, hogy odamenj a birkához."},
"level2FailureMessage":function(d){return "A fa kivágásához menj oda a fa törzséhez és használd a \"blokk megsemmisítése\" parancsot."},
"level2TooFewBlocksMessage":function(d){return "Próbálj ki további parancsokat a fa kivágásához. Sétálj oda a fa törzséhez és alkalmazd a \"blokk megsemmisítése\" parancsot."},
"level3FailureMessage":function(d){return "Mind a két birka gyapjának begyűjtéséhez sétálj oda hozzájuk és használd a \"nyírás\" parancsot. Ne feledd használni a fordulás parancsot is a birkákhoz vezető úton."},
"level3TooFewBlocksMessage":function(d){return "Próbálj meg használni további parancsokat ahhoz, hogy gyapjút gyűjts a birkáktól. Sétálj oda mindegyikhez és használd a \"nyírás\" parancsot."},
"level4FailureMessage":function(d){return "A \"blokk megsemmisítése\" parancsot kell használnod mind a három fatörzsön."},
"level5FailureMessage":function(d){return "Fal építéséhez helyezd a blokkokat a körvonalra. A rózsaszín \"ismétlés\" parancs megismétli a bele helyezett olyan parancsokat, mint a \"blokk elhelyezése\" és \"mozgás előre\"."},
"level6FailureMessage":function(d){return "A kirakós megoldásához helyezz blokkokat a körvonalra a házon kívül."},
"level7FailureMessage":function(d){return "Használd a \"ültetés\" parancsot hogy magot helyezz minden egyes felszántott termőföldbe."},
"level8FailureMessage":function(d){return "Ha hozzáérsz a creeperhez, az felrobban. Surranj el mellettük és osonj be a házadba."},
"level9FailureMessage":function(d){return "Helyezz el legalább 2 fáklyát az út megvilágításához, ÉS bányássz legalább 2 szenet."},
"maskMode":function(d){return "maszk mód"},
"maskModeMasked":function(d){return "maszkolva"},
"maskModeReplace":function(d){return "csere"},
"minecraftBlock":function(d){return "blokk"},
"minecraftNotConnected":function(d){return "A Minecraft nem csatlakozott"},
"miniBlockBricks":function(d){return "tégla"},
"miniBlockBucketLava":function(d){return "lávásvödör"},
"miniBlockBucketWater":function(d){return "vizesvödör"},
"miniBlockCarrots":function(d){return "sárgarépa"},
"miniBlockCoal":function(d){return "szén"},
"miniBlockCobblestone":function(d){return "macskakő"},
"miniBlockDiamond":function(d){return "gyémánt"},
"miniBlockDirt":function(d){return "föld"},
"miniBlockDirtCoarse":function(d){return "durva föld"},
"miniBlockEgg":function(d){return "tojás"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "kavics"},
"miniBlockGunPowder":function(d){return "puskapor"},
"miniBlockIngotGold":function(d){return "aranyrúd"},
"miniBlockIngotIron":function(d){return "vasrúd"},
"miniBlockLapisLazuli":function(d){return "lazurit"},
"miniBlockLogAcacia":function(d){return "akác rönk"},
"miniBlockLogBirch":function(d){return "nyírfa rönk"},
"miniBlockLogJungle":function(d){return "trópusi rönk"},
"miniBlockLogOak":function(d){return "tölgyfa rönk"},
"miniBlockLogSpruce":function(d){return "fenyő rönk"},
"miniBlockMilk":function(d){return "tej"},
"miniBlockPlanksAcacia":function(d){return "akác deszka"},
"miniBlockPlanksBirch":function(d){return "nyírfa deszka"},
"miniBlockPlanksJungle":function(d){return "dzsungelfadeszkák"},
"miniBlockPlanksOak":function(d){return "tölgyfa deszka"},
"miniBlockPlanksSpruce":function(d){return "fenyő deszka"},
"miniBlockPoppy":function(d){return "pipacs"},
"miniBlockPotato":function(d){return "burgonya"},
"miniBlockRedstoneDust":function(d){return "vöröskőpor"},
"miniBlockSand":function(d){return "homok"},
"miniBlockSandstone":function(d){return "homokkő"},
"miniBlockSheep":function(d){return "juh"},
"miniBlockWheat":function(d){return "búza"},
"miniBlockWool":function(d){return "gyapjú"},
"nextLevelMsg":function(d){return "A "+craft_locale.v(d,"puzzleNumber")+". feladvány befejeződött. Ügyes vagy!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "pusztítás"},
"oldBlockHandlingsKeep":function(d){return "megőrzés"},
"oldBlockHandlingsReplace":function(d){return "csere"},
"onBehalfOf":function(d){return "a következő nevében"},
"playerSelectChooseCharacter":function(d){return "Válaszd ki a karaktered."},
"playerSelectChooseSelectButton":function(d){return "Válassz"},
"playerSelectLetsGetStarted":function(d){return "Kezdjük is el."},
"quantity":function(d){return "mennyiség"},
"reinfFeedbackMsg":function(d){return "A \"Folytasd\" gomb megnyomásával tudod folytatni a játékod."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Agent futtatása"},
"score":function(d){return "Eredmény"},
"seconds":function(d){return "másodperc"},
"selectChooseButton":function(d){return "Válassz"},
"soundTypeBump":function(d){return "puffanás"},
"soundTypeChickenBawk":function(d){return "csirke kotkodácsolása"},
"soundTypeChickenHurt":function(d){return "csirke sírása"},
"soundTypeCollectedBlock":function(d){return "blokk felvétele"},
"soundTypeCowHuff":function(d){return "tehén fújása"},
"soundTypeCowHurt":function(d){return "tehén sírása"},
"soundTypeCowMoo":function(d){return "tehén bőgése"},
"soundTypeCowMooLong":function(d){return "tehén hosszú bőgése"},
"soundTypeCreeperHiss":function(d){return "creeper sziszegése"},
"soundTypeDig_wood1":function(d){return "fa törése"},
"soundTypeDoorOpen":function(d){return "ajtó nyitása"},
"soundTypeExplode":function(d){return "robbantás"},
"soundTypeFailure":function(d){return "szint sikertelen"},
"soundTypeFall":function(d){return "esés"},
"soundTypeFizz":function(d){return "sistergés"},
"soundTypeFuse":function(d){return "olvadás"},
"soundTypeIronGolemHit":function(d){return "vasgólem ütése"},
"soundTypeMetalWhack":function(d){return "fém csengése"},
"soundTypeMinecart":function(d){return "csille"},
"soundTypePlaceBlock":function(d){return "blokk elhelyezése"},
"soundTypePunch":function(d){return "ütés"},
"soundTypeSheepBaa":function(d){return "juh bégetése"},
"soundTypeStepFarmland":function(d){return "termőföldre lépés"},
"soundTypeStepGrass":function(d){return "fűre lépés"},
"soundTypeStepGravel":function(d){return "sóderre lépés"},
"soundTypeStepStone":function(d){return "kőre lépés"},
"soundTypeStepWood":function(d){return "fára lépés"},
"soundTypeSuccess":function(d){return "szint sikerült"},
"soundTypeZombieBrains":function(d){return "zombi nyögése"},
"soundTypeZombieGroan":function(d){return "zombi morgása"},
"soundTypeZombieHurt":function(d){return "zombi sírása"},
"target":function(d){return "célzás"},
"testModeAll":function(d){return "összes"},
"testModeMasked":function(d){return "maszkolva"},
"tileData":function(d){return "mozaik adatai"},
"timeDay":function(d){return "nap"},
"timeLong":function(d){return "hosszú"},
"timeMedium":function(d){return "közepes"},
"timeNight":function(d){return "éjszaka"},
"timeRandom":function(d){return "véletlen"},
"timeSet":function(d){return "idő beállítása erre"},
"timeShort":function(d){return "rövid"},
"timeVeryLong":function(d){return "nagyon hosszú"},
"timeVeryShort":function(d){return "nagyon rövid"},
"to":function(d){return "ehhez:"},
"toSlotNumber":function(d){return "erre a helyre"},
"tooManyBlocksFail":function(d){return "A(z) "+craft_locale.v(d,"puzzleNumber")+". feladvány befejeződött. Ügyes vagy! Egyébként ennyi blokkal is meg lehet csinálni: "+craft_locale.p(d,"numBlocks",0,"hu",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "fordulás véletlenszerű irányba"},
"useArrowKeys":function(d){return "Nem kell blokkot hozzáadnod! A nyilakkal mozoghatsz, és a tárgyakat a szóköz billentyűt megnyomva vagy a játéktáblára koppintva használhatod."},
"weather":function(d){return "időjárás"},
"weatherTypeClear":function(d){return "derült"},
"weatherTypeRain":function(d){return "esős"},
"weatherTypeThunder":function(d){return "mennydörgés"}};