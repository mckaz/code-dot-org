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
"continue":function(d){return "Ar aghaidh"},
"doCode":function(d){return " "},
"elseCode":function(d){return "i ngach cás eile"},
"endGame":function(d){return "cuir deireadh leis an gcluiche"},
"endGameTooltip":function(d){return "Cuireann seo deireadh leis an gcluiche."},
"finalLevel":function(d){return "Comhghairdeas! Chríochnaigh tú an dúshlán deireanach."},
"flap":function(d){return "gread"},
"flapRandom":function(d){return "gread go randamach"},
"flapVerySmall":function(d){return "gread go han-lag"},
"flapSmall":function(d){return "gread go lag"},
"flapNormal":function(d){return "gread mar is gnáth"},
"flapLarge":function(d){return "gread go láidir"},
"flapVeryLarge":function(d){return "gread go han-láidir"},
"flapTooltip":function(d){return "Eitil suas."},
"flappySpecificFail":function(d){return "Tá cuma bhreá ar an gcód a scríobh tú - greadfaidh sé le gach clic. Ach is gá na sciatháin a ghreadadh go minic chun an sprioc a bhaint amach."},
"incrementPlayerScore":function(d){return "tabhair pointe don imreoir"},
"incrementPlayerScoreTooltip":function(d){return "Tugann seo pointe amháin don imreoir reatha."},
"nextLevel":function(d){return "Comhghairdeas! Chríochnaigh tú an dúshlán seo."},
"no":function(d){return "Níl"},
"numBlocksNeeded":function(d){return "Is féidir an dúshlán seo a chríochnú le %1 bloc."},
"playSoundRandom":function(d){return "seinn fuaim: randamach"},
"playSoundBounce":function(d){return "seinn fuaim: preabadh"},
"playSoundCrunch":function(d){return "seinn fuaim: cnagadh"},
"playSoundDie":function(d){return "seinn fuaim: brón"},
"playSoundHit":function(d){return "seinn fuaim: smíste"},
"playSoundPoint":function(d){return "seinn fuaim: gnóthú pointe"},
"playSoundSwoosh":function(d){return "seinn fuaim: greadadh"},
"playSoundWing":function(d){return "seinn fuaim: sciathán"},
"playSoundJet":function(d){return "seinn fuaim: scairdeitleán"},
"playSoundCrash":function(d){return "seinn fuaim: tuairteáil"},
"playSoundJingle":function(d){return "seinn fuaim: clingeadh"},
"playSoundSplash":function(d){return "seinn fuaim: pleist"},
"playSoundLaser":function(d){return "seinn fuaim: léasar"},
"playSoundTooltip":function(d){return "Seinn an fhuaim roghnaithe."},
"reinfFeedbackMsg":function(d){return "Is féidir leat an cnaipe \"Bain triail eile as\" a chliceáil chun filleadh ar do chluiche."},
"scoreText":function(d){return "Scór: "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "socraigh an radharc"},
"setBackgroundRandom":function(d){return "socraigh an radharc: Randamach"},
"setBackgroundFlappy":function(d){return "socraigh an radharc: Cathair (lá)"},
"setBackgroundNight":function(d){return "socraigh an radharc: Cathair (oíche)"},
"setBackgroundSciFi":function(d){return "socraigh an radharc: Todhchaíoch"},
"setBackgroundUnderwater":function(d){return "socraigh an radharc: Faoi Uisce"},
"setBackgroundCave":function(d){return "socraigh an radharc: Pluais"},
"setBackgroundSanta":function(d){return "socraigh an radharc: Daidí na Nollag"},
"setBackgroundTooltip":function(d){return "Socraíonn seo stíl an chúlra"},
"setGapRandom":function(d){return "socraigh bearna randamach"},
"setGapVerySmall":function(d){return "socraigh bearna an-bheag"},
"setGapSmall":function(d){return "socraigh bearna bheag"},
"setGapNormal":function(d){return "socraigh gnáthbhearna"},
"setGapLarge":function(d){return "socraigh bearna mhór"},
"setGapVeryLarge":function(d){return "socraigh bearna an-mhór"},
"setGapHeightTooltip":function(d){return "Socraíonn seo an bhearna i gconstaic"},
"setGravityRandom":function(d){return "socraigh domhantarraingt randamach"},
"setGravityVeryLow":function(d){return "socraigh domhantarraingt an-lag"},
"setGravityLow":function(d){return "socraigh domhantarraingt lag"},
"setGravityNormal":function(d){return "socraigh domhantarraingt mar is gnáth"},
"setGravityHigh":function(d){return "socraigh domhantarraingt láidir"},
"setGravityVeryHigh":function(d){return "socraigh domhantarraingt an-láidir"},
"setGravityTooltip":function(d){return "Socraíonn seo domhantarraingt don leibhéal"},
"setGround":function(d){return "socraigh an talamh"},
"setGroundRandom":function(d){return "socraigh an talamh: Randamach"},
"setGroundFlappy":function(d){return "socraigh an talamh: Gnáth-Thalamh"},
"setGroundSciFi":function(d){return "socraigh an talamh: Todhchaíoch"},
"setGroundUnderwater":function(d){return "socraigh an talamh: Faoi Uisce"},
"setGroundCave":function(d){return "socraigh an talamh: Pluais"},
"setGroundSanta":function(d){return "socraigh an talamh: Daidí na Nollag"},
"setGroundLava":function(d){return "socraigh an talamh: Laibhe"},
"setGroundTooltip":function(d){return "Socraíonn seo stíl an talaimh"},
"setObstacle":function(d){return "socraigh constaic"},
"setObstacleRandom":function(d){return "socraigh constaic: Randamach"},
"setObstacleFlappy":function(d){return "socraigh constaic: Píopa"},
"setObstacleSciFi":function(d){return "socraigh constaic: Todhchaíoch"},
"setObstacleUnderwater":function(d){return "socraigh constaic: Planda"},
"setObstacleCave":function(d){return "socraigh constaic: Pluais"},
"setObstacleSanta":function(d){return "socraigh constaic: Simléar"},
"setObstacleLaser":function(d){return "socraigh constaic: Léasar"},
"setObstacleTooltip":function(d){return "Socraíonn seo cuma na constaice"},
"setPlayer":function(d){return "socraigh imreoir"},
"setPlayerRandom":function(d){return "socraigh imreoir: Randamach"},
"setPlayerFlappy":function(d){return "socraigh imreoir: Éan Buí"},
"setPlayerRedBird":function(d){return "socraigh imreoir: Éan Dearg"},
"setPlayerSciFi":function(d){return "socraigh imreoir: Spáslong"},
"setPlayerUnderwater":function(d){return "socraigh imreoir: Iasc"},
"setPlayerCave":function(d){return "socraigh imreoir: Sciathán Leathair"},
"setPlayerSanta":function(d){return "socraigh imreoir: Daidí na Nollag"},
"setPlayerShark":function(d){return "socraigh imreoir: Siorc"},
"setPlayerEaster":function(d){return "socraigh imreoir: Coinín na Cásca"},
"setPlayerBatman":function(d){return "socraigh imreoir: Fear Sciatháin Leathair"},
"setPlayerSubmarine":function(d){return "socraigh imreoir: Fomhuireán"},
"setPlayerUnicorn":function(d){return "socraigh imreoir: Aonbheannach"},
"setPlayerFairy":function(d){return "socraigh imreoir: Sióg"},
"setPlayerSuperman":function(d){return "socraigh imreoir: Barrfhear"},
"setPlayerTurkey":function(d){return "socraigh imreoir: Turcaí"},
"setPlayerTooltip":function(d){return "Socraíonn seo cuma an imreora"},
"setScore":function(d){return "socraigh an scór"},
"setScoreTooltip":function(d){return "Socraíonn seo scór an imreora"},
"setSpeed":function(d){return "socraigh an luas"},
"setSpeedTooltip":function(d){return "Socraíonn seo luas an leibhéil"},
"shareFlappyTwitter":function(d){return "Féach an cluiche Flappy a rinne mé! Scríobh mé ar @codeorg é"},
"shareFlappyTwitterDonor":function(d){return "Féach ar an gcluiche a rinne mé! (Táim buíoch de "+flappy_locale.v(d,"donor")+" as tacaíocht a thabhairt do @codeorg)"},
"shareGame":function(d){return "Comhroinn do chluiche:"},
"soundRandom":function(d){return "randamach"},
"soundBounce":function(d){return "preabadh"},
"soundCrunch":function(d){return "cnagadh"},
"soundDie":function(d){return "brón"},
"soundHit":function(d){return "smíste"},
"soundPoint":function(d){return "pointe"},
"soundSwoosh":function(d){return "greadadh"},
"soundWing":function(d){return "sciathán"},
"soundJet":function(d){return "scairdeitleán"},
"soundCrash":function(d){return "tuairteáil"},
"soundJingle":function(d){return "clingeadh"},
"soundSplash":function(d){return "pleist"},
"soundLaser":function(d){return "léasar"},
"speedRandom":function(d){return "socraigh an luas: randamach"},
"speedVerySlow":function(d){return "socraigh an luas: an-mhall"},
"speedSlow":function(d){return "socraigh an luas: mall"},
"speedNormal":function(d){return "socraigh an luas: gnáthluas"},
"speedFast":function(d){return "socraigh an luas: sciobtha"},
"speedVeryFast":function(d){return "socraigh an luas: an-sciobtha"},
"whenClick":function(d){return "nuair a chliceáiltear"},
"whenClickTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a dhéanann an t-úsáideoir clic."},
"whenCollideGround":function(d){return "nuair a bhuailtear leis an talamh"},
"whenCollideGroundTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a bhuaileann an t-imreoir faoin talamh."},
"whenCollideObstacle":function(d){return "nuair a bhuailtear in éadan constaice"},
"whenCollideObstacleTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a bhuaileann an t-imreoir in éadan constaice."},
"whenEnterObstacle":function(d){return "nuair a ghlantar constaic"},
"whenEnterObstacleTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a ghlanann an t-imreoir constaic."},
"whenRunButtonClick":function(d){return "nuair a thosaíonn an cluiche"},
"whenRunButtonClickTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a thosaíonn an cluiche."},
"yes":function(d){return "Tá"}};