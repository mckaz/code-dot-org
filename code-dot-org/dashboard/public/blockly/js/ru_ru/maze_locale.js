var maze_locale = {lc:{"ar":function(n){
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
v:function(d,k){maze_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){maze_locale.c(d,k);return d[k] in p?p[d[k]]:(k=maze_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){maze_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).maze_locale = {
"at":function(d){return "в"},
"atFlower":function(d){return "на цветок"},
"atHoneycomb":function(d){return "в пчелиной соте"},
"avoidCowAndRemove":function(d){return "обойти корову и удалить 1"},
"collect":function(d){return "собрать"},
"collectiblePresent":function(d){return "тут какое-то сокровище"},
"collectorCollectTooltip":function(d){return "Соберите элемент"},
"collectorCollectedEverything":function(d){return "Поздравляем! Вы собрали всё собрали!"},
"collectorCollectedNothing":function(d){return "Продолжайте писать код! Вам нужно собрать как можно больше предметов."},
"collectorCollectedSome":function(d){return "Хорошая работа! Вы собрали "+maze_locale.v(d,"count")+" элементов!"},
"collectorCollectedNotEnough":function(d){return "Продолжайте писать код! Вам нужно собрать хотя бы "+maze_locale.p(d,"goal",0,"ru",{"one":"1 item","other":maze_locale.n(d,"goal")+" items"})},
"collectorCollectedTooMany":function(d){return "Я не вижу здесь достаточно элементов для сбора."},
"collectorTooManyBlocks":function(d){return "Можно использовать только "+maze_locale.v(d,"blockLimit")+" блоков. Взгляните на ваш код и попробуйте еще раз!"},
"continue":function(d){return "Продолжить"},
"corn":function(d){return "кукуруза"},
"cornTooltip":function(d){return "Собери немного кукурузы"},
"didNotCollectAllCrops":function(d){return "Убедитесь, что вы собрали весь урожай!"},
"didNotCollectEverything":function(d){return "Убедитесь, что вы собрали весь мед и нектар!"},
"didNotPlantEverywhere":function(d){return "Убедитесь, что вы посадили что-нибудь на каждом участке почвы!"},
"dig":function(d){return "разбросать 1"},
"digTooltip":function(d){return "разбросать 1 кучу земли"},
"dirE":function(d){return "В"},
"dirN":function(d){return "С"},
"dirS":function(d){return "Ю"},
"dirW":function(d){return "З"},
"doCode":function(d){return "выполнить"},
"elseCode":function(d){return "иначе"},
"emptyCropError":function(d){return "Весь урожай собран."},
"fill":function(d){return "засыпать 1"},
"fillN":function(d){return "засыпать "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "засыпать квадрат"},
"fillStack":function(d){return "засыпать "+maze_locale.v(d,"shovelfuls")+" ям"},
"fillTooltip":function(d){return "насыпать 1 кучу земли"},
"finalLevel":function(d){return "Поздравляем! Ты решил последнюю головоломку."},
"flowerEmptyError":function(d){return "У этого цветка больше нет нектара."},
"get":function(d){return "взять"},
"goal":function(d){return "цель"},
"has":function(d){return "имеет"},
"haslettuce":function(d){return "это салат"},
"hascorn":function(d){return "это кукуруза"},
"haspumpkin":function(d){return "это тыквы"},
"heightParameter":function(d){return "высота"},
"holePresent":function(d){return "здесь яма"},
"honey":function(d){return "сохранить мед"},
"honeyAvailable":function(d){return "мед"},
"honeyTooltip":function(d){return "Сохранить мед из нектара"},
"honeycombFullError":function(d){return "В этой соте больше нет места для меда."},
"ifCode":function(d){return "если"},
"ifFlowerTooltip":function(d){return "Если в указанном направлении есть цветок/сота, тогда выполни некоторые действия."},
"ifInRepeatError":function(d){return "Тебе нужно разместить блок «если» внутри блока «повторить». Если возникают проблемы, вернись на предыдущий уровень, чтобы еще раз посмотреть, как это делается."},
"ifOnlyFlowerTooltip":function(d){return "Если в указанном направлении есть цветок, тогда выполни некоторые действия."},
"ifPathAhead":function(d){return "если есть путь вперед"},
"ifTooltip":function(d){return "Если можно пройти в указанном направлении, тогда выполни следующие действия."},
"ifelseFlowerTooltip":function(d){return "Если в указанном направлении есть цветок/сота, тогда выполни первый блок действий. В противном случае выполни второй блок действий."},
"ifelseTooltip":function(d){return "Если можно пройти в указанном направлении, тогда выполни первый блок действий. В противном случае выполни второй блок действий."},
"insufficientHoney":function(d){return "Тебе нужно собрать правильное количество меда."},
"insufficientNectar":function(d){return "Тебе нужно собрать правильное количество нектара."},
"lettuce":function(d){return "салат"},
"lettuceTooltip":function(d){return "Соберите немного салата"},
"make":function(d){return "сохранить"},
"moveBackward":function(d){return "переместить назад"},
"moveEastTooltip":function(d){return "Перемести меня на одну клетку на восток."},
"moveForward":function(d){return "переместить вперед"},
"moveForwardTooltip":function(d){return "Перемести меня вперед на одну клетку."},
"moveNorthTooltip":function(d){return "Перемести меня на одну клетку на север."},
"moveSouthTooltip":function(d){return "Перемести меня на одну клетку на юг."},
"moveTooltip":function(d){return "Перемести меня на одну клетку вперед/назад"},
"moveWestTooltip":function(d){return "Перемести меня на одну клетку на запад."},
"nectar":function(d){return "собрать нектар"},
"nectarRemaining":function(d){return "нектар"},
"nectarTooltip":function(d){return "Собрать нектар с цветка"},
"nextLevel":function(d){return "Поздравляем! Ты решил эту головоломку."},
"no":function(d){return "Нет"},
"noPathAhead":function(d){return "путь заблокирован"},
"noPathLeft":function(d){return "пути налево нет"},
"noPathRight":function(d){return "пути направо нет"},
"notAtFlowerError":function(d){return "Нектар можно собрать только с цветка."},
"notAtHoneycombError":function(d){return "Мед можно сделать только в соте."},
"numBlocksNeeded":function(d){return "Эта головоломка может быть решена с помощью %1 блоков."},
"pathAhead":function(d){return "путь впереди"},
"pathLeft":function(d){return "если путь налево"},
"pathRight":function(d){return "если путь направо"},
"pick":function(d){return "выбрать"},
"pilePresent":function(d){return "здесь есть куча"},
"plant":function(d){return "Растение"},
"plantInNonSoilError":function(d){return "Я могу сажать только в свежую почву."},
"plantTooltip":function(d){return "Посадить росток"},
"pumpkin":function(d){return "тыква"},
"pumpkinTooltip":function(d){return "Сорвать тыкву"},
"putdownTower":function(d){return "снести башню"},
"removeAndAvoidTheCow":function(d){return "разбросать 1 и обойти корову"},
"removeN":function(d){return "разбросать "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "разбросать кучу"},
"removeSquare":function(d){return "убрать квадрат"},
"removeStack":function(d){return "разбросать "+maze_locale.v(d,"shovelfuls")+" кучи"},
"repeatCarefullyError":function(d){return "Для решения этой головоломки внимательно обдумай комбинацию двух операторов движения и одного оператора поворота, которые нужно поместить в блок «повторить». Ничего страшного, если в конце будет сделан лишний поворот."},
"repeatUntil":function(d){return "повторять, пока не"},
"repeatUntilBlocked":function(d){return "пока не появится путь вперед"},
"repeatUntilFinish":function(d){return "повторять до окончания"},
"soil":function(d){return "почва"},
"sprout":function(d){return "росток"},
"step":function(d){return "шаг"},
"totalHoney":function(d){return "всего меда"},
"totalNectar":function(d){return "всего нектара"},
"turnLeft":function(d){return "повернуть налево"},
"turnRight":function(d){return "повернуть направо"},
"turnTooltip":function(d){return "Поворачивает меня налево или направо на 90 градусов."},
"uncheckedCloudError":function(d){return "Не забудь проверить все облака, чтобы узнать, цветы это или соты."},
"uncheckedPurpleError":function(d){return "Не забудь проверить все фиолетовые цветы, чтобы увидеть, есть ли в них нектар"},
"whileMsg":function(d){return "пока"},
"whileTooltip":function(d){return "Повторять указанные действия до конечной точки."},
"word":function(d){return "Найти слово"},
"wrongCropError":function(d){return "Я не могу собрать урожай здесь."},
"yes":function(d){return "Да"},
"youSpelled":function(d){return "Вы ввели"}};