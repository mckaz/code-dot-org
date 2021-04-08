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
"basketballLaunchBall":function(d){return "бросить новый мяч"},
"basketballLaunchBallTooltip":function(d){return "Бросить мяч в игру."},
"basketballSetPaddle":function(d){return "выбрать руку"},
"basketballSetPaddleSpeedFast":function(d){return "установить быструю скорость рук"},
"basketballSetPaddleSpeedNormal":function(d){return "установить нормальную скорость рук"},
"basketballSetPaddleSpeedRandom":function(d){return "задать случайную скорость руки"},
"basketballSetPaddleSpeedSlow":function(d){return "задать медленную скорость руки"},
"basketballSetPaddleSpeedTooltip":function(d){return "Устанавливает скорость руки"},
"basketballSetPaddleSpeedVeryFast":function(d){return "задать очень быструю скорость руки"},
"basketballSetPaddleSpeedVerySlow":function(d){return "задать очень медленную скорость силы"},
"basketballWhenBallMissesPaddle":function(d){return "когда мяч не попадает в руку"},
"basketballWhenPaddleCollided":function(d){return "когда мяч попадет в руку"},
"bounceBall":function(d){return "отскок шара"},
"bounceBallTooltip":function(d){return "Отскок шара от объекта."},
"continue":function(d){return "Продолжить"},
"dirE":function(d){return "В"},
"dirN":function(d){return "С"},
"dirS":function(d){return "Ю"},
"dirW":function(d){return "З"},
"doCode":function(d){return "выполнить"},
"elseCode":function(d){return "иначе"},
"finalLevel":function(d){return "Поздравляю! Последняя головоломка решена."},
"heightParameter":function(d){return "высота"},
"ifCode":function(d){return "если"},
"ifPathAhead":function(d){return "если можно пройти вперед"},
"ifTooltip":function(d){return "если можно пройти в данном направлении, тогда исполнить следующие действия."},
"ifelseTooltip":function(d){return "Если в данном направлении продвижение возможно, тогда выполняется первый блок команд. Иначе, выполняется второй блок."},
"incrementOpponentScore":function(d){return "очки противника"},
"incrementOpponentScoreTooltip":function(d){return "Добавить одно очко к текущему счету соперника."},
"incrementPlayerScore":function(d){return "очки"},
"incrementPlayerScoreTooltip":function(d){return "Добавить игроку одно очко."},
"isWall":function(d){return "это стена?"},
"isWallTooltip":function(d){return "Возвращает логическое значение «истина», если здесь есть стена"},
"launchBall":function(d){return "запустить новый шар"},
"launchBallTooltip":function(d){return "Запустить шар в игру."},
"makeYourOwn":function(d){return "Создай свою игру про шары"},
"moveDown":function(d){return "переместить вниз"},
"moveDownTooltip":function(d){return "Переместить платформу вниз."},
"moveForward":function(d){return "двигаться вперед"},
"moveForwardTooltip":function(d){return "Передвигает меня вперед на одну клетку."},
"moveLeft":function(d){return "переместить влево"},
"moveLeftTooltip":function(d){return "Переместить платформу влево."},
"moveRight":function(d){return "переместить вправо"},
"moveRightTooltip":function(d){return "Переместить платформу вправо."},
"moveUp":function(d){return "переместить вверх"},
"moveUpTooltip":function(d){return "Переместить платформу вверх."},
"nextLevel":function(d){return "Поздравляю! Головоломка решена."},
"no":function(d){return "Нет"},
"noPathAhead":function(d){return "путь закрыт"},
"noPathLeft":function(d){return "нет пути налево"},
"noPathRight":function(d){return "нет пути направо"},
"numBlocksNeeded":function(d){return "Эта головоломка может быть решена с помощью %1 блоков."},
"pathAhead":function(d){return "путь впереди"},
"pathLeft":function(d){return "если путь налево"},
"pathRight":function(d){return "если путь направо"},
"pilePresent":function(d){return "здесь есть куча"},
"playSoundBounce":function(d){return "исполнить звук отскока"},
"playSoundCheer":function(d){return "воспроизвести звук приветствий"},
"playSoundCrunch":function(d){return "воспроизвести звук хруста"},
"playSoundGoal1":function(d){return "воспроизвести звук цели 1"},
"playSoundGoal2":function(d){return "воспроизвести звук цели 2"},
"playSoundHit":function(d){return "воспроизвести звук удара"},
"playSoundKick":function(d){return "воспроизвести звук удара"},
"playSoundLosePoint":function(d){return "воспроизвести звук потери очка"},
"playSoundLosePoint2":function(d){return "воспроизвести звук потери очка 2"},
"playSoundRetro":function(d){return "воспроизвести звук ретро"},
"playSoundRubber":function(d){return "воспроизвести звук резины"},
"playSoundSlap":function(d){return "воспроизвести звук шлепка"},
"playSoundSlapshot":function(d){return "воспроизвести звук шлепка"},
"playSoundSwish":function(d){return "воспроизвести звук взмаха"},
"playSoundTooltip":function(d){return "Исполнить выбранный звук."},
"playSoundWhistle":function(d){return "воспроизвести звук свистка"},
"playSoundWinPoint":function(d){return "воспроизвести звук выигрыша очка"},
"playSoundWinPoint2":function(d){return "воспроизвести звук выигрыша очка 2"},
"playSoundWood":function(d){return "воспроизвести звук дерева"},
"putdownTower":function(d){return "положить башню"},
"reinfFeedbackMsg":function(d){return "Вы можете нажать кнопку «Повторить», чтобы вернуться в игру."},
"removeSquare":function(d){return "разбросать квадрат"},
"repeatUntil":function(d){return "повторять до"},
"repeatUntilBlocked":function(d){return "пока можно пройти вперёд"},
"repeatUntilFinish":function(d){return "повторять до окончания"},
"scoreText":function(d){return "Счет: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "Назначить "+bounce_locale.v(d,"background")+" фон"},
"setBackgroundHardcourt":function(d){return "задать сцену с твердым покрытием"},
"setBackgroundRandom":function(d){return "задать случайную сцену"},
"setBackgroundRetro":function(d){return "задать ретро-сцену"},
"setBackgroundTooltip":function(d){return "Задать изображение фона"},
"setBallHardcourt":function(d){return "задать шар с твердым покрытием"},
"setBallRandom":function(d){return "задать случайный шар"},
"setBallRetro":function(d){return "задать ретро-шар"},
"setBall":function(d){return "Назначить "+bounce_locale.v(d,"ball")+" мяч"},
"setBallSpeedFast":function(d){return "задать быструю скорость шара"},
"setBallSpeedNormal":function(d){return "задать нормальную скорость шара"},
"setBallSpeedRandom":function(d){return "задать случайную скорость шара"},
"setBallSpeedSlow":function(d){return "задать медленную скорость шара"},
"setBallSpeedTooltip":function(d){return "Задает скорость шара"},
"setBallSpeedVeryFast":function(d){return "задать очень быструю скорость шара"},
"setBallSpeedVerySlow":function(d){return "задать очень медленную скорость шара"},
"setBallTooltip":function(d){return "Задать изображение шара"},
"setPaddle":function(d){return "выбор платформы"},
"setPaddleHardcourt":function(d){return "задать платформу с твердым покрытием"},
"setPaddleRandom":function(d){return "задать случайную платформу"},
"setPaddleRetro":function(d){return "задать платформу с ретро-покрытием"},
"setPaddleSpeedFast":function(d){return "задать быструю скорость платформы"},
"setPaddleSpeedNormal":function(d){return "задать нормальную скорость платформы"},
"setPaddleSpeedRandom":function(d){return "задать случайную скорость платформы"},
"setPaddleSpeedSlow":function(d){return "задать медленную скорость платформы"},
"setPaddleSpeedTooltip":function(d){return "Задает скорость платформы"},
"setPaddleSpeedVeryFast":function(d){return "задать очень быструю скорость платформы"},
"setPaddleSpeedVerySlow":function(d){return "задать очень медленную скорость платформы"},
"setPaddleTooltip":function(d){return "Задает изображение платформы"},
"setPlayer":function(d){return "выбрать игрока"},
"setPlayerSpeedFast":function(d){return "Назначить быструю скорость игрока"},
"setPlayerSpeedNormal":function(d){return "установить нормальную скорость игроку"},
"setPlayerSpeedRandom":function(d){return "установить случайную скорость игроку"},
"setPlayerSpeedSlow":function(d){return "установить медленую скорость игроку"},
"setPlayerSpeedTooltip":function(d){return "Установить скорость игрока"},
"setPlayerSpeedVeryFast":function(d){return "Назначить очень быструю скорость игрока"},
"setPlayerSpeedVerySlow":function(d){return "Назначить очень медленную скорость игрока"},
"setTeamTooltip":function(d){return "Устанавливает логотип и цветовую схему"},
"setTeam":function(d){return "Назначить команду "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Назначить команду случайно"},
"shareBounceTwitter":function(d){return "Оцени мою игру про шары. Я написал ее с помощью @codeorg"},
"shareBounceTwitterDonor":function(d){return "Проверьте созданную мной игру в шары. (Спасибо, "+bounce_locale.v(d,"donor")+", за поддержку @codeorg)"},
"shareGame":function(d){return "Поделитесь вашей игрой:"},
"turnLeft":function(d){return "повернуть налево"},
"turnRight":function(d){return "повернуть направо"},
"turnTooltip":function(d){return "Поворачивает меня налево или направо на 90 градусов."},
"whenBallInGoal":function(d){return "когда шар попал в цель"},
"whenBallInGoalTooltip":function(d){return "Выполнить указанные ниже действия, когда шар попадет в цель."},
"whenBallMissesPaddle":function(d){return "когда шар не сталкивается с платформой"},
"whenBallMissesPaddleTooltip":function(d){return "Выполнить указанные ниже действия, когда шар не сталкивается с платформой."},
"whenBallMissesPlayer":function(d){return "Когда игрок упускает мяч"},
"whenDown":function(d){return "когда клавиша со стрелкой вниз"},
"whenDownTooltip":function(d){return "Выполнить указанные ниже действия, когда будет нажата клавиша со стрелкой вниз."},
"whenGameStarts":function(d){return "Когда игра начнется"},
"whenGameStartsTooltip":function(d){return "Выполняет действия ниже, когда игра начнётся."},
"whenLeft":function(d){return "когда клавиша со стрелкой влево"},
"whenLeftTooltip":function(d){return "Выполнить указанные ниже действия, когда нажата клавиша со стрелкой влево."},
"whenPaddleCollided":function(d){return "когда шар ударяется о платформу"},
"whenPaddleCollidedTooltip":function(d){return "Выполнить указанные ниже действия, когда шар сталкивается с платформой."},
"whenPlayerCollided":function(d){return "Когда мяч попадает по игроку"},
"whenPlayerCollidedTooltip":function(d){return "Выполнить следующие действия, когда мяч сталкивается с платформой."},
"whenRight":function(d){return "когда клавиша со стрелкой вправо"},
"whenRightTooltip":function(d){return "Выполните указанные ниже действия, когда нажата клавиша со стрелкой вправо."},
"whenUp":function(d){return "когда клавиша со стрелкой вверх"},
"whenUpTooltip":function(d){return "Выполнить указанные ниже действия, когда нажата клавиша со стрелкой вверх."},
"whenWallCollided":function(d){return "когда шар ударяется о стену"},
"whenWallCollidedTooltip":function(d){return "Выполнить указанные ниже действия, когда шар ударяется о стену."},
"whileMsg":function(d){return "пока"},
"whileTooltip":function(d){return "Повторяет действия до достижения конечной точки."},
"yes":function(d){return "Да"}};