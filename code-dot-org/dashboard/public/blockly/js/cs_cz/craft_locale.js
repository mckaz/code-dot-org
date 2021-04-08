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
"absolute":function(d){return "absolutní hodnota"},
"agentGenericFailureMessage":function(d){return "Pokračujte v psaní kódu! Nezapomeňte využívat pomoc agenta."},
"agentTooFewBlocksFailureMessage":function(d){return "Zkuste přidat vždy jen jeden blok, abyste přesunuli agenta na správné místo."},
"at":function(d){return "v"},
"agentDiamondPathCongrats":function(d){return "Blahopřejeme, našli jste diamantovou cestu! Zatím jste sebrali "+craft_locale.p(d,"count",0,"cs",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"!"},
"blockActionAdd":function(d){return "přidej"},
"blockActionAttack":function(d){return "zaútočit"},
"blockActionClone":function(d){return "klonovat bloky"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "sbírat"},
"blockActionCollectAll":function(d){return "sebrat vše"},
"blockActionDestroyEntity":function(d){return "zmizet"},
"blockActionDetect":function(d){return "detekovat"},
"blockActionDetectRedstone":function(d){return "detekovat rudit"},
"blockActionDrop":function(d){return "upustit"},
"blockActionDropAll":function(d){return "upustit vše"},
"blockActionExecute":function(d){return "vykonat příkaz"},
"blockActionExplodeEntity":function(d){return "explodovat"},
"blockActionFill":function(d){return "vyplnit"},
"blockActionFlashEntity":function(d){return "blesk"},
"blockActionGetItemCount":function(d){return "získej počet položek"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "get item detail"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "give"},
"blockActionInspect":function(d){return "zkontrolovat"},
"blockActionInspectData":function(d){return "zkontrolovat data"},
"blockActionKill":function(d){return "zabít cíl"},
"blockActionMove":function(d){return "posun"},
"blockActionMoveAway":function(d){return "posuň dál od"},
"blockActionMoveForward":function(d){return "posunout vpřed"},
"blockActionMoveRandom":function(d){return "posuň náhodně"},
"blockActionMoveTo":function(d){return "posuň k"},
"blockActionMoveToward":function(d){return "posuň o krok k"},
"blockActionPlaySound":function(d){return "přehraj zvuk"},
"blockActionRepeat":function(d){return "opakuj"},
"blockActionRepeatRandom":function(d){return "opakuj náhodně"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "vytvořit"},
"blockActionSummon":function(d){return "vyvolat"},
"blockActionTeleport":function(d){return "teleportovat cíl"},
"blockActionTeleportToPlayer":function(d){return "teleportovat k hráči"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "bodovat"},
"blockActionTransfer":function(d){return "přenést"},
"blockActionWait":function(d){return "čekej"},
"blockActionWith":function(d){return "s"},
"blockData":function(d){return "data bloku"},
"blockDestroyBlock":function(d){return "znič blok"},
"blockIf":function(d){return "Pokud"},
"blockIfLavaAhead":function(d){return "pokud stojíš před lávou"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "pohyb"},
"blockMoveBackward":function(d){return "posunout zpět"},
"blockMoveForward":function(d){return "posunout vpřed"},
"blockPlace":function(d){return "polož"},
"blockPlaceTorch":function(d){return "umísti pochodeň"},
"blockPlaceXAheadAhead":function(d){return "před sebe"},
"blockPlaceXAheadPlace":function(d){return "polož"},
"blockPlaceXPlace":function(d){return "polož"},
"blockPlantCrop":function(d){return "zasaď plodinu"},
"blockShear":function(d){return "ostříhej"},
"blockTill":function(d){return "zorat"},
"blockTillSoil":function(d){return "až k hlíně"},
"blockTurn":function(d){return "otočit"},
"blockTurnLeft":function(d){return "otočit vlevo"},
"blockTurnRight":function(d){return "otočit vpravo"},
"blockType":function(d){return "typ bloku"},
"blockTypeBedrock":function(d){return "skalní podloží"},
"blockTypeBricks":function(d){return "cihly"},
"blockTypeClay":function(d){return "jíl"},
"blockTypeClayHardened":function(d){return "tvrdý jíl"},
"blockTypeCobblestone":function(d){return "dlažební kámen"},
"blockTypeDirt":function(d){return "hlína"},
"blockTypeDirtCoarse":function(d){return "hrubá hlína"},
"blockTypeDoorIron":function(d){return "železné dveře"},
"blockTypeEmpty":function(d){return "prázdný"},
"blockTypeFarmlandWet":function(d){return "zemědělská půda"},
"blockTypeGlass":function(d){return "sklo"},
"blockTypeGlowstone":function(d){return "zářivý kámen"},
"blockTypeGrass":function(d){return "tráva"},
"blockTypeGravel":function(d){return "štěrk"},
"blockTypeLava":function(d){return "láva"},
"blockTypeLogAcacia":function(d){return "akátová kláda"},
"blockTypeLogBirch":function(d){return "březová kláda"},
"blockTypeLogJungle":function(d){return "sekvojová kláda"},
"blockTypeLogOak":function(d){return "dubová kláda"},
"blockTypeLogSpruce":function(d){return "smrková kláda"},
"blockTypeOreCoal":function(d){return "uhelná ruda"},
"blockTypeOreDiamond":function(d){return "diamantová ruda"},
"blockTypeOreEmerald":function(d){return "smaragdová ruda"},
"blockTypeOreGold":function(d){return "zlatá ruda"},
"blockTypeOreIron":function(d){return "železná ruda"},
"blockTypeOreLapis":function(d){return "lapisová ruda"},
"blockTypeOreRedstone":function(d){return "ruditová ruda"},
"blockTypePlanksAcacia":function(d){return "akátová prkna"},
"blockTypePlanksBirch":function(d){return "březová prkna"},
"blockTypePlanksJungle":function(d){return "sekvojová prkna"},
"blockTypePlanksOak":function(d){return "dubová prkna"},
"blockTypePlanksSpruce":function(d){return "smrková prkna"},
"blockTypePressurePlateUp":function(d){return "nášlapná deska"},
"blockTypeRail":function(d){return "koleje"},
"blockTypeRailsRedstoneTorch":function(d){return "ruditová louč"},
"blockTypeRedstoneWire":function(d){return "ruditový drát"},
"blockTypeSand":function(d){return "písek"},
"blockTypeSandstone":function(d){return "pískovec"},
"blockTypeStone":function(d){return "kámen"},
"blockTypeTnt":function(d){return "tnt"},
"blockTypeTree":function(d){return "strom"},
"blockTypeWater":function(d){return "voda"},
"blockTypeWool":function(d){return "vlna"},
"blockTypeWoolBlue":function(d){return "modrá vlna"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "oranžová vlna"},
"blockTypeWoolPink":function(d){return "růžová vlna"},
"blockTypeWoolRed":function(d){return "červená vlna"},
"blockTypeWoolYellow":function(d){return "žlutá vlna"},
"blockWhileXAheadAhead":function(d){return "před sebe"},
"blockWhileXAheadDo":function(d){return "proveď"},
"blockWhileXAheadWhile":function(d){return "dokud"},
"cancel":function(d){return "Storno"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "pohyb"},
"cloneModeNormal":function(d){return "normální"},
"connectToCodeConnection":function(d){return "Ke spuštění tohoto projektu ve hře Minecraft: Education Edition použijte aplikaci Připojení kódu."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "vzad"},
"directionDown":function(d){return "dolů"},
"directionForward":function(d){return "vpřed"},
"directionLeft":function(d){return "vlevo"},
"directionMiddle":function(d){return "střed"},
"directionRight":function(d){return "vpravo"},
"directionUp":function(d){return "nahoru"},
"downloadButton":function(d){return "Stáhnout"},
"entityType":function(d){return "typ entity"},
"entityTypeChicken":function(d){return "slepice"},
"entityTypeCow":function(d){return "kráva"},
"entityTypeCreeper":function(d){return "popínavá rostlina"},
"entityTypeIronGolem":function(d){return "železný golem"},
"entityTypePlayer":function(d){return "hráč"},
"entityTypeSheep":function(d){return "ovce"},
"entityTypeZombie":function(d){return "zombík"},
"eventTypeWhenAttacked":function(d){return "při útoku"},
"eventTypeWhenDay":function(d){return "při východu slunce"},
"eventTypeWhenNight":function(d){return "při západu slunce"},
"eventTypeWhenRun":function(d){return "při spuštění"},
"eventTypeWhenSpawned":function(d){return "při stvoření"},
"eventTypeWhenTouched":function(d){return "při dotyku"},
"eventTypeWhenUsed":function(d){return "při použití"},
"forever":function(d){return "navždy"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Přetažením a umístěním bloků do této hádanky, jsi vytvořil sadu instrukcí v počítačovém jazyce, který se nazývá JavaScript. Tento kód říká počítači, co se zobrazí na obrazovce. Vše, co vidíš a děláš v Minecraftu, také začíná řádky počítačového kódu, jako jsou tyto."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Vyber si plán tvého domu."},
"houseSelectEasy":function(d){return "Snadný"},
"houseSelectHard":function(d){return "Těžký"},
"houseSelectLetsBuild":function(d){return "Pojďme postavit dům."},
"houseSelectMedium":function(d){return "Střední"},
"import":function(d){return "Importovat"},
"importShareLinkBody":function(d){return "Zadejte sem svůj odkaz pro sdílení z webu Hodina kódu a klikněte na tlačítko \"Importovat\" pro zkopírování vašeho kódu do Minecraftu."},
"importShareLinkHeader":function(d){return "Importovat odkaz pro sdílení"},
"inSlotNumber":function(d){return "na pozici číslo"},
"itemTypeBlock":function(d){return "blok"},
"itemTypeDecoration":function(d){return "dekorace"},
"itemTypeMiscellaneous":function(d){return "různé"},
"itemTypeTool":function(d){return "nástroj"},
"items":function(d){return "předmět(y)"},
"itemsOfBlockType":function(d){return "předmět(y) typu blok"},
"level10FailureMessage":function(d){return "Zakryjte lávu, abyste po ní mohli přejít. Potom vytěžte dva bloky železa na druhé straně."},
"level11FailureMessage":function(d){return "Pokud je před tebou láva, polož před sebe dlažební kámen. To ti umožní bezpečně vytěžit tento řádek bloků."},
"level12FailureMessage":function(d){return "Vytěž 3 ruditové bloky. Zde využiješ co už znáš ze stavění domu a používání podmíněného příkazu “pokud“ k vyhnutí se lávě."},
"level13FailureMessage":function(d){return "Položte \"koleje\" podél hliněné cesty, která vede od vašeho domu k okraji mapy."},
"level1FailureMessage":function(d){return "K ovci dojdeš pomocí příkazů."},
"level1TooFewBlocksMessage":function(d){return "Zkus použít více příkazů, aby ses dostal k ovci."},
"level2FailureMessage":function(d){return "Strom porazíš tak, že přijdeš až k němu a použiješ příkaz \"znič blok\"."},
"level2TooFewBlocksMessage":function(d){return "Zkus použít více příkazů pro poražení stromu. Jdi až ke kmeni a použij příkaz \"znič blok\"."},
"level3FailureMessage":function(d){return "K získání vlny z obou ovcí dojdi ke každé z nich a použij příkaz „ostříhej“. Nezapomeň použít příkazy k otáčení."},
"level3TooFewBlocksMessage":function(d){return "Zkus použít více příkazů k získání vlny z obou ovcí. Přijď ke každé z nich a použij příkaz \"ostříhej\"."},
"level4FailureMessage":function(d){return "Musíš použít příkaz „znič blok“ na každý ze tří kmenů stromů."},
"level5FailureMessage":function(d){return "Postav zeď položením bloků na pruh hlíny. Růžový příkaz „opakuj“ opakovaně provádí příkazy v něm umístěné, například „polož blok“ a „jdi vpřed“."},
"level6FailureMessage":function(d){return "Pro vyřešení úkolu polož bloky na hliněný obrys domu."},
"level7FailureMessage":function(d){return "Použij příkaz „zasaď plodinu“ k umístění plodin na každý čtvereček pole."},
"level8FailureMessage":function(d){return "Když se dotkneš popínavé rostliny exploduje. Proklouzni kolem nich a vejdi do svého domu."},
"level9FailureMessage":function(d){return "Nezapomeň umístit 2 pochodně k osvětlení cesty, a natěžit aspoň 2 kusy uhlí."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "maskováno"},
"maskModeReplace":function(d){return "nahradit"},
"minecraftBlock":function(d){return "blok"},
"minecraftNotConnected":function(d){return "Minecraft není připojen"},
"miniBlockBricks":function(d){return "cihly"},
"miniBlockBucketLava":function(d){return "vědro lávy"},
"miniBlockBucketWater":function(d){return "vědro vody"},
"miniBlockCarrots":function(d){return "mrkev"},
"miniBlockCoal":function(d){return "uhlí"},
"miniBlockCobblestone":function(d){return "dlažební kámen"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "hlína"},
"miniBlockDirtCoarse":function(d){return "hrubá hlína"},
"miniBlockEgg":function(d){return "vejce"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "štěrk"},
"miniBlockGunPowder":function(d){return "střelný prach"},
"miniBlockIngotGold":function(d){return "zlatý prut"},
"miniBlockIngotIron":function(d){return "železný prut"},
"miniBlockLapisLazuli":function(d){return "lazurit"},
"miniBlockLogAcacia":function(d){return "akátová kláda"},
"miniBlockLogBirch":function(d){return "březová kláda"},
"miniBlockLogJungle":function(d){return "sekvojová kláda"},
"miniBlockLogOak":function(d){return "dubová kláda"},
"miniBlockLogSpruce":function(d){return "smrková kláda"},
"miniBlockMilk":function(d){return "mléko"},
"miniBlockPlanksAcacia":function(d){return "akátová prkna"},
"miniBlockPlanksBirch":function(d){return "březová prkna"},
"miniBlockPlanksJungle":function(d){return "sekvojová prkna"},
"miniBlockPlanksOak":function(d){return "dubová prkna"},
"miniBlockPlanksSpruce":function(d){return "smrková prkna"},
"miniBlockPoppy":function(d){return "mák"},
"miniBlockPotato":function(d){return "brambora"},
"miniBlockRedstoneDust":function(d){return "prach červeného kamene"},
"miniBlockSand":function(d){return "písek"},
"miniBlockSandstone":function(d){return "pískovec"},
"miniBlockSheep":function(d){return "ovce"},
"miniBlockWheat":function(d){return "pšenice"},
"miniBlockWool":function(d){return "vlna"},
"nextLevelMsg":function(d){return "Hádanka "+craft_locale.v(d,"puzzleNumber")+" dokončena. Blahopřejeme!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "zničit"},
"oldBlockHandlingsKeep":function(d){return "zachovat"},
"oldBlockHandlingsReplace":function(d){return "nahradit"},
"onBehalfOf":function(d){return "jménem"},
"playerSelectChooseCharacter":function(d){return "Vyberte si svou postavu."},
"playerSelectChooseSelectButton":function(d){return "Vybrat"},
"playerSelectLetsGetStarted":function(d){return "Začněme."},
"quantity":function(d){return "množství"},
"reinfFeedbackMsg":function(d){return "Můžeš stisknout \"Hraj dál\" a vrátíš se do své hry."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Spustit agenta"},
"score":function(d){return "Skóre"},
"seconds":function(d){return "sekund(y)"},
"selectChooseButton":function(d){return "Vyber"},
"soundTypeBump":function(d){return "náraz"},
"soundTypeChickenBawk":function(d){return "slepičí kvokání"},
"soundTypeChickenHurt":function(d){return "slepičí výkřik"},
"soundTypeCollectedBlock":function(d){return "sběr bloků"},
"soundTypeCowHuff":function(d){return "vztek krávy"},
"soundTypeCowHurt":function(d){return "výkřik krávy"},
"soundTypeCowMoo":function(d){return "kraví bučení"},
"soundTypeCowMooLong":function(d){return "kravské bučení"},
"soundTypeCreeperHiss":function(d){return "syčení creepera"},
"soundTypeDig_wood1":function(d){return "zlomení dřeva"},
"soundTypeDoorOpen":function(d){return "otevření dveří"},
"soundTypeExplode":function(d){return "explodovat"},
"soundTypeFailure":function(d){return "neúspěšná úroveň"},
"soundTypeFall":function(d){return "pád"},
"soundTypeFizz":function(d){return "syčení"},
"soundTypeFuse":function(d){return "sloučení"},
"soundTypeIronGolemHit":function(d){return "úder železného golema"},
"soundTypeMetalWhack":function(d){return "kovová rána"},
"soundTypeMinecart":function(d){return "důlní vozík"},
"soundTypePlaceBlock":function(d){return "umístění bloku"},
"soundTypePunch":function(d){return "úder"},
"soundTypeSheepBaa":function(d){return "ovčí bečení"},
"soundTypeStepFarmland":function(d){return "krok na poli"},
"soundTypeStepGrass":function(d){return "krok na trávě"},
"soundTypeStepGravel":function(d){return "krok na štěrku"},
"soundTypeStepStone":function(d){return "krok na kámen"},
"soundTypeStepWood":function(d){return "krok na dřevu"},
"soundTypeSuccess":function(d){return "úspěšná úroveň"},
"soundTypeZombieBrains":function(d){return "zombie sténání"},
"soundTypeZombieGroan":function(d){return "zombie zavrčení"},
"soundTypeZombieHurt":function(d){return "zombie výkřik"},
"target":function(d){return "cíl"},
"testModeAll":function(d){return "vše"},
"testModeMasked":function(d){return "maskováno"},
"tileData":function(d){return "data dlaždice"},
"timeDay":function(d){return "den"},
"timeLong":function(d){return "dlouho"},
"timeMedium":function(d){return "středně"},
"timeNight":function(d){return "noc"},
"timeRandom":function(d){return "náhodně"},
"timeSet":function(d){return "nastavit čas na"},
"timeShort":function(d){return "krátce"},
"timeVeryLong":function(d){return "velice dlouho"},
"timeVeryShort":function(d){return "velice krátce"},
"to":function(d){return "na"},
"toSlotNumber":function(d){return "na pozici číslo"},
"tooManyBlocksFail":function(d){return "Hádanka "+craft_locale.v(d,"puzzleNumber")+" dokončena. Blahopřejeme! Je možné ji dokončit s "+craft_locale.p(d,"numBlocks",0,"cs",{"one":"1 blokem","other":craft_locale.n(d,"numBlocks")+" bloky"})+"."},
"turnRandom":function(d){return "otoč náhodně"},
"useArrowKeys":function(d){return "Nemusíte přidávat žádné bloky! Stačí vám šipky pro pohyb a mezerník nebo klepnutí na herní plochu pro použití předmětu."},
"weather":function(d){return "počasí"},
"weatherTypeClear":function(d){return "jasno"},
"weatherTypeRain":function(d){return "déšť"},
"weatherTypeThunder":function(d){return "bouřka"}};