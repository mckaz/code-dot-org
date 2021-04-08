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
"basketballLaunchBall":function(d){return "gjuaj topin e ri"},
"basketballLaunchBallTooltip":function(d){return "Gjuaj një top në lojë."},
"basketballSetPaddle":function(d){return "vendos dorën"},
"basketballSetPaddleSpeedFast":function(d){return "vendos dorën në shpejtësi të lartë"},
"basketballSetPaddleSpeedNormal":function(d){return "vendos dorën në shpejtësi normale"},
"basketballSetPaddleSpeedRandom":function(d){return "vendos dorën në shpejtësi të rastësishme"},
"basketballSetPaddleSpeedSlow":function(d){return "vendos dorën në shpejtësi të ulët"},
"basketballSetPaddleSpeedTooltip":function(d){return "Vendos shpejtësinë e dorës"},
"basketballSetPaddleSpeedVeryFast":function(d){return "vendos dorën në shpejtësi shumë të lartë"},
"basketballSetPaddleSpeedVerySlow":function(d){return "vendos dorën në shpejtësi shumë të ulët"},
"basketballWhenBallMissesPaddle":function(d){return "kur topi nuk prek dorën"},
"basketballWhenPaddleCollided":function(d){return "kur topi përplaset në dorë"},
"bounceBall":function(d){return "përplas topin"},
"bounceBallTooltip":function(d){return "Përplase një top mbi një objekt."},
"continue":function(d){return "Vazhdo"},
"dirE":function(d){return "L"},
"dirN":function(d){return "V"},
"dirS":function(d){return "J"},
"dirW":function(d){return "P"},
"doCode":function(d){return "ekzekuto"},
"elseCode":function(d){return "përndryshe"},
"finalLevel":function(d){return "Urime! Ju keni përfunduar enigmën përfundimtare."},
"heightParameter":function(d){return "gjatësia"},
"ifCode":function(d){return "nëse"},
"ifPathAhead":function(d){return "nëse ka vend përpara"},
"ifTooltip":function(d){return "Nëse ka vend në një drejtim të caktuar, atëherë bëj një veprim të caktuar."},
"ifelseTooltip":function(d){return "Nëse është një rrugë në drejtimin e caktuar, atëherë bëj veprimet e grupit të parë. Përndryshe, bëj veprimet e grupit të dytë."},
"incrementOpponentScore":function(d){return "rezultati i kundërshtarit/es"},
"incrementOpponentScoreTooltip":function(d){return "Shto një pikë në rezultatin aktual të kundërshtarit."},
"incrementPlayerScore":function(d){return "rezultati"},
"incrementPlayerScoreTooltip":function(d){return "Shto një pikë në rezultatin aktual të lojtarit."},
"isWall":function(d){return "nëse është një mur"},
"isWallTooltip":function(d){return "Kthehet \"e vërtetë\" nëse këtu ka një mur"},
"launchBall":function(d){return "hidh një top të ri"},
"launchBallTooltip":function(d){return "Hidh një top në lojë."},
"makeYourOwn":function(d){return "Krijo Lojën Tënde të përplasjes"},
"moveDown":function(d){return "lëviz poshtë"},
"moveDownTooltip":function(d){return "Lëviz raketën poshtë."},
"moveForward":function(d){return "lëviz përpara"},
"moveForwardTooltip":function(d){return "Më lëviz përpara një hapësirë."},
"moveLeft":function(d){return "lëviz majtas"},
"moveLeftTooltip":function(d){return "Lëviz raketën në të majtë."},
"moveRight":function(d){return "lëviz djathtas"},
"moveRightTooltip":function(d){return "Lëviz raketën në të djathtë."},
"moveUp":function(d){return "lëviz sipër"},
"moveUpTooltip":function(d){return "Lëviz raketën sipër."},
"nextLevel":function(d){return "Urime! Ju keni përfunduar këtë enigmë."},
"no":function(d){return "Jo"},
"noPathAhead":function(d){return "rruga është bllokuar"},
"noPathLeft":function(d){return "nuk ka hapësirë në të majtë"},
"noPathRight":function(d){return "nuk ka hapësirë në të djathtë"},
"numBlocksNeeded":function(d){return "Kjo enigmë mund të zgjidhet me %1 rreshta."},
"pathAhead":function(d){return "rrugë përpara"},
"pathLeft":function(d){return "nëse ka rrugë në të majtë"},
"pathRight":function(d){return "nëse ka rrugë në të djathtë"},
"pilePresent":function(d){return "është një grumbull"},
"playSoundBounce":function(d){return "luaj muzikë hedhjeje"},
"playSoundCheer":function(d){return "luaj tingull brohorites"},
"playSoundCrunch":function(d){return "luaj tingullin \"e kërcitjes\""},
"playSoundGoal1":function(d){return "luaj tingullin \"goal 1\""},
"playSoundGoal2":function(d){return "luaj tingullin \"goal 2\""},
"playSoundHit":function(d){return "luaj tingullin \"e goditjes\""},
"playSoundKick":function(d){return "luaj tingull godites"},
"playSoundLosePoint":function(d){return "luaj tingullin \"humb pikë\""},
"playSoundLosePoint2":function(d){return "luaj tingullin \"humb pikë 2\""},
"playSoundRetro":function(d){return "luaj tingullin \"retro\""},
"playSoundRubber":function(d){return "luaj tingullin e \"gomës\""},
"playSoundSlap":function(d){return "luaj tingullin e \"goditjes\""},
"playSoundSlapshot":function(d){return "luaj tingull kercites"},
"playSoundSwish":function(d){return "luaj tingullin e futjes se topit ne rrjete"},
"playSoundTooltip":function(d){return "Luaj tingullin e zgjedhur."},
"playSoundWhistle":function(d){return "luaj tingullin e fishkellimes"},
"playSoundWinPoint":function(d){return "luaj tingullin \"fito pikë\""},
"playSoundWinPoint2":function(d){return "luaj tingullin \"fito pikë \" 2"},
"playSoundWood":function(d){return "luaj tingullin \"e pyllit\""},
"putdownTower":function(d){return "vendos në tokë një kullë"},
"reinfFeedbackMsg":function(d){return "Ju mund të shtypni butonin \"Provo Përsëri\" për tu kthyer mbrapa dhe për të luajtur lojën tuaj."},
"removeSquare":function(d){return "hiq katrorin"},
"repeatUntil":function(d){return "përsërit derisa"},
"repeatUntilBlocked":function(d){return "përderisa ka hapësirë përpara"},
"repeatUntilFinish":function(d){return "përsërit deri sa të mbarojë"},
"scoreText":function(d){return "Rezultati: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "vendos "+bounce_locale.v(d,"background")+" pamje"},
"setBackgroundHardcourt":function(d){return "krijo një model të një loje tenisi"},
"setBackgroundRandom":function(d){return "krijo një model të rastësishëm"},
"setBackgroundRetro":function(d){return "krijo një model retro"},
"setBackgroundTooltip":function(d){return "Rregullo sfondin e imazhit"},
"setBallHardcourt":function(d){return "vendos një top tenisi"},
"setBallRandom":function(d){return "vendos një top të rastësishëm"},
"setBallRetro":function(d){return "vendos topin në retro"},
"setBall":function(d){return "Vendos "+bounce_locale.v(d,"ball")+" topin"},
"setBallSpeedFast":function(d){return "vendos topin në shpejtësi të lartë"},
"setBallSpeedNormal":function(d){return "vendos topin në shpejtësi normale"},
"setBallSpeedRandom":function(d){return "vendos topin në shpejtësi të zakonshme"},
"setBallSpeedSlow":function(d){return "vendos topin në shpejtësi të ulët"},
"setBallSpeedTooltip":function(d){return "Vendos shpejtësinë e topit"},
"setBallSpeedVeryFast":function(d){return "Vendos topin në shpejtësi shumë të lartë"},
"setBallSpeedVerySlow":function(d){return "vendos topin në shpejtësi shumë të ulët"},
"setBallTooltip":function(d){return "Vendos pozicionin e  topit"},
"setPaddle":function(d){return "vendos raketën"},
"setPaddleHardcourt":function(d){return "vendos raketën e tenisit"},
"setPaddleRandom":function(d){return "Vendos një raketë tenisi të çfarëdoshme"},
"setPaddleRetro":function(d){return "vendos raketën në retro"},
"setPaddleSpeedFast":function(d){return "vendos raketën në shpejtësi të lartë"},
"setPaddleSpeedNormal":function(d){return "vendos raketën në shpejtësi normale"},
"setPaddleSpeedRandom":function(d){return "vendos raketën në shpejtësi të zakonshme"},
"setPaddleSpeedSlow":function(d){return "vendos raketën në shpejtësi të ulët"},
"setPaddleSpeedTooltip":function(d){return "Vendos shpejtësinë e raketës"},
"setPaddleSpeedVeryFast":function(d){return "Vendos raketën në shpejtësi shumë të lartë"},
"setPaddleSpeedVerySlow":function(d){return "vendos raketën në shpejtësi shumë të ulët"},
"setPaddleTooltip":function(d){return "vendos pozicionin e raketës"},
"setPlayer":function(d){return "vendos lojtarin"},
"setPlayerSpeedFast":function(d){return "Vendos lojtarin në shpejtësi të lartë \n"},
"setPlayerSpeedNormal":function(d){return "Vendos lojtarin në shpejtësi normale\n"},
"setPlayerSpeedRandom":function(d){return "Vendos lojtarin në shpejtësi të zakonshme"},
"setPlayerSpeedSlow":function(d){return "Vendos lojtarin në shpejtësi të ulët"},
"setPlayerSpeedTooltip":function(d){return "Vendos  shpejtësinë e lojtarit"},
"setPlayerSpeedVeryFast":function(d){return "Vendos lojtarin në shpejtësi shumë të lart"},
"setPlayerSpeedVerySlow":function(d){return "vendos lojtarin në shpejtësi shumë të ulët"},
"setTeamTooltip":function(d){return "Vendos logon dhe ngjyrat"},
"setTeam":function(d){return "Vendos skuadrën "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Vendos skuadrën në mënyrë të rastësishme"},
"shareBounceTwitter":function(d){return "Hidhi një sy lojës me përplasje që krijova. E krijova vet me @codeorg"},
"shareBounceTwitterDonor":function(d){return "Shikoni lojen Bounce qe kam krijuar. (Faleminderit "+bounce_locale.v(d,"donor")+" per suportin ndaj @codeorg)"},
"shareGame":function(d){return "Shpërndaj lojën tënde:"},
"turnLeft":function(d){return "kthehu majtas"},
"turnRight":function(d){return "kthehu djathtas"},
"turnTooltip":function(d){return "Më kthe majtas ose djathtas me 90 gradë."},
"whenBallInGoal":function(d){return "kur topi është në lojë"},
"whenBallInGoalTooltip":function(d){return "Kryej veprimet si më poshtë kur futet një top në lojë."},
"whenBallMissesPaddle":function(d){return "kur topi nuk prek raketën"},
"whenBallMissesPaddleTooltip":function(d){return "Kryej veprimet si më poshtë kur një top nuk a arrin raketën."},
"whenBallMissesPlayer":function(d){return "Kur topi nuk prek lojtarin"},
"whenDown":function(d){return "kur  kursori është  poshtë"},
"whenDownTooltip":function(d){return "Kryej veprimet si më poshtë kur është shtypur  kursori  poshtë."},
"whenGameStarts":function(d){return "kur loja fillon"},
"whenGameStartsTooltip":function(d){return "Kryej veprimet më poshtë kur të fillojë loja."},
"whenLeft":function(d){return "kur kursori është majtas"},
"whenLeftTooltip":function(d){return "Kryej veprimet si më poshtë kur është shtypur kursori majtas"},
"whenPaddleCollided":function(d){return "kur topi godet raketën"},
"whenPaddleCollidedTooltip":function(d){return "Kryej veprimet si më poshtë kur topi përplaset me raketën."},
"whenPlayerCollided":function(d){return "kur topi godet lojtarin"},
"whenPlayerCollidedTooltip":function(d){return "Kryej veprimet e mëposhtme kur një top përplaset me lojtarin."},
"whenRight":function(d){return "kur kursori është djathtas"},
"whenRightTooltip":function(d){return "Kryej veprimet si më poshtë kur është shtypur kursori djathtas"},
"whenUp":function(d){return "kur kursori është lart"},
"whenUpTooltip":function(d){return "Kryej veprimet si më poshtë kur është shtypur kursori lart"},
"whenWallCollided":function(d){return "kur topi përplaset në mur"},
"whenWallCollidedTooltip":function(d){return "Kryej veprimet si më poshtë kur një top të përplaset në mur."},
"whileMsg":function(d){return "ndërsa"},
"whileTooltip":function(d){return "Përsërit veprimet e brendshme derisa të arrihet pika  e mbarimit."},
"yes":function(d){return "Po"}};