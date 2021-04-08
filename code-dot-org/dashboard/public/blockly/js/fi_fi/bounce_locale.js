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
"basketballLaunchBall":function(d){return "heitä uusi pallo"},
"basketballLaunchBallTooltip":function(d){return "Heitä pallo peliin."},
"basketballSetPaddle":function(d){return "aseta käsi"},
"basketballSetPaddleSpeedFast":function(d){return "aseta nopea käsi nopeus"},
"basketballSetPaddleSpeedNormal":function(d){return "aseta normaali käsi nopeus"},
"basketballSetPaddleSpeedRandom":function(d){return "aseta satunnainen käsi nopeus"},
"basketballSetPaddleSpeedSlow":function(d){return "aseta hidas käsi nopeus"},
"basketballSetPaddleSpeedTooltip":function(d){return "Asettaa käden nopeuden"},
"basketballSetPaddleSpeedVeryFast":function(d){return "aseta todella nopea käsi nopeus"},
"basketballSetPaddleSpeedVerySlow":function(d){return "aseta todella hidas käsi nopeus"},
"basketballWhenBallMissesPaddle":function(d){return "kun pallo menee käden ohi"},
"basketballWhenPaddleCollided":function(d){return "kun pallo osuu käteen"},
"bounceBall":function(d){return "pompauta pallo"},
"bounceBallTooltip":function(d){return "Pompauta pallo toisesta esineestä."},
"continue":function(d){return "Jatka"},
"dirE":function(d){return "I"},
"dirN":function(d){return "P"},
"dirS":function(d){return "E"},
"dirW":function(d){return "L"},
"doCode":function(d){return "tee"},
"elseCode":function(d){return "muuten"},
"finalLevel":function(d){return "Onneksi olkoon! Olet suorittanut viimeisen ongelman."},
"heightParameter":function(d){return "korkeus"},
"ifCode":function(d){return "jos"},
"ifPathAhead":function(d){return "jos edessä on polku"},
"ifTooltip":function(d){return "Jos määrätyssä suunnassa on polku, niin suorita jokin toiminto."},
"ifelseTooltip":function(d){return "Jos määrätyssä suunnassa on polku, niin suorita ensimmäinen lohko toimintoja. Muuten suorita toinen lohko toimintoja."},
"incrementOpponentScore":function(d){return "lisää piste vastustajalle"},
"incrementOpponentScoreTooltip":function(d){return "Lisää vastustajan pisteisiin yksi piste."},
"incrementPlayerScore":function(d){return "lisää piste"},
"incrementPlayerScoreTooltip":function(d){return "Lisää yksi tämänhetkisen pelaajan pisteisiin."},
"isWall":function(d){return "onko tämä seinä"},
"isWallTooltip":function(d){return "Palauttaa tosi jos tässä on seinä."},
"launchBall":function(d){return "laukaise uusi pallo"},
"launchBallTooltip":function(d){return "Laukaise pallo peliin."},
"makeYourOwn":function(d){return "Luo oma Bounce-pelisi"},
"moveDown":function(d){return "liiku alas"},
"moveDownTooltip":function(d){return "Liikuta mailaa alaspäin."},
"moveForward":function(d){return "siirry eteenpäin"},
"moveForwardTooltip":function(d){return "Liikuta minua eteenpäin yhden välin verran."},
"moveLeft":function(d){return "liiku vasemmalle"},
"moveLeftTooltip":function(d){return "Liikuta mailaa vasemmalle."},
"moveRight":function(d){return "liiku oikealle"},
"moveRightTooltip":function(d){return "Liikuta mailaa oikealle."},
"moveUp":function(d){return "liiku ylös"},
"moveUpTooltip":function(d){return "Liikuta mailaa ylöspäin."},
"nextLevel":function(d){return "Onneksi olkoon! Olet suorittanut tämän pulman."},
"no":function(d){return "Ei"},
"noPathAhead":function(d){return "polulla on este"},
"noPathLeft":function(d){return "ei polkua vasemmalle"},
"noPathRight":function(d){return "ei polkua oikealle"},
"numBlocksNeeded":function(d){return "Pulman voi ratkaista %1 lohkolla."},
"pathAhead":function(d){return "polku edessä"},
"pathLeft":function(d){return "jos polku vasemmalle"},
"pathRight":function(d){return "jos polku oikealle"},
"pilePresent":function(d){return "tässä on kasa"},
"playSoundBounce":function(d){return "soita pompun ääni"},
"playSoundCheer":function(d){return "toista hurrauksen ääni"},
"playSoundCrunch":function(d){return "soita rusahdus"},
"playSoundGoal1":function(d){return "soita maalin ääni"},
"playSoundGoal2":function(d){return "soita maalin toinen ääni"},
"playSoundHit":function(d){return "soita osuman ääni"},
"playSoundKick":function(d){return "toista potku ääni"},
"playSoundLosePoint":function(d){return "soita pisteen häviön ääni"},
"playSoundLosePoint2":function(d){return "soita pisteen häviön toinen ääni"},
"playSoundRetro":function(d){return "soita retroääni"},
"playSoundRubber":function(d){return "soita kumin ääni"},
"playSoundSlap":function(d){return "soita läpsähdyksen ääni"},
"playSoundSlapshot":function(d){return "toista lämärin ääni"},
"playSoundSwish":function(d){return "soita humahduksen ääni"},
"playSoundTooltip":function(d){return "Soita valittu ääni."},
"playSoundWhistle":function(d){return "toista vihellyksen ääni"},
"playSoundWinPoint":function(d){return "soita pisteen voittamisen ääni"},
"playSoundWinPoint2":function(d){return "soita pisteen voittamisen toinen ääni"},
"playSoundWood":function(d){return "soita puinen ääni"},
"putdownTower":function(d){return "aseta torni"},
"reinfFeedbackMsg":function(d){return "Voit painaa \"Yritä uudelleen\" nappia palataksesi takaisin peliisi."},
"removeSquare":function(d){return "poista neliö"},
"repeatUntil":function(d){return "toista kunnes"},
"repeatUntilBlocked":function(d){return "niin kauan kuin polku edessä"},
"repeatUntilFinish":function(d){return "toista kunnes lopussa"},
"scoreText":function(d){return "Pistetilanne: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "aseta "+bounce_locale.v(d,"background")+" tausta"},
"setBackgroundHardcourt":function(d){return "aseta massakenttätausta"},
"setBackgroundRandom":function(d){return "aseta satunnainen tausta"},
"setBackgroundRetro":function(d){return "aseta retrotausta"},
"setBackgroundTooltip":function(d){return "Aseta taustakuva"},
"setBallHardcourt":function(d){return "aseta massakenttäpallo"},
"setBallRandom":function(d){return "aseta satunnainen pallo"},
"setBallRetro":function(d){return "aseta retropallo"},
"setBall":function(d){return "aseta "+bounce_locale.v(d,"ball")+" pallo"},
"setBallSpeedFast":function(d){return "aseta nopea pallon nopeus"},
"setBallSpeedNormal":function(d){return "aseta normaali pallon nopeus"},
"setBallSpeedRandom":function(d){return "aseta sattumanvarainen pallon nopeus"},
"setBallSpeedSlow":function(d){return "aseta hidas pallon nopeus"},
"setBallSpeedTooltip":function(d){return "aseta pallon nopeus"},
"setBallSpeedVeryFast":function(d){return "aseta erittäin nopea pallon nopeus"},
"setBallSpeedVerySlow":function(d){return "aseta hyvin hidas pallon nopeus"},
"setBallTooltip":function(d){return "Asettaa pallon kuvan"},
"setPaddle":function(d){return "aseta mela"},
"setPaddleHardcourt":function(d){return "aseta massakenttämaila"},
"setPaddleRandom":function(d){return "aseta satunnainen maila"},
"setPaddleRetro":function(d){return "aseta retromaila"},
"setPaddleSpeedFast":function(d){return "aseta nopea mailan nopeus"},
"setPaddleSpeedNormal":function(d){return "aseta normaali mailan nopeus"},
"setPaddleSpeedRandom":function(d){return "aseta sattumanvarainen mailan nopeus"},
"setPaddleSpeedSlow":function(d){return "aseta hidas mailan nopeus"},
"setPaddleSpeedTooltip":function(d){return "Asettaa mailan nopeuden"},
"setPaddleSpeedVeryFast":function(d){return "aseta erittäin nopea mailan nopeus"},
"setPaddleSpeedVerySlow":function(d){return "aseta erittäin hidas mailan nopeus"},
"setPaddleTooltip":function(d){return "aseta mailan kuva"},
"setPlayer":function(d){return "aseta pelaaja"},
"setPlayerSpeedFast":function(d){return "aseta nopea pelaaja nopeus"},
"setPlayerSpeedNormal":function(d){return "aseta normaali pelaaja nopeus"},
"setPlayerSpeedRandom":function(d){return "aseta satunnainen pelaaja nopeus"},
"setPlayerSpeedSlow":function(d){return "aseta hidas pelaaja nopeus"},
"setPlayerSpeedTooltip":function(d){return "Asettaa pelaajan nopeuden"},
"setPlayerSpeedVeryFast":function(d){return "aseta todella noepa pelaaja nopeus"},
"setPlayerSpeedVerySlow":function(d){return "aseta todella hidas pelaaja nopeus"},
"setTeamTooltip":function(d){return "Asettaa logon ja väriskeeman"},
"setTeam":function(d){return "Aseta joukkue "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Aseta joukkue satunnainen"},
"shareBounceTwitter":function(d){return "Käy katsomassa Bounce-peliäni. Kirjoitin sen itse @codeorg:lla"},
"shareBounceTwitterDonor":function(d){return "Tutustu Bounce peliin, jonka olen tehnyt. (Kiitos "+bounce_locale.v(d,"donor")+" @codeorg: n tukemisesta)"},
"shareGame":function(d){return "Jaa pelisi:"},
"turnLeft":function(d){return "käänny vasempaan"},
"turnRight":function(d){return "käänny oikeaan"},
"turnTooltip":function(d){return "Kääntää minua vasempaan tai oikeaan 90 astetta."},
"whenBallInGoal":function(d){return "kun pallo on maalissa"},
"whenBallInGoalTooltip":function(d){return "Suorita alla olevat toiminnot, kun pallo menee maaliin."},
"whenBallMissesPaddle":function(d){return "kun pallo ohittaa mailan"},
"whenBallMissesPaddleTooltip":function(d){return "Suorita alla olevan toiminnot, kun pallo ohittaa mailan."},
"whenBallMissesPlayer":function(d){return "kun pallo menee pelaajan ohi"},
"whenDown":function(d){return "kun nuoli alas"},
"whenDownTooltip":function(d){return "Suorita alla olevat toiminnot, kun alas-nuolinäppäintä painetaan."},
"whenGameStarts":function(d){return "kun peli alkaa"},
"whenGameStartsTooltip":function(d){return "Suorita alla olevat toiminnot, kun peli alkaa."},
"whenLeft":function(d){return "kun nuoli vasemmalle"},
"whenLeftTooltip":function(d){return "Suorita alla olevat toiminnot, kun vasenta nuolinäppäintä painetaan."},
"whenPaddleCollided":function(d){return "kun pallo osuu mailaan"},
"whenPaddleCollidedTooltip":function(d){return "Suorita alla olevat toiminnot, kun pallo osuu mailaan."},
"whenPlayerCollided":function(d){return "kun pallo osuu pelaajaan"},
"whenPlayerCollidedTooltip":function(d){return "Suorita toimet alla kun pallo osuu pelaajaan."},
"whenRight":function(d){return "kun nuoli oikealle"},
"whenRightTooltip":function(d){return "Suorita alla olevat toiminnot, kun oikeaa nuolinäppäintä painetaan."},
"whenUp":function(d){return "kun nuoli ylös"},
"whenUpTooltip":function(d){return "Suorita alla olevat toiminnot, kun ylös-nuolinäppäintä painetaan."},
"whenWallCollided":function(d){return "kun pallo osuu seinään"},
"whenWallCollidedTooltip":function(d){return "Suorita alla olevat toiminnot, kun pallo osuu seinään."},
"whileMsg":function(d){return "niin kauan kuin"},
"whileTooltip":function(d){return "Toista sisällä oleva toiminto kunnes saavutetaan loppupiste."},
"yes":function(d){return "Kyllä"}};