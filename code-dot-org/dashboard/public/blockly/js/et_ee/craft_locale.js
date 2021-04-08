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
"absolute":function(d){return "absoluutväärtus"},
"agentGenericFailureMessage":function(d){return "Jätka koodi kirjutamist! Ärge unustage kasutada Agendi abi."},
"agentTooFewBlocksFailureMessage":function(d){return "Proovige lisada ainult üks plokk korrada, et viia tegelene õigesse kohta."},
"at":function(d){return "seal"},
"agentDiamondPathCongrats":function(d){return "Palju õnne, olete leidnud raja teemantini Oled kogunud  "+craft_locale.p(d,"count",0,"et",{"one":"1 teemanti","other":craft_locale.n(d,"count")+" teemanti"})+" ! "},
"blockActionAdd":function(d){return "lisa"},
"blockActionAttack":function(d){return "rünnak"},
"blockActionClone":function(d){return "klooni plokke"},
"blockActionCloneFiltered":function(d){return "ainult kopeeri"},
"blockActionCollect":function(d){return "kogu"},
"blockActionCollectAll":function(d){return "kogu kõik kokku"},
"blockActionDestroyEntity":function(d){return "kaduma"},
"blockActionDetect":function(d){return "tuvasta"},
"blockActionDetectRedstone":function(d){return "tuvasta punakivi"},
"blockActionDrop":function(d){return "kukuta"},
"blockActionDropAll":function(d){return "viska kõik maha"},
"blockActionExecute":function(d){return "vii käsklus täide"},
"blockActionExplodeEntity":function(d){return "lõhka"},
"blockActionFill":function(d){return "täida vorm"},
"blockActionFlashEntity":function(d){return "välgata"},
"blockActionGetItemCount":function(d){return "küsi üksuste arvu"},
"blockActionGetItemCountInSlotNumber":function(d){return "küsi üksuste arvu pesas number"},
"blockActionGetItemDetail":function(d){return "küsi üksuste detaile"},
"blockActionGetItemDetailInSlotNumber":function(d){return "küsi üksuste arvu pesas numbris"},
"blockActionGetItemSpace":function(d){return "küsi üksuse ruumi"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "küsi üksuse ruumi pesas number"},
"blockActionGive":function(d){return "anna"},
"blockActionInspect":function(d){return "kontrolli"},
"blockActionInspectData":function(d){return "kontrolli andmeid"},
"blockActionKill":function(d){return "tapa sihtmärk"},
"blockActionMove":function(d){return "liiguta"},
"blockActionMoveAway":function(d){return "liigu eemale"},
"blockActionMoveForward":function(d){return "liigu edasi"},
"blockActionMoveRandom":function(d){return "liigu juhuslikult"},
"blockActionMoveTo":function(d){return "liigu... poole"},
"blockActionMoveToward":function(d){return "liigu samm... poole"},
"blockActionPlaySound":function(d){return "mängi heli"},
"blockActionRepeat":function(d){return "korda"},
"blockActionRepeatRandom":function(d){return "korda juhuslikult"},
"blockActionSetBlock":function(d){return "aseta plokk"},
"blockActionSpawn":function(d){return "loo"},
"blockActionSummon":function(d){return "kutsu"},
"blockActionTeleport":function(d){return "telepordi sihtmärk"},
"blockActionTeleportToPlayer":function(d){return "teleport mängija juurde"},
"blockActionTestForBlock":function(d){return "kontrolli, kas ploki tüüp"},
"blockActionTestForBlocks":function(d){return "katseta, kas vaheline muster"},
"blockActionToScore":function(d){return "skoorima"},
"blockActionTransfer":function(d){return "kanna üle"},
"blockActionWait":function(d){return "oota"},
"blockActionWith":function(d){return "koos"},
"blockData":function(d){return "ploki andmed"},
"blockDestroyBlock":function(d){return "purusta plokk"},
"blockIf":function(d){return "kui"},
"blockIfLavaAhead":function(d){return "kui ees on laava"},
"blockIs":function(d){return "on"},
"blockMove":function(d){return "liiguta"},
"blockMoveBackward":function(d){return "liigu tagasi"},
"blockMoveForward":function(d){return "liigu edasi"},
"blockPlace":function(d){return "aseta"},
"blockPlaceTorch":function(d){return "aseta tõrvik"},
"blockPlaceXAheadAhead":function(d){return "ees"},
"blockPlaceXAheadPlace":function(d){return "aseta"},
"blockPlaceXPlace":function(d){return "aseta"},
"blockPlantCrop":function(d){return "istuta vili"},
"blockShear":function(d){return "püga"},
"blockTill":function(d){return "kuni"},
"blockTillSoil":function(d){return "hari pinnast"},
"blockTurn":function(d){return "pööra"},
"blockTurnLeft":function(d){return "pööra vasakule"},
"blockTurnRight":function(d){return "pööra paremale"},
"blockType":function(d){return "ploki tüüp"},
"blockTypeBedrock":function(d){return "aluskivi"},
"blockTypeBricks":function(d){return "tellised"},
"blockTypeClay":function(d){return "savi"},
"blockTypeClayHardened":function(d){return "küpsetatud savi"},
"blockTypeCobblestone":function(d){return "munakivi"},
"blockTypeDirt":function(d){return "muld"},
"blockTypeDirtCoarse":function(d){return "jäme muld"},
"blockTypeDoorIron":function(d){return "rauduks"},
"blockTypeEmpty":function(d){return "tühi"},
"blockTypeFarmlandWet":function(d){return "põllumaa"},
"blockTypeGlass":function(d){return "klaas"},
"blockTypeGlowstone":function(d){return "hõõgkivi"},
"blockTypeGrass":function(d){return "muru"},
"blockTypeGravel":function(d){return "kruus"},
"blockTypeLava":function(d){return "laava"},
"blockTypeLogAcacia":function(d){return "akaatsiapalk"},
"blockTypeLogBirch":function(d){return "kasepalk"},
"blockTypeLogJungle":function(d){return "džunglipuupalk"},
"blockTypeLogOak":function(d){return "tammepalk"},
"blockTypeLogSpruce":function(d){return "kuusepalk"},
"blockTypeOreCoal":function(d){return "söemaak"},
"blockTypeOreDiamond":function(d){return "teemandimaak"},
"blockTypeOreEmerald":function(d){return "smaragdimaak"},
"blockTypeOreGold":function(d){return "kullamaak"},
"blockTypeOreIron":function(d){return "rauamaak"},
"blockTypeOreLapis":function(d){return "lasuriidimaak"},
"blockTypeOreRedstone":function(d){return "punakivimaak"},
"blockTypePlanksAcacia":function(d){return "akaatsialauad"},
"blockTypePlanksBirch":function(d){return "kaselauad"},
"blockTypePlanksJungle":function(d){return "džunglipuulauad"},
"blockTypePlanksOak":function(d){return "tammelauad"},
"blockTypePlanksSpruce":function(d){return "kuuselauad"},
"blockTypePressurePlateUp":function(d){return "surveplaat"},
"blockTypeRail":function(d){return "rööbas"},
"blockTypeRailsRedstoneTorch":function(d){return "punakivitõrvik"},
"blockTypeRedstoneWire":function(d){return "punakivijuhe"},
"blockTypeSand":function(d){return "liiv"},
"blockTypeSandstone":function(d){return "liivakivi"},
"blockTypeStone":function(d){return "kivi"},
"blockTypeTnt":function(d){return "dünamiit"},
"blockTypeTree":function(d){return "puu"},
"blockTypeWater":function(d){return "vesi"},
"blockTypeWool":function(d){return "vill"},
"blockTypeWoolBlue":function(d){return "sinine vill"},
"blockTypeWoolMagenta":function(d){return "lilla vill"},
"blockTypeWoolOrange":function(d){return "oranž vill"},
"blockTypeWoolPink":function(d){return "roosa vill"},
"blockTypeWoolRed":function(d){return "punane vill"},
"blockTypeWoolYellow":function(d){return "kollane vill"},
"blockWhileXAheadAhead":function(d){return "ees"},
"blockWhileXAheadDo":function(d){return "täida"},
"blockWhileXAheadWhile":function(d){return "tingimusel"},
"cancel":function(d){return "Tühista"},
"cloneMode":function(d){return "kloonimisrežiim"},
"cloneModeForce":function(d){return "jõud"},
"cloneModeMove":function(d){return "liiguta"},
"cloneModeNormal":function(d){return "tavaline"},
"connectToCodeConnection":function(d){return "Palun kasutage Code Conneciton rakendust, et seda projekti Minecraft: Education Edition'is käivitada."},
"destination":function(d){return "sihtkoht"},
"directionBack":function(d){return "tagasi"},
"directionDown":function(d){return "alla"},
"directionForward":function(d){return "mine edasi"},
"directionLeft":function(d){return "vasakule"},
"directionMiddle":function(d){return "keskele"},
"directionRight":function(d){return "paremale"},
"directionUp":function(d){return "üles"},
"downloadButton":function(d){return "Laadi alla"},
"entityType":function(d){return "üksuse tüüp"},
"entityTypeChicken":function(d){return "kana"},
"entityTypeCow":function(d){return "lehm"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "rauast golem"},
"entityTypePlayer":function(d){return "mängija"},
"entityTypeSheep":function(d){return "lammas"},
"entityTypeZombie":function(d){return "zombi"},
"eventTypeWhenAttacked":function(d){return "kui rünnatakse"},
"eventTypeWhenDay":function(d){return "päeval"},
"eventTypeWhenNight":function(d){return "öösel"},
"eventTypeWhenRun":function(d){return "pärast käivitamist"},
"eventTypeWhenSpawned":function(d){return "kui loodud"},
"eventTypeWhenTouched":function(d){return "kui puudutatakse"},
"eventTypeWhenUsed":function(d){return "kui kasutatakse"},
"forever":function(d){return "igavesti"},
"from":function(d){return "alates"},
"generatedCodeDescription":function(d){return "Selles mõistatuses lohistasid ja paigutasid plokke ning lõid juhiste komplekti sellises arvutikeeles, mille nimi on Javascript. See kood ütleb arvutile, mida ta peab ekraanil kuvama. Kõik, mida sa Minecraftis näed ja teed, algab samuti sellist tüüpi arvutikoodide reaga."},
"getdataof":function(d){return "saa andmeid"},
"getnameof":function(d){return "saada nimi"},
"houseSelectChooseFloorPlan":function(d){return "Vali oma maja projekt."},
"houseSelectEasy":function(d){return "Lihtne"},
"houseSelectHard":function(d){return "Keeruline"},
"houseSelectLetsBuild":function(d){return "Nüüd ehitame maja."},
"houseSelectMedium":function(d){return "Keskmine"},
"import":function(d){return "Impordi"},
"importShareLinkBody":function(d){return "Trüki oma KoodiTunni jagamise link siia ja kliki \"Impordi\", et oma kood Minecrafti kopeerida"},
"importShareLinkHeader":function(d){return "Impordi ja jaga linki"},
"inSlotNumber":function(d){return "pesa numbris"},
"itemTypeBlock":function(d){return "plokk"},
"itemTypeDecoration":function(d){return "kaunistus"},
"itemTypeMiscellaneous":function(d){return "mitmesugust"},
"itemTypeTool":function(d){return "tööriist"},
"items":function(d){return "ese(t)"},
"itemsOfBlockType":function(d){return "ploki tüübi üksused"},
"level10FailureMessage":function(d){return "Kata enne üle kõndimist laava kinni, seejärel kaevanda teiselt poolt kaks rauaplokki."},
"level11FailureMessage":function(d){return "Kui ees on laavat, siis aseta kindlasti enda ette munakivi. Nii saad sa turvaliselt seda ressursirida kaevandada."},
"level12FailureMessage":function(d){return "Kaevanda kindlasti 3 punakiviplokki. Laavasse kukkumise vältimiseks tuleb ühendada see, mida sa õppisid maja ehitamise juures ning „kui“ käskude kasutamine."},
"level13FailureMessage":function(d){return "Aseta „rööbas“ jalgteele, mis viib uksest kaardi ääreni."},
"level1FailureMessage":function(d){return "Lambani kõndimiseks pead kasutama käske."},
"level1TooFewBlocksMessage":function(d){return "Proovi kasutada rohkem käske, et lambani kõndida."},
"level2FailureMessage":function(d){return "Puu langetamiseks kõnni selle tüve juurde ja kasuta käsku „purusta plokk“"},
"level2TooFewBlocksMessage":function(d){return "Proovi kasutada rohkem käske, et puud langetada. Kõnni tüveni ja siis kasuta käsku „purusta plokk“."},
"level3FailureMessage":function(d){return "Villa korjamiseks kõnni iga lamba juurde ja kasuta käsku „püga“. Lammasteni jõudmiseks pea meeles kasutada pööramiskäske."},
"level3TooFewBlocksMessage":function(d){return "Proovi kasutada rohkem käske, et villa korjata. Kõnni iga lamba juurde ja kasuta käsku „püga“."},
"level4FailureMessage":function(d){return "Sa pead kasutama käsku „purusta plokk“ kõigi kolme puutüve juures."},
"level5FailureMessage":function(d){return "Seina ehitamiseks aseta plokid mullase kontuuri peale. Roosa käsk „korda“ käivitab selle sisse asetatud käsud, näiteks „aseta plokk“ ja „liigu edasi“."},
"level6FailureMessage":function(d){return "Mõistatuse lahendamiseks aseta plokid mullast majakontuuri peale."},
"level7FailureMessage":function(d){return "Taimede asetamiseks kasuta käsku „istuta“ iga haritud pinnast tähistava tumeda ruudu peal."},
"level8FailureMessage":function(d){return "Kui sa hirmutajat puutud, siis see plahvatab. Hiili neist mööda ja sisene majja."},
"level9FailureMessage":function(d){return "Ära unusta asetamast vähemalt 2 tõrvikut, et oma teed valgustada JA kaevanda vähemalt 2 sütt."},
"maskMode":function(d){return "maskeeritud režiimis"},
"maskModeMasked":function(d){return "maskeeritud"},
"maskModeReplace":function(d){return "asenda"},
"minecraftBlock":function(d){return "plokk"},
"minecraftNotConnected":function(d){return "Minecraft ei ole ühendatud"},
"miniBlockBricks":function(d){return "tellised"},
"miniBlockBucketLava":function(d){return "laavaämber"},
"miniBlockBucketWater":function(d){return "veeämber"},
"miniBlockCarrots":function(d){return "porgandid"},
"miniBlockCoal":function(d){return "süsi"},
"miniBlockCobblestone":function(d){return "munakivi"},
"miniBlockDiamond":function(d){return "teemant"},
"miniBlockDirt":function(d){return "muld"},
"miniBlockDirtCoarse":function(d){return "jäme muld"},
"miniBlockEgg":function(d){return "muna"},
"miniBlockEmerald":function(d){return "smaragd"},
"miniBlockGravel":function(d){return "kruus"},
"miniBlockGunPowder":function(d){return "püssirohi"},
"miniBlockIngotGold":function(d){return "kullakang"},
"miniBlockIngotIron":function(d){return "rauakang"},
"miniBlockLapisLazuli":function(d){return "lasuriit"},
"miniBlockLogAcacia":function(d){return "akaatsiapalk"},
"miniBlockLogBirch":function(d){return "kasepalk"},
"miniBlockLogJungle":function(d){return "džunglipuupalk"},
"miniBlockLogOak":function(d){return "tammepalk"},
"miniBlockLogSpruce":function(d){return "kuusepalk"},
"miniBlockMilk":function(d){return "piim"},
"miniBlockPlanksAcacia":function(d){return "akaatsialauad"},
"miniBlockPlanksBirch":function(d){return "kaselauad"},
"miniBlockPlanksJungle":function(d){return "džunglipuulauad"},
"miniBlockPlanksOak":function(d){return "tammelauad"},
"miniBlockPlanksSpruce":function(d){return "kuuselauad"},
"miniBlockPoppy":function(d){return "moon"},
"miniBlockPotato":function(d){return "kartul"},
"miniBlockRedstoneDust":function(d){return "redstone'i tolm"},
"miniBlockSand":function(d){return "liiv"},
"miniBlockSandstone":function(d){return "liivakivi"},
"miniBlockSheep":function(d){return "lammas"},
"miniBlockWheat":function(d){return "nisu"},
"miniBlockWool":function(d){return "vill"},
"nextLevelMsg":function(d){return "Mõistatus "+craft_locale.v(d,"puzzleNumber")+" on lahendatud. Tubli!"},
"oldBlockHandling":function(d){return "vana plokkid"},
"oldBlockHandlingsDestroy":function(d){return "hävita"},
"oldBlockHandlingsKeep":function(d){return "hoia alles"},
"oldBlockHandlingsReplace":function(d){return "asenda"},
"onBehalfOf":function(d){return "nimel"},
"playerSelectChooseCharacter":function(d){return "Vali oma tegelaskuju."},
"playerSelectChooseSelectButton":function(d){return "Vali"},
"playerSelectLetsGetStarted":function(d){return "Alustame!"},
"quantity":function(d){return "kogus"},
"reinfFeedbackMsg":function(d){return "Tagasiliikumiseks ja mängu jätkamiseks saad vajutada nuppu „Jätka mängimist“."},
"relative":function(d){return "suhteline"},
"runAgent":function(d){return "Käivitage Agent"},
"score":function(d){return "Tulemus"},
"seconds":function(d){return "sekund(it)"},
"selectChooseButton":function(d){return "Vali"},
"soundTypeBump":function(d){return "müksatus"},
"soundTypeChickenBawk":function(d){return "kana kaagutus"},
"soundTypeChickenHurt":function(d){return "vigastatud kana"},
"soundTypeCollectedBlock":function(d){return "plokkide korjamine"},
"soundTypeCowHuff":function(d){return "lehma turtsatus"},
"soundTypeCowHurt":function(d){return "vigastatud lehm"},
"soundTypeCowMoo":function(d){return "lehm ammub"},
"soundTypeCowMooLong":function(d){return "lehm ammub"},
"soundTypeCreeperHiss":function(d){return "creeper susiseb"},
"soundTypeDig_wood1":function(d){return "puu murdub"},
"soundTypeDoorOpen":function(d){return "uks avaneb"},
"soundTypeExplode":function(d){return "lõhka"},
"soundTypeFailure":function(d){return "tasemel läbikukkumine"},
"soundTypeFall":function(d){return "kukkumine"},
"soundTypeFizz":function(d){return "kihisemine"},
"soundTypeFuse":function(d){return "sütik"},
"soundTypeIronGolemHit":function(d){return "löök rauast golemile"},
"soundTypeMetalWhack":function(d){return "metalli löök"},
"soundTypeMinecart":function(d){return "kaevanduskäru"},
"soundTypePlaceBlock":function(d){return "aseta plokk"},
"soundTypePunch":function(d){return "löök"},
"soundTypeSheepBaa":function(d){return "lamba mää"},
"soundTypeStepFarmland":function(d){return "samm põllumaal"},
"soundTypeStepGrass":function(d){return "samm rohul"},
"soundTypeStepGravel":function(d){return "samm kruusal"},
"soundTypeStepStone":function(d){return "samm kivil"},
"soundTypeStepWood":function(d){return "samm metsas"},
"soundTypeSuccess":function(d){return "edasiminek tasemel"},
"soundTypeZombieBrains":function(d){return "zombi oigamine"},
"soundTypeZombieGroan":function(d){return "zombi urin"},
"soundTypeZombieHurt":function(d){return "vigastatud zombi"},
"target":function(d){return "sihtmärk"},
"testModeAll":function(d){return "kõik"},
"testModeMasked":function(d){return "maskeeritud"},
"tileData":function(d){return "plaatide andmed"},
"timeDay":function(d){return "päev"},
"timeLong":function(d){return "pikk"},
"timeMedium":function(d){return "keskmine"},
"timeNight":function(d){return "öö"},
"timeRandom":function(d){return "juhuslik"},
"timeSet":function(d){return "määra aeg"},
"timeShort":function(d){return "lühike"},
"timeVeryLong":function(d){return "väga pikk"},
"timeVeryShort":function(d){return "väga lühike"},
"to":function(d){return "muutujale"},
"toSlotNumber":function(d){return "pesa numberiks"},
"tooManyBlocksFail":function(d){return "Mõistatus "+craft_locale.v(d,"puzzleNumber")+" on lahendatud. Tubli! Seda on võimalik lahendada ka "+craft_locale.p(d,"numBlocks",0,"et",{"one":"1 ploki","other":craft_locale.n(d,"numBlocks")+" ploki"})+" abil."},
"turnRandom":function(d){return "pööra juhuslikult"},
"useArrowKeys":function(d){return "Teil ei ole vaja ühtegi plokki lisada! Liikuge nooltega ja vajutage tühikut või koputage mängulaule, et esemeid kasutada."},
"weather":function(d){return "ilm"},
"weatherTypeClear":function(d){return "pilvitu"},
"weatherTypeRain":function(d){return "vihm"},
"weatherTypeThunder":function(d){return "äike"}};