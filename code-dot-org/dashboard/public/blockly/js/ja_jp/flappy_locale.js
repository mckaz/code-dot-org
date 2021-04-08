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
"continue":function(d){return "続行"},
"doCode":function(d){return "してください"},
"elseCode":function(d){return "他"},
"endGame":function(d){return "ゲームオーバー"},
"endGameTooltip":function(d){return "ゲームをおわりにします。"},
"finalLevel":function(d){return "おめでとうございます ！最後のパズルを解決しました。"},
"flap":function(d){return "パタパタする"},
"flapRandom":function(d){return "てきとうに パタパタする"},
"flapVerySmall":function(d){return "ほんの少し パタパタする"},
"flapSmall":function(d){return "少し パタパタする"},
"flapNormal":function(d){return "ふつうに パタパタする"},
"flapLarge":function(d){return "たくさん パタパタする"},
"flapVeryLarge":function(d){return "とてもたくさん パタパタする"},
"flapTooltip":function(d){return "フラッピーを 上に とばします。"},
"flappySpecificFail":function(d){return "いいコードですね。クリックするたびにパタパタします。でも、的に当てるには何度もクリックしなければなりません。"},
"incrementPlayerScore":function(d){return "１ポイント ゲット"},
"incrementPlayerScoreTooltip":function(d){return "現在のプレイヤーのスコアに追加"},
"nextLevel":function(d){return "おめでとうございます ！このパズルを完了しました。"},
"no":function(d){return "いいえ"},
"numBlocksNeeded":function(d){return "このパズルは%1個のブロックで解けます。"},
"playSoundRandom":function(d){return "ランダム 音を ならす"},
"playSoundBounce":function(d){return "バウンド 音を ならす"},
"playSoundCrunch":function(d){return "バリバリ 音を ならす"},
"playSoundDie":function(d){return "かなしい 音を ならす"},
"playSoundHit":function(d){return "叩く 音を ならす"},
"playSoundPoint":function(d){return "ポイント獲得 音を ならす"},
"playSoundSwoosh":function(d){return "シュッと動く 音を ならす"},
"playSoundWing":function(d){return "パタパタ 音を ならす"},
"playSoundJet":function(d){return "ジェット 音を ならす"},
"playSoundCrash":function(d){return "クラッシュ 音を ならす"},
"playSoundJingle":function(d){return "リンリンリン 音を ならす"},
"playSoundSplash":function(d){return "スプラッシュ 音を ならす"},
"playSoundLaser":function(d){return "レーザー 音を ならす"},
"playSoundTooltip":function(d){return "選択 音を ならす"},
"reinfFeedbackMsg":function(d){return "「ゲームをつづける」ボタンをおすと、ゲームにもどります。"},
"scoreText":function(d){return "とくてん： "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "はいけいをセット"},
"setBackgroundRandom":function(d){return "はいけいを ランダム にする"},
"setBackgroundFlappy":function(d){return "はいけいを ひるま にする"},
"setBackgroundNight":function(d){return "はいけいを よる にする"},
"setBackgroundSciFi":function(d){return "はいけいを SF にする"},
"setBackgroundUnderwater":function(d){return "はいけいを 水中 にする"},
"setBackgroundCave":function(d){return "はいけいを どうくつ にする"},
"setBackgroundSanta":function(d){return "はいけいを クリスマス にする"},
"setBackgroundTooltip":function(d){return "はいけいの 絵をセット"},
"setGapRandom":function(d){return "すき間を てきとうに する"},
"setGapVerySmall":function(d){return "すき間を すごくせまく する"},
"setGapSmall":function(d){return "すき間を せまく する"},
"setGapNormal":function(d){return "すき間を ふつうに する"},
"setGapLarge":function(d){return "すき間を 広く する"},
"setGapVeryLarge":function(d){return "すき間を とても広く する"},
"setGapHeightTooltip":function(d){return "しょうがいぶつの すき間を セットします"},
"setGravityRandom":function(d){return "じゅうりょくを てきとうに する"},
"setGravityVeryLow":function(d){return "じゅうりょくを とても弱く する"},
"setGravityLow":function(d){return "じゅうりょくを 弱く する"},
"setGravityNormal":function(d){return "じゅうりょくを ふつうに する"},
"setGravityHigh":function(d){return "じゅうりょくを 強く する"},
"setGravityVeryHigh":function(d){return "じゅうりょくを とても強く する"},
"setGravityTooltip":function(d){return "じゅうりょくのレベルをセットします。"},
"setGround":function(d){return "じめんをセット"},
"setGroundRandom":function(d){return "じめんを ランダム にする"},
"setGroundFlappy":function(d){return "じめんを ふつう にする"},
"setGroundSciFi":function(d){return "じめんを SF にする"},
"setGroundUnderwater":function(d){return "じめんを 水中 にする"},
"setGroundCave":function(d){return "じめんを どうくつ にする"},
"setGroundSanta":function(d){return "じめんを サンタ にする"},
"setGroundLava":function(d){return "じめんを ようがん にする"},
"setGroundTooltip":function(d){return "じめんの 絵をセットします"},
"setObstacle":function(d){return "しょうがいぶつをセット"},
"setObstacleRandom":function(d){return "しょうがいぶつを ランダム にする"},
"setObstacleFlappy":function(d){return "しょうがいぶつを パイプ にする"},
"setObstacleSciFi":function(d){return "しょうがいぶつを SF にする"},
"setObstacleUnderwater":function(d){return "しょうがいぶつを 草 にする"},
"setObstacleCave":function(d){return "しょうがいぶつを どうくつ にする"},
"setObstacleSanta":function(d){return "しょうがいぶつを えんとつ にする"},
"setObstacleLaser":function(d){return "しょうがいぶつを レーザー にする"},
"setObstacleTooltip":function(d){return "しょうがいぶつの 絵を セットする"},
"setPlayer":function(d){return "プレイヤーをセット"},
"setPlayerRandom":function(d){return "プレーヤーを ランダム にする"},
"setPlayerFlappy":function(d){return "プレーヤーを イエローバード にする"},
"setPlayerRedBird":function(d){return "プレーヤーを レッドバード にする"},
"setPlayerSciFi":function(d){return "プレーヤーを うちゅうせん にする"},
"setPlayerUnderwater":function(d){return "プレーヤーを さかな にする"},
"setPlayerCave":function(d){return "プレーヤーを こうもり にする"},
"setPlayerSanta":function(d){return "プレーヤーを サンタクロース にする"},
"setPlayerShark":function(d){return "プレーヤーを サメ にする"},
"setPlayerEaster":function(d){return "プレーヤーを うさぎ にする"},
"setPlayerBatman":function(d){return "プレーヤーを バットマン にする"},
"setPlayerSubmarine":function(d){return "プレーヤーを せんすいかん にする"},
"setPlayerUnicorn":function(d){return "プレーヤーを ユニコーン にする"},
"setPlayerFairy":function(d){return "プレーヤーを ようせい にする"},
"setPlayerSuperman":function(d){return "プレーヤーを フラッピーマン にする"},
"setPlayerTurkey":function(d){return "プレーヤーを しちめんちょう にする"},
"setPlayerTooltip":function(d){return "プレーヤーの 絵を セットします"},
"setScore":function(d){return "とくてんをセット"},
"setScoreTooltip":function(d){return "プレーヤーのとくてんをセットします"},
"setSpeed":function(d){return "スピードをセット"},
"setSpeedTooltip":function(d){return "スピードのレベルをセットします"},
"shareFlappyTwitter":function(d){return "わたしがつくったフラッピーゲームをみてみてください。@codeorg でかきました。"},
"shareFlappyTwitterDonor":function(d){return "わたしが作ったフラッピーゲームを見てください。( "+flappy_locale.v(d,"donor")+" のサポートに感謝します @codeorg)"},
"shareGame":function(d){return "あなたのゲームをシェア："},
"soundRandom":function(d){return "ランダム"},
"soundBounce":function(d){return "バウンス"},
"soundCrunch":function(d){return "ドスン"},
"soundDie":function(d){return "かなしい"},
"soundHit":function(d){return "スマッシュ"},
"soundPoint":function(d){return "ポイント"},
"soundSwoosh":function(d){return "シューッ"},
"soundWing":function(d){return "翼"},
"soundJet":function(d){return "ジェット"},
"soundCrash":function(d){return "ぶつかる"},
"soundJingle":function(d){return "リンリンリン"},
"soundSplash":function(d){return "ザブーン"},
"soundLaser":function(d){return "レーザー"},
"speedRandom":function(d){return "スピードを ランダムに する"},
"speedVerySlow":function(d){return "スピードを とてもおそく する"},
"speedSlow":function(d){return "スピードを おそく する"},
"speedNormal":function(d){return "スピードを ふつうに する"},
"speedFast":function(d){return "スピードを はやく する"},
"speedVeryFast":function(d){return "スピードを とてもはやく する"},
"whenClick":function(d){return "クリックしたとき"},
"whenClickTooltip":function(d){return "がめんをクリックしたとき、下のアクションをします。"},
"whenCollideGround":function(d){return "じめんに ぶつかったとき"},
"whenCollideGroundTooltip":function(d){return "フラッピーが じめんに ぶつかったとき、下のアクションをします。"},
"whenCollideObstacle":function(d){return "しょうがいぶつに あたったとき"},
"whenCollideObstacleTooltip":function(d){return "フラッピーが しょうがいぶつに あたったとき、下のアクションをします。"},
"whenEnterObstacle":function(d){return "しょうがいぶつを とおりぬけたとき"},
"whenEnterObstacleTooltip":function(d){return "フラッピーが しょうがいぶつを とおりぬけたとき、下のアクションをします。"},
"whenRunButtonClick":function(d){return "ゲームのはじめに"},
"whenRunButtonClickTooltip":function(d){return "ゲームのはじめに、つぎのアクションをする。"},
"yes":function(d){return "はい"}};