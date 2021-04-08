var maze_locale = {lc:{"ar":function(n){
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
v:function(d,k){maze_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){maze_locale.c(d,k);return d[k] in p?p[d[k]]:(k=maze_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){maze_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).maze_locale = {
"at":function(d){return "在"},
"atFlower":function(d){return "在花叢中"},
"atHoneycomb":function(d){return "在蜂窩"},
"avoidCowAndRemove":function(d){return "避開牛隻並且移除 1"},
"collect":function(d){return "收集"},
"collectiblePresent":function(d){return "仍有一些珍寶未獲取"},
"collectorCollectTooltip":function(d){return "收集一個物品"},
"collectorCollectedEverything":function(d){return "恭喜！你已收集 "+maze_locale.p(d,"count",0,"zh",{"one":"這個物品","other":maze_locale.n(d,"count")+" 個物品"})+"！"},
"collectorCollectedNothing":function(d){return "繼續編程！盡可能收集多一些物品。"},
"collectorCollectedSome":function(d){return "做得好！你已收集了 "+maze_locale.p(d,"count",0,"zh",{"one":"1 個物品","other":maze_locale.n(d,"count")+" 個物品"})+"！"},
"collectorCollectedNotEnough":function(d){return "請繼續編碼！您至少要收集 "+maze_locale.p(d,"goal",0,"zh",{"one":"1 個物品","other":maze_locale.n(d,"goal")+" 個物品"})+"。"},
"collectorCollectedTooMany":function(d){return "那兒沒有足夠的物品讓我收集。"},
"collectorTooManyBlocks":function(d){return "你只可以使用 "+maze_locale.v(d,"blockLimit")+" 個積木，檢查你的程式，再試試！"},
"continue":function(d){return "繼續"},
"corn":function(d){return "玉米"},
"cornTooltip":function(d){return "收成一些玉米"},
"didNotCollectAllCrops":function(d){return "確定你沒遺漏任何農作物！"},
"didNotCollectEverything":function(d){return "確定你沒遺漏任何花蜜或蜂蜜！"},
"didNotPlantEverywhere":function(d){return "確定你在每塊耕地上都種了些東西！"},
"dig":function(d){return "移除 1"},
"digTooltip":function(d){return "移除 1 單位的泥土"},
"dirE":function(d){return "東"},
"dirN":function(d){return "北"},
"dirS":function(d){return "南"},
"dirW":function(d){return "西"},
"doCode":function(d){return "執行"},
"elseCode":function(d){return "否則"},
"emptyCropError":function(d){return "農作物都消失了。"},
"fill":function(d){return "填充 1"},
"fillN":function(d){return "填入 "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "填入方塊"},
"fillStack":function(d){return "填充深度是 "+maze_locale.v(d,"shovelfuls")+" 的坑洞"},
"fillTooltip":function(d){return "放置 1 單位泥土"},
"finalLevel":function(d){return "恭喜！你已經完成最後的關卡。"},
"flowerEmptyError":function(d){return "你所在的花朵已經沒有花蜜了。"},
"get":function(d){return "採集"},
"goal":function(d){return "目標"},
"has":function(d){return "有"},
"haslettuce":function(d){return "那兒有生菜"},
"hascorn":function(d){return "那兒有玉米"},
"haspumpkin":function(d){return "那兒有南瓜"},
"heightParameter":function(d){return "高度"},
"holePresent":function(d){return "那裡有個坑洞"},
"honey":function(d){return "製造蜂蜜"},
"honeyAvailable":function(d){return "蜂蜜"},
"honeyTooltip":function(d){return "將花蜜釀成蜂蜜"},
"honeycombFullError":function(d){return "這個蜂窩裝不下更多蜂蜜了。"},
"ifCode":function(d){return "如果"},
"ifFlowerTooltip":function(d){return "如果指定的方向有花朵或蜂窩，就執行一些操作。"},
"ifInRepeatError":function(d){return "你需要將\"如果\"程式積木放在\"重覆\"程式積木中。如果遇到困難，試著回到前一個階段看看它是如何運作的。"},
"ifOnlyFlowerTooltip":function(d){return "如果在指定的方向有朵花，就執行一些操作。"},
"ifPathAhead":function(d){return "如果前面有路"},
"ifTooltip":function(d){return "如果在指定的方向有路的話，就執行某些行動。"},
"ifelseFlowerTooltip":function(d){return "如果在指定的方向有花朵/蜂窩的話，就執行第一個區塊的指令，否則就執行第二個區塊的指令。"},
"ifelseTooltip":function(d){return "如果在指定的方向有路的話，就執行第一個區塊的指令，否則就執行第二個區塊的指令。"},
"insufficientHoney":function(d){return "你需要收集足夠的蜂蜜。"},
"insufficientNectar":function(d){return "你需要收集足夠的花蜜。"},
"lettuce":function(d){return "生菜"},
"lettuceTooltip":function(d){return "收成一些生菜"},
"make":function(d){return "釀造"},
"moveBackward":function(d){return "移動-向後"},
"moveEastTooltip":function(d){return "讓我向東移動一格。"},
"moveForward":function(d){return "移動-向前"},
"moveForwardTooltip":function(d){return "讓我向前移動一格。"},
"moveNorthTooltip":function(d){return "讓我向北移動一格。"},
"moveSouthTooltip":function(d){return "讓我向南移動一格。"},
"moveTooltip":function(d){return "讓我向前/向後移動一格。"},
"moveWestTooltip":function(d){return "讓我向西移動一格。"},
"nectar":function(d){return "採集花蜜"},
"nectarRemaining":function(d){return "花蜜"},
"nectarTooltip":function(d){return "在花朵中取得花蜜"},
"nextLevel":function(d){return "恭喜！你已經完成這個關卡。"},
"no":function(d){return "否"},
"noPathAhead":function(d){return "路被堵住了"},
"noPathLeft":function(d){return "左邊沒有路"},
"noPathRight":function(d){return "右邊沒有路"},
"notAtFlowerError":function(d){return "你只可以在花朵上採集花蜜。"},
"notAtHoneycombError":function(d){return "您只可以在蜂窩裡製作蜂蜜。"},
"numBlocksNeeded":function(d){return "這個關卡可以只用 %1 個程式積木來完成。"},
"pathAhead":function(d){return "前面有路"},
"pathLeft":function(d){return "如果左邊有路"},
"pathRight":function(d){return "如果右邊有路"},
"pick":function(d){return "摘取"},
"pilePresent":function(d){return "那裡有個土堆"},
"plant":function(d){return "種植"},
"plantInNonSoilError":function(d){return "我只能在乾淨的耕地上種東西。"},
"plantTooltip":function(d){return "種植一個芽苗"},
"pumpkin":function(d){return "南瓜"},
"pumpkinTooltip":function(d){return "收成一個南瓜"},
"putdownTower":function(d){return "放下土丘"},
"removeAndAvoidTheCow":function(d){return "移除 1 並避開牛"},
"removeN":function(d){return "移除 "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "移除土推"},
"removeSquare":function(d){return "移除方塊"},
"removeStack":function(d){return "移除由 "+maze_locale.v(d,"shovelfuls")+" 鏟土堆成的小土堆"},
"repeatCarefullyError":function(d){return "要解決這個問題的話，就把 2 個移動和 1 個轉向放到「循環」積木裡。可以在最後面額外添加轉向積木。"},
"repeatUntil":function(d){return "循環直到"},
"repeatUntilBlocked":function(d){return "當前面有路時"},
"repeatUntilFinish":function(d){return "循環直到完成"},
"soil":function(d){return "耕地"},
"sprout":function(d){return "芽苗"},
"step":function(d){return "步進"},
"totalHoney":function(d){return "蜂蜜總數"},
"totalNectar":function(d){return "花蜜總數"},
"turnLeft":function(d){return "轉向-左方"},
"turnRight":function(d){return "轉向-右方"},
"turnTooltip":function(d){return "讓角色向左或向右轉 90 度。"},
"uncheckedCloudError":function(d){return "請務必檢查所有的雲，看看裡頭是不是有花朵或蜂窩。"},
"uncheckedPurpleError":function(d){return "請務必檢查所有紫色的花，看看裡頭是否有花蜜。"},
"whileMsg":function(d){return "當"},
"whileTooltip":function(d){return "重複執行區塊內的指令，直到達到過關的分數為止。"},
"word":function(d){return "尋找那個字詞"},
"wrongCropError":function(d){return "我無法在這兒收成那個農作物。"},
"yes":function(d){return "是"},
"youSpelled":function(d){return "你拼寫成"}};