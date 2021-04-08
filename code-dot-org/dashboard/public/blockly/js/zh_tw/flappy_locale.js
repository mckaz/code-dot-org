var flappy_locale = {lc:{"ar":function(n){
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
v:function(d,k){flappy_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){flappy_locale.c(d,k);return d[k] in p?p[d[k]]:(k=flappy_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){flappy_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).flappy_locale = {
"continue":function(d){return "繼續"},
"doCode":function(d){return "執行"},
"elseCode":function(d){return "否則"},
"endGame":function(d){return "結束遊戲"},
"endGameTooltip":function(d){return "結束這個遊戲。"},
"finalLevel":function(d){return "恭喜你！你已經完成了最後的關卡。"},
"flap":function(d){return "拍打翅膀"},
"flapRandom":function(d){return "翅膀拍速設為隨機"},
"flapVerySmall":function(d){return "翅膀拍速設為極慢"},
"flapSmall":function(d){return "翅膀拍速設為很慢"},
"flapNormal":function(d){return "翅膀拍速設為普通"},
"flapLarge":function(d){return "翅膀拍速設為很快"},
"flapVeryLarge":function(d){return "翅膀拍速設為極快"},
"flapTooltip":function(d){return "讓像素鳥向上飛。"},
"flappySpecificFail":function(d){return "您的程式看起來不錯 - 每點一下，牠就會拍打翅膀一下。但你需要點很多次牠才能飛到目的地。"},
"incrementPlayerScore":function(d){return "得一分"},
"incrementPlayerScoreTooltip":function(d){return "替玩家加一分"},
"nextLevel":function(d){return "恭喜！你已經完成這個關卡。"},
"no":function(d){return "否"},
"numBlocksNeeded":function(d){return "這個關卡可以使用 %1 個程式積木來完成。"},
"playSoundRandom":function(d){return "播放隨機的音效"},
"playSoundBounce":function(d){return "播放彈跳音效"},
"playSoundCrunch":function(d){return "播放收緊的音效"},
"playSoundDie":function(d){return "播放悲傷音效"},
"playSoundHit":function(d){return "播放粉碎音效"},
"playSoundPoint":function(d){return "播放得分音效"},
"playSoundSwoosh":function(d){return "播放旋風音效"},
"playSoundWing":function(d){return "播放拍打翅膀音效"},
"playSoundJet":function(d){return "播放噴射音效"},
"playSoundCrash":function(d){return "播放碰撞音效"},
"playSoundJingle":function(d){return "播放鈴噹音效"},
"playSoundSplash":function(d){return "播放飛濺音效"},
"playSoundLaser":function(d){return "播放鐳射音效"},
"playSoundTooltip":function(d){return "播放所選音效"},
"reinfFeedbackMsg":function(d){return "你可以點擊「再試一次」按鈕以返回遊戲畫面。"},
"scoreText":function(d){return "得分 - "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "場景設置"},
"setBackgroundRandom":function(d){return "場景設為隨機"},
"setBackgroundFlappy":function(d){return "場景設為城市白天"},
"setBackgroundNight":function(d){return "場景設為城市晚上"},
"setBackgroundSciFi":function(d){return "場景設為科幻"},
"setBackgroundUnderwater":function(d){return "場景設為水底"},
"setBackgroundCave":function(d){return "場景設為洞穴"},
"setBackgroundSanta":function(d){return "場景設為聖誕"},
"setBackgroundTooltip":function(d){return "設置背景圖像"},
"setGapRandom":function(d){return "間隙設為隨機"},
"setGapVerySmall":function(d){return "間隙設為超小"},
"setGapSmall":function(d){return "間隙設為較小"},
"setGapNormal":function(d){return "間隙設為正常"},
"setGapLarge":function(d){return "間隙設為較大"},
"setGapVeryLarge":function(d){return "間隙設為超大"},
"setGapHeightTooltip":function(d){return "設定障礙物的垂直間距"},
"setGravityRandom":function(d){return "重力值設為隨機"},
"setGravityVeryLow":function(d){return "重力值設為較極低"},
"setGravityLow":function(d){return "重力值設為較低"},
"setGravityNormal":function(d){return "重力值設為正常"},
"setGravityHigh":function(d){return "重力值設為較高"},
"setGravityVeryHigh":function(d){return "重力值設為極高"},
"setGravityTooltip":function(d){return "設定關卡重力值"},
"setGround":function(d){return "地面設置"},
"setGroundRandom":function(d){return "地面設為隨機"},
"setGroundFlappy":function(d){return "地面設為地板"},
"setGroundSciFi":function(d){return "地面設為科幻"},
"setGroundUnderwater":function(d){return "地面設為水底"},
"setGroundCave":function(d){return "地面設為洞穴"},
"setGroundSanta":function(d){return "地面設為聖誕"},
"setGroundLava":function(d){return "地面設為熔岩"},
"setGroundTooltip":function(d){return "設置地面圖像"},
"setObstacle":function(d){return "障礙物設置"},
"setObstacleRandom":function(d){return "障礙物設為隨機"},
"setObstacleFlappy":function(d){return "障礙物設為水管"},
"setObstacleSciFi":function(d){return "障礙物設為科幻"},
"setObstacleUnderwater":function(d){return "障礙物設為植物"},
"setObstacleCave":function(d){return "障礙物設為洞穴"},
"setObstacleSanta":function(d){return "障礙物設為煙囪"},
"setObstacleLaser":function(d){return "障礙物設為雷射"},
"setObstacleTooltip":function(d){return "設置障礙物的圖像"},
"setPlayer":function(d){return "玩家設置"},
"setPlayerRandom":function(d){return "玩家設為隨機"},
"setPlayerFlappy":function(d){return "玩家設為黃色小鳥"},
"setPlayerRedBird":function(d){return "玩家設為紅色小鳥"},
"setPlayerSciFi":function(d){return "玩家設為飛船"},
"setPlayerUnderwater":function(d){return "玩家設為魚"},
"setPlayerCave":function(d){return "玩家設為蝙蝠"},
"setPlayerSanta":function(d){return "玩家設為聖誕老人"},
"setPlayerShark":function(d){return "玩家設為鯊魚"},
"setPlayerEaster":function(d){return "玩家設為復活節兔子"},
"setPlayerBatman":function(d){return "玩家設為蝙蝠俠"},
"setPlayerSubmarine":function(d){return "玩家設為潛水艇"},
"setPlayerUnicorn":function(d){return "玩家設為獨角獸"},
"setPlayerFairy":function(d){return "玩家設為小精靈"},
"setPlayerSuperman":function(d){return "玩家設為飛人"},
"setPlayerTurkey":function(d){return "玩家設為火雞"},
"setPlayerTooltip":function(d){return "設置玩家圖像"},
"setScore":function(d){return "設置得分"},
"setScoreTooltip":function(d){return "設置玩家的得分"},
"setSpeed":function(d){return "速度設置"},
"setSpeedTooltip":function(d){return "設置關卡的速度"},
"shareFlappyTwitter":function(d){return "來玩玩我在 @codeorg　自己完成的像素鳥遊戲吧。"},
"shareFlappyTwitterDonor":function(d){return "Check out the Flappy game I made. (Thanks "+flappy_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "分享您的遊戲："},
"soundRandom":function(d){return "隨機"},
"soundBounce":function(d){return "反彈"},
"soundCrunch":function(d){return "緊縮"},
"soundDie":function(d){return "傷心"},
"soundHit":function(d){return "粉碎"},
"soundPoint":function(d){return "分數"},
"soundSwoosh":function(d){return "旋風"},
"soundWing":function(d){return "翅膀"},
"soundJet":function(d){return "噴射"},
"soundCrash":function(d){return "倒塌"},
"soundJingle":function(d){return "鈴聲"},
"soundSplash":function(d){return "濺射"},
"soundLaser":function(d){return "鐳射"},
"speedRandom":function(d){return "速度設為隨機"},
"speedVerySlow":function(d){return "速度設為很慢"},
"speedSlow":function(d){return "速度設為較慢"},
"speedNormal":function(d){return "速度設為普通"},
"speedFast":function(d){return "速度設為較快"},
"speedVeryFast":function(d){return "速度設為很快"},
"whenClick":function(d){return "當點擊時"},
"whenClickTooltip":function(d){return "當一個點擊的事件發生時，就執行以下操作。"},
"whenCollideGround":function(d){return "當撞到地面時"},
"whenCollideGroundTooltip":function(d){return "當像素鳥撞到地面時，執行以下操作。"},
"whenCollideObstacle":function(d){return "當撞到一個障礙物時"},
"whenCollideObstacleTooltip":function(d){return "當像素鳥撞到一個障礙時，執行以下操作。"},
"whenEnterObstacle":function(d){return "當通過障礙物時"},
"whenEnterObstacleTooltip":function(d){return "當像素鳥進入障礙物時，執行以下操作。"},
"whenRunButtonClick":function(d){return "當遊戲開始時"},
"whenRunButtonClickTooltip":function(d){return "當遊戲開始時，執行以下動作。"},
"yes":function(d){return "確定"}};