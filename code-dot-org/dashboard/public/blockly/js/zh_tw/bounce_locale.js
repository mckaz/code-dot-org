var bounce_locale = {lc:{"ar":function(n){
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
v:function(d,k){bounce_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){bounce_locale.c(d,k);return d[k] in p?p[d[k]]:(k=bounce_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){bounce_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).bounce_locale = {
"basketballLaunchBall":function(d){return "扔出新球"},
"basketballLaunchBallTooltip":function(d){return "扔顆球到場中。"},
"basketballSetPaddle":function(d){return "設定手"},
"basketballSetPaddleSpeedFast":function(d){return "手的移速設為快"},
"basketballSetPaddleSpeedNormal":function(d){return "手的移速設為一般"},
"basketballSetPaddleSpeedRandom":function(d){return "手的移速設為隨機"},
"basketballSetPaddleSpeedSlow":function(d){return "手的移速設為慢"},
"basketballSetPaddleSpeedTooltip":function(d){return "設定手的移動速度"},
"basketballSetPaddleSpeedVeryFast":function(d){return "手的移速設為很快"},
"basketballSetPaddleSpeedVerySlow":function(d){return "手的移速設為很慢"},
"basketballWhenBallMissesPaddle":function(d){return "當球沒有碰到手時"},
"basketballWhenPaddleCollided":function(d){return "當球碰到手時"},
"bounceBall":function(d){return "彈跳球"},
"bounceBallTooltip":function(d){return "讓球擊中某一物體而反彈。"},
"continue":function(d){return "繼續"},
"dirE":function(d){return "東"},
"dirN":function(d){return "北"},
"dirS":function(d){return "南"},
"dirW":function(d){return "西"},
"doCode":function(d){return "執行"},
"elseCode":function(d){return "否則"},
"finalLevel":function(d){return "恭喜！你已經完成最後的關卡。"},
"heightParameter":function(d){return "高度"},
"ifCode":function(d){return "如果"},
"ifPathAhead":function(d){return "如果前面有路"},
"ifTooltip":function(d){return "如果在指定的方向有路的話，就執行一些操作。"},
"ifelseTooltip":function(d){return "如果在指定的方向有路的話，就執行第一部分的操作，否則執行第二個部分的操作。"},
"incrementOpponentScore":function(d){return "得分 - 對手"},
"incrementOpponentScoreTooltip":function(d){return "對手的分數加一分。"},
"incrementPlayerScore":function(d){return "得分 - 自己"},
"incrementPlayerScoreTooltip":function(d){return "自己的分數加一分。"},
"isWall":function(d){return "是一堵牆嗎"},
"isWallTooltip":function(d){return "如果這裡有一堵牆，回傳 true"},
"launchBall":function(d){return "重新發球"},
"launchBallTooltip":function(d){return "放一顆球進入場中。"},
"makeYourOwn":function(d){return "設計你自己的彈跳球遊戲"},
"moveDown":function(d){return "移動-向下"},
"moveDownTooltip":function(d){return "讓球拍向下移動。"},
"moveForward":function(d){return "移動-向前"},
"moveForwardTooltip":function(d){return "將角色向前移動一格。"},
"moveLeft":function(d){return "移動-向左"},
"moveLeftTooltip":function(d){return "讓球拍向左移動。"},
"moveRight":function(d){return "移動-向右"},
"moveRightTooltip":function(d){return "讓球拍向右移動。"},
"moveUp":function(d){return "移動-向上"},
"moveUpTooltip":function(d){return "讓球拍向上移動。"},
"nextLevel":function(d){return "恭喜！你已經完成這個關卡。"},
"no":function(d){return "否"},
"noPathAhead":function(d){return "路被堵住了"},
"noPathLeft":function(d){return "左邊沒有路"},
"noPathRight":function(d){return "右邊沒有路"},
"numBlocksNeeded":function(d){return "這個關卡可以用 %1 個積木完成。"},
"pathAhead":function(d){return "前面有路"},
"pathLeft":function(d){return "如果左邊有路"},
"pathRight":function(d){return "如果右邊有路"},
"pilePresent":function(d){return "有一堆土"},
"playSoundBounce":function(d){return "播放彈跳音效"},
"playSoundCheer":function(d){return "播放歡呼音效"},
"playSoundCrunch":function(d){return "播放嘎吱音效"},
"playSoundGoal1":function(d){return "播放達到目標音效 1"},
"playSoundGoal2":function(d){return "播放達到目標音效 2"},
"playSoundHit":function(d){return "播放命中音效"},
"playSoundKick":function(d){return "播放踢人音效"},
"playSoundLosePoint":function(d){return "播放失分音效"},
"playSoundLosePoint2":function(d){return "播放失分音效2"},
"playSoundRetro":function(d){return "播放復古音效"},
"playSoundRubber":function(d){return "播放橡膠音效"},
"playSoundSlap":function(d){return "播放鼓掌音效"},
"playSoundSlapshot":function(d){return "播放 slapshot 音效"},
"playSoundSwish":function(d){return "播放進籃音效"},
"playSoundTooltip":function(d){return "播放選擇的音效。"},
"playSoundWhistle":function(d){return "播放吹哨音效"},
"playSoundWinPoint":function(d){return "播放得分音效"},
"playSoundWinPoint2":function(d){return "播放得分音效2"},
"playSoundWood":function(d){return "播放木頭音效"},
"putdownTower":function(d){return "將小土丘放下"},
"reinfFeedbackMsg":function(d){return "您可以點擊「再試一次」按鈕以重新遊戲。"},
"removeSquare":function(d){return "移除正方型內的土堆"},
"repeatUntil":function(d){return "循環直到"},
"repeatUntilBlocked":function(d){return "當前面有路時"},
"repeatUntilFinish":function(d){return "循環直到完成"},
"scoreText":function(d){return "分數 "+bounce_locale.v(d,"playerScore")+"："+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "場景設為"+bounce_locale.v(d,"background")},
"setBackgroundHardcourt":function(d){return "場景設為硬地球場"},
"setBackgroundRandom":function(d){return "場景設為隨機"},
"setBackgroundRetro":function(d){return "場景設為復古"},
"setBackgroundTooltip":function(d){return "設置背景圖片"},
"setBallHardcourt":function(d){return "球設為硬式網球"},
"setBallRandom":function(d){return "球設為隨機"},
"setBallRetro":function(d){return "球設為復古"},
"setBall":function(d){return "球設為"+bounce_locale.v(d,"ball")},
"setBallSpeedFast":function(d){return "球的移速設為快"},
"setBallSpeedNormal":function(d){return "球的移速設普通"},
"setBallSpeedRandom":function(d){return "球的移速設為隨機"},
"setBallSpeedSlow":function(d){return "球的移速設為慢"},
"setBallSpeedTooltip":function(d){return "設定球的移動速度"},
"setBallSpeedVeryFast":function(d){return "球的移速設為很快"},
"setBallSpeedVerySlow":function(d){return "球的移速設為很慢"},
"setBallTooltip":function(d){return "設定球的外觀"},
"setPaddle":function(d){return "球拍設置"},
"setPaddleHardcourt":function(d){return "球拍設為硬式網球拍"},
"setPaddleRandom":function(d){return "球拍設為隨機"},
"setPaddleRetro":function(d){return "球拍設為復古"},
"setPaddleSpeedFast":function(d){return "球拍的移速設為快"},
"setPaddleSpeedNormal":function(d){return "球拍的移速設為普通"},
"setPaddleSpeedRandom":function(d){return "球拍的移速設為隨機"},
"setPaddleSpeedSlow":function(d){return "球拍的移速設為慢"},
"setPaddleSpeedTooltip":function(d){return "設定球拍的移動速度"},
"setPaddleSpeedVeryFast":function(d){return "球拍的移速設為很快"},
"setPaddleSpeedVerySlow":function(d){return "球拍的移速設為很慢"},
"setPaddleTooltip":function(d){return "設定球拍的外觀"},
"setPlayer":function(d){return "設定球員"},
"setPlayerSpeedFast":function(d){return "球員的移速設為快"},
"setPlayerSpeedNormal":function(d){return "球員的移速設為普通"},
"setPlayerSpeedRandom":function(d){return "球員的移速設為隨機"},
"setPlayerSpeedSlow":function(d){return "球員的移速設為慢"},
"setPlayerSpeedTooltip":function(d){return "設定球員的移動速度"},
"setPlayerSpeedVeryFast":function(d){return "球員的移速設為很快"},
"setPlayerSpeedVerySlow":function(d){return "球員的移速設為很慢"},
"setTeamTooltip":function(d){return "設定圖標與顏色方案"},
"setTeam":function(d){return "球隊設為"+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "球隊設為隨機"},
"shareBounceTwitter":function(d){return "我在 @codeorg 製作了一個彈跳球遊戲，有空來玩。"},
"shareBounceTwitterDonor":function(d){return "看看我做的彈跳遊戲。(感謝 "+bounce_locale.v(d,"donor")+" 支援 @codeorg)"},
"shareGame":function(d){return "分享你的遊戲："},
"turnLeft":function(d){return "轉向-左方"},
"turnRight":function(d){return "轉向-右方"},
"turnTooltip":function(d){return "讓角色向左或向右轉 90 度。"},
"whenBallInGoal":function(d){return "當球命中目標時"},
"whenBallInGoalTooltip":function(d){return "當球進入目標區時，執行下面的操作。"},
"whenBallMissesPaddle":function(d){return "當球沒有碰到球拍時"},
"whenBallMissesPaddleTooltip":function(d){return "當球拍沒有碰到球時，執行下面的操作。"},
"whenBallMissesPlayer":function(d){return "當球沒有碰到球員時"},
"whenDown":function(d){return "當按向下鍵時"},
"whenDownTooltip":function(d){return "當按下鍵盤的方向鍵-下，就會執行以下操作。"},
"whenGameStarts":function(d){return "當遊戲開始時"},
"whenGameStartsTooltip":function(d){return "當遊戲開始時，執行下面的操作。"},
"whenLeft":function(d){return "當按向左鍵時"},
"whenLeftTooltip":function(d){return "當按下鍵盤的方向鍵-左，就會執行以下操作。"},
"whenPaddleCollided":function(d){return "當球拍碰到球時"},
"whenPaddleCollidedTooltip":function(d){return "當球拍碰到球時，執行下面的操作。"},
"whenPlayerCollided":function(d){return "當球碰到球員時"},
"whenPlayerCollidedTooltip":function(d){return "當球碰到球員時，要執行下方的操作。"},
"whenRight":function(d){return "當按向右鍵時"},
"whenRightTooltip":function(d){return "當按下鍵盤的方向鍵-右，就會執行以下操作。"},
"whenUp":function(d){return "當按向上鍵時"},
"whenUpTooltip":function(d){return "當按下鍵盤的方向鍵-上，就會執行以下操作。"},
"whenWallCollided":function(d){return "當球碰到牆時"},
"whenWallCollidedTooltip":function(d){return "當球碰到牆時，執行下面的操作。"},
"whileMsg":function(d){return "當"},
"whileTooltip":function(d){return "重複執行區塊內包含的操作，直到完成為止。"},
"yes":function(d){return "是"}};