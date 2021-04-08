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
"basketballLaunchBall":function(d){return "кинути новий м'яч"},
"basketballLaunchBallTooltip":function(d){return "Ввести м'яч у гру."},
"basketballSetPaddle":function(d){return "вибрати гравця"},
"basketballSetPaddleSpeedFast":function(d){return "встановити більшу швидкість рук"},
"basketballSetPaddleSpeedNormal":function(d){return "встановити нормальну швидкість рук"},
"basketballSetPaddleSpeedRandom":function(d){return "встановити швидкість рук випадковою"},
"basketballSetPaddleSpeedSlow":function(d){return "встановити повільну швидкість рук"},
"basketballSetPaddleSpeedTooltip":function(d){return "Встановити швидкість рук"},
"basketballSetPaddleSpeedVeryFast":function(d){return "зробити швидкість рук максимальною"},
"basketballSetPaddleSpeedVerySlow":function(d){return "встановити швидкість рук дуже повільною"},
"basketballWhenBallMissesPaddle":function(d){return "коли м'яч випав з рук"},
"basketballWhenPaddleCollided":function(d){return "коли м'яч потрапляє до рук"},
"bounceBall":function(d){return "відбити м'яч"},
"bounceBallTooltip":function(d){return "Відбити м'яч від об'єкта."},
"continue":function(d){return "Далі"},
"dirE":function(d){return "Сх"},
"dirN":function(d){return "Пн"},
"dirS":function(d){return "Пд"},
"dirW":function(d){return "Зх"},
"doCode":function(d){return "робити"},
"elseCode":function(d){return "інакше"},
"finalLevel":function(d){return "Вітання! Ви розв'язали останнє завдання."},
"heightParameter":function(d){return "висота"},
"ifCode":function(d){return "якщо"},
"ifPathAhead":function(d){return "якщо є шлях вперед"},
"ifTooltip":function(d){return "Якщо є шлях у вказаному напрямку, то виконуй певні дії."},
"ifelseTooltip":function(d){return "Якщо є шлях у вказаному напрямку, то виконуй перший блок дій. У протилежному випадку, виконуй другий блок дій."},
"incrementOpponentScore":function(d){return "бал для супротивника"},
"incrementOpponentScoreTooltip":function(d){return "Додати один бал до рахунку супротивника."},
"incrementPlayerScore":function(d){return "додати бал"},
"incrementPlayerScoreTooltip":function(d){return "Додати одне очко до рахунку гравця."},
"isWall":function(d){return "це стіна"},
"isWallTooltip":function(d){return "Повертає true, якщо тут стіна"},
"launchBall":function(d){return "запустити новий м'яч"},
"launchBallTooltip":function(d){return "Запустити м'яч у гру."},
"makeYourOwn":function(d){return "Створити свою власну гру Арканоід"},
"moveDown":function(d){return "рухатись вниз"},
"moveDownTooltip":function(d){return "Перемістити платформу вниз."},
"moveForward":function(d){return "рухатись вперед"},
"moveForwardTooltip":function(d){return "Перемісти мене на одну клітинку вперед."},
"moveLeft":function(d){return "рухатись ліворуч"},
"moveLeftTooltip":function(d){return "Перемістити платформу вліво."},
"moveRight":function(d){return "рухатись праворуч"},
"moveRightTooltip":function(d){return "Перемістити платформу праворуч."},
"moveUp":function(d){return "рухатися вгору"},
"moveUpTooltip":function(d){return "Перемістити платформу вгору."},
"nextLevel":function(d){return "Вітання! Ви розв'язали це завдання."},
"no":function(d){return "Ні"},
"noPathAhead":function(d){return "шлях заблоковано"},
"noPathLeft":function(d){return "ліворуч немає шляху"},
"noPathRight":function(d){return "праворуч немає шляху"},
"numBlocksNeeded":function(d){return "Це завдання можна розв'язати за допомогою %1 блоків."},
"pathAhead":function(d){return "шлях вперед"},
"pathLeft":function(d){return "якщо є шлях ліворуч"},
"pathRight":function(d){return "якщо є шлях праворуч"},
"pilePresent":function(d){return "є купа"},
"playSoundBounce":function(d){return "грати звук відбивання"},
"playSoundCheer":function(d){return "грати звук вболівальників"},
"playSoundCrunch":function(d){return "грати звук хрускоту"},
"playSoundGoal1":function(d){return "грати звук цілі 1"},
"playSoundGoal2":function(d){return "грати звук цілі 2"},
"playSoundHit":function(d){return "грати звук влучання"},
"playSoundKick":function(d){return "грати звук удару"},
"playSoundLosePoint":function(d){return "грати звук втрати балу"},
"playSoundLosePoint2":function(d){return "грати звук втрати балу 2"},
"playSoundRetro":function(d){return "грати звук ретро"},
"playSoundRubber":function(d){return "грати звук гумки"},
"playSoundSlap":function(d){return "грати звук ляпаса"},
"playSoundSlapshot":function(d){return "грати звук клацання"},
"playSoundSwish":function(d){return "грати звук потрапляння в сітку"},
"playSoundTooltip":function(d){return "Відтворити обраний звук."},
"playSoundWhistle":function(d){return "грати звук свистка"},
"playSoundWinPoint":function(d){return "грати звук переможного балу"},
"playSoundWinPoint2":function(d){return "грати звук переможного балу 2"},
"playSoundWood":function(d){return "грати звук деревини"},
"putdownTower":function(d){return "поставити башту"},
"reinfFeedbackMsg":function(d){return "Можна натиснути кнопку \"Спробувати знову\", щоб повернутися і пограти у свою гру."},
"removeSquare":function(d){return "видалити квадрат"},
"repeatUntil":function(d){return "повторювати до"},
"repeatUntilBlocked":function(d){return "поки є шлях вперед"},
"repeatUntilFinish":function(d){return "повторювати до кінця"},
"scoreText":function(d){return "Рахунок: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "встановити сцену "+bounce_locale.v(d,"background")},
"setBackgroundHardcourt":function(d){return "встановити сцену тенісного залу"},
"setBackgroundRandom":function(d){return "встановити випадкову сцену"},
"setBackgroundRetro":function(d){return "встановити сцену ретро"},
"setBackgroundTooltip":function(d){return "Встановлює фонове зображення"},
"setBallHardcourt":function(d){return "встановити тенісний м'яч"},
"setBallRandom":function(d){return "встановити випадковий м'яч"},
"setBallRetro":function(d){return "встановити м'яч ретро"},
"setBall":function(d){return "встановити м'яч "+bounce_locale.v(d,"ball")},
"setBallSpeedFast":function(d){return "встановити високу швидкість м'яча"},
"setBallSpeedNormal":function(d){return "встановити нормальну швидкість м'яча"},
"setBallSpeedRandom":function(d){return "встановити випадкову швидкість м'яча"},
"setBallSpeedSlow":function(d){return "встановити повільну швидкість м'яча"},
"setBallSpeedTooltip":function(d){return "Встановлює швидкість м'яча"},
"setBallSpeedVeryFast":function(d){return "Встановити дуже високу швидкість м'яча"},
"setBallSpeedVerySlow":function(d){return "встановити дуже повільну швидкість м'яча"},
"setBallTooltip":function(d){return "Встановлює зображення м'яча"},
"setPaddle":function(d){return "встановити весло"},
"setPaddleHardcourt":function(d){return "встановити тенісну платформу"},
"setPaddleRandom":function(d){return "встановити випадкову платформу"},
"setPaddleRetro":function(d){return "встановити платформу ретро"},
"setPaddleSpeedFast":function(d){return "встановити високу швидкість платформи"},
"setPaddleSpeedNormal":function(d){return "встановити нормальну швидкість платформи"},
"setPaddleSpeedRandom":function(d){return "встановити випадкову швидкість платформи"},
"setPaddleSpeedSlow":function(d){return "встановити повільну швидкість платформи"},
"setPaddleSpeedTooltip":function(d){return "Встановлює швидкість платформи"},
"setPaddleSpeedVeryFast":function(d){return "встановити дуже високу швидкість платформи"},
"setPaddleSpeedVerySlow":function(d){return "встановити дуже повільну швидкість платформи"},
"setPaddleTooltip":function(d){return "Встановлює зображення платформи"},
"setPlayer":function(d){return "встановити гравця"},
"setPlayerSpeedFast":function(d){return "встановити швидкість гравця у високу"},
"setPlayerSpeedNormal":function(d){return "встановити швидкість гравця у нормальну"},
"setPlayerSpeedRandom":function(d){return "встановити швидкість гравця у випадкову"},
"setPlayerSpeedSlow":function(d){return "встановити швидкість гравця у низьку"},
"setPlayerSpeedTooltip":function(d){return "Встановлює швидкість гравця"},
"setPlayerSpeedVeryFast":function(d){return "встановити швидкість гравця у дуже високу"},
"setPlayerSpeedVerySlow":function(d){return "встановити швидкість гравця у дуже низьку"},
"setTeamTooltip":function(d){return "Встановлює логотип і колірну гаму"},
"setTeam":function(d){return "Встановити команду "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Встановити випадкову команду"},
"shareBounceTwitter":function(d){return "Подивіться на гру Арканоід, яку я зробив! Я написав її сам разом з @codeorg"},
"shareBounceTwitterDonor":function(d){return "Погляньте на гру Стрибунець, яку я створив. (Дякую "+bounce_locale.v(d,"donor")+" за підтримку @codeorg)"},
"shareGame":function(d){return "Поділитись своєю грою:"},
"turnLeft":function(d){return "повернути ліворуч"},
"turnRight":function(d){return "повернути праворуч"},
"turnTooltip":function(d){return "Повертає мене ліворуч або праворуч на 90 градусів."},
"whenBallInGoal":function(d){return "коли м'яч влучає в ціль"},
"whenBallInGoalTooltip":function(d){return "Виконати дії, подані нижче, коли м'яч влучає в ціль."},
"whenBallMissesPaddle":function(d){return "коли м'яч промахується повз платформу"},
"whenBallMissesPaddleTooltip":function(d){return "Виконати дії, подані нижче, коли коли м'яч промахується повз платформу."},
"whenBallMissesPlayer":function(d){return "коли м'яч промахується повз гравця"},
"whenDown":function(d){return "коли стрілка вниз"},
"whenDownTooltip":function(d){return "Виконати дії, подані нижче, при натисненні клавіші стрілка вниз."},
"whenGameStarts":function(d){return "коли гра починається"},
"whenGameStartsTooltip":function(d){return "Виконання дій, поданих нижче, коли починається гра."},
"whenLeft":function(d){return "коли стрілка вліво"},
"whenLeftTooltip":function(d){return "Виконати дії, подані нижче, при натисненні клавіші стрілка вліво."},
"whenPaddleCollided":function(d){return "коли м'яч влучає у платформу"},
"whenPaddleCollidedTooltip":function(d){return "Виконати дії, подані нижче, коли м'яч стикається з платформою."},
"whenPlayerCollided":function(d){return "коли м'яч влучає у гравця"},
"whenPlayerCollidedTooltip":function(d){return "Виконує вказані дії, коли м'яч стикається із гравцем."},
"whenRight":function(d){return "коли стрілка вправо"},
"whenRightTooltip":function(d){return "Виконати дії, подані нижче, при натисненні клавіші стрілка вправо."},
"whenUp":function(d){return "коли стрілка вгору"},
"whenUpTooltip":function(d){return "Виконати дії, подані нижче, при натисненні клавіші стрілка вгору."},
"whenWallCollided":function(d){return "коли м'яч влучає у стіну"},
"whenWallCollidedTooltip":function(d){return "Виконати дії, подані нижче, коли м'яч стикається з платформою."},
"whileMsg":function(d){return "поки"},
"whileTooltip":function(d){return "Повторювати вказані дії поки не досягнуто кінцевої точки."},
"yes":function(d){return "Так"}};