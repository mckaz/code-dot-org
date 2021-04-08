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
"basketballLaunchBall":function(d){return "жаңы топ ыргытуу"},
"basketballLaunchBallTooltip":function(d){return "Топту оюнга киргизүү."},
"basketballSetPaddle":function(d){return "колду орнотуу"},
"basketballSetPaddleSpeedFast":function(d){return "тез колдун ылдамдыгын орнотуу"},
"basketballSetPaddleSpeedNormal":function(d){return "колдун кадимки ылдамдыгын орнотуу"},
"basketballSetPaddleSpeedRandom":function(d){return "кокустук колдун ылдамдыгын орнотуу"},
"basketballSetPaddleSpeedSlow":function(d){return "жай колдун ылдамдыгын тууралоо"},
"basketballSetPaddleSpeedTooltip":function(d){return "Колдун ылдамдыгын орнотот"},
"basketballSetPaddleSpeedVeryFast":function(d){return "өтө тез колдун ылдамдыгын орнотуу"},
"basketballSetPaddleSpeedVerySlow":function(d){return "өтө жай колдун ылдамдыгын орнотуу"},
"basketballWhenBallMissesPaddle":function(d){return "топ колго тийбей калганда"},
"basketballWhenPaddleCollided":function(d){return "топ колго тийгенде"},
"bounceBall":function(d){return "топтун секириги"},
"bounceBallTooltip":function(d){return "Топтун бир нерсеге урунушу."},
"continue":function(d){return "Улантуу"},
"dirE":function(d){return "Ч"},
"dirN":function(d){return "Түн"},
"dirS":function(d){return "Түш"},
"dirW":function(d){return "Б"},
"doCode":function(d){return "do"},
"elseCode":function(d){return "else"},
"finalLevel":function(d){return "Congratulations! You have solved the final puzzle."},
"heightParameter":function(d){return "height"},
"ifCode":function(d){return "if"},
"ifPathAhead":function(d){return "if path ahead"},
"ifTooltip":function(d){return "If there is a path in the specified direction, then do some actions."},
"ifelseTooltip":function(d){return "If there is a path in the specified direction, then do the first block of actions. Otherwise, do the second block of actions."},
"incrementOpponentScore":function(d){return "атаандаштын упайы"},
"incrementOpponentScoreTooltip":function(d){return "Атаандаштын учурдагы упайына бирди кош."},
"incrementPlayerScore":function(d){return "упайлар"},
"incrementPlayerScoreTooltip":function(d){return "Учурдагы оюнчунун упайына бирди кош."},
"isWall":function(d){return "бул дубалбы"},
"isWallTooltip":function(d){return "Дубал болсо туураны кайтарат"},
"launchBall":function(d){return "жаңы топ киргизүү"},
"launchBallTooltip":function(d){return "Топту оюнча киргизүү."},
"makeYourOwn":function(d){return "Өзүңөрдүн Bounce Game оюнуңарды түзгүлө"},
"moveDown":function(d){return "ылдый жылдыр"},
"moveDownTooltip":function(d){return "Калакты ылдый бас."},
"moveForward":function(d){return "move forward"},
"moveForwardTooltip":function(d){return "Move me forward one space."},
"moveLeft":function(d){return "солго жылдыр"},
"moveLeftTooltip":function(d){return "Калакты солго жылдыр."},
"moveRight":function(d){return "оңго жылдыр"},
"moveRightTooltip":function(d){return "Калакты оңго жылдыр."},
"moveUp":function(d){return "өйдө жылдыр"},
"moveUpTooltip":function(d){return "Калакты өйдө жылдыр."},
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
"playSoundCheer":function(d){return "куттуктоо үнүн ойнот"},
"playSoundCrunch":function(d){return "кыйроо үнүн ойнот"},
"playSoundGoal1":function(d){return "1-максат үнүн ойнот"},
"playSoundGoal2":function(d){return "2-максат үнүн ойнот"},
"playSoundHit":function(d){return "тийүү үнүн ойнот"},
"playSoundKick":function(d){return "тебүү үнүн ойнот"},
"playSoundLosePoint":function(d){return "упай жоготуу үнүн ойнот"},
"playSoundLosePoint2":function(d){return "2-упай жоготуу үнүн ойнот"},
"playSoundRetro":function(d){return "ретро үнүн ойнот"},
"playSoundRubber":function(d){return "желим үнүн ойнот"},
"playSoundSlap":function(d){return "шалп этүү үнүн ойнот"},
"playSoundSlapshot":function(d){return "шалп этүү үнүн ойнот"},
"playSoundSwish":function(d){return "шилтөө үнүн ойнотуу"},
"playSoundTooltip":function(d){return "Тандалган үндү ойнотуу."},
"playSoundWhistle":function(d){return "ышкырык үнүн ойнотуу"},
"playSoundWinPoint":function(d){return "упай утуу үнүн ойнотуу"},
"playSoundWinPoint2":function(d){return "2-упай утуу үнүн ойнотуу"},
"playSoundWood":function(d){return "жыгач үнүн ойнотуу"},
"putdownTower":function(d){return "put down tower"},
"reinfFeedbackMsg":function(d){return "You can press the \"Try again\" button to go back to playing your game."},
"removeSquare":function(d){return "remove square"},
"repeatUntil":function(d){return "repeat until"},
"repeatUntilBlocked":function(d){return "while path ahead"},
"repeatUntilFinish":function(d){return "repeat until finish"},
"scoreText":function(d){return "Эсеп: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return bounce_locale.v(d,"background")+" фонду орнотуу"},
"setBackgroundHardcourt":function(d){return "катуу кыртыш сценасын орнотуу"},
"setBackgroundRandom":function(d){return "кокустан алынган сценаны орнотуу"},
"setBackgroundRetro":function(d){return "ретро сценаны орнотуу"},
"setBackgroundTooltip":function(d){return "Sets the background image"},
"setBallHardcourt":function(d){return "катуу кыртыш тобун орнотуу"},
"setBallRandom":function(d){return "кокустан алынган топту онотуу"},
"setBallRetro":function(d){return "ретро топту орнотуу"},
"setBall":function(d){return bounce_locale.v(d,"ball")+" топту орнотуу"},
"setBallSpeedFast":function(d){return "тез топ ылдамдыгын орнотуу"},
"setBallSpeedNormal":function(d){return "кадимки топ ылдамдыгын орнотуу"},
"setBallSpeedRandom":function(d){return "кокустук топ ылдамдыгын орнотуу"},
"setBallSpeedSlow":function(d){return "жай топ ылдамдыгын орнотуу"},
"setBallSpeedTooltip":function(d){return "Топтун ылдамдыгын орнотот"},
"setBallSpeedVeryFast":function(d){return "өтө тез топтун ылдамдыгын орнотуу"},
"setBallSpeedVerySlow":function(d){return "өтө жай топ ылдамдыгын орнотуу"},
"setBallTooltip":function(d){return "Топтун сүрөтүн орнотот"},
"setPaddle":function(d){return "калакты орнотуу"},
"setPaddleHardcourt":function(d){return "катуу кыртыш калагын орнотуу"},
"setPaddleRandom":function(d){return "кокустан алынган калакты орнотуу"},
"setPaddleRetro":function(d){return "ретро калак орнотуу"},
"setPaddleSpeedFast":function(d){return "тез калак ылдамдыгын орнотуу"},
"setPaddleSpeedNormal":function(d){return "кадимки калак ылдамдыгын орнотуу"},
"setPaddleSpeedRandom":function(d){return "кокустан алынган калак ылдамдыгын орнотуу"},
"setPaddleSpeedSlow":function(d){return "жай калак ылдамдыгын орнотуу"},
"setPaddleSpeedTooltip":function(d){return "Калак ылдамдыгын орнотот"},
"setPaddleSpeedVeryFast":function(d){return "өтө тез калак ылдамдыгын орнотуу"},
"setPaddleSpeedVerySlow":function(d){return "өтө жай калак ылдамдыгын орнотуу"},
"setPaddleTooltip":function(d){return "Калактын сүрөтүн орнотот"},
"setPlayer":function(d){return "set player"},
"setPlayerSpeedFast":function(d){return "тез оюнчунун ылдамдыгын орнотуу"},
"setPlayerSpeedNormal":function(d){return "кадимки оюнчунун ылдамдыгын орнотуу"},
"setPlayerSpeedRandom":function(d){return "кокустан алынган оюнчунун ылдамдыгын орнотуу"},
"setPlayerSpeedSlow":function(d){return "жай оюнчунун ылдамдыгын орнотуу"},
"setPlayerSpeedTooltip":function(d){return "Оюнчунун ылдамдыгын орнотот"},
"setPlayerSpeedVeryFast":function(d){return "өтө тез оюнчунун ылдамдыгын орнотуу"},
"setPlayerSpeedVerySlow":function(d){return "өтө жай оюнчунун ылдамдыгын орнотуу"},
"setTeamTooltip":function(d){return "Лого ж-а түс схемасын орнотот"},
"setTeam":function(d){return bounce_locale.v(d,"team")+" команда орнотуу"},
"setTeamRandom":function(d){return "Команданы кокустан тандоо"},
"shareBounceTwitter":function(d){return "Мен жасаган Bounce оюнун көргүлө. Мен аны @codeorg менен өзүм жаздым"},
"shareBounceTwitterDonor":function(d){return "Мен жасаган Bounce оюнун көргүлө. (@codeorg колдогону үчүн "+bounce_locale.v(d,"donor")+" ыраазычылык билдиребиз)"},
"shareGame":function(d){return "Share your game:"},
"turnLeft":function(d){return "turn left"},
"turnRight":function(d){return "turn right"},
"turnTooltip":function(d){return "Turns me left or right by 90 degrees."},
"whenBallInGoal":function(d){return "топ дарбазага киргенде"},
"whenBallInGoalTooltip":function(d){return "Топ дарбазага киргенде, кийинки аракетти аткар."},
"whenBallMissesPaddle":function(d){return "топ калакка тийбей калганда"},
"whenBallMissesPaddleTooltip":function(d){return "Топ дарбазага киргенде, кийинки аракетти аткар."},
"whenBallMissesPlayer":function(d){return "топ оюнчуга тийбей калганда"},
"whenDown":function(d){return "төмөндү карай көрсөткөндө"},
"whenDownTooltip":function(d){return "Төмөндү карай баскычы басылганда, кийинки аракетти аткар."},
"whenGameStarts":function(d){return "when game starts"},
"whenGameStartsTooltip":function(d){return "Execute the actions below when the game starts."},
"whenLeft":function(d){return "солду карай көрсөткөндө"},
"whenLeftTooltip":function(d){return "Солду карай баскычы басылганда, төмөнкү аракетти аткар."},
"whenPaddleCollided":function(d){return "топ калакка тийгенде"},
"whenPaddleCollidedTooltip":function(d){return "Топ калакка тийгенде, төмөнкү аракетти аткар."},
"whenPlayerCollided":function(d){return "топ оюнчуга тийгенде"},
"whenPlayerCollidedTooltip":function(d){return "Топ оюнчуга тийгенде, төмөнкү аракетти аткар."},
"whenRight":function(d){return "оңду карай көрсөткөндө"},
"whenRightTooltip":function(d){return "Оңду карай баскычы басылганда, төмөнкү аракетти аткар."},
"whenUp":function(d){return "жогорку карай көрсөткөндө"},
"whenUpTooltip":function(d){return "Жогору карай баскычы басылганда, кийинки аракетти аткар."},
"whenWallCollided":function(d){return "топ дубалга тийгенде"},
"whenWallCollidedTooltip":function(d){return "Топ дубалгаа тийгенде, төмөнкү аракетти аткар."},
"whileMsg":function(d){return "болуп турганда"},
"whileTooltip":function(d){return "Repeat the enclosed actions until finish point is reached."},
"yes":function(d){return "Yes"}};