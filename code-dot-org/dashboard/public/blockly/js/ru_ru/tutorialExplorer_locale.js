var tutorialExplorer_locale = {lc:{"ar":function(n){
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
v:function(d,k){tutorialExplorer_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){tutorialExplorer_locale.c(d,k);return d[k] in p?p[d[k]]:(k=tutorialExplorer_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){tutorialExplorer_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).tutorialExplorer_locale = {
"startButton":function(d){return "Начать"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "Все"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Класс"},
"filterGradesAll":function(d){return "Для любого возраста"},
"filterGradesPre":function(d){return "Детский сад"},
"filterGrades25":function(d){return "2-5 классы"},
"filterGrades68":function(d){return "6-8 классы"},
"filterGrades9":function(d){return "9 класс и выше"},
"filterStudentExperience":function(d){return "Опыт ученика"},
"filterStudentExperienceBeginner":function(d){return "Новичок"},
"filterStudentExperienceComfortable":function(d){return "Удобный"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Школьная техника"},
"filterPlatformComputers":function(d){return "Компьютеры"},
"filterPlatformAndroid":function(d){return "Андроид"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Отсутствие или плохая связь с интернетом"},
"filterPlatformNoComputers":function(d){return "Нет компьютеров или устройств"},
"filterTopics":function(d){return "Темы"},
"filterTopicsScience":function(d){return "Наука"},
"filterTopicsMath":function(d){return "Математика"},
"filterTopicsHistory":function(d){return "Социальные исследования"},
"filterTopicsLa":function(d){return "Язык искусств"},
"filterTopicsArt":function(d){return "Арт, Медиа, Музыка"},
"filterTopicsCsOnly":function(d){return "Только информатика"},
"filterActivityType":function(d){return "Тип действия"},
"filterActivityTypeOnlineTutorial":function(d){return "Самоучитель"},
"filterActivityTypeLessonPlan":function(d){return "План урока"},
"filterLength":function(d){return "Длина"},
"filterLength1Hour":function(d){return "Один час"},
"filterLength1HourFollow":function(d){return "Один час с продолжением"},
"filterLengthFewHours":function(d){return "Несколько часов"},
"filterProgrammingLanguage":function(d){return "Язык"},
"filterProgrammingLanguageBlocks":function(d){return "Блоки"},
"filterProgrammingLanguageTyping":function(d){return "Печать"},
"filterProgrammingLanguageOther":function(d){return "Другое"},
"filterActivityTypeRobotics":function(d){return "Робототехника"},
"backButtonBack":function(d){return "Вернуться ко всем видам деятельности"},
"filterHeaderShowFilters":function(d){return "Фильтры"},
"filterHeaderHideFilters":function(d){return "Применить"},
"filterHeaderTutorialCountSingle":function(d){return "1 результат"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" результаты"},
"roboticsButtonText":function(d){return "Посмотреть задачи по робототехнике"},
"roboticsText":function(d){return "Интересны роботы? Посмотрите, эти задачи в Часе Кода позволят любому пробовать стать робототехником!"},
"tutorialSetNoTutorials":function(d){return "Поиск не дал результатов. Пожалуйста, попробуйте изменить фильтр поиска, чтобы увидеть больше задач."},
"tutorialDetailsTeacherNotes":function(d){return "Заметки учителя"},
"tutorialDetailsShortLink":function(d){return "Короткая ссылка"},
"tutorialDetailInternationalLanguages":function(d){return "Языки"},
"tutorialDetailStandards":function(d){return "Стандарты"},
"tutorialDetailDisabled":function(d){return "Этот учебник временно недоступен."},
"headingTutorialsYourLanguage":function(d){return "Задачи на вашем языке"},
"showAllTutorialsButton":function(d){return "Показать задачи на других языках"},
"hideAllTutorialsButton":function(d){return "Скрыть задачи на других языках"},
"noTutorialsYourLanguage":function(d){return "К сожалению нет задач, поддерживаемых на вашем языке. Попробуйте поискать на других языках, нажав кнопку ниже."},
"bottomGuidelinesLink":function(d){return "Нажмите здесь, чтобы увидеть критерии и формат руководств для Часа Кода."},
"bottomSpecialNeedsLink":function(d){return "Нажмите здесь, для получения дополнительной информации о поддержке учащихся с особыми требованиями."}};