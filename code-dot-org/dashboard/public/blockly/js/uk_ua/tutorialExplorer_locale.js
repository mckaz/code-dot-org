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
"startButton":function(d){return "Початок"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "Все"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Класи"},
"filterGradesAll":function(d){return "Всі вікові групи"},
"filterGradesPre":function(d){return "Дошкілля"},
"filterGrades25":function(d){return "2-5 класи"},
"filterGrades68":function(d){return "6-8 класи"},
"filterGrades9":function(d){return "9+ класи"},
"filterStudentExperience":function(d){return "Досвідченість учнів"},
"filterStudentExperienceBeginner":function(d){return "Початківець"},
"filterStudentExperienceComfortable":function(d){return "Впевнений"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Технології у класі"},
"filterPlatformComputers":function(d){return "Комп'ютери"},
"filterPlatformAndroid":function(d){return "Андроїд"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Поганий або відсутній Інтернет"},
"filterPlatformNoComputers":function(d){return "Немає комп'ютерів чи пристроїв"},
"filterTopics":function(d){return "Теми"},
"filterTopicsScience":function(d){return "Природничі науки"},
"filterTopicsMath":function(d){return "Математика"},
"filterTopicsHistory":function(d){return "Суспільні науки"},
"filterTopicsLa":function(d){return "Мови"},
"filterTopicsArt":function(d){return "Музика, мистецтво, медіа"},
"filterTopicsCsOnly":function(d){return "Лише інформатика"},
"filterActivityType":function(d){return "Тип вправ"},
"filterActivityTypeOnlineTutorial":function(d){return "Підручник для самостійної роботи"},
"filterActivityTypeLessonPlan":function(d){return "План уроку"},
"filterLength":function(d){return "Тривалість"},
"filterLength1Hour":function(d){return "Одна година"},
"filterLength1HourFollow":function(d){return "Одна година з продовженням"},
"filterLengthFewHours":function(d){return "Кілька годин"},
"filterProgrammingLanguage":function(d){return "Мова"},
"filterProgrammingLanguageBlocks":function(d){return "блоки"},
"filterProgrammingLanguageTyping":function(d){return "Друкування"},
"filterProgrammingLanguageOther":function(d){return "Інше"},
"filterActivityTypeRobotics":function(d){return "Робототехніка"},
"backButtonBack":function(d){return "Назад до всіх видів вправ"},
"filterHeaderShowFilters":function(d){return "Фільтри"},
"filterHeaderHideFilters":function(d){return "Застосувати"},
"filterHeaderTutorialCountSingle":function(d){return "1 результат"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" результатів"},
"roboticsButtonText":function(d){return "Переглянути вправи з робототехніки"},
"roboticsText":function(d){return "Маєте роботів? Використайте ці вправи та зробіть Годину коду відчутною для учнів будь-якого віку!"},
"tutorialSetNoTutorials":function(d){return "Ваш пошук не дав результатів.\nСпробуйте вилучити деякі фільтри, щоб побачити більше вправ."},
"tutorialDetailsTeacherNotes":function(d){return "Нотатки вчителя"},
"tutorialDetailsShortLink":function(d){return "Коротке посилання"},
"tutorialDetailInternationalLanguages":function(d){return "Мови"},
"tutorialDetailStandards":function(d){return "Стандарти"},
"tutorialDetailDisabled":function(d){return "Цей підручник тимчасово недоступний."},
"headingTutorialsYourLanguage":function(d){return "Підручники вашою мовою"},
"showAllTutorialsButton":function(d){return "Показати вправи багатьма мовами"},
"hideAllTutorialsButton":function(d){return "Приховати заходи багатьма мовами"},
"noTutorialsYourLanguage":function(d){return "Для Вашої мови немає розроблених вправ. Спробуйте вправи на інших мовах, клацнувши кнопку нижче."},
"bottomGuidelinesLink":function(d){return "Клацніть тут, щоб переглянути наші критерії та інструкції з подання підручників для Години коду."},
"bottomSpecialNeedsLink":function(d){return "Клацніть тут, щоб переглянути докладнішу інформацію про підтримку учнів з особливими потребами."}};