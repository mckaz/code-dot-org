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
"basketballLaunchBall":function(d){return "գցել նոր գնդակ"},
"basketballLaunchBallTooltip":function(d){return "Գցել գնդակը խաղի մեջ:"},
"basketballSetPaddle":function(d){return "ուժի հավաքում"},
"basketballSetPaddleSpeedFast":function(d){return "set fast hand speed"},
"basketballSetPaddleSpeedNormal":function(d){return "set normal hand speed"},
"basketballSetPaddleSpeedRandom":function(d){return "set random hand speed"},
"basketballSetPaddleSpeedSlow":function(d){return "set slow hand speed"},
"basketballSetPaddleSpeedTooltip":function(d){return "Sets the speed of the hand"},
"basketballSetPaddleSpeedVeryFast":function(d){return "set very fast hand speed"},
"basketballSetPaddleSpeedVerySlow":function(d){return "set very slow hand speed"},
"basketballWhenBallMissesPaddle":function(d){return "when ball misses hand"},
"basketballWhenPaddleCollided":function(d){return "when ball hits hand"},
"bounceBall":function(d){return "ցատկում գնդակը"},
"bounceBallTooltip":function(d){return "Bounce գնդակ դուրս օբյեկտ:"},
"continue":function(d){return "Շարունակել"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "W"},
"doCode":function(d){return "անել"},
"elseCode":function(d){return "ուրիշ"},
"finalLevel":function(d){return "Շնորհավորում եմ: Դուք լուծվել վերջնական հանելուկ."},
"heightParameter":function(d){return "բարձրություն"},
"ifCode":function(d){return "եթե"},
"ifPathAhead":function(d){return "Եթե ​​ճանապարհը առջեւում"},
"ifTooltip":function(d){return "Եթե ​​կա մի ճանապարհ է, նշված ուղղությամբ, ապա մի քանի գործողություններ:"},
"ifelseTooltip":function(d){return "Եթե ​​կա մի ճանապարհ է, նշված ուղղությամբ, ապա առաջին բլոկի գործողությունների: Հակառակ դեպքում, դա անել երկրորդ բլոկի գործողությունների:"},
"incrementOpponentScore":function(d){return "միավոր վաստակել"},
"incrementOpponentScoreTooltip":function(d){return "Ավելացնել մեկ միավոր հակառակորդին."},
"incrementPlayerScore":function(d){return "վաստակել միավոր"},
"incrementPlayerScoreTooltip":function(d){return "Ավելացնել մեկ միավոր խաղացողին:"},
"isWall":function(d){return "սա պատ է"},
"isWallTooltip":function(d){return "վերադարձնում է ճիշտ եթե կա պատ"},
"launchBall":function(d){return "նոր գնդակ"},
"launchBallTooltip":function(d){return "նոր գնդակ մտցնել խաղի մեջ:"},
"makeYourOwn":function(d){return "Պատրաստիր քո Ցատկ Խաղը"},
"moveDown":function(d){return "գնալ ներքեւ"},
"moveDownTooltip":function(d){return "Թին ներքեւ շարժել:"},
"moveForward":function(d){return "առաջ ընթանալ"},
"moveForwardTooltip":function(d){return "Տեղափոխել է ինձ փոխանցելու մեկ տարածք:"},
"moveLeft":function(d){return "գնալ աջ"},
"moveLeftTooltip":function(d){return "Թին ձախ շարժել:"},
"moveRight":function(d){return "գնալ աջ"},
"moveRightTooltip":function(d){return "Թին աջ շարժել:"},
"moveUp":function(d){return "գնալ վեր"},
"moveUpTooltip":function(d){return "Թին վեր շարժել:"},
"nextLevel":function(d){return "Շնորհավորում եմ: Դուք ավարտել այս գլուխկոտրուկը։"},
"no":function(d){return "ոչ"},
"noPathAhead":function(d){return "ճանապարհը փակել"},
"noPathLeft":function(d){return "Ոչ ուղին դեպի ձախ"},
"noPathRight":function(d){return "Ոչ Ճանապարհ դեպի աջ"},
"numBlocksNeeded":function(d){return "Այս հանելուկ կարող է լուծվել% 1 բլոկների."},
"pathAhead":function(d){return "Ճանապարհ առջեւում"},
"pathLeft":function(d){return "Եթե ​​ճանապարհը դեպի ձախ"},
"pathRight":function(d){return "Եթե ​​ճանապարհը դեպի աջ"},
"pilePresent":function(d){return "կա մի կույտ"},
"playSoundBounce":function(d){return "խաղալ ցատկում ձայնը"},
"playSoundCheer":function(d){return "play cheering sound"},
"playSoundCrunch":function(d){return "ճռճռալ"},
"playSoundGoal1":function(d){return "նվագել 1-ին նպատակի երգը"},
"playSoundGoal2":function(d){return "նվագել 2-րդ նպատակի երգը"},
"playSoundHit":function(d){return "հարվածի ձայն հանել"},
"playSoundKick":function(d){return "play kick sound"},
"playSoundLosePoint":function(d){return "միավոր կորցնելու ձայն հանել"},
"playSoundLosePoint2":function(d){return "2 միավոր կորցնելու ձայն հանել"},
"playSoundRetro":function(d){return "ռետրո ձայն հանել"},
"playSoundRubber":function(d){return "ռետինի ձայն հանել"},
"playSoundSlap":function(d){return "ապտակի ձայն հանել"},
"playSoundSlapshot":function(d){return "play slapshot sound"},
"playSoundSwish":function(d){return "play net swish sound"},
"playSoundTooltip":function(d){return "ընտրված ձայնը հանել:"},
"playSoundWhistle":function(d){return "play whistle sound"},
"playSoundWinPoint":function(d){return "միավոր հաղթելու ձայն հանել"},
"playSoundWinPoint2":function(d){return "2 միավոր հաղթելու ձայն հանել"},
"playSoundWood":function(d){return "փայտի ձայն հանել"},
"putdownTower":function(d){return "դրեց ներքեւ աշտարակ"},
"reinfFeedbackMsg":function(d){return "Դուք կարող եք սեղմեք \"Փորձեք կրկին \" կոճակը վերադառնալ խաղում ձեր խաղը."},
"removeSquare":function(d){return "հեռացնել հրապարակից"},
"repeatUntil":function(d){return "կրկնել մինչեւ"},
"repeatUntilBlocked":function(d){return "իսկ ուղին առջեւում"},
"repeatUntilFinish":function(d){return "կրկնել մինչեւ ավարտի"},
"scoreText":function(d){return "Հաշիվ: "+bounce_locale.v(d,"playerScore")+": "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "set "+bounce_locale.v(d,"background")+" scene"},
"setBackgroundHardcourt":function(d){return "ընտրել պինդ բեմ"},
"setBackgroundRandom":function(d){return "ընտրել պատահական բեմ"},
"setBackgroundRetro":function(d){return "ընտրել ռետրո բեմ"},
"setBackgroundTooltip":function(d){return "Սահմանում է ֆոնային պատկեր"},
"setBallHardcourt":function(d){return "ընտրել պինդ գնդակ"},
"setBallRandom":function(d){return "ընտրել պատահական գնդակ"},
"setBallRetro":function(d){return "ընտրել ռետրո գնդակ"},
"setBall":function(d){return "set "+bounce_locale.v(d,"ball")+" ball"},
"setBallSpeedFast":function(d){return "Ընտրել արագ գնդակի արագություն"},
"setBallSpeedNormal":function(d){return "Ընտրել գնդակի նորմալ արագությունը"},
"setBallSpeedRandom":function(d){return "Ընտրել գնդակի արագությունը"},
"setBallSpeedSlow":function(d){return "Ընտրել դանդաղ գնդակի արագություն"},
"setBallSpeedTooltip":function(d){return "Ընտրել գնդակի արագություն"},
"setBallSpeedVeryFast":function(d){return "Ընտրել շատ արագ գնդակի արագություն"},
"setBallSpeedVerySlow":function(d){return "Ընտրել շատ դանդաղ գնդակի արագություն"},
"setBallTooltip":function(d){return "Ընտրել գնդակի նկարը"},
"setPaddle":function(d){return "set paddle"},
"setPaddleHardcourt":function(d){return "ընտրել պինդ թի"},
"setPaddleRandom":function(d){return "Ընտրել պատահական թի"},
"setPaddleRetro":function(d){return "ընտրել ռետրո թի"},
"setPaddleSpeedFast":function(d){return "Ընտրել արագ թիի արագություն"},
"setPaddleSpeedNormal":function(d){return "Ընտրել թիի նորմալ արագությունը"},
"setPaddleSpeedRandom":function(d){return "Ընտրել պատահական թիի արագություն"},
"setPaddleSpeedSlow":function(d){return "Ընտրել դանդաղ թիի արագություն"},
"setPaddleSpeedTooltip":function(d){return "Ընտրել թիի արագություն"},
"setPaddleSpeedVeryFast":function(d){return "Ընտրել շատ արագ թիի արագություն"},
"setPaddleSpeedVerySlow":function(d){return "Ընտրել շատ դանդաղ թիի արագություն"},
"setPaddleTooltip":function(d){return "Ընտրել թիի նկարը"},
"setPlayer":function(d){return "հավաքածու խաղացող"},
"setPlayerSpeedFast":function(d){return "set fast player speed"},
"setPlayerSpeedNormal":function(d){return "set normal player speed"},
"setPlayerSpeedRandom":function(d){return "set random player speed"},
"setPlayerSpeedSlow":function(d){return "set slow player speed"},
"setPlayerSpeedTooltip":function(d){return "Sets the speed of the player"},
"setPlayerSpeedVeryFast":function(d){return "set very fast player speed"},
"setPlayerSpeedVerySlow":function(d){return "set very slow player speed"},
"setTeamTooltip":function(d){return "Sets the logo and color scheme"},
"setTeam":function(d){return "Set team "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Set team random"},
"shareBounceTwitter":function(d){return "Ստուգել Bounce խաղ եմ արել: Ես գրել եմ ինքս ինձ հետ @codeorg"},
"shareBounceTwitterDonor":function(d){return "Check out the Bounce game I made. (Thanks "+bounce_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Կիսեք ձեր խաղը:"},
"turnLeft":function(d){return "դիմել է մնացել"},
"turnRight":function(d){return "աջ շրջադարձ"},
"turnTooltip":function(d){return "Ստացվում է ինձ ձախ կամ աջ կողմից 90 աստիճանով:"},
"whenBallInGoal":function(d){return "երբ գնդակը նպատակին"},
"whenBallInGoalTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ ստանում է գնդակը մտնում է նպատակին."},
"whenBallMissesPaddle":function(d){return "երբ գնդակը սղում թիավարել"},
"whenBallMissesPaddleTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ ստանում է գնդակը սղում է նրա թիավարել:"},
"whenBallMissesPlayer":function(d){return "when ball misses player"},
"whenDown":function(d){return "երբ ներքեւ arrow"},
"whenDownTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ ներքեւ arrow բանալին սեղմված."},
"whenGameStarts":function(d){return "Երբ խաղը սկսվում է"},
"whenGameStartsTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ խաղը սկսվում."},
"whenLeft":function(d){return "երբ ձախ սլաք"},
"whenLeftTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ ձախ arrow բանալին սեղմված."},
"whenPaddleCollided":function(d){return "երբ Գնդակը հարվածում թիավարել"},
"whenPaddleCollidedTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ է գնդակը բախվում է թիավարել:"},
"whenPlayerCollided":function(d){return "when ball hits player"},
"whenPlayerCollidedTooltip":function(d){return "Execute the actions below when a ball collides with the player."},
"whenRight":function(d){return "երբ աջ arrow"},
"whenRightTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ ճիշտ arrow բանալին սեղմված."},
"whenUp":function(d){return "երբ մինչեւ arrow"},
"whenUpTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ մինչեւ arrow բանալին սեղմված."},
"whenWallCollided":function(d){return "երբ Գնդակը հարվածում պատը"},
"whenWallCollidedTooltip":function(d){return "Կատարել գործողությունները ստորեւ, երբ է գնդակը բախվում է պատին."},
"whileMsg":function(d){return "ժամանակ"},
"whileTooltip":function(d){return "Կրկնել կից գործողությունները, մինչեւ Սալոնի կետն է հասել:"},
"yes":function(d){return "այո"}};