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
"blocksUsed":function(d){return "Bloques usados: %1"},
"branches":function(d){return "ramos"},
"catColour":function(d){return "Cor"},
"catControl":function(d){return "Bucles"},
"catMath":function(d){return "Matemáticas"},
"catProcedures":function(d){return "Funcións"},
"catTurtle":function(d){return "Accións"},
"catVariables":function(d){return "Variables"},
"catLogic":function(d){return "Lóxica"},
"colourTooltip":function(d){return "Cambia a cor do lapis."},
"createACircle":function(d){return "crear un círculo"},
"createSnowflakeSquare":function(d){return "crear unha folerpa de neve do tipo cadrado"},
"createSnowflakeParallelogram":function(d){return "crear unha folerpa de neve do tipo paralelogramo"},
"createSnowflakeLine":function(d){return "crear unha folerpa de neve do tipo recta"},
"createSnowflakeSpiral":function(d){return "crear unha folerpa de neve do tipo espiral"},
"createSnowflakeFlower":function(d){return "crear unha folerpa de neve do tipo flor"},
"createSnowflakeFractal":function(d){return "crear unha folerpa de neve do tipo fractal"},
"createSnowflakeRandom":function(d){return "crear unha folerpa de neve do tipo aleatorio"},
"createASnowflakeBranch":function(d){return "crear unha folerpa de neve do tipo ramificado"},
"degrees":function(d){return "graos"},
"depth":function(d){return "profundidade"},
"dots":function(d){return "píxeles"},
"drawACircle":function(d){return "debuxar un círculo"},
"drawAFlower":function(d){return "debuxar unha flor"},
"drawAHexagon":function(d){return "debuxar un hexágono"},
"drawAHouse":function(d){return "debuxar unha casa"},
"drawAPlanet":function(d){return "debuxar un planeta"},
"drawARhombus":function(d){return "debuxar un rombo"},
"drawARobot":function(d){return "debuxar un robot"},
"drawARocket":function(d){return "debuxar un foguete"},
"drawASnowflake":function(d){return "debuxar unha folerpa de neve"},
"drawASnowman":function(d){return "debuxar un boneco de neve"},
"drawASquare":function(d){return "debuxar un cadrado"},
"drawAStar":function(d){return "debuxar unha estrela"},
"drawATree":function(d){return "debuxar unha árbore"},
"drawATriangle":function(d){return "debuxar un triángulo"},
"drawUpperWave":function(d){return "debuxar a onda superior"},
"drawLowerWave":function(d){return "debuxe a onda inferior"},
"drawSticker":function(d){return "debuxar un adhesivo"},
"heightParameter":function(d){return "altura"},
"hideTurtle":function(d){return "ocultar o artista"},
"jump":function(d){return "saltar"},
"jumpTo":function(d){return "ir a"},
"jumpBackward":function(d){return "chimpar para atrás por"},
"jumpForward":function(d){return "chimpar para adiante por"},
"jumpTooltip":function(d){return "Mover artista sen deixar marcas."},
"jumpEastTooltip":function(d){return "Mover artista cara o leste sen deixar marcas."},
"jumpNorthTooltip":function(d){return "Mover artista cara o norte sen deixar marcas."},
"jumpNortheastTooltip":function(d){return "Mover artista cara o nordeste sen deixar marcas."},
"jumpNorthwestTooltip":function(d){return "Mover artista cara o noroeste sen deixar marcas."},
"jumpSouthTooltip":function(d){return "Mover artista cara o sur sen deixar marcas."},
"jumpSoutheastTooltip":function(d){return "Mover artista cara o sueste sen deixar marcas."},
"jumpSouthwestTooltip":function(d){return "Mover artista cara o suroeste sen deixar marcas."},
"jumpWestTooltip":function(d){return "Move o artista cara o oeste sen deixar marcas."},
"lengthFeedback":function(d){return "Fixéchelo ben, quitado polas distancias de movemento."},
"lengthParameter":function(d){return "lonxitude"},
"loopVariable":function(d){return "contador"},
"moveBackward":function(d){return "volte"},
"moveEastTooltip":function(d){return "Mover artista cara o leste."},
"moveForward":function(d){return "avance por"},
"moveForwardTooltip":function(d){return "Mover artista cara adiante."},
"moveNorthTooltip":function(d){return "Mover artista cara o norte."},
"moveNortheastTooltip":function(d){return "Mover artista cara o noreste."},
"moveNorthwestTooltip":function(d){return "Mover artista cara o noroeste."},
"moveSouthTooltip":function(d){return "Mover artista cara o sur."},
"moveSoutheastTooltip":function(d){return "Mover artista cara o sueste."},
"moveSouthwestTooltip":function(d){return "Mover artista cara o suroeste."},
"moveWestTooltip":function(d){return "Mover artista cara o oeste."},
"moveTooltip":function(d){return "Mover artista cara diante ou para atrás pola cantidade especificada."},
"notBlackColour":function(d){return "Cómpre definir unha cor que non sexa negra para este desafío."},
"numBlocksNeeded":function(d){return "Este desafío pode ser resolvido con %1 bloques. Ti usaches %2."},
"penDown":function(d){return "baixar o lapis"},
"penTooltip":function(d){return "Levanta ou baixa o lapis, para comezar ou parar de debuxar."},
"penUp":function(d){return "levantar o lapis"},
"reinfFeedbackMsg":function(d){return "Aquí está o teu debuxo! Continúa a traballar nel, ou segue para o próximo desafío."},
"setAlpha":function(d){return "definir alfa"},
"setCharacter":function(d){return "configurar personaxe a "+turtle_locale.v(d,"character")},
"setColour":function(d){return "definir cor"},
"setPattern":function(d){return "definir padrón"},
"setWidth":function(d){return "definir o longo"},
"shareDrawing":function(d){return "Comparta o seu debuxo:"},
"showMe":function(d){return "Móstreme"},
"showTurtle":function(d){return "mostre o artista"},
"sizeParameter":function(d){return "tamaño"},
"step":function(d){return "paso"},
"tooFewColours":function(d){return "Vostede precisa usar polo menos %1 cores diferentes neste desafío. Vostede usou só %2."},
"turnLeft":function(d){return "virar á esquerda por"},
"turnRight":function(d){return "virar á dereita por"},
"turnRightTooltip":function(d){return "Virar o artista á dereita de acordo co ángulo especificado."},
"turnTooltip":function(d){return "Vira o artista á dereita ou á esquerda usando o número especificado de graos."},
"turtleVisibilityTooltip":function(d){return "Fai que o artista fique visíbel ou invisíbel."},
"widthTooltip":function(d){return "Cambia o longo do lapis."},
"wrongColour":function(d){return "A túa figura ten unha cor errónea. Para este desafío necesita ser %1."}};