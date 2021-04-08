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
"absolute":function(d){return "absolútna hodnota"},
"agentGenericFailureMessage":function(d){return "Pokračujte v programovaní. Nezabudnite využívať pomoc agenta."},
"agentTooFewBlocksFailureMessage":function(d){return "Skúste pridávať bloky po jednom, aby sa agent dostal na správne miesto."},
"at":function(d){return "na"},
"agentDiamondPathCongrats":function(d){return "Blahoželáme, našli ste diamantovú cestu. Zatiaľ ste získali "+craft_locale.p(d,"count",0,"sk",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"."},
"blockActionAdd":function(d){return "pridaj"},
"blockActionAttack":function(d){return "útok"},
"blockActionClone":function(d){return "klonovať bloky"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "zbieraj"},
"blockActionCollectAll":function(d){return "zbierať všetko"},
"blockActionDestroyEntity":function(d){return "zmiznúť"},
"blockActionDetect":function(d){return "zistiť"},
"blockActionDetectRedstone":function(d){return "zistiť rudit"},
"blockActionDrop":function(d){return "pusti"},
"blockActionDropAll":function(d){return "pustiť všetko"},
"blockActionExecute":function(d){return "vykonať príkaz"},
"blockActionExplodeEntity":function(d){return "vybuchni"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "blesk"},
"blockActionGetItemCount":function(d){return "získať počet predmetov"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "získať podrobnosti o predmete"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "give"},
"blockActionInspect":function(d){return "skontrolovať"},
"blockActionInspectData":function(d){return "skontrolovať údaje"},
"blockActionKill":function(d){return "zabiť cieľ"},
"blockActionMove":function(d){return "presunúť"},
"blockActionMoveAway":function(d){return "presunúť preč od"},
"blockActionMoveForward":function(d){return "posunúť dopredu"},
"blockActionMoveRandom":function(d){return "presunúť náhodne"},
"blockActionMoveTo":function(d){return "presunúť k"},
"blockActionMoveToward":function(d){return "urob krok smerom ku"},
"blockActionPlaySound":function(d){return "prehrať zvuk"},
"blockActionRepeat":function(d){return "opakovať"},
"blockActionRepeatRandom":function(d){return "náhodne opakovať"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "vytvor"},
"blockActionSummon":function(d){return "privolať"},
"blockActionTeleport":function(d){return "teleportovať cieľ"},
"blockActionTeleportToPlayer":function(d){return "teleportovať k hráčovi"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "ku skóre"},
"blockActionTransfer":function(d){return "preniesť"},
"blockActionWait":function(d){return "čakaj"},
"blockActionWith":function(d){return "s"},
"blockData":function(d){return "údaje bloku"},
"blockDestroyBlock":function(d){return "znič blok"},
"blockIf":function(d){return "ak"},
"blockIfLavaAhead":function(d){return "ak je pred tebou láva"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "presunúť"},
"blockMoveBackward":function(d){return "posunúť dozadu"},
"blockMoveForward":function(d){return "posunúť dopredu"},
"blockPlace":function(d){return "umiestniť"},
"blockPlaceTorch":function(d){return "umiestni fakľu"},
"blockPlaceXAheadAhead":function(d){return "oproti"},
"blockPlaceXAheadPlace":function(d){return "umiestniť"},
"blockPlaceXPlace":function(d){return "umiestniť"},
"blockPlantCrop":function(d){return "zasaď plodinu"},
"blockShear":function(d){return "ostrihaj"},
"blockTill":function(d){return "obrobiť"},
"blockTillSoil":function(d){return "zorať pôdu"},
"blockTurn":function(d){return "otočiť"},
"blockTurnLeft":function(d){return "otočiť vľavo"},
"blockTurnRight":function(d){return "otočiť vpravo"},
"blockType":function(d){return "typ bloku"},
"blockTypeBedrock":function(d){return "skalné podložie"},
"blockTypeBricks":function(d){return "tehly"},
"blockTypeClay":function(d){return "íl"},
"blockTypeClayHardened":function(d){return "tvrdený íl"},
"blockTypeCobblestone":function(d){return "kameň"},
"blockTypeDirt":function(d){return "hlina"},
"blockTypeDirtCoarse":function(d){return "neplodná pôda"},
"blockTypeDoorIron":function(d){return "železné dvere"},
"blockTypeEmpty":function(d){return "prázdne"},
"blockTypeFarmlandWet":function(d){return "poľnohospodárska pôda"},
"blockTypeGlass":function(d){return "sklo"},
"blockTypeGlowstone":function(d){return "žiarivý kameň"},
"blockTypeGrass":function(d){return "tráva"},
"blockTypeGravel":function(d){return "štrk"},
"blockTypeLava":function(d){return "láva"},
"blockTypeLogAcacia":function(d){return "agátové brvno"},
"blockTypeLogBirch":function(d){return "brezové brvno"},
"blockTypeLogJungle":function(d){return "brvno tropického dreva"},
"blockTypeLogOak":function(d){return "dubové brvno"},
"blockTypeLogSpruce":function(d){return "smrekové brvno"},
"blockTypeOreCoal":function(d){return "ruda uhlia"},
"blockTypeOreDiamond":function(d){return "ruda diamantu"},
"blockTypeOreEmerald":function(d){return "ruda smaragdu"},
"blockTypeOreGold":function(d){return "ruda zlata"},
"blockTypeOreIron":function(d){return "ruda železa"},
"blockTypeOreLapis":function(d){return "ruda lapizu"},
"blockTypeOreRedstone":function(d){return "ruda ruditu"},
"blockTypePlanksAcacia":function(d){return "agátové dosky"},
"blockTypePlanksBirch":function(d){return "brezové dosky"},
"blockTypePlanksJungle":function(d){return "dosky tropického dreva"},
"blockTypePlanksOak":function(d){return "dubové dosky"},
"blockTypePlanksSpruce":function(d){return "smrekové dosky"},
"blockTypePressurePlateUp":function(d){return "prítlačná doska"},
"blockTypeRail":function(d){return "koľajnica"},
"blockTypeRailsRedstoneTorch":function(d){return "ruditová fakľa"},
"blockTypeRedstoneWire":function(d){return "ruditový drôt"},
"blockTypeSand":function(d){return "piesok"},
"blockTypeSandstone":function(d){return "pieskovec"},
"blockTypeStone":function(d){return "kameň"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "strom"},
"blockTypeWater":function(d){return "voda"},
"blockTypeWool":function(d){return "vlna"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "oproti"},
"blockWhileXAheadDo":function(d){return "vykonaj"},
"blockWhileXAheadWhile":function(d){return "pokiaľ"},
"cancel":function(d){return "Zrušiť"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "presunúť"},
"cloneModeNormal":function(d){return "normálny"},
"connectToCodeConnection":function(d){return "Ak chcete spustiť tento projekt vo vydaní Minecraft: Education Edition, použite aplikáciu Code Connection."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "dozadu"},
"directionDown":function(d){return "nadol"},
"directionForward":function(d){return "dopredu"},
"directionLeft":function(d){return "vľavo"},
"directionMiddle":function(d){return "stred"},
"directionRight":function(d){return "vpravo"},
"directionUp":function(d){return "hore"},
"downloadButton":function(d){return "Prevziať"},
"entityType":function(d){return "typ subjektu"},
"entityTypeChicken":function(d){return "kurča"},
"entityTypeCow":function(d){return "krava"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "železný golem"},
"entityTypePlayer":function(d){return "hráč"},
"entityTypeSheep":function(d){return "ovca"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "keď je napadnutý"},
"eventTypeWhenDay":function(d){return "keď je deň"},
"eventTypeWhenNight":function(d){return "keď je noc"},
"eventTypeWhenRun":function(d){return "pri spustení"},
"eventTypeWhenSpawned":function(d){return "pri vytvorení"},
"eventTypeWhenTouched":function(d){return "pri dotyku"},
"eventTypeWhenUsed":function(d){return "pri použití"},
"forever":function(d){return "nekonečne"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Potiahnutím a umiestnením blokov v tejto skladačke ste vytvorili sadu inštrukcií v počítačovom jazyku zvanom JavaScript. Tento kód povie počítaču, čo má zobraziť na obrazovke. Všetko, čo vidíte a robíte v Minecrafte tiež začína riadkami v počítačovom kóde ako sú tieto."},
"getdataof":function(d){return "získať údaje o"},
"getnameof":function(d){return "získať meno"},
"houseSelectChooseFloorPlan":function(d){return "Vyberte pôdorys pre váš dom."},
"houseSelectEasy":function(d){return "Jednoduché"},
"houseSelectHard":function(d){return "Ťažké"},
"houseSelectLetsBuild":function(d){return "Postavme dom."},
"houseSelectMedium":function(d){return "Stredná"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Sem zadajte prepojenie na zdieľanie z aplikácie Hodina kódovania a kliknutím na tlačidlo \"Import\" skopírujte svoj kód do hry Minecraft"},
"importShareLinkHeader":function(d){return "Importovať prepojenie na zdieľanie"},
"inSlotNumber":function(d){return "na mieste číslo"},
"itemTypeBlock":function(d){return "blok"},
"itemTypeDecoration":function(d){return "dekorácia"},
"itemTypeMiscellaneous":function(d){return "rôzne"},
"itemTypeTool":function(d){return "nástroj"},
"items":function(d){return "predmety"},
"itemsOfBlockType":function(d){return "položky typu bloku"},
"level10FailureMessage":function(d){return "Zakry lávu, aby si mohol prejsť a na druhej strane vyťaž dva bloky železa."},
"level11FailureMessage":function(d){return "Ak je pred tebou láva, tak pred seba polož dlažobný kameň. To ti umožní bezpečne vyťažiť tento rad blokov."},
"level12FailureMessage":function(d){return "Vyťaž 3 bloky redstonu. Tu využiješ poznatky získané pri stavaní domu a podmienok \"ak\" pomocou ktorých si sa vyhýbal láve."},
"level13FailureMessage":function(d){return "Polož \"koľaje\" pozdĺž cesty, ktorá vedie od dverí tvojho domu k okraju mapy."},
"level1FailureMessage":function(d){return "Aby ste prišli k ovci, musíte použiť príkazy."},
"level1TooFewBlocksMessage":function(d){return "Skús použiť viac príkazov aby si sa dostal k ovci."},
"level2FailureMessage":function(d){return "Strom zotneš tak, že prídeš k nemu a použiješ príkaz \"znič blok\"."},
"level2TooFewBlocksMessage":function(d){return "Skús použiť viac príkazov na zoťatie stromu. Choď ku stromu a použi príkaz \"znič blok\"."},
"level3FailureMessage":function(d){return "Vlnu z oviec získaš tak, že podídeš ku každej ovci a použiješ príkaz \"ostrihaj\". Nezabudni použiť príkazy na zmenu smeru."},
"level3TooFewBlocksMessage":function(d){return "Skús použiť viac príkazov na získanie vlny z oviec. Choď ku každej a použi príkaz \"ostrihaj\"."},
"level4FailureMessage":function(d){return "Pri každom z troch stromov musíš použiť príkaz \"znič blok\"."},
"level5FailureMessage":function(d){return "Postav stenu položením blokov na pruh hliny. Pomocou ružového príkazu \"opakuj\" môžeš opakovane vykonať príkazy, ktoré do neho vložíš, napríklad \"polož blok\" a \"choď vpred\"."},
"level6FailureMessage":function(d){return "Úlohu vyrieš položením blokov na hlinený obrys domu."},
"level7FailureMessage":function(d){return "Použi príkaz \"zasaď plodinu\" na zasadenie plodín na každý štvorček zoranej zeme."},
"level8FailureMessage":function(d){return "Keď sa dotkneš creepera tak vybuchne. Prekĺzni sa okolo nich a vojdi do svojho domu."},
"level9FailureMessage":function(d){return "Nezabudni si osvetliť cestu aspoň dvoma fakľami a vyťažiť aspoň 2 kusy uhlia."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "maskované"},
"maskModeReplace":function(d){return "nahradiť"},
"minecraftBlock":function(d){return "blok"},
"minecraftNotConnected":function(d){return "Hra Minecraft nie je pripojená"},
"miniBlockBricks":function(d){return "tehly"},
"miniBlockBucketLava":function(d){return "vedro lávy"},
"miniBlockBucketWater":function(d){return "vedro vody"},
"miniBlockCarrots":function(d){return "mrkvy"},
"miniBlockCoal":function(d){return "uhlie"},
"miniBlockCobblestone":function(d){return "kameň"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "hlina"},
"miniBlockDirtCoarse":function(d){return "neplodná pôda"},
"miniBlockEgg":function(d){return "vajce"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "štrk"},
"miniBlockGunPowder":function(d){return "pušný prah"},
"miniBlockIngotGold":function(d){return "zlatý ingot"},
"miniBlockIngotIron":function(d){return "železný ingot"},
"miniBlockLapisLazuli":function(d){return "lazurit"},
"miniBlockLogAcacia":function(d){return "agátové brvno"},
"miniBlockLogBirch":function(d){return "brezové brvno"},
"miniBlockLogJungle":function(d){return "brvno tropického dreva"},
"miniBlockLogOak":function(d){return "dubové brvno"},
"miniBlockLogSpruce":function(d){return "smrekové brvno"},
"miniBlockMilk":function(d){return "mlieko"},
"miniBlockPlanksAcacia":function(d){return "agátové dosky"},
"miniBlockPlanksBirch":function(d){return "brezové dosky"},
"miniBlockPlanksJungle":function(d){return "dosky tropického dreva"},
"miniBlockPlanksOak":function(d){return "dubové dosky"},
"miniBlockPlanksSpruce":function(d){return "smrekové dosky"},
"miniBlockPoppy":function(d){return "mak"},
"miniBlockPotato":function(d){return "zemiak"},
"miniBlockRedstoneDust":function(d){return "prah červeného kameňa"},
"miniBlockSand":function(d){return "piesok"},
"miniBlockSandstone":function(d){return "pieskovec"},
"miniBlockSheep":function(d){return "ovca"},
"miniBlockWheat":function(d){return "pšenica"},
"miniBlockWool":function(d){return "vlna"},
"nextLevelMsg":function(d){return "Úloha "+craft_locale.v(d,"puzzleNumber")+" vyriešená. Gratulujeme!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "zničiť"},
"oldBlockHandlingsKeep":function(d){return "nechať"},
"oldBlockHandlingsReplace":function(d){return "nahradiť"},
"onBehalfOf":function(d){return "namiesto"},
"playerSelectChooseCharacter":function(d){return "Vyber si svoju postavu."},
"playerSelectChooseSelectButton":function(d){return "Vybrať"},
"playerSelectLetsGetStarted":function(d){return "Začíname."},
"quantity":function(d){return "množstvo"},
"reinfFeedbackMsg":function(d){return "Stlačením \"Hrať ďalej\" sa vrátiš k tvojej hre."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Spustiť agenta"},
"score":function(d){return "Skóre"},
"seconds":function(d){return "s"},
"selectChooseButton":function(d){return "Vybrať"},
"soundTypeBump":function(d){return "náraz"},
"soundTypeChickenBawk":function(d){return "kotkodák"},
"soundTypeChickenHurt":function(d){return "ranené kurča"},
"soundTypeCollectedBlock":function(d){return "zobratý blok"},
"soundTypeCowHuff":function(d){return "krava fučí"},
"soundTypeCowHurt":function(d){return "ranená krava"},
"soundTypeCowMoo":function(d){return "krátke mú"},
"soundTypeCowMooLong":function(d){return "dlhé múúúú"},
"soundTypeCreeperHiss":function(d){return "creeper fučí"},
"soundTypeDig_wood1":function(d){return "rúbanie"},
"soundTypeDoorOpen":function(d){return "otvorenie dverí"},
"soundTypeExplode":function(d){return "vybuchni"},
"soundTypeFailure":function(d){return "nepodarený level"},
"soundTypeFall":function(d){return "pád"},
"soundTypeFizz":function(d){return "šum"},
"soundTypeFuse":function(d){return "zapálenie"},
"soundTypeIronGolemHit":function(d){return "úder železného golema"},
"soundTypeMetalWhack":function(d){return "kovová rana"},
"soundTypeMinecart":function(d){return "banský vozík"},
"soundTypePlaceBlock":function(d){return "miesto bloku"},
"soundTypePunch":function(d){return "úder"},
"soundTypeSheepBaa":function(d){return "mééé"},
"soundTypeStepFarmland":function(d){return "krok po pôde"},
"soundTypeStepGrass":function(d){return "krok po tráve"},
"soundTypeStepGravel":function(d){return "krok po štrku"},
"soundTypeStepStone":function(d){return "krok po kameni"},
"soundTypeStepWood":function(d){return "krok v lese"},
"soundTypeSuccess":function(d){return "úspešný level"},
"soundTypeZombieBrains":function(d){return "ston zombíka"},
"soundTypeZombieGroan":function(d){return "zavrčanie zombíka"},
"soundTypeZombieHurt":function(d){return "udretý zombík"},
"target":function(d){return "cieľ"},
"testModeAll":function(d){return "všetky"},
"testModeMasked":function(d){return "maskované"},
"tileData":function(d){return "údaje dlaždice"},
"timeDay":function(d){return "deň"},
"timeLong":function(d){return "dlhý"},
"timeMedium":function(d){return "stredný"},
"timeNight":function(d){return "noc"},
"timeRandom":function(d){return "náhodný"},
"timeSet":function(d){return "nastaviť čas"},
"timeShort":function(d){return "krátky"},
"timeVeryLong":function(d){return "veľmi dlhý"},
"timeVeryShort":function(d){return "veľmi krátky"},
"to":function(d){return "na"},
"toSlotNumber":function(d){return "na miesto číslo"},
"tooManyBlocksFail":function(d){return "Hlavolam "+craft_locale.v(d,"puzzleNumber")+" vyriešený. Gratulujeme! Je ho tiež možné dokončiť s "+craft_locale.p(d,"numBlocks",0,"sk",{"one":"1 blokom","other":craft_locale.n(d,"numBlocks")+" blokmi"})+"."},
"turnRandom":function(d){return "náhodne otoč"},
"useArrowKeys":function(d){return "Nemusíte pridávať žiadne bloky. Pohybujte sa pomocou šípok a používajte predmety stláčaním medzerníka alebo ťukaním na hraciu plochu."},
"weather":function(d){return "počasie"},
"weatherTypeClear":function(d){return "jasné"},
"weatherTypeRain":function(d){return "dážď"},
"weatherTypeThunder":function(d){return "thunder"}};