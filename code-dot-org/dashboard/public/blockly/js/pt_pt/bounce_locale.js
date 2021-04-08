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
"basketballLaunchBall":function(d){return "atirar outra bola"},
"basketballLaunchBallTooltip":function(d){return "Atirar uma bola para o jogo."},
"basketballSetPaddle":function(d){return "definir mão"},
"basketballSetPaddleSpeedFast":function(d){return "definir a velocidade da mão como: rápida"},
"basketballSetPaddleSpeedNormal":function(d){return "definir a velocidade da mão como: normal"},
"basketballSetPaddleSpeedRandom":function(d){return "definir a velocidade da mão como: aleatória"},
"basketballSetPaddleSpeedSlow":function(d){return "definir a velocidade da mão como: lenta"},
"basketballSetPaddleSpeedTooltip":function(d){return "Define a velocidade da mão"},
"basketballSetPaddleSpeedVeryFast":function(d){return "definir a velocidade da mão como: muito rápida"},
"basketballSetPaddleSpeedVerySlow":function(d){return "definir a velocidade da mão como: muito lenta"},
"basketballWhenBallMissesPaddle":function(d){return "quando não apanhar a bola"},
"basketballWhenPaddleCollided":function(d){return "quando apanhar a bola"},
"bounceBall":function(d){return "ressaltar a bola"},
"bounceBallTooltip":function(d){return "Fazer ressaltar a bola quando for contra um objeto."},
"continue":function(d){return "Continuar"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "O"},
"doCode":function(d){return "fazer"},
"elseCode":function(d){return "se não"},
"finalLevel":function(d){return "Parabéns! Resolveste o desafio final."},
"heightParameter":function(d){return "altura"},
"ifCode":function(d){return "se"},
"ifPathAhead":function(d){return "se há caminho em frente"},
"ifTooltip":function(d){return "Se há caminho na direção especificada, faz algumas ações."},
"ifelseTooltip":function(d){return "Se houver caminho na direção especificada, executa o primeiro bloco de ações. Se não, executa o segundo bloco de ações."},
"incrementOpponentScore":function(d){return "marcar um ponto do adversário"},
"incrementOpponentScoreTooltip":function(d){return "Adicionar um ponto à pontuação do adversário atual."},
"incrementPlayerScore":function(d){return "marcar um ponto"},
"incrementPlayerScoreTooltip":function(d){return "Adicionar um ponto à pontuação atual do jogador."},
"isWall":function(d){return "isto é uma parede"},
"isWallTooltip":function(d){return "Devolve verdadeiro se houver uma parede aqui"},
"launchBall":function(d){return "lançar nova bola"},
"launchBallTooltip":function(d){return "Lançar uma bola no jogo."},
"makeYourOwn":function(d){return "Cria o teu próprio jogo de pingue-pongue"},
"moveDown":function(d){return "mover para baixo"},
"moveDownTooltip":function(d){return "Mover a raquete para baixo."},
"moveForward":function(d){return "segue em frente"},
"moveForwardTooltip":function(d){return "Segue em frente uma unidade."},
"moveLeft":function(d){return "mover para a esquerda"},
"moveLeftTooltip":function(d){return "Mover a raquete para a esquerda."},
"moveRight":function(d){return "mover para a direita"},
"moveRightTooltip":function(d){return "Mover a raquete para a direita."},
"moveUp":function(d){return "mover para cima"},
"moveUpTooltip":function(d){return "Mover a raquete para cima."},
"nextLevel":function(d){return "Parabéns! Concluíste este desafio."},
"no":function(d){return "Não"},
"noPathAhead":function(d){return "caminho está bloqueado"},
"noPathLeft":function(d){return "Não há caminho para a esquerda"},
"noPathRight":function(d){return "não há caminho para a direita"},
"numBlocksNeeded":function(d){return "Este desafio pode ser resolvido com %1 blocos."},
"pathAhead":function(d){return "caminho em frente"},
"pathLeft":function(d){return "se há caminho para a esquerda"},
"pathRight":function(d){return "se há caminho para a direita"},
"pilePresent":function(d){return "há uma pilha"},
"playSoundBounce":function(d){return "reproduzir som de salto"},
"playSoundCheer":function(d){return "reproduzir som de aplauso"},
"playSoundCrunch":function(d){return "reproduzir som de trituradora"},
"playSoundGoal1":function(d){return "reproduzir som do objetivo 1"},
"playSoundGoal2":function(d){return "reproduzir som do objetivo 2"},
"playSoundHit":function(d){return "reproduzir som de embate"},
"playSoundKick":function(d){return "reproduzir som de embate"},
"playSoundLosePoint":function(d){return "reproduzir som de ponto perdido"},
"playSoundLosePoint2":function(d){return "reproduzir som de ponto perdido 2"},
"playSoundRetro":function(d){return "reproduzir som retro"},
"playSoundRubber":function(d){return "reproduzir som de borracha"},
"playSoundSlap":function(d){return "reproduzir som de chapada"},
"playSoundSlapshot":function(d){return "reproduzir som de lançamento"},
"playSoundSwish":function(d){return "reproduzir som de batida na rede"},
"playSoundTooltip":function(d){return "Tocar o som escolhido."},
"playSoundWhistle":function(d){return "reproduzir som de apito"},
"playSoundWinPoint":function(d){return "reproduzir som de ponto ganho"},
"playSoundWinPoint2":function(d){return "reproduzir som de ponto ganho 2"},
"playSoundWood":function(d){return "reproduzir som de madeira"},
"putdownTower":function(d){return "coloca a torre em baixo"},
"reinfFeedbackMsg":function(d){return "Podes clicar no botão \"Voltar a tentar\" para voltares a jogar o teu jogo."},
"removeSquare":function(d){return "remove o quadrado"},
"repeatUntil":function(d){return "repetir até"},
"repeatUntilBlocked":function(d){return "enquanto houver caminho em frente"},
"repeatUntilFinish":function(d){return "repete até terminar"},
"scoreText":function(d){return "Pontuação: "+bounce_locale.v(d,"playerScore")+" - "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "definir o cenário como: "+bounce_locale.v(d,"background")},
"setBackgroundHardcourt":function(d){return "definir cena de campo de ténis"},
"setBackgroundRandom":function(d){return "definir cena aleatória"},
"setBackgroundRetro":function(d){return "definir cena retro"},
"setBackgroundTooltip":function(d){return "definir a imagem de fundo"},
"setBallHardcourt":function(d){return "definir bola de ténis"},
"setBallRandom":function(d){return "definir bola aleatória"},
"setBallRetro":function(d){return "definir bola retro"},
"setBall":function(d){return "definir a bola como: "+bounce_locale.v(d,"ball")},
"setBallSpeedFast":function(d){return "definir velocidade da bola: rápida"},
"setBallSpeedNormal":function(d){return "definir velocidade da bola: normal"},
"setBallSpeedRandom":function(d){return "definir velocidade da bola: aleatória"},
"setBallSpeedSlow":function(d){return "definir velocidade da bola: lenta"},
"setBallSpeedTooltip":function(d){return "Define a velocidade da bola"},
"setBallSpeedVeryFast":function(d){return "definir velocidade da bola: muito rápida"},
"setBallSpeedVerySlow":function(d){return "definir velocidade da bola: muito lenta"},
"setBallTooltip":function(d){return "Define a imagem da bola"},
"setPaddle":function(d){return "definir a raquete"},
"setPaddleHardcourt":function(d){return "definir raquete: de ténis"},
"setPaddleRandom":function(d){return "definir raquete: aleatória"},
"setPaddleRetro":function(d){return "definir raquete: retro"},
"setPaddleSpeedFast":function(d){return "definir velocidade da raquete: rápida"},
"setPaddleSpeedNormal":function(d){return "definir velocidade da raquete: normal"},
"setPaddleSpeedRandom":function(d){return "definir velocidade da raquete: aleatória"},
"setPaddleSpeedSlow":function(d){return "definir velocidade da raquete: lenta"},
"setPaddleSpeedTooltip":function(d){return "Define a velocidade da raquete"},
"setPaddleSpeedVeryFast":function(d){return "definir velocidade da raquete: muito rápida"},
"setPaddleSpeedVerySlow":function(d){return "definir velocidade da raquete: muito lenta"},
"setPaddleTooltip":function(d){return "Define a imagem da raquete"},
"setPlayer":function(d){return "definir jogador"},
"setPlayerSpeedFast":function(d){return "definir a velocidade do jogador como: rápida"},
"setPlayerSpeedNormal":function(d){return "definir a velocidade do jogador como: normal"},
"setPlayerSpeedRandom":function(d){return "definir a velocidade do jogador como: aleatória"},
"setPlayerSpeedSlow":function(d){return "definir a velocidade do jogador como: lenta"},
"setPlayerSpeedTooltip":function(d){return "Define a velocidade do jogador"},
"setPlayerSpeedVeryFast":function(d){return "definir a velocidade do jogador como: muito rápida"},
"setPlayerSpeedVerySlow":function(d){return "definir a velocidade do jogador como: muito lenta"},
"setTeamTooltip":function(d){return "Define o esquema de cores e o logótipo"},
"setTeam":function(d){return "Definir a equipa como "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Definir uma equipa aleatória"},
"shareBounceTwitter":function(d){return "Vê o jogo de pingue-pongue que eu criei. Fui que o programei no @codeorg"},
"shareBounceTwitterDonor":function(d){return "Consulta o jogo Bounce que construí. (Obrigado/a "+bounce_locale.v(d,"donor")+" por apoiar @codeorg)"},
"shareGame":function(d){return "Partilha o teu jogo:"},
"turnLeft":function(d){return "virar à esquerda"},
"turnRight":function(d){return "virar à direita"},
"turnTooltip":function(d){return "Vira à esquerda ou à direita 90 graus."},
"whenBallInGoal":function(d){return "quando a bola estiver na baliza"},
"whenBallInGoalTooltip":function(d){return "Executar as seguintes ações quando a bola entrar na baliza."},
"whenBallMissesPaddle":function(d){return "quando a bola não tocar na raquete"},
"whenBallMissesPaddleTooltip":function(d){return "Executar as seguintes ações quando a bola não tocar na raquete."},
"whenBallMissesPlayer":function(d){return "quando a bola não acerta no jogador"},
"whenDown":function(d){return "quando clicar seta para baixo"},
"whenDownTooltip":function(d){return "Executar as seguintes ações quando a tecla da seta para baixo for pressionada."},
"whenGameStarts":function(d){return "quando o jogo começa"},
"whenGameStartsTooltip":function(d){return "Executa as ações abaixo quando o jogo começar."},
"whenLeft":function(d){return "quando clicar seta para a esquerda"},
"whenLeftTooltip":function(d){return "Executar as seguintes ações quando a tecla da seta para a esquerda for pressionada."},
"whenPaddleCollided":function(d){return "quando a bola bate na raquete"},
"whenPaddleCollidedTooltip":function(d){return "Executar as seguintes ações quando a bola tocar na raquete."},
"whenPlayerCollided":function(d){return "quando a bola acerta no jogador"},
"whenPlayerCollidedTooltip":function(d){return "Executar as seguintes ações quando a bola acertar no jogador."},
"whenRight":function(d){return "quando clicar seta para a direita"},
"whenRightTooltip":function(d){return "Executar as seguintes ações quando a tecla da seta para a direita for pressionada."},
"whenUp":function(d){return "quando clicar seta para cima"},
"whenUpTooltip":function(d){return "Executar as seguintes ações quando clicar na seta para cima."},
"whenWallCollided":function(d){return "quando a bola bate na parede"},
"whenWallCollidedTooltip":function(d){return "Executar as seguintes ações quando a bola bater na parede."},
"whileMsg":function(d){return "enquanto"},
"whileTooltip":function(d){return "Repete as ações seguintes até a condição de terminação ser alcançada."},
"yes":function(d){return "Sim"}};