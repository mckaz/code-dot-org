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
"absolute":function(d){return "absolut"},
"agentGenericFailureMessage":function(d){return "Fortsätt koda! Kom ihåg att ta hjälp av agenten."},
"agentTooFewBlocksFailureMessage":function(d){return "Lägg till ett block i taget för att få agenten till rätt plats."},
"at":function(d){return "på"},
"agentDiamondPathCongrats":function(d){return "Grattis, du har hittat diamantvägen! Du har samlat "+craft_locale.p(d,"count",0,"sv",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" hittills!"},
"blockActionAdd":function(d){return "lägg till"},
"blockActionAttack":function(d){return "attackera"},
"blockActionClone":function(d){return "klona block"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "samla in"},
"blockActionCollectAll":function(d){return "samla in alla"},
"blockActionDestroyEntity":function(d){return "försvinn"},
"blockActionDetect":function(d){return "leta"},
"blockActionDetectRedstone":function(d){return "leta rödsten"},
"blockActionDrop":function(d){return "släpp"},
"blockActionDropAll":function(d){return "släpp allt"},
"blockActionExecute":function(d){return "kör kommando"},
"blockActionExplodeEntity":function(d){return "explodera"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "blinka"},
"blockActionGetItemCount":function(d){return "läs antal föremål"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "läs föremålsdetaljer"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "ge"},
"blockActionInspect":function(d){return "inspektera"},
"blockActionInspectData":function(d){return "inspektera data"},
"blockActionKill":function(d){return "döda måltavla"},
"blockActionMove":function(d){return "flytta"},
"blockActionMoveAway":function(d){return "gå bort från"},
"blockActionMoveForward":function(d){return "gå framåt"},
"blockActionMoveRandom":function(d){return "gå slumpmässigt"},
"blockActionMoveTo":function(d){return "gå till"},
"blockActionMoveToward":function(d){return "gå ett steg framåt"},
"blockActionPlaySound":function(d){return "spela upp ljud"},
"blockActionRepeat":function(d){return "upprepa"},
"blockActionRepeatRandom":function(d){return "upprepa slumpmässigt"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "spawna"},
"blockActionSummon":function(d){return "åkalla"},
"blockActionTeleport":function(d){return "teleportera måltavla"},
"blockActionTeleportToPlayer":function(d){return "teleportera till spelare"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "till poängen"},
"blockActionTransfer":function(d){return "överför"},
"blockActionWait":function(d){return "vänta"},
"blockActionWith":function(d){return "med"},
"blockData":function(d){return "blockdata"},
"blockDestroyBlock":function(d){return "förstör block"},
"blockIf":function(d){return "om"},
"blockIfLavaAhead":function(d){return "om lava framför"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "flytta"},
"blockMoveBackward":function(d){return "flytta bakåt"},
"blockMoveForward":function(d){return "gå framåt"},
"blockPlace":function(d){return "placera"},
"blockPlaceTorch":function(d){return "placera fackla"},
"blockPlaceXAheadAhead":function(d){return "framåt"},
"blockPlaceXAheadPlace":function(d){return "placera"},
"blockPlaceXPlace":function(d){return "placera"},
"blockPlantCrop":function(d){return "plantera gröda"},
"blockShear":function(d){return "sax"},
"blockTill":function(d){return "bearbeta"},
"blockTillSoil":function(d){return "plöj jord"},
"blockTurn":function(d){return "sväng"},
"blockTurnLeft":function(d){return "sväng vänster"},
"blockTurnRight":function(d){return "sväng höger"},
"blockType":function(d){return "blocktyp"},
"blockTypeBedrock":function(d){return "berggrund"},
"blockTypeBricks":function(d){return "tegelstenar"},
"blockTypeClay":function(d){return "lera"},
"blockTypeClayHardened":function(d){return "härdad lera"},
"blockTypeCobblestone":function(d){return "kullersten"},
"blockTypeDirt":function(d){return "jord"},
"blockTypeDirtCoarse":function(d){return "grov jord"},
"blockTypeDoorIron":function(d){return "järndörr"},
"blockTypeEmpty":function(d){return "töm"},
"blockTypeFarmlandWet":function(d){return "åkerjord"},
"blockTypeGlass":function(d){return "glas"},
"blockTypeGlowstone":function(d){return "glödsten"},
"blockTypeGrass":function(d){return "gräs"},
"blockTypeGravel":function(d){return "grus"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "akaciastock"},
"blockTypeLogBirch":function(d){return "björkstock"},
"blockTypeLogJungle":function(d){return "djungelträstock"},
"blockTypeLogOak":function(d){return "ekstock"},
"blockTypeLogSpruce":function(d){return "granstock"},
"blockTypeOreCoal":function(d){return "kolmalm"},
"blockTypeOreDiamond":function(d){return "diamantmalm"},
"blockTypeOreEmerald":function(d){return "smaragdmalm"},
"blockTypeOreGold":function(d){return "guldmalm"},
"blockTypeOreIron":function(d){return "järnmalm"},
"blockTypeOreLapis":function(d){return "lasurmalm"},
"blockTypeOreRedstone":function(d){return "eldstensmalm"},
"blockTypePlanksAcacia":function(d){return "akaciaplankor"},
"blockTypePlanksBirch":function(d){return "björkplankor"},
"blockTypePlanksJungle":function(d){return "djungelplankor"},
"blockTypePlanksOak":function(d){return "ekplankor"},
"blockTypePlanksSpruce":function(d){return "granplankor"},
"blockTypePressurePlateUp":function(d){return "tryckplatta"},
"blockTypeRail":function(d){return "räls"},
"blockTypeRailsRedstoneTorch":function(d){return "rödstensfackla"},
"blockTypeRedstoneWire":function(d){return "rödstenstråd"},
"blockTypeSand":function(d){return "sand"},
"blockTypeSandstone":function(d){return "sandsten"},
"blockTypeStone":function(d){return "sten"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "träd"},
"blockTypeWater":function(d){return "vatten"},
"blockTypeWool":function(d){return "ull"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "framåt"},
"blockWhileXAheadDo":function(d){return "utför"},
"blockWhileXAheadWhile":function(d){return "medan"},
"cancel":function(d){return "Avbryt"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "flytta"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "Använd programmet Kodanslutning för att köra det här projektet i Minecraft: Education Edition."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "bakåt"},
"directionDown":function(d){return "ner"},
"directionForward":function(d){return "framåt"},
"directionLeft":function(d){return "vänster"},
"directionMiddle":function(d){return "mitten"},
"directionRight":function(d){return "höger"},
"directionUp":function(d){return "upp"},
"downloadButton":function(d){return "Ladda ned"},
"entityType":function(d){return "enhetstyp"},
"entityTypeChicken":function(d){return "höna"},
"entityTypeCow":function(d){return "ko"},
"entityTypeCreeper":function(d){return "smygare"},
"entityTypeIronGolem":function(d){return "järngolem"},
"entityTypePlayer":function(d){return "spelare"},
"entityTypeSheep":function(d){return "får"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "när attackerad"},
"eventTypeWhenDay":function(d){return "när dag"},
"eventTypeWhenNight":function(d){return "när natt"},
"eventTypeWhenRun":function(d){return "vid start"},
"eventTypeWhenSpawned":function(d){return "när spawnad"},
"eventTypeWhenTouched":function(d){return "när vidrörd"},
"eventTypeWhenUsed":function(d){return "när använd"},
"forever":function(d){return "alltid"},
"from":function(d){return "från"},
"generatedCodeDescription":function(d){return "Genom att dra och placera block i det här pusslet har du skapat instruktioner i datorspråket Javascript. Den här koden talar om för datorer vad de ska visa på skärmen. Allt du ser och gör i Minecraft börjar med datorkod som den här."},
"getdataof":function(d){return "läs data från"},
"getnameof":function(d){return "läs namn från"},
"houseSelectChooseFloorPlan":function(d){return "Välj planritning för ditt hus."},
"houseSelectEasy":function(d){return "Lätt"},
"houseSelectHard":function(d){return "Svårt"},
"houseSelectLetsBuild":function(d){return "Nu bygger vi ett hus."},
"houseSelectMedium":function(d){return "Mellan"},
"import":function(d){return "Importera"},
"importShareLinkBody":function(d){return "Ange din delningslänk från En timme med kod här och klicka på \"Importera\" för att kopiera din kod till Minecraft"},
"importShareLinkHeader":function(d){return "Importera en delningslänk"},
"inSlotNumber":function(d){return "på plats nummer"},
"itemTypeBlock":function(d){return "Block"},
"itemTypeDecoration":function(d){return "dekoration"},
"itemTypeMiscellaneous":function(d){return "diverse"},
"itemTypeTool":function(d){return "verktyg"},
"items":function(d){return "föremål"},
"itemsOfBlockType":function(d){return "föremål av blocktyp"},
"level10FailureMessage":function(d){return "Täck lavan för att kunna gå över, och bryt sedan två av järnblocken på andra sidan."},
"level11FailureMessage":function(d){return "Se till att placera kullersten längre fram om det finns lava där. Det låter dig bryta resurserna säkert."},
"level12FailureMessage":function(d){return "Bryt 3 eldstensblock. Det här kombinerar det du lärt dig av att bygga ditt hur med att använda \"om\"-satser för att undvika att falla ned i lava."},
"level13FailureMessage":function(d){return "Placera \"räls\" längs jordvägen från din dörr till kartans utkant."},
"level1FailureMessage":function(d){return "Du måste använda kommandon för att gå till fåret."},
"level1TooFewBlocksMessage":function(d){return "Försök använda fler kommandon för att gå till fåret."},
"level2FailureMessage":function(d){return "För att hugga ned ett träd, gå fram till stammen och använd kommandot \"förstör block\"."},
"level2TooFewBlocksMessage":function(d){return "Försök använda fler kommandon för att hugga ned trädet. Gå fram till stammen och använd kommandot \"förstör block\"\"."},
"level3FailureMessage":function(d){return "För att samla ull från båda får ska du gå fram till vart och ett och använda kommandot \"klipp\". Kom ihåg att använda turkommandon för att komma till fåret."},
"level3TooFewBlocksMessage":function(d){return "Försök använda fler kommandon för att samla ull från båda får. Gå fram till vart och ett och använd kommandot \"klipp\"."},
"level4FailureMessage":function(d){return "Du måste använda kommandot \"förstör block\" på alla tre stammar."},
"level5FailureMessage":function(d){return "Placera dina block på jordlinjen för att bygga en mur. Det rosa kommandot \"upprepa\" kommer köra alla kommandon du placerar i det, till exempel \"placera block\" och \"gå framåt\"."},
"level6FailureMessage":function(d){return "Placera block på jordgränsen utanför huset för att klara pusslet."},
"level7FailureMessage":function(d){return "Använd kommandot \"plantera\" för att placera grödor på varje bit plöjd jord."},
"level8FailureMessage":function(d){return "Om du nuddar en smygare kommer den explodera. Smyg förbi dem och ta dig in i ditt hus."},
"level9FailureMessage":function(d){return "Glöm inte att placera minst 2 facklor för att lysa upp vägen och bryt minst 2 kol."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "maskerad"},
"maskModeReplace":function(d){return "ersätt"},
"minecraftBlock":function(d){return "Block"},
"minecraftNotConnected":function(d){return "Minecraft är inte anslutet"},
"miniBlockBricks":function(d){return "tegelstenar"},
"miniBlockBucketLava":function(d){return "lavahink"},
"miniBlockBucketWater":function(d){return "vattenhink"},
"miniBlockCarrots":function(d){return "morötter"},
"miniBlockCoal":function(d){return "kol"},
"miniBlockCobblestone":function(d){return "kullersten"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "jord"},
"miniBlockDirtCoarse":function(d){return "grov jord"},
"miniBlockEgg":function(d){return "ägg"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "grus"},
"miniBlockGunPowder":function(d){return "krut"},
"miniBlockIngotGold":function(d){return "guldtacka"},
"miniBlockIngotIron":function(d){return "järntacka"},
"miniBlockLapisLazuli":function(d){return "lasursten"},
"miniBlockLogAcacia":function(d){return "akaciastock"},
"miniBlockLogBirch":function(d){return "björkstock"},
"miniBlockLogJungle":function(d){return "djungelträstock"},
"miniBlockLogOak":function(d){return "ekstock"},
"miniBlockLogSpruce":function(d){return "granstock"},
"miniBlockMilk":function(d){return "mjölk"},
"miniBlockPlanksAcacia":function(d){return "akaciaplankor"},
"miniBlockPlanksBirch":function(d){return "björkplankor"},
"miniBlockPlanksJungle":function(d){return "djungelplankor"},
"miniBlockPlanksOak":function(d){return "ekplankor"},
"miniBlockPlanksSpruce":function(d){return "granplankor"},
"miniBlockPoppy":function(d){return "vallmo"},
"miniBlockPotato":function(d){return "potatis"},
"miniBlockRedstoneDust":function(d){return "rödstenspulver"},
"miniBlockSand":function(d){return "sand"},
"miniBlockSandstone":function(d){return "sandsten"},
"miniBlockSheep":function(d){return "får"},
"miniBlockWheat":function(d){return "vete"},
"miniBlockWool":function(d){return "ull"},
"nextLevelMsg":function(d){return "Pussel "+craft_locale.v(d,"puzzleNumber")+" avklarat. Grattis!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "förstör"},
"oldBlockHandlingsKeep":function(d){return "behåll"},
"oldBlockHandlingsReplace":function(d){return "ersätt"},
"onBehalfOf":function(d){return "åt"},
"playerSelectChooseCharacter":function(d){return "Välj karaktär."},
"playerSelectChooseSelectButton":function(d){return "Välj"},
"playerSelectLetsGetStarted":function(d){return "Nu börjar vi."},
"quantity":function(d){return "antal"},
"reinfFeedbackMsg":function(d){return "Du kan trycka på \"Fortsätt spela\" för att återgå till spelet."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Kör agent"},
"score":function(d){return "Poäng"},
"seconds":function(d){return "sekund(er)"},
"selectChooseButton":function(d){return "Välj"},
"soundTypeBump":function(d){return "duns"},
"soundTypeChickenBawk":function(d){return "höna kacklar"},
"soundTypeChickenHurt":function(d){return "höna skadad"},
"soundTypeCollectedBlock":function(d){return "plocka upp block"},
"soundTypeCowHuff":function(d){return "ko frustar"},
"soundTypeCowHurt":function(d){return "ko skadad"},
"soundTypeCowMoo":function(d){return "ko muu"},
"soundTypeCowMooLong":function(d){return "ko muuu"},
"soundTypeCreeperHiss":function(d){return "creeper väser"},
"soundTypeDig_wood1":function(d){return "trä går sönder"},
"soundTypeDoorOpen":function(d){return "dörr öppnas"},
"soundTypeExplode":function(d){return "explodera"},
"soundTypeFailure":function(d){return "bana misslyckades"},
"soundTypeFall":function(d){return "ramla"},
"soundTypeFizz":function(d){return "brus"},
"soundTypeFuse":function(d){return "stubin"},
"soundTypeIronGolemHit":function(d){return "järngolem slår"},
"soundTypeMetalWhack":function(d){return "metallslag"},
"soundTypeMinecart":function(d){return "gruvvagn"},
"soundTypePlaceBlock":function(d){return "placera block"},
"soundTypePunch":function(d){return "slå"},
"soundTypeSheepBaa":function(d){return "får bää"},
"soundTypeStepFarmland":function(d){return "fotsteg åkerjord"},
"soundTypeStepGrass":function(d){return "fotsteg gräs"},
"soundTypeStepGravel":function(d){return "fotsteg grus"},
"soundTypeStepStone":function(d){return "fotsteg sten"},
"soundTypeStepWood":function(d){return "fotsteg trä"},
"soundTypeSuccess":function(d){return "bana avklarad"},
"soundTypeZombieBrains":function(d){return "zombie stönar"},
"soundTypeZombieGroan":function(d){return "zombie morrar"},
"soundTypeZombieHurt":function(d){return "zombie skadad"},
"target":function(d){return "måltavla"},
"testModeAll":function(d){return "alla"},
"testModeMasked":function(d){return "maskerad"},
"tileData":function(d){return "rutdata"},
"timeDay":function(d){return "dag"},
"timeLong":function(d){return "lång"},
"timeMedium":function(d){return "medel"},
"timeNight":function(d){return "natt"},
"timeRandom":function(d){return "slumpad"},
"timeSet":function(d){return "ange tid till"},
"timeShort":function(d){return "kort"},
"timeVeryLong":function(d){return "väldigt lång"},
"timeVeryShort":function(d){return "väldigt kort"},
"to":function(d){return "till"},
"toSlotNumber":function(d){return "till plats nummer"},
"tooManyBlocksFail":function(d){return "Pussel "+craft_locale.v(d,"puzzleNumber")+" är klart. Grattis! Det är också möjligt att klara av det med "+craft_locale.p(d,"numBlocks",0,"sv",{"one":"ett block","other":craft_locale.n(d,"numBlocks")+" block"})+"."},
"turnRandom":function(d){return "sväng slumpmässigt"},
"useArrowKeys":function(d){return "Du behöver inte lägga till några block! Styr med pilarna och tryck på mellanslag eller tryck på spelfältet för att använda föremål."},
"weather":function(d){return "väder"},
"weatherTypeClear":function(d){return "klart"},
"weatherTypeRain":function(d){return "regn"},
"weatherTypeThunder":function(d){return "thunder"}};