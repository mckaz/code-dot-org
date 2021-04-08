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
"basketballLaunchBall":function(d){return "nieuwe bal gooien"},
"basketballLaunchBallTooltip":function(d){return "Gooi een bal in het spel."},
"basketballSetPaddle":function(d){return "hand instellen"},
"basketballSetPaddleSpeedFast":function(d){return "hoge snelheid hand instellen"},
"basketballSetPaddleSpeedNormal":function(d){return "normale snelheid hand instellen"},
"basketballSetPaddleSpeedRandom":function(d){return "willekeurige snelheid hand instellen"},
"basketballSetPaddleSpeedSlow":function(d){return "lage snelheid hand instellen"},
"basketballSetPaddleSpeedTooltip":function(d){return "Stelt de snelheid van de hand in"},
"basketballSetPaddleSpeedVeryFast":function(d){return "zeer hoge snelheid hand instellen"},
"basketballSetPaddleSpeedVerySlow":function(d){return "zeer lage snelheid hand instellen"},
"basketballWhenBallMissesPaddle":function(d){return "wanneer bal hand mist"},
"basketballWhenPaddleCollided":function(d){return "wanneer bal hand raakt"},
"bounceBall":function(d){return "stuiter bal"},
"bounceBallTooltip":function(d){return "Stuiter de bal tegen een object."},
"continue":function(d){return "Doorgaan"},
"dirE":function(d){return "O"},
"dirN":function(d){return "N"},
"dirS":function(d){return "Z"},
"dirW":function(d){return "W"},
"doCode":function(d){return "voer uit"},
"elseCode":function(d){return "anders"},
"finalLevel":function(d){return "Gefeliciteerd! Je hebt de laatste puzzel opgelost."},
"heightParameter":function(d){return "hoogte"},
"ifCode":function(d){return "als"},
"ifPathAhead":function(d){return "als pad voor"},
"ifTooltip":function(d){return "als er een pad is in de aangegeven richting, doe een paar acties."},
"ifelseTooltip":function(d){return "als er een pad in de opgegeven richting is, doe je het eerste actie blok. anders, doe je de tweede actie blok."},
"incrementOpponentScore":function(d){return "punt voor de tegenstander"},
"incrementOpponentScoreTooltip":function(d){return "Geef de tegenstander een punt."},
"incrementPlayerScore":function(d){return "Scoor punt"},
"incrementPlayerScoreTooltip":function(d){return "Een punt toevoegen aan de score van de huidige speler."},
"isWall":function(d){return "is dit een muur"},
"isWallTooltip":function(d){return "Geeft waar terug als hier een muur is"},
"launchBall":function(d){return "lanceer nieuwe bal"},
"launchBallTooltip":function(d){return "Lanceer een bal het spel in."},
"makeYourOwn":function(d){return "Maak je eigen Bounce-spel"},
"moveDown":function(d){return "omlaag"},
"moveDownTooltip":function(d){return "Beweeg het batje naar beneden."},
"moveForward":function(d){return "beweeg vooruit"},
"moveForwardTooltip":function(d){return "Beweeg me een plek naar voren."},
"moveLeft":function(d){return "naar links"},
"moveLeftTooltip":function(d){return "Beweeg het batje naar links."},
"moveRight":function(d){return "naar rechts"},
"moveRightTooltip":function(d){return "Beweeg het batje naar rechts."},
"moveUp":function(d){return "omhoog"},
"moveUpTooltip":function(d){return "Beweeg het batje naar boven."},
"nextLevel":function(d){return "Gefeliciteerd! Je hebt de puzzel voltooid."},
"no":function(d){return "Nee"},
"noPathAhead":function(d){return "pad is geblokkerd"},
"noPathLeft":function(d){return "geen pad naar links"},
"noPathRight":function(d){return "geen pad naar rechts"},
"numBlocksNeeded":function(d){return "Deze puzzel kan worden opgelost met %1 blokken."},
"pathAhead":function(d){return "pad voor je"},
"pathLeft":function(d){return "als er een pad naar links is"},
"pathRight":function(d){return "als er een pad naar rechts is"},
"pilePresent":function(d){return "er is een stapel"},
"playSoundBounce":function(d){return "stuiter geluid afspelen"},
"playSoundCheer":function(d){return "speel juich-geluid af"},
"playSoundCrunch":function(d){return "krakend geluid afspelen"},
"playSoundGoal1":function(d){return "doel 1 geluid afspelen"},
"playSoundGoal2":function(d){return "doel 2 geluid afspelen"},
"playSoundHit":function(d){return "raak-geluid afspelen"},
"playSoundKick":function(d){return "speel schopgeluid af"},
"playSoundLosePoint":function(d){return "speel het punt verloren geluid af"},
"playSoundLosePoint2":function(d){return "speel het punt verloren geluid 2 af"},
"playSoundRetro":function(d){return "speel retro geluid af"},
"playSoundRubber":function(d){return "speel rubber geluid af"},
"playSoundSlap":function(d){return "speel klap geluid af"},
"playSoundSlapshot":function(d){return "speel slapshot geluid af"},
"playSoundSwish":function(d){return "speel zwiepgeluid net af"},
"playSoundTooltip":function(d){return "Speel het gekozen geluid af."},
"playSoundWhistle":function(d){return "speel fluitgeluid af"},
"playSoundWinPoint":function(d){return "speel het punt gewonnen geluid af"},
"playSoundWinPoint2":function(d){return "speel het punt gewonnen geluid 2 af"},
"playSoundWood":function(d){return "speel hout geluid af"},
"putdownTower":function(d){return "zet een toren neer"},
"reinfFeedbackMsg":function(d){return "Klik 'Probeer opnieuw' om terug te gaan naar uw spel."},
"removeSquare":function(d){return "verwijder vierkant"},
"repeatUntil":function(d){return "herhaal totdat"},
"repeatUntilBlocked":function(d){return "waarneer er een pad vooruit is"},
"repeatUntilFinish":function(d){return "herhaal tot je klaar bent"},
"scoreText":function(d){return "Score: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return bounce_locale.v(d,"background")+" scène instellen"},
"setBackgroundHardcourt":function(d){return "kies hardcourt scène"},
"setBackgroundRandom":function(d){return "Kies willekeurige scène"},
"setBackgroundRetro":function(d){return "kies retro scène"},
"setBackgroundTooltip":function(d){return "Hiermee stel je de achtergrondafbeelding in"},
"setBallHardcourt":function(d){return "kies hardcourtbal"},
"setBallRandom":function(d){return "kies willekeurige bal"},
"setBallRetro":function(d){return "kies retrobal"},
"setBall":function(d){return bounce_locale.v(d,"ball")+" bal instellen"},
"setBallSpeedFast":function(d){return "hoge snelheid bal instellen"},
"setBallSpeedNormal":function(d){return "normale balsnelheid instellen"},
"setBallSpeedRandom":function(d){return "kies willekeurige balsnelheid"},
"setBallSpeedSlow":function(d){return "lage snelheid bal instellen"},
"setBallSpeedTooltip":function(d){return "Stelt de snelheid van de bal in"},
"setBallSpeedVeryFast":function(d){return "zeer hoge snelheid bal instellen"},
"setBallSpeedVerySlow":function(d){return "zeer lage snelheid bal instellen"},
"setBallTooltip":function(d){return "Stelt de balafbeelding in"},
"setPaddle":function(d){return "batje instellen"},
"setPaddleHardcourt":function(d){return "hardcourtbatje instellen"},
"setPaddleRandom":function(d){return "willekeurige batje instellen"},
"setPaddleRetro":function(d){return "retrobatje instellen"},
"setPaddleSpeedFast":function(d){return "hoge snelheid batje instellen"},
"setPaddleSpeedNormal":function(d){return "normale snelheid batje instellen"},
"setPaddleSpeedRandom":function(d){return "kies willekeurige peddelsnelheid"},
"setPaddleSpeedSlow":function(d){return "kies langzame peddelsnelheid"},
"setPaddleSpeedTooltip":function(d){return "Stelt de snelheid van het batje in"},
"setPaddleSpeedVeryFast":function(d){return "zeer hoge batjessnelheid instellen"},
"setPaddleSpeedVerySlow":function(d){return "zeer lage snelheid batje instellen"},
"setPaddleTooltip":function(d){return "Stelt de afbeelding van het batje in"},
"setPlayer":function(d){return "kies speler"},
"setPlayerSpeedFast":function(d){return "hoge snelheid speler instellen"},
"setPlayerSpeedNormal":function(d){return "normale snelheid speler instellen"},
"setPlayerSpeedRandom":function(d){return "willekeurige snelheid speler instellen"},
"setPlayerSpeedSlow":function(d){return "lage snelheid speler instellen"},
"setPlayerSpeedTooltip":function(d){return "Stelt de snelheid van de speler in"},
"setPlayerSpeedVeryFast":function(d){return "stel hoge snelheid speler in"},
"setPlayerSpeedVerySlow":function(d){return "stel lage snelheid speler in"},
"setTeamTooltip":function(d){return "Stelt het logo en kleurenschema in"},
"setTeam":function(d){return "Team "+bounce_locale.v(d,"team")+" instellen"},
"setTeamRandom":function(d){return "Willekeurig team instellen"},
"shareBounceTwitter":function(d){return "Speel hier het Bounce-spel dat ik zelf heb gemaakt. Ik maakte het met @codeorg"},
"shareBounceTwitterDonor":function(d){return "Bekijk het Flappy spel dat ik heb gemaakt. (Bedankt "+bounce_locale.v(d,"donor")+" voor de ondersteuning van @codeorg)"},
"shareGame":function(d){return "Deel je spel met anderen:"},
"turnLeft":function(d){return "Draai linksom"},
"turnRight":function(d){return "Draai rechtsom"},
"turnTooltip":function(d){return "Draait me 90 graden linksom of rechtsom."},
"whenBallInGoal":function(d){return "Wanneer de bal in het doel is"},
"whenBallInGoalTooltip":function(d){return "Voer de acties hieronder uit wanneer een bal het doel ingaat."},
"whenBallMissesPaddle":function(d){return "wanneer de bal het batje mist"},
"whenBallMissesPaddleTooltip":function(d){return "Voer de acties hieronder uit wanneer een bal het batje mist."},
"whenBallMissesPlayer":function(d){return "wanneer bal speler mist"},
"whenDown":function(d){return "als pijltje naar beneden"},
"whenDownTooltip":function(d){return "Voer de acties hieronder uit als pijltje naar beneden wordt ingedrukt."},
"whenGameStarts":function(d){return "als het spel start"},
"whenGameStartsTooltip":function(d){return "Voer de onderstaande acties uit als het spel start."},
"whenLeft":function(d){return "als pijltje naar links"},
"whenLeftTooltip":function(d){return "Voer de acties hieronder uit als pijltje naar links wordt ingedrukt."},
"whenPaddleCollided":function(d){return "wanneer de bal het batje raakt"},
"whenPaddleCollidedTooltip":function(d){return "Voer de actie hieronder uit wanneer een bal botst met een batje."},
"whenPlayerCollided":function(d){return "wanneer bal speler raakt"},
"whenPlayerCollidedTooltip":function(d){return "Acties hieronder uitvoeren wanneer een bal botst met de speler."},
"whenRight":function(d){return "als pijltje naar rechts"},
"whenRightTooltip":function(d){return "Voer de acties hieronder uit als pijltje naar rechts wordt ingedrukt."},
"whenUp":function(d){return "als pijltje naar boven"},
"whenUpTooltip":function(d){return "Voer de acties hieronder uit als pijltje naar boven wordt ingedrukt."},
"whenWallCollided":function(d){return "wanneer de bal een muur raakt"},
"whenWallCollidedTooltip":function(d){return "Voer de actie hieronder uit wanneer een bal botst met een muur."},
"whileMsg":function(d){return "terwijl"},
"whileTooltip":function(d){return "Herhaal de acties totdat je de finish hebt bereikt."},
"yes":function(d){return "Ja"}};