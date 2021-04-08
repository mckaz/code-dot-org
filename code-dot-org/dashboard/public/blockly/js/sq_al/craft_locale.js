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
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "tek"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"sq",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "shto"},
"blockActionAttack":function(d){return "sulmo"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "mbledh"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "zhduket"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "lësho"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "shkatërro"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "shkrep"},
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
"blockActionMove":function(d){return "lëviz"},
"blockActionMoveAway":function(d){return "largohu nga"},
"blockActionMoveForward":function(d){return "levis perpara"},
"blockActionMoveRandom":function(d){return "lëviz rastësisht "},
"blockActionMoveTo":function(d){return "lëviz në"},
"blockActionMoveToward":function(d){return "lëviz një hap drejt"},
"blockActionPlaySound":function(d){return "luaj tingullin"},
"blockActionRepeat":function(d){return "perserit"},
"blockActionRepeatRandom":function(d){return "përsërit zakonisht"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "Hidh vezët"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "për të shënuar"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "pritë"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "shkatërro bllokun"},
"blockIf":function(d){return "nese"},
"blockIfLavaAhead":function(d){return "Nëse ka llavë përpara"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "lëviz"},
"blockMoveBackward":function(d){return "lëviz mbrapa"},
"blockMoveForward":function(d){return "levis perpara"},
"blockPlace":function(d){return "vend"},
"blockPlaceTorch":function(d){return "vendos pishtarin"},
"blockPlaceXAheadAhead":function(d){return "përpara"},
"blockPlaceXAheadPlace":function(d){return "vend"},
"blockPlaceXPlace":function(d){return "vend"},
"blockPlantCrop":function(d){return "Mbill prodhimin"},
"blockShear":function(d){return "krasit"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "deri ne toke"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "kthehu majtas"},
"blockTurnRight":function(d){return "kthehu djathtas"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "Themel"},
"blockTypeBricks":function(d){return "Tulla"},
"blockTypeClay":function(d){return "Argjilë"},
"blockTypeClayHardened":function(d){return "Baltë e thekur"},
"blockTypeCobblestone":function(d){return "Gur kalldrëmi"},
"blockTypeDirt":function(d){return "Tokë"},
"blockTypeDirtCoarse":function(d){return "Tokë e vrazhdë"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "Bosh"},
"blockTypeFarmlandWet":function(d){return "Tokë bujqësore"},
"blockTypeGlass":function(d){return "xham"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "bar"},
"blockTypeGravel":function(d){return "zall"},
"blockTypeLava":function(d){return "llavë"},
"blockTypeLogAcacia":function(d){return "Bimë e akacias "},
"blockTypeLogBirch":function(d){return "Thupër"},
"blockTypeLogJungle":function(d){return "Bimë xhungle"},
"blockTypeLogOak":function(d){return "Trung lisi"},
"blockTypeLogSpruce":function(d){return "trung bredhi"},
"blockTypeOreCoal":function(d){return "qymyrgur"},
"blockTypeOreDiamond":function(d){return "diamant"},
"blockTypeOreEmerald":function(d){return "smerald"},
"blockTypeOreGold":function(d){return "ar"},
"blockTypeOreIron":function(d){return "hekur"},
"blockTypeOreLapis":function(d){return "minerali lapis"},
"blockTypeOreRedstone":function(d){return "gur i kuq"},
"blockTypePlanksAcacia":function(d){return "dru akacie"},
"blockTypePlanksBirch":function(d){return "thupër"},
"blockTypePlanksJungle":function(d){return "dru xhungle"},
"blockTypePlanksOak":function(d){return "dru lisi"},
"blockTypePlanksSpruce":function(d){return "dru bredhi"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "hekurudhë"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "rërë"},
"blockTypeSandstone":function(d){return "gur ranor"},
"blockTypeStone":function(d){return "gur"},
"blockTypeTnt":function(d){return "tnt"},
"blockTypeTree":function(d){return "pemë"},
"blockTypeWater":function(d){return "ujë"},
"blockTypeWool":function(d){return "lesh"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "përpara"},
"blockWhileXAheadDo":function(d){return "ekzekuto"},
"blockWhileXAheadWhile":function(d){return "ndërsa"},
"cancel":function(d){return "Anullo"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "lëviz"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "poshtë"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "majtas"},
"directionMiddle":function(d){return "mesatare"},
"directionRight":function(d){return "djathtas"},
"directionUp":function(d){return "lart"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "pulë"},
"entityTypeCow":function(d){return "lopë"},
"entityTypeCreeper":function(d){return "kthetra"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "Lojtar"},
"entityTypeSheep":function(d){return "dele"},
"entityTypeZombie":function(d){return "zombi"},
"eventTypeWhenAttacked":function(d){return "Kur sulmohesh"},
"eventTypeWhenDay":function(d){return "kur dita"},
"eventTypeWhenNight":function(d){return "kur nata"},
"eventTypeWhenRun":function(d){return "kur ekzekutohet"},
"eventTypeWhenSpawned":function(d){return "kur lind"},
"eventTypeWhenTouched":function(d){return "kur prekesh"},
"eventTypeWhenUsed":function(d){return "kur perdoret"},
"forever":function(d){return "përgjithmonë"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Duke tërhequr dhe vendosur blloqe në këtë puzzle, ju keni krijuar një set instruksionesh në gjuhën e kompjuterit të quajtur Javascript. Ky kod i tregon kompjuterit se çfarë të shfaqi në ekran. Çdo gjë që ju shihni dhe bëni në Minecraft gjithashtu fillon me rreshta kodimi si këto."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Zgjidhni planin e dyshemesë për shtëpinë tuaj."},
"houseSelectEasy":function(d){return "E lehtë"},
"houseSelectHard":function(d){return "E vështirë"},
"houseSelectLetsBuild":function(d){return "Le të ndërtojmë një shtëpi."},
"houseSelectMedium":function(d){return "Mesatare"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "bllok"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Mbuloje llavën për të kaluar mbi të dhe pastaj vendosi dy blloqe të hekurta në dy anët e rrugës."},
"level11FailureMessage":function(d){return "Sigurohuni që të vendosni gurin përpara nëse ka llavë përpara teje. Kjo do t'ju lejoj të minoni këtë rresht të burimeve."},
"level12FailureMessage":function(d){return "Sigurohuni që të minoni 3 blloqe të gurit të kuq. Kjo kombinon çfarë keni mësuar prej ndërtimit të shtëpisë dhe përdorimin e komandës \"nëse\" që të shmangni rënien në llavë."},
"level13FailureMessage":function(d){return "Vendosni hekurudhën përgjatë rrugës së dheut që të çon nga dera juaj deri tek skaji i hartës."},
"level1FailureMessage":function(d){return "Ju duhet të përdorni komanda që të ecni deri tek delja."},
"level1TooFewBlocksMessage":function(d){return "Provoni të përdorni më shumë komanda që të ecni deri tek delja."},
"level2FailureMessage":function(d){return "Që të prisni një pemë, ecni deri tek trungu dhe përdorni komandën \"shkatërro bllokun\"."},
"level2TooFewBlocksMessage":function(d){return "Provoni të përdorni më shumë komanda që të prisni pemën. Ecni tek trungu i saj dhe përdorni komandën \"shkatërro bllokun\"."},
"level3FailureMessage":function(d){return "Që të merrni lesh nga të dyja delet, ecni tek njëra dhe përdorni komandën \"qeth\". Mbaj mend të përdorni komandat për kthesë që të arrish tek delja."},
"level3TooFewBlocksMessage":function(d){return "Provoni të përdorni më shumë komanda që të merrni lesh nga të dyja delet.. Ecni tek secila dhe përdorni komandën \"qeth\"."},
"level4FailureMessage":function(d){return "Ju duhet të përdorni komandën \"shkatërro bllokun\" në të treja trungjet e pemëve."},
"level5FailureMessage":function(d){return "Vendosni blloqet e tuaja në vijën e dheut që të ndërtoni një mur. Komanda rozë \"përsërit\" do të ekzekutoj komandat që janë të vendosura brenda saj, si për shembull \"vendos bllokun\" dhe \"ec përpara\"."},
"level6FailureMessage":function(d){return "Vendos blloqet në vijën e dheut të shtëpisë që ta përfundoni puzzle-in."},
"level7FailureMessage":function(d){return "Përdorni komandën \"mbjell\" që të vendosësh prodhimin në çdo copë toke të errët."},
"level8FailureMessage":function(d){return "Nëse e prekni një bimë kacavjerrëse do të shpërthejë. Shkoni vjedhurazi rreth tyre dhe hyni në shtëpinë tuaj."},
"level9FailureMessage":function(d){return "Mos harro të vendosësh të paktën 2 pishtarë që të ndriçosh rrugën dhe  të minosh të paktën 2 qymyr."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "bllok"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "Tulla"},
"miniBlockBucketLava":function(d){return "kovë me llavë"},
"miniBlockBucketWater":function(d){return "kovë me ujë"},
"miniBlockCarrots":function(d){return "karrota"},
"miniBlockCoal":function(d){return "qymyrgurë"},
"miniBlockCobblestone":function(d){return "Gur kalldrëmi"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "Tokë"},
"miniBlockDirtCoarse":function(d){return "Tokë e vrazhdë"},
"miniBlockEgg":function(d){return "vezë"},
"miniBlockEmerald":function(d){return "emerald"},
"miniBlockGravel":function(d){return "zall"},
"miniBlockGunPowder":function(d){return "barut"},
"miniBlockIngotGold":function(d){return "shufër ari"},
"miniBlockIngotIron":function(d){return "shufër hekuri"},
"miniBlockLapisLazuli":function(d){return "minerali lapis"},
"miniBlockLogAcacia":function(d){return "Bimë e akacias "},
"miniBlockLogBirch":function(d){return "Thupër"},
"miniBlockLogJungle":function(d){return "Bimë xhungle"},
"miniBlockLogOak":function(d){return "Trung lisi"},
"miniBlockLogSpruce":function(d){return "trung bredhi"},
"miniBlockMilk":function(d){return "qumësht"},
"miniBlockPlanksAcacia":function(d){return "dru akacie"},
"miniBlockPlanksBirch":function(d){return "thupër"},
"miniBlockPlanksJungle":function(d){return "dru xhungle"},
"miniBlockPlanksOak":function(d){return "dru lisi"},
"miniBlockPlanksSpruce":function(d){return "dru bredhi"},
"miniBlockPoppy":function(d){return "lulëkuqe"},
"miniBlockPotato":function(d){return "patate"},
"miniBlockRedstoneDust":function(d){return "pluhuri i gurit të kuq"},
"miniBlockSand":function(d){return "rërë"},
"miniBlockSandstone":function(d){return "gur ranor"},
"miniBlockSheep":function(d){return "dele"},
"miniBlockWheat":function(d){return "grurë"},
"miniBlockWool":function(d){return "lesh"},
"nextLevelMsg":function(d){return "Puzzle-i "+craft_locale.v(d,"puzzleNumber")+" u kompletua. Urime!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Zgjidh personazhin tënd."},
"playerSelectChooseSelectButton":function(d){return "Përzgjidh"},
"playerSelectLetsGetStarted":function(d){return "Le të fillojmë."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "You mund të shtypni \"Vazhdo luaj\" për të luajtur."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "rezultati"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Përzgjidh"},
"soundTypeBump":function(d){return "përplasem"},
"soundTypeChickenBawk":function(d){return "kakarisje pule"},
"soundTypeChickenHurt":function(d){return "lëndimi i pulës"},
"soundTypeCollectedBlock":function(d){return "mbledh blloqe"},
"soundTypeCowHuff":function(d){return "zëmërimi i lopës"},
"soundTypeCowHurt":function(d){return "lëndimi i lopës"},
"soundTypeCowMoo":function(d){return "pëllitje lope"},
"soundTypeCowMooLong":function(d){return "pëllitje lope"},
"soundTypeCreeperHiss":function(d){return "fishkëllim kthetrash"},
"soundTypeDig_wood1":function(d){return "thyerje degësh "},
"soundTypeDoorOpen":function(d){return "derë e hapur"},
"soundTypeExplode":function(d){return "shkatërro"},
"soundTypeFailure":function(d){return "nivel dështimi"},
"soundTypeFall":function(d){return "bie"},
"soundTypeFizz":function(d){return "vërshëllen"},
"soundTypeFuse":function(d){return "fitil"},
"soundTypeIronGolemHit":function(d){return "gjuajta e iron golem"},
"soundTypeMetalWhack":function(d){return "grusht metalik"},
"soundTypeMinecart":function(d){return "minecart"},
"soundTypePlaceBlock":function(d){return "vend i blloqeve"},
"soundTypePunch":function(d){return "grusht"},
"soundTypeSheepBaa":function(d){return "blegërimë delje"},
"soundTypeStepFarmland":function(d){return "step në tokë bujqësore"},
"soundTypeStepGrass":function(d){return "ec në bar"},
"soundTypeStepGravel":function(d){return "ec në zhavor"},
"soundTypeStepStone":function(d){return "ec në gur"},
"soundTypeStepWood":function(d){return "ec në pyll"},
"soundTypeSuccess":function(d){return "niveli i suksesit"},
"soundTypeZombieBrains":function(d){return "rënkim zombie"},
"soundTypeZombieGroan":function(d){return "ulërim zombie"},
"soundTypeZombieHurt":function(d){return "lëndim zombie"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "ditë"},
"timeLong":function(d){return "i gjatë"},
"timeMedium":function(d){return "mesatar"},
"timeNight":function(d){return "natë"},
"timeRandom":function(d){return "zakonshem"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "i shkurtër"},
"timeVeryLong":function(d){return "shumë i gjatë"},
"timeVeryShort":function(d){return "shumë i shkurtër"},
"to":function(d){return "ne"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Puzzle-i "+craft_locale.v(d,"puzzleNumber")+" u kompletua. Urime! Është gjithashtu e mundur ta plotësoni me "+craft_locale.p(d,"numBlocks",0,"sq",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "kthehu në mënyrë të rastësishme"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};