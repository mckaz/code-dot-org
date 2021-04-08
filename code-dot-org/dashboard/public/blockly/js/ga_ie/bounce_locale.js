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
"basketballLaunchBall":function(d){return "caith liathróid nua"},
"basketballLaunchBallTooltip":function(d){return "Cuireann seo liathróid nua san imirt."},
"basketballSetPaddle":function(d){return "socraigh lámh"},
"basketballSetPaddleSpeedFast":function(d){return "socraigh luas na láimhe: sciobtha"},
"basketballSetPaddleSpeedNormal":function(d){return "socraigh luas na láimhe: gnáthluas"},
"basketballSetPaddleSpeedRandom":function(d){return "socraigh luas na láimhe: randamach"},
"basketballSetPaddleSpeedSlow":function(d){return "socraigh luas na láimhe: mall"},
"basketballSetPaddleSpeedTooltip":function(d){return "Socraíonn seo luas na láimhe"},
"basketballSetPaddleSpeedVeryFast":function(d){return "socraigh luas na láimhe: an-sciobtha"},
"basketballSetPaddleSpeedVerySlow":function(d){return "socraigh luas na láimhe: an-mhall"},
"basketballWhenBallMissesPaddle":function(d){return "nuair a théann liathróid thar lámh"},
"basketballWhenPaddleCollided":function(d){return "nuair a bhuaileann liathróid lámh"},
"bounceBall":function(d){return "preab an liathróid"},
"bounceBallTooltip":function(d){return "Preabann seo an liathróid in aghaidh rud éigin."},
"continue":function(d){return "Ar aghaidh"},
"dirE":function(d){return "O"},
"dirN":function(d){return "T"},
"dirS":function(d){return "D"},
"dirW":function(d){return "I"},
"doCode":function(d){return " "},
"elseCode":function(d){return "i ngach cás eile"},
"finalLevel":function(d){return "Comhghairdeas! Chríochnaigh tú an dúshlán deireanach."},
"heightParameter":function(d){return "airde"},
"ifCode":function(d){return "má"},
"ifPathAhead":function(d){return "má tá cosán ann os do chomhair"},
"ifTooltip":function(d){return "Má tá cosán ann sa treo sonraithe, cuir gníomhartha i bhfeidhm."},
"ifelseTooltip":function(d){return "Má tá cosán ann sa treo sonraithe, cuir an chéad bhloc i bhfeidhm. Mura bhfuil cosán ann, cuir an dara bloc i bhfeidhm."},
"incrementOpponentScore":function(d){return "tabhair pointe don chéile comhraic"},
"incrementOpponentScoreTooltip":function(d){return "Tugann seo pointe amháin don chéile comhraic."},
"incrementPlayerScore":function(d){return "tabhair pointe don imreoir"},
"incrementPlayerScoreTooltip":function(d){return "Tugann seo pointe amháin don imreoir reatha."},
"isWall":function(d){return "an balla é seo"},
"isWallTooltip":function(d){return "Cuireann seo \"fíor\" ar ais má tá balla anseo"},
"launchBall":function(d){return "tosaigh liathróid nua"},
"launchBallTooltip":function(d){return "Cuireann seo liathróid nua san imirt."},
"makeYourOwn":function(d){return "Cruthaigh do Chluiche Liathróide féin"},
"moveDown":function(d){return "téigh síos"},
"moveDownTooltip":function(d){return "Aistríonn seo an slacán síos."},
"moveForward":function(d){return "téigh ar aghaidh"},
"moveForwardTooltip":function(d){return "Aistríonn seo an carachtar spás amháin ar aghaidh."},
"moveLeft":function(d){return "téigh ar chlé"},
"moveLeftTooltip":function(d){return "Aistríonn seo an slacán ar chlé."},
"moveRight":function(d){return "téigh ar dheis"},
"moveRightTooltip":function(d){return "Aistríonn seo an slacán ar dheis."},
"moveUp":function(d){return "téigh suas"},
"moveUpTooltip":function(d){return "Aistríonn seo an slacán suas."},
"nextLevel":function(d){return "Comhghairdeas! Chríochnaigh tú an dúshlán seo."},
"no":function(d){return "Níl"},
"noPathAhead":function(d){return "tá an cosán faoi bhac"},
"noPathLeft":function(d){return "níl aon chosán ar chlé"},
"noPathRight":function(d){return "níl aon chosán ar dheis"},
"numBlocksNeeded":function(d){return "Is féidir an dúshlán seo a chríochnú le %1 bloc."},
"pathAhead":function(d){return "cosán os do chomhair"},
"pathLeft":function(d){return "má tá cosán ann ar chlé"},
"pathRight":function(d){return "má tá cosán ann ar dheis"},
"pilePresent":function(d){return "carn anseo"},
"playSoundBounce":function(d){return "seinn fuaim: preabadh"},
"playSoundCheer":function(d){return "seinn fuaim: gártha"},
"playSoundCrunch":function(d){return "seinn fuaim: cnagadh"},
"playSoundGoal1":function(d){return "seinn fuaim: cúl 1"},
"playSoundGoal2":function(d){return "seinn fuaim: cúl 2"},
"playSoundHit":function(d){return "seinn fuaim: buille"},
"playSoundKick":function(d){return "seinn fuaim: cic"},
"playSoundLosePoint":function(d){return "seinn fuaim: cailleadh pointe"},
"playSoundLosePoint2":function(d){return "seinn fuaim: cailleadh pointe 2"},
"playSoundRetro":function(d){return "seinn fuaim: sean-nós"},
"playSoundRubber":function(d){return "seinn fuaim: rubar"},
"playSoundSlap":function(d){return "seinn fuaim: boiseog"},
"playSoundSlapshot":function(d){return "seinn fuaim: plab-bhuille"},
"playSoundSwish":function(d){return "seinn fuaim: siosarnach cispheile"},
"playSoundTooltip":function(d){return "Seinn an fhuaim roghnaithe."},
"playSoundWhistle":function(d){return "seinn fuaim: fead"},
"playSoundWinPoint":function(d){return "seinn fuaim: gnóthú pointe"},
"playSoundWinPoint2":function(d){return "seinn fuaim: gnóthú pointe 2"},
"playSoundWood":function(d){return "seinn fuaim: adhmad"},
"putdownTower":function(d){return "cuir túr anseo"},
"reinfFeedbackMsg":function(d){return "Is féidir leat an cnaipe \"Bain triail eile as\" a chliceáil chun filleadh ar do chluiche."},
"removeSquare":function(d){return "bain cearnóg"},
"repeatUntil":function(d){return "athdhéan go dtí"},
"repeatUntilBlocked":function(d){return "chomh fada is atá cosán os do chomhair"},
"repeatUntilFinish":function(d){return "athdhéan go dtí an deireadh"},
"scoreText":function(d){return "Scór: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "socraigh radharc "+bounce_locale.v(d,"background")},
"setBackgroundHardcourt":function(d){return "socraigh radharc cruachúirte"},
"setBackgroundRandom":function(d){return "socraigh radharc randamach"},
"setBackgroundRetro":function(d){return "socraigh radharc sean-nóis"},
"setBackgroundTooltip":function(d){return "Socraíonn seo stíl an chúlra"},
"setBallHardcourt":function(d){return "socraigh liathróid chruachúirte"},
"setBallRandom":function(d){return "socraigh liathróid randamach"},
"setBallRetro":function(d){return "socraigh liathróid sean-nóis"},
"setBall":function(d){return "socraigh liathróid "+bounce_locale.v(d,"ball")},
"setBallSpeedFast":function(d){return "socraigh luas na liathróide: sciobtha"},
"setBallSpeedNormal":function(d){return "socraigh luas na liathróide: gnáthluas"},
"setBallSpeedRandom":function(d){return "socraigh luas na liathróide: randamach"},
"setBallSpeedSlow":function(d){return "socraigh luas na liathróide: mall"},
"setBallSpeedTooltip":function(d){return "Socraíonn seo luas na liathróide"},
"setBallSpeedVeryFast":function(d){return "socraigh luas na liathróide: an-sciobtha"},
"setBallSpeedVerySlow":function(d){return "socraigh luas na liathróide: an-mhall"},
"setBallTooltip":function(d){return "Socraíonn seo pictiúr na liathróide"},
"setPaddle":function(d){return "socraigh slacán"},
"setPaddleHardcourt":function(d){return "socraigh slacán cruachúirte"},
"setPaddleRandom":function(d){return "socraigh slacán randamach"},
"setPaddleRetro":function(d){return "socraigh slacán sean-nóis"},
"setPaddleSpeedFast":function(d){return "socraigh luas an tslacáin: sciobtha"},
"setPaddleSpeedNormal":function(d){return "socraigh luas an tslacáin: gnáthluas"},
"setPaddleSpeedRandom":function(d){return "socraigh luas an tslacáin: randamach"},
"setPaddleSpeedSlow":function(d){return "socraigh luas an tslacáin: mall"},
"setPaddleSpeedTooltip":function(d){return "Socraíonn seo luas an tslacáin"},
"setPaddleSpeedVeryFast":function(d){return "socraigh luas an tslacáin: an-sciobtha"},
"setPaddleSpeedVerySlow":function(d){return "socraigh luas an tslacáin: an-mhall"},
"setPaddleTooltip":function(d){return "Socraíonn seo pictiúr an tslacáin"},
"setPlayer":function(d){return "socraigh imreoir"},
"setPlayerSpeedFast":function(d){return "socraigh luas an imreora: sciobtha"},
"setPlayerSpeedNormal":function(d){return "socraigh luas an imreora: gnáthluas"},
"setPlayerSpeedRandom":function(d){return "socraigh luas an imreora: randamach"},
"setPlayerSpeedSlow":function(d){return "socraigh luas an imreora: mall"},
"setPlayerSpeedTooltip":function(d){return "Socraíonn seo luas an imreora"},
"setPlayerSpeedVeryFast":function(d){return "socraigh luas an imreora: an-sciobtha"},
"setPlayerSpeedVerySlow":function(d){return "socraigh luas an imreora: an-mhall"},
"setTeamTooltip":function(d){return "Socraíonn seo an lógó agus an scéim dathanna"},
"setTeam":function(d){return "Socraigh foireann "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Socraigh foireanna randamach"},
"shareBounceTwitter":function(d){return "Féach an cluiche liathróide a rinne mé! Scríobh mé ar @codeorg é"},
"shareBounceTwitterDonor":function(d){return "Féach ar an gcluiche a rinne mé! (Táim buíoch de "+bounce_locale.v(d,"donor")+" as tacaíocht a thabhairt do @codeorg)"},
"shareGame":function(d){return "Comhroinn do chluiche:"},
"turnLeft":function(d){return "cas ar chlé"},
"turnRight":function(d){return "cas ar dheis"},
"turnTooltip":function(d){return "Casann seo an carachtar 90 céim ar chlé nó ar dheis."},
"whenBallInGoal":function(d){return "nuair a théann liathróid i mbáire"},
"whenBallInGoalTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a théann liathróid isteach i mbáire."},
"whenBallMissesPaddle":function(d){return "nuair a théann liathróid thar slacán"},
"whenBallMissesPaddleTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a théann liathróid thar an slacán."},
"whenBallMissesPlayer":function(d){return "nuair a théann liathróid thar imreoir"},
"whenDown":function(d){return "nuair a bhrúitear an tsaighead síos"},
"whenDownTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a bhrúnn an t-úsáideoir an tsaighead síos ar an méarchlár."},
"whenGameStarts":function(d){return "nuair a thosaíonn an cluiche"},
"whenGameStartsTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a thosaíonn an cluiche."},
"whenLeft":function(d){return "nuair a bhrúitear an tsaighead chlé"},
"whenLeftTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a bhrúnn an t-úsáideoir an tsaighead chlé ar an méarchlár."},
"whenPaddleCollided":function(d){return "nuair a bhuaileann liathróid slacán"},
"whenPaddleCollidedTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a bhuaileann liathróid slacán."},
"whenPlayerCollided":function(d){return "nuair a bhuaileann liathróid imreoir"},
"whenPlayerCollidedTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a bhuaileann liathróid an t-imreoir."},
"whenRight":function(d){return "nuair a bhrúitear an tsaighead dheas"},
"whenRightTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a bhrúnn an t-úsáideoir an tsaighead dheas ar an méarchlár."},
"whenUp":function(d){return "nuair a bhrúitear an tsaighead suas"},
"whenUpTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a bhrúnn an t-úsáideoir an tsaighead suas ar an méarchlár."},
"whenWallCollided":function(d){return "nuair a bhuaileann liathróid balla"},
"whenWallCollidedTooltip":function(d){return "Cuireann seo na gníomhartha ceangailte i bhfeidhm nuair a bhuaileann liathróid balla."},
"whileMsg":function(d){return "chomh fada is atá"},
"whileTooltip":function(d){return "Athdhéan na horduithe istigh go dtí go mbainfear an críochphointe amach."},
"yes":function(d){return "Tá"}};