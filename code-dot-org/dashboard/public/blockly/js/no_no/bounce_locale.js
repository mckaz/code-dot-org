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
"basketballLaunchBall":function(d){return "kast ny ball"},
"basketballLaunchBallTooltip":function(d){return "Kast en ball inn i spillet."},
"basketballSetPaddle":function(d){return "angi hånd"},
"basketballSetPaddleSpeedFast":function(d){return "sett tilfeldig hastighet på hånd"},
"basketballSetPaddleSpeedNormal":function(d){return "sett normal hastighet på hånd"},
"basketballSetPaddleSpeedRandom":function(d){return "sett tilfeldig hastighet på hånd"},
"basketballSetPaddleSpeedSlow":function(d){return "sett treg hastighet på hånd"},
"basketballSetPaddleSpeedTooltip":function(d){return "Setter hastigheten til hånden"},
"basketballSetPaddleSpeedVeryFast":function(d){return "sett veldig rask hastighet på hånd"},
"basketballSetPaddleSpeedVerySlow":function(d){return "sett veldig treg hastighet på hånd"},
"basketballWhenBallMissesPaddle":function(d){return "når ballen bommer på hånd"},
"basketballWhenPaddleCollided":function(d){return "når ballen treffer hånd"},
"bounceBall":function(d){return "sprett ball"},
"bounceBallTooltip":function(d){return "Sprett en ball mot en ting."},
"continue":function(d){return "Fortsett"},
"dirE":function(d){return "Ø"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "V"},
"doCode":function(d){return "gjør"},
"elseCode":function(d){return "ellers"},
"finalLevel":function(d){return "Gratulerer! Du har løst den siste utfordringen."},
"heightParameter":function(d){return "høyde"},
"ifCode":function(d){return "hvis"},
"ifPathAhead":function(d){return "hvis det er sti foran"},
"ifTooltip":function(d){return "Hvis det er en sti i den angitte retningen, så utfør noen handlinger."},
"ifelseTooltip":function(d){return "Hvis det er en sti i den angitte retningen, så utfør den første blokken med handlinger. Ellers, utfør den andre blokken med handlinger."},
"incrementOpponentScore":function(d){return "Øk motstanderens poeng"},
"incrementOpponentScoreTooltip":function(d){return "Legg til ett poeng til motstanderens poengsum."},
"incrementPlayerScore":function(d){return "score poeng"},
"incrementPlayerScoreTooltip":function(d){return "Legg til ett poeng til spillers poengsum."},
"isWall":function(d){return "er dette en vegg"},
"isWallTooltip":function(d){return "Returnerer sann hvis det er en vegg her"},
"launchBall":function(d){return "kast ut ny ball"},
"launchBallTooltip":function(d){return "Kaster en ny ball inn i spillet."},
"makeYourOwn":function(d){return "Lag ditt eget spill"},
"moveDown":function(d){return "flytt ned"},
"moveDownTooltip":function(d){return "Flytt rekkerten ned."},
"moveForward":function(d){return "gå fremover"},
"moveForwardTooltip":function(d){return "Flytt meg en plass fremover."},
"moveLeft":function(d){return "flytt til venstre"},
"moveLeftTooltip":function(d){return "Flytt rekkerten til venstre."},
"moveRight":function(d){return "flytt til høyre"},
"moveRightTooltip":function(d){return "Flytt rekkerten til høyre."},
"moveUp":function(d){return "flytt opp"},
"moveUpTooltip":function(d){return "Flytt rekkerten opp."},
"nextLevel":function(d){return "Gratulerer! Du har fullført denne utfordringen."},
"no":function(d){return "Nei"},
"noPathAhead":function(d){return "stien er blokkert"},
"noPathLeft":function(d){return "ingen sti til venstre"},
"noPathRight":function(d){return "ingen sti til høyre"},
"numBlocksNeeded":function(d){return "Denne utfordringen kan bli løst med %1 blokker."},
"pathAhead":function(d){return "sti foran"},
"pathLeft":function(d){return "hvis sti til venstre"},
"pathRight":function(d){return "hvis sti til høyre"},
"pilePresent":function(d){return "det er en haug"},
"playSoundBounce":function(d){return "spill sprett lyd"},
"playSoundCheer":function(d){return "spill applaus lyd"},
"playSoundCrunch":function(d){return "spill knas lyd"},
"playSoundGoal1":function(d){return "spill mål 1 lyd"},
"playSoundGoal2":function(d){return "spill mål 2 lyd"},
"playSoundHit":function(d){return "spill treff lyd"},
"playSoundKick":function(d){return "spill spark lyd"},
"playSoundLosePoint":function(d){return "spill mist poeng lyd"},
"playSoundLosePoint2":function(d){return "spill miste poeng 2 lyd"},
"playSoundRetro":function(d){return "spill retro lyd"},
"playSoundRubber":function(d){return "spill gummi lyd"},
"playSoundSlap":function(d){return "spill smekk lyd"},
"playSoundSlapshot":function(d){return "spill smekk lyd"},
"playSoundSwish":function(d){return "spill svisj lyd"},
"playSoundTooltip":function(d){return "Spill den valgte lyden."},
"playSoundWhistle":function(d){return "spill plystre lyd"},
"playSoundWinPoint":function(d){return "spill vinn poeng lyd"},
"playSoundWinPoint2":function(d){return "spill poeng 2 lyd"},
"playSoundWood":function(d){return "spill tre lyd"},
"putdownTower":function(d){return "sett ned tårn"},
"reinfFeedbackMsg":function(d){return "Du kan trykke på \"Try Again\" knappen for å gå tilbake til ditt spill."},
"removeSquare":function(d){return "fjern kvadratet"},
"repeatUntil":function(d){return "gjenta til"},
"repeatUntilBlocked":function(d){return "så lenge det er en sti foran"},
"repeatUntilFinish":function(d){return "gjenta til ferdig"},
"scoreText":function(d){return "Resultat: "+bounce_locale.v(d,"playerScore")+": "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "sett bakgrunn "+bounce_locale.v(d,"background")},
"setBackgroundHardcourt":function(d){return "sett bakgrunn asfalt"},
"setBackgroundRandom":function(d){return "sett bakgrunn tilfeldig"},
"setBackgroundRetro":function(d){return "sett bakgrunn retro"},
"setBackgroundTooltip":function(d){return "Angir bakgrunnsbilde"},
"setBallHardcourt":function(d){return "sett ball basketball"},
"setBallRandom":function(d){return "sett ball tilfeldig"},
"setBallRetro":function(d){return "sett ball retro"},
"setBall":function(d){return "sett ball "+bounce_locale.v(d,"ball")},
"setBallSpeedFast":function(d){return "sett rask hastighet på ball"},
"setBallSpeedNormal":function(d){return "sett normal hastighet på ball"},
"setBallSpeedRandom":function(d){return "sett tilfeldig hastighet på ball"},
"setBallSpeedSlow":function(d){return "sett treg hastighet på ball"},
"setBallSpeedTooltip":function(d){return "Setter hastigheten på ballen"},
"setBallSpeedVeryFast":function(d){return "sett veldig rask hastighet på ball"},
"setBallSpeedVerySlow":function(d){return "sett veldig treg hastighet på ball"},
"setBallTooltip":function(d){return "Setter bildet av ballen"},
"setPaddle":function(d){return "sett rekkert"},
"setPaddleHardcourt":function(d){return "sett rekkert asfalt"},
"setPaddleRandom":function(d){return "sett rekkert tilfeldig"},
"setPaddleRetro":function(d){return "sett rekkert retro"},
"setPaddleSpeedFast":function(d){return "sett rask hastighet på rekkert"},
"setPaddleSpeedNormal":function(d){return "sett normal hastighet på rekkert"},
"setPaddleSpeedRandom":function(d){return "sett tilfeldig hastighet på rekkert"},
"setPaddleSpeedSlow":function(d){return "sett langsom hastighet på rekkert"},
"setPaddleSpeedTooltip":function(d){return "Setter hastigheten på rekkerten"},
"setPaddleSpeedVeryFast":function(d){return "sett veldig rask hastighet på rekkert"},
"setPaddleSpeedVerySlow":function(d){return "sett veldig treg hastighet på rekkert"},
"setPaddleTooltip":function(d){return "Setter bildet av rekkerten"},
"setPlayer":function(d){return "sett spiller"},
"setPlayerSpeedFast":function(d){return "sett høy hastighet på spilleren"},
"setPlayerSpeedNormal":function(d){return "sett normal hastighet på spilleren"},
"setPlayerSpeedRandom":function(d){return "sett tilfeldig hastighet på spilleren"},
"setPlayerSpeedSlow":function(d){return "sett lav hastighet på spilleren"},
"setPlayerSpeedTooltip":function(d){return "Setter hastigheten til spilleren"},
"setPlayerSpeedVeryFast":function(d){return "sett veldig høy hastighet på spilleren"},
"setPlayerSpeedVerySlow":function(d){return "sett veldig lav hastighet på spilleren"},
"setTeamTooltip":function(d){return "Velger logo og farger"},
"setTeam":function(d){return "sett lag "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "sett lag tilfeldig"},
"shareBounceTwitter":function(d){return "Sjekk ut spillet jeg har laget! Jeg laget det selv med @codeorg"},
"shareBounceTwitterDonor":function(d){return "Sjekk ut spillet jeg lagde. (Takk "+bounce_locale.v(d,"donor")+" for støtten til @codeorg #Kodetimen)"},
"shareGame":function(d){return "Del ditt spill:"},
"turnLeft":function(d){return "snu mot venstre"},
"turnRight":function(d){return "snu mot høyre"},
"turnTooltip":function(d){return "Snur meg mot venstre eller høyre med 90 grader."},
"whenBallInGoal":function(d){return "når ballen er i mål"},
"whenBallInGoalTooltip":function(d){return "Gjør det som står nedenfor når en ball treffer målet."},
"whenBallMissesPaddle":function(d){return "når ballen bommer på rekkerten"},
"whenBallMissesPaddleTooltip":function(d){return "Gjør det som står under når en ball bommer på rekkerten."},
"whenBallMissesPlayer":function(d){return "når ballen ikke treffer spiller"},
"whenDown":function(d){return "når pil ned"},
"whenDownTooltip":function(d){return "Gjør det som står nedenfor når pil ned-tasten trykkes."},
"whenGameStarts":function(d){return "Når spillet starter"},
"whenGameStartsTooltip":function(d){return "Utfør handlingene nedenfor når spillet starter."},
"whenLeft":function(d){return "når pil venstre"},
"whenLeftTooltip":function(d){return "Gjør det som står nedenfor når venstre pil-tasten trykkes."},
"whenPaddleCollided":function(d){return "når ball treffer rekkert"},
"whenPaddleCollidedTooltip":function(d){return "Gjør det som står nedenfor når en ball treffer en rekkert."},
"whenPlayerCollided":function(d){return "når ballen treffer spiller"},
"whenPlayerCollidedTooltip":function(d){return "Gjør det som står nedenfor når en ball treffer spilleren."},
"whenRight":function(d){return "når pil høyre"},
"whenRightTooltip":function(d){return "Gjør det som står nedenfor når du trykker piltasten høyre."},
"whenUp":function(d){return "når pil opp"},
"whenUpTooltip":function(d){return "Gjør det som står nedenfor når pil opp-tasten trykkes."},
"whenWallCollided":function(d){return "når ballen treffer veggen"},
"whenWallCollidedTooltip":function(d){return "Gjør det som står nedenfor når en ball treffer en vegg."},
"whileMsg":function(d){return "gjenta hvis"},
"whileTooltip":function(d){return "Gjenta disse handlingene inntil målet er nådd."},
"yes":function(d){return "Ja"}};