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
"continue":function(d){return "Fortsett"},
"doCode":function(d){return "Gjør"},
"elseCode":function(d){return "ellers"},
"endGame":function(d){return "Avslutt spill"},
"endGameTooltip":function(d){return "Avslutter spillet."},
"finalLevel":function(d){return "Gratulerer! Du har løst den siste utfordringen."},
"flap":function(d){return "flaks"},
"flapRandom":function(d){return "flaks en tilfeldig mengde"},
"flapVerySmall":function(d){return "flaks en veldig liten mengde"},
"flapSmall":function(d){return "flaks en liten mengde"},
"flapNormal":function(d){return "flaks en normal mengde"},
"flapLarge":function(d){return "flaks en stor mengde"},
"flapVeryLarge":function(d){return "flaks en veldig stor mengde"},
"flapTooltip":function(d){return "Fly Flappy oppover."},
"flappySpecificFail":function(d){return "Koden din ser bra ut - den vil flakse ved hvert klikk. Men du må klikke mange ganger for å flakse til målet."},
"incrementPlayerScore":function(d){return "Få et poeng"},
"incrementPlayerScoreTooltip":function(d){return "Legg til en til nåværende spillers poengsum."},
"nextLevel":function(d){return "Gratulerer! Du har fullført denne utfordringen."},
"no":function(d){return "Nei"},
"numBlocksNeeded":function(d){return "Denne utfordringen kan bli løst med %1 blokker."},
"playSoundRandom":function(d){return "spill tilfeldig lyd"},
"playSoundBounce":function(d){return "spill sprett lyd"},
"playSoundCrunch":function(d){return "spill knas lyd"},
"playSoundDie":function(d){return "spill trist lyd"},
"playSoundHit":function(d){return "spill knus lyd"},
"playSoundPoint":function(d){return "spill poeng lyd"},
"playSoundSwoosh":function(d){return "spill svosj lyd"},
"playSoundWing":function(d){return "spill vinge lyd"},
"playSoundJet":function(d){return "spill jet lyd"},
"playSoundCrash":function(d){return "spill kræsj lyd"},
"playSoundJingle":function(d){return "spill bjelle lyd"},
"playSoundSplash":function(d){return "spill plask lyd"},
"playSoundLaser":function(d){return "spill laser lyd"},
"playSoundTooltip":function(d){return "Spill den valgte lyden."},
"reinfFeedbackMsg":function(d){return "Du kan trykke på \"Prøv igjen\" for å gå tilbake til spillet ditt."},
"scoreText":function(d){return "Sluttresultat: "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "sett scene"},
"setBackgroundRandom":function(d){return "sett tilfeldig scene"},
"setBackgroundFlappy":function(d){return "sett by (dag) scene"},
"setBackgroundNight":function(d){return "sett by (natt) scene"},
"setBackgroundSciFi":function(d){return "sett Sci-Fi scene"},
"setBackgroundUnderwater":function(d){return "sett undervann scene"},
"setBackgroundCave":function(d){return "sett Hule scene"},
"setBackgroundSanta":function(d){return "sett Julenissen scene"},
"setBackgroundTooltip":function(d){return "Setter bakgrunnsbildet"},
"setGapRandom":function(d){return "Angi et tilfeldig mellomrom"},
"setGapVerySmall":function(d){return "Angi en svært liten åpning"},
"setGapSmall":function(d){return "Angi en liten åpning"},
"setGapNormal":function(d){return "Angi en normal åpning"},
"setGapLarge":function(d){return "Angi en stor åpning"},
"setGapVeryLarge":function(d){return "Angi en svært stort åpning"},
"setGapHeightTooltip":function(d){return "Setter den vertikale åpningen i et hinder"},
"setGravityRandom":function(d){return "Angi tilfeldig tyngdekraft"},
"setGravityVeryLow":function(d){return "Angi veldig lav tyngdekraft"},
"setGravityLow":function(d){return "Angi lav tyngdekraft"},
"setGravityNormal":function(d){return "Angi normal tyngdekraft"},
"setGravityHigh":function(d){return "Angi høy tyngdekraft"},
"setGravityVeryHigh":function(d){return "Angi veldig høy tyngdekraft"},
"setGravityTooltip":function(d){return "Angir nivåets tyngdekraft"},
"setGround":function(d){return "sett bakken"},
"setGroundRandom":function(d){return "Angi bakke Tilfeldig"},
"setGroundFlappy":function(d){return "Angi bakke Bakke"},
"setGroundSciFi":function(d){return "Angi bakke Sci-Fi"},
"setGroundUnderwater":function(d){return "Angi bakke Undersjøisk"},
"setGroundCave":function(d){return "Angi bakke Hule"},
"setGroundSanta":function(d){return "Angi bakke Julenissen"},
"setGroundLava":function(d){return "Angi bakke Lava"},
"setGroundTooltip":function(d){return "Angir bakke-bilde"},
"setObstacle":function(d){return "sett hinder"},
"setObstacleRandom":function(d){return "Angi hinder Tilfeldig"},
"setObstacleFlappy":function(d){return "Angi hinder Rør"},
"setObstacleSciFi":function(d){return "Angi hinder Sci-Fi"},
"setObstacleUnderwater":function(d){return "Angi hinder Plante"},
"setObstacleCave":function(d){return "Angi hinder Hule"},
"setObstacleSanta":function(d){return "Angi hinder Pipe"},
"setObstacleLaser":function(d){return "Angi hinder Laser"},
"setObstacleTooltip":function(d){return "Angir hinder-bildet"},
"setPlayer":function(d){return "sett spiller"},
"setPlayerRandom":function(d){return "Angi spiller Tilfeldig"},
"setPlayerFlappy":function(d){return "Angi spiller Gul Fugl"},
"setPlayerRedBird":function(d){return "Angi spiller Rød Fugl"},
"setPlayerSciFi":function(d){return "Angi spiller Romskip"},
"setPlayerUnderwater":function(d){return "Angi spiller Fisk"},
"setPlayerCave":function(d){return "Angi spiller Flaggermus"},
"setPlayerSanta":function(d){return "Angi spiller Julenisse"},
"setPlayerShark":function(d){return "Angi spiller Hai"},
"setPlayerEaster":function(d){return "angi spiller Påskehare"},
"setPlayerBatman":function(d){return "Angi spiller Bat guy"},
"setPlayerSubmarine":function(d){return "angi spiller Ubåt"},
"setPlayerUnicorn":function(d){return "angi spiller Enhjørning"},
"setPlayerFairy":function(d){return "angi spiller Fe"},
"setPlayerSuperman":function(d){return "angi spiller Flappymann"},
"setPlayerTurkey":function(d){return "angi spiller Kalkun"},
"setPlayerTooltip":function(d){return "Angir spiller-bilde"},
"setScore":function(d){return "Angi poengsum"},
"setScoreTooltip":function(d){return "Angir spillerens poengsum"},
"setSpeed":function(d){return "sett hastighet"},
"setSpeedTooltip":function(d){return "Setter nivåets hastighet"},
"shareFlappyTwitter":function(d){return "Sjekk ut Flappy-spillet jeg har laget! Jeg laget det selv med @codeorg"},
"shareFlappyTwitterDonor":function(d){return "Sjekk ut spillet jeg lagde. (Takk "+flappy_locale.v(d,"donor")+" for støtten til @codeorg #Kodetimen)"},
"shareGame":function(d){return "Del ditt spill:"},
"soundRandom":function(d){return "tilfeldig"},
"soundBounce":function(d){return "sprett"},
"soundCrunch":function(d){return "knas"},
"soundDie":function(d){return "trist"},
"soundHit":function(d){return "knus"},
"soundPoint":function(d){return "poeng"},
"soundSwoosh":function(d){return "svosj"},
"soundWing":function(d){return "vinge"},
"soundJet":function(d){return "jet"},
"soundCrash":function(d){return "krasj"},
"soundJingle":function(d){return "bjelle"},
"soundSplash":function(d){return "plask"},
"soundLaser":function(d){return "laser"},
"speedRandom":function(d){return "sett tilfeldig hastighet"},
"speedVerySlow":function(d){return "sett veldig treg hastighet"},
"speedSlow":function(d){return "sett treg hastighet"},
"speedNormal":function(d){return "sett normal hastighet"},
"speedFast":function(d){return "sett rask hastighet"},
"speedVeryFast":function(d){return "sett veldig rask hastighet"},
"whenClick":function(d){return "Når klikk"},
"whenClickTooltip":function(d){return "Utfør handlingene nedenfor når en klikk-hendelse skjer."},
"whenCollideGround":function(d){return "når treffer bakken"},
"whenCollideGroundTooltip":function(d){return "Utfør handlingene nedenfor når Flappy treffer bakken."},
"whenCollideObstacle":function(d){return "når treffer en hindring"},
"whenCollideObstacleTooltip":function(d){return "Utfør handlingene nedenfor når Flappy treffer en hindring."},
"whenEnterObstacle":function(d){return "når passert hindring"},
"whenEnterObstacleTooltip":function(d){return "Utfør handlingene nedenfor når Flappy møter en hindring."},
"whenRunButtonClick":function(d){return "når spillet starter"},
"whenRunButtonClickTooltip":function(d){return "Utfør handlingene nedenfor når spillet starter."},
"yes":function(d){return "Ja"}};