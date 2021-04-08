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
"absolute":function(d){return "absolutna vrednost (vedno pozitivna)"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Poskušaj dodajati vsak blok posebej, da ti uspe spraviti Agenta na pravo mesto."},
"at":function(d){return "pri"},
"agentDiamondPathCongrats":function(d){return "Čestitam, našel si diamantno pot! Do sedaj si pobral  "+craft_locale.p(d,"count",0,"sl",{"en":"1 diamant","two":"dva","few":"nekaj","other":craft_locale.n(d,"count")+" diamantov"})+" ! "},
"blockActionAdd":function(d){return "dodaj"},
"blockActionAttack":function(d){return "napad"},
"blockActionClone":function(d){return "podvoji bloke"},
"blockActionCloneFiltered":function(d){return "samo podvoji"},
"blockActionCollect":function(d){return "poberi"},
"blockActionCollectAll":function(d){return "poberi vse"},
"blockActionDestroyEntity":function(d){return "izgini"},
"blockActionDetect":function(d){return "zaznaj"},
"blockActionDetectRedstone":function(d){return "zaznaj rdečikamen"},
"blockActionDrop":function(d){return "odvrzi"},
"blockActionDropAll":function(d){return "odvrzi vse"},
"blockActionExecute":function(d){return "izvrši navodilo"},
"blockActionExplodeEntity":function(d){return "eksplodiraj"},
"blockActionFill":function(d){return "napolni iz"},
"blockActionFlashEntity":function(d){return "bliskaj"},
"blockActionGetItemCount":function(d){return "preštej predmete"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "get item detail"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "give"},
"blockActionInspect":function(d){return "inspect"},
"blockActionInspectData":function(d){return "inspect data"},
"blockActionKill":function(d){return "kill target"},
"blockActionMove":function(d){return "premakni"},
"blockActionMoveAway":function(d){return "premakni se stran od"},
"blockActionMoveForward":function(d){return "premakni se naprej"},
"blockActionMoveRandom":function(d){return "premakni se naključno"},
"blockActionMoveTo":function(d){return "premakni se k"},
"blockActionMoveToward":function(d){return "naredi korak proti"},
"blockActionPlaySound":function(d){return "predvajaj zvok"},
"blockActionRepeat":function(d){return "ponovi"},
"blockActionRepeatRandom":function(d){return "ponovi naključno"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "kreiraj"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "rezultatu"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "počakaj"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "uniči kocko"},
"blockIf":function(d){return "če"},
"blockIfLavaAhead":function(d){return "če je lava spredaj"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "premakni"},
"blockMoveBackward":function(d){return "premakni nazaj"},
"blockMoveForward":function(d){return "premakni se naprej"},
"blockPlace":function(d){return "postavi"},
"blockPlaceTorch":function(d){return "postavi baklo"},
"blockPlaceXAheadAhead":function(d){return "spredaj"},
"blockPlaceXAheadPlace":function(d){return "postavi"},
"blockPlaceXPlace":function(d){return "postavi"},
"blockPlantCrop":function(d){return "posadi rastlino"},
"blockShear":function(d){return "ostriži"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "prekoplji zemljo"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "obrni se levo"},
"blockTurnRight":function(d){return "obrni se desno"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "živa skala"},
"blockTypeBricks":function(d){return "opeke"},
"blockTypeClay":function(d){return "glina"},
"blockTypeClayHardened":function(d){return "trda glina"},
"blockTypeCobblestone":function(d){return "tlakovec"},
"blockTypeDirt":function(d){return "zemlja"},
"blockTypeDirtCoarse":function(d){return "zemlja"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "prazno"},
"blockTypeFarmlandWet":function(d){return "obdelana zemlja"},
"blockTypeGlass":function(d){return "steklo"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "trava"},
"blockTypeGravel":function(d){return "pesek"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "akacijin hlod"},
"blockTypeLogBirch":function(d){return "brezin hlod"},
"blockTypeLogJungle":function(d){return "džuglski hlod"},
"blockTypeLogOak":function(d){return "hrastov hlod"},
"blockTypeLogSpruce":function(d){return "smrekin hlod"},
"blockTypeOreCoal":function(d){return "premogova ruda"},
"blockTypeOreDiamond":function(d){return "diamantna ruda"},
"blockTypeOreEmerald":function(d){return "smaragdova ruda"},
"blockTypeOreGold":function(d){return "zlata ruda"},
"blockTypeOreIron":function(d){return "železova ruda"},
"blockTypeOreLapis":function(d){return "lapizova ruda"},
"blockTypeOreRedstone":function(d){return "rdečekamena ruda"},
"blockTypePlanksAcacia":function(d){return "akacijine deske"},
"blockTypePlanksBirch":function(d){return "brezine deske"},
"blockTypePlanksJungle":function(d){return "džunglske deske"},
"blockTypePlanksOak":function(d){return "hrastove deske"},
"blockTypePlanksSpruce":function(d){return "smrekine deske"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "tračnice"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "pesek"},
"blockTypeSandstone":function(d){return "peščenjak"},
"blockTypeStone":function(d){return "kamen"},
"blockTypeTnt":function(d){return "tnt"},
"blockTypeTree":function(d){return "drevo"},
"blockTypeWater":function(d){return "voda"},
"blockTypeWool":function(d){return "volna"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "spredaj"},
"blockWhileXAheadDo":function(d){return "izvrši"},
"blockWhileXAheadWhile":function(d){return "dokler"},
"cancel":function(d){return "Prekliči"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "premakni"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "dol"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "levo"},
"directionMiddle":function(d){return "sredino"},
"directionRight":function(d){return "desno"},
"directionUp":function(d){return "gor"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "piščanec"},
"entityTypeCow":function(d){return "krava"},
"entityTypeCreeper":function(d){return "Creeper"},
"entityTypeIronGolem":function(d){return "železni golem"},
"entityTypePlayer":function(d){return "igralec"},
"entityTypeSheep":function(d){return "ovca"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "ko je napaden"},
"eventTypeWhenDay":function(d){return "ko je dan"},
"eventTypeWhenNight":function(d){return "ko je noč"},
"eventTypeWhenRun":function(d){return "ob zagonu"},
"eventTypeWhenSpawned":function(d){return "ko je kreiran"},
"eventTypeWhenTouched":function(d){return "ob dotiku"},
"eventTypeWhenUsed":function(d){return "ko je uporabljena"},
"forever":function(d){return "neskončno"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Z vlečenjem in spuščanjem blokov v tej setavljanki, ustvarite niz navodil v računalniškem jeziku Javascript. Ta koda pove računalniku kaj naj prikaže na zaslonu. Vse kar vidiš in narediš v Minecraftu se tudi začne z vrsticami računalniške kode kot ta."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Izberite tloris za vašo hišo."},
"houseSelectEasy":function(d){return "Enostavno"},
"houseSelectHard":function(d){return "Težko"},
"houseSelectLetsBuild":function(d){return "Zgradimo hišo."},
"houseSelectMedium":function(d){return "Srednje težko"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "kocka"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Prekrij lavo, da lahko prideš čez, nato nakoplji dve železovi rudi na drugi strani."},
"level11FailureMessage":function(d){return "Ne pozabi postaviti tlakovca naprej, če je pred teboj lava. To ti bo omogočilo varno rudarjenje virov v tej vrstici."},
"level12FailureMessage":function(d){return "Nakopati moraš 3 rdečekamene kocke. To opravilo združuje znanje, pridobljeno pri gradnji hiše in uporabo \"če\" stavkov, da se izogneš padcu v lavo."},
"level13FailureMessage":function(d){return "Postavi \"progo\" vzdolž prašne poti, ki bo vodila od tvojih vrat do roba zemljevida."},
"level1FailureMessage":function(d){return "Uporabiti moraš več ukazov, če hočeš priti do ovce."},
"level1TooFewBlocksMessage":function(d){return "Poizkusi več ukazov, če hočeš priti do ovce."},
"level2FailureMessage":function(d){return "Za sekanje drevesa, pojdi do debla in uporabi ukaz \"uniči kocko\"."},
"level2TooFewBlocksMessage":function(d){return "Poizkusi več ukazov za sekanje drevesa. Pojdi do debla in uporabi ukaz \"uniči kocko\"."},
"level3FailureMessage":function(d){return "Za zbiranje volne od obeh ovc, pojdi do vsake od njiju in uporabi ukaz \"striženje\". Ne pozabi uporabiti ukazov za obračanje, če hočeš priti do ovce."},
"level3TooFewBlocksMessage":function(d){return "Poizkusi več ukazov za zbiranje volne od obeh ovc. Pojdi do vsake in uporabi ukaz \"striženje\"."},
"level4FailureMessage":function(d){return "Na vsakem od treh drevesnih debel moraš uporabiti ukaz \"uniči kocko\"."},
"level5FailureMessage":function(d){return "Postavi bloke na prašni oris in tako zgradi zid. Roza ukaz \"ponovi\" bo izvedel ukaze, ki so znotraj njega, kot na primer \"postavi kocko\" in \"premakni se naprej\"."},
"level6FailureMessage":function(d){return "Postavi kocke na prašni oris hiše, če želiš dokončati nalogo."},
"level7FailureMessage":function(d){return "Uporabi ukaz \"posadi\" in posadi rastline na vsako zaplato temne zemlje."},
"level8FailureMessage":function(d){return "Če se dotakneš Grozečka, ga bo razneslo. Odkradi se mimo njih do tvoje hiše."},
"level9FailureMessage":function(d){return "Ne pozabi postaviti vsaj 2 bakli za osvetlitev poti IN nakopati vsaj 2 premoga."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "kocka"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "opeke"},
"miniBlockBucketLava":function(d){return "vedro lave"},
"miniBlockBucketWater":function(d){return "vedro vode"},
"miniBlockCarrots":function(d){return "korenje"},
"miniBlockCoal":function(d){return "premog"},
"miniBlockCobblestone":function(d){return "tlakovec"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "zemlja"},
"miniBlockDirtCoarse":function(d){return "zemlja"},
"miniBlockEgg":function(d){return "jajce"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "pesek"},
"miniBlockGunPowder":function(d){return "smodnik"},
"miniBlockIngotGold":function(d){return "palica zlata"},
"miniBlockIngotIron":function(d){return "palica železa"},
"miniBlockLapisLazuli":function(d){return "lazurni kamen"},
"miniBlockLogAcacia":function(d){return "akacijin hlod"},
"miniBlockLogBirch":function(d){return "brezin hlod"},
"miniBlockLogJungle":function(d){return "džuglski hlod"},
"miniBlockLogOak":function(d){return "hrastov hlod"},
"miniBlockLogSpruce":function(d){return "smrekin hlod"},
"miniBlockMilk":function(d){return "mleko"},
"miniBlockPlanksAcacia":function(d){return "akacijine deske"},
"miniBlockPlanksBirch":function(d){return "brezine deske"},
"miniBlockPlanksJungle":function(d){return "džunglske deske"},
"miniBlockPlanksOak":function(d){return "hrastove deske"},
"miniBlockPlanksSpruce":function(d){return "smrekine deske"},
"miniBlockPoppy":function(d){return "mak"},
"miniBlockPotato":function(d){return "krompir"},
"miniBlockRedstoneDust":function(d){return "prah rdečega kamna"},
"miniBlockSand":function(d){return "pesek"},
"miniBlockSandstone":function(d){return "peščenjak"},
"miniBlockSheep":function(d){return "ovca"},
"miniBlockWheat":function(d){return "pšenica"},
"miniBlockWool":function(d){return "volna"},
"nextLevelMsg":function(d){return "Naloga "+craft_locale.v(d,"puzzleNumber")+" opravljena. Čestitke!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Izberi svojega junaka."},
"playerSelectChooseSelectButton":function(d){return "Izberite"},
"playerSelectLetsGetStarted":function(d){return "Začnimo."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Lahko pritisneš \"Igraj naprej\", da nadaljuješ z igranjem."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Rezultat"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Izberite"},
"soundTypeBump":function(d){return "udarec"},
"soundTypeChickenBawk":function(d){return "kokodakanje"},
"soundTypeChickenHurt":function(d){return "piščanca zaboli"},
"soundTypeCollectedBlock":function(d){return "blok pobran"},
"soundTypeCowHuff":function(d){return "krava nezadovoljna"},
"soundTypeCowHurt":function(d){return "kravo zaboli"},
"soundTypeCowMoo":function(d){return "krava muka"},
"soundTypeCowMooLong":function(d){return "krava muuuka"},
"soundTypeCreeperHiss":function(d){return "Creeperjevo sikanje"},
"soundTypeDig_wood1":function(d){return "les se zlomi"},
"soundTypeDoorOpen":function(d){return "odpiranje vrat"},
"soundTypeExplode":function(d){return "eksplodiraj"},
"soundTypeFailure":function(d){return "nivo neuspešen"},
"soundTypeFall":function(d){return "padec"},
"soundTypeFizz":function(d){return "mehurčki"},
"soundTypeFuse":function(d){return "vžigalica"},
"soundTypeIronGolemHit":function(d){return "železni golem udari"},
"soundTypeMetalWhack":function(d){return "kovinski udarec"},
"soundTypeMinecart":function(d){return "voziček"},
"soundTypePlaceBlock":function(d){return "blok položen"},
"soundTypePunch":function(d){return "udarec"},
"soundTypeSheepBaa":function(d){return "ovca beka"},
"soundTypeStepFarmland":function(d){return "korak na njivi"},
"soundTypeStepGrass":function(d){return "korak na travi"},
"soundTypeStepGravel":function(d){return "korak na gramozu"},
"soundTypeStepStone":function(d){return "korak na kamnu"},
"soundTypeStepWood":function(d){return "korak na lesu"},
"soundTypeSuccess":function(d){return "nivo uspešen"},
"soundTypeZombieBrains":function(d){return "zombi zajavka"},
"soundTypeZombieGroan":function(d){return "zombijevo rjovenje"},
"soundTypeZombieHurt":function(d){return "zombija zaboli"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "dan"},
"timeLong":function(d){return "dolgo"},
"timeMedium":function(d){return "srednje"},
"timeNight":function(d){return "noč"},
"timeRandom":function(d){return "naključno"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "kratko"},
"timeVeryLong":function(d){return "zelo dolgo"},
"timeVeryShort":function(d){return "zelo kratko"},
"to":function(d){return "k"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Uganka "+craft_locale.v(d,"puzzleNumber")+" je končana. Čestitamo! Prav tako jo je mogoče rešiti z "+craft_locale.p(d,"numBlocks",0,"sl",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "obrni se nakjučno"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};