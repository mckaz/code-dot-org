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
"basketballLaunchBall":function(d){return "viska uus pall"},
"basketballLaunchBallTooltip":function(d){return "Viska pall mängu."},
"basketballSetPaddle":function(d){return "seadista käsi"},
"basketballSetPaddleSpeedFast":function(d){return "määra kiire käe kiirus"},
"basketballSetPaddleSpeedNormal":function(d){return "määra käe tavakiirus"},
"basketballSetPaddleSpeedRandom":function(d){return "määra juhuslik käe kiirus"},
"basketballSetPaddleSpeedSlow":function(d){return "määra käe aeglane kiirus"},
"basketballSetPaddleSpeedTooltip":function(d){return "Määra käe kiirus"},
"basketballSetPaddleSpeedVeryFast":function(d){return "määra väga kiire käe kiirus"},
"basketballSetPaddleSpeedVerySlow":function(d){return "määra väga aeglase käe kiirus"},
"basketballWhenBallMissesPaddle":function(d){return "kui pall läheb käest mööda"},
"basketballWhenPaddleCollided":function(d){return "kui pall põrkab käe pihta"},
"bounceBall":function(d){return "põrgata palli"},
"bounceBallTooltip":function(d){return "Põrgata pall objektilt."},
"continue":function(d){return "Jätka"},
"dirE":function(d){return "Ida"},
"dirN":function(d){return "Põhi"},
"dirS":function(d){return "Lõuna"},
"dirW":function(d){return "Lääs"},
"doCode":function(d){return "täida"},
"elseCode":function(d){return "muidu"},
"finalLevel":function(d){return "Tubli! Sa lahendasid viimase mõistatuse."},
"heightParameter":function(d){return "kõrgus"},
"ifCode":function(d){return "kui"},
"ifPathAhead":function(d){return "kui ees on tee"},
"ifTooltip":function(d){return "Kui antud suunal on tee, täida mingid käsud."},
"ifelseTooltip":function(d){return "Kui antud suunal on tee, täida esimene käskude plokk. Muidu täida teine käskude plokk."},
"incrementOpponentScore":function(d){return "lisa vastasele punkt"},
"incrementOpponentScoreTooltip":function(d){return "Lisa üks vastase skoorile"},
"incrementPlayerScore":function(d){return "lisa punkt"},
"incrementPlayerScoreTooltip":function(d){return "Anna hetkemängijale üks punkt."},
"isWall":function(d){return "kas see on sein"},
"isWallTooltip":function(d){return "Tagastab \"tõene\", kui seal on sein"},
"launchBall":function(d){return "pane käiku uus pall"},
"launchBallTooltip":function(d){return "Pane pall mängu"},
"makeYourOwn":function(d){return "Loo päris oma põrgatamismäng"},
"moveDown":function(d){return "liigu alla"},
"moveDownTooltip":function(d){return "Liiguta reket allapoole."},
"moveForward":function(d){return "liigu edasi"},
"moveForwardTooltip":function(d){return "Liiguta mind ühe ühiku võrra edasi."},
"moveLeft":function(d){return "liigu vasakule"},
"moveLeftTooltip":function(d){return "Liiguta reket vasakule."},
"moveRight":function(d){return "liigu paremale"},
"moveRightTooltip":function(d){return "Liiguta reketit paremale."},
"moveUp":function(d){return "liigu üles"},
"moveUpTooltip":function(d){return "Liiguta reket ülespoole."},
"nextLevel":function(d){return "Palju õnne! See ülesanne on lahendatud."},
"no":function(d){return "Ei"},
"noPathAhead":function(d){return "teel on takistus"},
"noPathLeft":function(d){return "vasakul ei ole teed"},
"noPathRight":function(d){return "paremal ei ole teed"},
"numBlocksNeeded":function(d){return "Selle ülesande saab lahendada %1 plokiga."},
"pathAhead":function(d){return "tee on ees"},
"pathLeft":function(d){return "kui vasakul on tee"},
"pathRight":function(d){return "kui paremal on tee"},
"pilePresent":function(d){return "seal on kuhi"},
"playSoundBounce":function(d){return "mängi põrkamise heli"},
"playSoundCheer":function(d){return "mängi ergutamise heli"},
"playSoundCrunch":function(d){return "lase heli \"krõbin\""},
"playSoundGoal1":function(d){return "lase heli \"värav 1\""},
"playSoundGoal2":function(d){return "lase heli \"värav 2\""},
"playSoundHit":function(d){return "lase heli \"löök\""},
"playSoundKick":function(d){return "mängi heli 'löök'"},
"playSoundLosePoint":function(d){return "lase heli \"kaotasid punkti\""},
"playSoundLosePoint2":function(d){return "lase heli \"kaotasid punkti 2\""},
"playSoundRetro":function(d){return "lase heli \"retro\""},
"playSoundRubber":function(d){return "lase heli \"kumm\""},
"playSoundSlap":function(d){return "lase heli \"laks\""},
"playSoundSlapshot":function(d){return "mängi hokilöögi heli"},
"playSoundSwish":function(d){return "mängi heli võrk vihiseb"},
"playSoundTooltip":function(d){return "Lase valitud heli."},
"playSoundWhistle":function(d){return "mängi heli 'vile'"},
"playSoundWinPoint":function(d){return "mängi heli \"võidad punkti\""},
"playSoundWinPoint2":function(d){return "mängi heli \"võidad punkti 2\""},
"playSoundWood":function(d){return "mängi heli \"puit\""},
"putdownTower":function(d){return "aseta torn maha"},
"reinfFeedbackMsg":function(d){return "Te võite vajutada \"Proovi uuesti\" nuppu, et minna tagasi oma mängu mängima."},
"removeSquare":function(d){return "eemalda ruut"},
"repeatUntil":function(d){return "korda kuni"},
"repeatUntilBlocked":function(d){return "kuni tee on ees"},
"repeatUntilFinish":function(d){return "korda kuni lõpuni"},
"scoreText":function(d){return "Skoor: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "määra "+bounce_locale.v(d,"background")+" stseen"},
"setBackgroundHardcourt":function(d){return "määra kõvakattega väljaku stseen"},
"setBackgroundRandom":function(d){return "vali suvaline taust"},
"setBackgroundRetro":function(d){return "vali retro taust"},
"setBackgroundTooltip":function(d){return "Valib taustapildi"},
"setBallHardcourt":function(d){return "vali pall kõvakattega väljaku jaoks"},
"setBallRandom":function(d){return "vali suvaline pall"},
"setBallRetro":function(d){return "vali retro pall"},
"setBall":function(d){return "määra "+bounce_locale.v(d,"ball")+" pall"},
"setBallSpeedFast":function(d){return "Määra kiire palli kiirus"},
"setBallSpeedNormal":function(d){return "vali tavaline palli liikumise kiirus"},
"setBallSpeedRandom":function(d){return "määra suvalise palli liikumise kiirus"},
"setBallSpeedSlow":function(d){return "määra aeglase palli liikumise kiirus"},
"setBallSpeedTooltip":function(d){return "Määrab ära palli liikumise kiiruse"},
"setBallSpeedVeryFast":function(d){return "vali väga suur palli liikumise kiirus"},
"setBallSpeedVerySlow":function(d){return "määra väga aeglase palli liikumise kiirus"},
"setBallTooltip":function(d){return "Valib palli kujutise"},
"setPaddle":function(d){return "määra reket"},
"setPaddleHardcourt":function(d){return "määra reket kõvakattega väljaku jaoks"},
"setPaddleRandom":function(d){return "määra suvaline reket"},
"setPaddleRetro":function(d){return "vali retro reket"},
"setPaddleSpeedFast":function(d){return "määra kiire reketi liikumise kiirus"},
"setPaddleSpeedNormal":function(d){return "määra tavalise reketi liikumise kiirus"},
"setPaddleSpeedRandom":function(d){return "määra suvalise reketi liikumise kiirus"},
"setPaddleSpeedSlow":function(d){return "määra aeglase reketi liikumise kiirus"},
"setPaddleSpeedTooltip":function(d){return "Määrab reketi liikumise kiiruse"},
"setPaddleSpeedVeryFast":function(d){return "määra väga kiire reketi liikumise kiirus"},
"setPaddleSpeedVerySlow":function(d){return "määra väga aeglase reketi liikumise kiirus"},
"setPaddleTooltip":function(d){return "määra reketi kujutis"},
"setPlayer":function(d){return "määra mängija karakter"},
"setPlayerSpeedFast":function(d){return "määra kiire mängija kiirus"},
"setPlayerSpeedNormal":function(d){return "määra tavalise mängija kiirus"},
"setPlayerSpeedRandom":function(d){return "määra juhusliku mängija kiirus"},
"setPlayerSpeedSlow":function(d){return "määra aeglase mängija kiirus"},
"setPlayerSpeedTooltip":function(d){return "Määra mängija kiirus"},
"setPlayerSpeedVeryFast":function(d){return "määra väga kiire mängija kiirus"},
"setPlayerSpeedVerySlow":function(d){return "määra väga aeglase mängija kiirus"},
"setTeamTooltip":function(d){return "Määra logo ja värvid"},
"setTeam":function(d){return "Määra võistkond "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Määra juhuslik võistkond"},
"shareBounceTwitter":function(d){return "Vaata mu Põrgatamismängu. Ma tegin selle ise @codeorg abil"},
"shareBounceTwitterDonor":function(d){return "Vaata Bounce mängu, mille ma tegin. (Aitäh "+bounce_locale.v(d,"donor")+", et toetasid @codeorg)"},
"shareGame":function(d){return "Jaga oma mängu:"},
"turnLeft":function(d){return "pööra vasakule"},
"turnRight":function(d){return "pööra paremale"},
"turnTooltip":function(d){return "Pöörab mind vasakule või paremale 90 kraadi võrra."},
"whenBallInGoal":function(d){return "kui pall on väravas"},
"whenBallInGoalTooltip":function(d){return "Täida allolevad käsud, kui pall läheb väravasse."},
"whenBallMissesPaddle":function(d){return "kui pall lendab reketist mööda"},
"whenBallMissesPaddleTooltip":function(d){return "Kui pall lendab reketist mööda, teosta järgmised toimingud."},
"whenBallMissesPlayer":function(d){return "kui pall läheb mängijast mööda"},
"whenDown":function(d){return "kui hoitakse allanoolt"},
"whenDownTooltip":function(d){return "Täida allolevad käsud, kui vajutatakse allanoolt."},
"whenGameStarts":function(d){return "kui mäng algab"},
"whenGameStartsTooltip":function(d){return "Täidab allolevad käsud, kui mäng algab."},
"whenLeft":function(d){return "kui hoitakse vasaknoolt"},
"whenLeftTooltip":function(d){return "Kui kasutaja vajutab vasakpoolset noolt, teosta järgmised toimingud."},
"whenPaddleCollided":function(d){return "kui reket lööb palli"},
"whenPaddleCollidedTooltip":function(d){return "Kui reket lööb palli, teosta järgmised toimingud."},
"whenPlayerCollided":function(d){return "kui pall läheb mängijale pihta"},
"whenPlayerCollidedTooltip":function(d){return "Tee alljärgnevad tegevused kui pall põrkab vastu mängijat."},
"whenRight":function(d){return "kui hoitakse paremnoolt"},
"whenRightTooltip":function(d){return "Täida allolevad käsud, kui vajutatakse paremnoolt."},
"whenUp":function(d){return "kui hoitakse ülesnoolt"},
"whenUpTooltip":function(d){return "Täida allolevad käsud, kui vajutatakse ülesnoolt."},
"whenWallCollided":function(d){return "kui pall läheb vastu seina"},
"whenWallCollidedTooltip":function(d){return "Täida allolevad käsud, kui pall läheb vastu seina."},
"whileMsg":function(d){return "tingimusel"},
"whileTooltip":function(d){return "Korrake lisatud tegevusi kuni lõpppunkt on saavutatud."},
"yes":function(d){return "Jah"}};