var flappy_locale = {lc:{"ar":function(n){
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
v:function(d,k){flappy_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){flappy_locale.c(d,k);return d[k] in p?p[d[k]]:(k=flappy_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){flappy_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).flappy_locale = {
"continue":function(d){return "Fortfahren"},
"doCode":function(d){return "machen"},
"elseCode":function(d){return "ansonsten"},
"endGame":function(d){return "Spiel beenden"},
"endGameTooltip":function(d){return "Beendet das Spiel."},
"finalLevel":function(d){return "Glückwunsch! Du hast die letzte Aufgabe gelöst."},
"flap":function(d){return "flattern"},
"flapRandom":function(d){return "zufällig stark flattern"},
"flapVerySmall":function(d){return "sehr wenig flattern"},
"flapSmall":function(d){return "wenig flattern"},
"flapNormal":function(d){return "normal flattern"},
"flapLarge":function(d){return "stark flattern"},
"flapVeryLarge":function(d){return "sehr stark flattern"},
"flapTooltip":function(d){return "Fliege Flappy nach oben."},
"flappySpecificFail":function(d){return "Dein Code sieht gut aus – es flattert mit jedem Klick. Aber du musst sehr oft klicken, um das Ziel zu erreichen."},
"incrementPlayerScore":function(d){return "Erziele einen Punkt"},
"incrementPlayerScoreTooltip":function(d){return "Punktestand des Spielers um eins erhöhen."},
"nextLevel":function(d){return "Glückwunsch! Du hast diese Aufgabe abgeschlossen."},
"no":function(d){return "Nein"},
"numBlocksNeeded":function(d){return "Diese Aufgabe kann mit %1 Bausteinen gelöst werden."},
"playSoundRandom":function(d){return "zufälliges Geräusch abspielen"},
"playSoundBounce":function(d){return "Bounce-Geräusch abspielen"},
"playSoundCrunch":function(d){return "spiele Knirsch Geräusch"},
"playSoundDie":function(d){return "trauriges Geräusch abspielen"},
"playSoundHit":function(d){return "Schlag-Geräusch abspielen"},
"playSoundPoint":function(d){return "Punkt-Geräusch abspielen"},
"playSoundSwoosh":function(d){return "Swoosh-Geräusch abspielen"},
"playSoundWing":function(d){return "Flügel-Geräusch abspielen"},
"playSoundJet":function(d){return "Jet-Geräusch abspielen"},
"playSoundCrash":function(d){return "Absturz-Geräusch abspielen"},
"playSoundJingle":function(d){return "Jingle-Geräusch abspielen"},
"playSoundSplash":function(d){return "Platscher-Geräusch abspielen"},
"playSoundLaser":function(d){return "Laser-Geräusch abspielen"},
"playSoundTooltip":function(d){return "Das ausgewählte Geräusch abspielen."},
"reinfFeedbackMsg":function(d){return "Du kannst die „Erneut versuchen“-Taste drücken, um weiterzuspielen."},
"scoreText":function(d){return "Punktestand: "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "Hintergrund einstellen"},
"setBackgroundRandom":function(d){return "zufälligen Hintergrund einstellen"},
"setBackgroundFlappy":function(d){return "Stadt (Tag) Hintergrund einstellen"},
"setBackgroundNight":function(d){return "Stadt (Nacht) Hintergrund einstellen"},
"setBackgroundSciFi":function(d){return "Sci-Fi Hintergrund einstellen"},
"setBackgroundUnderwater":function(d){return "Unterwasser Hintergrund einstellen"},
"setBackgroundCave":function(d){return "Höhle Hintergrund einstellen"},
"setBackgroundSanta":function(d){return "Weihnachtsmann-Hintergrund einstellen"},
"setBackgroundTooltip":function(d){return "Legt das Hintergrundbild fest"},
"setGapRandom":function(d){return "Zufällige Lücke setzen"},
"setGapVerySmall":function(d){return "Sehr kleine Lücke setzen"},
"setGapSmall":function(d){return "Kleine Lücke setzen"},
"setGapNormal":function(d){return "Normale Lücke setzen"},
"setGapLarge":function(d){return "Große Lücke setzen"},
"setGapVeryLarge":function(d){return "Sehr große Lücke setzen"},
"setGapHeightTooltip":function(d){return "Legt den vertikalen Abstand eines Hindernisses fest."},
"setGravityRandom":function(d){return "Setze Schwerkraft auf zufällig"},
"setGravityVeryLow":function(d){return "Setze Schwerkraft auf sehr niedrig"},
"setGravityLow":function(d){return "Setze Schwerkraft auf niedrig"},
"setGravityNormal":function(d){return "Setze Schwerkraft auf normal"},
"setGravityHigh":function(d){return "Setze Schwerkraft auf hoch"},
"setGravityVeryHigh":function(d){return "Setze Schwerkraft auf sehr hoch"},
"setGravityTooltip":function(d){return "Legt die Schwerkraft des Levels fest"},
"setGround":function(d){return "Setzt den Boden"},
"setGroundRandom":function(d){return "Setzt den Boden auf zufällig"},
"setGroundFlappy":function(d){return "Setzt den Boden auf Boden"},
"setGroundSciFi":function(d){return "Setzt den Boden auf Sci-Fi"},
"setGroundUnderwater":function(d){return "Setzt den Boden auf Unterwasser"},
"setGroundCave":function(d){return "Setzt den Boden auf Höhle"},
"setGroundSanta":function(d){return "Setzt den Boden auf Weihnachtsmann"},
"setGroundLava":function(d){return "Setzt den Boden auf Lava"},
"setGroundTooltip":function(d){return "Legt ein Bild für den Boden fest"},
"setObstacle":function(d){return "Setzt das Hindernis"},
"setObstacleRandom":function(d){return "Setzt das Hindernis auf zufällig"},
"setObstacleFlappy":function(d){return "Setzt das Hindernis auf Röhre"},
"setObstacleSciFi":function(d){return "Setzt das Hindernis auf Sci-Fi"},
"setObstacleUnderwater":function(d){return "Setzt das Hindernis auf Pflanze"},
"setObstacleCave":function(d){return "Setzt das Hindernis auf Höhle"},
"setObstacleSanta":function(d){return "Setzt das Hindernis auf Kamin"},
"setObstacleLaser":function(d){return "Setzt das Hindernis auf Laser"},
"setObstacleTooltip":function(d){return "Legt ein Bild für das Hindernis fest"},
"setPlayer":function(d){return "Setzt den Spieler"},
"setPlayerRandom":function(d){return "Setzt den Spieler auf zufällig"},
"setPlayerFlappy":function(d){return "Setzt den Spieler auf gelben Vogel"},
"setPlayerRedBird":function(d){return "Setzt den Spieler auf roten Vogel"},
"setPlayerSciFi":function(d){return "Setzt den Spieler auf Raumschiff"},
"setPlayerUnderwater":function(d){return "Setzt den Spieler auf Fisch"},
"setPlayerCave":function(d){return "Setzt den Spieler auf Fledermaus"},
"setPlayerSanta":function(d){return "Setzt den Spieler auf Weihnachtsmann"},
"setPlayerShark":function(d){return "Setzt den Spieler auf Haifisch"},
"setPlayerEaster":function(d){return "Setzt den Spieler auf Osterhase"},
"setPlayerBatman":function(d){return "Setzt den Spieler auf Batman"},
"setPlayerSubmarine":function(d){return "Setzt den Spieler auf U-Boot"},
"setPlayerUnicorn":function(d){return "Setzt den Spieler auf Einhorn"},
"setPlayerFairy":function(d){return "Setzt den Spieler auf Fee"},
"setPlayerSuperman":function(d){return "Setzt den Spieler auf Flappyman"},
"setPlayerTurkey":function(d){return "Setzt den Spieler auf Truthahn"},
"setPlayerTooltip":function(d){return "Legt ein Bild für den Spieler fest"},
"setScore":function(d){return "Punktestand setzen auf"},
"setScoreTooltip":function(d){return "Legt den Punktestand des Spielers fest"},
"setSpeed":function(d){return "Stelle Geschwindigkeit ein"},
"setSpeedTooltip":function(d){return "Stellt die Level-Geschwindigkeit ein"},
"shareFlappyTwitter":function(d){return "Schau Dir mein selbstgemachtes Flappy-Spiel an. Ich habe es mit @codeorg selbst programmiert."},
"shareFlappyTwitterDonor":function(d){return "Check out the Flappy game I made. (Thanks "+flappy_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Teile dein Spiel:"},
"soundRandom":function(d){return "zufällig"},
"soundBounce":function(d){return "abprallen"},
"soundCrunch":function(d){return "Crunch"},
"soundDie":function(d){return "Traurig"},
"soundHit":function(d){return "Schlag"},
"soundPoint":function(d){return "Punkt"},
"soundSwoosh":function(d){return "Swoosh"},
"soundWing":function(d){return "Flügelgeräusch"},
"soundJet":function(d){return "Jet"},
"soundCrash":function(d){return "Absturz"},
"soundJingle":function(d){return "Bimmeln"},
"soundSplash":function(d){return "Platsch"},
"soundLaser":function(d){return "Laser"},
"speedRandom":function(d){return "Stelle zufällige Geschwindigkeit ein"},
"speedVerySlow":function(d){return "Stelle sehr niedrige Geschwindigkeit ein"},
"speedSlow":function(d){return "Stelle niedrige Geschwindigkeit ein"},
"speedNormal":function(d){return "Stelle normale Geschwindigkeit ein"},
"speedFast":function(d){return "Stelle hohe Geschwindigkeit ein"},
"speedVeryFast":function(d){return "Stelle sehr hohe Geschwindigkeit ein"},
"whenClick":function(d){return "beim Klicken"},
"whenClickTooltip":function(d){return "Führe die folgenden Aktionen aus, wenn ein Klick-Ereignis passiert."},
"whenCollideGround":function(d){return "Wenn auf Boden stürzt"},
"whenCollideGroundTooltip":function(d){return "Führe die folgenden Aktionen aus, wenn Flappy den Boden trifft."},
"whenCollideObstacle":function(d){return "Wenn ein Hindernis getroffen wird"},
"whenCollideObstacleTooltip":function(d){return "Führe die folgenden Aktionen aus, wenn Flappy ein Hindernis trifft."},
"whenEnterObstacle":function(d){return "Wenn Hindernis überwunden"},
"whenEnterObstacleTooltip":function(d){return "Führe die folgenden Aktionen aus, wenn Flappy ein Hindernis überwunden hat."},
"whenRunButtonClick":function(d){return "wenn das Spiel beginnt"},
"whenRunButtonClickTooltip":function(d){return "Führe die folgenden Aktionen aus, wenn das Spiel beginnt."},
"yes":function(d){return "Ja"}};