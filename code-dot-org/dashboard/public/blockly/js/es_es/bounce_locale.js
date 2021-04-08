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
"basketballLaunchBall":function(d){return "lanzar nueva bola"},
"basketballLaunchBallTooltip":function(d){return "Lanzar una bola en juego."},
"basketballSetPaddle":function(d){return "establecer mano"},
"basketballSetPaddleSpeedFast":function(d){return "establecer velocidad rápida de la mano"},
"basketballSetPaddleSpeedNormal":function(d){return "establecer velocidad normal de la mano"},
"basketballSetPaddleSpeedRandom":function(d){return "establecer velocidad aleatoria de la mano"},
"basketballSetPaddleSpeedSlow":function(d){return "establecer velocidad lenta de la mano"},
"basketballSetPaddleSpeedTooltip":function(d){return "Establecer la velocidad de la mano"},
"basketballSetPaddleSpeedVeryFast":function(d){return "establecer velocidad muy rápida de la mano"},
"basketballSetPaddleSpeedVerySlow":function(d){return "establecer velocidad muy lenta de la mano"},
"basketballWhenBallMissesPaddle":function(d){return "cuando la bola pierde la mano"},
"basketballWhenPaddleCollided":function(d){return "cuando la bola golpea la mano"},
"bounceBall":function(d){return "Rebotar pelota"},
"bounceBallTooltip":function(d){return "Rebotar una pelota contra un objeto."},
"continue":function(d){return "Continuar"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "O"},
"doCode":function(d){return "haz"},
"elseCode":function(d){return "si no"},
"finalLevel":function(d){return "¡ Felicidades! Ha resuelto el rompecabezas final."},
"heightParameter":function(d){return "altura"},
"ifCode":function(d){return "si"},
"ifPathAhead":function(d){return "si hay un camino delante"},
"ifTooltip":function(d){return "Si hay un camino en la dirección especificada, hacer algunas acciones."},
"ifelseTooltip":function(d){return "Si hay un camino en la dirección especificada, hacer el primer bloque de acciones. De lo contrario, hacer el segundo bloque de acciones."},
"incrementOpponentScore":function(d){return "Anota un punto al oponente"},
"incrementOpponentScoreTooltip":function(d){return "Añadir uno a la puntuación actual del oponente."},
"incrementPlayerScore":function(d){return "Aumentar puntuación"},
"incrementPlayerScoreTooltip":function(d){return "Añadir uno a la puntuación actual del jugador."},
"isWall":function(d){return "¿Es esto una pared?"},
"isWallTooltip":function(d){return "Devolver si hay un muro"},
"launchBall":function(d){return "lanzar nueva pelota"},
"launchBallTooltip":function(d){return "Lanza una pelota en el juego."},
"makeYourOwn":function(d){return "Crea tu propio Juego de rebotes"},
"moveDown":function(d){return "Bajar"},
"moveDownTooltip":function(d){return "Mover la raqueta hacia abajo."},
"moveForward":function(d){return "avanzar"},
"moveForwardTooltip":function(d){return "Avanzar un espacio."},
"moveLeft":function(d){return "mover hacia la izquierda"},
"moveLeftTooltip":function(d){return "Mover la raqueta a la izquierda."},
"moveRight":function(d){return "mover hacia la derecha"},
"moveRightTooltip":function(d){return "Mover la raqueta a la derecha."},
"moveUp":function(d){return "mueva hacia arriba"},
"moveUpTooltip":function(d){return "Mover la raqueta hacia arriba."},
"nextLevel":function(d){return "¡Felicidades! Has completado este puzzle."},
"no":function(d){return "No"},
"noPathAhead":function(d){return "el camino está bloqueado"},
"noPathLeft":function(d){return "no hay camino a la izquierda"},
"noPathRight":function(d){return "no hay camino a la derecha"},
"numBlocksNeeded":function(d){return "Este puzzle puede resolverse con %1 bloques."},
"pathAhead":function(d){return "camino hacia adelante"},
"pathLeft":function(d){return "si hay camino a la izquierda"},
"pathRight":function(d){return "si hay camino a la derecha"},
"pilePresent":function(d){return "hay una pila"},
"playSoundBounce":function(d){return "Reproducir sonido de rebote"},
"playSoundCheer":function(d){return "reproducir sonido de aplausos"},
"playSoundCrunch":function(d){return "reproducir sonido de crujido"},
"playSoundGoal1":function(d){return "reproducir sonido meta 1"},
"playSoundGoal2":function(d){return "reproducir sonido meta 2"},
"playSoundHit":function(d){return "reproducir sonido golpe"},
"playSoundKick":function(d){return "reproducir sonido de golpe"},
"playSoundLosePoint":function(d){return "Reproducir sonido punto perdido"},
"playSoundLosePoint2":function(d){return "Reproducir sonido punto perdido 2"},
"playSoundRetro":function(d){return "reproducir sonido retroceder"},
"playSoundRubber":function(d){return "emitir sonido de goma"},
"playSoundSlap":function(d){return "emitir sonido de cachetada"},
"playSoundSlapshot":function(d){return "reproducir sonido de palmada"},
"playSoundSwish":function(d){return "reproducir sonido de movimiento de red"},
"playSoundTooltip":function(d){return "Reproduce el sonido seleccionado."},
"playSoundWhistle":function(d){return "reproducir sonido de pito"},
"playSoundWinPoint":function(d){return "Reproducir sonido punto ganado"},
"playSoundWinPoint2":function(d){return "Reproducir sonido punto ganado 2"},
"playSoundWood":function(d){return "Reproducir sonido de madera"},
"putdownTower":function(d){return "poner en el suelo la torre"},
"reinfFeedbackMsg":function(d){return "Puede pulsar el botón \"Inténtalo de nuevo\" para volver a jugar su juego."},
"removeSquare":function(d){return "elimina cuadrado"},
"repeatUntil":function(d){return "repetir hasta"},
"repeatUntilBlocked":function(d){return "mientras haya camino delante"},
"repeatUntilFinish":function(d){return "repetir hasta terminar"},
"scoreText":function(d){return "Puntuación: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "establecer"+bounce_locale.v(d,"background")+" escena"},
"setBackgroundHardcourt":function(d){return "Establecer escena en cancha dura"},
"setBackgroundRandom":function(d){return "Establecer escena al azar"},
"setBackgroundRetro":function(d){return "Establecer escena retro"},
"setBackgroundTooltip":function(d){return "Establece la imagen de fondo"},
"setBallHardcourt":function(d){return "establecer bola para pista de tenis dura"},
"setBallRandom":function(d){return "Establecer pelota al azar"},
"setBallRetro":function(d){return "Establecer retroceso de pelota"},
"setBall":function(d){return "establecer"+bounce_locale.v(d,"ball")+" bola"},
"setBallSpeedFast":function(d){return "Establecer velocidad de pelota rápida"},
"setBallSpeedNormal":function(d){return "Establecer velocidad de pelota normal"},
"setBallSpeedRandom":function(d){return "Establecer velocidad de pelota al azar"},
"setBallSpeedSlow":function(d){return "Establecer velocidad de pelota lenta"},
"setBallSpeedTooltip":function(d){return "Establece la velocidad de la pelota"},
"setBallSpeedVeryFast":function(d){return "Establecer velocidad de pelota muy rápida"},
"setBallSpeedVerySlow":function(d){return "Establecer velocidad de pelota muy lenta"},
"setBallTooltip":function(d){return "Establece la imagen de la pelota"},
"setPaddle":function(d){return "establecer paleta"},
"setPaddleHardcourt":function(d){return "Establecer raqueta para cancha dura"},
"setPaddleRandom":function(d){return "Establecer raqueta al azar"},
"setPaddleRetro":function(d){return "Establecer retroceso de raqueta"},
"setPaddleSpeedFast":function(d){return "Establecer velocidad de raqueta rápida"},
"setPaddleSpeedNormal":function(d){return "Establecer velocidad de raqueta normal"},
"setPaddleSpeedRandom":function(d){return "Establecer velocidad de raqueta al azar"},
"setPaddleSpeedSlow":function(d){return "Establecer velocidad de raqueta lenta"},
"setPaddleSpeedTooltip":function(d){return "Establece la velocidad de la raqueta de juego"},
"setPaddleSpeedVeryFast":function(d){return "Establecer velocidad de raqueta muy rápida"},
"setPaddleSpeedVerySlow":function(d){return "Establecer velocidad de raqueta muy lenta"},
"setPaddleTooltip":function(d){return "Establece la imagen de la raqueta"},
"setPlayer":function(d){return "establecer el jugador"},
"setPlayerSpeedFast":function(d){return "establecer la velocidad del jugador a rápida"},
"setPlayerSpeedNormal":function(d){return "establecer  la velocidad del jugador a normal"},
"setPlayerSpeedRandom":function(d){return "establecer velocidad a aleatoria"},
"setPlayerSpeedSlow":function(d){return "establecer velocidad del jugador a lenta"},
"setPlayerSpeedTooltip":function(d){return "Establece la velocidad del jugador"},
"setPlayerSpeedVeryFast":function(d){return "establecer velocidad a muy rápida"},
"setPlayerSpeedVerySlow":function(d){return "establecer la velocidad del jugador a muy lento"},
"setTeamTooltip":function(d){return "Establece el logo y la paleta de colores"},
"setTeam":function(d){return "Añadir al equipo "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Añadir a equipo aleatorio"},
"shareBounceTwitter":function(d){return "Echa un vistazo al juego de Rebote que he creado. Lo escribí yo mismo con @codeorg"},
"shareBounceTwitterDonor":function(d){return "Mira el juego Bounce que hice. (Gracias "+bounce_locale.v(d,"donor")+" por apoyar a @codeorg)"},
"shareGame":function(d){return "Comparte tu juego:"},
"turnLeft":function(d){return "girar a la izquierda"},
"turnRight":function(d){return "girar a la derecha"},
"turnTooltip":function(d){return "Me gira a la izquierda o a la derecha 90 grados."},
"whenBallInGoal":function(d){return "Cuando la pelota esté en la portería"},
"whenBallInGoalTooltip":function(d){return "Ejecuta las instrucciones siguientes cuando la pelota entre en la portería."},
"whenBallMissesPaddle":function(d){return "cuando la raqueta no golpea a la pelota"},
"whenBallMissesPaddleTooltip":function(d){return "Ejecuta las instrucciones siguientes cuando la raqueta no golpee la pelota."},
"whenBallMissesPlayer":function(d){return "cuando la pelota no le da al jugador"},
"whenDown":function(d){return "cuando se pulse la tecla de flecha hacia abajo"},
"whenDownTooltip":function(d){return "Realiza las instrucciones de abajo cuando se presiona la tecla de fecha hacia abajo."},
"whenGameStarts":function(d){return "cuando el juego comienza"},
"whenGameStartsTooltip":function(d){return "Ejecutar las acciones siguientes cuando empieza el juego."},
"whenLeft":function(d){return "cuando se pulse la tecla de flecha izquierda"},
"whenLeftTooltip":function(d){return "Ejecuta las acciones, mostradas abajo, cuando se presiona la tecla de flecha izquierda."},
"whenPaddleCollided":function(d){return "cuando la raqueta golpea la pelota"},
"whenPaddleCollidedTooltip":function(d){return "Ejecuta las instrucciones siguientes cuando la raqueta golpea la pelota."},
"whenPlayerCollided":function(d){return "cuando la pelota le da al jugador"},
"whenPlayerCollidedTooltip":function(d){return "Ejecuta las acciones siguientes cuando una bola choca con el jugador."},
"whenRight":function(d){return "con la tecla flecha derecha"},
"whenRightTooltip":function(d){return "Ejecuta las acciones, mostradas debajo, cuando se pulsa la tecla de flecha derecha."},
"whenUp":function(d){return "con flecha arriba"},
"whenUpTooltip":function(d){return "Realiza las instrucciones de abajo cuando se pulsa la tecla de fecha hacia arriba."},
"whenWallCollided":function(d){return "cuando la pelota golpea la pared"},
"whenWallCollidedTooltip":function(d){return "Ejecuta las instrucciones siguientes cuando la pelota choca con una pared."},
"whileMsg":function(d){return "mientras"},
"whileTooltip":function(d){return "Repetir las acciones dentro del bloque hasta alcanzar el punto final."},
"yes":function(d){return "Sí"}};