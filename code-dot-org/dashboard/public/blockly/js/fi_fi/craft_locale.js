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
"absolute":function(d){return "itseisarvo"},
"agentGenericFailureMessage":function(d){return "Jatka koodaamista! Muista käyttää Agentia apuna."},
"agentTooFewBlocksFailureMessage":function(d){return "Kokeile vain yhden kuution lisäämistä kerrallaan, jotta saat Agentin oikeaan kohtaan."},
"at":function(d){return "klo"},
"agentDiamondPathCongrats":function(d){return "Onneksi olkoon, löysit timanttipolun! Olet kerännyt tähän mennessä "+craft_locale.p(d,"count",0,"fi",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"!"},
"blockActionAdd":function(d){return "lisää"},
"blockActionAttack":function(d){return "hyökkää"},
"blockActionClone":function(d){return "clone kuutioita"},
"blockActionCloneFiltered":function(d){return "klooni pelkästään"},
"blockActionCollect":function(d){return "kerätä"},
"blockActionCollectAll":function(d){return "kerää kaikki"},
"blockActionDestroyEntity":function(d){return "kadota"},
"blockActionDetect":function(d){return "etsi"},
"blockActionDetectRedstone":function(d){return "etsi punakiveä"},
"blockActionDrop":function(d){return "pudota"},
"blockActionDropAll":function(d){return "pudota kaikki"},
"blockActionExecute":function(d){return "suorita komento"},
"blockActionExplodeEntity":function(d){return "räjäytä"},
"blockActionFill":function(d){return "täytä"},
"blockActionFlashEntity":function(d){return "vilauta"},
"blockActionGetItemCount":function(d){return "hae esinemäärä"},
"blockActionGetItemCountInSlotNumber":function(d){return "hae kohteiden määrä paikan numerosta"},
"blockActionGetItemDetail":function(d){return "hae esineen tiedot"},
"blockActionGetItemDetailInSlotNumber":function(d){return "hae kohteen lisätiedot paikan numerosta"},
"blockActionGetItemSpace":function(d){return "osien tila"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "hae kohteen tila paikan numerosta"},
"blockActionGive":function(d){return "antaa"},
"blockActionInspect":function(d){return "tutki"},
"blockActionInspectData":function(d){return "tutki tietoja"},
"blockActionKill":function(d){return "tapa kohde"},
"blockActionMove":function(d){return "liikuta"},
"blockActionMoveAway":function(d){return "liikuta pois kohteesta"},
"blockActionMoveForward":function(d){return "liiku eteenpäin"},
"blockActionMoveRandom":function(d){return "liikuta sattumanvaraisesti"},
"blockActionMoveTo":function(d){return "liikuta paikkaan"},
"blockActionMoveToward":function(d){return "liikuta askel kohti kohdetta"},
"blockActionPlaySound":function(d){return "soita ääni"},
"blockActionRepeat":function(d){return "toista"},
"blockActionRepeatRandom":function(d){return "toista satunnainen"},
"blockActionSetBlock":function(d){return "määritä palikka"},
"blockActionSpawn":function(d){return "luo"},
"blockActionSummon":function(d){return "kutsu"},
"blockActionTeleport":function(d){return "kaukosiirrä kohde"},
"blockActionTeleportToPlayer":function(d){return "kaukosiirry pelaajan luo"},
"blockActionTestForBlock":function(d){return "testaa, onko palikkatyyppi"},
"blockActionTestForBlocks":function(d){return "testit onko malli välillä"},
"blockActionToScore":function(d){return "tulokseen"},
"blockActionTransfer":function(d){return "siirrä"},
"blockActionWait":function(d){return "odota"},
"blockActionWith":function(d){return "kanssa"},
"blockData":function(d){return "kuutiotiedot"},
"blockDestroyBlock":function(d){return "tuhoa kuutio"},
"blockIf":function(d){return "jos"},
"blockIfLavaAhead":function(d){return "jos laavaa edessä"},
"blockIs":function(d){return "on"},
"blockMove":function(d){return "liikuta"},
"blockMoveBackward":function(d){return "Liiku taaksepäin"},
"blockMoveForward":function(d){return "liiku eteenpäin"},
"blockPlace":function(d){return "aseta"},
"blockPlaceTorch":function(d){return "aseta soihtu"},
"blockPlaceXAheadAhead":function(d){return "eteen"},
"blockPlaceXAheadPlace":function(d){return "aseta"},
"blockPlaceXPlace":function(d){return "aseta"},
"blockPlantCrop":function(d){return "istuta viljaa"},
"blockShear":function(d){return "keritse"},
"blockTill":function(d){return "moreeni"},
"blockTillSoil":function(d){return "käännä maa"},
"blockTurn":function(d){return "käänny"},
"blockTurnLeft":function(d){return "käänny vasempaan"},
"blockTurnRight":function(d){return "käänny oikeaan"},
"blockType":function(d){return "kuutiotyyppi"},
"blockTypeBedrock":function(d){return "peruskallio"},
"blockTypeBricks":function(d){return "tiilet"},
"blockTypeClay":function(d){return "savi"},
"blockTypeClayHardened":function(d){return "kovettunut savi"},
"blockTypeCobblestone":function(d){return "mukulakivi"},
"blockTypeDirt":function(d){return "multa"},
"blockTypeDirtCoarse":function(d){return "karkea multa"},
"blockTypeDoorIron":function(d){return "rautaovi"},
"blockTypeEmpty":function(d){return "tyhjä"},
"blockTypeFarmlandWet":function(d){return "viljelysmaa"},
"blockTypeGlass":function(d){return "lasi"},
"blockTypeGlowstone":function(d){return "loistekivi"},
"blockTypeGrass":function(d){return "ruoho"},
"blockTypeGravel":function(d){return "sora"},
"blockTypeLava":function(d){return "laava"},
"blockTypeLogAcacia":function(d){return "akaasiatukki"},
"blockTypeLogBirch":function(d){return "koivutukki"},
"blockTypeLogJungle":function(d){return "viidakkopuutukki"},
"blockTypeLogOak":function(d){return "tammitukki"},
"blockTypeLogSpruce":function(d){return "kuusitukki"},
"blockTypeOreCoal":function(d){return "hiilimalmi"},
"blockTypeOreDiamond":function(d){return "timanttimalmi"},
"blockTypeOreEmerald":function(d){return "smaragdimalmi"},
"blockTypeOreGold":function(d){return "kultamalmi"},
"blockTypeOreIron":function(d){return "rautamalmi"},
"blockTypeOreLapis":function(d){return "lasuriittimalmi"},
"blockTypeOreRedstone":function(d){return "punakivimalmi"},
"blockTypePlanksAcacia":function(d){return "akaasialankut"},
"blockTypePlanksBirch":function(d){return "koivulankut"},
"blockTypePlanksJungle":function(d){return "viidakkopuulankut"},
"blockTypePlanksOak":function(d){return "tammilankut"},
"blockTypePlanksSpruce":function(d){return "kuusilankut"},
"blockTypePressurePlateUp":function(d){return "painelaatta"},
"blockTypeRail":function(d){return "raide"},
"blockTypeRailsRedstoneTorch":function(d){return "punakivisoihtu"},
"blockTypeRedstoneWire":function(d){return "punakivijohto"},
"blockTypeSand":function(d){return "hiekka"},
"blockTypeSandstone":function(d){return "hiekkakivi"},
"blockTypeStone":function(d){return "kivi"},
"blockTypeTnt":function(d){return "dynamiitti"},
"blockTypeTree":function(d){return "puu"},
"blockTypeWater":function(d){return "vesi"},
"blockTypeWool":function(d){return "villa"},
"blockTypeWoolBlue":function(d){return "sininen villa"},
"blockTypeWoolMagenta":function(d){return "lila villa"},
"blockTypeWoolOrange":function(d){return "oranssi villa"},
"blockTypeWoolPink":function(d){return "pinkki villa"},
"blockTypeWoolRed":function(d){return "punainen villa"},
"blockTypeWoolYellow":function(d){return "keltainen villa"},
"blockWhileXAheadAhead":function(d){return "eteen"},
"blockWhileXAheadDo":function(d){return "tee"},
"blockWhileXAheadWhile":function(d){return "niin kauan kuin"},
"cancel":function(d){return "Peru"},
"cloneMode":function(d){return "monistamistila (kloonaus)"},
"cloneModeForce":function(d){return "pakota"},
"cloneModeMove":function(d){return "liikuta"},
"cloneModeNormal":function(d){return "normaali"},
"connectToCodeConnection":function(d){return "Käytä Koodiyhteys-sovellusta suorittaaksesi avataksesi tämän projektin Minecraft: Education Editionissa."},
"destination":function(d){return "kohde"},
"directionBack":function(d){return "edellinen"},
"directionDown":function(d){return "alas"},
"directionForward":function(d){return "eteenpäin"},
"directionLeft":function(d){return "vasemmalle"},
"directionMiddle":function(d){return "keskelle"},
"directionRight":function(d){return "oikealle"},
"directionUp":function(d){return "ylös"},
"downloadButton":function(d){return "Lataa"},
"entityType":function(d){return "entiteettityyppi"},
"entityTypeChicken":function(d){return "kana"},
"entityTypeCow":function(d){return "lehmä"},
"entityTypeCreeper":function(d){return "lurkki"},
"entityTypeIronGolem":function(d){return "rautagolemi"},
"entityTypePlayer":function(d){return "pelaaja"},
"entityTypeSheep":function(d){return "lammas"},
"entityTypeZombie":function(d){return "zombi"},
"eventTypeWhenAttacked":function(d){return "kun kimppuun hyökätään"},
"eventTypeWhenDay":function(d){return "kun on päivä"},
"eventTypeWhenNight":function(d){return "kun on yö"},
"eventTypeWhenRun":function(d){return "suoritettaessa"},
"eventTypeWhenSpawned":function(d){return "kun luodaan"},
"eventTypeWhenTouched":function(d){return "kun kosketetaan"},
"eventTypeWhenUsed":function(d){return "kun käytetään"},
"forever":function(d){return "ikuisesti"},
"from":function(d){return "alkaen"},
"generatedCodeDescription":function(d){return "Vetämällä ja asettamalla palikoita tässä tehtävässä olet luonut kokoelman ohjeita ohjelmointikielellä nimeltä JavaScript. Tämä ohjelmointikoodi kertoo tietokoneelle, mitä näytöllä pitää näkyä. Kaikki, mitä näet ja teet Minecraftissa, on saanut alkunsa samanlaisista koodiriveistä."},
"getdataof":function(d){return "hae tiedot kohteesta"},
"getnameof":function(d){return "hae nimi kohteesta"},
"houseSelectChooseFloorPlan":function(d){return "Valitse talosi pohjapiirustus."},
"houseSelectEasy":function(d){return "Helppo"},
"houseSelectHard":function(d){return "Vaikea"},
"houseSelectLetsBuild":function(d){return "Rakennetaan talo."},
"houseSelectMedium":function(d){return "Normaali"},
"import":function(d){return "Tuo"},
"importShareLinkBody":function(d){return "Kirjoita Kooditunti-jakolinkkisi tähän ja kopioi koodisi Minecraftiin napsauttamalla \"Tuo\"."},
"importShareLinkHeader":function(d){return "Tuo jakolinkki"},
"inSlotNumber":function(d){return "paikassa numero"},
"itemTypeBlock":function(d){return "kuutio"},
"itemTypeDecoration":function(d){return "koristeet"},
"itemTypeMiscellaneous":function(d){return "sekalainen"},
"itemTypeTool":function(d){return "työkalu"},
"items":function(d){return "kpl"},
"itemsOfBlockType":function(d){return "kpl kuutiotyyppiä"},
"level10FailureMessage":function(d){return "Peitä laava, jotta pääset sen yli, ja kerää sitten toisella puolella olevat kaksi rautakuutiota."},
"level11FailureMessage":function(d){return "Muista asettaa mukulakiviä laavan päälle, jos edessä on laavaa. Näin pystyt keräämään tämän resurssirivin."},
"level12FailureMessage":function(d){return "Kerää 3 punakivikuutiota. Tässä yhdistyvät aiemmin talon rakentamisessa oppimasi sekä \"jos\"-ehtojen käyttö, joilla vältät laavaan putoamisen."},
"level13FailureMessage":function(d){return "Aseta \"raide\" multapolulle, joka johtaa oveltasi kartan reunalle."},
"level1FailureMessage":function(d){return "Sinun pitää käyttää komentoja lampaan kävelyttämiseen."},
"level1TooFewBlocksMessage":function(d){return "Yritä käyttää lisää komentoja lampaan kävelyttämiseen."},
"level2FailureMessage":function(d){return "Kaada puu kävelemällä sen rungon luo ja käyttämällä \"tuhoa kuutio\" -komentoa."},
"level2TooFewBlocksMessage":function(d){return "Yritä kaataa puu käyttämällä komentoja. Kävele rungon luo ja käytä \"tuhoa kuutio\" -komentoa."},
"level3FailureMessage":function(d){return "Kerää molemmista lampaista villa kävelemällä niiden luo ja käyttämällä \"keritse\"-komentoa. Muista käyttää kääntymiskomentoja, että yllät lampaisiin."},
"level3TooFewBlocksMessage":function(d){return "Yritä kerätä molempien lampaiden villa käyttämällä komentoja. Kävele kummankin lampaan luo ja käytä \"keritse\"-komentoa."},
"level4FailureMessage":function(d){return "Sinun on käytettävä \"tuhoa kuutio\" -komentoa kaikkiin kolmeen puunrunkoon."},
"level5FailureMessage":function(d){return "Rakenna seinä asettamalla kuutiot multarajojen mukaan. Pinkki \"toista\"-komento suorittaa sen sisälle asetettuja komentoja, kuten \"aseta kuutio\" ja \"liiku eteenpäin\"."},
"level6FailureMessage":function(d){return "Suorita tehtävä asettamalla kuutioita talon multarajojen mukaan."},
"level7FailureMessage":function(d){return "Aseta viljaa kuhunkin tummaan käännettyyn maatilkkuun \"istuta\"-komennolla."},
"level8FailureMessage":function(d){return "Jos kosket lurkkiin, se räjähtää. Hiivi niiden ohitse taloosi."},
"level9FailureMessage":function(d){return "Muista asettaa ainakin 2 soihtua valaisemaan reittiäsi JA kerää vähintään 2 hiiltä."},
"maskMode":function(d){return "naamio tilassa"},
"maskModeMasked":function(d){return "naamioitu"},
"maskModeReplace":function(d){return "korvaa"},
"minecraftBlock":function(d){return "kuutio"},
"minecraftNotConnected":function(d){return "Minecraft ei ole yhteydessä"},
"miniBlockBricks":function(d){return "tiilet"},
"miniBlockBucketLava":function(d){return "laavaämpäri"},
"miniBlockBucketWater":function(d){return "vesiämpäri"},
"miniBlockCarrots":function(d){return "porkkanoita"},
"miniBlockCoal":function(d){return "hiili"},
"miniBlockCobblestone":function(d){return "mukulakivi"},
"miniBlockDiamond":function(d){return "timantti"},
"miniBlockDirt":function(d){return "multa"},
"miniBlockDirtCoarse":function(d){return "karkea multa"},
"miniBlockEgg":function(d){return "kananmuna"},
"miniBlockEmerald":function(d){return "smaragdi"},
"miniBlockGravel":function(d){return "sora"},
"miniBlockGunPowder":function(d){return "ruutia"},
"miniBlockIngotGold":function(d){return "kultaharkko"},
"miniBlockIngotIron":function(d){return "rautaharkko"},
"miniBlockLapisLazuli":function(d){return "lasuurikivi"},
"miniBlockLogAcacia":function(d){return "akaasiatukki"},
"miniBlockLogBirch":function(d){return "koivutukki"},
"miniBlockLogJungle":function(d){return "viidakkopuutukki"},
"miniBlockLogOak":function(d){return "tammitukki"},
"miniBlockLogSpruce":function(d){return "kuusitukki"},
"miniBlockMilk":function(d){return "maito"},
"miniBlockPlanksAcacia":function(d){return "akaasialankut"},
"miniBlockPlanksBirch":function(d){return "koivulankut"},
"miniBlockPlanksJungle":function(d){return "viidakkopuulankut"},
"miniBlockPlanksOak":function(d){return "tammilankut"},
"miniBlockPlanksSpruce":function(d){return "kuusilankut"},
"miniBlockPoppy":function(d){return "unikko"},
"miniBlockPotato":function(d){return "peruna"},
"miniBlockRedstoneDust":function(d){return "punakivitomu"},
"miniBlockSand":function(d){return "hiekka"},
"miniBlockSandstone":function(d){return "hiekkakivi"},
"miniBlockSheep":function(d){return "lammas"},
"miniBlockWheat":function(d){return "vehnää"},
"miniBlockWool":function(d){return "villa"},
"nextLevelMsg":function(d){return "Tehtävä "+craft_locale.v(d,"puzzleNumber")+" läpäisty. Onnittelut!"},
"oldBlockHandling":function(d){return "vanha palikka"},
"oldBlockHandlingsDestroy":function(d){return "tuhoa"},
"oldBlockHandlingsKeep":function(d){return "pidä"},
"oldBlockHandlingsReplace":function(d){return "korvaa"},
"onBehalfOf":function(d){return "puolesta kohteen"},
"playerSelectChooseCharacter":function(d){return "Valitse hahmosi."},
"playerSelectChooseSelectButton":function(d){return "Valitse"},
"playerSelectLetsGetStarted":function(d){return "Aloitetaan."},
"quantity":function(d){return "määrä"},
"reinfFeedbackMsg":function(d){return "Voit palata pelin pariin valitsemalla \"Jatka pelaamista\"."},
"relative":function(d){return "suhteellinen"},
"runAgent":function(d){return "Suorita Agent"},
"score":function(d){return "Tulos"},
"seconds":function(d){return "sekunti(a)"},
"selectChooseButton":function(d){return "Valitse"},
"soundTypeBump":function(d){return "törmäys"},
"soundTypeChickenBawk":function(d){return "kanan kotkotus"},
"soundTypeChickenHurt":function(d){return "loukkaantunut kana"},
"soundTypeCollectedBlock":function(d){return "kuution kerääminen"},
"soundTypeCowHuff":function(d){return "lehmän kavio"},
"soundTypeCowHurt":function(d){return "loukkaantunut lehmä"},
"soundTypeCowMoo":function(d){return "lehmä ammuu"},
"soundTypeCowMooLong":function(d){return "lehmä ammuuu"},
"soundTypeCreeperHiss":function(d){return "creeperin sähähdys"},
"soundTypeDig_wood1":function(d){return "puun halkeaminen"},
"soundTypeDoorOpen":function(d){return "oven avautuminen"},
"soundTypeExplode":function(d){return "räjäytä"},
"soundTypeFailure":function(d){return "taso epäonnistui"},
"soundTypeFall":function(d){return "putoaminen"},
"soundTypeFizz":function(d){return "poreilu"},
"soundTypeFuse":function(d){return "tulilanka"},
"soundTypeIronGolemHit":function(d){return "rautagolemin isku"},
"soundTypeMetalWhack":function(d){return "metallinen isku"},
"soundTypeMinecart":function(d){return "kaivosvaunu"},
"soundTypePlaceBlock":function(d){return "kuution asetus"},
"soundTypePunch":function(d){return "lyönti"},
"soundTypeSheepBaa":function(d){return "lammas määkii"},
"soundTypeStepFarmland":function(d){return "askel peltomaalla"},
"soundTypeStepGrass":function(d){return "askel ruoholla"},
"soundTypeStepGravel":function(d){return "askel soralla"},
"soundTypeStepStone":function(d){return "askel kivellä"},
"soundTypeStepWood":function(d){return "askel puulla"},
"soundTypeSuccess":function(d){return "taso onnistui"},
"soundTypeZombieBrains":function(d){return "zombin vaikerointi"},
"soundTypeZombieGroan":function(d){return "zombin örinä"},
"soundTypeZombieHurt":function(d){return "loukkaantunut zombi"},
"target":function(d){return "kohde"},
"testModeAll":function(d){return "kaikki"},
"testModeMasked":function(d){return "naamioitu"},
"tileData":function(d){return "tiilitiedot"},
"timeDay":function(d){return "päivä"},
"timeLong":function(d){return "pitkä"},
"timeMedium":function(d){return "keskipitkä"},
"timeNight":function(d){return "yö"},
"timeRandom":function(d){return "satunnainen"},
"timeSet":function(d){return "aseta aika arvoon"},
"timeShort":function(d){return "lyhyt"},
"timeVeryLong":function(d){return "erittäin pitkä"},
"timeVeryShort":function(d){return "erittäin lyhyt"},
"to":function(d){return "suorittaaksesi"},
"toSlotNumber":function(d){return "paikkaan numero"},
"tooManyBlocksFail":function(d){return "Tehtävä "+craft_locale.v(d,"puzzleNumber")+" läpäisty. Onnittelut! Tehtävä on myös mahdollista läpäistä käyttämällä "+craft_locale.p(d,"numBlocks",0,"fi",{"one":"1 palikkaa","other":craft_locale.n(d,"numBlocks")+" palikkaa"})+"."},
"turnRandom":function(d){return "käänny satunnaisesti"},
"useArrowKeys":function(d){return "Sinun ei tarvitse lisätä kuutioita! Liiku nuolinäppäimillä ja käytä esineitä painamalla välilyöntiä tai napauttamalla pelitaulua."},
"weather":function(d){return "sää"},
"weatherTypeClear":function(d){return "kirkas"},
"weatherTypeRain":function(d){return "sade"},
"weatherTypeThunder":function(d){return "ukkonen"}};