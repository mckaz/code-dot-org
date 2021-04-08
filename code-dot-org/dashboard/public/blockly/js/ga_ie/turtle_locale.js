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
"blocksUsed":function(d){return "Líon blocanna: %1"},
"branches":function(d){return "craobhacha"},
"catColour":function(d){return "Dath"},
"catControl":function(d){return "Lúba"},
"catMath":function(d){return "Matamaitic"},
"catProcedures":function(d){return "Feidhmeanna"},
"catTurtle":function(d){return "Gníomhartha"},
"catVariables":function(d){return "Athróga"},
"catLogic":function(d){return "Loighic"},
"colourTooltip":function(d){return "Athraíonn seo dath an phinn."},
"createACircle":function(d){return "cruthaigh ciorcal"},
"createSnowflakeSquare":function(d){return "cruthaigh calóg shneachta i gcruth cearnóige"},
"createSnowflakeParallelogram":function(d){return "cruthaigh calóg shneachta i gcruth comhthreomharáin"},
"createSnowflakeLine":function(d){return "cruthaigh calóg shneachta i gcruth líneach"},
"createSnowflakeSpiral":function(d){return "cruthaigh calóg shneachta i gcruth bíse"},
"createSnowflakeFlower":function(d){return "cruthaigh calóg shneachta i gcruth blátha"},
"createSnowflakeFractal":function(d){return "cruthaigh calóg shneachta i gcruth frachtail"},
"createSnowflakeRandom":function(d){return "cruthaigh calóg shneachta i gcruth randamach"},
"createASnowflakeBranch":function(d){return "cruthaigh craobh de chalóg shneachta"},
"degrees":function(d){return "céim"},
"depth":function(d){return "doimhneacht"},
"dots":function(d){return "picteilín"},
"drawACircle":function(d){return "tarraing ciorcal"},
"drawAFlower":function(d){return "tarraing bláth"},
"drawAHexagon":function(d){return "tarraing heicseagán"},
"drawAHouse":function(d){return "tarraing teach"},
"drawAPlanet":function(d){return "tarraing pláinéad"},
"drawARhombus":function(d){return "tarraing rombas"},
"drawARobot":function(d){return "tarraing róbat"},
"drawARocket":function(d){return "tarraing roicéad"},
"drawASnowflake":function(d){return "tarraing calóg shneachta"},
"drawASnowman":function(d){return "tarraing fear sneachta"},
"drawASquare":function(d){return "tarraing cearnóg"},
"drawAStar":function(d){return "tarraing réalta"},
"drawATree":function(d){return "tarraing crann"},
"drawATriangle":function(d){return "tarraing triantán"},
"drawUpperWave":function(d){return "tarraing tonn uachtarach"},
"drawLowerWave":function(d){return "tarraing tonn íochtarach"},
"drawSticker":function(d){return "tarraing greamán"},
"heightParameter":function(d){return "airde"},
"hideTurtle":function(d){return "cuir an t-ealaíontóir i bhfolach"},
"jump":function(d){return "léim"},
"jumpTo":function(d){return "léim go"},
"jumpBackward":function(d){return "léim ar gcúl"},
"jumpForward":function(d){return "léim ar aghaidh"},
"jumpTooltip":function(d){return "Aistríonn seo an t-ealaíontóir gan lorg a fhágáil."},
"jumpEastTooltip":function(d){return "Aistríonn seo an t-ealaíontóir soir gan lorg a fhágáil."},
"jumpNorthTooltip":function(d){return "Aistríonn seo an t-ealaíontóir ó thuaidh gan lorg a fhágáil."},
"jumpNortheastTooltip":function(d){return "Aistríonn seo an t-ealaíontóir soir ó thuaidh gan lorg a fhágáil."},
"jumpNorthwestTooltip":function(d){return "Aistríonn seo an t-ealaíontóir siar ó thuaidh gan lorg a fhágáil."},
"jumpSouthTooltip":function(d){return "Aistríonn seo an t-ealaíontóir ó dheas gan lorg a fhágáil."},
"jumpSoutheastTooltip":function(d){return "Aistríonn seo an t-ealaíontóir soir ó dheas gan lorg a fhágáil."},
"jumpSouthwestTooltip":function(d){return "Aistríonn seo an t-ealaíontóir siar ó dheas gan lorg a fhágáil."},
"jumpWestTooltip":function(d){return "Aistríonn seo an t-ealaíontóir siar gan lorg a fhágáil."},
"lengthFeedback":function(d){return "Tá gach rud ceart seachas na faid."},
"lengthParameter":function(d){return "fad"},
"loopVariable":function(d){return "áiritheoir"},
"moveBackward":function(d){return "téigh ar gcúl"},
"moveEastTooltip":function(d){return "Aistríonn seo an t-ealaíontóir soir."},
"moveForward":function(d){return "téigh ar aghaidh"},
"moveForwardTooltip":function(d){return "Aistríonn seo an t-ealaíontóir ar aghaidh."},
"moveNorthTooltip":function(d){return "Aistríonn seo an t-ealaíontóir ó thuaidh."},
"moveNortheastTooltip":function(d){return "Aistríonn seo an t-ealaíontóir soir ó thuaidh."},
"moveNorthwestTooltip":function(d){return "Aistríonn seo an t-ealaíontóir siar ó thuaidh."},
"moveSouthTooltip":function(d){return "Aistríonn seo an t-ealaíontóir ó dheas."},
"moveSoutheastTooltip":function(d){return "Aistríonn seo an t-ealaíontóir soir ó dheas."},
"moveSouthwestTooltip":function(d){return "Aistríonn seo an t-ealaíontóir siar ó dheas."},
"moveWestTooltip":function(d){return "Aistríonn seo an t-ealaíontóir siar."},
"moveTooltip":function(d){return "Aistríonn seo an t-ealaíontóir ar aghaidh nó ar gcúl an fad sonraithe."},
"notBlackColour":function(d){return "Caithfidh tú dath seachas dubh a roghnú sa dúshlán seo."},
"numBlocksNeeded":function(d){return "Is féidir an dúshlán a chríochnú le %1 bloc. D'úsáid tú %2."},
"penDown":function(d){return "peann síos"},
"penTooltip":function(d){return "Ardaíonn nó íslíonn seo an peann, chun tarraingt a thosú nó a stopadh."},
"penUp":function(d){return "peann suas"},
"reinfFeedbackMsg":function(d){return "Seo é do líníocht! Lean ort ag obair uirthi, nó téigh ar aghaidh go dtí an chéad dúshlán eile."},
"setAlpha":function(d){return "socraigh alfa"},
"setCharacter":function(d){return "roghnaigh carachtar "+turtle_locale.v(d,"character")},
"setColour":function(d){return "socraigh an dath"},
"setPattern":function(d){return "socraigh an patrún"},
"setWidth":function(d){return "socraigh an leithead"},
"shareDrawing":function(d){return "Comhroinn do líníocht:"},
"showMe":function(d){return "Taispeáin dom"},
"showTurtle":function(d){return "taispeáin an t-ealaíontóir"},
"sizeParameter":function(d){return "méid"},
"step":function(d){return "céim"},
"tooFewColours":function(d){return "Ní mór duit ar a laghad %1 dath éagsúil a úsáid sa dúshlán seo. Níor úsáid tú ach %2 dath."},
"turnLeft":function(d){return "cas ar chlé"},
"turnRight":function(d){return "cas ar dheis"},
"turnRightTooltip":function(d){return "Casann seo an t-ealaíontóir ar dheis tríd an uillinn shonraithe."},
"turnTooltip":function(d){return "Casann seo an t-ealaíontóir ar chlé tríd an uillinn shonraithe."},
"turtleVisibilityTooltip":function(d){return "Taispeáin nó folaigh an t-ealaíontóir."},
"widthTooltip":function(d){return "Athraíonn seo leithead an phinn."},
"wrongColour":function(d){return "Tá dath an phictiúir mícheart. Ní mór %1 a úsáid don dúshlán seo."}};