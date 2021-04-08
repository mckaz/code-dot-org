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
"continue":function(d){return "Շարունակել"},
"doCode":function(d){return "անել"},
"elseCode":function(d){return "ուրիշ"},
"endGame":function(d){return "Ավարտել խաղ"},
"endGameTooltip":function(d){return "Ավարտվում խաղը."},
"finalLevel":function(d){return "Շնորհավորում եմ: Դուք լուծվել վերջնական հանելուկ."},
"flap":function(d){return "տատանվել"},
"flapRandom":function(d){return "ճոճել պատահական գումար"},
"flapVerySmall":function(d){return "ճոճել շատ փոքր քանակությամբ"},
"flapSmall":function(d){return "ճոճել փոքր քանակությամբ"},
"flapNormal":function(d){return "ճոճել նորմալ գումար"},
"flapLarge":function(d){return "ճոճել է մեծ քանակությամբ"},
"flapVeryLarge":function(d){return "ճոճել է շատ մեծ քանակությամբ"},
"flapTooltip":function(d){return "Fly Flappy վեր."},
"flappySpecificFail":function(d){return "Ձեր ծածկագիրը նայում լավ, դա կլինի տատանել է յուրաքանչյուր կտտոցով. Բայց դուք պետք է սեղմեք բազմիցս թափահարել է թիրախ."},
"incrementPlayerScore":function(d){return "միավոր մի կետ"},
"incrementPlayerScoreTooltip":function(d){return "Ավելացնել մեկ միավոր խաղացողին:"},
"nextLevel":function(d){return "Շնորհավորում եմ: Դուք ավարտել այս գլուխկոտրուկը։"},
"no":function(d){return "ոչ"},
"numBlocksNeeded":function(d){return "Այս հանելուկ կարող է լուծվել% 1 բլոկների."},
"playSoundRandom":function(d){return "խաղալ պատահական ձայնը"},
"playSoundBounce":function(d){return "խաղալ ցատկում ձայնը"},
"playSoundCrunch":function(d){return "ճռճռալ"},
"playSoundDie":function(d){return "խաղալ տխուր ձայնը"},
"playSoundHit":function(d){return "խաղալ smash ձայնը"},
"playSoundPoint":function(d){return "Խաղալ կետ ձայնը"},
"playSoundSwoosh":function(d){return "խաղալ Swoosh ձայնը"},
"playSoundWing":function(d){return "խաղալ թեւը ձայնը"},
"playSoundJet":function(d){return "խաղալ ռեակտիվ ձայնը"},
"playSoundCrash":function(d){return "խաղալ վթարի ձայնը"},
"playSoundJingle":function(d){return "խաղալ jingle ձայնը"},
"playSoundSplash":function(d){return "խաղալ խուրձ ձայնը"},
"playSoundLaser":function(d){return "խաղալ լազերային ձայնը"},
"playSoundTooltip":function(d){return "ընտրված ձայնը հանել:"},
"reinfFeedbackMsg":function(d){return "Դուք կարող եք սեղմեք \"Փորձեք կրկին \" կոճակը վերադառնալ խաղում ձեր խաղը."},
"scoreText":function(d){return "Հաշիվ: "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "հավաքածու տեսարան"},
"setBackgroundRandom":function(d){return "հավաքածու տեսարան Պատահական"},
"setBackgroundFlappy":function(d){return "հավաքածու տեսարան City (օր)"},
"setBackgroundNight":function(d){return "հավաքածու տեսարան City (գիշեր)"},
"setBackgroundSciFi":function(d){return "սահմանել տեսարանը Sci-Fi"},
"setBackgroundUnderwater":function(d){return "հավաքածու տեսարան Ստորջրյա"},
"setBackgroundCave":function(d){return "հավաքածու տեսարան Cave"},
"setBackgroundSanta":function(d){return "հավաքածու տեսարան Santa"},
"setBackgroundTooltip":function(d){return "Սահմանում է ֆոնային պատկեր"},
"setGapRandom":function(d){return "սահմանել պատահական բացը"},
"setGapVerySmall":function(d){return "ստեղծել է շատ փոքրիկ բացը"},
"setGapSmall":function(d){return "սահմանել մի փոքր բացը"},
"setGapNormal":function(d){return "սահմանել նորմալ բացը"},
"setGapLarge":function(d){return "սահմանել մեծ բացը"},
"setGapVeryLarge":function(d){return "ստեղծել է շատ մեծ բացը"},
"setGapHeightTooltip":function(d){return "Սահմանում է ուղղահայաց բացը խոչընդոտ"},
"setGravityRandom":function(d){return "սահմանել ծանրության պատահական"},
"setGravityVeryLow":function(d){return "սահմանել ծանրության շատ ցածր"},
"setGravityLow":function(d){return "սահմանել ծանրության ցածր"},
"setGravityNormal":function(d){return "սահմանել ծանրության նորմալ"},
"setGravityHigh":function(d){return "սահմանել ծանրության բարձր"},
"setGravityVeryHigh":function(d){return "սահմանել ծանրության է շատ բարձր"},
"setGravityTooltip":function(d){return "Կոմպլեկտներ մակարդակով ձգողության"},
"setGround":function(d){return "հիմք ստեղծել"},
"setGroundRandom":function(d){return "հիմք ստեղծել Պատահական"},
"setGroundFlappy":function(d){return "սահմանված հիմք Ground"},
"setGroundSciFi":function(d){return "հիմք ստեղծել Sci-Fi"},
"setGroundUnderwater":function(d){return "սահմանված հիմք Ստորջրյա"},
"setGroundCave":function(d){return "սահմանված հիմք Cave"},
"setGroundSanta":function(d){return "սահմանված հիմք Santa"},
"setGroundLava":function(d){return "սահմանված հիմք Լավա"},
"setGroundTooltip":function(d){return "Սահմանում է վերգետնյա պատկերը"},
"setObstacle":function(d){return "հավաքածու խոչընդոտը"},
"setObstacleRandom":function(d){return "հավաքածու խոչընդոտը Պատահական"},
"setObstacleFlappy":function(d){return "հավաքածու խոչընդոտը Խողովակների"},
"setObstacleSciFi":function(d){return "Սահմանված խոչընդոտն Sci-Fi"},
"setObstacleUnderwater":function(d){return "հավաքածու խոչընդոտը Plant"},
"setObstacleCave":function(d){return "հավաքածու խոչընդոտը Cave"},
"setObstacleSanta":function(d){return "հավաքածու խոչընդոտը Ծխնելույզ"},
"setObstacleLaser":function(d){return "հավաքածու խոչընդոտը Laser"},
"setObstacleTooltip":function(d){return "Կոմպլեկտներ խոչընդոտ պատկերը"},
"setPlayer":function(d){return "հավաքածու խաղացող"},
"setPlayerRandom":function(d){return "սահմանել խաղացող Պատահական"},
"setPlayerFlappy":function(d){return "Սահմանված խաղացող Դեղին թռչուն"},
"setPlayerRedBird":function(d){return "Սահմանված խաղացող Red Bird"},
"setPlayerSciFi":function(d){return "հավաքածու խաղացող Տիեզերանավ"},
"setPlayerUnderwater":function(d){return "հավաքածու խաղացող Fish"},
"setPlayerCave":function(d){return "հավաքածու խաղացող Bat"},
"setPlayerSanta":function(d){return "սահմանել խաղացող Santa"},
"setPlayerShark":function(d){return "հավաքածու խաղացող Shark"},
"setPlayerEaster":function(d){return "Սահմանված խաղացող Easter Bunny"},
"setPlayerBatman":function(d){return "Սահմանված խաղացող Bat guy"},
"setPlayerSubmarine":function(d){return "հավաքածու խաղացող Սուզանավ"},
"setPlayerUnicorn":function(d){return "սահմանել խաղացող միաեղջյուր"},
"setPlayerFairy":function(d){return "հավաքածու խաղացող Հեքիաթ"},
"setPlayerSuperman":function(d){return "հավաքածու խաղացող Flappyman"},
"setPlayerTurkey":function(d){return "սահմանել խաղացող Թուրքիան"},
"setPlayerTooltip":function(d){return "Սահմանում է player պատկերը"},
"setScore":function(d){return "հավաքածու հաշիվը"},
"setScoreTooltip":function(d){return "Սահմանում է խաղացողի հաշիվը"},
"setSpeed":function(d){return "հավաքածու արագությունը"},
"setSpeedTooltip":function(d){return "Կոմպլեկտներ մակարդակով արագությունը"},
"shareFlappyTwitter":function(d){return "Ստուգել Flappy խաղ եմ արել: Ես գրել եմ ինքս ինձ հետ @codeorg"},
"shareFlappyTwitterDonor":function(d){return "Check out the Flappy game I made. (Thanks "+flappy_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Կիսեք ձեր խաղը:"},
"soundRandom":function(d){return "կամայական"},
"soundBounce":function(d){return "ցատկում"},
"soundCrunch":function(d){return "ճռճռոց"},
"soundDie":function(d){return "տխուր"},
"soundHit":function(d){return "կոտրատելը"},
"soundPoint":function(d){return "կետ"},
"soundSwoosh":function(d){return "Swoosh"},
"soundWing":function(d){return "թեւ"},
"soundJet":function(d){return "շիթ"},
"soundCrash":function(d){return "վթար"},
"soundJingle":function(d){return "զնգալ"},
"soundSplash":function(d){return "խուրձ"},
"soundLaser":function(d){return "լազերային"},
"speedRandom":function(d){return "հավաքածու արագությունը Պատահական"},
"speedVerySlow":function(d){return "Սահմանված արագությունը շատ դանդաղ"},
"speedSlow":function(d){return "հավաքածու արագությունը դանդաղ"},
"speedNormal":function(d){return "հավաքածու արագությունը նորմալ"},
"speedFast":function(d){return "հավաքածու արագությունը արագ"},
"speedVeryFast":function(d){return "Սահմանված արագությունը շատ արագ"},
"whenClick":function(d){return "երբ սեղմեք"},
"whenClickTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ սեղմեք իրադարձություն է տեղի ունենում:"},
"whenCollideGround":function(d){return "երբ հարվածել գետնին"},
"whenCollideGroundTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ Flappy հարվածում է գետնին:"},
"whenCollideObstacle":function(d){return "երբ հարվածել խոչընդոտ"},
"whenCollideObstacleTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ Flappy հարվածում է խոչընդոտ."},
"whenEnterObstacle":function(d){return "երբ անցնում խոչընդոտ է"},
"whenEnterObstacleTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ Flappy մտնում է խոչընդոտ."},
"whenRunButtonClick":function(d){return "Երբ խաղը սկսվում է"},
"whenRunButtonClickTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ խաղը սկսվում."},
"yes":function(d){return "այո"}};