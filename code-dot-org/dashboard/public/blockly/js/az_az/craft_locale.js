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
"absolute":function(d){return "modul"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "-də"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"en",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "əlavə et"},
"blockActionAttack":function(d){return "hücum"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "topla"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "yoxa çıxmaq"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "drop"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "explode"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "flash"},
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
"blockActionMove":function(d){return "get"},
"blockActionMoveAway":function(d){return "move away from"},
"blockActionMoveForward":function(d){return "irəli get"},
"blockActionMoveRandom":function(d){return "move random"},
"blockActionMoveTo":function(d){return "move to"},
"blockActionMoveToward":function(d){return "move a step toward"},
"blockActionPlaySound":function(d){return "play sound"},
"blockActionRepeat":function(d){return "təkrar"},
"blockActionRepeatRandom":function(d){return "repeat random"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "spawn"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "to score"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "gözlə"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "bloku dağıt"},
"blockIf":function(d){return "əgər"},
"blockIfLavaAhead":function(d){return "əgər qabaqda lava varsa"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "get"},
"blockMoveBackward":function(d){return "geriyə get"},
"blockMoveForward":function(d){return "irəli get"},
"blockPlace":function(d){return "məkan"},
"blockPlaceTorch":function(d){return "məşəl yerləşdir"},
"blockPlaceXAheadAhead":function(d){return "irəli"},
"blockPlaceXAheadPlace":function(d){return "məkan"},
"blockPlaceXPlace":function(d){return "məkan"},
"blockPlantCrop":function(d){return "bitki mıhsulu"},
"blockShear":function(d){return "kəs"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "torpağa qədər"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "sola dön"},
"blockTurnRight":function(d){return "sağa dön"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "ana süxur"},
"blockTypeBricks":function(d){return "kərpiclər"},
"blockTypeClay":function(d){return "gil"},
"blockTypeClayHardened":function(d){return "bərkimiş gil"},
"blockTypeCobblestone":function(d){return "çay daşı"},
"blockTypeDirt":function(d){return "torpaq"},
"blockTypeDirtCoarse":function(d){return "iri torpaq"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "boş"},
"blockTypeFarmlandWet":function(d){return "əkinçilik"},
"blockTypeGlass":function(d){return "şüşə"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "ot"},
"blockTypeGravel":function(d){return "çınqıl"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "akasiya qeydi"},
"blockTypeLogBirch":function(d){return "ağcaqayın qeydləri"},
"blockTypeLogJungle":function(d){return "cəngəllik qeydi"},
"blockTypeLogOak":function(d){return "palıd qeydləri"},
"blockTypeLogSpruce":function(d){return "küknar qeydləri"},
"blockTypeOreCoal":function(d){return "kömür filizi"},
"blockTypeOreDiamond":function(d){return "almaz filizi"},
"blockTypeOreEmerald":function(d){return "zümrüd filizi"},
"blockTypeOreGold":function(d){return "qızıl filizi"},
"blockTypeOreIron":function(d){return "dəmir filizi"},
"blockTypeOreLapis":function(d){return "lapis filizi"},
"blockTypeOreRedstone":function(d){return "qırmızı daş filizi"},
"blockTypePlanksAcacia":function(d){return "akasiya odunları"},
"blockTypePlanksBirch":function(d){return "ağcaqayın odunları"},
"blockTypePlanksJungle":function(d){return "cəngəllik odunları"},
"blockTypePlanksOak":function(d){return "palıd odunları"},
"blockTypePlanksSpruce":function(d){return "küknar odunları"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "rels"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "qum"},
"blockTypeSandstone":function(d){return "qumdaşı"},
"blockTypeStone":function(d){return "daş"},
"blockTypeTnt":function(d){return "bomba"},
"blockTypeTree":function(d){return "ağac"},
"blockTypeWater":function(d){return "su"},
"blockTypeWool":function(d){return "yun"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "irəli"},
"blockWhileXAheadDo":function(d){return "et"},
"blockWhileXAheadWhile":function(d){return "hələ ki,"},
"cancel":function(d){return "İmtina et"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "get"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "aşağı"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "sola"},
"directionMiddle":function(d){return "middle"},
"directionRight":function(d){return "sağa"},
"directionUp":function(d){return "yuxarı"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "cücə"},
"entityTypeCow":function(d){return "inək"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "player"},
"entityTypeSheep":function(d){return "sheep"},
"entityTypeZombie":function(d){return "zombi"},
"eventTypeWhenAttacked":function(d){return "when attacked"},
"eventTypeWhenDay":function(d){return "gündüz vaxtı"},
"eventTypeWhenNight":function(d){return "gecə vaxtı"},
"eventTypeWhenRun":function(d){return "icra etdikdə"},
"eventTypeWhenSpawned":function(d){return "when spawned"},
"eventTypeWhenTouched":function(d){return "when touched"},
"eventTypeWhenUsed":function(d){return "when used"},
"forever":function(d){return "forever"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Bu tapmacada blokları sürüşdürüb yerləşdirərək \"Javascript\" adlı kompyuter dilində bir sıra təlimat düzəltdiniz. Bu kod kompyuterlərə ekranda nə təsvir olacağını deyir. \"Minecraft\"-da gördüyünüz və etdiyiniz hər şey də eyni cür bunun kimi kompyuter kodu sıraları ilə başlayır."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Evinizin planı üçün döşəmə seçin."},
"houseSelectEasy":function(d){return "Asan"},
"houseSelectHard":function(d){return "Çətin"},
"houseSelectLetsBuild":function(d){return "Ev tikək."},
"houseSelectMedium":function(d){return "Orta"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "blok"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Qabağa keçmək üçün lavanın üstünü bağlayın və sonra digər tərəfdəki 2 dəmir blokunu çıxarın."},
"level11FailureMessage":function(d){return "Qabağınızda lava varsa, irəliyə qırıqdaş yerləşdirməyi unutmayın. Beləliklə, bu qaynaqları rahat şəkildə çıxara bilərsiniz."},
"level12FailureMessage":function(d){return "3 Dənə qızıldaşı çıxarmağı unutmayın. Bu, evinizi tikəndə öyrəndiklərinizi və lavadan qurtulmaq üçün \"əgər\" komandalarından istifadə etməyi birləşdirəcək."},
"level13FailureMessage":function(d){return "Qapınızdan xəritənin ucuna qədər olan yol boyu \"rels\" yerləşdirin."},
"level1FailureMessage":function(d){return "Qoyunun yanına getmək üçün komandalaradan istifadə etməlisən."},
"level1TooFewBlocksMessage":function(d){return "Qoyuna çatmaq üçün daha çox komandalardan istifadə et."},
"level2FailureMessage":function(d){return "Bir ağacı kəsmək üçün ağacın gövdəsinə tərəf gedin və \"bloku məh et\" komandasından istifadə edin."},
"level2TooFewBlocksMessage":function(d){return "Ağacı kəsmək üçün daha çox komanda istifadə etməyə cəhd edin. Gövdəsinə tərəf gedin və \"bloku məhv et\" komandasından istifadə edin."},
"level3FailureMessage":function(d){return "Hər 2 qoyundan da yun almaq üçün qoyunlara tərəf gedin və \"qırx\" komandasından istifadə edin. Qoyunlara çatmaq üçün dönmə komandalarından istifadə etməyi unutmayın."},
"level3TooFewBlocksMessage":function(d){return "Hər 2 qoyundan da yun toplamaq üçün daha çox komanda istifadə edin. Qoyunlara tərəf gedin və \"qırx\" komandasından istifadə edin."},
"level4FailureMessage":function(d){return "Hər 3 ağac gövdəsi üçün \"bloku dağıt\" komandasından istifadə etməlisən."},
"level5FailureMessage":function(d){return "Bir divar tikmək üçün bloklarınızı torpaq xəttinə yerləşdirin. Çəhrayı \"təkrarla\" komandası \"bloku yerləşdir\" və \"irəli get\" kimi içinə yerləşdirilən komandaları çalışdıracaq."},
"level6FailureMessage":function(d){return "Evin planında blokları yerləşdir və tapmacayı tamamla."},
"level7FailureMessage":function(d){return "Tünd rəngli torpağın hər bir parçasına əkinləri yerləşdirmək üçün \"ək\" komandasından istifadə et."},
"level8FailureMessage":function(d){return "Əgər bir liana toxunsanız, partlayar. Onların ətrafından gizlincə keçin və evinizə girin."},
"level9FailureMessage":function(d){return "Yolu işıqlandırması üçün azı 2 məşəl və azı 2 kömür şaxtasını yerləşdirməlisən."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "blok"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "kərpiclər"},
"miniBlockBucketLava":function(d){return "lava bucket"},
"miniBlockBucketWater":function(d){return "su vedrəsi"},
"miniBlockCarrots":function(d){return "köklər"},
"miniBlockCoal":function(d){return "kömür"},
"miniBlockCobblestone":function(d){return "çay daşı"},
"miniBlockDiamond":function(d){return "almaz"},
"miniBlockDirt":function(d){return "torpaq"},
"miniBlockDirtCoarse":function(d){return "iri torpaq"},
"miniBlockEgg":function(d){return "yumurta"},
"miniBlockEmerald":function(d){return "emerald"},
"miniBlockGravel":function(d){return "çınqıl"},
"miniBlockGunPowder":function(d){return "gunpowder"},
"miniBlockIngotGold":function(d){return "gold ingot"},
"miniBlockIngotIron":function(d){return "iron ingot"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "akasiya qeydi"},
"miniBlockLogBirch":function(d){return "ağcaqayın qeydləri"},
"miniBlockLogJungle":function(d){return "cəngəllik qeydi"},
"miniBlockLogOak":function(d){return "palıd qeydləri"},
"miniBlockLogSpruce":function(d){return "küknar qeydləri"},
"miniBlockMilk":function(d){return "süd"},
"miniBlockPlanksAcacia":function(d){return "akasiya odunları"},
"miniBlockPlanksBirch":function(d){return "ağcaqayın odunları"},
"miniBlockPlanksJungle":function(d){return "cəngəllik odunları"},
"miniBlockPlanksOak":function(d){return "palıd odunları"},
"miniBlockPlanksSpruce":function(d){return "küknar odunları"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "kartof"},
"miniBlockRedstoneDust":function(d){return "redstone dust"},
"miniBlockSand":function(d){return "qum"},
"miniBlockSandstone":function(d){return "qumdaşı"},
"miniBlockSheep":function(d){return "sheep"},
"miniBlockWheat":function(d){return "un"},
"miniBlockWool":function(d){return "yun"},
"nextLevelMsg":function(d){return "Tapmaca "+craft_locale.v(d,"puzzleNumber")+" tamamlandı. Təbriklər!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Xarakter seç."},
"playerSelectChooseSelectButton":function(d){return "Seç"},
"playerSelectLetsGetStarted":function(d){return "Başlayaq."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Sən oyununu oynamağa geri qayıtmaq üçün \"Oyuna davam et\"-ə basa bilərsən."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Score"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Seç"},
"soundTypeBump":function(d){return "bump"},
"soundTypeChickenBawk":function(d){return "chicken cluck"},
"soundTypeChickenHurt":function(d){return "chicken hurt"},
"soundTypeCollectedBlock":function(d){return "block collect"},
"soundTypeCowHuff":function(d){return "cow huff"},
"soundTypeCowHurt":function(d){return "cow hurt"},
"soundTypeCowMoo":function(d){return "cow moo"},
"soundTypeCowMooLong":function(d){return "cow mooo"},
"soundTypeCreeperHiss":function(d){return "creeper hiss"},
"soundTypeDig_wood1":function(d){return "wood break"},
"soundTypeDoorOpen":function(d){return "door open"},
"soundTypeExplode":function(d){return "explode"},
"soundTypeFailure":function(d){return "level failure"},
"soundTypeFall":function(d){return "fall"},
"soundTypeFizz":function(d){return "fizz"},
"soundTypeFuse":function(d){return "fuse"},
"soundTypeIronGolemHit":function(d){return "iron golem hit"},
"soundTypeMetalWhack":function(d){return "metal whack"},
"soundTypeMinecart":function(d){return "minecart"},
"soundTypePlaceBlock":function(d){return "block place"},
"soundTypePunch":function(d){return "punch"},
"soundTypeSheepBaa":function(d){return "sheep baa"},
"soundTypeStepFarmland":function(d){return "step farmland"},
"soundTypeStepGrass":function(d){return "step grass"},
"soundTypeStepGravel":function(d){return "step gravel"},
"soundTypeStepStone":function(d){return "step stone"},
"soundTypeStepWood":function(d){return "step wood"},
"soundTypeSuccess":function(d){return "level success"},
"soundTypeZombieBrains":function(d){return "zombie moan"},
"soundTypeZombieGroan":function(d){return "zombie growl"},
"soundTypeZombieHurt":function(d){return "zombie hurt"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "gün"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "medium"},
"timeNight":function(d){return "gecə"},
"timeRandom":function(d){return "təsadüfi"},
"timeSet":function(d){return "time set"},
"timeShort":function(d){return "short"},
"timeVeryLong":function(d){return "very long"},
"timeVeryShort":function(d){return "very short"},
"to":function(d){return "bu mətnin sonuna:"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Tapmaca "+craft_locale.v(d,"puzzleNumber")+" tamamlandı. Təbriklər! Həmçinin bunu "+craft_locale.p(d,"numBlocks",0,"en",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+" ilə də tamamlaya bilərsiniz."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};