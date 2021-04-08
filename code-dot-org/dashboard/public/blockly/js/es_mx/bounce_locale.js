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
"basketballLaunchBall":function(d){return "lanzar bola nueva"},
"basketballLaunchBallTooltip":function(d){return "Pon una bola en juego."},
"basketballSetPaddle":function(d){return "establece la mano"},
"basketballSetPaddleSpeedFast":function(d){return "define la velocidad mas rápida de la mano"},
"basketballSetPaddleSpeedNormal":function(d){return "establece la velocidad normal de la mano"},
"basketballSetPaddleSpeedRandom":function(d){return "establece la velocidad de la mano al azar"},
"basketballSetPaddleSpeedSlow":function(d){return "establece la velocidad lenta de la mano"},
"basketballSetPaddleSpeedTooltip":function(d){return "Establece la velocidad de la mano"},
"basketballSetPaddleSpeedVeryFast":function(d){return "establece la velocidad muy rápida de la mano"},
"basketballSetPaddleSpeedVerySlow":function(d){return "establece la velocidad muy lenta de la mano"},
"basketballWhenBallMissesPaddle":function(d){return "cuando la pelota pierde la mano"},
"basketballWhenPaddleCollided":function(d){return "cuando la pelota golpea la mano"},
"bounceBall":function(d){return "rebota la pelota"},
"bounceBallTooltip":function(d){return "Rebota una pelota contra un objeto."},
"continue":function(d){return "Continuar"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "O"},
"doCode":function(d){return "haz"},
"elseCode":function(d){return "si no"},
"finalLevel":function(d){return "¡Felicitaciones! Ha resuelto el rompecabezas final."},
"heightParameter":function(d){return "altura"},
"ifCode":function(d){return "si"},
"ifPathAhead":function(d){return "si hay un camino adelante"},
"ifTooltip":function(d){return "Si hay un camino en la dirección especificada, entonces haz algunas acciones."},
"ifelseTooltip":function(d){return "Si hay un camino en la dirección especificada, realizar el primer bloque de acciones. De lo contrario, realizar el segundo bloque de acciones."},
"incrementOpponentScore":function(d){return "anota un punto al oponente"},
"incrementOpponentScoreTooltip":function(d){return "Añadir uno al marcador del oponente actual."},
"incrementPlayerScore":function(d){return "ganar un punto"},
"incrementPlayerScoreTooltip":function(d){return "Añade uno al marcador del jugador actual."},
"isWall":function(d){return "¿Es una pared?"},
"isWallTooltip":function(d){return "Regresa verdad si hay un muro aqui"},
"launchBall":function(d){return "lanza una pelota nueva"},
"launchBallTooltip":function(d){return "Pon una pelota en juego."},
"makeYourOwn":function(d){return "Crea tu Propio Juego de Rebotes"},
"moveDown":function(d){return "baja"},
"moveDownTooltip":function(d){return "Baja la paleta."},
"moveForward":function(d){return "avanzar"},
"moveForwardTooltip":function(d){return "Avanzar un espacio."},
"moveLeft":function(d){return "mover a la izquierda"},
"moveLeftTooltip":function(d){return "Mueve la paleta a la izquierda."},
"moveRight":function(d){return "mover a la derecha"},
"moveRightTooltip":function(d){return "Mueve la paleta a la derecha."},
"moveUp":function(d){return "Sube"},
"moveUpTooltip":function(d){return "Sube la paleta."},
"nextLevel":function(d){return "¡Felicitaciones! Has completado este puzzle."},
"no":function(d){return "No"},
"noPathAhead":function(d){return "el camino está bloqueado"},
"noPathLeft":function(d){return "no hay camino a la izquierda"},
"noPathRight":function(d){return "no hay camino a la derecha"},
"numBlocksNeeded":function(d){return "Este puzzle puede resolverse con %1 bloques."},
"pathAhead":function(d){return "camino adelante"},
"pathLeft":function(d){return "si hay camino a la izquierda"},
"pathRight":function(d){return "si hay camino a la derecha"},
"pilePresent":function(d){return "hay una pila"},
"playSoundBounce":function(d){return "Reproducir sonido de rebote"},
"playSoundCheer":function(d){return "suena aplausos"},
"playSoundCrunch":function(d){return "suena un crujido"},
"playSoundGoal1":function(d){return "suena anotaciòn 1"},
"playSoundGoal2":function(d){return "reproducir sonido de meta 2"},
"playSoundHit":function(d){return "reproduce sonido de golpe"},
"playSoundKick":function(d){return "suena la patada"},
"playSoundLosePoint":function(d){return "suena el punto perdido"},
"playSoundLosePoint2":function(d){return "Reproducir sonido punto perdido 2"},
"playSoundRetro":function(d){return "reproducir sonido retro"},
"playSoundRubber":function(d){return "emitir sonido de goma"},
"playSoundSlap":function(d){return "emitir sonido cachetada"},
"playSoundSlapshot":function(d){return "suena una palmada"},
"playSoundSwish":function(d){return "reproduce el sonido del movimiento de red"},
"playSoundTooltip":function(d){return "Reproduce el sonido seleccionado."},
"playSoundWhistle":function(d){return "reproducir silbatazo"},
"playSoundWinPoint":function(d){return "Reproducir sonido de punto ganado"},
"playSoundWinPoint2":function(d){return "reproducir sonido punto 2 ganado"},
"playSoundWood":function(d){return "reproducir crujido de madera"},
"putdownTower":function(d){return "Baja la torre"},
"reinfFeedbackMsg":function(d){return "Puede pulsar el botón \"Inténtalo de nuevo\" para volver a jugar su juego."},
"removeSquare":function(d){return "eliminar cuadrado"},
"repeatUntil":function(d){return "repetir hasta"},
"repeatUntilBlocked":function(d){return "mientras haya camino adelante"},
"repeatUntilFinish":function(d){return "repetir hasta terminar"},
"scoreText":function(d){return "Puntuación: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "crea"+bounce_locale.v(d,"background")+" escena"},
"setBackgroundHardcourt":function(d){return "crea escena de cancha dura"},
"setBackgroundRandom":function(d){return "crea escena al azar"},
"setBackgroundRetro":function(d){return "establece escenario antiguo"},
"setBackgroundTooltip":function(d){return "Establece la imagen de fondo"},
"setBallHardcourt":function(d){return "Establecer bola para pista dura"},
"setBallRandom":function(d){return "elige pelota al azar"},
"setBallRetro":function(d){return "elige pelota retro"},
"setBall":function(d){return "elige "+bounce_locale.v(d,"ball")+" bola"},
"setBallSpeedFast":function(d){return "elige velocidad de bola rápida"},
"setBallSpeedNormal":function(d){return "elige velocidad de bola normal"},
"setBallSpeedRandom":function(d){return "elige al azar la velocidad de bola"},
"setBallSpeedSlow":function(d){return "elige velocidad de bola lenta"},
"setBallSpeedTooltip":function(d){return "Elige la velocidad de la bola"},
"setBallSpeedVeryFast":function(d){return "elige velocidad de bola muy rápida"},
"setBallSpeedVerySlow":function(d){return "elige velocidad de pelota muy lenta"},
"setBallTooltip":function(d){return "Elige la imagen de la pelota"},
"setPaddle":function(d){return "elige la paleta"},
"setPaddleHardcourt":function(d){return "elige paleta para cancha dura"},
"setPaddleRandom":function(d){return "elige paleta al azar"},
"setPaddleRetro":function(d){return "elige paleta retro"},
"setPaddleSpeedFast":function(d){return "elige velocidad de paleta rápida"},
"setPaddleSpeedNormal":function(d){return "elige velocidad de paleta normal"},
"setPaddleSpeedRandom":function(d){return "elige velocidad de paleta al azar"},
"setPaddleSpeedSlow":function(d){return "elige velocidad de paleta lenta"},
"setPaddleSpeedTooltip":function(d){return "Elige la velocidad de la paleta de juego"},
"setPaddleSpeedVeryFast":function(d){return "elige velocidad de paleta muy rápida"},
"setPaddleSpeedVerySlow":function(d){return "elige velocidad de paleta muy lenta"},
"setPaddleTooltip":function(d){return "Elige la imagen de la paleta"},
"setPlayer":function(d){return "establecer el jugador"},
"setPlayerSpeedFast":function(d){return "elige la velocidad rápida para el jugador"},
"setPlayerSpeedNormal":function(d){return "elige la velocidad lenta para el jugador"},
"setPlayerSpeedRandom":function(d){return "elige al azar la velocidad del jugador"},
"setPlayerSpeedSlow":function(d){return "elige la velocidad lenta para el jugador"},
"setPlayerSpeedTooltip":function(d){return "Elige la velocidad del jugador"},
"setPlayerSpeedVeryFast":function(d){return "elige la velocidad rápida para el jugador"},
"setPlayerSpeedVerySlow":function(d){return "elige la velocidad lenta para el jugador"},
"setTeamTooltip":function(d){return "Elige el logo y los colores de la paleta"},
"setTeam":function(d){return "Elige el equipo "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Establece el equipo al azar"},
"shareBounceTwitter":function(d){return "Echa un vistazo al juego Bounce game que he creado. Lo escribí yo mismo con @codeorg"},
"shareBounceTwitterDonor":function(d){return "Conoce el Bounce game que hice. (Gracias "+bounce_locale.v(d,"donor")+" por apoyar @codeorg)"},
"shareGame":function(d){return "Comparte tu juego:"},
"turnLeft":function(d){return "girar a la izquierda"},
"turnRight":function(d){return "girar a la derecha"},
"turnTooltip":function(d){return "Girarme a la izquierda o a la derecha 90 grados."},
"whenBallInGoal":function(d){return "Cuando la pelota esté en la portería"},
"whenBallInGoalTooltip":function(d){return "Ejecuta las instrucciones siguientes cuando la pelota entra en la portería."},
"whenBallMissesPaddle":function(d){return "cuando la paleta no golpea a la pelota"},
"whenBallMissesPaddleTooltip":function(d){return "Ejecuta las instrucciones siguientes cuando la paleta no golpea la pelota."},
"whenBallMissesPlayer":function(d){return "cuando la pelota pierda al jugador"},
"whenDown":function(d){return "cuando se pulse la tecla de flecha hacia abajo"},
"whenDownTooltip":function(d){return "Realiza las instrucciones de abajo cuando se presiona la tecla de fecha hacia abajo."},
"whenGameStarts":function(d){return "cuando el juego comience"},
"whenGameStartsTooltip":function(d){return "Ejecutar las acciones indicadas debajo cuando comience el juego."},
"whenLeft":function(d){return "cuando se pulse la tecla de flecha izquierda"},
"whenLeftTooltip":function(d){return "Ejecuta las acciones, mostradas abajo, cuando se presiona la tecla de flecha izquierda."},
"whenPaddleCollided":function(d){return "cuando la paleta golpea la pelota"},
"whenPaddleCollidedTooltip":function(d){return "Ejecuta las instrucciones siguientes cuando la paleta golpea la pelota."},
"whenPlayerCollided":function(d){return "cuando la pelota le da al jugador"},
"whenPlayerCollidedTooltip":function(d){return "Ejecuta las acciones siguientes cuando una pelota choca con el jugador."},
"whenRight":function(d){return "cuando flecha derecha"},
"whenRightTooltip":function(d){return "Ejecuta las acciones, inferiores, cuando flecha derecha se presiona."},
"whenUp":function(d){return "Cuando flecha arriba"},
"whenUpTooltip":function(d){return "Realiza las instrucciones inferiores con la flecha hacia arriba."},
"whenWallCollided":function(d){return "cuando la pelota golpea la pared"},
"whenWallCollidedTooltip":function(d){return "Ejecuta las instrucciones siguientes cuando la pelota choca con una pared."},
"whileMsg":function(d){return "mientras"},
"whileTooltip":function(d){return "Repetir las acciones dentro del bloque hasta alcanzar el punto final."},
"yes":function(d){return "Sí"}};