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
"basketballLaunchBall":function(d){return "baci novu loptu"},
"basketballLaunchBallTooltip":function(d){return "Baci loptu u igru."},
"basketballSetPaddle":function(d){return "postavi ruku"},
"basketballSetPaddleSpeedFast":function(d){return "set fast hand speed"},
"basketballSetPaddleSpeedNormal":function(d){return "set normal hand speed"},
"basketballSetPaddleSpeedRandom":function(d){return "set random hand speed"},
"basketballSetPaddleSpeedSlow":function(d){return "set slow hand speed"},
"basketballSetPaddleSpeedTooltip":function(d){return "Sets the speed of the hand"},
"basketballSetPaddleSpeedVeryFast":function(d){return "set very fast hand speed"},
"basketballSetPaddleSpeedVerySlow":function(d){return "set very slow hand speed"},
"basketballWhenBallMissesPaddle":function(d){return "when ball misses hand"},
"basketballWhenPaddleCollided":function(d){return "when ball hits hand"},
"bounceBall":function(d){return "odskakanje loptice"},
"bounceBallTooltip":function(d){return "Odskoči lopticu od objekta."},
"continue":function(d){return "Nastavi"},
"dirE":function(d){return "Istok"},
"dirN":function(d){return "Sjever"},
"dirS":function(d){return "Jug"},
"dirW":function(d){return "Zapad"},
"doCode":function(d){return "uradi"},
"elseCode":function(d){return "inače"},
"finalLevel":function(d){return "Čestitamo ! Riješili ste posljednji zadatak."},
"heightParameter":function(d){return "visina"},
"ifCode":function(d){return "ako"},
"ifPathAhead":function(d){return "ako je put ispred"},
"ifTooltip":function(d){return "Ako staza ide u zadanom smjeru, onda uradi neke akcije."},
"ifelseTooltip":function(d){return "Ako staza vodi u zadanom smjeru, onda uradi prvu grupu akcija, a inače uradi drugu grupu akcija."},
"incrementOpponentScore":function(d){return "dodaj bod protivniku"},
"incrementOpponentScoreTooltip":function(d){return "Dodaj jedan protivničkim bodovima."},
"incrementPlayerScore":function(d){return "dodaj bod"},
"incrementPlayerScoreTooltip":function(d){return "Povećaj broj bodova trenutnom igraču za jedan."},
"isWall":function(d){return "da li je ovo zid"},
"isWallTooltip":function(d){return "Vraća \"istinito\" ako je ovdje zid"},
"launchBall":function(d){return "Pusti novu loptu"},
"launchBallTooltip":function(d){return "Pusti novu loptu u igru."},
"makeYourOwn":function(d){return "Napravi svoju Bounce Game"},
"moveDown":function(d){return "pomakni dolje"},
"moveDownTooltip":function(d){return "Pomakni reket dolje."},
"moveForward":function(d){return "idi naprijed"},
"moveForwardTooltip":function(d){return "Pomakni me naprijed za jedno polje."},
"moveLeft":function(d){return "pomakni lijevo"},
"moveLeftTooltip":function(d){return "Pomakni reket u lijevo."},
"moveRight":function(d){return "pomakni desno"},
"moveRightTooltip":function(d){return "Pomakni reket u desno."},
"moveUp":function(d){return "pomakni gore"},
"moveUpTooltip":function(d){return "Pomakni reket gore."},
"nextLevel":function(d){return "Čestitamo! Ovaj zadatak je riješen."},
"no":function(d){return "Ne"},
"noPathAhead":function(d){return "staza je blokirana"},
"noPathLeft":function(d){return "s lijeve strane nema staze"},
"noPathRight":function(d){return "s desne strane nema staze"},
"numBlocksNeeded":function(d){return "Ovaj zadatak se može riješiti sa %1 blokova."},
"pathAhead":function(d){return "staza je ispred"},
"pathLeft":function(d){return "ako je staza lijevo"},
"pathRight":function(d){return "ako je staza desno"},
"pilePresent":function(d){return "ovdje je hrpa"},
"playSoundBounce":function(d){return "pusti zvuk odskakanja"},
"playSoundCheer":function(d){return "pusti zvuk navijanja"},
"playSoundCrunch":function(d){return "pokreni zvuk krckanja"},
"playSoundGoal1":function(d){return "pokreni zvuk cilja 1"},
"playSoundGoal2":function(d){return "pokreni zvuk cilja 2"},
"playSoundHit":function(d){return "pokreni zvuk udara"},
"playSoundKick":function(d){return "pusti zvuk udarca"},
"playSoundLosePoint":function(d){return "pokreni zvuk gubitka boda"},
"playSoundLosePoint2":function(d){return "pokreni zvuk izgubljenog boda 2"},
"playSoundRetro":function(d){return "pokreni retro zvuk"},
"playSoundRubber":function(d){return "pokreni zvuk gume"},
"playSoundSlap":function(d){return "pokreni zvuk pljeskanja"},
"playSoundSlapshot":function(d){return "play slapshot sound"},
"playSoundSwish":function(d){return "play net swish sound"},
"playSoundTooltip":function(d){return "Pusti odrabrani zvuk."},
"playSoundWhistle":function(d){return "pusti zvuk zvižduka"},
"playSoundWinPoint":function(d){return "pokreni zvuk osvojenog poena"},
"playSoundWinPoint2":function(d){return "pokreni zvuk 2 za osvojeni poen"},
"playSoundWood":function(d){return "pokreni zvuk drveta"},
"putdownTower":function(d){return "spusti kulu"},
"reinfFeedbackMsg":function(d){return "Možeš pritisnuti gumb \"Pokušaj ponovno\" i vratiti se igrati svoju igru."},
"removeSquare":function(d){return "ukloni kvadrat"},
"repeatUntil":function(d){return "ponavljaj dok ne bude"},
"repeatUntilBlocked":function(d){return "dok je put ispred"},
"repeatUntilFinish":function(d){return "ponavljaj dok ne završiš"},
"scoreText":function(d){return "Bodovi: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "set "+bounce_locale.v(d,"background")+" scene"},
"setBackgroundHardcourt":function(d){return "postavi scenu s tvrdom podlogom"},
"setBackgroundRandom":function(d){return "postavi nasumičnu scenu"},
"setBackgroundRetro":function(d){return "postavi retro scenu"},
"setBackgroundTooltip":function(d){return "Postavlja pozadinsku sliku"},
"setBallHardcourt":function(d){return "postavi loptu za tvrdu podlogu"},
"setBallRandom":function(d){return "postavi nasumičnu loptu"},
"setBallRetro":function(d){return "postavi staromodnu loptu"},
"setBall":function(d){return "set "+bounce_locale.v(d,"ball")+" ball"},
"setBallSpeedFast":function(d){return "postavi brzu loptu"},
"setBallSpeedNormal":function(d){return "postavi loptu normalne brzine"},
"setBallSpeedRandom":function(d){return "postavi nasumičnu brzinu lopte"},
"setBallSpeedSlow":function(d){return "postavi sporu loptu"},
"setBallSpeedTooltip":function(d){return "Postavlja brzinu lopte"},
"setBallSpeedVeryFast":function(d){return "postavi veoma brzu loptu"},
"setBallSpeedVerySlow":function(d){return "postavi vrlo sporu loptu"},
"setBallTooltip":function(d){return "Postavlja sliku lopte"},
"setPaddle":function(d){return "set paddle"},
"setPaddleHardcourt":function(d){return "postavi reket za tvrdu podlogu"},
"setPaddleRandom":function(d){return "postavi slučajno odabran reket"},
"setPaddleRetro":function(d){return "postavi staromodni reket"},
"setPaddleSpeedFast":function(d){return "postavi veliku brzinu reketa"},
"setPaddleSpeedNormal":function(d){return "postavi brzinu reketa na normalno"},
"setPaddleSpeedRandom":function(d){return "postavi slučajno odabranu brzinu reketa"},
"setPaddleSpeedSlow":function(d){return "postavi brzinu reketa na sporo"},
"setPaddleSpeedTooltip":function(d){return "Postavlja brzinu reketa"},
"setPaddleSpeedVeryFast":function(d){return "postavi vrlo veliku brzinu reketa"},
"setPaddleSpeedVerySlow":function(d){return "postavi brzinu reketa na vrlo sporo"},
"setPaddleTooltip":function(d){return "Postavi sliku reketa"},
"setPlayer":function(d){return "postavi izgled igrača"},
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
"shareBounceTwitter":function(d){return "Provjeri igru Odskakanja koju sam napravio sam uz pomoć @codeorg"},
"shareBounceTwitterDonor":function(d){return "Check out the Bounce game I made. (Thanks "+bounce_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Podijeli svoju igru:"},
"turnLeft":function(d){return "okreni lijevo"},
"turnRight":function(d){return "okreni desno"},
"turnTooltip":function(d){return "Okreće me lijevo ili desno za 90 stepeni."},
"whenBallInGoal":function(d){return "kada je lopta u golu"},
"whenBallInGoalTooltip":function(d){return "Kad lopta uđe u gol, izvrši dole navedene akcije."},
"whenBallMissesPaddle":function(d){return "kada lopta promaši reket"},
"whenBallMissesPaddleTooltip":function(d){return "Kad lopta promaši reket, izvrši dolje navedene akcije."},
"whenBallMissesPlayer":function(d){return "kada lopta promaši igrača"},
"whenDown":function(d){return "kad se pritisne strelica prema dolje"},
"whenDownTooltip":function(d){return "Izvrši dolje navedene akcije kada se pritisne tipka prema dolje."},
"whenGameStarts":function(d){return "na početku igre"},
"whenGameStartsTooltip":function(d){return "Izvršava dolje navedene radnje kada igra započne."},
"whenLeft":function(d){return "kada se pritisne strelica prema lijevo"},
"whenLeftTooltip":function(d){return "Izvrši sljedeće akcije kad se pritisne strelica prema lijevo."},
"whenPaddleCollided":function(d){return "kada lopta pogodi reket"},
"whenPaddleCollidedTooltip":function(d){return "Kad lopta pogodi reket, izvrši dolje navedene akcije."},
"whenPlayerCollided":function(d){return "kada lopta pogodi igrača"},
"whenPlayerCollidedTooltip":function(d){return "Execute the actions below when a ball collides with the player."},
"whenRight":function(d){return "kada se pritisne strelica prema desno"},
"whenRightTooltip":function(d){return "Izvrši sljedeće akcije kad se pritisne strelica prema desno."},
"whenUp":function(d){return "kadase pritisne strelica prema gore"},
"whenUpTooltip":function(d){return "Izvrši sljedeće akcije kad se pritisne strelica prema gore."},
"whenWallCollided":function(d){return "kada lopta pogodi zid"},
"whenWallCollidedTooltip":function(d){return "Kad lopta udari u zid, izvrši dolje navedene akcije."},
"whileMsg":function(d){return "dok"},
"whileTooltip":function(d){return "Ponavlja umetnute akcije dok se ne dosegne zadani cilj."},
"yes":function(d){return "Da"}};