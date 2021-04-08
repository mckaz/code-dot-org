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
"absolute":function(d){return "dearbhluach"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "ag"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"ga",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "cuir"},
"blockActionAttack":function(d){return "ionsaigh"},
"blockActionClone":function(d){return "cóipeáil blocanna"},
"blockActionCloneFiltered":function(d){return "cóipeáil amháin"},
"blockActionCollect":function(d){return "bailigh"},
"blockActionCollectAll":function(d){return "bailigh uile"},
"blockActionDestroyEntity":function(d){return "téigh i bhfolach"},
"blockActionDetect":function(d){return "braith"},
"blockActionDetectRedstone":function(d){return "braith deargchloch"},
"blockActionDrop":function(d){return "lig titim"},
"blockActionDropAll":function(d){return "lig gach rud titim"},
"blockActionExecute":function(d){return "rith ordú"},
"blockActionExplodeEntity":function(d){return "pléasc"},
"blockActionFill":function(d){return "líon ó"},
"blockActionFlashEntity":function(d){return "splanc"},
"blockActionGetItemCount":function(d){return "faigh líon"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "faigh mionsonraí"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "faigh spás"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "tabhair"},
"blockActionInspect":function(d){return "scrúdaigh"},
"blockActionInspectData":function(d){return "scrúdaigh sonraí"},
"blockActionKill":function(d){return "maraigh an sprioc"},
"blockActionMove":function(d){return "téigh"},
"blockActionMoveAway":function(d){return "teith ó"},
"blockActionMoveForward":function(d){return "téigh ar aghaidh"},
"blockActionMoveRandom":function(d){return "bog go randamach"},
"blockActionMoveTo":function(d){return "téigh go"},
"blockActionMoveToward":function(d){return "tóg céim i dtreo"},
"blockActionPlaySound":function(d){return "seinn fuaim"},
"blockActionRepeat":function(d){return "athdhéan"},
"blockActionRepeatRandom":function(d){return "athdhéan go randamach"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "sceith"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teileapórtáil"},
"blockActionTeleportToPlayer":function(d){return "teileapórtáil chuig imreoir"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "leis an scór"},
"blockActionTransfer":function(d){return "aistrigh"},
"blockActionWait":function(d){return "fan"},
"blockActionWith":function(d){return "le"},
"blockData":function(d){return "sonraí bloic"},
"blockDestroyBlock":function(d){return "scrios a bhfuil anseo"},
"blockIf":function(d){return "má"},
"blockIfLavaAhead":function(d){return "má tá laibhe os do chomhair"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "téigh"},
"blockMoveBackward":function(d){return "téigh ar gcúl"},
"blockMoveForward":function(d){return "téigh ar aghaidh"},
"blockPlace":function(d){return "cuir"},
"blockPlaceTorch":function(d){return "cuir tóirse"},
"blockPlaceXAheadAhead":function(d){return "ar aghaidh"},
"blockPlaceXAheadPlace":function(d){return "cuir"},
"blockPlaceXPlace":function(d){return "cuir"},
"blockPlantCrop":function(d){return "cuir barra"},
"blockShear":function(d){return "lom"},
"blockTill":function(d){return "saothraigh"},
"blockTillSoil":function(d){return "saothraigh an talamh"},
"blockTurn":function(d){return "iompaigh"},
"blockTurnLeft":function(d){return "cas ar chlé"},
"blockTurnRight":function(d){return "cas ar dheis"},
"blockType":function(d){return "cineál bloic"},
"blockTypeBedrock":function(d){return "buncharraig"},
"blockTypeBricks":function(d){return "brící"},
"blockTypeClay":function(d){return "cré"},
"blockTypeClayHardened":function(d){return "cré chruaite"},
"blockTypeCobblestone":function(d){return "duirleog"},
"blockTypeDirt":function(d){return "ithir"},
"blockTypeDirtCoarse":function(d){return "garbhithir"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "folamh"},
"blockTypeFarmlandWet":function(d){return "talamh feirme"},
"blockTypeGlass":function(d){return "gloine"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "féar"},
"blockTypeGravel":function(d){return "gairbhéal"},
"blockTypeLava":function(d){return "laibhe"},
"blockTypeLogAcacia":function(d){return "adhmad acaicia"},
"blockTypeLogBirch":function(d){return "adhmad beithe"},
"blockTypeLogJungle":function(d){return "adhmad dufaire"},
"blockTypeLogOak":function(d){return "adhmad darach"},
"blockTypeLogSpruce":function(d){return "adhmad sprúis"},
"blockTypeOreCoal":function(d){return "mian guail"},
"blockTypeOreDiamond":function(d){return "mian diamaint"},
"blockTypeOreEmerald":function(d){return "mian smaragaide"},
"blockTypeOreGold":function(d){return "mian óir"},
"blockTypeOreIron":function(d){return "mian iarainn"},
"blockTypeOreLapis":function(d){return "mian lapis"},
"blockTypeOreRedstone":function(d){return "mian deargchloiche"},
"blockTypePlanksAcacia":function(d){return "plainc acaicia"},
"blockTypePlanksBirch":function(d){return "plainc bheithe"},
"blockTypePlanksJungle":function(d){return "plainc dhufaire"},
"blockTypePlanksOak":function(d){return "plainc dharach"},
"blockTypePlanksSpruce":function(d){return "plainc sprúis"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "ráille"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "gaineamh"},
"blockTypeSandstone":function(d){return "gaineamhchloch"},
"blockTypeStone":function(d){return "cloch"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "crann"},
"blockTypeWater":function(d){return "uisce"},
"blockTypeWool":function(d){return "olann"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "ar aghaidh"},
"blockWhileXAheadDo":function(d){return " "},
"blockWhileXAheadWhile":function(d){return "chomh fada is atá"},
"cancel":function(d){return "Cealaigh"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "téigh"},
"cloneModeNormal":function(d){return "gnáthmhód"},
"connectToCodeConnection":function(d){return "Chun an tionscadal seo a rith in Minecraft: Education Edition, bain úsáid as an bhfeidhmchlár Code Connection."},
"destination":function(d){return "ceann scríbe"},
"directionBack":function(d){return "ar ais"},
"directionDown":function(d){return "ag an mbun"},
"directionForward":function(d){return "ar aghaidh"},
"directionLeft":function(d){return "ar chlé"},
"directionMiddle":function(d){return "sa lár"},
"directionRight":function(d){return "ar dheis"},
"directionUp":function(d){return "ag an mbarr"},
"downloadButton":function(d){return "Íoslódáil"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "sicín"},
"entityTypeCow":function(d){return "bó"},
"entityTypeCreeper":function(d){return "téaltóir"},
"entityTypeIronGolem":function(d){return "gólam iarainn"},
"entityTypePlayer":function(d){return "imreoir"},
"entityTypeSheep":function(d){return "caora"},
"entityTypeZombie":function(d){return "zombaí"},
"eventTypeWhenAttacked":function(d){return "nuair a ionsaítear é"},
"eventTypeWhenDay":function(d){return "le breacadh an lae"},
"eventTypeWhenNight":function(d){return "le crónú na hoíche"},
"eventTypeWhenRun":function(d){return "nuair a ritear é"},
"eventTypeWhenSpawned":function(d){return "nuair a sceitear é"},
"eventTypeWhenTouched":function(d){return "nuair a theagmhaítear é"},
"eventTypeWhenUsed":function(d){return "nuair a úsáidtear é"},
"forever":function(d){return "go deo na ndeor"},
"from":function(d){return "ó"},
"generatedCodeDescription":function(d){return "Nuair a tharraingíonn tú agus a chuireann tú blocanna i do chlár, cruthaíonn sé treoracha i dteanga ríomhaireachta darb ainm JavaScript. Insíonn an cód seo don ríomhaire na rudaí le taispeáint ar an scáileán. Tá cód den sórt seo taobh thiar de gach uile rud nuair a imríonn tú Minecraft freisin."},
"getdataof":function(d){return "faigh sonraí"},
"getnameof":function(d){return "faigh ainm"},
"houseSelectChooseFloorPlan":function(d){return "Roghnaigh plean urláir i gcomhair do thí."},
"houseSelectEasy":function(d){return "Éasca"},
"houseSelectHard":function(d){return "Deacair"},
"houseSelectLetsBuild":function(d){return "Tógaimis teach."},
"houseSelectMedium":function(d){return "Meánleibhéal"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "i sliotán #"},
"itemTypeBlock":function(d){return "bloc"},
"itemTypeDecoration":function(d){return "maisiúchán"},
"itemTypeMiscellaneous":function(d){return "éagsúil"},
"itemTypeTool":function(d){return "uirlis"},
"items":function(d){return "mír(eanna)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Clúdaigh an laibhe chun siúl trasna, ansin tochail dhá bhloc iarainn ar an taobh eile."},
"level11FailureMessage":function(d){return "Caithfidh tú duirleog a chur síos nuair a bhíonn laibhe os do chomhair. Sa chaoi seo beidh tú slán sábháilte agus na hacmhainní seo á dtochailt."},
"level12FailureMessage":function(d){return "Caithfidh tú 3 bhloc deargchloiche a thochailt. Úsáidfidh tú na rudaí a d'fhoghlaim tú nuair a thóg tú do theach, chomh maith le blocanna \"má\" chun an laibhe a sheachaint."},
"level13FailureMessage":function(d){return "Cuir \"ráillí\" síos le taobh an chósáin ithreach ó do dhoras go dtí ciumhais na léarscáile."},
"level1FailureMessage":function(d){return "Caithfidh tú orduithe a úsáid chun siúl go dtí na caoirigh."},
"level1TooFewBlocksMessage":function(d){return "Bain triail as tuilleadh orduithe chun siúl go dtí na caoirigh."},
"level2FailureMessage":function(d){return "Chun crann a leagan, siúil go dtí an crann agus bain úsáid as an ordú \"scrios a bhfuil anseo\"."},
"level2TooFewBlocksMessage":function(d){return "Bain triail as orduithe eile chun an crann a leagan. Siúil go dtí an crann agus bain úsáid as an ordú \"scrios a bhfuil anseo\"."},
"level3FailureMessage":function(d){return "Chun an dá chaora a lomadh, siúil go dtí gach ceann acu agus úsáid an t-ordú \"lom\". Beidh sé ort casadh ar chlé nó ar dheis chun na caoirigh a shroicheadh."},
"level3TooFewBlocksMessage":function(d){return "Bain triail as orduithe eile chun an dá chaora a lomadh. Siúil go dtí gach ceann acu agus úsáid an t-ordú \"lom\"."},
"level4FailureMessage":function(d){return "Caithfidh tú an t-ordú \"scrios a bhfuil anseo\" a úsáid ar gach ceann de na trí chrann."},
"level5FailureMessage":function(d){return "Cuir blocanna ar an imlíne ithreach le balla a thógáil. Rithfidh an t-ordú bándearg \"athdhéan\" na horduithe atá laistigh de, mar shampla \"cuir bloc\" agus \"téigh ar aghaidh\"."},
"level6FailureMessage":function(d){return "Cuir blocanna ar imlíne ithreach an tí chun an dúshlán a chríochnú."},
"level7FailureMessage":function(d){return "Úsáid an t-ordú \"cuir barra\" le barraí a chur ar gach paiste dorcha ithreach."},
"level8FailureMessage":function(d){return "Má bhuaileann tú le téaltóir, pléascfaidh sé. Sleamhnaigh tharstu agus téigh isteach i do theach."},
"level9FailureMessage":function(d){return "Caithfidh tú ar a laghad dhá thóirse a shocrú le solas an bhealaigh a dhéanamh AGUS ar a laghad dhá bhloc guail a thochailt."},
"maskMode":function(d){return "mód masctha"},
"maskModeMasked":function(d){return "masctha"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "bloc"},
"minecraftNotConnected":function(d){return "Níl Minecraft ceangailte"},
"miniBlockBricks":function(d){return "brící"},
"miniBlockBucketLava":function(d){return "buicéad laibhe"},
"miniBlockBucketWater":function(d){return "buicéad uisce"},
"miniBlockCarrots":function(d){return "cairéid"},
"miniBlockCoal":function(d){return "gual"},
"miniBlockCobblestone":function(d){return "duirleog"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "ithir"},
"miniBlockDirtCoarse":function(d){return "garbhithir"},
"miniBlockEgg":function(d){return "ubh"},
"miniBlockEmerald":function(d){return "smaragaid"},
"miniBlockGravel":function(d){return "gairbhéal"},
"miniBlockGunPowder":function(d){return "púdar gunna"},
"miniBlockIngotGold":function(d){return "tinne óir"},
"miniBlockIngotIron":function(d){return "tinne iarainn"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "adhmad acaicia"},
"miniBlockLogBirch":function(d){return "adhmad beithe"},
"miniBlockLogJungle":function(d){return "adhmad dufaire"},
"miniBlockLogOak":function(d){return "adhmad darach"},
"miniBlockLogSpruce":function(d){return "adhmad sprúis"},
"miniBlockMilk":function(d){return "bainne"},
"miniBlockPlanksAcacia":function(d){return "plainc acaicia"},
"miniBlockPlanksBirch":function(d){return "plainc bheithe"},
"miniBlockPlanksJungle":function(d){return "plainc dhufaire"},
"miniBlockPlanksOak":function(d){return "plainc dharach"},
"miniBlockPlanksSpruce":function(d){return "plainc sprúis"},
"miniBlockPoppy":function(d){return "poipín"},
"miniBlockPotato":function(d){return "práta"},
"miniBlockRedstoneDust":function(d){return "deannach deargchloiche"},
"miniBlockSand":function(d){return "gaineamh"},
"miniBlockSandstone":function(d){return "gaineamhchloch"},
"miniBlockSheep":function(d){return "caora"},
"miniBlockWheat":function(d){return "cruithneacht"},
"miniBlockWool":function(d){return "olann"},
"nextLevelMsg":function(d){return "Chríochnaigh tú dúshlán "+craft_locale.v(d,"puzzleNumber")+". Comhghairdeas!"},
"oldBlockHandling":function(d){return "seanbhloc ag"},
"oldBlockHandlingsDestroy":function(d){return "scrios"},
"oldBlockHandlingsKeep":function(d){return "coinnigh"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "ar son"},
"playerSelectChooseCharacter":function(d){return "Roghnaigh do charachtar."},
"playerSelectChooseSelectButton":function(d){return "Roghnaigh"},
"playerSelectLetsGetStarted":function(d){return "Ar aghaidh linn!"},
"quantity":function(d){return "méid"},
"reinfFeedbackMsg":function(d){return "Is féidir leat \"Lean ar aghaidh ag imirt\" a chliceáil chun filleadh ar do chluiche."},
"relative":function(d){return "coibhneasta"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Scór"},
"seconds":function(d){return "soicind(í)"},
"selectChooseButton":function(d){return "Roghnaigh"},
"soundTypeBump":function(d){return "bualadh"},
"soundTypeChickenBawk":function(d){return "gocarsach sicín"},
"soundTypeChickenHurt":function(d){return "sicín gonta"},
"soundTypeCollectedBlock":function(d){return "bloc á bhailiú"},
"soundTypeCowHuff":function(d){return "bó ag puthaíl"},
"soundTypeCowHurt":function(d){return "bó ghonta"},
"soundTypeCowMoo":function(d){return "géim bó"},
"soundTypeCowMooLong":function(d){return "gééim bó"},
"soundTypeCreeperHiss":function(d){return "siosadh téaltóra"},
"soundTypeDig_wood1":function(d){return "briseadh adhmaid"},
"soundTypeDoorOpen":function(d){return "oscailt dorais"},
"soundTypeExplode":function(d){return "pléasc"},
"soundTypeFailure":function(d){return "theip ar leibhéal"},
"soundTypeFall":function(d){return "titim"},
"soundTypeFizz":function(d){return "siosarnach"},
"soundTypeFuse":function(d){return "aidhnín"},
"soundTypeIronGolemHit":function(d){return "gólam iarainn a bhualadh"},
"soundTypeMetalWhack":function(d){return "bualadh miotail"},
"soundTypeMinecart":function(d){return "cairt mianaigh"},
"soundTypePlaceBlock":function(d){return "bloc á chur"},
"soundTypePunch":function(d){return "dorn"},
"soundTypeSheepBaa":function(d){return "méileach caorach"},
"soundTypeStepFarmland":function(d){return "céim ar thalamh feirme"},
"soundTypeStepGrass":function(d){return "céim ar fhéar"},
"soundTypeStepGravel":function(d){return "céim ar ghairbhéal"},
"soundTypeStepStone":function(d){return "céim ar chloch"},
"soundTypeStepWood":function(d){return "céim ar adhmad"},
"soundTypeSuccess":function(d){return "leibhéal a chríochnú"},
"soundTypeZombieBrains":function(d){return "éagaoin zombaí"},
"soundTypeZombieGroan":function(d){return "drantán zombaí"},
"soundTypeZombieHurt":function(d){return "zombaí gonta"},
"target":function(d){return "sprioc"},
"testModeAll":function(d){return "uile"},
"testModeMasked":function(d){return "masctha"},
"tileData":function(d){return "sonraí tíle"},
"timeDay":function(d){return "lá"},
"timeLong":function(d){return "tamall fada"},
"timeMedium":function(d){return "tamall"},
"timeNight":function(d){return "oíche"},
"timeRandom":function(d){return "tamall randamach"},
"timeSet":function(d){return "socrú ama"},
"timeShort":function(d){return "tamall gairid"},
"timeVeryLong":function(d){return "tamall an-fhada"},
"timeVeryShort":function(d){return "tamall an-ghairid"},
"to":function(d){return "le"},
"toSlotNumber":function(d){return "go dtí sliotán #"},
"tooManyBlocksFail":function(d){return "Chríochnaigh tú dúshlán "+craft_locale.v(d,"puzzleNumber")+". Comhghairdeas! Is féidir é a dhéanamh le "+craft_locale.p(d,"numBlocks",0,"ga",{"one":"bloc amháin","other":craft_locale.n(d,"numBlocks")+" bloc"})+" freisin."},
"turnRandom":function(d){return "cas randamach"},
"useArrowKeys":function(d){return "Ní gá duit aon bhlocanna a chur leis! Bain úsáid as na saighde chun bogadh thart, agus brúigh an spásbharra nó tapáil an bord cluiche le rudaí a úsáid."},
"weather":function(d){return "aimsir"},
"weatherTypeClear":function(d){return "glan"},
"weatherTypeRain":function(d){return "báisteach"},
"weatherTypeThunder":function(d){return "toirneach"}};