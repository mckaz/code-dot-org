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
"absolute":function(d){return "絕對值"},
"agentGenericFailureMessage":function(d){return "繼續設定代碼！記得使用 Agent 來助您一臂之力。"},
"agentTooFewBlocksFailureMessage":function(d){return "請嘗試一次只新增一個方塊，讓 Agent 可前往正確的位置。"},
"at":function(d){return "在"},
"agentDiamondPathCongrats":function(d){return "恭喜！您找到了鑽石路徑！您目前已收集了 "+craft_locale.p(d,"count",0,"zh",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" 顆！"},
"blockActionAdd":function(d){return "添加"},
"blockActionAttack":function(d){return "攻擊"},
"blockActionClone":function(d){return "複製方塊"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "收集"},
"blockActionCollectAll":function(d){return "收集所有"},
"blockActionDestroyEntity":function(d){return "消失"},
"blockActionDetect":function(d){return "偵測"},
"blockActionDetectRedstone":function(d){return "偵測紅石礦"},
"blockActionDrop":function(d){return "掉落"},
"blockActionDropAll":function(d){return "丟棄所有"},
"blockActionExecute":function(d){return "執行命令"},
"blockActionExplodeEntity":function(d){return "爆炸"},
"blockActionFill":function(d){return "填充"},
"blockActionFlashEntity":function(d){return "閃爍"},
"blockActionGetItemCount":function(d){return "取得物品數量"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "取得物品細節"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "取得物品空間"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "給予"},
"blockActionInspect":function(d){return "查看"},
"blockActionInspectData":function(d){return "查看數據"},
"blockActionKill":function(d){return "殺死目標"},
"blockActionMove":function(d){return "移動"},
"blockActionMoveAway":function(d){return "移動以遠離"},
"blockActionMoveForward":function(d){return "移動-向前"},
"blockActionMoveRandom":function(d){return "移動-隨機"},
"blockActionMoveTo":function(d){return "移至"},
"blockActionMoveToward":function(d){return "移動一步-向目標"},
"blockActionPlaySound":function(d){return "播放音效"},
"blockActionRepeat":function(d){return "循環"},
"blockActionRepeatRandom":function(d){return "重複 隨機"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "生成"},
"blockActionSummon":function(d){return "召喚"},
"blockActionTeleport":function(d){return "傳送目標"},
"blockActionTeleportToPlayer":function(d){return "傳送給玩家"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "分"},
"blockActionTransfer":function(d){return "傳輸"},
"blockActionWait":function(d){return "等待"},
"blockActionWith":function(d){return "以"},
"blockData":function(d){return "積木數據"},
"blockDestroyBlock":function(d){return "摧毀方塊"},
"blockIf":function(d){return "如果"},
"blockIfLavaAhead":function(d){return "如果熔岩在前面"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "移動"},
"blockMoveBackward":function(d){return "移動-向後"},
"blockMoveForward":function(d){return "移動-向前"},
"blockPlace":function(d){return "放置"},
"blockPlaceTorch":function(d){return "放置火把"},
"blockPlaceXAheadAhead":function(d){return "到前方"},
"blockPlaceXAheadPlace":function(d){return "放置"},
"blockPlaceXPlace":function(d){return "放置"},
"blockPlantCrop":function(d){return "種植作物"},
"blockShear":function(d){return "修剪"},
"blockTill":function(d){return "直到"},
"blockTillSoil":function(d){return "耕地"},
"blockTurn":function(d){return "轉向"},
"blockTurnLeft":function(d){return "轉向-左方"},
"blockTurnRight":function(d){return "轉向-右方"},
"blockType":function(d){return "積木類型"},
"blockTypeBedrock":function(d){return "基石"},
"blockTypeBricks":function(d){return "磚塊"},
"blockTypeClay":function(d){return "黏土塊"},
"blockTypeClayHardened":function(d){return "硬化黏土"},
"blockTypeCobblestone":function(d){return "鵝卵石"},
"blockTypeDirt":function(d){return "泥土"},
"blockTypeDirtCoarse":function(d){return "粗泥"},
"blockTypeDoorIron":function(d){return "鐵門"},
"blockTypeEmpty":function(d){return "沒有方塊"},
"blockTypeFarmlandWet":function(d){return "農地"},
"blockTypeGlass":function(d){return "玻璃"},
"blockTypeGlowstone":function(d){return "閃石"},
"blockTypeGrass":function(d){return "草地"},
"blockTypeGravel":function(d){return "礫石"},
"blockTypeLava":function(d){return "熔岩"},
"blockTypeLogAcacia":function(d){return "相思樹原木"},
"blockTypeLogBirch":function(d){return "樺樹原木"},
"blockTypeLogJungle":function(d){return "叢林原木"},
"blockTypeLogOak":function(d){return "橡樹木材"},
"blockTypeLogSpruce":function(d){return "杉樹原木"},
"blockTypeOreCoal":function(d){return "煤礦"},
"blockTypeOreDiamond":function(d){return "鑽石礦"},
"blockTypeOreEmerald":function(d){return "綠寶石礦"},
"blockTypeOreGold":function(d){return "金礦"},
"blockTypeOreIron":function(d){return "鐵礦"},
"blockTypeOreLapis":function(d){return "青金石礦"},
"blockTypeOreRedstone":function(d){return "紅石礦"},
"blockTypePlanksAcacia":function(d){return "相思木厚板"},
"blockTypePlanksBirch":function(d){return "樺樹厚板"},
"blockTypePlanksJungle":function(d){return "叢林厚板"},
"blockTypePlanksOak":function(d){return "橡木厚板"},
"blockTypePlanksSpruce":function(d){return "杉樹厚板"},
"blockTypePressurePlateUp":function(d){return "壓板"},
"blockTypeRail":function(d){return "軌道"},
"blockTypeRailsRedstoneTorch":function(d){return "紅石火把"},
"blockTypeRedstoneWire":function(d){return "紅石線"},
"blockTypeSand":function(d){return "沙"},
"blockTypeSandstone":function(d){return "砂岩"},
"blockTypeStone":function(d){return "石頭"},
"blockTypeTnt":function(d){return "炸藥"},
"blockTypeTree":function(d){return "樹木"},
"blockTypeWater":function(d){return "水"},
"blockTypeWool":function(d){return "羊毛"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "到前方"},
"blockWhileXAheadDo":function(d){return " "},
"blockWhileXAheadWhile":function(d){return "當"},
"cancel":function(d){return "取消"},
"cloneMode":function(d){return "複製模式"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "移動"},
"cloneModeNormal":function(d){return "普通"},
"connectToCodeConnection":function(d){return "若要在 Minecraft 教育版裡運行這個專案，請使用程式碼串接應用程式。"},
"destination":function(d){return "destination"},
"directionBack":function(d){return "向後"},
"directionDown":function(d){return "到下方"},
"directionForward":function(d){return "向前"},
"directionLeft":function(d){return "到左方"},
"directionMiddle":function(d){return "到中間"},
"directionRight":function(d){return "到右方"},
"directionUp":function(d){return "到上方"},
"downloadButton":function(d){return "下載"},
"entityType":function(d){return "實體類型"},
"entityTypeChicken":function(d){return "雞"},
"entityTypeCow":function(d){return "乳牛"},
"entityTypeCreeper":function(d){return "苦力怕"},
"entityTypeIronGolem":function(d){return "鐵魔像"},
"entityTypePlayer":function(d){return "玩家"},
"entityTypeSheep":function(d){return "綿羊"},
"entityTypeZombie":function(d){return "殭屍"},
"eventTypeWhenAttacked":function(d){return "當攻擊時"},
"eventTypeWhenDay":function(d){return "當白天時"},
"eventTypeWhenNight":function(d){return "當夜晚時"},
"eventTypeWhenRun":function(d){return "當運行時"},
"eventTypeWhenSpawned":function(d){return "當生成時"},
"eventTypeWhenTouched":function(d){return "當碰觸時"},
"eventTypeWhenUsed":function(d){return "當使用時"},
"forever":function(d){return "重複無限次"},
"from":function(d){return "從"},
"generatedCodeDescription":function(d){return "這闖關過程中，你拖曳和放置方塊的時候，其實背後都是透過 Javascript 這個程式語言和電腦溝通，是程式告訴了電腦要在屏幕上顯示什麼。你在 Minecraft 中所見與所做的一切，都是從像這樣的計算機代碼（computer code）開始。"},
"getdataof":function(d){return "取得數據"},
"getnameof":function(d){return "取得姓名"},
"houseSelectChooseFloorPlan":function(d){return "選擇你的房子平面圖。"},
"houseSelectEasy":function(d){return "簡單"},
"houseSelectHard":function(d){return "困難"},
"houseSelectLetsBuild":function(d){return "我們來蓋幢房子吧。"},
"houseSelectMedium":function(d){return "中"},
"import":function(d){return "匯入"},
"importShareLinkBody":function(d){return "在此輸入您的「一小時程式設計」分享連結，然後按一下 \"匯入\" 即可在 Minecraft 中複製您的代碼"},
"importShareLinkHeader":function(d){return "匯入分享連結"},
"inSlotNumber":function(d){return "在插槽序號"},
"itemTypeBlock":function(d){return "方塊"},
"itemTypeDecoration":function(d){return "裝飾"},
"itemTypeMiscellaneous":function(d){return "雜項"},
"itemTypeTool":function(d){return "工具"},
"items":function(d){return "項目"},
"itemsOfBlockType":function(d){return "方塊類型物品"},
"level10FailureMessage":function(d){return "把熔岩蓋住才能走過去，在對面開採 2 個鐵礦。"},
"level11FailureMessage":function(d){return "如果前面有熔岩，一定要放置鵝卵石，這樣你才能安全的開採到資源。"},
"level12FailureMessage":function(d){return "一定要開採 3 個紅石方塊，並運用之前學過的二個技巧：「建造房屋」和「使用如果陳述句」，避免讓自己掉到熔岩裡。"},
"level13FailureMessage":function(d){return "沿著泥土路放置「鐵軌」，從門口一路延伸到地圖邊緣。"},
"level1FailureMessage":function(d){return "你必須利用程式積木才能走到羊的旁邊。"},
"level1TooFewBlocksMessage":function(d){return "試試用更多指令，走到羊的旁邊。"},
"level2FailureMessage":function(d){return "如果要砍樹，先走到樹旁邊，然後使用「摧毀方塊」指令。"},
"level2TooFewBlocksMessage":function(d){return "試試用更多的指令來砍樹。先走到樹旁，然後使用「摧毀方塊」指令。"},
"level3FailureMessage":function(d){return "如果要從綿羊身上採集羊毛，走到羊旁邊，使用「修剪」指令。記得使用轉向指令以靠近每隻綿羊。"},
"level3TooFewBlocksMessage":function(d){return "試試用更多的指令來採集羊毛。走到每隻羊旁邊，使用「修剪」指令。"},
"level4FailureMessage":function(d){return "您必須對三根樹幹分別使用「破壞方塊」指令。"},
"level5FailureMessage":function(d){return "將方塊放在泥土輪廓上，建造一面牆。循環指令（粉紅色）會運行放置在其中程式，比如「放置方塊」和「移動-向前」。"},
"level6FailureMessage":function(d){return "將方塊放置在房屋的泥土輪廓上，就能完成關卡。"},
"level7FailureMessage":function(d){return "使用「種植」指令，將農作物種植在每塊黑色耕地上。"},
"level8FailureMessage":function(d){return "如果你碰到苦力怕，它就會爆炸。悄悄繞過它們，進入房屋。"},
"level9FailureMessage":function(d){return "放置至少 2 支火把來照明，並且開採放少 2 個煤礦。"},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "已遮罩"},
"maskModeReplace":function(d){return "取代"},
"minecraftBlock":function(d){return "方塊"},
"minecraftNotConnected":function(d){return "Minecraft 未連接"},
"miniBlockBricks":function(d){return "磚塊"},
"miniBlockBucketLava":function(d){return "熔岩桶"},
"miniBlockBucketWater":function(d){return "水桶"},
"miniBlockCarrots":function(d){return "胡蘿蔔"},
"miniBlockCoal":function(d){return "煤塊"},
"miniBlockCobblestone":function(d){return "鵝卵石"},
"miniBlockDiamond":function(d){return "鑽石"},
"miniBlockDirt":function(d){return "泥土"},
"miniBlockDirtCoarse":function(d){return "粗泥"},
"miniBlockEgg":function(d){return "蛋"},
"miniBlockEmerald":function(d){return "綠寶石"},
"miniBlockGravel":function(d){return "礫石"},
"miniBlockGunPowder":function(d){return "火藥"},
"miniBlockIngotGold":function(d){return "金塊"},
"miniBlockIngotIron":function(d){return "鐵塊"},
"miniBlockLapisLazuli":function(d){return "青金石"},
"miniBlockLogAcacia":function(d){return "相思樹原木"},
"miniBlockLogBirch":function(d){return "樺樹原木"},
"miniBlockLogJungle":function(d){return "叢林原木"},
"miniBlockLogOak":function(d){return "橡樹木材"},
"miniBlockLogSpruce":function(d){return "杉樹原木"},
"miniBlockMilk":function(d){return "牛奶"},
"miniBlockPlanksAcacia":function(d){return "相思木厚板"},
"miniBlockPlanksBirch":function(d){return "樺樹厚板"},
"miniBlockPlanksJungle":function(d){return "叢林厚板"},
"miniBlockPlanksOak":function(d){return "橡木厚板"},
"miniBlockPlanksSpruce":function(d){return "杉樹厚板"},
"miniBlockPoppy":function(d){return "罌粟"},
"miniBlockPotato":function(d){return "馬鈴薯"},
"miniBlockRedstoneDust":function(d){return "紅石塵"},
"miniBlockSand":function(d){return "沙"},
"miniBlockSandstone":function(d){return "砂岩"},
"miniBlockSheep":function(d){return "綿羊"},
"miniBlockWheat":function(d){return "小麥"},
"miniBlockWool":function(d){return "羊毛"},
"nextLevelMsg":function(d){return "已完成關卡 "+craft_locale.v(d,"puzzleNumber")+" ，恭喜！"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "破壞"},
"oldBlockHandlingsKeep":function(d){return "保留"},
"oldBlockHandlingsReplace":function(d){return "取代"},
"onBehalfOf":function(d){return "代表"},
"playerSelectChooseCharacter":function(d){return "選擇要使用的角色。"},
"playerSelectChooseSelectButton":function(d){return "選擇"},
"playerSelectLetsGetStarted":function(d){return "我們開始吧。"},
"quantity":function(d){return "數量"},
"reinfFeedbackMsg":function(d){return "你可以點擊「再玩一會兒」返回遊戲畫面。"},
"relative":function(d){return "相對"},
"runAgent":function(d){return "執行 Agent"},
"score":function(d){return "分數"},
"seconds":function(d){return "秒"},
"selectChooseButton":function(d){return "選擇"},
"soundTypeBump":function(d){return "碰撞"},
"soundTypeChickenBawk":function(d){return "雞咯咯叫"},
"soundTypeChickenHurt":function(d){return "雞哀哀叫"},
"soundTypeCollectedBlock":function(d){return "方塊收集"},
"soundTypeCowHuff":function(d){return "乳牛發怒"},
"soundTypeCowHurt":function(d){return "乳牛受傷"},
"soundTypeCowMoo":function(d){return "乳牛短哞"},
"soundTypeCowMooLong":function(d){return "乳牛長哞"},
"soundTypeCreeperHiss":function(d){return "苦力怕嘶嘶響"},
"soundTypeDig_wood1":function(d){return "木頭斷裂"},
"soundTypeDoorOpen":function(d){return "門開"},
"soundTypeExplode":function(d){return "爆炸"},
"soundTypeFailure":function(d){return "闖關失敗"},
"soundTypeFall":function(d){return "失敗"},
"soundTypeFizz":function(d){return "嘶嘶聲"},
"soundTypeFuse":function(d){return "引信聲"},
"soundTypeIronGolemHit":function(d){return "鐵魔像被擊中"},
"soundTypeMetalWhack":function(d){return "金屬撞擊"},
"soundTypeMinecart":function(d){return "礦車"},
"soundTypePlaceBlock":function(d){return "方塊放置"},
"soundTypePunch":function(d){return "猛擊"},
"soundTypeSheepBaa":function(d){return "綿羊咩"},
"soundTypeStepFarmland":function(d){return "農田腳步聲"},
"soundTypeStepGrass":function(d){return "草地腳步聲"},
"soundTypeStepGravel":function(d){return "砂礫腳步聲"},
"soundTypeStepStone":function(d){return "石頭腳步聲"},
"soundTypeStepWood":function(d){return "木頭腳步聲"},
"soundTypeSuccess":function(d){return "闖關成功"},
"soundTypeZombieBrains":function(d){return "殭屍鬼叫"},
"soundTypeZombieGroan":function(d){return "殭屍咆哮"},
"soundTypeZombieHurt":function(d){return "殭屍哀叫"},
"target":function(d){return "目標"},
"testModeAll":function(d){return "全部"},
"testModeMasked":function(d){return "已遮罩"},
"tileData":function(d){return "平鋪數據"},
"timeDay":function(d){return "天"},
"timeLong":function(d){return "長"},
"timeMedium":function(d){return "中"},
"timeNight":function(d){return "夜晚"},
"timeRandom":function(d){return "隨機"},
"timeSet":function(d){return "將時間設為 "},
"timeShort":function(d){return "短"},
"timeVeryLong":function(d){return "很長"},
"timeVeryShort":function(d){return "很短"},
"to":function(d){return "執行"},
"toSlotNumber":function(d){return "到插槽序號"},
"tooManyBlocksFail":function(d){return "已完成關卡 "+craft_locale.v(d,"puzzleNumber")+"，恭喜！你可以試試用 "+craft_locale.p(d,"numBlocks",0,"zh",{"one":"1 個方塊","other":craft_locale.n(d,"numBlocks")+" 個方塊"})+" 來過關。"},
"turnRandom":function(d){return "轉向-隨機"},
"useArrowKeys":function(d){return "你不需要添加任何積木！用方向鍵來移動，按下空白鍵或觸碰螢幕以使用物品。"},
"weather":function(d){return "天氣"},
"weatherTypeClear":function(d){return "清除"},
"weatherTypeRain":function(d){return "下雨"},
"weatherTypeThunder":function(d){return "打雷"}};