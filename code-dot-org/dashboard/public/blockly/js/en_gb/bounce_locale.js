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
"basketballLaunchBall":function(d){return "throw new ball"},
"basketballLaunchBallTooltip":function(d){return "Throw a ball into play."},
"basketballSetPaddle":function(d){return "set hand"},
"basketballSetPaddleSpeedFast":function(d){return "set fast hand speed"},
"basketballSetPaddleSpeedNormal":function(d){return "set normal hand speed"},
"basketballSetPaddleSpeedRandom":function(d){return "set random hand speed"},
"basketballSetPaddleSpeedSlow":function(d){return "set slow hand speed"},
"basketballSetPaddleSpeedTooltip":function(d){return "Sets the speed of the hand"},
"basketballSetPaddleSpeedVeryFast":function(d){return "set very fast hand speed"},
"basketballSetPaddleSpeedVerySlow":function(d){return "set very slow hand speed"},
"basketballWhenBallMissesPaddle":function(d){return "when ball misses hand"},
"basketballWhenPaddleCollided":function(d){return "when ball hits hand"},
"bounceBall":function(d){return "bounce ball"},
"bounceBallTooltip":function(d){return "Bounce a ball off of an object."},
"continue":function(d){return "Continue"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "W"},
"doCode":function(d){return "do"},
"elseCode":function(d){return "else"},
"finalLevel":function(d){return "Congratulations! You have solved the final puzzle."},
"heightParameter":function(d){return "height"},
"ifCode":function(d){return "if"},
"ifPathAhead":function(d){return "if path ahead"},
"ifTooltip":function(d){return "If there is a path in the specified direction, then do some actions."},
"ifelseTooltip":function(d){return "If there is a path in the specified direction, then do the first block of actions. Otherwise, do the second block of actions."},
"incrementOpponentScore":function(d){return "scoreopponentpoint"},
"incrementOpponentScoreTooltip":function(d){return "Adicione um para a pontuação atual do oponente."},
"incrementPlayerScore":function(d){return "pontuação atual"},
"incrementPlayerScoreTooltip":function(d){return "Adiciona um a contagem atual do jogador, por favor."},
"isWall":function(d){return "esta é uma parede"},
"isWallTooltip":function(d){return "Retorne verdadeiro se há uma parede aqui"},
"launchBall":function(d){return "lance nova bola"},
"launchBallTooltip":function(d){return "Lance uma bola no jogo."},
"makeYourOwn":function(d){return "Faça Seu Próprio Jogo Barulhento"},
"moveDown":function(d){return "mova para baixo"},
"moveDownTooltip":function(d){return "Mova a raquete para baixo."},
"moveForward":function(d){return "move forward"},
"moveForwardTooltip":function(d){return "Move me forward one space."},
"moveLeft":function(d){return "mova à esquerda"},
"moveLeftTooltip":function(d){return "Mova a raquete para à esquerda."},
"moveRight":function(d){return "mova à direita"},
"moveRightTooltip":function(d){return "Mova a raquete à direita."},
"moveUp":function(d){return "mova para cima"},
"moveUpTooltip":function(d){return "Mova a raquete para cima."},
"nextLevel":function(d){return "Congratulations! You have completed this puzzle."},
"no":function(d){return "No"},
"noPathAhead":function(d){return "path is blocked"},
"noPathLeft":function(d){return "no path to the left"},
"noPathRight":function(d){return "no path to the right"},
"numBlocksNeeded":function(d){return "This puzzle can be solved with %1 blocks."},
"pathAhead":function(d){return "path ahead"},
"pathLeft":function(d){return "if path to the left"},
"pathRight":function(d){return "if path to the right"},
"pilePresent":function(d){return "there is a pile"},
"playSoundBounce":function(d){return "play bounce sound"},
"playSoundCheer":function(d){return "play cheering sound"},
"playSoundCrunch":function(d){return "toque som de triturar"},
"playSoundGoal1":function(d){return "toque o som no acerto 1"},
"playSoundGoal2":function(d){return "toque o som no acerto 2"},
"playSoundHit":function(d){return "toque som animado"},
"playSoundKick":function(d){return "play kick sound"},
"playSoundLosePoint":function(d){return "toque som ponto perdido"},
"playSoundLosePoint2":function(d){return "toque som ponto perdido 2"},
"playSoundRetro":function(d){return "toque som retro"},
"playSoundRubber":function(d){return "tocar som de borracha"},
"playSoundSlap":function(d){return "tocar som de tapa"},
"playSoundSlapshot":function(d){return "play slapshot sound"},
"playSoundSwish":function(d){return "play net swish sound"},
"playSoundTooltip":function(d){return "Tocar som de escolha."},
"playSoundWhistle":function(d){return "play whistle sound"},
"playSoundWinPoint":function(d){return "tocar som para ponto de vitória"},
"playSoundWinPoint2":function(d){return "tocar som para 2 ponto de vitória"},
"playSoundWood":function(d){return "tocar som de madeira"},
"putdownTower":function(d){return "put down tower"},
"reinfFeedbackMsg":function(d){return "You can press the \"Try again\" button to go back to playing your game."},
"removeSquare":function(d){return "remove square"},
"repeatUntil":function(d){return "repeat until"},
"repeatUntilBlocked":function(d){return "while path ahead"},
"repeatUntilFinish":function(d){return "repeat until finish"},
"scoreText":function(d){return "Pontuação: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "set "+bounce_locale.v(d,"background")+" scene"},
"setBackgroundHardcourt":function(d){return "escolha uma quadra difícil"},
"setBackgroundRandom":function(d){return "escolha randômica de cena"},
"setBackgroundRetro":function(d){return "escolha cena retro"},
"setBackgroundTooltip":function(d){return "Sets the background image"},
"setBallHardcourt":function(d){return "escolha bola difícil"},
"setBallRandom":function(d){return "escolha bola aleatória"},
"setBallRetro":function(d){return "escolha bola retro"},
"setBall":function(d){return "set "+bounce_locale.v(d,"ball")+" ball"},
"setBallSpeedFast":function(d){return "escolha a velocidade rápida da bola"},
"setBallSpeedNormal":function(d){return "escolha a velocidade normal da bola"},
"setBallSpeedRandom":function(d){return "escolha a velocidade aleatória da bola"},
"setBallSpeedSlow":function(d){return "escolha a velocidade de lentidão da bola"},
"setBallSpeedTooltip":function(d){return "Escolha a velocidade da bola"},
"setBallSpeedVeryFast":function(d){return "escolha a velocidade mais rápida da bola"},
"setBallSpeedVerySlow":function(d){return "escolha a velocidade mais lenta da bola"},
"setBallTooltip":function(d){return "Defina a imagem da bola"},
"setPaddle":function(d){return "set paddle"},
"setPaddleHardcourt":function(d){return "escolha a pá mais difícil"},
"setPaddleRandom":function(d){return "escolha a pá aleatória"},
"setPaddleRetro":function(d){return "escolha a pá retro"},
"setPaddleSpeedFast":function(d){return "set fast paddle speed"},
"setPaddleSpeedNormal":function(d){return "set normal paddle speed"},
"setPaddleSpeedRandom":function(d){return "escolha a velocidade randômica da pá"},
"setPaddleSpeedSlow":function(d){return "set slow paddle speed"},
"setPaddleSpeedTooltip":function(d){return "Sets the speed of the paddle"},
"setPaddleSpeedVeryFast":function(d){return "set very fast paddle speed"},
"setPaddleSpeedVerySlow":function(d){return "escolha a velocidade mais lenta da pá"},
"setPaddleTooltip":function(d){return "Escolha a imagem da pá"},
"setPlayer":function(d){return "set player"},
"setPlayerSpeedFast":function(d){return "set fast player speed"},
"setPlayerSpeedNormal":function(d){return "set normal player speed"},
"setPlayerSpeedRandom":function(d){return "set random player speed"},
"setPlayerSpeedSlow":function(d){return "set slow player speed"},
"setPlayerSpeedTooltip":function(d){return "Sets the speed of the player"},
"setPlayerSpeedVeryFast":function(d){return "set very fast player speed"},
"setPlayerSpeedVerySlow":function(d){return "set very slow player speed"},
"setTeamTooltip":function(d){return "Sets the logo and colour scheme"},
"setTeam":function(d){return "Set team "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Set team random"},
"shareBounceTwitter":function(d){return "Check out the Bounce game I made. I wrote it myself with @codeorg"},
"shareBounceTwitterDonor":function(d){return "Check out the Bounce game I made. (Thanks "+bounce_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Share your game:"},
"turnLeft":function(d){return "turn left"},
"turnRight":function(d){return "turn right"},
"turnTooltip":function(d){return "Turns me left or right by 90 degrees."},
"whenBallInGoal":function(d){return "when ball in goal"},
"whenBallInGoalTooltip":function(d){return "Execute the actions below when a ball enters the goal."},
"whenBallMissesPaddle":function(d){return "when ball misses paddle"},
"whenBallMissesPaddleTooltip":function(d){return "Execute the actions below when a ball misses the paddle."},
"whenBallMissesPlayer":function(d){return "when ball misses player"},
"whenDown":function(d){return "when down arrow"},
"whenDownTooltip":function(d){return "Execute the actions below when the down arrow key is pressed."},
"whenGameStarts":function(d){return "when game starts"},
"whenGameStartsTooltip":function(d){return "Execute the actions below when the game starts."},
"whenLeft":function(d){return "when left arrow"},
"whenLeftTooltip":function(d){return "Execute the actions below when the left arrow key is pressed."},
"whenPaddleCollided":function(d){return "when ball hits paddle"},
"whenPaddleCollidedTooltip":function(d){return "Execute the actions below when a ball collides with a paddle."},
"whenPlayerCollided":function(d){return "when ball hits player"},
"whenPlayerCollidedTooltip":function(d){return "Execute the actions below when a ball collides with the player."},
"whenRight":function(d){return "when right arrow"},
"whenRightTooltip":function(d){return "Execute the actions below when the right arrow key is pressed."},
"whenUp":function(d){return "when up arrow"},
"whenUpTooltip":function(d){return "Execute the actions below when the up arrow key is pressed."},
"whenWallCollided":function(d){return "when ball hits wall"},
"whenWallCollidedTooltip":function(d){return "Execute the actions below when a ball collides with a wall."},
"whileMsg":function(d){return "while"},
"whileTooltip":function(d){return "Repeat the enclosed actions until finish point is reached."},
"yes":function(d){return "Yes"}};