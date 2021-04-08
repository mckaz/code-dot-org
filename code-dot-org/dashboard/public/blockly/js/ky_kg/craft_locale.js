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
"absolute":function(d){return "модуль"},
"agentGenericFailureMessage":function(d){return "Коддой бергиле! Жардам үчүн Агентти колдонгонду унутпагыла."},
"agentTooFewBlocksFailureMessage":function(d){return "Бир жолу бирден блок кошуп Агентти керектүү жерге жеткизгиле."},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "Куттуктайбыз, алмаз жолун таптыңар! "+craft_locale.p(d,"count",0,"en",{"one":"1 diamond","other":craft_locale.n(d,"count")+" алмаз"})+" чогулттуңар! "},
"blockActionAdd":function(d){return "add"},
"blockActionAttack":function(d){return "чабуул"},
"blockActionClone":function(d){return "блокторду клондоо"},
"blockActionCloneFiltered":function(d){return "клон гана"},
"blockActionCollect":function(d){return "collect"},
"blockActionCollectAll":function(d){return "баарын чогулт"},
"blockActionDestroyEntity":function(d){return "жоголуу"},
"blockActionDetect":function(d){return "табуу"},
"blockActionDetectRedstone":function(d){return "кызыл таш табуу"},
"blockActionDrop":function(d){return "түшүр"},
"blockActionDropAll":function(d){return "бүт түшүр"},
"blockActionExecute":function(d){return "буйрукту аткар"},
"blockActionExplodeEntity":function(d){return "жардыр"},
"blockActionFill":function(d){return "толтур"},
"blockActionFlashEntity":function(d){return "жарк эт"},
"blockActionGetItemCount":function(d){return "элементтин эсебин ал"},
"blockActionGetItemCountInSlotNumber":function(d){return "слот номуруна элементтин эсебин ал"},
"blockActionGetItemDetail":function(d){return "кеңири маалымат ал"},
"blockActionGetItemDetailInSlotNumber":function(d){return "слот номуруна элемент маалыматын ал"},
"blockActionGetItemSpace":function(d){return "элементке орун ал"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "слот номурунда элементке орун ал"},
"blockActionGive":function(d){return "берүү"},
"blockActionInspect":function(d){return "текшерүү"},
"blockActionInspectData":function(d){return "берилишти текшерүү"},
"blockActionKill":function(d){return "бутаны жайла"},
"blockActionMove":function(d){return "жылдыр"},
"blockActionMoveAway":function(d){return "жылдырып сал"},
"blockActionMoveForward":function(d){return "алдыга жылдыр"},
"blockActionMoveRandom":function(d){return "кокус жылдыруу"},
"blockActionMoveTo":function(d){return "көздөй жылдыр"},
"blockActionMoveToward":function(d){return "карай кадам кылуу"},
"blockActionPlaySound":function(d){return "үн ойнот"},
"blockActionRepeat":function(d){return "кайталоо"},
"blockActionRepeatRandom":function(d){return "кокустук кайталоо"},
"blockActionSetBlock":function(d){return "блок кой"},
"blockActionSpawn":function(d){return "жумурткалоо"},
"blockActionSummon":function(d){return "чакыруу"},
"blockActionTeleport":function(d){return "максатты телепортоо"},
"blockActionTeleportToPlayer":function(d){return "оюнчуну телепорттоо"},
"blockActionTestForBlock":function(d){return "блоктүн түрүн текшерүү"},
"blockActionTestForBlocks":function(d){return "ортодогу үлгү экенин текшерүү"},
"blockActionToScore":function(d){return "упайга"},
"blockActionTransfer":function(d){return "айлантуу"},
"blockActionWait":function(d){return "wait"},
"blockActionWith":function(d){return "менен"},
"blockData":function(d){return "блоктун берилиштери"},
"blockDestroyBlock":function(d){return "блокту талкалоо"},
"blockIf":function(d){return "if"},
"blockIfLavaAhead":function(d){return "алдыда лава болсо"},
"blockIs":function(d){return "бул"},
"blockMove":function(d){return "move"},
"blockMoveBackward":function(d){return "move backward"},
"blockMoveForward":function(d){return "move forward"},
"blockPlace":function(d){return "орнот"},
"blockPlaceTorch":function(d){return "чырак орнотуу"},
"blockPlaceXAheadAhead":function(d){return "алдыга"},
"blockPlaceXAheadPlace":function(d){return "орнот"},
"blockPlaceXPlace":function(d){return "орнот"},
"blockPlantCrop":function(d){return "өсүмдүк айдоо"},
"blockShear":function(d){return "кыркуу"},
"blockTill":function(d){return "чейин"},
"blockTillSoil":function(d){return "жер айдоо"},
"blockTurn":function(d){return "бурул"},
"blockTurnLeft":function(d){return "turn left"},
"blockTurnRight":function(d){return "turn right"},
"blockType":function(d){return "блоктун түрү"},
"blockTypeBedrock":function(d){return "түп катмар"},
"blockTypeBricks":function(d){return "кирпичтер"},
"blockTypeClay":function(d){return "чопо"},
"blockTypeClayHardened":function(d){return "бышкан чопо"},
"blockTypeCobblestone":function(d){return "сай таш"},
"blockTypeDirt":function(d){return "топурак"},
"blockTypeDirtCoarse":function(d){return "кум кайрак жер"},
"blockTypeDoorIron":function(d){return "темир эшик"},
"blockTypeEmpty":function(d){return "бош"},
"blockTypeFarmlandWet":function(d){return "мал чарба"},
"blockTypeGlass":function(d){return "айнек"},
"blockTypeGlowstone":function(d){return "жарык таш"},
"blockTypeGrass":function(d){return "чөп"},
"blockTypeGravel":function(d){return "шагыл"},
"blockTypeLava":function(d){return "лава"},
"blockTypeLogAcacia":function(d){return "акация устун"},
"blockTypeLogBirch":function(d){return "кайың устун"},
"blockTypeLogJungle":function(d){return "тропик жыгачынан устун"},
"blockTypeLogOak":function(d){return "эмен устун"},
"blockTypeLogSpruce":function(d){return "карагай устун"},
"blockTypeOreCoal":function(d){return "көмүр кени"},
"blockTypeOreDiamond":function(d){return "алмаз кени"},
"blockTypeOreEmerald":function(d){return "зумурут кени"},
"blockTypeOreGold":function(d){return "алтын кени"},
"blockTypeOreIron":function(d){return "темир кени"},
"blockTypeOreLapis":function(d){return "лазурит кени"},
"blockTypeOreRedstone":function(d){return "кызыл таш кени"},
"blockTypePlanksAcacia":function(d){return "акация тактайлары"},
"blockTypePlanksBirch":function(d){return "кайың тактайлары"},
"blockTypePlanksJungle":function(d){return "тропик жыгач тактайлары"},
"blockTypePlanksOak":function(d){return "эмен тактайлары"},
"blockTypePlanksSpruce":function(d){return "карагай тактайлары"},
"blockTypePressurePlateUp":function(d){return "басым пластинасы"},
"blockTypeRail":function(d){return "темир жол"},
"blockTypeRailsRedstoneTorch":function(d){return "кызыл таштан шам"},
"blockTypeRedstoneWire":function(d){return "кызыл таштан зым"},
"blockTypeSand":function(d){return "кум"},
"blockTypeSandstone":function(d){return "кумдак"},
"blockTypeStone":function(d){return "таш"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "бак"},
"blockTypeWater":function(d){return "суу"},
"blockTypeWool":function(d){return "жүн"},
"blockTypeWoolBlue":function(d){return "көк жүн"},
"blockTypeWoolMagenta":function(d){return "кызгылт көк жүн"},
"blockTypeWoolOrange":function(d){return "кызгылт сары жүн"},
"blockTypeWoolPink":function(d){return "күлгүн кызыл жүн"},
"blockTypeWoolRed":function(d){return "кызыл жүн"},
"blockTypeWoolYellow":function(d){return "сары жүн"},
"blockWhileXAheadAhead":function(d){return "алдыга"},
"blockWhileXAheadDo":function(d){return "do"},
"blockWhileXAheadWhile":function(d){return "болуп турганда"},
"cancel":function(d){return "Жок кыл"},
"cloneMode":function(d){return "клондоо тартиби"},
"cloneModeForce":function(d){return "мажбурлоо"},
"cloneModeMove":function(d){return "move"},
"cloneModeNormal":function(d){return "кадимки"},
"connectToCodeConnection":function(d){return "Бул долбоорду Minecraft'та иштетүү үчүн: Education Edition, Code Connection колдонмосун пайдалангыла."},
"destination":function(d){return "көздөгөн жери"},
"directionBack":function(d){return "артка"},
"directionDown":function(d){return "down"},
"directionForward":function(d){return "алдыга"},
"directionLeft":function(d){return "left"},
"directionMiddle":function(d){return "ортого"},
"directionRight":function(d){return "right"},
"directionUp":function(d){return "up"},
"downloadButton":function(d){return "Жүктөп ал"},
"entityType":function(d){return "объекттин түрү"},
"entityTypeChicken":function(d){return "тоок"},
"entityTypeCow":function(d){return "уй"},
"entityTypeCreeper":function(d){return "крипер"},
"entityTypeIronGolem":function(d){return "темир голем"},
"entityTypePlayer":function(d){return "оюнчу"},
"entityTypeSheep":function(d){return "кой"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "чабуул болгондо"},
"eventTypeWhenDay":function(d){return "күндүзү"},
"eventTypeWhenNight":function(d){return "түнкүсүн"},
"eventTypeWhenRun":function(d){return "when run"},
"eventTypeWhenSpawned":function(d){return "жумурткалаганда"},
"eventTypeWhenTouched":function(d){return "тийгенде"},
"eventTypeWhenUsed":function(d){return "пайдаланганда"},
"forever":function(d){return "дайыма"},
"from":function(d){return "мындан"},
"generatedCodeDescription":function(d){return "Бул тапшырмадагы блокторду жылдыруу жана орнотуу менен компүтердик Javascript тилинде буйруктар топтомун түздүңөр. Бул код компүтер экранга эмнелерди чыгарыш керегин айтат. Сиз Minecraft ойногондо көргөн жана кылган нерселердин баары ушуга окшош компүтердик коддон башталат."},
"getdataof":function(d){return "маалымат алуу"},
"getnameof":function(d){return "аталышын алуу"},
"houseSelectChooseFloorPlan":function(d){return "Үйүңөрдүн чатырынын планын тандагыла."},
"houseSelectEasy":function(d){return "Оңой"},
"houseSelectHard":function(d){return "Кыйын"},
"houseSelectLetsBuild":function(d){return "Келгиле, үй курабыз."},
"houseSelectMedium":function(d){return "Орто"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Код саатыңарды бөлүшүү шилтемесин мында тергиле жана кодуңарды Minecraft'ка көчүрүү үчүн \"Импорт\" баскыла"},
"importShareLinkHeader":function(d){return "Бөлүшүү шилтемесин импорттоо"},
"inSlotNumber":function(d){return "слоттогу номур"},
"itemTypeBlock":function(d){return "блок"},
"itemTypeDecoration":function(d){return "жасалга"},
"itemTypeMiscellaneous":function(d){return "ар түркүн"},
"itemTypeTool":function(d){return "курал"},
"items":function(d){return "элемент(тер)"},
"itemsOfBlockType":function(d){return "блок түрүнүн элемент(тер)и"},
"level10FailureMessage":function(d){return "Лаваны жаап, үстүнөн өтүп, аркы жээктен эки темир блогун казгыла."},
"level11FailureMessage":function(d){return "Алдыда лава болсо, аны таш менен жапканды унутпагыла. Муну менен катар турган ресурстарды коопсуз казып ала аласыңар."},
"level12FailureMessage":function(d){return "3 кызыл таш блогун казып алганды унутпаңыз. Бул үй курууда үйрөнгөндөрүңүз менен \"if\" (эгерде) операторун айкалыштырып, лавага түшүп калуудан сактайт."},
"level13FailureMessage":function(d){return "Картанын четинен үйгө чейин кыртыш тилкеге темир жол салгыла."},
"level1FailureMessage":function(d){return "Койго жетиш үчүн жылуу буйруктарын пайдалануу керек."},
"level1TooFewBlocksMessage":function(d){return "Койго жетиш үчүн көбүрөөк буйруктарды колдонгула."},
"level2FailureMessage":function(d){return "Бакты кыйыш үчүн сөңгөгүнө барып «блокту талкалоо» буйругун колдонгула."},
"level2TooFewBlocksMessage":function(d){return "Бакты кыйыш үчүн көбүрөөк буйруктарды колдонгула. Сөңгөгүнө барып «блокту талкалоо» буйругун колдонгула."},
"level3FailureMessage":function(d){return "Эки койдун жүнүн алыш үчүн жандарына барып \"кыркуу\" буйругун колдонгула. Койлорго жетиш үчүн бурулуу буйруктарын колдонгонду унутпагыла."},
"level3TooFewBlocksMessage":function(d){return "Койлордун жүнүн чогултуш үчүн көбүрөөк буйруктарды колдонгула. Ар бирине басып барып, \"кыркуу\" буйругун колдонгула."},
"level4FailureMessage":function(d){return "Ар бир бактын сөңгөгүнө «блокту талкалоо» буйругун колдонгула."},
"level5FailureMessage":function(d){return "Дубал куруу үчүн белгиленген жерге блокторду орнотуңуз. Кызгылт \"кайталоо\" блогу ичине салынган \"блок орнотуу\" жана \"алдыга жылуу\" сыяктуу буйруктарды аткарат."},
"level6FailureMessage":function(d){return "Тапшырманы бүтүрүш үчүн үйдүн орду белгиленген жерге блокторду орноткула."},
"level7FailureMessage":function(d){return "Айдалган жерлерге эгин эгүү үчүн \"өсүмдүк отургузуу\" буйругун пайдалангыла."},
"level8FailureMessage":function(d){return "Тийип алсаңар, чырмоок жарылат. Аларды айланып өтүп, үйгө киргиле."},
"level9FailureMessage":function(d){return "Жолду жарык кылыш үчүн кеминде 2 шам орнотконду жана 2 көмүр казып алганды унутпагыла."},
"maskMode":function(d){return "жашыруу тартиби"},
"maskModeMasked":function(d){return "жашырылды"},
"maskModeReplace":function(d){return "алмаштыруу"},
"minecraftBlock":function(d){return "блок"},
"minecraftNotConnected":function(d){return "Minecraft туташкан жок"},
"miniBlockBricks":function(d){return "кирпичтер"},
"miniBlockBucketLava":function(d){return "чака лава"},
"miniBlockBucketWater":function(d){return "чака суу"},
"miniBlockCarrots":function(d){return "сабиздер"},
"miniBlockCoal":function(d){return "көмүр"},
"miniBlockCobblestone":function(d){return "сай таш"},
"miniBlockDiamond":function(d){return "каухар"},
"miniBlockDirt":function(d){return "топурак"},
"miniBlockDirtCoarse":function(d){return "кум кайрак жер"},
"miniBlockEgg":function(d){return "жумуртка"},
"miniBlockEmerald":function(d){return "зумурут"},
"miniBlockGravel":function(d){return "шагыл"},
"miniBlockGunPowder":function(d){return "ок дары"},
"miniBlockIngotGold":function(d){return "куйма алтын"},
"miniBlockIngotIron":function(d){return "куйма темир"},
"miniBlockLapisLazuli":function(d){return "лазурит"},
"miniBlockLogAcacia":function(d){return "акация устун"},
"miniBlockLogBirch":function(d){return "кайың устун"},
"miniBlockLogJungle":function(d){return "тропик жыгачынан устун"},
"miniBlockLogOak":function(d){return "эмен устун"},
"miniBlockLogSpruce":function(d){return "карагай устун"},
"miniBlockMilk":function(d){return "сүт"},
"miniBlockPlanksAcacia":function(d){return "акация тактайлары"},
"miniBlockPlanksBirch":function(d){return "кайың тактайлары"},
"miniBlockPlanksJungle":function(d){return "тропик жыгач тактайлары"},
"miniBlockPlanksOak":function(d){return "эмен тактайлары"},
"miniBlockPlanksSpruce":function(d){return "карагай тактайлары"},
"miniBlockPoppy":function(d){return "апийим"},
"miniBlockPotato":function(d){return "картөшкө"},
"miniBlockRedstoneDust":function(d){return "кызыл таш чаңы"},
"miniBlockSand":function(d){return "кум"},
"miniBlockSandstone":function(d){return "кумдак"},
"miniBlockSheep":function(d){return "кой"},
"miniBlockWheat":function(d){return "буудай"},
"miniBlockWool":function(d){return "жүн"},
"nextLevelMsg":function(d){return craft_locale.v(d,"puzzleNumber")+" бүтүрдүңөр. Куттуктайбыз!"},
"oldBlockHandling":function(d){return "эски блок"},
"oldBlockHandlingsDestroy":function(d){return "талкалоо"},
"oldBlockHandlingsKeep":function(d){return "улантуу"},
"oldBlockHandlingsReplace":function(d){return "алмаштыруу"},
"onBehalfOf":function(d){return "атынан"},
"playerSelectChooseCharacter":function(d){return "Каарман тандаңыз."},
"playerSelectChooseSelectButton":function(d){return "Тандоо"},
"playerSelectLetsGetStarted":function(d){return "Баштайбыз."},
"quantity":function(d){return "саны"},
"reinfFeedbackMsg":function(d){return "Кайтып, оюнуңарга улантуу үчүн \"Оюнду улантууну\" баскыла."},
"relative":function(d){return "байланыштуу"},
"runAgent":function(d){return "Агентти жүргүз"},
"score":function(d){return "Эсеп"},
"seconds":function(d){return "секунда(лар)"},
"selectChooseButton":function(d){return "Тандоо"},
"soundTypeBump":function(d){return "сокку"},
"soundTypeChickenBawk":function(d){return "тоок какылдайт"},
"soundTypeChickenHurt":function(d){return "тоок жарадар"},
"soundTypeCollectedBlock":function(d){return "блок жыйноо"},
"soundTypeCowHuff":function(d){return "уй күшүлдөйт"},
"soundTypeCowHurt":function(d){return "уй жарадар"},
"soundTypeCowMoo":function(d){return "уй мөөрөйт"},
"soundTypeCowMooLong":function(d){return "уй мөөрөйт"},
"soundTypeCreeperHiss":function(d){return "крипер ышылдайт"},
"soundTypeDig_wood1":function(d){return "жыгач сынат"},
"soundTypeDoorOpen":function(d){return "эшик ачуу"},
"soundTypeExplode":function(d){return "жардыр"},
"soundTypeFailure":function(d){return "дэңгээл өтүлгөн жок"},
"soundTypeFall":function(d){return "кулоо"},
"soundTypeFizz":function(d){return "көбүр"},
"soundTypeFuse":function(d){return "милте"},
"soundTypeIronGolemHit":function(d){return "темир голем согот"},
"soundTypeMetalWhack":function(d){return "металл сокку"},
"soundTypeMinecart":function(d){return "кен тарткыч"},
"soundTypePlaceBlock":function(d){return "блоктун орду"},
"soundTypePunch":function(d){return "уруу"},
"soundTypeSheepBaa":function(d){return "кой маарайт"},
"soundTypeStepFarmland":function(d){return "мал чарбада кадам"},
"soundTypeStepGrass":function(d){return "чөптө кадам"},
"soundTypeStepGravel":function(d){return "шагылда кадам"},
"soundTypeStepStone":function(d){return "ташта кадам"},
"soundTypeStepWood":function(d){return "жыгачта кадам"},
"soundTypeSuccess":function(d){return "дэңгээлди өттүңөр"},
"soundTypeZombieBrains":function(d){return "зомбинин онтоосу"},
"soundTypeZombieGroan":function(d){return "зомбинин ыркырашы"},
"soundTypeZombieHurt":function(d){return "зомби жарадар"},
"target":function(d){return "бута"},
"testModeAll":function(d){return "баары"},
"testModeMasked":function(d){return "жашырылды"},
"tileData":function(d){return "берилиш блоктору"},
"timeDay":function(d){return "day"},
"timeLong":function(d){return "узак"},
"timeMedium":function(d){return "орто"},
"timeNight":function(d){return "night"},
"timeRandom":function(d){return "random"},
"timeSet":function(d){return "убакыт коюу"},
"timeShort":function(d){return "кыска"},
"timeVeryLong":function(d){return "өтө узак"},
"timeVeryShort":function(d){return "өтө кыска"},
"to":function(d){return "үчүн"},
"toSlotNumber":function(d){return "слот номуруна"},
"tooManyBlocksFail":function(d){return "Бул "+craft_locale.v(d,"puzzleNumber")+" башкатырма бүттү. Куттуктайбыз! Аны "+craft_locale.p(d,"numBlocks",0,"en",{"other":craft_locale.n(d,"numBlocks")+" blocks"})+" менен дагы бүтүрсө болот."},
"turnRandom":function(d){return "кокустан бурулуу"},
"useArrowKeys":function(d){return "Блок кошуп кереги жок! Жебелер менен жылгыла жана элементтерди колдонуу үчүн боштук баскычын же оюн тактасын баскыла."},
"weather":function(d){return "аба ырайы"},
"weatherTypeClear":function(d){return "ачык"},
"weatherTypeRain":function(d){return "жаан"},
"weatherTypeThunder":function(d){return "чагылган"}};