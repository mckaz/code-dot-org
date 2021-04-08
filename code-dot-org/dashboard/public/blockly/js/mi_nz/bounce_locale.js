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
"basketballLaunchBall":function(d){return "makaia he pōro hou"},
"basketballLaunchBallTooltip":function(d){return "Makaia tētahi pōro ki te kēmu."},
"basketballSetPaddle":function(d){return "tautuhi ringa"},
"basketballSetPaddleSpeedFast":function(d){return "tautuhi terenga ringa hohoro"},
"basketballSetPaddleSpeedNormal":function(d){return "tautuhi terenga ringa pōturi rawa"},
"basketballSetPaddleSpeedRandom":function(d){return "tautuhi terenga ringa matapōkere"},
"basketballSetPaddleSpeedSlow":function(d){return "tautuhi terenga ringa pōturi"},
"basketballSetPaddleSpeedTooltip":function(d){return "Ka tautuhi i te terenga o te ringa"},
"basketballSetPaddleSpeedVeryFast":function(d){return "tautuhi terenga ringa hohoro rawa"},
"basketballSetPaddleSpeedVerySlow":function(d){return "tautuhi terenga ringa pōturi rawa"},
"basketballWhenBallMissesPaddle":function(d){return "kia hipa te pōro i te ringa"},
"basketballWhenPaddleCollided":function(d){return "kia pā te pōro ki te ringa"},
"bounceBall":function(d){return "tupana pōro"},
"bounceBallTooltip":function(d){return "Tupanahia tētahi pōro i tētahi ahanoa."},
"continue":function(d){return "Haere tonu"},
"dirE":function(d){return "Rāwhiti"},
"dirN":function(d){return "Raki"},
"dirS":function(d){return "Tonga"},
"dirW":function(d){return "Uru"},
"doCode":function(d){return "mahia"},
"elseCode":function(d){return "kē"},
"finalLevel":function(d){return "Hūrō! Kua oti i a koe te panga whakamutunga."},
"heightParameter":function(d){return "teitei"},
"ifCode":function(d){return "mēnā"},
"ifPathAhead":function(d){return "mēnā ara ki mua"},
"ifTooltip":function(d){return "Mēnā he ara kei tētahi ahunga kua tohua, me mahi hohenga."},
"ifelseTooltip":function(d){return "Mēnā ara kei tētahi ahunga kua tohua, me mahi i te rārangi hohenga tuatahi. Mena karekau, mahi i rārangi hohenga tuarua."},
"incrementOpponentScore":function(d){return "whakawhiwhi piro hoariri"},
"incrementOpponentScoreTooltip":function(d){return "Tāpiritia kia kotahi ki te tapeke piro hoariri onāianei."},
"incrementPlayerScore":function(d){return "whiwhi piro"},
"incrementPlayerScoreTooltip":function(d){return "Tāpiritia kia kotahi ki te tapeke piro kaitākaro onāianei."},
"isWall":function(d){return "he pātū tēnei"},
"isWallTooltip":function(d){return "Ka hoki pono mai mēnā he pātū"},
"launchBall":function(d){return "whakarewa pōro hou"},
"launchBallTooltip":function(d){return "Whakarewahia tētahi pōro ki te kēmu."},
"makeYourOwn":function(d){return "Hangaia Tāu Ake Kēmu Tupana"},
"moveDown":function(d){return "neke ki raro"},
"moveDownTooltip":function(d){return "Nekehia te patu ki raro."},
"moveForward":function(d){return "neke ki mua"},
"moveForwardTooltip":function(d){return "Nekehia ahau kia kotahi te āputa ki mua."},
"moveLeft":function(d){return "neke whakatemauī"},
"moveLeftTooltip":function(d){return "Nekehia te patu ki te taha mauī."},
"moveRight":function(d){return "neke whakatematau"},
"moveRightTooltip":function(d){return "Nekehia te patu ki te taha matau."},
"moveUp":function(d){return "neke ki runga"},
"moveUpTooltip":function(d){return "Nekehia te patu ki runga."},
"nextLevel":function(d){return "Hūrō! Kua oti i a koe tēnei panga."},
"no":function(d){return "Kāore"},
"noPathAhead":function(d){return "kua aukatingia te ara"},
"noPathLeft":function(d){return "karekau he ara ki te taha mauī"},
"noPathRight":function(d){return "karekau he ara ki te taha matau"},
"numBlocksNeeded":function(d){return "E āhei ana tēnei panga te whakaoti me ngā paraka e %1."},
"pathAhead":function(d){return "he ara ki mua"},
"pathLeft":function(d){return "mēnā he ara ki te taha mauī"},
"pathRight":function(d){return "mēnā he ara ki te taha matau"},
"pilePresent":function(d){return "he pūkei"},
"playSoundBounce":function(d){return "whakatangi oro tupana"},
"playSoundCheer":function(d){return "whakatangi oro hūrō"},
"playSoundCrunch":function(d){return "whakatangi oro karihi"},
"playSoundGoal1":function(d){return "whakatangi oro kuru 1"},
"playSoundGoal2":function(d){return "whakatangi oro kuru 2"},
"playSoundHit":function(d){return "whakatangi oro patu"},
"playSoundKick":function(d){return "whakatanga oro whana"},
"playSoundLosePoint":function(d){return "whakatangi oro tango piro"},
"playSoundLosePoint2":function(d){return "whakatangi oro tango piro 2"},
"playSoundRetro":function(d){return "whakatangi oro retro"},
"playSoundRubber":function(d){return "whakatangi oro inarapa"},
"playSoundSlap":function(d){return "whakatangi oro paki"},
"playSoundSlapshot":function(d){return "whakatangi oro paki-whiu"},
"playSoundSwish":function(d){return "whakatangi oro huhū neti"},
"playSoundTooltip":function(d){return "Whakatangi i te oro kua kōwhiria."},
"playSoundWhistle":function(d){return "whakatangi oro whio"},
"playSoundWinPoint":function(d){return "whakatangi oro whiwhi piro"},
"playSoundWinPoint2":function(d){return "whakatangi oro whiwhi piro 2"},
"playSoundWood":function(d){return "whakatangi oro rākau"},
"putdownTower":function(d){return "whakatūria he pourewa"},
"reinfFeedbackMsg":function(d){return "Pāwhiringia te pātene “Whakamātau anō” kia hoki ki te purei i tō kēmu."},
"removeSquare":function(d){return "tangohia te tapawhā"},
"repeatUntil":function(d){return "tōaitia kia"},
"repeatUntilBlocked":function(d){return "mēnā he ara kei mua tonu"},
"repeatUntilFinish":function(d){return "tōaitia kia mutu rā anō"},
"scoreText":function(d){return "Taepeke piro: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "tautuhi tirohanga "+bounce_locale.v(d,"background")},
"setBackgroundHardcourt":function(d){return "tautuhi tirohanga papatēnihi"},
"setBackgroundRandom":function(d){return "tautuhi tirohanga matapōkere"},
"setBackgroundRetro":function(d){return "tautuhi tirohanga retro"},
"setBackgroundTooltip":function(d){return "Ka tautuhi i te atahanga papamuri"},
"setBallHardcourt":function(d){return "tautuhi pōro papatēnihi"},
"setBallRandom":function(d){return "tautuhi pōro matapōkere"},
"setBallRetro":function(d){return "tautuhi pōro retro"},
"setBall":function(d){return "tautuhi pōro "+bounce_locale.v(d,"ball")},
"setBallSpeedFast":function(d){return "tautuhi terenga pōro hohoro"},
"setBallSpeedNormal":function(d){return "tautuhi terenga pōro pūnoa"},
"setBallSpeedRandom":function(d){return "tautuhi terenga pōro matapōkere"},
"setBallSpeedSlow":function(d){return "tautuhi terenga pōro pōturi"},
"setBallSpeedTooltip":function(d){return "Ka tautuhi i te tere o te pōro"},
"setBallSpeedVeryFast":function(d){return "tautuhi terenga pōro hohoro rawa"},
"setBallSpeedVerySlow":function(d){return "tautuhi terenga pōro pōturi rawa"},
"setBallTooltip":function(d){return "Ka tautuhi i te atahanga o te pōro"},
"setPaddle":function(d){return "tautuhi patu"},
"setPaddleHardcourt":function(d){return "tautuhi patu papatēnihi"},
"setPaddleRandom":function(d){return "tautuhi patu matapōkere"},
"setPaddleRetro":function(d){return "tautuhi patu retro"},
"setPaddleSpeedFast":function(d){return "tautuhi terenga patu hohoro"},
"setPaddleSpeedNormal":function(d){return "tautuhi terenga patu pūnoa"},
"setPaddleSpeedRandom":function(d){return "tautuhi terenga patu matapōkere"},
"setPaddleSpeedSlow":function(d){return "tautuhi terenga patu pōturi"},
"setPaddleSpeedTooltip":function(d){return "Ka tautuhi i te tere o te patu"},
"setPaddleSpeedVeryFast":function(d){return "tautuhi terenga patu hohoro rawa"},
"setPaddleSpeedVerySlow":function(d){return "tautuhi terenga patu pōturi rawa"},
"setPaddleTooltip":function(d){return "Ka tautuhi i te atahanga o te patu"},
"setPlayer":function(d){return "tautuhi kaitākaro"},
"setPlayerSpeedFast":function(d){return "tautuhi terenga kaitākaro hohoro"},
"setPlayerSpeedNormal":function(d){return "tautuhi terenga kaitākaro pūnoa"},
"setPlayerSpeedRandom":function(d){return "tautuhi terenga kaitākaro matapōkere"},
"setPlayerSpeedSlow":function(d){return "tautuhi terenga kaitākaro pōturi"},
"setPlayerSpeedTooltip":function(d){return "Ka tautuhi i te terenga o te kaitākaro"},
"setPlayerSpeedVeryFast":function(d){return "tautuhi terenga kaitākaro hohoro rawa"},
"setPlayerSpeedVerySlow":function(d){return "tautuhi terenga kaitākaro pōturi rawa"},
"setTeamTooltip":function(d){return "Ka tautuhi i te moko me te kohinga tae"},
"setTeam":function(d){return "Tautuhi tīma "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Tautuhi tīma matapōkere"},
"shareBounceTwitter":function(d){return "Tirohia te kēmu Bounce nāku anō i hanga. Nāku anō i hanga mā @codeorg"},
"shareBounceTwitterDonor":function(d){return "Check out the Bounce game I made. (Thanks "+bounce_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Tiria tō kēmu:"},
"turnLeft":function(d){return "huri whakatemauī"},
"turnRight":function(d){return "huri whakatematau"},
"turnTooltip":function(d){return "Ka hurihia ahau ki te taha mauī, taha matau rānei mā te 90 putu."},
"whenBallInGoal":function(d){return "i te pōro i te kuru"},
"whenBallInGoalTooltip":function(d){return "Kia kuhu atu te pōro ki te kuru, whakatutukihia ngā hohenga kei raro iho nei."},
"whenBallMissesPaddle":function(d){return "kia hipa te pōro i te patu"},
"whenBallMissesPaddleTooltip":function(d){return "Kia hipa te pōro i te kuru, whakatutukihia ngā hohenga kei raro iho nei."},
"whenBallMissesPlayer":function(d){return "kia hipa te pōro i te kaitākaro"},
"whenDown":function(d){return "ina pere raro"},
"whenDownTooltip":function(d){return "Kia pēhia te kī pere raro, whakatutukihia ngā hohenga kei raro iho nei."},
"whenGameStarts":function(d){return "ina tīmata te kēmu"},
"whenGameStartsTooltip":function(d){return "Kia tīmata te kēmu, whakatutukihia ngā hohenga kei raro iho nei."},
"whenLeft":function(d){return "ina pere mauī"},
"whenLeftTooltip":function(d){return "Kia pēhia te kī pere mauī, whakatutukihia ngā hohenga kei raro iho nei."},
"whenPaddleCollided":function(d){return "kia patu te pōro ki te patu"},
"whenPaddleCollidedTooltip":function(d){return "Kia patu te pōro ki te patu, whakatutukihia ngā hohenga kei raro iho nei."},
"whenPlayerCollided":function(d){return "kia patu te pōro i te kaitākaro"},
"whenPlayerCollidedTooltip":function(d){return "Kia patu te pōro ki te kaitākaro, whakatutukihia ngā hohenga kei raro iho nei."},
"whenRight":function(d){return "ina pere matau"},
"whenRightTooltip":function(d){return "Kia pēhia te kī pere matau, whakatutukihia ngā hohenga kei raro iho nei."},
"whenUp":function(d){return "ina pere runga"},
"whenUpTooltip":function(d){return "Kia pēhia te kī pere runga, whakatutukihia ngā hohenga kei raro iho nei."},
"whenWallCollided":function(d){return "ina patu te pōro ki te pātū"},
"whenWallCollidedTooltip":function(d){return "Kia tuki te pōro ki te pātū, whakatutukihia ngā hohenga o raro nei."},
"whileMsg":function(d){return "i te"},
"whileTooltip":function(d){return "Tōaitia ngā hohenga kua pōkaitia kia tae rā anō ki te pito mutunga."},
"yes":function(d){return "Āe"}};