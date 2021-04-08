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
"basketballLaunchBall":function(d){return "hodiť novú loptu"},
"basketballLaunchBallTooltip":function(d){return "Hodiť loptu do hry."},
"basketballSetPaddle":function(d){return "nastaviť ruku"},
"basketballSetPaddleSpeedFast":function(d){return "nastaviť veľkú rýchlosť ruky"},
"basketballSetPaddleSpeedNormal":function(d){return "nastaviť normálnu rýchlosť ruky"},
"basketballSetPaddleSpeedRandom":function(d){return "nastaviť náhodnú rýchlosť ruky"},
"basketballSetPaddleSpeedSlow":function(d){return "nastaviť nízku rýchlosť ruky"},
"basketballSetPaddleSpeedTooltip":function(d){return "Nastaví rýchlosť ruky"},
"basketballSetPaddleSpeedVeryFast":function(d){return "nastaviť veľmi veľkú rýchlosť ruky"},
"basketballSetPaddleSpeedVerySlow":function(d){return "nastaviť veľmi nízku rýchlosť ruky"},
"basketballWhenBallMissesPaddle":function(d){return "keď lopta netrafí ruku"},
"basketballWhenPaddleCollided":function(d){return "keď lopta zasiahne ruku"},
"bounceBall":function(d){return "odraziť loptu"},
"bounceBallTooltip":function(d){return "Odraziť loptu od predmetu."},
"continue":function(d){return "Pokračovať"},
"dirE":function(d){return "V"},
"dirN":function(d){return "S"},
"dirS":function(d){return "J"},
"dirW":function(d){return "Z"},
"doCode":function(d){return "vykonaj"},
"elseCode":function(d){return "ináč"},
"finalLevel":function(d){return "Gratulujem! Vyriešil si poslednú úlohu."},
"heightParameter":function(d){return "výška"},
"ifCode":function(d){return "ak"},
"ifPathAhead":function(d){return "ak je cesta vpred"},
"ifTooltip":function(d){return "Ak sa tam nachádza cesta v určenom smere, sprav niektoré opatrenia."},
"ifelseTooltip":function(d){return "Ak je v určenom smere cesta, potom vykonaj prvý blok akcií. V opačnom prípade vykonaj druhý blok akcií."},
"incrementOpponentScore":function(d){return "pridať bod súperovi"},
"incrementOpponentScoreTooltip":function(d){return "Pridať bod ku skóre súpera."},
"incrementPlayerScore":function(d){return "bod"},
"incrementPlayerScoreTooltip":function(d){return "Pridaj jednu k aktuálnemu skóre."},
"isWall":function(d){return "je toto stena"},
"isWallTooltip":function(d){return "Vráti hpdnotu pravda, ak je tu stena"},
"launchBall":function(d){return "pustiť novú loptu"},
"launchBallTooltip":function(d){return "Pridá loptu do hry."},
"makeYourOwn":function(d){return "Vytvor svoju vlastnú odrážaciu hru"},
"moveDown":function(d){return "posunúť nadol"},
"moveDownTooltip":function(d){return "Posuň pálku nahor."},
"moveForward":function(d){return "posunúť dopredu"},
"moveForwardTooltip":function(d){return "Presunúť ma jedno pole vpred."},
"moveLeft":function(d){return "posunúť doľava"},
"moveLeftTooltip":function(d){return "Posuň pálku doľava."},
"moveRight":function(d){return "posunúť doprava"},
"moveRightTooltip":function(d){return "Posuň pálku doprava."},
"moveUp":function(d){return "posunúť nahor"},
"moveUpTooltip":function(d){return "Posuň pálku nahor."},
"nextLevel":function(d){return "Gratulujem! Vyriešil si hádanku."},
"no":function(d){return "Nie"},
"noPathAhead":function(d){return "cesta je blokovaná"},
"noPathLeft":function(d){return "žiadna cesta vľavo"},
"noPathRight":function(d){return "žiadna cesta vpravo"},
"numBlocksNeeded":function(d){return "Táto hádanka môže byť vyriešená s %1 blokmi."},
"pathAhead":function(d){return "cesta vpred"},
"pathLeft":function(d){return "ak je cesta vľavo"},
"pathRight":function(d){return "ak je cesta vpravo"},
"pilePresent":function(d){return "tu je hromada"},
"playSoundBounce":function(d){return "prehrať zvuk odrazu"},
"playSoundCheer":function(d){return "prehrať zvuk fandenia"},
"playSoundCrunch":function(d){return "prehrať zvuk chrumnutia"},
"playSoundGoal1":function(d){return "prehraj zvuk gól 1"},
"playSoundGoal2":function(d){return "prehraj zvuk gól 2"},
"playSoundHit":function(d){return "prehraj zvuk úderu"},
"playSoundKick":function(d){return "prehrať zvuk kopnutia"},
"playSoundLosePoint":function(d){return "prehraj zvuk straty bodu"},
"playSoundLosePoint2":function(d){return "prehraj zvuk straty bodu 2"},
"playSoundRetro":function(d){return "prehraj retro zvuk"},
"playSoundRubber":function(d){return "prehraj gumený zvuk"},
"playSoundSlap":function(d){return "prehraj zvuk plesknutia"},
"playSoundSlapshot":function(d){return "prehrať zvuk plesknutia"},
"playSoundSwish":function(d){return "prehrať zvuk šuchotu"},
"playSoundTooltip":function(d){return "Prehraj vybraný zvuk."},
"playSoundWhistle":function(d){return "prehrať zvuk pískania"},
"playSoundWinPoint":function(d){return "prehraj víťazný zvuk"},
"playSoundWinPoint2":function(d){return "prehraj víťazný zvuk 2"},
"playSoundWood":function(d){return "prehraj zvuk dreva"},
"putdownTower":function(d){return "daj dole vežu"},
"reinfFeedbackMsg":function(d){return "Pre návrat k svojej hre môžeš stlačiť tlačidlo \"Skúsiť znova\"."},
"removeSquare":function(d){return "odstrániť štvorec"},
"repeatUntil":function(d){return "opakovať dokiaľ"},
"repeatUntilBlocked":function(d){return "pokiaľ je cesta vpred"},
"repeatUntilFinish":function(d){return "opakovať do konca"},
"scoreText":function(d){return "Skóre: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "nastavenie "+bounce_locale.v(d,"background")+" scény"},
"setBackgroundHardcourt":function(d){return "nastav scénu na tvrdý povrch"},
"setBackgroundRandom":function(d){return "nastav náhodnú scénu"},
"setBackgroundRetro":function(d){return "nastaviť retro scénu"},
"setBackgroundTooltip":function(d){return "Nastaví obrázok pozadia"},
"setBallHardcourt":function(d){return "nastaviť loptu pre tvrdý povrch"},
"setBallRandom":function(d){return "nastaviť náhodnú loptu"},
"setBallRetro":function(d){return "nastaviť retro loptu"},
"setBall":function(d){return "nastaviť "+bounce_locale.v(d,"ball")+" loptu"},
"setBallSpeedFast":function(d){return "nastaviť veľkú rýchlosť lopty"},
"setBallSpeedNormal":function(d){return "nastaviť normálnu rýchlosť lopty"},
"setBallSpeedRandom":function(d){return "nastaviť náhodnú rýchlosť lopty"},
"setBallSpeedSlow":function(d){return "nastaviť nízku rýchlosť lopty"},
"setBallSpeedTooltip":function(d){return "Nastaví rýchlosť lopty"},
"setBallSpeedVeryFast":function(d){return "nastaviť veľmi veľkú rýchlosť lopty"},
"setBallSpeedVerySlow":function(d){return "nastaviť veľmi nízku rýchlosť lopty"},
"setBallTooltip":function(d){return "Nastaví obraz lopty"},
"setPaddle":function(d){return "nastaviť pálku"},
"setPaddleHardcourt":function(d){return "nastaviť pádlo pre tvrdý povrch"},
"setPaddleRandom":function(d){return "nastaviť náhodnú pálku"},
"setPaddleRetro":function(d){return "nastaviť retro pádlo"},
"setPaddleSpeedFast":function(d){return "nastaviť veľkú rýchlosť pádla"},
"setPaddleSpeedNormal":function(d){return "nastaviť normálnu rýchlosť pádla"},
"setPaddleSpeedRandom":function(d){return "nastaviť náhodnú rýchlosť pádla"},
"setPaddleSpeedSlow":function(d){return "nastaviť pomalú rýchlosť pádla"},
"setPaddleSpeedTooltip":function(d){return "Nastaví rýchlosť pálky"},
"setPaddleSpeedVeryFast":function(d){return "nastaviť veľmi veľkú rýchlosť pálky"},
"setPaddleSpeedVerySlow":function(d){return "nastaviť veľmi pomalú rýchlosť pálky"},
"setPaddleTooltip":function(d){return "Nastaví obraz pálky"},
"setPlayer":function(d){return "nastaviť hráča"},
"setPlayerSpeedFast":function(d){return "nastaviť rýchlosť hráča na vysokú"},
"setPlayerSpeedNormal":function(d){return "nastaviť normálnu rýchlosť hráča"},
"setPlayerSpeedRandom":function(d){return "nastaviť náhodnú rýchlosť hráča"},
"setPlayerSpeedSlow":function(d){return "nastaviť nízku rýchlosť hráča"},
"setPlayerSpeedTooltip":function(d){return "Nastaví rýchlosť hráča"},
"setPlayerSpeedVeryFast":function(d){return "nastaviť veľmi veľkú rýchlosť hráča"},
"setPlayerSpeedVerySlow":function(d){return "nastaviť veľmi nízku rýchlosť hráča"},
"setTeamTooltip":function(d){return "Nastaví logo a farebnú schému"},
"setTeam":function(d){return "Nastaviť tím "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Nastaviť tím náhodne"},
"shareBounceTwitter":function(d){return "Pozrite sa na Bounce hru, čo som urobil. Napísal som to sám s @codeorg"},
"shareBounceTwitterDonor":function(d){return "Pozrite si hru Bounce, ktorú som urobil. (Vďaka "+bounce_locale.v(d,"donor")+" pre podporu @codeorg)"},
"shareGame":function(d){return "Zdieľaj svoju hru:"},
"turnLeft":function(d){return "otočiť vľavo"},
"turnRight":function(d){return "otočiť vpravo"},
"turnTooltip":function(d){return "Obráti ma doľava alebo doprava o 90 stupňov."},
"whenBallInGoal":function(d){return "keď je lopta v bránke"},
"whenBallInGoalTooltip":function(d){return "Keď je lopta v bránke, vykonaj nasledujúce príkazy."},
"whenBallMissesPaddle":function(d){return "keď lopta netrafí pálku"},
"whenBallMissesPaddleTooltip":function(d){return "Keď lopta netrafí pálku, vykonaj nasledujúce príkazy."},
"whenBallMissesPlayer":function(d){return "keď lopta minie hráča"},
"whenDown":function(d){return "keď šípka nadol"},
"whenDownTooltip":function(d){return "Po stlačení šípky dole, vykonaj nasledujúce príkazy."},
"whenGameStarts":function(d){return "keď začne hra"},
"whenGameStartsTooltip":function(d){return "Vykonať akcie uvedené nižšie, keď hra začne."},
"whenLeft":function(d){return "keď šípka vľavo"},
"whenLeftTooltip":function(d){return "Po stlačení šípky vľavo, vykonaj nasledujúce príkazy."},
"whenPaddleCollided":function(d){return "keď lopta trafí pálku"},
"whenPaddleCollidedTooltip":function(d){return "Keď lopta sa trafí pálku, vykonaj nasledujúce príkazy."},
"whenPlayerCollided":function(d){return "keď lopta zasiahne hráča"},
"whenPlayerCollidedTooltip":function(d){return "Spustiť nižšie uvedené akcie, keď sa lopta dotkne hráča."},
"whenRight":function(d){return "keď šípka vpravo"},
"whenRightTooltip":function(d){return "Po stlačení šípky vpravo, vykonaj nasledujúce príkazy."},
"whenUp":function(d){return "keď šípka nahor"},
"whenUpTooltip":function(d){return "Po stlačení šípky hore, vykonaj nasledujúce príkazy."},
"whenWallCollided":function(d){return "keď lopta narazí do steny"},
"whenWallCollidedTooltip":function(d){return "Keď lopta narazí do steny, vykonaj nasledujúce príkazy."},
"whileMsg":function(d){return "pokiaľ"},
"whileTooltip":function(d){return "Opakujte priložené činnosti dokým dosiahnete cieľový bod."},
"yes":function(d){return "Áno"}};