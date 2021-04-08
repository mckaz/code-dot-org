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
"absolute":function(d){return "algildi"},
"agentGenericFailureMessage":function(d){return "Haltu áfram að kóða! Mundu að nota Umba til að hjálpa þér."},
"agentTooFewBlocksFailureMessage":function(d){return "Prófaðu að bæta bara einum kubbi við í einu til að koma Umba á réttan stað."},
"at":function(d){return "hjá"},
"agentDiamondPathCongrats":function(d){return "Til hamingju, þú fannst demantaleiðina! Þú hefur nú safnað "+craft_locale.p(d,"count",0,"is",{"one":"1 demanti","other":craft_locale.n(d,"count")+" demöntum"})+"!"},
"blockActionAdd":function(d){return "bæta við"},
"blockActionAttack":function(d){return "ráðast á"},
"blockActionClone":function(d){return "klóna blokkir"},
"blockActionCloneFiltered":function(d){return "klóna aðeins"},
"blockActionCollect":function(d){return "safna"},
"blockActionCollectAll":function(d){return "safna öllu"},
"blockActionDestroyEntity":function(d){return "hverfa"},
"blockActionDetect":function(d){return "finna"},
"blockActionDetectRedstone":function(d){return "finna roðastein"},
"blockActionDrop":function(d){return "gefa"},
"blockActionDropAll":function(d){return "sleppa öllu"},
"blockActionExecute":function(d){return "gera aðgerð"},
"blockActionExplodeEntity":function(d){return "springa"},
"blockActionFill":function(d){return "fylla"},
"blockActionFlashEntity":function(d){return "blikka"},
"blockActionGetItemCount":function(d){return "fá fjölda hluta"},
"blockActionGetItemCountInSlotNumber":function(d){return "fá fjölda hluta í reit númer"},
"blockActionGetItemDetail":function(d){return "fá nánar um hlut"},
"blockActionGetItemDetailInSlotNumber":function(d){return "fá upplýsingar um hlut í reit númer"},
"blockActionGetItemSpace":function(d){return "fá rými hlutar"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "fá pláss hlutar í reit númer"},
"blockActionGive":function(d){return "gefa"},
"blockActionInspect":function(d){return "skoða"},
"blockActionInspectData":function(d){return "skoða gögn"},
"blockActionKill":function(d){return "drepa mark"},
"blockActionMove":function(d){return "færa"},
"blockActionMoveAway":function(d){return "fara burt frá"},
"blockActionMoveForward":function(d){return "færa áfram"},
"blockActionMoveRandom":function(d){return "fara eitthvað"},
"blockActionMoveTo":function(d){return "fara til"},
"blockActionMoveToward":function(d){return "fara skref í átt til"},
"blockActionPlaySound":function(d){return "spila hljóð"},
"blockActionRepeat":function(d){return "endurtaka"},
"blockActionRepeatRandom":function(d){return "endurtaka eitthvað oft"},
"blockActionSetBlock":function(d){return "setja blokk"},
"blockActionSpawn":function(d){return "kveikja"},
"blockActionSummon":function(d){return "kalla á"},
"blockActionTeleport":function(d){return "fjarflytja"},
"blockActionTeleportToPlayer":function(d){return "fjarflytja til leikmanns"},
"blockActionTestForBlock":function(d){return "prófar tegund blokkar"},
"blockActionTestForBlocks":function(d){return "prófar hvort mynstrið á milli"},
"blockActionToScore":function(d){return "við skor"},
"blockActionTransfer":function(d){return "flytja"},
"blockActionWait":function(d){return "bíða"},
"blockActionWith":function(d){return "með"},
"blockData":function(d){return "gögn kubbs"},
"blockDestroyBlock":function(d){return "eyða blokk"},
"blockIf":function(d){return "ef"},
"blockIfLavaAhead":function(d){return "ef hraun framundan"},
"blockIs":function(d){return "er"},
"blockMove":function(d){return "færa"},
"blockMoveBackward":function(d){return "fara aftur á bak"},
"blockMoveForward":function(d){return "færa áfram"},
"blockPlace":function(d){return "setja"},
"blockPlaceTorch":function(d){return "setja kyndil"},
"blockPlaceXAheadAhead":function(d){return "framfyrir"},
"blockPlaceXAheadPlace":function(d){return "setja"},
"blockPlaceXPlace":function(d){return "setja"},
"blockPlantCrop":function(d){return "planta jurt"},
"blockShear":function(d){return "rýja"},
"blockTill":function(d){return "plægja"},
"blockTillSoil":function(d){return "yrkja mold"},
"blockTurn":function(d){return "snúa"},
"blockTurnLeft":function(d){return "snúa til vinstri"},
"blockTurnRight":function(d){return "snúa til hægri"},
"blockType":function(d){return "tegund kubbs"},
"blockTypeBedrock":function(d){return "grunnklöpp"},
"blockTypeBricks":function(d){return "múrsteina"},
"blockTypeClay":function(d){return "leir"},
"blockTypeClayHardened":function(d){return "hertan leir"},
"blockTypeCobblestone":function(d){return "hleðslustein"},
"blockTypeDirt":function(d){return "mold"},
"blockTypeDirtCoarse":function(d){return "grófa mold"},
"blockTypeDoorIron":function(d){return "járnhurð"},
"blockTypeEmpty":function(d){return "ekkert"},
"blockTypeFarmlandWet":function(d){return "ræktarjörð"},
"blockTypeGlass":function(d){return "gler"},
"blockTypeGlowstone":function(d){return "glósteinn"},
"blockTypeGrass":function(d){return "gras"},
"blockTypeGravel":function(d){return "möl"},
"blockTypeLava":function(d){return "hraun"},
"blockTypeLogAcacia":function(d){return "akasíudrumb"},
"blockTypeLogBirch":function(d){return "birkidrumb"},
"blockTypeLogJungle":function(d){return "frumskógardrumb"},
"blockTypeLogOak":function(d){return "eikardrumb"},
"blockTypeLogSpruce":function(d){return "grenidrumb"},
"blockTypeOreCoal":function(d){return "kolagrýti"},
"blockTypeOreDiamond":function(d){return "demantagrýti"},
"blockTypeOreEmerald":function(d){return "smaragðagrýti"},
"blockTypeOreGold":function(d){return "gullgrýti"},
"blockTypeOreIron":function(d){return "járngrýti"},
"blockTypeOreLapis":function(d){return "blásteinsgrýti"},
"blockTypeOreRedstone":function(d){return "roðasteinsgrýti"},
"blockTypePlanksAcacia":function(d){return "akasíuplanka"},
"blockTypePlanksBirch":function(d){return "birkiplanka"},
"blockTypePlanksJungle":function(d){return "frumskógarplanka"},
"blockTypePlanksOak":function(d){return "eikarplanka"},
"blockTypePlanksSpruce":function(d){return "greniplanka"},
"blockTypePressurePlateUp":function(d){return "þrýstihella"},
"blockTypeRail":function(d){return "teina"},
"blockTypeRailsRedstoneTorch":function(d){return "roðasteinskyndill"},
"blockTypeRedstoneWire":function(d){return "roðasteinsvír"},
"blockTypeSand":function(d){return "sandur"},
"blockTypeSandstone":function(d){return "sandstein"},
"blockTypeStone":function(d){return "stein"},
"blockTypeTnt":function(d){return "tnt"},
"blockTypeTree":function(d){return "tré"},
"blockTypeWater":function(d){return "vatn"},
"blockTypeWool":function(d){return "ull"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "framfyrir"},
"blockWhileXAheadDo":function(d){return "gera"},
"blockWhileXAheadWhile":function(d){return "meðan"},
"cancel":function(d){return "Hætta við"},
"cloneMode":function(d){return "klónstaða"},
"cloneModeForce":function(d){return "kraftur"},
"cloneModeMove":function(d){return "færa"},
"cloneModeNormal":function(d){return "venjulegt"},
"connectToCodeConnection":function(d){return "Þú getur notað Code Connection appið til að keyra þetta verkefni í Minecraft: Education Edition."},
"destination":function(d){return "áfangastaður"},
"directionBack":function(d){return "aftur"},
"directionDown":function(d){return "niðri"},
"directionForward":function(d){return "áfram"},
"directionLeft":function(d){return "vinstri"},
"directionMiddle":function(d){return "í miðju"},
"directionRight":function(d){return "hægri"},
"directionUp":function(d){return "uppi"},
"downloadButton":function(d){return "Hlaða niður"},
"entityType":function(d){return "tegund hlutar"},
"entityTypeChicken":function(d){return "hænsn"},
"entityTypeCow":function(d){return "kýr"},
"entityTypeCreeper":function(d){return "laumupúki"},
"entityTypeIronGolem":function(d){return "járnþurs"},
"entityTypePlayer":function(d){return "leikmaður"},
"entityTypeSheep":function(d){return "kind"},
"entityTypeZombie":function(d){return "uppvakningur"},
"eventTypeWhenAttacked":function(d){return "þegar ráðist á"},
"eventTypeWhenDay":function(d){return "þegar dagur"},
"eventTypeWhenNight":function(d){return "þegar nótt"},
"eventTypeWhenRun":function(d){return "þegar keyrt"},
"eventTypeWhenSpawned":function(d){return "þegar kviknar"},
"eventTypeWhenTouched":function(d){return "þegar snert"},
"eventTypeWhenUsed":function(d){return "þegar notað"},
"forever":function(d){return "að eilífu"},
"from":function(d){return "frá"},
"generatedCodeDescription":function(d){return "Með því að draga og setja kubba í þessa þraut hefur þú búið til röð fyrirmæla á tölvutungumáli sem nefnist JavaScript. Það segir tölvum hvað á að sýna á skjánum. Allt sem þú sérð og gerir í MineCraft byrjar líka á svona línum af tölvukóða."},
"getdataof":function(d){return "fá gögn um"},
"getnameof":function(d){return "fá heiti"},
"houseSelectChooseFloorPlan":function(d){return "Veldu grunnteikningu fyrir húsið þitt."},
"houseSelectEasy":function(d){return "Auðveld"},
"houseSelectHard":function(d){return "Erfið"},
"houseSelectLetsBuild":function(d){return "Við skulum byggja hús."},
"houseSelectMedium":function(d){return "Miðlungs"},
"import":function(d){return "Flytja inn"},
"importShareLinkBody":function(d){return "Skrifaðu deilislóðina frá Klukkustund kóðunar hér og smelltu á \"Flytja inn\" til að afrita kóðann þinn í Minecraft"},
"importShareLinkHeader":function(d){return "Flytja inn deilislóð"},
"inSlotNumber":function(d){return "í rauf nr."},
"itemTypeBlock":function(d){return "blokk"},
"itemTypeDecoration":function(d){return "skreyting"},
"itemTypeMiscellaneous":function(d){return "ýmislegt"},
"itemTypeTool":function(d){return "verkfæri"},
"items":function(d){return "hlutur/ir"},
"itemsOfBlockType":function(d){return "stk. af blokk teg."},
"level10FailureMessage":function(d){return "Fylltu upp í hraunið til að ganga yfir og grafðu svo út tvær járnblokkir hinum megin."},
"level11FailureMessage":function(d){return "Gættu þess að setja hleðslustein þegar hraun er framundan. Þá getur þú grafið út þessa röð af hráefni í öryggi."},
"level12FailureMessage":function(d){return "Gættu þess að grafa út 3 roðasteina. Þessi þraut sameinar það sem þú lærðir við að byggja húsið og það að nota „ef“ setningar til að forðast að falla í hraun."},
"level13FailureMessage":function(d){return "Leggðu teina eftir moldarslóðinni frá húsdyrunum út að jaðri kortsins."},
"level1FailureMessage":function(d){return "Þú verður að nota skipanir til að ganga að kindinni."},
"level1TooFewBlocksMessage":function(d){return "Reyndu að nota fleiri skipanir til að ganga að kindinni."},
"level2FailureMessage":function(d){return "Höggðu niður tré með því að ganga að stofni þess og nota \"eyða blokk\" skipunina."},
"level2TooFewBlocksMessage":function(d){return "Reyndu að nota fleiri skipanir til að höggva niður tréð. Gakktu að stofni þess og notaðu \"eyða blokk\" skipunina."},
"level3FailureMessage":function(d){return "Safnaðu ull af báðum kindunum með því að ganga að hvorri um sig og nota \"rýja\" skipunina. Mundu að nota \"snúa\" skipanir til að komast til kindanna."},
"level3TooFewBlocksMessage":function(d){return "Reyndu að nota fleiri skipanir til að safna ull af báðum kindunum. Gakktu að hvorri um sig og notaðu „rýja“ skipunina."},
"level4FailureMessage":function(d){return "Þú verður að nota \"eyða blokk\" skipunina á hvern af þessum þremur trjábolum."},
"level5FailureMessage":function(d){return "Settu blokkirnar á moldarútlínuna til að byggja vegg. Bleika \"endurtaka\" skipunin keyrir skipanir sem eru settar í hana, t.d. \"setja blokk\" og \"færa áfram\"."},
"level6FailureMessage":function(d){return "Settu blokkir á moldarútlínuna fyrir húsið til að ljúka þrautinni."},
"level7FailureMessage":function(d){return "Notaðu \"planta\" skipunina til að setja jurtir á hvern reit af dökkri plægðri mold."},
"level8FailureMessage":function(d){return "Ef þú snertir laumupúka mun hann springa. Laumastu framhjá þeim og farðu inn í húsið."},
"level9FailureMessage":function(d){return "Ekki gleyma að setja upp minnst 2 ljós til að lýsa leiðina OG grafa út minnst 2 af kolum."},
"maskMode":function(d){return "maskastaða"},
"maskModeMasked":function(d){return "maskað"},
"maskModeReplace":function(d){return "skipta út"},
"minecraftBlock":function(d){return "blokk"},
"minecraftNotConnected":function(d){return "Minecraft er ótengt"},
"miniBlockBricks":function(d){return "múrsteina"},
"miniBlockBucketLava":function(d){return "hraunfötu"},
"miniBlockBucketWater":function(d){return "vatnsfötu"},
"miniBlockCarrots":function(d){return "gulrætur"},
"miniBlockCoal":function(d){return "kol"},
"miniBlockCobblestone":function(d){return "hleðslustein"},
"miniBlockDiamond":function(d){return "demant"},
"miniBlockDirt":function(d){return "mold"},
"miniBlockDirtCoarse":function(d){return "grófa mold"},
"miniBlockEgg":function(d){return "egg"},
"miniBlockEmerald":function(d){return "smaragð"},
"miniBlockGravel":function(d){return "möl"},
"miniBlockGunPowder":function(d){return "byssupúður"},
"miniBlockIngotGold":function(d){return "gullstöng"},
"miniBlockIngotIron":function(d){return "járnstöng"},
"miniBlockLapisLazuli":function(d){return "blástein"},
"miniBlockLogAcacia":function(d){return "akasíudrumb"},
"miniBlockLogBirch":function(d){return "birkidrumb"},
"miniBlockLogJungle":function(d){return "frumskógardrumb"},
"miniBlockLogOak":function(d){return "eikardrumb"},
"miniBlockLogSpruce":function(d){return "grenidrumb"},
"miniBlockMilk":function(d){return "mjólk"},
"miniBlockPlanksAcacia":function(d){return "akasíuplanka"},
"miniBlockPlanksBirch":function(d){return "birkiplanka"},
"miniBlockPlanksJungle":function(d){return "frumskógarplanka"},
"miniBlockPlanksOak":function(d){return "eikarplanka"},
"miniBlockPlanksSpruce":function(d){return "greniplanka"},
"miniBlockPoppy":function(d){return "valmúa"},
"miniBlockPotato":function(d){return "kartöflu"},
"miniBlockRedstoneDust":function(d){return "roðasteinsduft"},
"miniBlockSand":function(d){return "sand"},
"miniBlockSandstone":function(d){return "sandstein"},
"miniBlockSheep":function(d){return "kind"},
"miniBlockWheat":function(d){return "hveiti"},
"miniBlockWool":function(d){return "ull"},
"nextLevelMsg":function(d){return "Þraut "+craft_locale.v(d,"puzzleNumber")+" lokið. Til hamingju!"},
"oldBlockHandling":function(d){return "fyrri blokk"},
"oldBlockHandlingsDestroy":function(d){return "eyða"},
"oldBlockHandlingsKeep":function(d){return "halda"},
"oldBlockHandlingsReplace":function(d){return "skipta út"},
"onBehalfOf":function(d){return "fyrir hönd"},
"playerSelectChooseCharacter":function(d){return "Veldu persónu."},
"playerSelectChooseSelectButton":function(d){return "Velja"},
"playerSelectLetsGetStarted":function(d){return "Komum okkur af stað."},
"quantity":function(d){return "magn"},
"reinfFeedbackMsg":function(d){return "Þú getur ýtt á \"Spila áfram\" til að fara aftur í að spila leikinn þinn."},
"relative":function(d){return "afstætt"},
"runAgent":function(d){return "Keyra Umba"},
"score":function(d){return "Stig"},
"seconds":function(d){return "sekúnda/ur"},
"selectChooseButton":function(d){return "Velja"},
"soundTypeBump":function(d){return "rekast á"},
"soundTypeChickenBawk":function(d){return "hæna gaggar"},
"soundTypeChickenHurt":function(d){return "hæna meidd"},
"soundTypeCollectedBlock":function(d){return "taka blokk"},
"soundTypeCowHuff":function(d){return "kýr blæs"},
"soundTypeCowHurt":function(d){return "kýr meidd"},
"soundTypeCowMoo":function(d){return "kýr baular"},
"soundTypeCowMooLong":function(d){return "kýr bauaular"},
"soundTypeCreeperHiss":function(d){return "laumupúki hvæsir"},
"soundTypeDig_wood1":function(d){return "viður brotnar"},
"soundTypeDoorOpen":function(d){return "dyr opnast"},
"soundTypeExplode":function(d){return "springa"},
"soundTypeFailure":function(d){return "borð mistekst"},
"soundTypeFall":function(d){return "fall"},
"soundTypeFizz":function(d){return "freyða"},
"soundTypeFuse":function(d){return "kveikur"},
"soundTypeIronGolemHit":function(d){return "járnþurs hæfður"},
"soundTypeMetalWhack":function(d){return "högg járns"},
"soundTypeMinecart":function(d){return "námuvagn"},
"soundTypePlaceBlock":function(d){return "blokk sett"},
"soundTypePunch":function(d){return "högg"},
"soundTypeSheepBaa":function(d){return "kind jarmar"},
"soundTypeStepFarmland":function(d){return "fóthljóð á akri"},
"soundTypeStepGrass":function(d){return "fóthljóð á grasi"},
"soundTypeStepGravel":function(d){return "fóthljóð á möl"},
"soundTypeStepStone":function(d){return "fóthljóð á steini"},
"soundTypeStepWood":function(d){return "fóthljóð á timbri"},
"soundTypeSuccess":function(d){return "borð heppnast"},
"soundTypeZombieBrains":function(d){return "uppvakningsstuna"},
"soundTypeZombieGroan":function(d){return "uppvakningsurr"},
"soundTypeZombieHurt":function(d){return "uppvakningur sár"},
"target":function(d){return "mark"},
"testModeAll":function(d){return "allt"},
"testModeMasked":function(d){return "maskað"},
"tileData":function(d){return "gögn flögu"},
"timeDay":function(d){return "dagur"},
"timeLong":function(d){return "lengi"},
"timeMedium":function(d){return "miðlungs"},
"timeNight":function(d){return "nótt"},
"timeRandom":function(d){return "af handahófi"},
"timeSet":function(d){return "tímasetning"},
"timeShort":function(d){return "stutt"},
"timeVeryLong":function(d){return "mjög lengi"},
"timeVeryShort":function(d){return "mjög stutt"},
"to":function(d){return "til að"},
"toSlotNumber":function(d){return "í rauf nr."},
"tooManyBlocksFail":function(d){return "Þraut "+craft_locale.v(d,"puzzleNumber")+" lokið. Til hamingju! Það er líka hægt að ljúka henni með "+craft_locale.p(d,"numBlocks",0,"is",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "snúa eitthvað"},
"useArrowKeys":function(d){return "Þú þarft ekki að bæta við neinum kubbum! Færðu með örvunum og ýttu á bilslána eða sláðu á leikjaspjaldið til að nota hluti."},
"weather":function(d){return "veður"},
"weatherTypeClear":function(d){return "heiðskírt"},
"weatherTypeRain":function(d){return "regn"},
"weatherTypeThunder":function(d){return "þrumur"}};