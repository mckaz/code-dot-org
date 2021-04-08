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
"startButton":function(d){return "Старт"},
"filterOrgNames":function(d){return "Създаден от"},
"filterOrgNamesAll":function(d){return "Всичи"},
"filterSortBy":function(d){return "Сортирай по"},
"filterSortByDisplayWeight":function(d){return "Препоръчано"},
"filterSortByPopularityRank":function(d){return "Най-популярни"},
"filterGrades":function(d){return "Класове"},
"filterGradesAll":function(d){return "Всички възрасти"},
"filterGradesPre":function(d){return "Преди ограмотяване"},
"filterGrades25":function(d){return "Класове 2-5"},
"filterGrades68":function(d){return "Класове 6-8"},
"filterGrades9":function(d){return "Класове 9 +"},
"filterStudentExperience":function(d){return "Ученически опит"},
"filterStudentExperienceBeginner":function(d){return "Начинаещ"},
"filterStudentExperienceComfortable":function(d){return "Удобен"},
"filterStudentExperienceExperienced":function(d){return "Опит"},
"filterPlatform":function(d){return "Техника в класната стая"},
"filterPlatformComputers":function(d){return "Компютри"},
"filterPlatformAndroid":function(d){return "Андроид"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Със слаб интернет или без"},
"filterPlatformNoComputers":function(d){return "Без компютри или устройства"},
"filterTopics":function(d){return "Теми"},
"filterTopicsScience":function(d){return "Наука"},
"filterTopicsMath":function(d){return "Математика"},
"filterTopicsHistory":function(d){return "Социални изследвания"},
"filterTopicsLa":function(d){return "Език, изкуства"},
"filterTopicsArt":function(d){return "Изкуство, медии, музика"},
"filterTopicsCsOnly":function(d){return "Само по компютърни науки"},
"filterActivityType":function(d){return "Тип дейност"},
"filterActivityTypeOnlineTutorial":function(d){return "Уроци за самостоятелна работа"},
"filterActivityTypeLessonPlan":function(d){return "План на урок"},
"filterLength":function(d){return "Продължителност"},
"filterLength1Hour":function(d){return "Един час"},
"filterLength1HourFollow":function(d){return "Един час с продължение"},
"filterLengthFewHours":function(d){return "Няколко часа"},
"filterProgrammingLanguage":function(d){return "Език"},
"filterProgrammingLanguageBlocks":function(d){return "Блокове"},
"filterProgrammingLanguageTyping":function(d){return "Типичен"},
"filterProgrammingLanguageOther":function(d){return "Друго"},
"filterActivityTypeRobotics":function(d){return "Роботика"},
"backButtonBack":function(d){return "Обратно към всички дейности"},
"filterHeaderShowFilters":function(d){return "Филтри"},
"filterHeaderHideFilters":function(d){return "Приложи"},
"filterHeaderTutorialCountSingle":function(d){return "1 резултат"},
"filterHeaderTutorialCountPlural":function(d){return "резултати "+tutorialExplorer_locale.v(d,"tutorial_count")},
"roboticsButtonText":function(d){return "Преглед на дейности по роботика"},
"roboticsText":function(d){return "Имате ли роботи? Използвайте тези дейности и направете реален Hour of Code за ученици от всички възрасти!"},
"tutorialSetNoTutorials":function(d){return "Търсенето не върна никакви резултати. Моля, опитайте да премахнете някои филтри, за да видите повече дейности."},
"tutorialDetailsTeacherNotes":function(d){return "Указания за учители"},
"tutorialDetailsShortLink":function(d){return "Кратък линк"},
"tutorialDetailInternationalLanguages":function(d){return "Езици"},
"tutorialDetailStandards":function(d){return "Стандарти"},
"tutorialDetailDisabled":function(d){return "Този урок е временно недостъпен."},
"headingTutorialsYourLanguage":function(d){return "Дейности на вашия език"},
"showAllTutorialsButton":function(d){return "Покажи дейности за много езици"},
"hideAllTutorialsButton":function(d){return "Скрий дейности за много езици"},
"noTutorialsYourLanguage":function(d){return "Няма никакви дейности, подкрепени на вашия език. Опитайте дейности в други езици, като щракнете върху бутона по-долу."},
"bottomGuidelinesLink":function(d){return "Щракнете тук, за да видите нашите критерии и насоки за участие за Hour of Code уроците."},
"bottomSpecialNeedsLink":function(d){return "Кликнете тук за повече информация в подкрепа на участие на ученици със СОП."}};