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
"continue":function(d){return "Haere tonu"},
"doCode":function(d){return "mahia"},
"elseCode":function(d){return "kē"},
"endGame":function(d){return "whakamutua te kēmu"},
"endGameTooltip":function(d){return "Mā tēnei e mutu ai te kēmu."},
"finalLevel":function(d){return "Hūrō! Kua oti i a koe te panga whakamutunga."},
"flap":function(d){return "paki"},
"flapRandom":function(d){return "paki matapōkere"},
"flapVerySmall":function(d){return "paki tino iti"},
"flapSmall":function(d){return "paki iti"},
"flapNormal":function(d){return "paki pūnoa"},
"flapLarge":function(d){return "paki nui"},
"flapVeryLarge":function(d){return "paki nui rawa"},
"flapTooltip":function(d){return "Whakarere i a Flappy ki runga."},
"flappySpecificFail":function(d){return "He pai te āhua o tō waehere - kia pāwhiritia ka paki. Heoi anō, me nui te paki e tae atu ai ki te ūnga."},
"incrementPlayerScore":function(d){return "whai piro"},
"incrementPlayerScoreTooltip":function(d){return "Tāpiritia kia kotahi ki te tapeke piro kaitākaro onāianei."},
"nextLevel":function(d){return "Hūrō! Kua oti i a koe tēnei panga."},
"no":function(d){return "Kāore"},
"numBlocksNeeded":function(d){return "E āhei ana tēnei panga te whakaoti me ngā paraka e %1."},
"playSoundRandom":function(d){return "whakatangi oro matapōkere"},
"playSoundBounce":function(d){return "whakatangi oro tupana"},
"playSoundCrunch":function(d){return "whakatangi oro karihi"},
"playSoundDie":function(d){return "whakatangi oro pōuri"},
"playSoundHit":function(d){return "whakatangi oro tukituki"},
"playSoundPoint":function(d){return "whakatangi oro piro"},
"playSoundSwoosh":function(d){return "whakatangi oro whio"},
"playSoundWing":function(d){return "whakatangi oro parirau"},
"playSoundJet":function(d){return "whakatangi oro torohaki"},
"playSoundCrash":function(d){return "whakatangi oro tiripapā"},
"playSoundJingle":function(d){return "whakatangi oro pere"},
"playSoundSplash":function(d){return "whakatangi oro paratī"},
"playSoundLaser":function(d){return "whakatangi oro taiaho"},
"playSoundTooltip":function(d){return "Whakatangi i te oro kua kōwhiria."},
"reinfFeedbackMsg":function(d){return "Pāwhiringia te pātene “Whakamātau anō” kia hoki ki te purei i tō kēmu."},
"scoreText":function(d){return "Tapeke piro: "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "tautuhi tirohanga"},
"setBackgroundRandom":function(d){return "tautuhi tirohanga Matapōkere"},
"setBackgroundFlappy":function(d){return "tautuhi tirohanga Tāone (awatea)"},
"setBackgroundNight":function(d){return "tautuhi tirohanga Tāone (pō)"},
"setBackgroundSciFi":function(d){return "tautuhi tirohanga Pūtaiao Mariko (Sci-Fi)"},
"setBackgroundUnderwater":function(d){return "tautuhi tirohanga Takerewai"},
"setBackgroundCave":function(d){return "tautuhi tirohanga Ana"},
"setBackgroundSanta":function(d){return "tautuhi tirohanga Hana Kōkō"},
"setBackgroundTooltip":function(d){return "Ka tautuhi i te atahanga papamuri"},
"setGapRandom":function(d){return "tautuhi āputa matapōkere"},
"setGapVerySmall":function(d){return "tautuhi āputa paku rawa"},
"setGapSmall":function(d){return "tautuhi āputa paku"},
"setGapNormal":function(d){return "tautuhi āputa pūnoa"},
"setGapLarge":function(d){return "tautuhi āputa rahi"},
"setGapVeryLarge":function(d){return "tautuhi āputa rahi rawa"},
"setGapHeightTooltip":function(d){return "Ka tautuhi i te āputa poutū i tētahi taunahua"},
"setGravityRandom":function(d){return "tautuhi tō ā-papa matapōkere"},
"setGravityVeryLow":function(d){return "tautuhi tō ā-papa hahaka rawa"},
"setGravityLow":function(d){return "tautuhi tō ā-papa hahaka"},
"setGravityNormal":function(d){return "tautuhi tō ā-papa pūnoa"},
"setGravityHigh":function(d){return "tautuhi tō ā-papa teitei"},
"setGravityVeryHigh":function(d){return "tautuhi tō ā-papa teitei rawa"},
"setGravityTooltip":function(d){return "Ka tautuhi i te tō ā-papa o te taumata"},
"setGround":function(d){return "tautuhi papa"},
"setGroundRandom":function(d){return "tautuhi papa Matapōkere"},
"setGroundFlappy":function(d){return "tautuhi papa Whenua"},
"setGroundSciFi":function(d){return "tautuhi papa Pūtaiao Mariko (Sci-Fi)"},
"setGroundUnderwater":function(d){return "tautuhi papa Takerewai"},
"setGroundCave":function(d){return "tautuhi papa Ana"},
"setGroundSanta":function(d){return "tautuhi papa Hana Kōkō"},
"setGroundLava":function(d){return "tautuhi papa Tahepuia"},
"setGroundTooltip":function(d){return "Ka tautuhi i te atahanga papa"},
"setObstacle":function(d){return "tautuhi taunahua"},
"setObstacleRandom":function(d){return "tautuhi taunahua Matapōkere"},
"setObstacleFlappy":function(d){return "tautuhi taunahua Kōrere"},
"setObstacleSciFi":function(d){return "tautuhi taunahua Pūtaiao Mariko (Sci-Fi)"},
"setObstacleUnderwater":function(d){return "tautuhi taunahua Tipu"},
"setObstacleCave":function(d){return "tautuhi taunahua Ana"},
"setObstacleSanta":function(d){return "tautuhi taunahua Timera"},
"setObstacleLaser":function(d){return "tautuhi taunahua Taiaho"},
"setObstacleTooltip":function(d){return "Ka tautuhi i te atahanga taunahua"},
"setPlayer":function(d){return "tautuhi kaitākaro"},
"setPlayerRandom":function(d){return "tautuhi kaitākaro Matapōkere"},
"setPlayerFlappy":function(d){return "tautuhi kaitākaro Manu Kōwhai"},
"setPlayerRedBird":function(d){return "tautuhi kaitākaro Manu Whero"},
"setPlayerSciFi":function(d){return "tautuhi kaitākaro Waka Ātea"},
"setPlayerUnderwater":function(d){return "tautuhi kaitākaro Ika"},
"setPlayerCave":function(d){return "tautuhi kaitākaro Pekapeka"},
"setPlayerSanta":function(d){return "tautuhi kaitākaro Hana Kōkō"},
"setPlayerShark":function(d){return "tautuhi kaitākaro Mako"},
"setPlayerEaster":function(d){return "tautuhi kaitākaro Rāpeti Aranga"},
"setPlayerBatman":function(d){return "tautuhi kaitākaro Tangata pekapeka"},
"setPlayerSubmarine":function(d){return "tautuhi kaitākaro Waka Whakatakere"},
"setPlayerUnicorn":function(d){return "tautuhi kaitākaro Mairetahi"},
"setPlayerFairy":function(d){return "tautuhi kaitākaro Patupaiarehe"},
"setPlayerSuperman":function(d){return "tautuhi kaitākaro Flappyman"},
"setPlayerTurkey":function(d){return "tautuhi kaitākaro Korukoru"},
"setPlayerTooltip":function(d){return "Ka tautuhi i te atahanga o te kaitākaro"},
"setScore":function(d){return "tautuhi whiwhinga"},
"setScoreTooltip":function(d){return "Ka tautuhi i te whiwhinga o te kaitākaro"},
"setSpeed":function(d){return "tautuhi tere"},
"setSpeedTooltip":function(d){return "Ka tautuhi i te tere o te taumata"},
"shareFlappyTwitter":function(d){return "Tirohia te kēmu Flappy nāku anō i hanga. Nāku anō i hanga mā @codeorg"},
"shareFlappyTwitterDonor":function(d){return "Check out the Flappy game I made. (Thanks "+flappy_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Tiria tō kēmu:"},
"soundRandom":function(d){return "random"},
"soundBounce":function(d){return "tūpana"},
"soundCrunch":function(d){return "karihi"},
"soundDie":function(d){return "pōuri"},
"soundHit":function(d){return "tukituki"},
"soundPoint":function(d){return "piro"},
"soundSwoosh":function(d){return "whio"},
"soundWing":function(d){return "parirau"},
"soundJet":function(d){return "torohaki"},
"soundCrash":function(d){return "tiripapā"},
"soundJingle":function(d){return "pere"},
"soundSplash":function(d){return "paratī"},
"soundLaser":function(d){return "taiaho"},
"speedRandom":function(d){return "tautuhi tere matapōkere"},
"speedVerySlow":function(d){return "tautuhi tere pōturi rawa atu"},
"speedSlow":function(d){return "tautuhi tere pōturi"},
"speedNormal":function(d){return "tautuhi tere pūnoa"},
"speedFast":function(d){return "tautuhi tere horo"},
"speedVeryFast":function(d){return "tautuhi tere hohoro rawa atu"},
"whenClick":function(d){return "ina pāwhiritia"},
"whenClickTooltip":function(d){return "Kia puta tētahi takunetanga pāwhiri, whakatutukihia ngā mahi o raro iho nei."},
"whenCollideGround":function(d){return "ina tau ki te papa"},
"whenCollideGroundTooltip":function(d){return "Kia tau a Flappy ki te papa, whakatutukihia ngā mahi o raro iho nei."},
"whenCollideObstacle":function(d){return "ina tuki atu ki tētahi taunahua"},
"whenCollideObstacleTooltip":function(d){return "Kia tuki a Flappy ki tētahi taunahua, whakatutukihia ngā mahi o raro iho nei."},
"whenEnterObstacle":function(d){return "ina hipa i te taunahua"},
"whenEnterObstacleTooltip":function(d){return "Kia kuhu a Flappy ki tētahi taunahua, whakatutukihia ngā mahi o raro iho nei."},
"whenRunButtonClick":function(d){return "ina tīmata te kēmu"},
"whenRunButtonClickTooltip":function(d){return "Kia tīmata te kēmu, whakatutukihia ngā hohenga kei raro iho nei."},
"yes":function(d){return "Āe"}};