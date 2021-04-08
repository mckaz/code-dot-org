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
"agentGenericFailureMessage":function(d){return "Manatiling mag-code! Tandaang gumamit sa Ang Ahenta para tumulong."},
"agentTooFewBlocksFailureMessage":function(d){return "Subukang magdagdag ng isang bloke lang sa isang beses para madala Ang Ahente sa tamang lugar."},
"at":function(d){return "sa"},
"agentDiamondPathCongrats":function(d){return "Maligayang bati, nakakita ka ng dyamanteng daan! Ikaw ay nakakoleka"+craft_locale.p(d,"count",0,"fil",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"  sa ngayon! "},
"blockActionAdd":function(d){return "magdagdag"},
"blockActionAttack":function(d){return "atakihin"},
"blockActionClone":function(d){return "i-clone ang mga bloke"},
"blockActionCloneFiltered":function(d){return "i-clone lang"},
"blockActionCollect":function(d){return "kolektahin"},
"blockActionCollectAll":function(d){return "kolektahin ang lahat"},
"blockActionDestroyEntity":function(d){return "mawala"},
"blockActionDetect":function(d){return "ihayag"},
"blockActionDetectRedstone":function(d){return "ihayag ang pulang bato"},
"blockActionDrop":function(d){return "ilaglag"},
"blockActionDropAll":function(d){return "ihulog ang lahat"},
"blockActionExecute":function(d){return "patakbuhin ang utos"},
"blockActionExplodeEntity":function(d){return "pasabugin"},
"blockActionFill":function(d){return "punan mula"},
"blockActionFlashEntity":function(d){return "kislap"},
"blockActionGetItemCount":function(d){return "magkuha ng bilang ng aytem"},
"blockActionGetItemCountInSlotNumber":function(d){return "magkuha ng bilang ng aytem sa puwang na numero"},
"blockActionGetItemDetail":function(d){return "kumuha ng detalye ng aytem"},
"blockActionGetItemDetailInSlotNumber":function(d){return "kumuha ng detalye ng item sa puwang ng numero"},
"blockActionGetItemSpace":function(d){return "kumuha ng espasyon ng aytem"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "kumuha ng espasyo sa aytem sa puwang ng numero"},
"blockActionGive":function(d){return "bigyan"},
"blockActionInspect":function(d){return "suriin"},
"blockActionInspectData":function(d){return "suriin ang datos"},
"blockActionKill":function(d){return "patayin ang target"},
"blockActionMove":function(d){return "galaw"},
"blockActionMoveAway":function(d){return "lumayo"},
"blockActionMoveForward":function(d){return "umabante"},
"blockActionMoveRandom":function(d){return "gumalaw ng random"},
"blockActionMoveTo":function(d){return "hakbang tungo sa"},
"blockActionMoveToward":function(d){return "isang hakbang tungo sa"},
"blockActionPlaySound":function(d){return "magpatugtog ng tunog"},
"blockActionRepeat":function(d){return "ulitin"},
"blockActionRepeatRandom":function(d){return "random na pag-ulit"},
"blockActionSetBlock":function(d){return "itakda ang bloke sa"},
"blockActionSpawn":function(d){return "mag-spawn"},
"blockActionSummon":function(d){return "ipatawag"},
"blockActionTeleport":function(d){return "target ng teleport"},
"blockActionTeleportToPlayer":function(d){return "mag-teleport sa manlalaro"},
"blockActionTestForBlock":function(d){return "nagsusubok kung bloke ba ang tipo"},
"blockActionTestForBlocks":function(d){return "nagsusubok sa pattern sa gitna"},
"blockActionToScore":function(d){return "para makapuntos"},
"blockActionTransfer":function(d){return "ilipat"},
"blockActionWait":function(d){return "maghintay"},
"blockActionWith":function(d){return "kasama ang"},
"blockData":function(d){return "bloke na datos"},
"blockDestroyBlock":function(d){return "sirain ang bloke"},
"blockIf":function(d){return "kung"},
"blockIfLavaAhead":function(d){return "kapag may lava sa unahan"},
"blockIs":function(d){return "ay"},
"blockMove":function(d){return "galaw"},
"blockMoveBackward":function(d){return "gumalaw patalikod"},
"blockMoveForward":function(d){return "umabante"},
"blockPlace":function(d){return "lagay"},
"blockPlaceTorch":function(d){return "lagay ng tanglaw"},
"blockPlaceXAheadAhead":function(d){return "unahan"},
"blockPlaceXAheadPlace":function(d){return "lagay"},
"blockPlaceXPlace":function(d){return "lagay"},
"blockPlantCrop":function(d){return "mananim ng halaman"},
"blockShear":function(d){return "gupitan"},
"blockTill":function(d){return "magbungkal"},
"blockTillSoil":function(d){return "magbungkal ng lupa"},
"blockTurn":function(d){return "bumaling"},
"blockTurnLeft":function(d){return "kumaliwa"},
"blockTurnRight":function(d){return "kumanan"},
"blockType":function(d){return "tipo ng bloke"},
"blockTypeBedrock":function(d){return "palanas"},
"blockTypeBricks":function(d){return "laryo"},
"blockTypeClay":function(d){return "luad"},
"blockTypeClayHardened":function(d){return "tumigas na luad"},
"blockTypeCobblestone":function(d){return "magulong bato"},
"blockTypeDirt":function(d){return "lupa"},
"blockTypeDirtCoarse":function(d){return "magaspang na lupa"},
"blockTypeDoorIron":function(d){return "bakal na pinto"},
"blockTypeEmpty":function(d){return "bakante"},
"blockTypeFarmlandWet":function(d){return "bukiran"},
"blockTypeGlass":function(d){return "salamin"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "damo"},
"blockTypeGravel":function(d){return "graba"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "trosong akasya"},
"blockTypeLogBirch":function(d){return "trosong birch"},
"blockTypeLogJungle":function(d){return "trosong gubat"},
"blockTypeLogOak":function(d){return "trosong oak"},
"blockTypeLogSpruce":function(d){return "trosong spruce"},
"blockTypeOreCoal":function(d){return "mineral ng uling"},
"blockTypeOreDiamond":function(d){return "mineral ng dyamante"},
"blockTypeOreEmerald":function(d){return "mineral ng esmeralda"},
"blockTypeOreGold":function(d){return "mineral ng ginto"},
"blockTypeOreIron":function(d){return "mineral ng bakal"},
"blockTypeOreLapis":function(d){return "mineral ng asul na pangulay"},
"blockTypeOreRedstone":function(d){return "mineral ng redstone"},
"blockTypePlanksAcacia":function(d){return "tablang akasya"},
"blockTypePlanksBirch":function(d){return "tablang birch"},
"blockTypePlanksJungle":function(d){return "tablang kahoy ng gubat"},
"blockTypePlanksOak":function(d){return "tablang oak"},
"blockTypePlanksSpruce":function(d){return "tablang spruce"},
"blockTypePressurePlateUp":function(d){return "pressure na plato"},
"blockTypeRail":function(d){return "riles"},
"blockTypeRailsRedstoneTorch":function(d){return "pulang bato na sulo"},
"blockTypeRedstoneWire":function(d){return "wire ng pulang bato"},
"blockTypeSand":function(d){return "buhangin"},
"blockTypeSandstone":function(d){return "matigas na buhangin"},
"blockTypeStone":function(d){return "bato"},
"blockTypeTnt":function(d){return "bomba"},
"blockTypeTree":function(d){return "puno"},
"blockTypeWater":function(d){return "tubig"},
"blockTypeWool":function(d){return "lana"},
"blockTypeWoolBlue":function(d){return "asul na balahibo"},
"blockTypeWoolMagenta":function(d){return "magenta na balahibo"},
"blockTypeWoolOrange":function(d){return "dalandan na balahibo"},
"blockTypeWoolPink":function(d){return "pink na balahibo"},
"blockTypeWoolRed":function(d){return "pulang balahibo"},
"blockTypeWoolYellow":function(d){return "dilaw na balahibo"},
"blockWhileXAheadAhead":function(d){return "unahan"},
"blockWhileXAheadDo":function(d){return "gawin"},
"blockWhileXAheadWhile":function(d){return "habang"},
"cancel":function(d){return "Kanselahin"},
"cloneMode":function(d){return "clode na mode"},
"cloneModeForce":function(d){return "puwersa"},
"cloneModeMove":function(d){return "galaw"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "Para patakbuhin ang proyektong ito sa Minecraft: Edukasyon na Edisyon, mangyaring gamitin ang Code Connection na aplikasyon."},
"destination":function(d){return "destinasyon"},
"directionBack":function(d){return "pabalik"},
"directionDown":function(d){return "baba"},
"directionForward":function(d){return "pasulong"},
"directionLeft":function(d){return "kaliwa"},
"directionMiddle":function(d){return "gitna"},
"directionRight":function(d){return "kanan"},
"directionUp":function(d){return "taas"},
"downloadButton":function(d){return "I-download"},
"entityType":function(d){return "tipo ng katauhan"},
"entityTypeChicken":function(d){return "manok"},
"entityTypeCow":function(d){return "baka"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "manlalaro"},
"entityTypeSheep":function(d){return "tupa"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "kapag inatake"},
"eventTypeWhenDay":function(d){return "kapag araw"},
"eventTypeWhenNight":function(d){return "kapag gabi"},
"eventTypeWhenRun":function(d){return "kapag tumakbo"},
"eventTypeWhenSpawned":function(d){return "kapag na-spawn"},
"eventTypeWhenTouched":function(d){return "kapag hinawakan"},
"eventTypeWhenUsed":function(d){return "kapag ginamit"},
"forever":function(d){return "magpakailanman"},
"from":function(d){return "mula"},
"generatedCodeDescription":function(d){return "Sa pamagitan ng dragging at placing ng bloke sa puzzle na ito, ika'y nakagawa ng mga instruksyon sa loob ng isang linguahe na ginagamit ng kompyuter na tawag ay JavaScript. Ang code ay ang nagsasabi sa mga kompyuter kung ano ang kinakailangan ipakita sa screen. Lahat ng kinakailang mong makita at gawin sa Minecraft ay nagsisimula rin sa mga linya ng computer code na ganito."},
"getdataof":function(d){return "kumuha ng mga datos ng"},
"getnameof":function(d){return "kunin ang pangalan ng"},
"houseSelectChooseFloorPlan":function(d){return "Pumili ng plano para sa sahig ng iyong bahay."},
"houseSelectEasy":function(d){return "Madali"},
"houseSelectHard":function(d){return "Mahirap"},
"houseSelectLetsBuild":function(d){return "Tayo ay magtayo ng bahay."},
"houseSelectMedium":function(d){return "Medium"},
"import":function(d){return "Mag-Import"},
"importShareLinkBody":function(d){return "I-type ang iyong Oras ng Code na link nang pagbahagi dito at i-click ang \"Import\" para kopyahin ang iyong code sa Minecraft"},
"importShareLinkHeader":function(d){return "Mag-import ng link ng pagbahagi"},
"inSlotNumber":function(d){return "para sa numero ng puwang"},
"itemTypeBlock":function(d){return "bloke"},
"itemTypeDecoration":function(d){return "dekorasyon"},
"itemTypeMiscellaneous":function(d){return "balabalaki"},
"itemTypeTool":function(d){return "kasangkapan"},
"items":function(d){return "(mga) aytem"},
"itemsOfBlockType":function(d){return "(mga) aytem na may blokeng tipo"},
"level10FailureMessage":function(d){return "I-cover ang lava para maka daan, pagkatapos, i-mina ang dalawang bloke ng bakal sa kabilang gilid."},
"level11FailureMessage":function(d){return "Siguraduhing ilagay ang cobblestone sa unahan kung mayroon laba sa unahan. Ito ay hahayaan kang ligatas na magmina sa isang hanay ng mga kayamanan."},
"level12FailureMessage":function(d){return "Siguraduhing magmina ng 3 pulang bato na mga bloke. Ito ay pinagsama sa iyong natutunan mula sa pagbuo ng isang bahay at paggamit ng \"if\" na mga pahayag para maiwasan ang mahulog sa laba."},
"level13FailureMessage":function(d){return "Maglagay ng \"rail\" sa maduming landas na magtungo mula sa iyong pintuan papunta sa dulo ng mapa."},
"level1FailureMessage":function(d){return "Kailangan mong gamitin ang mga command para ilakad ang tupa."},
"level1TooFewBlocksMessage":function(d){return "Subukang mong gumamit ng isa pang mga utos para maglakad papunta sa tupa."},
"level2FailureMessage":function(d){return "Para putulin ang kahoy, lumakad sa puno ng kahot at gamitin ang \"destroy block\" na utos."},
"level2TooFewBlocksMessage":function(d){return "Subukang gumamit ng higit pang mga utos para putolin ang kahoy. Maglakad sa katawan nito at gamitin ang \"destroy block\" na utos."},
"level3FailureMessage":function(d){return "Upang makaipon ng mga balahibo mula sa parehong mga tupa, maglakad sa bawat isa at gamitin ang \"shear\" na utos. Tandaang gumamit ng pagliko na mga utos para maabot ang mga tupa."},
"level3TooFewBlocksMessage":function(d){return "Subukang gumamit ng mga karagdagang mga utos para makaipon ng balahibo mula sa bawat tupa. Maglakad sa bawat isa at gamitin ang \"shear\" na utos."},
"level4FailureMessage":function(d){return "Dapat mong gamitin ang \"destroy block\" na utos sa bawat isa sa tatlong mga katawan ng kahoy."},
"level5FailureMessage":function(d){return "Ilagay ang iyong bloke sa duming balangkas para magawa ang pader. Ang kulay rosas na \"repeat\" na utos ay magpapatakbo ng mga utos na inilagay sa loob nito, gaya ng \"place block\" at \"move forward\"."},
"level6FailureMessage":function(d){return "Maglagay ng mga bloke sa lupang balangkas ng bahay para makumpleto ang palaisipan."},
"level7FailureMessage":function(d){return "Gamitin ang \"plant\" na utos para maglagay ng mga pananim sa isang piraso nang maitim na nabungkal na lupa."},
"level8FailureMessage":function(d){return "Kung makakahawak ka ng creeper ito ay sasabog. Iwasan ang mga ito at pumasok sa iyong bahay."},
"level9FailureMessage":function(d){return "Huwag kalimutang maglagay ng hindi bababa sa 2 sulo para liwanagan ang iyong daanan AT magmina ng hindi baba sa 2 uling."},
"maskMode":function(d){return "mask na mode"},
"maskModeMasked":function(d){return "naka-mask"},
"maskModeReplace":function(d){return "palitan"},
"minecraftBlock":function(d){return "bloke"},
"minecraftNotConnected":function(d){return "Hindi nakakonekta ang Minecraft"},
"miniBlockBricks":function(d){return "laryo"},
"miniBlockBucketLava":function(d){return "timba ng laba"},
"miniBlockBucketWater":function(d){return "timba ng tubig"},
"miniBlockCarrots":function(d){return "mga karot"},
"miniBlockCoal":function(d){return "uling"},
"miniBlockCobblestone":function(d){return "magulong bato"},
"miniBlockDiamond":function(d){return "diyamante"},
"miniBlockDirt":function(d){return "lupa"},
"miniBlockDirtCoarse":function(d){return "magaspang na lupa"},
"miniBlockEgg":function(d){return "itlog"},
"miniBlockEmerald":function(d){return "esmeralda"},
"miniBlockGravel":function(d){return "graba"},
"miniBlockGunPowder":function(d){return "pulbura"},
"miniBlockIngotGold":function(d){return "ingot ng ginto"},
"miniBlockIngotIron":function(d){return "ingot ng bakal"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "trosong akasya"},
"miniBlockLogBirch":function(d){return "trosong birch"},
"miniBlockLogJungle":function(d){return "trosong gubat"},
"miniBlockLogOak":function(d){return "trosong oak"},
"miniBlockLogSpruce":function(d){return "trosong spruce"},
"miniBlockMilk":function(d){return "gatas"},
"miniBlockPlanksAcacia":function(d){return "tablang akasya"},
"miniBlockPlanksBirch":function(d){return "tablang birch"},
"miniBlockPlanksJungle":function(d){return "tablang kahoy ng gubat"},
"miniBlockPlanksOak":function(d){return "tablang oak"},
"miniBlockPlanksSpruce":function(d){return "tablang spruce"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "patatas"},
"miniBlockRedstoneDust":function(d){return "alikabok ng pulang bato"},
"miniBlockSand":function(d){return "buhangin"},
"miniBlockSandstone":function(d){return "matigas na buhangin"},
"miniBlockSheep":function(d){return "tupa"},
"miniBlockWheat":function(d){return "trigo"},
"miniBlockWool":function(d){return "lana"},
"nextLevelMsg":function(d){return "Nakumpleto ang Palaisipan "+craft_locale.v(d,"puzzleNumber")+". Maligayang bati!"},
"oldBlockHandling":function(d){return "lumang bloke sa"},
"oldBlockHandlingsDestroy":function(d){return "gibain"},
"oldBlockHandlingsKeep":function(d){return "panatilihin"},
"oldBlockHandlingsReplace":function(d){return "palitan"},
"onBehalfOf":function(d){return "sa halip ni"},
"playerSelectChooseCharacter":function(d){return "Pumili ng iyong karakter."},
"playerSelectChooseSelectButton":function(d){return "Pumili"},
"playerSelectLetsGetStarted":function(d){return "Tayo'y magsimula."},
"quantity":function(d){return "dami"},
"reinfFeedbackMsg":function(d){return "Maaari kang magpintot sa \"Keep Playing\" para makabalik sa paglalaro ng laro."},
"relative":function(d){return "kaugnay"},
"runAgent":function(d){return "Patakbuhin ang Ahente"},
"score":function(d){return "Iskor"},
"seconds":function(d){return "(mga) segundo"},
"selectChooseButton":function(d){return "Pumili"},
"soundTypeBump":function(d){return "bangga"},
"soundTypeChickenBawk":function(d){return "kurok ng manok"},
"soundTypeChickenHurt":function(d){return "manok na nasaktan"},
"soundTypeCollectedBlock":function(d){return "magkolekta ng bloke"},
"soundTypeCowHuff":function(d){return "poo ng baka"},
"soundTypeCowHurt":function(d){return "nasaktan ang baka"},
"soundTypeCowMoo":function(d){return "unga ng baka"},
"soundTypeCowMooLong":function(d){return "mataas na unga ng baka"},
"soundTypeCreeperHiss":function(d){return "higishis ng creeper"},
"soundTypeDig_wood1":function(d){return "nabaling kahoy"},
"soundTypeDoorOpen":function(d){return "bukas ang pinto"},
"soundTypeExplode":function(d){return "pasabugin"},
"soundTypeFailure":function(d){return "antas na pagkabigo"},
"soundTypeFall":function(d){return "nahulog"},
"soundTypeFizz":function(d){return "sipol"},
"soundTypeFuse":function(d){return "tunawin"},
"soundTypeIronGolemHit":function(d){return "tama ng bakal na golem"},
"soundTypeMetalWhack":function(d){return "bakal na sampal"},
"soundTypeMinecart":function(d){return "minecart"},
"soundTypePlaceBlock":function(d){return "lugar ng bloke"},
"soundTypePunch":function(d){return "suntok"},
"soundTypeSheepBaa":function(d){return "baa ng tupa"},
"soundTypeStepFarmland":function(d){return "hakbang sa farmland"},
"soundTypeStepGrass":function(d){return "hakbang na damo"},
"soundTypeStepGravel":function(d){return "hakbang na graba"},
"soundTypeStepStone":function(d){return "hakbang na bato"},
"soundTypeStepWood":function(d){return "hakbang na kahoy"},
"soundTypeSuccess":function(d){return "antas ng tagumpa"},
"soundTypeZombieBrains":function(d){return "daing ng zombie"},
"soundTypeZombieGroan":function(d){return "dabog ng zombie"},
"soundTypeZombieHurt":function(d){return "nasaktan na zombie"},
"target":function(d){return "target"},
"testModeAll":function(d){return "lahat"},
"testModeMasked":function(d){return "naka-mask"},
"tileData":function(d){return "datos ng tile"},
"timeDay":function(d){return "araw"},
"timeLong":function(d){return "mataas"},
"timeMedium":function(d){return "katamtaman"},
"timeNight":function(d){return "gabi"},
"timeRandom":function(d){return "nang hindi pinipili"},
"timeSet":function(d){return "itakda ang oras sa"},
"timeShort":function(d){return "maikli"},
"timeVeryLong":function(d){return "napakataas"},
"timeVeryShort":function(d){return "masyadong maikli"},
"to":function(d){return "sa"},
"toSlotNumber":function(d){return "para sa numero ng puwang"},
"tooManyBlocksFail":function(d){return "Palaisipang "+craft_locale.v(d,"puzzleNumber")+" na nakompleto. Maligayang bati! Ito ay posible rin na kompletohin ito gamit ang "+craft_locale.p(d,"numBlocks",0,"fil",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "random na pagliko"},
"useArrowKeys":function(d){return "Hindi mo kailangang magdagdag ng anumang mga bloke! Gumalaw sa mga arrow, at pindutin ang space bar o mag-tap sa pisara ng laro para magamit ang mga aytem."},
"weather":function(d){return "lagay ng panahon"},
"weatherTypeClear":function(d){return "malinaw"},
"weatherTypeRain":function(d){return "ulan"},
"weatherTypeThunder":function(d){return "kulog"}};