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
"blocksUsed":function(d){return "Ngā paraka kua whakamahia:%1"},
"branches":function(d){return "peka"},
"catColour":function(d){return "Tae"},
"catControl":function(d){return "Ngā Koromeke"},
"catMath":function(d){return "Pāngarau"},
"catProcedures":function(d){return "Ngā Taumahi"},
"catTurtle":function(d){return "Ngā Hohenga"},
"catVariables":function(d){return "Ngā Taurangi"},
"catLogic":function(d){return "Ararau"},
"colourTooltip":function(d){return "Ka panonihia te tae o te penerākau."},
"createACircle":function(d){return "hangaia he porowhita"},
"createSnowflakeSquare":function(d){return "waihangahia he tarahīhuka momo tapawhā"},
"createSnowflakeParallelogram":function(d){return "waihangahia he tarahīhuka momo tapawhā whakarara"},
"createSnowflakeLine":function(d){return "waihangahia he tarahīhuka momo rārangi"},
"createSnowflakeSpiral":function(d){return "waihangahia he tarahīhuka momo tōrino"},
"createSnowflakeFlower":function(d){return "waihangahia he tarahīhuka momo putiputi"},
"createSnowflakeFractal":function(d){return "waihangahia he tarahīhuka momo ōrite"},
"createSnowflakeRandom":function(d){return "waihangahia he tarahīhuka momo matapōkere"},
"createASnowflakeBranch":function(d){return "waihangahia he peka tarahīhuka"},
"degrees":function(d){return "putu"},
"depth":function(d){return "hōhonu"},
"dots":function(d){return "pika"},
"drawACircle":function(d){return "tāngia he porohita"},
"drawAFlower":function(d){return "tāngia he putiputi"},
"drawAHexagon":function(d){return "tāngia he tapaono"},
"drawAHouse":function(d){return "tāngia he whare"},
"drawAPlanet":function(d){return "tāngia he aorangi"},
"drawARhombus":function(d){return "tāngia he tapawā whakarara rite"},
"drawARobot":function(d){return "tāngia he karetao"},
"drawARocket":function(d){return "tāngia he tākirirangi"},
"drawASnowflake":function(d){return "tāngia he tarahīhuka"},
"drawASnowman":function(d){return "tāngia he tangata huka"},
"drawASquare":function(d){return "tāngia he tapawhā"},
"drawAStar":function(d){return "tāngia he whetū"},
"drawATree":function(d){return "tāngia he rākau"},
"drawATriangle":function(d){return "tāngia he tapatoru"},
"drawUpperWave":function(d){return "tāngia te ngaru o runga"},
"drawLowerWave":function(d){return "tāngia te ngaru o raro"},
"drawSticker":function(d){return "tāngia te tohu"},
"heightParameter":function(d){return "teitei"},
"hideTurtle":function(d){return "hunaia te rehetoi"},
"jump":function(d){return "peke"},
"jumpTo":function(d){return "e peke ki"},
"jumpBackward":function(d){return "e peke ki muri mā"},
"jumpForward":function(d){return "e peke ki mua mā"},
"jumpTooltip":function(d){return "Ka nekehia te rehetoi me te kore waiho kōiraira."},
"jumpEastTooltip":function(d){return "Ka nekehia te rehetoi mārāwhiti me te kore waiho kōiraira."},
"jumpNorthTooltip":function(d){return "Ka nekehia te rehetoi māraki me te kore waiho kōiraira."},
"jumpNortheastTooltip":function(d){return "Ka nekehia te rehetoi mārāwhiti-māraki me te kore waiho kōiraira."},
"jumpNorthwestTooltip":function(d){return "Ka nekehia te rehetoi māuru-māraki me te kore waiho kōiraira."},
"jumpSouthTooltip":function(d){return "Ka nekehia te rehetoi mātonga me te kore waiho kōiraira."},
"jumpSoutheastTooltip":function(d){return "Ka nekehia te rehetoi mārāwhiti-mātonga me te kore waiho kōiraira."},
"jumpSouthwestTooltip":function(d){return "Ka nekehia te rehetoi māuru-mātonga me te kore waiho kōiraira."},
"jumpWestTooltip":function(d){return "Ka nekehia te rehetoi māuru me te kore waiho kōiraira."},
"lengthFeedback":function(d){return "I tika tāu, hāunga ngā roanga me neke."},
"lengthParameter":function(d){return "roanga"},
"loopVariable":function(d){return "pūtatau"},
"moveBackward":function(d){return "neke ki muri mā"},
"moveEastTooltip":function(d){return "Ka nekehia te rehetoi ki te rāwhiti."},
"moveForward":function(d){return "neke ki mua mā"},
"moveForwardTooltip":function(d){return "Ka nekehia te rehetoi ki mua."},
"moveNorthTooltip":function(d){return "Ka nekehia te rehetoi ki te raki."},
"moveNortheastTooltip":function(d){return "Ka nekehia te rehetoi mārāwhiti-māraki."},
"moveNorthwestTooltip":function(d){return "Ka nekehia te rehetoi māuru-māraki."},
"moveSouthTooltip":function(d){return "Ka nekehia te rehetoi ki te tonga."},
"moveSoutheastTooltip":function(d){return "Ka nekehia te rehetoi mārāwhiti-mātonga."},
"moveSouthwestTooltip":function(d){return "Ka nekehia te rehetoi māuru-mātonga."},
"moveWestTooltip":function(d){return "Ka nekehia te rehetoi ki te uru."},
"moveTooltip":function(d){return "Ka nekehia te rehetoi ki mua, ki muri rānei mā te nui kua tohua."},
"notBlackColour":function(d){return "Me tautuhi tae i tua atu i te pango mō tēnei panga."},
"numBlocksNeeded":function(d){return "E āhei ana tēnei panga te whakaoti me ngā paraka e %1. I whakamahia e koe e %2."},
"penDown":function(d){return "penerākau ki raro"},
"penTooltip":function(d){return "Ka hikitia, ka whakahekea rānei te penerākau ki te tīmata, ki te whakamutu rānei i te mahi tā."},
"penUp":function(d){return "penerākau ki runga"},
"reinfFeedbackMsg":function(d){return "Anei tō tānga! Mahi tonu, e koke rānei ki te panga e whai ake ana."},
"setAlpha":function(d){return "tautuhia te tae māmā"},
"setCharacter":function(d){return "set character to "+turtle_locale.v(d,"character")},
"setColour":function(d){return "tautuhia te tae"},
"setPattern":function(d){return "tautuhia te tauira"},
"setWidth":function(d){return "tautuhia te whānuitanga"},
"shareDrawing":function(d){return "Tiria tō tānga:"},
"showMe":function(d){return "Whakaatu mai"},
"showTurtle":function(d){return "whakaatu i te rehetoi"},
"sizeParameter":function(d){return "rahinga"},
"step":function(d){return "hipanga"},
"tooFewColours":function(d){return "E tika ana kia whakamahia e %1 ia nei ngā tae mō tēnei panga. I whakamahia e koe e %2 noa iho."},
"turnLeft":function(d){return "huri whakatemauī mā"},
"turnRight":function(d){return "huri whakatematau mā"},
"turnRightTooltip":function(d){return "Ka hurihia te rehetoi ki te taha matau mā te koki kua tohua."},
"turnTooltip":function(d){return "Ka hurihia te rehetoi ki te taha mauī, matau rānei mā tētahi putu."},
"turtleVisibilityTooltip":function(d){return "Ka ari, ka aringaro rānei te rehetoi."},
"widthTooltip":function(d){return "Ka panonihia te whāroa o te penerākau."},
"wrongColour":function(d){return "Kei te hē te tae o tō tānga. Mō tēnei panga, me %1 kē."}};