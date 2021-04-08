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
"basketballLaunchBall":function(d){return "bota beste pilota bat"},
"basketballLaunchBallTooltip":function(d){return "Bota baloi bat jokora."},
"basketballSetPaddle":function(d){return "ezarri eskua"},
"basketballSetPaddleSpeedFast":function(d){return "ezarri eskuaren abiadura altua"},
"basketballSetPaddleSpeedNormal":function(d){return "ezarri eskuaren abiadura normala"},
"basketballSetPaddleSpeedRandom":function(d){return "ezarri eskuaren ausazko abiadura"},
"basketballSetPaddleSpeedSlow":function(d){return "ezarri eskuaren abiadura baxua"},
"basketballSetPaddleSpeedTooltip":function(d){return "Eskuaren abiadura ezartzen du"},
"basketballSetPaddleSpeedVeryFast":function(d){return "ezarri eskuaren abiadura oso altua"},
"basketballSetPaddleSpeedVerySlow":function(d){return "ezarri eskuaren abiadura oso baxua"},
"basketballWhenBallMissesPaddle":function(d){return "pilotak eskuan jotzen ez duenean"},
"basketballWhenPaddleCollided":function(d){return "pilotak eskua jotzen duenean"},
"bounceBall":function(d){return "Errebote-pilota"},
"bounceBallTooltip":function(d){return "Objektu baten kontra pilota bat errebotatu."},
"continue":function(d){return "Jarraitu"},
"dirE":function(d){return "E"},
"dirN":function(d){return "I"},
"dirS":function(d){return "H"},
"dirW":function(d){return "M"},
"doCode":function(d){return "egin"},
"elseCode":function(d){return "bestela"},
"finalLevel":function(d){return "Zorionak! Amaierako ariketa ebatzi duzu."},
"heightParameter":function(d){return "Altuera"},
"ifCode":function(d){return "baldin"},
"ifPathAhead":function(d){return "Aurrean bidea bada"},
"ifTooltip":function(d){return "Zehaztutako norabidean bidea bada, orduan zenbait ekintza egin."},
"ifelseTooltip":function(d){return "Zehaztutako norabidean bidea bada, orduan lehenengo blokeko ekintzak egin. Bestela, egin bigarren blokeko ekintzak."},
"incrementOpponentScore":function(d){return "gehitu puntua aurkariari"},
"incrementOpponentScoreTooltip":function(d){return "Gehitu bat uneko aurkariaren markagailura."},
"incrementPlayerScore":function(d){return "eskuratu puntu bat"},
"incrementPlayerScoreTooltip":function(d){return "Gehitu bat jokalariaren markagailura."},
"isWall":function(d){return "Pareta bat al da"},
"isWallTooltip":function(d){return "Horma bat egonez gero egia bueltatu"},
"launchBall":function(d){return "jaurti beste pilota bat"},
"launchBallTooltip":function(d){return "Jarri pilota bat jokoan."},
"makeYourOwn":function(d){return "Sortu zure errebote joko propioa"},
"moveDown":function(d){return "mugiru behera"},
"moveDownTooltip":function(d){return "Mugitu erraketa behera."},
"moveForward":function(d){return "mugitu aurrera"},
"moveForwardTooltip":function(d){return "Mugitu nazazu espazio bat aurrera."},
"moveLeft":function(d){return "mugitu ezkerrera"},
"moveLeftTooltip":function(d){return "Mugitu erraketa ezkerrera."},
"moveRight":function(d){return "mugitu eskuinera"},
"moveRightTooltip":function(d){return "Mugitu erraketa eskuinera."},
"moveUp":function(d){return "Mugitu gora"},
"moveUpTooltip":function(d){return "Mugitu erraketa gora."},
"nextLevel":function(d){return "Zorionak! Puzle hau osatu duzu."},
"no":function(d){return "Ez"},
"noPathAhead":function(d){return "Bidea blokeatua dago"},
"noPathLeft":function(d){return "ez dago biderik ezkerraldera"},
"noPathRight":function(d){return "ez dago biderik eskuinaldera"},
"numBlocksNeeded":function(d){return "Puzle hau %1 blokeekin ebaz daiteke."},
"pathAhead":function(d){return "bidea aurrean"},
"pathLeft":function(d){return "ezkerrera bidea badago"},
"pathRight":function(d){return "eskuinera bidea badago"},
"pilePresent":function(d){return "badago mordo bat"},
"playSoundBounce":function(d){return "erreproduzitu errebote soinua"},
"playSoundCheer":function(d){return "erreproduzitu txalo soinua"},
"playSoundCrunch":function(d){return "jo karraska soinua"},
"playSoundGoal1":function(d){return "jo 1 gol soinua"},
"playSoundGoal2":function(d){return "jo 2 gol soinua"},
"playSoundHit":function(d){return "jo kolpe soinua"},
"playSoundKick":function(d){return "erreproduzitu ostiko soinua"},
"playSoundLosePoint":function(d){return "jo galdutako puntuaren soinua"},
"playSoundLosePoint2":function(d){return "jo galdutako 2 puntuaren soinua"},
"playSoundRetro":function(d){return "jo retro soinua"},
"playSoundRubber":function(d){return "jo borragoma soinua"},
"playSoundSlap":function(d){return "jo zaplasteko soinua"},
"playSoundSlapshot":function(d){return "erreproduzitu zaplada soinua"},
"playSoundSwish":function(d){return "erreproduzitu sare-mugitze soinua"},
"playSoundTooltip":function(d){return "Jo aukeratutako soinua."},
"playSoundWhistle":function(d){return "erreproduzitu txistu soinua"},
"playSoundWinPoint":function(d){return "jo puntu irabazle soinua"},
"playSoundWinPoint2":function(d){return "jo puntu irabazle soinua 2"},
"playSoundWood":function(d){return "jo egur soinua"},
"putdownTower":function(d){return "dorrea lurrera bota"},
"reinfFeedbackMsg":function(d){return "\"Berriro saiatu\" botoiean klikatu dezakezu zure jokora atzera egiteko."},
"removeSquare":function(d){return "ezabatu karratua"},
"repeatUntil":function(d){return "errepikatu %1 arte"},
"repeatUntilBlocked":function(d){return "aurrean bidea dagoen bitartean"},
"repeatUntilFinish":function(d){return "errepikatu bukatu arte"},
"scoreText":function(d){return "Markagailua: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "ezarri "+bounce_locale.v(d,"background")+" atzealdea"},
"setBackgroundHardcourt":function(d){return "ezarri jokalekuaren eszena"},
"setBackgroundRandom":function(d){return "ezarri ausazko eszena"},
"setBackgroundRetro":function(d){return "ezarri retro eszena"},
"setBackgroundTooltip":function(d){return "Atzeko irudia ezartzen du"},
"setBallHardcourt":function(d){return "ezarri jokalekuko pilota"},
"setBallRandom":function(d){return "ezarri ausazko pilota"},
"setBallRetro":function(d){return "Ezarri retro pilota"},
"setBall":function(d){return "ezarri "+bounce_locale.v(d,"ball")+" pilota"},
"setBallSpeedFast":function(d){return "ezarri pilota abiadura azkarra"},
"setBallSpeedNormal":function(d){return "ezarri pilota abiadura normala"},
"setBallSpeedRandom":function(d){return "ezarri ausazko pilota abiadura"},
"setBallSpeedSlow":function(d){return "ezarri pilota abiadura motela"},
"setBallSpeedTooltip":function(d){return "pilotaren abiadura ezartzen du"},
"setBallSpeedVeryFast":function(d){return "ezarri pilota abiadura oso azkarra"},
"setBallSpeedVerySlow":function(d){return "ezarri pilota abiadura oso motela"},
"setBallTooltip":function(d){return "Pilotaren irudia ezartzen du"},
"setPaddle":function(d){return "ezarri erraketa"},
"setPaddleHardcourt":function(d){return "ezarri jokalekuko erraketa"},
"setPaddleRandom":function(d){return "ezarri ausazko erraketa"},
"setPaddleRetro":function(d){return "ezarri retro erraketa"},
"setPaddleSpeedFast":function(d){return "ezarri erraketa abiadura azkarra"},
"setPaddleSpeedNormal":function(d){return "ezarri erraketa abiadura normala"},
"setPaddleSpeedRandom":function(d){return "Ezarri ausazko erraketa abiadura"},
"setPaddleSpeedSlow":function(d){return "ezarri erraketa abiadura motela"},
"setPaddleSpeedTooltip":function(d){return "Erraketaren abiadura ezartzen du"},
"setPaddleSpeedVeryFast":function(d){return "ezarri erraketa abiadura oso azkarra"},
"setPaddleSpeedVerySlow":function(d){return "ezarri erraketa abiadura oso motela"},
"setPaddleTooltip":function(d){return "Erraketaren irudia ezartzen du"},
"setPlayer":function(d){return "ezarri jokalari"},
"setPlayerSpeedFast":function(d){return "ezarri jokalariaren abiadura altua"},
"setPlayerSpeedNormal":function(d){return "ezarri jokalariaren abiadura normala"},
"setPlayerSpeedRandom":function(d){return "ezarri jokalariaren ausazko abiadura"},
"setPlayerSpeedSlow":function(d){return "ezarri jokalariaren abiadura motela"},
"setPlayerSpeedTooltip":function(d){return "Jokalariaren abiadura ezartzen du"},
"setPlayerSpeedVeryFast":function(d){return "ezarri jokalariaren abiadura oso altua"},
"setPlayerSpeedVerySlow":function(d){return "ezarri jokalariaren abiadura oso baxua"},
"setTeamTooltip":function(d){return "Ezarri logoa eta kolore-paleta"},
"setTeam":function(d){return "Ezarri taldea "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Ezarri ausazko taldea"},
"shareBounceTwitter":function(d){return "Begiratu nik sortutako errebote jokoa. Nik bakarrik idatzi dut @codeorg-ekin"},
"shareBounceTwitterDonor":function(d){return "Check out the Bounce game I made. (Thanks "+bounce_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Partekatu zure jokoa:"},
"turnLeft":function(d){return "ezkerrera biratu"},
"turnRight":function(d){return "eskuinera biratu"},
"turnTooltip":function(d){return "90 gradu biratzen nau eskuin edo ezkerrera."},
"whenBallInGoal":function(d){return "pilota atean dagoenean"},
"whenBallInGoalTooltip":function(d){return "Exekutatu ekintza hauek pilota bat atean sartzean."},
"whenBallMissesPaddle":function(d){return "pilotak erraketa jotzen ez duenean"},
"whenBallMissesPaddleTooltip":function(d){return "Exekutatu ekintza hauek pilota batek erraketa jotzen ez duenean."},
"whenBallMissesPlayer":function(d){return "pilotak jokalaria jotzen ez duenean"},
"whenDown":function(d){return "beherako gezia sakatzean"},
"whenDownTooltip":function(d){return "Exekutatu behekaldeko ekintzak beheko gezidun tekla sakatzean."},
"whenGameStarts":function(d){return "Jokoa hasten denean"},
"whenGameStartsTooltip":function(d){return "Jokoa hasten denean exekutatu ondorengo ekintzak."},
"whenLeft":function(d){return "ezkerrerako gezia sakatzean"},
"whenLeftTooltip":function(d){return "Exekutatu behekaldeko ekintzak ezkerreko gezidun tekla sakatzean."},
"whenPaddleCollided":function(d){return "Pilotak erraketa jotzen duenean"},
"whenPaddleCollidedTooltip":function(d){return "Exekutatu ekintza hauek pilota batek erraketa bat jotzen duenean."},
"whenPlayerCollided":function(d){return "pilotak jokalaria jotzen duenean"},
"whenPlayerCollidedTooltip":function(d){return "Exekutatu ekintza hauek pilota batek jokalaria jotzen duenean."},
"whenRight":function(d){return "eskuinerako gezia sakatzean"},
"whenRightTooltip":function(d){return "Exekutatu behekaldeko ekintzak eskubiko gezidun tekla sakatzean."},
"whenUp":function(d){return "goiko gezia denean"},
"whenUpTooltip":function(d){return "Exekutatu behekaldeko ekintzak gora gezidun tekla sakatzean."},
"whenWallCollided":function(d){return "baloiak horma jotzean"},
"whenWallCollidedTooltip":function(d){return "Exekutatu ekintza hauek pilota batek hormaren bat jotzean."},
"whileMsg":function(d){return "bitartean"},
"whileTooltip":function(d){return "Bukaerako puntua eskuratu arte barruko ekintzak errepikatu."},
"yes":function(d){return "Bai"}};