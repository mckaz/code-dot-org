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
"basketballLaunchBall":function(d){return "yeni top at"},
"basketballLaunchBallTooltip":function(d){return "Oyuna yeni bir top at."},
"basketballSetPaddle":function(d){return "əl ayarla"},
"basketballSetPaddleSpeedFast":function(d){return "sürətli əl sürətini ayarla"},
"basketballSetPaddleSpeedNormal":function(d){return "normal əl sürətini ayarla"},
"basketballSetPaddleSpeedRandom":function(d){return "ixtiyari əl sürətini ayarla"},
"basketballSetPaddleSpeedSlow":function(d){return "yavaş əl sürətini ayarla"},
"basketballSetPaddleSpeedTooltip":function(d){return "Əlin sürətini ayarlayır"},
"basketballSetPaddleSpeedVeryFast":function(d){return "çox sürətli əl sürətini ayarla"},
"basketballSetPaddleSpeedVerySlow":function(d){return "çox yavaş əl sürətini ayarla"},
"basketballWhenBallMissesPaddle":function(d){return "top əli keçəndə"},
"basketballWhenPaddleCollided":function(d){return "top ələ dəyərsə"},
"bounceBall":function(d){return "sıçrayan top"},
"bounceBallTooltip":function(d){return "Obyektin topunu qeyri-aktif et."},
"continue":function(d){return "Davam et"},
"dirE":function(d){return "Şərq"},
"dirN":function(d){return "Şimal"},
"dirS":function(d){return "Cənub"},
"dirW":function(d){return "Qərb"},
"doCode":function(d){return "et"},
"elseCode":function(d){return "əks halda"},
"finalLevel":function(d){return "Təbriklər! Axırıncı tapmacanı da tapdınız."},
"heightParameter":function(d){return "hündürlük"},
"ifCode":function(d){return "əgər"},
"ifPathAhead":function(d){return "əgər qabaqda yol varsa,"},
"ifTooltip":function(d){return "Əgər göstərilən istiqamətdə bir yol varsa, bəzi əmrləri yerinə yetir."},
"ifelseTooltip":function(d){return "Əgər göstərilən istiqamətdə yol varsa, əmrlərin birinci blokunu yerinə yetir. Əks halda isə əmrlərin ikinci blokunu."},
"incrementOpponentScore":function(d){return "rəqibə xal qazandır"},
"incrementOpponentScoreTooltip":function(d){return "İndiki qarşı tərəfə vahid əlavə et."},
"incrementPlayerScore":function(d){return "xal qazan"},
"incrementPlayerScoreTooltip":function(d){return "Oyunçunun hazırki xallarının üstünə bir gəl."},
"isWall":function(d){return "bu divardırmı"},
"isWallTooltip":function(d){return "Əgər burada divar var isə doğruya çevirir"},
"launchBall":function(d){return "yeni top fırlat"},
"launchBallTooltip":function(d){return "Oyuna top fırlat."},
"makeYourOwn":function(d){return "Öz Sıçrayan Oyununu yarat"},
"moveDown":function(d){return "aşağı get"},
"moveDownTooltip":function(d){return "Kürəyi aşağı hərəkət etdir."},
"moveForward":function(d){return "irəli get"},
"moveForwardTooltip":function(d){return "Məni bir xana irəli apar."},
"moveLeft":function(d){return "sola get"},
"moveLeftTooltip":function(d){return "Kürəyi sola hərəkət etdir."},
"moveRight":function(d){return "sağa get"},
"moveRightTooltip":function(d){return "Kürəyi sağa hərəkət etdir."},
"moveUp":function(d){return "yuxarı get"},
"moveUpTooltip":function(d){return "Kürəyi yuxarı hərəkət etdir."},
"nextLevel":function(d){return "Təbriklər! Siz bu tapmacanı tamamladınız."},
"no":function(d){return "Xeyr"},
"noPathAhead":function(d){return "yol kəsilib"},
"noPathLeft":function(d){return "sola yol yoxdur"},
"noPathRight":function(d){return "sağa yol yoxdur"},
"numBlocksNeeded":function(d){return "Bu  tapmaca %1 blokla həll oluna bilər."},
"pathAhead":function(d){return "irəli yol var"},
"pathLeft":function(d){return "əgər sola yol varsa,"},
"pathRight":function(d){return "əgər sağa yol varsa,"},
"pilePresent":function(d){return "təpəcik var"},
"playSoundBounce":function(d){return "sıçrayış səsi çıxart"},
"playSoundCheer":function(d){return "play cheering sound"},
"playSoundCrunch":function(d){return "xırçıltı səsini çal"},
"playSoundGoal1":function(d){return "hədəf 1 səsi çıxart"},
"playSoundGoal2":function(d){return "hədəf 2 səsi çıxart"},
"playSoundHit":function(d){return "zərbə səsini səsləndir"},
"playSoundKick":function(d){return "təpik səsi səsləndir"},
"playSoundLosePoint":function(d){return "xal itirmək səsini oynat"},
"playSoundLosePoint2":function(d){return "xal 2 uduzmaq səsini oynat"},
"playSoundRetro":function(d){return "qədimi səs oynat"},
"playSoundRubber":function(d){return "rezin səsini oynat"},
"playSoundSlap":function(d){return "çırpma səsini oynat"},
"playSoundSlapshot":function(d){return "play slapshot sound"},
"playSoundSwish":function(d){return "play net swish sound"},
"playSoundTooltip":function(d){return "Seçilmiş səsi oynat."},
"playSoundWhistle":function(d){return "play whistle sound"},
"playSoundWinPoint":function(d){return "qələbə xalı səsini oynat"},
"playSoundWinPoint2":function(d){return "2-ci qələbə xalı səsini oynat"},
"playSoundWood":function(d){return "taxta səsini oynat"},
"putdownTower":function(d){return "qülləni yerə qoy"},
"reinfFeedbackMsg":function(d){return "Oyununuzu təkrar oynamaq üçün \"Təkrar\" düyməsinə basa bilərsiniz."},
"removeSquare":function(d){return "kvadratı yığışdır"},
"repeatUntil":function(d){return "təkrar et, ta ki"},
"repeatUntilBlocked":function(d){return "hələ ki, qabaqda yol var"},
"repeatUntilFinish":function(d){return "bitənə qədər təkrar et"},
"scoreText":function(d){return "Hesab: "+bounce_locale.v(d,"oyunçuXalı")+" : "+bounce_locale.v(d,"rəqibXalı")},
"setBackground":function(d){return "set "+bounce_locale.v(d,"background")+" scene"},
"setBackgroundHardcourt":function(d){return "bərk kort səhnəsini qur"},
"setBackgroundRandom":function(d){return "təsadüfi səhnə qur"},
"setBackgroundRetro":function(d){return "qədimi səhnə qur"},
"setBackgroundTooltip":function(d){return "Arxa fon şəklini təyin edir"},
"setBallHardcourt":function(d){return "bərk kort topu qur"},
"setBallRandom":function(d){return "təsadüfi top qur"},
"setBallRetro":function(d){return "qədimi top qur"},
"setBall":function(d){return "set "+bounce_locale.v(d,"ball")+" ball"},
"setBallSpeedFast":function(d){return "sürətli top sürəti qur"},
"setBallSpeedNormal":function(d){return "orta top sürəti qur"},
"setBallSpeedRandom":function(d){return "təsadüfi top sürəti qur"},
"setBallSpeedSlow":function(d){return "yavaş top sürəti qur"},
"setBallSpeedTooltip":function(d){return "Topun sürətini qurur"},
"setBallSpeedVeryFast":function(d){return "çox sürətli top sürəti qur"},
"setBallSpeedVerySlow":function(d){return "çox yavaş top sürəti qur"},
"setBallTooltip":function(d){return "Topun təsvirini qurur"},
"setPaddle":function(d){return "set paddle"},
"setPaddleHardcourt":function(d){return "bərk kort kürəyi qur"},
"setPaddleRandom":function(d){return "təsadüfi kürək qur"},
"setPaddleRetro":function(d){return "qədimi kürəyi qur"},
"setPaddleSpeedFast":function(d){return "avarın sürətini sürətli et"},
"setPaddleSpeedNormal":function(d){return "avarın sürətini normal et"},
"setPaddleSpeedRandom":function(d){return "avarın sürətini təsadüfi et"},
"setPaddleSpeedSlow":function(d){return "avarın sürətini zəif et"},
"setPaddleSpeedTooltip":function(d){return "Avarın sürətini təyin et"},
"setPaddleSpeedVeryFast":function(d){return "avarın sürətini çox sürətli et"},
"setPaddleSpeedVerySlow":function(d){return "avarın sürətini çox zəif et"},
"setPaddleTooltip":function(d){return "Kürəyin təsvirini qur"},
"setPlayer":function(d){return "oyunçunu seç"},
"setPlayerSpeedFast":function(d){return "set fast player speed"},
"setPlayerSpeedNormal":function(d){return "set normal player speed"},
"setPlayerSpeedRandom":function(d){return "set random player speed"},
"setPlayerSpeedSlow":function(d){return "yavaş oyunçu sürətinə keç"},
"setPlayerSpeedTooltip":function(d){return "Oyunçunun sürətini tənzimlə"},
"setPlayerSpeedVeryFast":function(d){return "çox sürətli oyunçu sürətinə keç"},
"setPlayerSpeedVerySlow":function(d){return "çox yavaş oyunçu sürətinə keç"},
"setTeamTooltip":function(d){return "Sets the logo and color scheme"},
"setTeam":function(d){return "Komandani tənzimlə "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Set team random"},
"shareBounceTwitter":function(d){return "Mənim yaratdığım Sıçrayan oyununu yoxlayın. Onu @codeorg vasitəsilə mən yazmışam"},
"shareBounceTwitterDonor":function(d){return "Check out the Bounce game I made. (Thanks "+bounce_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Oyununuzu bölüşün:"},
"turnLeft":function(d){return "sola dön"},
"turnRight":function(d){return "sağa dön"},
"turnTooltip":function(d){return "Məni 90 dərəcə sola və ya sağa döndərir."},
"whenBallInGoal":function(d){return "top qapiya daxil olanda"},
"whenBallInGoalTooltip":function(d){return "Elə ki, top hədəfə dəyir, aşağıdakı əmrləri icra et."},
"whenBallMissesPaddle":function(d){return "top avarı keçəndə"},
"whenBallMissesPaddleTooltip":function(d){return "Top avarı keçəndə əmrləri icra et."},
"whenBallMissesPlayer":function(d){return "top oyunçudan yan keçəndə"},
"whenDown":function(d){return "oxu aşağı etdikdə"},
"whenDownTooltip":function(d){return "Ox aşağı açarı basıldıqda aşağıdakı əmrləri icra et."},
"whenGameStarts":function(d){return "oyun başladıqda"},
"whenGameStartsTooltip":function(d){return "Oyun başladıqda aşağıdakı əmrləri icra et."},
"whenLeft":function(d){return "oxu sola etdikdə"},
"whenLeftTooltip":function(d){return "Ox sola açarı basıldıqda aşağıdakı əmrləri icra et."},
"whenPaddleCollided":function(d){return "top avara dəyəndə"},
"whenPaddleCollidedTooltip":function(d){return "Top divarla toqquşduqda əmrləri icra et."},
"whenPlayerCollided":function(d){return "top oyunçuya dəyəndə"},
"whenPlayerCollidedTooltip":function(d){return "Execute the actions below when a ball collides with the player."},
"whenRight":function(d){return "oxu sağa etdikdə"},
"whenRightTooltip":function(d){return "Ox aşağı açarı basıldıqda aşağıdakı əmrləri icra et."},
"whenUp":function(d){return "oxu yuxarı etdikdə"},
"whenUpTooltip":function(d){return "Ox yuxarı açarı basıldıqda aşağıdakı əmrləri icra et."},
"whenWallCollided":function(d){return "top divara dəyəndə"},
"whenWallCollidedTooltip":function(d){return "Top divarla toqquşanda aşağıdakı əmrləri icra et."},
"whileMsg":function(d){return "hələ ki,"},
"whileTooltip":function(d){return "Hasarlanmış əmrləri son nöqtəyə çatana qədər təkrarla."},
"yes":function(d){return "Bəli"}};