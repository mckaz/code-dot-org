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
"basketballLaunchBall":function(d){return "புதிய பந்தை எறி"},
"basketballLaunchBallTooltip":function(d){return "ஒரு பந்தை விளையாட்டில் தூக்கி எறி."},
"basketballSetPaddle":function(d){return "கை தேர்வு செய்யவும்"},
"basketballSetPaddleSpeedFast":function(d){return "விரைவான கை வேகம் பொருத்து"},
"basketballSetPaddleSpeedNormal":function(d){return "இயல்பான கை வேகம் பொருத்து"},
"basketballSetPaddleSpeedRandom":function(d){return "ஏதோ ஒரு கை வேகம் பொருத்து"},
"basketballSetPaddleSpeedSlow":function(d){return "மெதுவான கை வேகம் பொருத்து"},
"basketballSetPaddleSpeedTooltip":function(d){return "கையின் வேகத்தை பொருத்தும்"},
"basketballSetPaddleSpeedVeryFast":function(d){return "மிக விரைவான கை வேகம் பொருத்து"},
"basketballSetPaddleSpeedVerySlow":function(d){return "மிக மெதுவான கை வேகம் பொருத்து"},
"basketballWhenBallMissesPaddle":function(d){return "பந்து கையை தொட தவறும் பொழுது"},
"basketballWhenPaddleCollided":function(d){return "பந்து கையை இடிக்கும் பொழுது"},
"bounceBall":function(d){return "பந்தை துள்ள வை"},
"bounceBallTooltip":function(d){return "பந்தை ஒரு பொருளின் மீதிலிருந்து துள்ள வை."},
"continue":function(d){return "தொடர்க"},
"dirE":function(d){return "கிழக்கு"},
"dirN":function(d){return "வடக்கு"},
"dirS":function(d){return "தெற்கு"},
"dirW":function(d){return "மேற்கு"},
"doCode":function(d){return "செய்க"},
"elseCode":function(d){return "அல்லது"},
"finalLevel":function(d){return "வாழ்த்துக்கள்! நீங்கள் இறுதிப் புதிரை முடித்துவிட்டீர்கள்."},
"heightParameter":function(d){return "உயரம்"},
"ifCode":function(d){return "இருந்தால்"},
"ifPathAhead":function(d){return "முன்னால் பாதை என்றால்"},
"ifTooltip":function(d){return "குறிப்பிட்ட திசையில் ஒரு பாதை உள்ளது என்றால், சில செயல்களை செய்ய."},
"ifelseTooltip":function(d){return "குறிப்பிட்ட திசையில் ஒரு பாதை உள்ளது என்றால், நடவடிக்கைகள் முதல் தொகுதி செய்கிறது. இல்லையெனில், நடவடிக்கைகள் இரண்டாவது தொகுதி செய்கிறது."},
"incrementOpponentScore":function(d){return "எதிர்ப்பாளர் புள்ளி பெரு"},
"incrementOpponentScoreTooltip":function(d){return "தற்போதைய எதிர்ப்பாளர் மதிப்பெண்ணில் ஒரு புள்ளி சேர்க்க."},
"incrementPlayerScore":function(d){return "மதிப்பெண் பெறு"},
"incrementPlayerScoreTooltip":function(d){return "தற்போதைய ஆட்டக்காரர் மதிப்பெண்ணில் ஒரு புள்ளி சேர்க்க."},
"isWall":function(d){return "இது ஒரு சுவரா"},
"isWallTooltip":function(d){return "இங்கே ஒரு சுவர் உள்ளது என்றால் உண்மை என்று சொல்லு"},
"launchBall":function(d){return "புதிய பந்து போடு"},
"launchBallTooltip":function(d){return "விளையாட்டில் ஒரு பந்தை போடு."},
"makeYourOwn":function(d){return "உங்களுடைய சொந்த துள்ளல் விளையாட்டை உருவாக்குங்கள்"},
"moveDown":function(d){return "கீழே நகரு"},
"moveDownTooltip":function(d){return "துடுப்பை கீழே நகர்த்து."},
"moveForward":function(d){return "முன்னோக்கி நகர்த்த"},
"moveForwardTooltip":function(d){return "என்னை ஒரு அடி முன்னே நகர்த்து."},
"moveLeft":function(d){return "இடது பக்கம் நகரு"},
"moveLeftTooltip":function(d){return "துடுப்பை இடது புறமாக நகர்த்து."},
"moveRight":function(d){return "வலது பக்கம் நகரு"},
"moveRightTooltip":function(d){return "துடுப்பை இடது புறமாக நகர்த்து."},
"moveUp":function(d){return "மேலே நகரு"},
"moveUpTooltip":function(d){return "துடுப்பை மேலே நகர்த்து."},
"nextLevel":function(d){return "வாழ்த்துக்கள்! நீங்கள் இந்த புதிரில் வென்று விட்டீர்கள்."},
"no":function(d){return "இல்லை"},
"noPathAhead":function(d){return "பாதை தடுக்கப்பட்டுள்ளது"},
"noPathLeft":function(d){return "இடப்புறம் வழி இல்லை"},
"noPathRight":function(d){return "வலப்புறம் வழி இல்லை"},
"numBlocksNeeded":function(d){return "இந்த புதிரை  %1 தொகுதிகள் கொண்டு தீர்க்க முடியும்."},
"pathAhead":function(d){return "வழி முன்னே"},
"pathLeft":function(d){return "இடப்புறம் வழி இருந்தால்"},
"pathRight":function(d){return "வலப்புறம் வழி இருந்தால்"},
"pilePresent":function(d){return "அங்கே ஒரு குவியல் இருக்கிறது"},
"playSoundBounce":function(d){return "play bounce sound"},
"playSoundCheer":function(d){return "உற்சாக ஒலியை வாசி"},
"playSoundCrunch":function(d){return "மெல்லுகிற ஒலியை வாசி"},
"playSoundGoal1":function(d){return "இலக்கு 1 ஒலியை வாசி"},
"playSoundGoal2":function(d){return "இலக்கு 2 ஒலியை வாசி"},
"playSoundHit":function(d){return "அடிக்கிற ஒலியை வாசி"},
"playSoundKick":function(d){return "உதைக்கிற ஒலியை வாசி"},
"playSoundLosePoint":function(d){return "புள்ளி தோற்கிற ஒலியை வாசி"},
"playSoundLosePoint2":function(d){return "புள்ளி தோற்கிற 2 ஒலியை வாசி"},
"playSoundRetro":function(d){return "ரெட்ரோ ஒலியை வாசி"},
"playSoundRubber":function(d){return "ரப்பர் ஒலியை வாசி"},
"playSoundSlap":function(d){return "அறைகின்ற ஒலியை வாசி"},
"playSoundSlapshot":function(d){return "தட்டுகின்ற ஒலியை வாசி"},
"playSoundSwish":function(d){return "விசுப்பொலி வாசி"},
"playSoundTooltip":function(d){return "தேர்ந்த ஒலியை வாசிக்கும்."},
"playSoundWhistle":function(d){return "சீழ்க்கை அடி ஒலி வாசி"},
"playSoundWinPoint":function(d){return "புள்ளி ஜெயிக்கின்ற ஒலி வாசி"},
"playSoundWinPoint2":function(d){return "புள்ளி ஜெயிக்கின்ற 2 ஒலி வாசி"},
"playSoundWood":function(d){return "வன ஒலி வாசி"},
"putdownTower":function(d){return "கோபுரத்தை கீழே வை"},
"reinfFeedbackMsg":function(d){return "You can press the \"Try again\" button to go back to playing your game."},
"removeSquare":function(d){return "சதுரத்தை நீக்கு"},
"repeatUntil":function(d){return "மெய்படும் வரை மீண்டும் செய்"},
"repeatUntilBlocked":function(d){return "முன்னே வழி இருக்கும் வரை"},
"repeatUntilFinish":function(d){return "முடியும் வரை மீண்டும் செய்"},
"scoreText":function(d){return "மதிப்பெண்: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "பின்னணி காட்சி தேர்வு செய் "+bounce_locale.v(d,"background")},
"setBackgroundHardcourt":function(d){return "கட்ட தரை காட்சியை பொருத்து"},
"setBackgroundRandom":function(d){return "ஏதோ ஒரு காட்சியை பொருத்து"},
"setBackgroundRetro":function(d){return "ரெட்ரோ கட்சியை பொருத்து"},
"setBackgroundTooltip":function(d){return "பின்னணி படத்தை அமைக்கஉம்"},
"setBallHardcourt":function(d){return "கட்ட தரை பந்தை பொருத்து"},
"setBallRandom":function(d){return "ஏதோ ஒரு பந்தை பொருத்து"},
"setBallRetro":function(d){return "ரெட்ரோ பந்தை பொருத்து"},
"setBall":function(d){return "பந்தை பொருத்தவும் "+bounce_locale.v(d,"ball")},
"setBallSpeedFast":function(d){return "பந்திற்கு விரைவான வேகம் பொருத்து"},
"setBallSpeedNormal":function(d){return "பந்திற்கு இயல்பான வேகம் பொருத்து"},
"setBallSpeedRandom":function(d){return "பந்திற்கு ஏதோ ஒரு வேகம் பொருத்து"},
"setBallSpeedSlow":function(d){return "பந்திற்கு மெதுவான வேகம் பொருத்து"},
"setBallSpeedTooltip":function(d){return "பந்தின் வேகத்தை பொருத்தும்"},
"setBallSpeedVeryFast":function(d){return "பந்திற்கு மிக விரைவான வேகம் பொருத்து"},
"setBallSpeedVerySlow":function(d){return "பந்திற்கு மிக மெதுவான வேகம் பொருத்து"},
"setBallTooltip":function(d){return "பந்தின் படத்தை பொருத்தும்"},
"setPaddle":function(d){return "துடுப்பை பொருத்து"},
"setPaddleHardcourt":function(d){return "கட்ட தரை துடுப்பு பொருத்து"},
"setPaddleRandom":function(d){return "ஏதோ ஒரு துடுப்பு பொருத்து"},
"setPaddleRetro":function(d){return "ரெட்ரோ துடுப்பை பொருத்து"},
"setPaddleSpeedFast":function(d){return "விரைவான துடுப்பு வேகம் பொருத்து"},
"setPaddleSpeedNormal":function(d){return "இயல்பான துடுப்பு வேகம் பொருத்து"},
"setPaddleSpeedRandom":function(d){return "ஏதோ ஒரு துடுப்பு வேகம் பொருத்து"},
"setPaddleSpeedSlow":function(d){return "மெதுவான துடுப்பு வேகம் பொருத்து"},
"setPaddleSpeedTooltip":function(d){return "துடுப்பின் வேகத்தை பொருத்தும்"},
"setPaddleSpeedVeryFast":function(d){return "மிக விரைவான துடுப்பு வேகம் பொருத்து"},
"setPaddleSpeedVerySlow":function(d){return "மிக மெதுவான துடுப்பு வேகம் பொருத்து"},
"setPaddleTooltip":function(d){return "துடுப்பின் படத்தை பொருத்தும்"},
"setPlayer":function(d){return "set player"},
"setPlayerSpeedFast":function(d){return "விளையாடுபவர்க்கு விரைவான வேகம் பொருத்து"},
"setPlayerSpeedNormal":function(d){return "விளையாடுபவர்க்கு இயல்பான வேகம் பொருத்து"},
"setPlayerSpeedRandom":function(d){return "விளையாடுபவர்க்கு ஏதோ ஒரு வேகம் பொருத்து"},
"setPlayerSpeedSlow":function(d){return "விளையாடுபவர்க்கு மெதுவான வேகம் பொருத்து"},
"setPlayerSpeedTooltip":function(d){return "விளையாடுபவரின் வேகத்தை பொருத்தும்"},
"setPlayerSpeedVeryFast":function(d){return "விளையாடுபவர்க்கு மிக விரைவான வேகம் பொருத்து"},
"setPlayerSpeedVerySlow":function(d){return "விளையாடுபவர்க்கு மிக மெதுவான வேகம் பொருத்து"},
"setTeamTooltip":function(d){return "சின்னம் மற்றும் வண்ண திட்டம் பொருத்தும்"},
"setTeam":function(d){return "அணியை பொருத்து "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "ஏதாவது ஒரு அணி பொருத்து"},
"shareBounceTwitter":function(d){return "நான் செய்த பந்து துள்ளல் விளையாட்டை பார்க்கவும். நானே அதை @codeorg கொண்டு எழுதினேன்"},
"shareBounceTwitterDonor":function(d){return "நான் செய்த பவுன்ஸ் விளையாட்டை காண்க. (@codeorgகை ஆதரவு செய்த "+bounce_locale.v(d,"donor")+" க்கு நன்றி)"},
"shareGame":function(d){return "Share your game:"},
"turnLeft":function(d){return "இடதுபுறம் திரும்பவும்"},
"turnRight":function(d){return "வலதுபுறம் திரும்பவும்"},
"turnTooltip":function(d){return "வலப்புறமோ இடப்புறமோ என்னை 90 degrees திருப்பும்."},
"whenBallInGoal":function(d){return "பந்து இலக்கில் உள்ள பொழுது"},
"whenBallInGoalTooltip":function(d){return "பந்து இலக்கை அடையும் பொழுது பின்னே உள்ள செயல்களை இயக்கு."},
"whenBallMissesPaddle":function(d){return "பந்து துடுப்பை தொட தவறும் பொழுது"},
"whenBallMissesPaddleTooltip":function(d){return "பந்து துடுப்பை தொட தவறும் பொழுது பின்னே உள்ள செயல்களை இயக்கு."},
"whenBallMissesPlayer":function(d){return "பந்து விளையாடுபவரை தவறும் பொழுது"},
"whenDown":function(d){return "கீழ் அம்பு அமுக்கும் பொழுது"},
"whenDownTooltip":function(d){return "கீழ் அம்பு அமுக்கும் பொழுது பின்னே உள்ள செய்லகளை இயக்கு."},
"whenGameStarts":function(d){return "விளையாட்டு தொடங்கும் போது"},
"whenGameStartsTooltip":function(d){return "விளையாட்டு தொடங்கும் போது, கீழே கொடுக்கப்பட்டுள்ள செயல்களை செய்து முடிக்கவும்."},
"whenLeft":function(d){return "இடது அம்பு அமுக்கும் பொழுது"},
"whenLeftTooltip":function(d){return "இடது அம்பு அமுக்கும் பொழுது பின்னே உள்ள செய்லகளை இயக்கு."},
"whenPaddleCollided":function(d){return "பந்து துடுப்பை இடிக்கும் பொழுது"},
"whenPaddleCollidedTooltip":function(d){return "பந்து துடுப்பை மோதும் பொழுது பின்னே உள்ள செயல்களை இயக்கு."},
"whenPlayerCollided":function(d){return "பந்து விளையாடுபவரை இடிக்கும் பொழுது"},
"whenPlayerCollidedTooltip":function(d){return "பந்து விளையாடுபவரை மோதும் பொழுது பின்னே உள்ள செயல்களை இயக்கு."},
"whenRight":function(d){return "வலது அம்பு அமுக்கும் பொழுது"},
"whenRightTooltip":function(d){return "வலது அம்பு அமுக்கும் பொழுது பின்னே உள்ள செயல்களை இயக்கு."},
"whenUp":function(d){return "மேல் அம்பு அமுக்கும் பொழுது"},
"whenUpTooltip":function(d){return "மேல் அம்பு அமுக்கும் பொழுது பின்னே உள்ள செய்லகளை இயக்கு."},
"whenWallCollided":function(d){return "பந்து சுவரை இடிக்கும் பொழுது"},
"whenWallCollidedTooltip":function(d){return "பந்து சுவரில் மோதும் பொழுது பின்னே உள்ள செயல்களை இயக்கு."},
"whileMsg":function(d){return "எப்பொழுது"},
"whileTooltip":function(d){return "உள்ளடக்கப்பட்ட செயல்களை மீண்டும் செய், புள்ளியை அடையும் வரை."},
"yes":function(d){return "ஆம்"}};