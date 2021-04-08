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
"atFlower":function(d){return "在花里"},
"atHoneycomb":function(d){return "在蜂窝"},
"avoidCowAndRemove":function(d){return "躲开牛并移除1"},
"collect":function(d){return "收集"},
"collectiblePresent":function(d){return "还有一些宝藏"},
"collectorCollectTooltip":function(d){return "收集物品"},
"collectorCollectedEverything":function(d){return "恭喜！你收集到了所有的 "+maze_locale.v(d,"count")+" 个项目！"},
"collectorCollectedNothing":function(d){return "坚持编下去！你需要尽可能多地收集物品。"},
"collectorCollectedSome":function(d){return "真棒！你收集到了 "+maze_locale.v(d,"count")+" 个物品！"},
"collectorCollectedNotEnough":function(d){return "坚持编下去！你需要收集至少 "+maze_locale.p(d,"goal",0,"zh",{"one":"1 个物品","other":maze_locale.n(d,"goal")+" 个物品"})+"."},
"collectorCollectedTooMany":function(d){return "那个空间没有足够的物品来收集。"},
"collectorTooManyBlocks":function(d){return "你只能够使用 "+maze_locale.v(d,"blockLimit")+" 个模块。检查一下你的代码然后再试一试！"},
"continue":function(d){return "继续"},
"corn":function(d){return "玉米"},
"cornTooltip":function(d){return "收获一些玉米"},
"didNotCollectAllCrops":function(d){return "请确保你没有留下任何的庄稼 ！"},
"didNotCollectEverything":function(d){return "请确保您没有遗漏任何花蜜或者蜂蜜！"},
"didNotPlantEverywhere":function(d){return "请确保你在每个土壤里都种植了东西 ！"},
"dig":function(d){return "移走一堆"},
"digTooltip":function(d){return "移走一堆土"},
"dirE":function(d){return "东"},
"dirN":function(d){return "北"},
"dirS":function(d){return "南"},
"dirW":function(d){return "西"},
"doCode":function(d){return "执行"},
"elseCode":function(d){return "否则"},
"emptyCropError":function(d){return "庄稼都不见了。"},
"fill":function(d){return "填充1"},
"fillN":function(d){return "填充"+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "填充正方形"},
"fillStack":function(d){return "填满 "+maze_locale.v(d,"shovelfuls")+" 个坑\n"},
"fillTooltip":function(d){return "填充1单位的土"},
"finalLevel":function(d){return "恭喜你！你完成了最后一个谜题。"},
"flowerEmptyError":function(d){return "你呆的这朵花里没有更多的花蜜。"},
"get":function(d){return "获得"},
"goal":function(d){return "目标"},
"has":function(d){return "有"},
"haslettuce":function(d){return "这是莴苣"},
"hascorn":function(d){return "那里有玉米"},
"haspumpkin":function(d){return "那里有南瓜"},
"heightParameter":function(d){return "高度"},
"holePresent":function(d){return "地上有一个坑"},
"honey":function(d){return "做蜂蜜"},
"honeyAvailable":function(d){return "蜂蜜"},
"honeyTooltip":function(d){return "用花粉酿蜂蜜"},
"honeycombFullError":function(d){return "这蜂窝没有房间放置更多的蜂蜜。"},
"ifCode":function(d){return "如果"},
"ifFlowerTooltip":function(d){return "如果在指定的方向有花或蜂巢，执行一些操作。"},
"ifInRepeatError":function(d){return "你需要放一个”如果“块在”重复“块里。如果你忘记了怎么做，重新试试上一题，看看你是怎么做的。"},
"ifOnlyFlowerTooltip":function(d){return "如果在指定的方向有一朵花，然后执行一些操作。"},
"ifPathAhead":function(d){return "如果前面有路"},
"ifTooltip":function(d){return "如果在指定的方向有路，执行一些操作。"},
"ifelseFlowerTooltip":function(d){return "如果在指定的方向有花或蜂巢，执行第一部分的操作。否则，执行第二部分的操作。"},
"ifelseTooltip":function(d){return "如果在指定的方向有路，执行第一部分的操作。否则，执行第二部分的操作。"},
"insufficientHoney":function(d){return "你正确地使用了所有的块，但是你需要得到正确数量的蜂蜜。"},
"insufficientNectar":function(d){return "你正确地使用了所有的块，但是你需要收集正确数量的花蜜。"},
"lettuce":function(d){return "莴苣"},
"lettuceTooltip":function(d){return "收获一些莴苣"},
"make":function(d){return "制作"},
"moveBackward":function(d){return "向后移动"},
"moveEastTooltip":function(d){return "把我向东移一步。"},
"moveForward":function(d){return "向前移动"},
"moveForwardTooltip":function(d){return "把我向前移动一格。"},
"moveNorthTooltip":function(d){return "把我向北移一步。"},
"moveSouthTooltip":function(d){return "把我向南移一步。"},
"moveTooltip":function(d){return "把我向前或向后一步"},
"moveWestTooltip":function(d){return "把我向西移一步。"},
"nectar":function(d){return "采花蜜"},
"nectarRemaining":function(d){return "花蜜"},
"nectarTooltip":function(d){return "从一朵花中采花蜜"},
"nextLevel":function(d){return "恭喜你！你解决了这个谜题。"},
"no":function(d){return "不"},
"noPathAhead":function(d){return "路被堵上了"},
"noPathLeft":function(d){return "左边没有路"},
"noPathRight":function(d){return "右边没有路"},
"notAtFlowerError":function(d){return "你只可以从一朵花里采花蜜。"},
"notAtHoneycombError":function(d){return "你只可以在蜂窝里制作蜂蜜。"},
"numBlocksNeeded":function(d){return "这个谜题可以用%1个语句块解决。"},
"pathAhead":function(d){return "前面有路"},
"pathLeft":function(d){return "如果左边有路"},
"pathRight":function(d){return "如果右边有路"},
"pick":function(d){return "摘"},
"pilePresent":function(d){return "有一堆土"},
"plant":function(d){return "种植"},
"plantInNonSoilError":function(d){return "我只能在新鲜的土壤中种植。"},
"plantTooltip":function(d){return "种植一个苗芽"},
"pumpkin":function(d){return "南瓜"},
"pumpkinTooltip":function(d){return "收获一个南瓜"},
"putdownTower":function(d){return "放下塔"},
"removeAndAvoidTheCow":function(d){return "移走一堆土并躲开牛"},
"removeN":function(d){return "移除"+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "移除土堆"},
"removeSquare":function(d){return "移除正方形"},
"removeStack":function(d){return "移除"+maze_locale.v(d,"shovelfuls")+"铲子的土"},
"repeatCarefullyError":function(d){return "为了解决这个问题，仔细想一想将两次移动和一个转身放进“重复”块的这种模式。最后再有一个额外的转身就可以了。"},
"repeatUntil":function(d){return "重复直到"},
"repeatUntilBlocked":function(d){return "当前面有路"},
"repeatUntilFinish":function(d){return "重复直到完成"},
"soil":function(d){return "土壤"},
"sprout":function(d){return "苗芽"},
"step":function(d){return "步进"},
"totalHoney":function(d){return "蜂蜜总量"},
"totalNectar":function(d){return "花蜜总量"},
"turnLeft":function(d){return "向左转"},
"turnRight":function(d){return "向右转"},
"turnTooltip":function(d){return "把我向左或者向右转90度。"},
"uncheckedCloudError":function(d){return "确认检查所有的云，看看他们是否是花或者是蜂巢"},
"uncheckedPurpleError":function(d){return "确认检查所有紫色的花，看看是否有花蜜"},
"whileMsg":function(d){return "当"},
"whileTooltip":function(d){return "重复所包含的操作直到完成。"},
"word":function(d){return "找到一个单词"},
"wrongCropError":function(d){return "我不能从这里的收获庄稼 。"},
"yes":function(d){return "是"},
"youSpelled":function(d){return "你拼写的"}};