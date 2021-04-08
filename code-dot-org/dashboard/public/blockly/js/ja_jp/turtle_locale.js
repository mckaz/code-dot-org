var turtle_locale = {lc:{"ar":function(n){
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
v:function(d,k){turtle_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){turtle_locale.c(d,k);return d[k] in p?p[d[k]]:(k=turtle_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){turtle_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).turtle_locale = {
"blocksUsed":function(d){return "使われているブロック: %1"},
"branches":function(d){return "エダ"},
"catColour":function(d){return "色"},
"catControl":function(d){return "くりかえし"},
"catMath":function(d){return "数学"},
"catProcedures":function(d){return "かんすう"},
"catTurtle":function(d){return "操作"},
"catVariables":function(d){return "変数"},
"catLogic":function(d){return "ロジック（論理）"},
"colourTooltip":function(d){return "ペンの色を変えます。"},
"createACircle":function(d){return "円 を かく"},
"createSnowflakeSquare":function(d){return "正方形 で雪の もようを かく"},
"createSnowflakeParallelogram":function(d){return "平行四辺形 で雪の もようを かく"},
"createSnowflakeLine":function(d){return "線 で雪の もようを かく"},
"createSnowflakeSpiral":function(d){return "らせん で雪の もようを かく"},
"createSnowflakeFlower":function(d){return "花 で雪の もようを かく"},
"createSnowflakeFractal":function(d){return "フラクタル で雪の もようを かく"},
"createSnowflakeRandom":function(d){return "てきとうなの で雪の もようを かく"},
"createASnowflakeBranch":function(d){return "雪のけっしょうのエダ を かく"},
"degrees":function(d){return "度"},
"depth":function(d){return "深さ"},
"dots":function(d){return "ピクセル"},
"drawACircle":function(d){return "円 を かく"},
"drawAFlower":function(d){return "花 を かく"},
"drawAHexagon":function(d){return "六角形 を かく"},
"drawAHouse":function(d){return "家 を かく"},
"drawAPlanet":function(d){return "惑星 を かく"},
"drawARhombus":function(d){return "ひし形 を かく"},
"drawARobot":function(d){return "ロボット を かく"},
"drawARocket":function(d){return "ロケット を かく"},
"drawASnowflake":function(d){return "雪のけっしょう を かく"},
"drawASnowman":function(d){return "雪だるま を かく"},
"drawASquare":function(d){return "正方形 を かく"},
"drawAStar":function(d){return "星形 を かく"},
"drawATree":function(d){return "木 を かく"},
"drawATriangle":function(d){return "三角形を描画します。"},
"drawUpperWave":function(d){return "上向きの波 を かく"},
"drawLowerWave":function(d){return "下向きの波 を かく"},
"drawSticker":function(d){return "スタンプ"},
"heightParameter":function(d){return "高さ"},
"hideTurtle":function(d){return "アーティストを隠す"},
"jump":function(d){return "ジャンプ"},
"jumpTo":function(d){return "ジャンプ"},
"jumpBackward":function(d){return "後ろに ジャンプ"},
"jumpForward":function(d){return "前に ジャンプ"},
"jumpTooltip":function(d){return "何も書かずにアーティストを移動"},
"jumpEastTooltip":function(d){return "何も書かずにアーティストを画面の右側に動かします。"},
"jumpNorthTooltip":function(d){return "何も書かずにアーティストを画面の上側に動かします。"},
"jumpNortheastTooltip":function(d){return "何も書かずにアーティストを画面の右上側に動かします。"},
"jumpNorthwestTooltip":function(d){return "何も書かずにアーティストを画面の左上側に動かします。"},
"jumpSouthTooltip":function(d){return "何も書かずにアーティストを画面の下側に動かします。"},
"jumpSoutheastTooltip":function(d){return "何も書かずにアーティストを画面の右下側に動かします。"},
"jumpSouthwestTooltip":function(d){return "何も書かずにアーティストを画面の左下側に動かします。"},
"jumpWestTooltip":function(d){return "何も書かずにアーティストを画面の右側に動かします。"},
"lengthFeedback":function(d){return "おしい！あとは動かす距離だけ！"},
"lengthParameter":function(d){return "長さ"},
"loopVariable":function(d){return "カウンター"},
"moveBackward":function(d){return "後ろに うごく"},
"moveEastTooltip":function(d){return "画面の右側に動かします。"},
"moveForward":function(d){return "前に うごく"},
"moveForwardTooltip":function(d){return "アーティストを前に動かします。"},
"moveNorthTooltip":function(d){return "画面の上側に動かします。"},
"moveNortheastTooltip":function(d){return "画面の右上側に動かします。"},
"moveNorthwestTooltip":function(d){return "画面の左上側に動かします。"},
"moveSouthTooltip":function(d){return "画面の下側に動かします。"},
"moveSoutheastTooltip":function(d){return "画面の右下側に動かします。"},
"moveSouthwestTooltip":function(d){return "画面の左下側に動かします。"},
"moveWestTooltip":function(d){return "画面の左側に動かします。"},
"moveTooltip":function(d){return "指定した分、アーティストを前または後ろに動かします。"},
"notBlackColour":function(d){return "このパズルに黒以外の色を設定する必要があります。"},
"numBlocksNeeded":function(d){return "このパズルは %1 のブロックでクリアできます。 %2 のブロックを使っています。"},
"penDown":function(d){return "鉛筆を置く。\n\n"},
"penTooltip":function(d){return "鉛筆を持ち上げたり、下げたりして、描くのを始めたり、止めたりします。"},
"penUp":function(d){return "鉛筆を持ち上げる"},
"reinfFeedbackMsg":function(d){return "カッコイイ絵が書けたね！もういちど、べつの絵を書いてもいいし、つぎのパズルに すすんでもいいよ。"},
"setAlpha":function(d){return "アルファ値は"},
"setCharacter":function(d){return "キャラクターを"+turtle_locale.v(d,"character")+" にする"},
"setColour":function(d){return "色は"},
"setPattern":function(d){return "線のかたち"},
"setWidth":function(d){return "太さは"},
"shareDrawing":function(d){return "図面を共有します。"},
"showMe":function(d){return "見せてください"},
"showTurtle":function(d){return "アーティストを表示"},
"sizeParameter":function(d){return "おおきさ"},
"step":function(d){return "ステップ"},
"tooFewColours":function(d){return "このパズルには少なくとも %1 つの色を使います。 %2つの色しか使っていません。"},
"turnLeft":function(d){return "左に まがる"},
"turnRight":function(d){return "右に まがる"},
"turnRightTooltip":function(d){return "指定した角度でアーティストを右に向ける"},
"turnTooltip":function(d){return "指定した角度でアーティストを左まはた右に向ける"},
"turtleVisibilityTooltip":function(d){return "アーティストを表示または非表示"},
"widthTooltip":function(d){return "鉛筆の幅を変更"},
"wrongColour":function(d){return "あなたの絵は間違った色を使っています。このパズル では%1でなくてはいけません。"}};