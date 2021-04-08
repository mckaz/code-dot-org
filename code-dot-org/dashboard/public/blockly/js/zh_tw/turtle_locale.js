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
"blocksUsed":function(d){return "已用積木：%1"},
"branches":function(d){return "分支"},
"catColour":function(d){return "顏色"},
"catControl":function(d){return "迴圈類別"},
"catMath":function(d){return "運算"},
"catProcedures":function(d){return "函數類別"},
"catTurtle":function(d){return "動作"},
"catVariables":function(d){return "變數類別"},
"catLogic":function(d){return "邏輯類別"},
"colourTooltip":function(d){return "變更畫筆顏色。"},
"createACircle":function(d){return "建立一個圓形"},
"createSnowflakeSquare":function(d){return "建立正方形型態的雪花"},
"createSnowflakeParallelogram":function(d){return "建立平行四邊形型態的雪花"},
"createSnowflakeLine":function(d){return "建立直線型態的雪花"},
"createSnowflakeSpiral":function(d){return "建立螺旋型態的雪花"},
"createSnowflakeFlower":function(d){return "建立花朵型態的雪花"},
"createSnowflakeFractal":function(d){return "建立不規則型態的雪花"},
"createSnowflakeRandom":function(d){return "建立隨機型態的雪花"},
"createASnowflakeBranch":function(d){return "建立雪花分支"},
"degrees":function(d){return "度"},
"depth":function(d){return "深度"},
"dots":function(d){return "像素"},
"drawACircle":function(d){return "畫個圓形"},
"drawAFlower":function(d){return "畫個花朵"},
"drawAHexagon":function(d){return "畫個六邊形"},
"drawAHouse":function(d){return "畫個房子"},
"drawAPlanet":function(d){return "畫顆行星"},
"drawARhombus":function(d){return "畫個菱形"},
"drawARobot":function(d){return "畫個機器人"},
"drawARocket":function(d){return "畫個火箭"},
"drawASnowflake":function(d){return "畫個雪花"},
"drawASnowman":function(d){return "畫個雪人"},
"drawASquare":function(d){return "畫個正方形"},
"drawAStar":function(d){return "畫顆星星"},
"drawATree":function(d){return "畫棵樹木"},
"drawATriangle":function(d){return "畫個三角形"},
"drawUpperWave":function(d){return "繪製較高的波浪"},
"drawLowerWave":function(d){return "繪製較低的波浪"},
"drawSticker":function(d){return "繪圖貼紙"},
"heightParameter":function(d){return "高度"},
"hideTurtle":function(d){return "隱藏小藝術家"},
"jump":function(d){return "跳"},
"jumpTo":function(d){return "移至"},
"jumpBackward":function(d){return "跳躍-向後"},
"jumpForward":function(d){return "跳躍-向前"},
"jumpTooltip":function(d){return "讓小藝術家移動，且不留下任何筆跡。"},
"jumpEastTooltip":function(d){return "讓小藝術家往東移動，且不留下任何筆跡。"},
"jumpNorthTooltip":function(d){return "讓小藝術家往北移動，且不留下任何筆跡。"},
"jumpNortheastTooltip":function(d){return "讓小藝術家往東北移動，且不留下任何筆跡。"},
"jumpNorthwestTooltip":function(d){return "讓小藝術家往西北移動，且不留下任何筆跡。"},
"jumpSouthTooltip":function(d){return "讓小藝術家往南移動，且不留下任何筆跡。"},
"jumpSoutheastTooltip":function(d){return "讓小藝術家往東南移動，且不留下任何筆跡。"},
"jumpSouthwestTooltip":function(d){return "讓小藝術家往西南移動，且不留下任何筆跡。"},
"jumpWestTooltip":function(d){return "讓小藝術家往西移動，且不留下任何筆跡。"},
"lengthFeedback":function(d){return "你幾乎做對了，除了移動的長度，再試試吧。"},
"lengthParameter":function(d){return "長度"},
"loopVariable":function(d){return "計數器"},
"moveBackward":function(d){return "移動-向後"},
"moveEastTooltip":function(d){return "讓小藝術家往東移動。"},
"moveForward":function(d){return "移動-向前"},
"moveForwardTooltip":function(d){return "讓小藝術家往前移動。"},
"moveNorthTooltip":function(d){return "讓小藝術家往北移動。"},
"moveNortheastTooltip":function(d){return "讓小藝術家往東北移動。"},
"moveNorthwestTooltip":function(d){return "讓小藝術家往西北移動。"},
"moveSouthTooltip":function(d){return "讓小藝術家往南移動。"},
"moveSoutheastTooltip":function(d){return "讓小藝術家往東南移動。"},
"moveSouthwestTooltip":function(d){return "讓小藝術家往西南移動。"},
"moveWestTooltip":function(d){return "讓小藝術家往西移動。"},
"moveTooltip":function(d){return "讓小藝術家往前或往後移動。"},
"notBlackColour":function(d){return "你必須用黑色以外的顏色來完成這個關卡。"},
"numBlocksNeeded":function(d){return "這個關卡可以只用 %1 程式積木來完成。你用了 %2 個。"},
"penDown":function(d){return "下筆"},
"penTooltip":function(d){return "使用「下筆」或「停筆」來開始或停止繪圖。"},
"penUp":function(d){return "停筆"},
"reinfFeedbackMsg":function(d){return "這是你的畫作！留下來再創作，或者繼續到下一關。"},
"setAlpha":function(d){return "透明值設置"},
"setCharacter":function(d){return "將角色設定為 "+turtle_locale.v(d,"character")},
"setColour":function(d){return "顏色設為"},
"setPattern":function(d){return "圖案設置"},
"setWidth":function(d){return "設定寬度"},
"shareDrawing":function(d){return "分享您的畫作："},
"showMe":function(d){return "顯示"},
"showTurtle":function(d){return "顯示藝術家"},
"sizeParameter":function(d){return "尺寸"},
"step":function(d){return "點"},
"tooFewColours":function(d){return "你必須使用至少 %1 種不同的顏色來完成這個關卡。你只使用了 %2 種顏色。"},
"turnLeft":function(d){return "轉向-左方"},
"turnRight":function(d){return "轉向-右方"},
"turnRightTooltip":function(d){return "將小藝術家向右轉一個指定的角度。"},
"turnTooltip":function(d){return "讓小藝術家向左或向右轉一個指定的角度。"},
"turtleVisibilityTooltip":function(d){return "將藝術家隱藏或顯示。"},
"widthTooltip":function(d){return "更改畫筆筆跡的寬度。"},
"wrongColour":function(d){return "你的圖形的顏色不正確。在這關必須用 %1。"}};