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
"at":function(d){return "en"},
"atFlower":function(d){return "en la flor"},
"atHoneycomb":function(d){return "en el panal"},
"avoidCowAndRemove":function(d){return "evita la vaca y elimina 1"},
"collect":function(d){return "recolecta"},
"collectiblePresent":function(d){return "Hay algún tesoro\n"},
"collectorCollectTooltip":function(d){return "Recolecta un objeto"},
"collectorCollectedEverything":function(d){return "¡Felicidades! ¡Has recolectado "+maze_locale.p(d,"count",0,"es",{"one":"un ítem","other":"los "+maze_locale.n(d,"count")+" ítems"})+"!"},
"collectorCollectedNothing":function(d){return "¡Sigue programando! Necesitas recoger tantos objetos como puedas."},
"collectorCollectedSome":function(d){return "Great work! You collected "+maze_locale.v(d,"count")+" items!"},
"collectorCollectedNotEnough":function(d){return "¡Continúa programando! Necesitas recolectar al menos "+maze_locale.p(d,"goal",0,"es",{"one":"1 ítem","other":"ítems"})+"."},
"collectorCollectedTooMany":function(d){return "Ese espacio no tiene suficientes objetos para recogerlos."},
"collectorTooManyBlocks":function(d){return "You can only use "+maze_locale.v(d,"blockLimit")+" blocks. Take a look at your code and try again!"},
"continue":function(d){return "Continuar"},
"corn":function(d){return "maíz"},
"cornTooltip":function(d){return "Cosechar un poco de maíz"},
"didNotCollectAllCrops":function(d){return "¡Asegúrate de que no dejar ningún cultivo!"},
"didNotCollectEverything":function(d){return "¡Asegúrate de no dejar atrás néctar o miel!"},
"didNotPlantEverywhere":function(d){return "¡Asegúrate de plantar algo en cada cuadro de terreno!"},
"dig":function(d){return "Eliminar 1"},
"digTooltip":function(d){return "Eliminar 1 unidad de tierra"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "O"},
"doCode":function(d){return "haz"},
"elseCode":function(d){return "si no"},
"emptyCropError":function(d){return "Ese cultivo se ha desaparecido."},
"fill":function(d){return "llenar 1"},
"fillN":function(d){return "llenar "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "llena el cuadrado"},
"fillStack":function(d){return "llena la pila de "+maze_locale.v(d,"shovelfuls")+" agujeros"},
"fillTooltip":function(d){return "Colocar 1 unidad de tierra"},
"finalLevel":function(d){return "¡Felicitaciones! Ha resuelto el rompecabezas final."},
"flowerEmptyError":function(d){return "La flor en la que estás no tiene más néctar."},
"get":function(d){return "obtener"},
"goal":function(d){return "meta"},
"has":function(d){return "ha"},
"haslettuce":function(d){return "allí hay lechuga"},
"hascorn":function(d){return "hay un elote"},
"haspumpkin":function(d){return "hay calabazas"},
"heightParameter":function(d){return "altura"},
"holePresent":function(d){return "hay un agujero"},
"honey":function(d){return "hacer miel"},
"honeyAvailable":function(d){return "miel"},
"honeyTooltip":function(d){return "Hacer miel usando néctar"},
"honeycombFullError":function(d){return "Este panal no tiene espacio para guardar más miel."},
"ifCode":function(d){return "si"},
"ifFlowerTooltip":function(d){return "si hay alguna flor/panal en la dirección especificada, entonces realiza algunas acciones."},
"ifInRepeatError":function(d){return "Necesitas un bloque \"si\" dentro de un bloque \"repetir\". Si tienes problemas, prueba el nivel anterior otra vez para ver cómo funcionaba."},
"ifOnlyFlowerTooltip":function(d){return "Si existe una flor en la dirección especificada, realiza algunas acciones."},
"ifPathAhead":function(d){return "si hay un camino adelante"},
"ifTooltip":function(d){return "Si hay un camino en la dirección especificada, entonces haz algunas acciones."},
"ifelseFlowerTooltip":function(d){return "si hay una flor/panal en la dirección especificada, entonces realiza el primer bloque de acciones. Si no, realiza el segundo bloque de acciones."},
"ifelseTooltip":function(d){return "Si hay un camino en la dirección especificada, realizar el primer bloque de acciones. De lo contrario, realizar el segundo bloque de acciones."},
"insufficientHoney":function(d){return "Necesitas hacer la cantidad correcta de miel."},
"insufficientNectar":function(d){return "Necesitas recoger la cantidad correcta de néctar."},
"lettuce":function(d){return "lechuga"},
"lettuceTooltip":function(d){return "Cosecha algo de lechuga"},
"make":function(d){return "hacer"},
"moveBackward":function(d){return "retroceder"},
"moveEastTooltip":function(d){return "Muéveme un espacio al Este."},
"moveForward":function(d){return "avanzar"},
"moveForwardTooltip":function(d){return "Avanzar un espacio."},
"moveNorthTooltip":function(d){return "Muéveme un espacio al Norte."},
"moveSouthTooltip":function(d){return "Muéveme un espacio al Sur."},
"moveTooltip":function(d){return "Muéveme un espacio hacia adelante/atrás"},
"moveWestTooltip":function(d){return "Muéveme un espacio al Oeste."},
"nectar":function(d){return "obtener néctar"},
"nectarRemaining":function(d){return "néctar"},
"nectarTooltip":function(d){return "Obtener néctar de una flor"},
"nextLevel":function(d){return "¡Felicitaciones! Has completado este puzzle."},
"no":function(d){return "No"},
"noPathAhead":function(d){return "el camino está bloqueado"},
"noPathLeft":function(d){return "no hay camino a la izquierda"},
"noPathRight":function(d){return "no hay camino a la derecha"},
"notAtFlowerError":function(d){return "Sólo puedes obtener néctar de una flor."},
"notAtHoneycombError":function(d){return "Sólo puedes hacer miel en un panal."},
"numBlocksNeeded":function(d){return "Este puzzle puede resolverse con %1 bloques."},
"pathAhead":function(d){return "camino adelante"},
"pathLeft":function(d){return "si hay camino a la izquierda"},
"pathRight":function(d){return "si hay camino a la derecha"},
"pick":function(d){return "elige"},
"pilePresent":function(d){return "hay una pila"},
"plant":function(d){return "planta"},
"plantInNonSoilError":function(d){return "Sólo puedo plantar en tierra fresca."},
"plantTooltip":function(d){return "Planta un brote"},
"pumpkin":function(d){return "calabaza"},
"pumpkinTooltip":function(d){return "Cosecha una calabaza"},
"putdownTower":function(d){return "Baja la torre"},
"removeAndAvoidTheCow":function(d){return "Elimina 1 y evita la vaca"},
"removeN":function(d){return "quitar "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "Elimina la pila"},
"removeSquare":function(d){return "eliminar cuadrado"},
"removeStack":function(d){return "quitar pila de "+maze_locale.v(d,"shovelfuls")+" montones"},
"repeatCarefullyError":function(d){return "Para resolver esto, piensa cuidadosamente acerca del patrón de dos movimientos y un giro para ponerlo dentro del bloque \"repetir\". Es correcto hacer un giro extra, al final."},
"repeatUntil":function(d){return "repetir hasta"},
"repeatUntilBlocked":function(d){return "mientras haya camino adelante"},
"repeatUntilFinish":function(d){return "repetir hasta terminar"},
"soil":function(d){return "tierra"},
"sprout":function(d){return "brote"},
"step":function(d){return "Paso"},
"totalHoney":function(d){return "total de miel"},
"totalNectar":function(d){return "total de néctar"},
"turnLeft":function(d){return "girar a la izquierda"},
"turnRight":function(d){return "girar a la derecha"},
"turnTooltip":function(d){return "Girarme a la izquierda o a la derecha 90 grados."},
"uncheckedCloudError":function(d){return "Asegúrate de revisar todas las nubes para ver si son flores o panales."},
"uncheckedPurpleError":function(d){return "Asegúrate de revisar todas las flores moradas para ver si tienen néctar"},
"whileMsg":function(d){return "mientras"},
"whileTooltip":function(d){return "Repetir las acciones dentro del bloque hasta alcanzar el punto final."},
"word":function(d){return "Encuentra la palabra"},
"wrongCropError":function(d){return "No puedo cosechar ese cultivo desde aquí."},
"yes":function(d){return "Sí"},
"youSpelled":function(d){return "Escribiste"}};