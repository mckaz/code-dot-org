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
"absolute":function(d){return "absolute"},
"agentGenericFailureMessage":function(d){return "Bliv endelig ved med at kode! Husk at sætte agenten i sving."},
"agentTooFewBlocksFailureMessage":function(d){return "Prøv at tilføje én blok ad gangen for at få agenten placeret det rigtige sted."},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "Til lykke, du har fundet diamantstien! Du har indsamlet "+craft_locale.p(d,"count",0,"da",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" indtil videre!"},
"blockActionAdd":function(d){return "tilføj"},
"blockActionAttack":function(d){return "angrib"},
"blockActionClone":function(d){return "klon blokke"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "collect"},
"blockActionCollectAll":function(d){return "indsaml alle"},
"blockActionDestroyEntity":function(d){return "forsvind"},
"blockActionDetect":function(d){return "registrer"},
"blockActionDetectRedstone":function(d){return "registrer redstone"},
"blockActionDrop":function(d){return "drop"},
"blockActionDropAll":function(d){return "smid alt"},
"blockActionExecute":function(d){return "udfør kommando"},
"blockActionExplodeEntity":function(d){return "eksploder"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "glimt"},
"blockActionGetItemCount":function(d){return "tæl genstande"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "hent genstandsinfo"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "give"},
"blockActionInspect":function(d){return "undersøg"},
"blockActionInspectData":function(d){return "undersøg data"},
"blockActionKill":function(d){return "dræb mål"},
"blockActionMove":function(d){return "flyt"},
"blockActionMoveAway":function(d){return "gå væk fra"},
"blockActionMoveForward":function(d){return "flyt fremad"},
"blockActionMoveRandom":function(d){return "gå i tilfældig retning"},
"blockActionMoveTo":function(d){return "gå til"},
"blockActionMoveToward":function(d){return "gå et skridt mod"},
"blockActionPlaySound":function(d){return "afspil lyd"},
"blockActionRepeat":function(d){return "gentag"},
"blockActionRepeatRandom":function(d){return "gentag tilfældig"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "forhinder"},
"blockActionSummon":function(d){return "påkald"},
"blockActionTeleport":function(d){return "teleportér mål"},
"blockActionTeleportToPlayer":function(d){return "teleportér til spiller"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "for at score"},
"blockActionTransfer":function(d){return "overfør"},
"blockActionWait":function(d){return "vent"},
"blockActionWith":function(d){return "med"},
"blockData":function(d){return "blokdata"},
"blockDestroyBlock":function(d){return "ødelæg blok"},
"blockIf":function(d){return "hvis\n"},
"blockIfLavaAhead":function(d){return "hvis der er lava forude"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "flyt"},
"blockMoveBackward":function(d){return "flyt bagud"},
"blockMoveForward":function(d){return "flyt fremad"},
"blockPlace":function(d){return "placér"},
"blockPlaceTorch":function(d){return "placér fakkel"},
"blockPlaceXAheadAhead":function(d){return "forude"},
"blockPlaceXAheadPlace":function(d){return "placér"},
"blockPlaceXPlace":function(d){return "placér"},
"blockPlantCrop":function(d){return "plant afgrøde"},
"blockShear":function(d){return "klip"},
"blockTill":function(d){return "kultiver"},
"blockTillSoil":function(d){return "pløj jord"},
"blockTurn":function(d){return "drej"},
"blockTurnLeft":function(d){return "drej til venstre"},
"blockTurnRight":function(d){return "drej til højre"},
"blockType":function(d){return "bloktype"},
"blockTypeBedrock":function(d){return "klippe"},
"blockTypeBricks":function(d){return "tegl"},
"blockTypeClay":function(d){return "ler"},
"blockTypeClayHardened":function(d){return "hærdet ler"},
"blockTypeCobblestone":function(d){return "brosten"},
"blockTypeDirt":function(d){return "jord"},
"blockTypeDirtCoarse":function(d){return "grov jord"},
"blockTypeDoorIron":function(d){return "jerndør"},
"blockTypeEmpty":function(d){return "tom"},
"blockTypeFarmlandWet":function(d){return "landbrugsjord"},
"blockTypeGlass":function(d){return "glas"},
"blockTypeGlowstone":function(d){return "glødesten"},
"blockTypeGrass":function(d){return "græs"},
"blockTypeGravel":function(d){return "grus"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "akaciekævle"},
"blockTypeLogBirch":function(d){return "birkekævle"},
"blockTypeLogJungle":function(d){return "jungletræskævle"},
"blockTypeLogOak":function(d){return "egetræskævle"},
"blockTypeLogSpruce":function(d){return "grantræskævle"},
"blockTypeOreCoal":function(d){return "kulmalm"},
"blockTypeOreDiamond":function(d){return "diamantmalm"},
"blockTypeOreEmerald":function(d){return "smaragdmalm"},
"blockTypeOreGold":function(d){return "guldmalm"},
"blockTypeOreIron":function(d){return "jernmalm"},
"blockTypeOreLapis":function(d){return "lapismalm"},
"blockTypeOreRedstone":function(d){return "rødstensmalm"},
"blockTypePlanksAcacia":function(d){return "akacietræplanker"},
"blockTypePlanksBirch":function(d){return "birkeplanker"},
"blockTypePlanksJungle":function(d){return "jungletræsplanker"},
"blockTypePlanksOak":function(d){return "egetræsplanker"},
"blockTypePlanksSpruce":function(d){return "grantræsplanker"},
"blockTypePressurePlateUp":function(d){return "trykplade"},
"blockTypeRail":function(d){return "skinne"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone-fakkel"},
"blockTypeRedstoneWire":function(d){return "redstone-tråd"},
"blockTypeSand":function(d){return "sand"},
"blockTypeSandstone":function(d){return "sandsten"},
"blockTypeStone":function(d){return "sten"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "træ"},
"blockTypeWater":function(d){return "vand"},
"blockTypeWool":function(d){return "uld"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "forude"},
"blockWhileXAheadDo":function(d){return "udfør"},
"blockWhileXAheadWhile":function(d){return "mens"},
"cancel":function(d){return "Annuller"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "flyt"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "Du kan kun køre projektet i Minecraft: Education Edition, hvis du bruger applikationen Code Connection."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "tilbage"},
"directionDown":function(d){return "ned"},
"directionForward":function(d){return "frem"},
"directionLeft":function(d){return "venstre"},
"directionMiddle":function(d){return "midt i"},
"directionRight":function(d){return "højre"},
"directionUp":function(d){return "op"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "enhedstype"},
"entityTypeChicken":function(d){return "kylling"},
"entityTypeCow":function(d){return "ko"},
"entityTypeCreeper":function(d){return "Creeper"},
"entityTypeIronGolem":function(d){return "jerngolem"},
"entityTypePlayer":function(d){return "spiller"},
"entityTypeSheep":function(d){return "får"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "ved angreb"},
"eventTypeWhenDay":function(d){return "om dagen"},
"eventTypeWhenNight":function(d){return "om natten"},
"eventTypeWhenRun":function(d){return "når programmet kører"},
"eventTypeWhenSpawned":function(d){return "ved spawning"},
"eventTypeWhenTouched":function(d){return "ved berøring"},
"eventTypeWhenUsed":function(d){return "ved brug"},
"forever":function(d){return "for evigt"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Ved at trække og placere blokke i dette hovedbrud har du skabt et sæt instruktioner i programmeringssproget Javascript. Denne kode fortæller computeren, hvad den skal vise på skærmen. Alt, du ser og gør i Minecraft, begynder med computerkode som denne."},
"getdataof":function(d){return "hent data om"},
"getnameof":function(d){return "hent navn på"},
"houseSelectChooseFloorPlan":function(d){return "Vælg grundplan for dit hus."},
"houseSelectEasy":function(d){return "Let"},
"houseSelectHard":function(d){return "Svær"},
"houseSelectLetsBuild":function(d){return "Lad os bygge et hus."},
"houseSelectMedium":function(d){return "Mellem"},
"import":function(d){return "Importér"},
"importShareLinkBody":function(d){return "Indtast dit delingslink til En Time af Kode her, og klik på \"Importér\" for at kopiere din kode til Minecraft"},
"importShareLinkHeader":function(d){return "Importér et delingslink"},
"inSlotNumber":function(d){return "på plads nummer"},
"itemTypeBlock":function(d){return "blok"},
"itemTypeDecoration":function(d){return "dekoration"},
"itemTypeMiscellaneous":function(d){return "diverse"},
"itemTypeTool":function(d){return "værktøj"},
"items":function(d){return "genstand(e)"},
"itemsOfBlockType":function(d){return "genstand(e) af bloktype"},
"level10FailureMessage":function(d){return "Dæk lavaen til, så du kan gå på den, og udvind så to jernblokke på den anden side."},
"level11FailureMessage":function(d){return "Sørg for at placere brosten, hvis der er lava forude. Så kan du udvinde ressourcer fra rækken i sikkerhed."},
"level12FailureMessage":function(d){return "Sørg for at udvinde tre rødstensblokke. Denne opgave kombinerer de ting, du har lært ved at bygge dit hus og ved at bruge \"hvis\"-kommandoer, så du undgår at falde i lavaen."},
"level13FailureMessage":function(d){return "Placér en \"skinne\" langs stien, der går fra din dør til kanten af kortet."},
"level1FailureMessage":function(d){return "Du skal bruge kommandoer for at få fåret til at gå."},
"level1TooFewBlocksMessage":function(d){return "Prøv at bruge kommandoer for at få fåret til at gå."},
"level2FailureMessage":function(d){return "Fæld et træ ved at gå hen til stammen og bruge \"ødelæg blok\"-kommandoen."},
"level2TooFewBlocksMessage":function(d){return "Prøv at bruge kommandoer for at fælde træet. Fæld et træ ved at gå hen til stammen og bruge \"ødelæg blok\"-kommandoen."},
"level3FailureMessage":function(d){return "Saml uld fra begge får ved at gå hen til hver af dem og bruge \"klip\"-kommandoen. Husk at bruge \"drej\"-kommandoer for at nå frem til fåret."},
"level3TooFewBlocksMessage":function(d){return "Prøv at bruge flere kommandoer for at samle uld fra begge får. Gå hen til hver af dem, og brug \"klip\"-kommandoen."},
"level4FailureMessage":function(d){return "Du skal bruge \"ødelæg blok\"-kommandoen på hver af de tre træstammer."},
"level5FailureMessage":function(d){return "Placér dine blokke på jordmarkeringerne for at bygge en væg. Den lyserøde \"gentag\"-kommando afvikler kommandoer, der placeres i den, såsom \"placér blok\" og \"ryk fremad\"."},
"level6FailureMessage":function(d){return "Placér blokke på jordmarkeringerne uden for huset for at gennemføre hovedbruddet."},
"level7FailureMessage":function(d){return "Brug \"plant\"-kommandoen for at plante afgrøder på hvert felt med mørkt, pløjet jord."},
"level8FailureMessage":function(d){return "Hvis du rører ved en sniger, eksploderer den. List dig rundt om dem, og kom ind i dit hus."},
"level9FailureMessage":function(d){return "Glem ikke at placere mindst to fakler for at give lys, OG udvind mindst to stykker kul."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "maskeret"},
"maskModeReplace":function(d){return "erstat"},
"minecraftBlock":function(d){return "blok"},
"minecraftNotConnected":function(d){return "Minecraft har ikke forbindelse"},
"miniBlockBricks":function(d){return "tegl"},
"miniBlockBucketLava":function(d){return "lavaspand"},
"miniBlockBucketWater":function(d){return "vandspand"},
"miniBlockCarrots":function(d){return "gulerødder"},
"miniBlockCoal":function(d){return "kul"},
"miniBlockCobblestone":function(d){return "brosten"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "jord"},
"miniBlockDirtCoarse":function(d){return "grov jord"},
"miniBlockEgg":function(d){return "æg"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "grus"},
"miniBlockGunPowder":function(d){return "krudt"},
"miniBlockIngotGold":function(d){return "guldbarre"},
"miniBlockIngotIron":function(d){return "jernbarre"},
"miniBlockLapisLazuli":function(d){return "lasursten"},
"miniBlockLogAcacia":function(d){return "akaciekævle"},
"miniBlockLogBirch":function(d){return "birkekævle"},
"miniBlockLogJungle":function(d){return "jungletræskævle"},
"miniBlockLogOak":function(d){return "egetræskævle"},
"miniBlockLogSpruce":function(d){return "grantræskævle"},
"miniBlockMilk":function(d){return "mælk"},
"miniBlockPlanksAcacia":function(d){return "akacietræplanker"},
"miniBlockPlanksBirch":function(d){return "birkeplanker"},
"miniBlockPlanksJungle":function(d){return "jungletræsplanker"},
"miniBlockPlanksOak":function(d){return "egetræsplanker"},
"miniBlockPlanksSpruce":function(d){return "grantræsplanker"},
"miniBlockPoppy":function(d){return "valmue"},
"miniBlockPotato":function(d){return "kartoffel"},
"miniBlockRedstoneDust":function(d){return "redstone-pulver"},
"miniBlockSand":function(d){return "sand"},
"miniBlockSandstone":function(d){return "sandsten"},
"miniBlockSheep":function(d){return "får"},
"miniBlockWheat":function(d){return "hvede"},
"miniBlockWool":function(d){return "uld"},
"nextLevelMsg":function(d){return "Hovedbrud "+craft_locale.v(d,"puzzleNumber")+" gennemført. Tillykke!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "ødelæg"},
"oldBlockHandlingsKeep":function(d){return "behold"},
"oldBlockHandlingsReplace":function(d){return "erstat"},
"onBehalfOf":function(d){return "på vegne af"},
"playerSelectChooseCharacter":function(d){return "Vælg din figur."},
"playerSelectChooseSelectButton":function(d){return "Vælg"},
"playerSelectLetsGetStarted":function(d){return "Lad os komme i gang."},
"quantity":function(d){return "kvantitet"},
"reinfFeedbackMsg":function(d){return "Tryk på \"Fortsæt med at spille\" for at vende tilbage til dit spil."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Kør agent"},
"score":function(d){return "Score"},
"seconds":function(d){return "sekund(er)"},
"selectChooseButton":function(d){return "Vælg"},
"soundTypeBump":function(d){return "bule"},
"soundTypeChickenBawk":function(d){return "kyllingekluk"},
"soundTypeChickenHurt":function(d){return "såret kylling"},
"soundTypeCollectedBlock":function(d){return "blokindsamling"},
"soundTypeCowHuff":function(d){return "ko-fnys"},
"soundTypeCowHurt":function(d){return "såret ko"},
"soundTypeCowMoo":function(d){return "ko-muh"},
"soundTypeCowMooLong":function(d){return "ko-muuh"},
"soundTypeCreeperHiss":function(d){return "creeperhvæs"},
"soundTypeDig_wood1":function(d){return "træ, der knækker"},
"soundTypeDoorOpen":function(d){return "døråbning"},
"soundTypeExplode":function(d){return "eksploder"},
"soundTypeFailure":function(d){return "dumpet opgave"},
"soundTypeFall":function(d){return "fald"},
"soundTypeFizz":function(d){return "hvislen"},
"soundTypeFuse":function(d){return "lunte"},
"soundTypeIronGolemHit":function(d){return "slag fra jerngolem"},
"soundTypeMetalWhack":function(d){return "metallisk slag"},
"soundTypeMinecart":function(d){return "minevogn"},
"soundTypePlaceBlock":function(d){return "blokplacering"},
"soundTypePunch":function(d){return "slag"},
"soundTypeSheepBaa":function(d){return "fårebrægen"},
"soundTypeStepFarmland":function(d){return "skridt på landbrugsjord"},
"soundTypeStepGrass":function(d){return "skridt i græs"},
"soundTypeStepGravel":function(d){return "skridt i grus"},
"soundTypeStepStone":function(d){return "skridt på sten"},
"soundTypeStepWood":function(d){return "skridt på træ"},
"soundTypeSuccess":function(d){return "løst opgave"},
"soundTypeZombieBrains":function(d){return "zombiestøn"},
"soundTypeZombieGroan":function(d){return "zombieknurren"},
"soundTypeZombieHurt":function(d){return "såret zombie"},
"target":function(d){return "mål"},
"testModeAll":function(d){return "alle"},
"testModeMasked":function(d){return "maskeret"},
"tileData":function(d){return "flisedata"},
"timeDay":function(d){return "dag"},
"timeLong":function(d){return "lang"},
"timeMedium":function(d){return "mellem"},
"timeNight":function(d){return "nat"},
"timeRandom":function(d){return "tilfældig"},
"timeSet":function(d){return "sæt tid til"},
"timeShort":function(d){return "kort"},
"timeVeryLong":function(d){return "meget lang"},
"timeVeryShort":function(d){return "meget kort"},
"to":function(d){return "til"},
"toSlotNumber":function(d){return "til plads nummer"},
"tooManyBlocksFail":function(d){return "Hovedbrud "+craft_locale.v(d,"puzzleNumber")+" gennemført. Tillykke! Det er også muligt at gennemføre det med "+craft_locale.p(d,"numBlocks",0,"da",{"one":"1 blok","other":craft_locale.n(d,"numBlocks")+" blokke"})+"."},
"turnRandom":function(d){return "drej tilfældigt"},
"useArrowKeys":function(d){return "Du behøver ikke at tilføje blokke! Bevæg dig rundt med pilene, og tryk på mellemrumstasten eller på spilleområdet for at bruge genstande."},
"weather":function(d){return "vejr"},
"weatherTypeClear":function(d){return "klart"},
"weatherTypeRain":function(d){return "regn"},
"weatherTypeThunder":function(d){return "thunder"}};