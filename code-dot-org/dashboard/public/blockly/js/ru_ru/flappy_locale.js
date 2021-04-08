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
"continue":function(d){return "Продолжить"},
"doCode":function(d){return "выполнить"},
"elseCode":function(d){return "или"},
"endGame":function(d){return "завершить игру"},
"endGameTooltip":function(d){return "Завершает игру."},
"finalLevel":function(d){return "Поздравляю! Последняя головоломка решена."},
"flap":function(d){return "взмах крыльев"},
"flapRandom":function(d){return "взлететь со случайной силой"},
"flapVerySmall":function(d){return "взлететь с очень маленькой силой"},
"flapSmall":function(d){return "взлететь с маленькой силой"},
"flapNormal":function(d){return "взлететь с нормальной силой"},
"flapLarge":function(d){return "взлететь с большой силой"},
"flapVeryLarge":function(d){return "взлететь с очень большой силой"},
"flapTooltip":function(d){return "Лети вверх."},
"flappySpecificFail":function(d){return "Твой код выглядит неплохо, она будет махать крыльями при нажатии мышкой. Но чтобы достичь цели, тебе придется кликать мышкой много раз."},
"incrementPlayerScore":function(d){return "заработать очко"},
"incrementPlayerScoreTooltip":function(d){return "Добавить игроку одно очко."},
"nextLevel":function(d){return "Поздравляю! Головоломка решена."},
"no":function(d){return "Нет"},
"numBlocksNeeded":function(d){return "Эта головоломка может быть решена с помощью %1 блоков."},
"playSoundRandom":function(d){return "исполнить случайный звук"},
"playSoundBounce":function(d){return "исполнить звук отскока"},
"playSoundCrunch":function(d){return "исполнить звук хруста"},
"playSoundDie":function(d){return "исполнить грустный звук"},
"playSoundHit":function(d){return "воспроизвести грохот"},
"playSoundPoint":function(d){return "воспроизвести звук преодоления точки"},
"playSoundSwoosh":function(d){return "воспроизвести свист"},
"playSoundWing":function(d){return "исполнить звук взмаха крыльев"},
"playSoundJet":function(d){return "воспроизвести звук самолета"},
"playSoundCrash":function(d){return "исполнить звук крушения"},
"playSoundJingle":function(d){return "воспроизвести звук колокольчика"},
"playSoundSplash":function(d){return "воспроизвести звук всплеска"},
"playSoundLaser":function(d){return "исполнить звук лазера"},
"playSoundTooltip":function(d){return "Исполнить выбранный звук."},
"reinfFeedbackMsg":function(d){return "Вы можете нажать кнопку «Повторить», чтобы вернуться в игру."},
"scoreText":function(d){return "Счет: "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "установить сцену"},
"setBackgroundRandom":function(d){return "установить случайную сцену"},
"setBackgroundFlappy":function(d){return "задать сцену «Город» (день)"},
"setBackgroundNight":function(d){return "задать сцену «Город» (ночь)"},
"setBackgroundSciFi":function(d){return "задать сцену «Научно-фантастическая»"},
"setBackgroundUnderwater":function(d){return "задать сцену «Под водой»"},
"setBackgroundCave":function(d){return "задать сцену «Пещера»"},
"setBackgroundSanta":function(d){return "задать сцену «Санта»"},
"setBackgroundTooltip":function(d){return "Задает фоновое изображение"},
"setGapRandom":function(d){return "задать случайный промежуток"},
"setGapVerySmall":function(d){return "задать очень маленький промежуток"},
"setGapSmall":function(d){return "задать маленький промежуток"},
"setGapNormal":function(d){return "задать обычный промежуток"},
"setGapLarge":function(d){return "задать большой промежуток"},
"setGapVeryLarge":function(d){return "задать очень большой промежуток"},
"setGapHeightTooltip":function(d){return "Задает вертикальный промежуток в препятствии"},
"setGravityRandom":function(d){return "задать случайную гравитацию"},
"setGravityVeryLow":function(d){return "задать очень низкую гравитацию"},
"setGravityLow":function(d){return "задать низкую гравитацию"},
"setGravityNormal":function(d){return "задать нормальную гравитацию"},
"setGravityHigh":function(d){return "задать высокую гравитацию"},
"setGravityVeryHigh":function(d){return "задать очень высокую гравитацию"},
"setGravityTooltip":function(d){return "Задает гравитацию уровня"},
"setGround":function(d){return "установить основание"},
"setGroundRandom":function(d){return "установить случайное основание"},
"setGroundFlappy":function(d){return "задать основание «Земля»"},
"setGroundSciFi":function(d){return "задать основание «Научная фантастика»"},
"setGroundUnderwater":function(d){return "задать основание «Под водой»"},
"setGroundCave":function(d){return "задать основание «Пещера»"},
"setGroundSanta":function(d){return "задать основание «Санта»"},
"setGroundLava":function(d){return "задать основание «Лава»"},
"setGroundTooltip":function(d){return "Задает изображение основания"},
"setObstacle":function(d){return "задать препятствия"},
"setObstacleRandom":function(d){return "задать случайное препятствие"},
"setObstacleFlappy":function(d){return "задать препятствие «Труба»"},
"setObstacleSciFi":function(d){return "задать препятствие «Научная фантастика»"},
"setObstacleUnderwater":function(d){return "задать препятствие «Растение»"},
"setObstacleCave":function(d){return "задать препятствие «Пещера»"},
"setObstacleSanta":function(d){return "задать препятствие «Дымоход»"},
"setObstacleLaser":function(d){return "задать препятствие «Лазер»"},
"setObstacleTooltip":function(d){return "Задает изображение препятствия"},
"setPlayer":function(d){return "выбрать игрока"},
"setPlayerRandom":function(d){return "выбрать случайного игрока"},
"setPlayerFlappy":function(d){return "выбрать игрока «Желтая птица»"},
"setPlayerRedBird":function(d){return "выбрать игрока «Красная птица»"},
"setPlayerSciFi":function(d){return "выбрать игрока «Космический корабль»"},
"setPlayerUnderwater":function(d){return "выбрать игрока «Рыбка»"},
"setPlayerCave":function(d){return "выбрать игрока «Летучая мышь»"},
"setPlayerSanta":function(d){return "выбрать игрока «Санта»"},
"setPlayerShark":function(d){return "выбрать игрока «Акула»"},
"setPlayerEaster":function(d){return "выбрать игрока «Пасхальный кролик»"},
"setPlayerBatman":function(d){return "выбрать игрока «Бэтмен»"},
"setPlayerSubmarine":function(d){return "выбрать игрока «Подводная лодка»"},
"setPlayerUnicorn":function(d){return "выбрать игрока «Единорог»"},
"setPlayerFairy":function(d){return "выбрать игрока «Фея»"},
"setPlayerSuperman":function(d){return "выбрать игрока «Супермен»"},
"setPlayerTurkey":function(d){return "выбрать игрока «Индюшка»"},
"setPlayerTooltip":function(d){return "Выбрать изображение игрока"},
"setScore":function(d){return "задать счет"},
"setScoreTooltip":function(d){return "Задает счет игрока"},
"setSpeed":function(d){return "задать скорость"},
"setSpeedTooltip":function(d){return "задать скорость уровня"},
"shareFlappyTwitter":function(d){return "Оцени мою игру «Порхающая птичка». Я написал ее с помощью @codeorg"},
"shareFlappyTwitterDonor":function(d){return "Check out the Flappy game I made. (Thanks "+flappy_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Поделиться своей игрой:"},
"soundRandom":function(d){return "случайный"},
"soundBounce":function(d){return "отскочить"},
"soundCrunch":function(d){return "хруст"},
"soundDie":function(d){return "грусть"},
"soundHit":function(d){return "грохот"},
"soundPoint":function(d){return "очко"},
"soundSwoosh":function(d){return "свист"},
"soundWing":function(d){return "крыло"},
"soundJet":function(d){return "реактивный"},
"soundCrash":function(d){return "разрушение"},
"soundJingle":function(d){return "звон"},
"soundSplash":function(d){return "всплеск"},
"soundLaser":function(d){return "лазер"},
"speedRandom":function(d){return "задать случайную скорость"},
"speedVerySlow":function(d){return "задать очень медленную скорость"},
"speedSlow":function(d){return "задать медленную скорость"},
"speedNormal":function(d){return "задать нормальную скорость"},
"speedFast":function(d){return "задать быструю скорость"},
"speedVeryFast":function(d){return "задать очень быструю скорость"},
"whenClick":function(d){return "при нажатии на мышку"},
"whenClickTooltip":function(d){return "Выполнить указанные ниже действия при нажатии на мышку."},
"whenCollideGround":function(d){return "при ударе о землю"},
"whenCollideGroundTooltip":function(d){return "Выполнить указанные ниже действия, когда Порхающая птичка коснется земли."},
"whenCollideObstacle":function(d){return "при столкновении с препятствием"},
"whenCollideObstacleTooltip":function(d){return "Выполнить указанные ниже действия, когда Порхающая птичка столкнется с препятствием."},
"whenEnterObstacle":function(d){return "когда преодолевает препятствие"},
"whenEnterObstacleTooltip":function(d){return "Выполнить указанные ниже действия, когда Порхающая птичка преодолевает препятствие."},
"whenRunButtonClick":function(d){return "когда игра начнется"},
"whenRunButtonClickTooltip":function(d){return "Выполнить указанные ниже действия, когда игра начнется."},
"yes":function(d){return "Да"}};