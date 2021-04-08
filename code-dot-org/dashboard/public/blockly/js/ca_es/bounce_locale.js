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
"basketballLaunchBall":function(d){return "llençar una pilota"},
"basketballLaunchBallTooltip":function(d){return "Llençar una pilota en joc."},
"basketballSetPaddle":function(d){return "estableix la mà"},
"basketballSetPaddleSpeedFast":function(d){return "estableix velocitat molt ràpida a la mà"},
"basketballSetPaddleSpeedNormal":function(d){return "estableix velocitat normal a la mà "},
"basketballSetPaddleSpeedRandom":function(d){return "estableix velocitat a l'atzar a la mà"},
"basketballSetPaddleSpeedSlow":function(d){return "estableix velocitat lenta a la mà"},
"basketballSetPaddleSpeedTooltip":function(d){return "Estableix velocitat ràpida a la mà"},
"basketballSetPaddleSpeedVeryFast":function(d){return "estableix velocitat molt ràpida a la mà"},
"basketballSetPaddleSpeedVerySlow":function(d){return "estableix velocitat molt lenta a la mà"},
"basketballWhenBallMissesPaddle":function(d){return "quan el jugador perd la mà"},
"basketballWhenPaddleCollided":function(d){return "quan el jugador colpeja la mà"},
"bounceBall":function(d){return "rebot de la pilota"},
"bounceBallTooltip":function(d){return "Botar una pilota contra un objecte."},
"continue":function(d){return "Continuar"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "W"},
"doCode":function(d){return "fes"},
"elseCode":function(d){return "en cas contrari"},
"finalLevel":function(d){return "Felicitats! Has resolt el puzzle final."},
"heightParameter":function(d){return "alçcada"},
"ifCode":function(d){return "si"},
"ifPathAhead":function(d){return "si camí endevant"},
"ifTooltip":function(d){return "Si hi ha un camí en la direcció especificada, fer algunes accions."},
"ifelseTooltip":function(d){return "Si hi ha un camí en la direcció específicada, fer el primer bloc d'accions. En cas contrari, fer el segon bloc d'accions."},
"incrementOpponentScore":function(d){return "punt de puntuació per l'oponent"},
"incrementOpponentScoreTooltip":function(d){return "Sumar u al marcador contrari."},
"incrementPlayerScore":function(d){return "punt"},
"incrementPlayerScoreTooltip":function(d){return "Incrementar en u la puntuació del jugador actual."},
"isWall":function(d){return "és una paret"},
"isWallTooltip":function(d){return "Retorna cert si hi ha una paret"},
"launchBall":function(d){return "llença una nova pilota"},
"launchBallTooltip":function(d){return "llença la pilota al joc"},
"makeYourOwn":function(d){return "Crea el teu propi joc de rebot"},
"moveDown":function(d){return "Desplaça avall"},
"moveDownTooltip":function(d){return "Desplaça la pala cap avall."},
"moveForward":function(d){return "avança"},
"moveForwardTooltip":function(d){return "Mou-me un espai cap endevant."},
"moveLeft":function(d){return "desplaça a l'esquerra"},
"moveLeftTooltip":function(d){return "desplaça la pala a l'esquerra."},
"moveRight":function(d){return "Desplaça a la dreta"},
"moveRightTooltip":function(d){return "Desplaça la pala a la dreta."},
"moveUp":function(d){return "Desplaça amunt"},
"moveUpTooltip":function(d){return "Desplaça la pala cap amunt."},
"nextLevel":function(d){return "Felicitats! Has complert aquest puzzle."},
"no":function(d){return "No"},
"noPathAhead":function(d){return "el camí està bloquejat"},
"noPathLeft":function(d){return "no hi ha camí cap a l'esquerra"},
"noPathRight":function(d){return "no hi ha camí cap a la dreta"},
"numBlocksNeeded":function(d){return "Aquest puzzle pot res resolt amb blocs de %1."},
"pathAhead":function(d){return "camí endevant"},
"pathLeft":function(d){return "si camí cap a l'esquerra"},
"pathRight":function(d){return "si camí cap a la dreta"},
"pilePresent":function(d){return "hi ha un munt"},
"playSoundBounce":function(d){return "reprodueix un so de rebot"},
"playSoundCheer":function(d){return "play cheering sound"},
"playSoundCrunch":function(d){return "reprodueix so de cruixit"},
"playSoundGoal1":function(d){return "Reprodueix so de meta 1"},
"playSoundGoal2":function(d){return "Reprodueix so de meta 2"},
"playSoundHit":function(d){return "Reprodueix so de xoc"},
"playSoundKick":function(d){return "play kick sound"},
"playSoundLosePoint":function(d){return "reprodueix so de pèrdua de punt"},
"playSoundLosePoint2":function(d){return "reprodueix so de pèrdua de punt 2"},
"playSoundRetro":function(d){return "reprodueix so retro"},
"playSoundRubber":function(d){return "reprodueix el so de goma"},
"playSoundSlap":function(d){return "reprodueix so de bufetada"},
"playSoundSlapshot":function(d){return "play slapshot sound"},
"playSoundSwish":function(d){return "play net swish sound"},
"playSoundTooltip":function(d){return "Reproduir el so triat."},
"playSoundWhistle":function(d){return "play whistle sound"},
"playSoundWinPoint":function(d){return "reprodueix so de punt de victòria"},
"playSoundWinPoint2":function(d){return "reprodueix so de punt de victòria 2"},
"playSoundWood":function(d){return "reprodueix so de fusta"},
"putdownTower":function(d){return "Posa la torre"},
"reinfFeedbackMsg":function(d){return "Pots clicar el botó de \"Try again\" per tornar a començar"},
"removeSquare":function(d){return "elimina el quadrat"},
"repeatUntil":function(d){return "repeteix fins que"},
"repeatUntilBlocked":function(d){return "de mentres, camí cap endevant"},
"repeatUntilFinish":function(d){return "repeteix fins a acabar"},
"scoreText":function(d){return "Puntuació: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "set "+bounce_locale.v(d,"background")+" scene"},
"setBackgroundHardcourt":function(d){return "estableix l'escena de pista de tennis dura"},
"setBackgroundRandom":function(d){return "estableix l'escenari a l'atzar"},
"setBackgroundRetro":function(d){return "estableix l'escena retro"},
"setBackgroundTooltip":function(d){return "Estableix l'imatge de l'escena"},
"setBallHardcourt":function(d){return "estableix pilota de pista dura"},
"setBallRandom":function(d){return "estableix pilota a l'atzar"},
"setBallRetro":function(d){return "estableix pilota retro"},
"setBall":function(d){return "set "+bounce_locale.v(d,"ball")+" ball"},
"setBallSpeedFast":function(d){return "estableix a ràpida la velocitat de la pilota"},
"setBallSpeedNormal":function(d){return "estableix a normal la velocitat de la pilota"},
"setBallSpeedRandom":function(d){return "fixeu al atzar la velocitat de la pilota"},
"setBallSpeedSlow":function(d){return "estableix a lenta la velocitat de la pilota"},
"setBallSpeedTooltip":function(d){return "Estableix la velocitat de la pilota"},
"setBallSpeedVeryFast":function(d){return "estableix a molt ràpida la velocitat de la pilota"},
"setBallSpeedVerySlow":function(d){return "fixeu a molt lent la velocitat de pilota"},
"setBallTooltip":function(d){return "Estableix l'imatge de la pilota"},
"setPaddle":function(d){return "establir paleta"},
"setPaddleHardcourt":function(d){return "estableix pala de pista dura"},
"setPaddleRandom":function(d){return "estableix la pala a l'atzar"},
"setPaddleRetro":function(d){return "estableix pala retro"},
"setPaddleSpeedFast":function(d){return "estableix la velocitat de la pala a ràpida"},
"setPaddleSpeedNormal":function(d){return "estableix la velocitat de la pala a normal"},
"setPaddleSpeedRandom":function(d){return "estableix la velocitat de la pala a aleatòria"},
"setPaddleSpeedSlow":function(d){return "estableix la velocitat de la pala a lenta"},
"setPaddleSpeedTooltip":function(d){return "Estableix la velocitat de la pala"},
"setPaddleSpeedVeryFast":function(d){return "estableix la velocitat de la pala a molt ràpida"},
"setPaddleSpeedVerySlow":function(d){return "estableix la velocitat de la pala a molt lenta"},
"setPaddleTooltip":function(d){return "Estableix la imatge de la pala"},
"setPlayer":function(d){return "estableix el jugador"},
"setPlayerSpeedFast":function(d){return "set fast player speed"},
"setPlayerSpeedNormal":function(d){return "set normal player speed"},
"setPlayerSpeedRandom":function(d){return "set random player speed"},
"setPlayerSpeedSlow":function(d){return "set slow player speed"},
"setPlayerSpeedTooltip":function(d){return "Sets the speed of the player"},
"setPlayerSpeedVeryFast":function(d){return "set very fast player speed"},
"setPlayerSpeedVerySlow":function(d){return "set very slow player speed"},
"setTeamTooltip":function(d){return "Sets the logo and color scheme"},
"setTeam":function(d){return "Set team "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Set team random"},
"shareBounceTwitter":function(d){return "Mira el Joc de rebot que he fet. L'he escrit jo mateix amb @codeorg"},
"shareBounceTwitterDonor":function(d){return "Check out the Bounce game I made. (Thanks "+bounce_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Comparteix el teu joc:"},
"turnLeft":function(d){return "gira a l'esquerra"},
"turnRight":function(d){return "gira a la dreta"},
"turnTooltip":function(d){return "Gira'm 90 graus cap a l'esquerra o cap a la dreta."},
"whenBallInGoal":function(d){return "quan una pilota està a la meta"},
"whenBallInGoalTooltip":function(d){return "Executa les accions de sota quan una pilota entra a la meta."},
"whenBallMissesPaddle":function(d){return "quan la pilota erra la pala"},
"whenBallMissesPaddleTooltip":function(d){return "Executar les accions de sota quan una pilota erra la pala."},
"whenBallMissesPlayer":function(d){return "when ball misses player"},
"whenDown":function(d){return "quan tecla cap avall"},
"whenDownTooltip":function(d){return "Executar les accions de sota quan es premi la tecla cap avall."},
"whenGameStarts":function(d){return "quan s'inicia el joc"},
"whenGameStartsTooltip":function(d){return "Executar les accions de sota quan s'inicia el joc."},
"whenLeft":function(d){return "Quan tecla a l'esquerra"},
"whenLeftTooltip":function(d){return "Executar les accions  de sota quan es premi la tecla a l'esquerra."},
"whenPaddleCollided":function(d){return "Quan la bola toca la pala"},
"whenPaddleCollidedTooltip":function(d){return "Executar les accions de sota quan una pilota toca una pala."},
"whenPlayerCollided":function(d){return "quan la pilota toca un jugador"},
"whenPlayerCollidedTooltip":function(d){return "Executa les següents accions quan una bola toca a un jugador."},
"whenRight":function(d){return "quan tecla a la dreta"},
"whenRightTooltip":function(d){return "Executar les accions de sota quan es premi la tecla a la dreta."},
"whenUp":function(d){return "Quan tecla cap amunt"},
"whenUpTooltip":function(d){return "Executar les accions de sota quan es premi la tecla cap amunt."},
"whenWallCollided":function(d){return "Quan la bola colpeja la paret"},
"whenWallCollidedTooltip":function(d){return "Executar les accions de sota quan una pilota colpeja una paret."},
"whileMsg":function(d){return "mentres"},
"whileTooltip":function(d){return "Repetiu les accions tancades fins que s'arribi al punt final."},
"yes":function(d){return "Sí"}};