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
"basketballLaunchBall":function(d){return "vrzi novo žogo"},
"basketballLaunchBallTooltip":function(d){return "Vrzi žogo v igro."},
"basketballSetPaddle":function(d){return "nastavi roko"},
"basketballSetPaddleSpeedFast":function(d){return "nastavite hitro hitrost roke"},
"basketballSetPaddleSpeedNormal":function(d){return "nastavite navadno hitrost roke"},
"basketballSetPaddleSpeedRandom":function(d){return "nastavite nakljuno hitrost roke"},
"basketballSetPaddleSpeedSlow":function(d){return "nastavite počasno hitrost roke"},
"basketballSetPaddleSpeedTooltip":function(d){return "Nastavi hitrost roke"},
"basketballSetPaddleSpeedVeryFast":function(d){return "nastavite zelo hitro hitrost roke"},
"basketballSetPaddleSpeedVerySlow":function(d){return "nastavite zelo počasno hitrost roke"},
"basketballWhenBallMissesPaddle":function(d){return "ko žoga zgreši roko"},
"basketballWhenPaddleCollided":function(d){return "ko žoga zadene roko"},
"bounceBall":function(d){return "odbij žogo"},
"bounceBallTooltip":function(d){return "Odbij žogo od predmeta."},
"continue":function(d){return "Nadaljuj"},
"dirE":function(d){return "V"},
"dirN":function(d){return "S"},
"dirS":function(d){return "J"},
"dirW":function(d){return "Z"},
"doCode":function(d){return "izvrši"},
"elseCode":function(d){return "potem"},
"finalLevel":function(d){return "Čestitke! Rešil/a si zadnjo uganko."},
"heightParameter":function(d){return "višina"},
"ifCode":function(d){return "če"},
"ifPathAhead":function(d){return "če je pot naprej"},
"ifTooltip":function(d){return "Če obstaja pot naprej v določeni smeri, potem naredi nekaj."},
"ifelseTooltip":function(d){return "Če obstaja pot naprej v določeni smeri, potem naredi prvi blok dejanj. V nasprotnem primeru, naredi drugi blok dejanj."},
"incrementOpponentScore":function(d){return "nasprotnik doseže točko"},
"incrementOpponentScoreTooltip":function(d){return "Dodaj ena k nasprotnikovim točkam."},
"incrementPlayerScore":function(d){return "dosežena točka"},
"incrementPlayerScoreTooltip":function(d){return "Dodaj ena k trenutnemu dosežku."},
"isWall":function(d){return "je to stena"},
"isWallTooltip":function(d){return "Vrne resnično, če je tukaj zid"},
"launchBall":function(d){return "izstreli novo žogo"},
"launchBallTooltip":function(d){return "Pošlji žogo v igro."},
"makeYourOwn":function(d){return "Naredi svojo Bounce Game"},
"moveDown":function(d){return "premakni se dol"},
"moveDownTooltip":function(d){return "Premakni lopar dol."},
"moveForward":function(d){return "premakni se naprej"},
"moveForwardTooltip":function(d){return "Premakni me naprej za 1 mesto."},
"moveLeft":function(d){return "premakni se levo"},
"moveLeftTooltip":function(d){return "Premakni lopar v levo."},
"moveRight":function(d){return "premakni se desno"},
"moveRightTooltip":function(d){return "Premakni lopar v desno."},
"moveUp":function(d){return "premakni se gor"},
"moveUpTooltip":function(d){return "Dvigni lopar."},
"nextLevel":function(d){return "Čestitam! Rešili ste to uganko."},
"no":function(d){return "Ne"},
"noPathAhead":function(d){return "pot je blokirana"},
"noPathLeft":function(d){return "ni poti na levo"},
"noPathRight":function(d){return "ni poti na desno"},
"numBlocksNeeded":function(d){return "Ta uganka je lahko rešena z %1 blokom."},
"pathAhead":function(d){return "pot naprej"},
"pathLeft":function(d){return "če je pot na levo"},
"pathRight":function(d){return "če je pot na desno"},
"pilePresent":function(d){return "tukaj je kup"},
"playSoundBounce":function(d){return "Predvajaj zvok poskoka"},
"playSoundCheer":function(d){return "predvajaj zvok vzpodbujanja"},
"playSoundCrunch":function(d){return "predvajaj zvok drobljenja"},
"playSoundGoal1":function(d){return "predvajaj zvok: cilj 1"},
"playSoundGoal2":function(d){return "predvajaj zvok: cilj 2"},
"playSoundHit":function(d){return "predvajaj zvok udarca"},
"playSoundKick":function(d){return "predvajaj zvok udarca"},
"playSoundLosePoint":function(d){return "predvajaj zvok: izgubljena točka"},
"playSoundLosePoint2":function(d){return "predvajaj zvok: izgubljena točka 2"},
"playSoundRetro":function(d){return "predvajaj retro zvok"},
"playSoundRubber":function(d){return "predvajaj zvok: radirka"},
"playSoundSlap":function(d){return "predvajaj zvok: udarec"},
"playSoundSlapshot":function(d){return "play slapshot sound"},
"playSoundSwish":function(d){return "play net swish sound"},
"playSoundTooltip":function(d){return "Predvajaj izbrani zvok."},
"playSoundWhistle":function(d){return "predvajaj žvižg"},
"playSoundWinPoint":function(d){return "predvajaj zvok: dobljena točka"},
"playSoundWinPoint2":function(d){return "predvajaj zvok: dobljena točka 2"},
"playSoundWood":function(d){return "predvajaj zvok: lesen udarec"},
"putdownTower":function(d){return "postavi stolp"},
"reinfFeedbackMsg":function(d){return "Lahko pritisnete gumb \"Poskusi znova\" in se vrnete nazaj k igranju svoje igre."},
"removeSquare":function(d){return "odstrani kvadrat"},
"repeatUntil":function(d){return "ponavljaj dokler"},
"repeatUntilBlocked":function(d){return "dokler je pot naprej"},
"repeatUntilFinish":function(d){return "ponavljaj do konca"},
"scoreText":function(d){return "Rezultat: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "set "+bounce_locale.v(d,"background")+" scene"},
"setBackgroundHardcourt":function(d){return "določi teniško sceno"},
"setBackgroundRandom":function(d){return "nastavite naključno sceno"},
"setBackgroundRetro":function(d){return "nastavite retro sceno"},
"setBackgroundTooltip":function(d){return "Nastavite sliko ozadja"},
"setBallHardcourt":function(d){return "določi teniško žogico"},
"setBallRandom":function(d){return "nastavite naključno žogo"},
"setBallRetro":function(d){return "nastavite žogo vzvratno"},
"setBall":function(d){return "set "+bounce_locale.v(d,"ball")+" ball"},
"setBallSpeedFast":function(d){return "nastavite hitro hitrost žoge"},
"setBallSpeedNormal":function(d){return "nastavite navadno hitrost žoge"},
"setBallSpeedRandom":function(d){return "nastavite nakljuno hitrost žoge"},
"setBallSpeedSlow":function(d){return "nastavite počasno hitrost žoge"},
"setBallSpeedTooltip":function(d){return "Nastavi hitrost žoge"},
"setBallSpeedVeryFast":function(d){return "nastavite zelo hitro hitrost žoge"},
"setBallSpeedVerySlow":function(d){return "nastavite zelo počasno hitrost žoge"},
"setBallTooltip":function(d){return "Nastavi sliko žoge"},
"setPaddle":function(d){return "nastavi lopar"},
"setPaddleHardcourt":function(d){return "določi teniški lopar"},
"setPaddleRandom":function(d){return "nastavite naključen odbijač"},
"setPaddleRetro":function(d){return "nastavite lopar vzvratno"},
"setPaddleSpeedFast":function(d){return "nastavite hitro hitrost odbijača"},
"setPaddleSpeedNormal":function(d){return "nastavite navadno hitrost odbijača"},
"setPaddleSpeedRandom":function(d){return "nastavite naključno hitrost odbijača"},
"setPaddleSpeedSlow":function(d){return "nastavite počasno hitrost odbijača"},
"setPaddleSpeedTooltip":function(d){return "Nastavi hitrost vesla"},
"setPaddleSpeedVeryFast":function(d){return "nastavite histrost vesla na zelo hitro"},
"setPaddleSpeedVerySlow":function(d){return "nastavite zelo počasno hitrost odbijača"},
"setPaddleTooltip":function(d){return "Nastavi sliko odbijača"},
"setPlayer":function(d){return "določi igralca"},
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
"shareBounceTwitter":function(d){return "Oglejte si mojo igrico pri kateri odbijaš žogo. Igrico sem izdelal sam z @codeorg"},
"shareBounceTwitterDonor":function(d){return "Check out the Bounce game I made. (Thanks "+bounce_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Delite vašo igro z ostalimi:"},
"turnLeft":function(d){return "obrni se levo"},
"turnRight":function(d){return "obrni se desno"},
"turnTooltip":function(d){return "Obrne me levo ali desno za 90 stopinj."},
"whenBallInGoal":function(d){return "ko je žoga v golu"},
"whenBallInGoalTooltip":function(d){return "Izvedi spodnja dejanja, ko žoga doseže cilj."},
"whenBallMissesPaddle":function(d){return "ko žoga zgreši lopar"},
"whenBallMissesPaddleTooltip":function(d){return "Izvedi spodnja dejanja, ko žoga zgreši lopar."},
"whenBallMissesPlayer":function(d){return "ko žoga zgreši igralca"},
"whenDown":function(d){return "ko puščica za navzdol"},
"whenDownTooltip":function(d){return "Ko je pritisnjena puščica za navzdol, izvedi sledeče ukaze."},
"whenGameStarts":function(d){return "ko se igra začne"},
"whenGameStartsTooltip":function(d){return "Izvedite spodnja dejanja, ko se igra začne."},
"whenLeft":function(d){return "ko je pritisnjena puščica levo"},
"whenLeftTooltip":function(d){return "Ko je pritisnjena desna puščica izvedi sledeče ukaze."},
"whenPaddleCollided":function(d){return "ko žoga zadene lopar"},
"whenPaddleCollidedTooltip":function(d){return "Izvedi spodnja dejanja, ko žoga zadene zid."},
"whenPlayerCollided":function(d){return "ko žoga zadene igralca"},
"whenPlayerCollidedTooltip":function(d){return "Execute the actions below when a ball collides with the player."},
"whenRight":function(d){return "ko je pritisnjena puščica desno"},
"whenRightTooltip":function(d){return "Ko je pritisnjena desna puščica izvedi sledeče ukaze."},
"whenUp":function(d){return "ko je pritisnjena puščica gor"},
"whenUpTooltip":function(d){return "Ko je pritisnjena gor puščica izvedi sledeče ukaze."},
"whenWallCollided":function(d){return "ko žoga zadene zid"},
"whenWallCollidedTooltip":function(d){return "Izvedi spodnja dejanja, ko žoga zadene zid."},
"whileMsg":function(d){return "dokler"},
"whileTooltip":function(d){return "Ponavljaj vključena dejanja, dokler ne dosežeš zaključne točke."},
"yes":function(d){return "Da"}};