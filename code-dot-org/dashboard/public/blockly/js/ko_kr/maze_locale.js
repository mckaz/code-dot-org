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
"at":function(d){return "다음 장소에서 : "},
"atFlower":function(d){return "꽃에서"},
"atHoneycomb":function(d){return "벌집에서"},
"avoidCowAndRemove":function(d){return "젖소 피해 치우기 1번"},
"collect":function(d){return "모으세요."},
"collectiblePresent":function(d){return "저기에 보물이 있습니다."},
"collectorCollectTooltip":function(d){return "아이템을 수집하세요."},
"collectorCollectedEverything":function(d){return "축하합니다! 아이템 "+maze_locale.v(d,"count")+" 개를 아이템을 모두 모았습니다!"},
"collectorCollectedNothing":function(d){return "계속 코딩하세요! 가능한 한 많은 아이템을 모아야 합니다."},
"collectorCollectedSome":function(d){return "아주 잘했어요! "+maze_locale.p(d,"count",0,"ko",{"one":"1 item","other":maze_locale.n(d,"count")+" items"})+" 개의 아이템을 모았습니다!"},
"collectorCollectedNotEnough":function(d){return "계속 코딩하세요! 적어도 "+maze_locale.p(d,"goal",0,"ko",{"one":"1 item","other":maze_locale.n(d,"goal")+" items"})+" 개 이상의 아이템을 모아야 합니다."},
"collectorCollectedTooMany":function(d){return "저 땅에는 수집할 아이템들이 별로 없네요."},
"collectorTooManyBlocks":function(d){return "오직 "+maze_locale.v(d,"blockLimit")+" 블록들만 사용할 수 있습니다. 여러분이 짠 코드를 잘 살펴본 후 다시 시도해보세요!"},
"continue":function(d){return "계속하기"},
"corn":function(d){return "옥수수"},
"cornTooltip":function(d){return "옥수수 수확하기"},
"didNotCollectAllCrops":function(d){return "작물들을 모두 수확하세요!"},
"didNotCollectEverything":function(d){return "꽃꿀이나 꿀이 남아 있지 않은지 확실히 확인해주세요!"},
"didNotPlantEverywhere":function(d){return "각 구역의 모든 흙에 심으세요!"},
"dig":function(d){return "치우기1번"},
"digTooltip":function(d){return "치우기1번"},
"dirE":function(d){return "오른쪽"},
"dirN":function(d){return "위쪽"},
"dirS":function(d){return "아래쪽"},
"dirW":function(d){return "왼쪽"},
"doCode":function(d){return "실행"},
"elseCode":function(d){return "아니면"},
"emptyCropError":function(d){return "작물들이 모두 너무 익었습니다."},
"fill":function(d){return "메우기 1번"},
"fillN":function(d){return "메우기 "+maze_locale.v(d,"shovelfuls")+" 번"},
"fillSquare":function(d){return "사각형 메우기"},
"fillStack":function(d){return "메우기 "+maze_locale.v(d,"shovelfuls")+" 번 구덩이들 채우기"},
"fillTooltip":function(d){return "메우기 1번"},
"finalLevel":function(d){return "짝짝짝 축하합니다! 마지막 퍼즐을 해결했습니다."},
"flowerEmptyError":function(d){return "이 꽃에는 꽃꿀이 없습니다."},
"get":function(d){return "아이템 가져오기"},
"goal":function(d){return "goal"},
"has":function(d){return "에는"},
"haslettuce":function(d){return "상추가 있습니다"},
"hascorn":function(d){return "옥수수가 있습니다"},
"haspumpkin":function(d){return "호박들이 있습니다."},
"heightParameter":function(d){return "높이"},
"holePresent":function(d){return "구덩이가 있으면"},
"honey":function(d){return "꿀 만들기"},
"honeyAvailable":function(d){return "꿀"},
"honeyTooltip":function(d){return "꽃꿀에서 꿀 만들기"},
"honeycombFullError":function(d){return "이 벌집에는 더이상 꿀을 보관할 수 없습니다."},
"ifCode":function(d){return "만약"},
"ifFlowerTooltip":function(d){return "지정한 방향에 꽃/벌집이 있으면 동작을 수행합니다."},
"ifInRepeatError":function(d){return "\"반복(횟수)\" 블록 안에 \"조건\" 블록을 넣어야 합니다. 어렵다면? 이전 퍼즐을 통해 어떻게 동작하는지 살펴보세요."},
"ifOnlyFlowerTooltip":function(d){return "지정한 방향에 꽃이 있으면 동작을 실행시킵니다."},
"ifPathAhead":function(d){return "만약 앞에 길이 있으면"},
"ifTooltip":function(d){return "만약 지정한 방향에 길이 있으면 동작을 실행합니다."},
"ifelseFlowerTooltip":function(d){return "지정한 방향에 꽃/벌집이 있으면, 첫 번째 구역의 동작을 수행하고 그렇지 않으면 두번째 구역의 동작을 수행합니다."},
"ifelseTooltip":function(d){return "만약 지정한 방향에 길이 있으면 실행 블록의 첫번째 구역의 동작을 실행하고, 그렇지 않으면 두번째 구역의 동작을 실행합니다."},
"insufficientHoney":function(d){return "필요한 꿀의 양을 채워야 합니다."},
"insufficientNectar":function(d){return "필요한 양 만큼의 꽃꿀을 모아야 합니다."},
"lettuce":function(d){return "상추"},
"lettuceTooltip":function(d){return "상추 수확하기"},
"make":function(d){return "만들기"},
"moveBackward":function(d){return "뒤로 이동"},
"moveEastTooltip":function(d){return "오른쪽으로 한 칸 이동합니다."},
"moveForward":function(d){return "앞으로 이동"},
"moveForwardTooltip":function(d){return "한 칸 앞으로 이동합니다."},
"moveNorthTooltip":function(d){return "북쪽으로 한 칸 움직여 주세요."},
"moveSouthTooltip":function(d){return "위쪽으로 한 칸 이동합니다."},
"moveTooltip":function(d){return "앞으로/뒤로 한 칸 이동합니다."},
"moveWestTooltip":function(d){return "왼쪽으로 한 칸 이동합니다."},
"nectar":function(d){return "꽃꿀 얻기"},
"nectarRemaining":function(d){return "꽃꿀의 양"},
"nectarTooltip":function(d){return "꽃에서 꽃꿀을 얻어냅니다."},
"nextLevel":function(d){return "축하합니다! 퍼즐을 해결했습니다."},
"no":function(d){return "아니요"},
"noPathAhead":function(d){return "길이 막혔으면"},
"noPathLeft":function(d){return "왼쪽에 길이 없으면"},
"noPathRight":function(d){return "오른쪽에 길이 없으면"},
"notAtFlowerError":function(d){return "꽃꿀은 꽃에서만 얻어낼 수 있습니다."},
"notAtHoneycombError":function(d){return "꿀은 벌집에서만 만들어 낼 수 있습니다."},
"numBlocksNeeded":function(d){return "%1 개의 블록으로 퍼즐을 해결할 수 있습니다."},
"pathAhead":function(d){return "앞에 길이 있으면"},
"pathLeft":function(d){return "만약 왼쪽에 길이 있으면"},
"pathRight":function(d){return "만약 오른쪽에 길이 있으면"},
"pick":function(d){return "집다"},
"pilePresent":function(d){return "흙더미가 있으면"},
"plant":function(d){return "심다"},
"plantInNonSoilError":function(d){return "깨끗한 흙에만 식물을 심을 수가 있습니다."},
"plantTooltip":function(d){return "새싹 심기"},
"pumpkin":function(d){return "호박"},
"pumpkinTooltip":function(d){return "호박 수확하기"},
"putdownTower":function(d){return "탑 놓기"},
"removeAndAvoidTheCow":function(d){return "치우기 1번하고 젖소 피하기"},
"removeN":function(d){return "치우기 "+maze_locale.v(d,"shovelfuls")+" 번"},
"removePile":function(d){return "치우기 1번"},
"removeSquare":function(d){return "사각형 치우기"},
"removeStack":function(d){return "치우기 "+maze_locale.v(d,"shovelfuls")+" 번"},
"repeatCarefullyError":function(d){return "이 퍼즐을 해결하기 위해서는 \"반복\" 블록 안에 이동하기와 방향바꾸기의 방법을 주의깊게 생각해야합니다. 마지막에 방향을 바꾸는 것은 괜찮습니다."},
"repeatUntil":function(d){return "~할 때까지 반복"},
"repeatUntilBlocked":function(d){return "반복(~인 동안): 앞쪽에 길이 있으면"},
"repeatUntilFinish":function(d){return "반복(끝날 때까지)"},
"soil":function(d){return "흙"},
"sprout":function(d){return "새싹"},
"step":function(d){return "단계"},
"totalHoney":function(d){return "꿀의 양"},
"totalNectar":function(d){return "꽃꿀의 양"},
"turnLeft":function(d){return "왼쪽으로 회전"},
"turnRight":function(d){return "오른쪽으로 회전"},
"turnTooltip":function(d){return "왼쪽이나 오른쪽으로 90 도 돕니다."},
"uncheckedCloudError":function(d){return "꽃이나 벌집들이 있는지 살펴보기 위해서는 먼저 구름들을 확인해야 합니다."},
"uncheckedPurpleError":function(d){return "꽃꿀이 들어있는지 살펴보기 위해서는 모든 분홍 꽃들을 확인해야 합니다."},
"whileMsg":function(d){return "반복(~인 동안):"},
"whileTooltip":function(d){return "어떤 조건이 될 때까지(~할 때까지), 반복적으로 실행합니다."},
"word":function(d){return "단어 찾기"},
"wrongCropError":function(d){return "여기서는 작물들을 수확할 수 없습니다."},
"yes":function(d){return "예"},
"youSpelled":function(d){return "말"}};