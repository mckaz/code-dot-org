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
"startButton":function(d){return "Покрени"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "All"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Разреди"},
"filterGradesAll":function(d){return "Сви узрасти"},
"filterGradesPre":function(d){return "Pre-reader"},
"filterGrades25":function(d){return "Разреди 2-5"},
"filterGrades68":function(d){return "Разреди 6-8"},
"filterGrades9":function(d){return "Разреди 9+"},
"filterStudentExperience":function(d){return "Ученичко искуство"},
"filterStudentExperienceBeginner":function(d){return "Почетник"},
"filterStudentExperienceComfortable":function(d){return "Удобно"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Технологија у учионици"},
"filterPlatformComputers":function(d){return "Компјутери"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Слаб или без интернета"},
"filterPlatformNoComputers":function(d){return "Нема компјутера или уређаја"},
"filterTopics":function(d){return "Теме"},
"filterTopicsScience":function(d){return "Наука"},
"filterTopicsMath":function(d){return "Математика"},
"filterTopicsHistory":function(d){return "Социјалне студије"},
"filterTopicsLa":function(d){return "Уметност језика"},
"filterTopicsArt":function(d){return "Уметност, медије, музика"},
"filterTopicsCsOnly":function(d){return "Само компјутерска наука"},
"filterActivityType":function(d){return "Тип активности"},
"filterActivityTypeOnlineTutorial":function(d){return "Self-led tutorial"},
"filterActivityTypeLessonPlan":function(d){return "План лекције"},
"filterLength":function(d){return "Дужина"},
"filterLength1Hour":function(d){return "Један сат"},
"filterLength1HourFollow":function(d){return "One hour with follow-on"},
"filterLengthFewHours":function(d){return "Неколико сати"},
"filterProgrammingLanguage":function(d){return "Језик"},
"filterProgrammingLanguageBlocks":function(d){return "блокови"},
"filterProgrammingLanguageTyping":function(d){return "Куцање"},
"filterProgrammingLanguageOther":function(d){return "Други"},
"filterActivityTypeRobotics":function(d){return "Роботика"},
"backButtonBack":function(d){return "Вратити се свим активностима"},
"filterHeaderShowFilters":function(d){return "Филтери"},
"filterHeaderHideFilters":function(d){return "Примени"},
"filterHeaderTutorialCountSingle":function(d){return "1 резултат"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" резултати"},
"roboticsButtonText":function(d){return "Погледај активности робота"},
"roboticsText":function(d){return "Имаш роботе? Kористи ове активности и направи опипљив Hour of Code за ученике било ког годишта!"},
"tutorialSetNoTutorials":function(d){return "Ваше претраживанје нема резултата. Молим Вас, покушате да уклоните неке филтере да би сте видели ваше активности."},
"tutorialDetailsTeacherNotes":function(d){return "Учитељеве белешке"},
"tutorialDetailsShortLink":function(d){return "Кратка веза"},
"tutorialDetailInternationalLanguages":function(d){return "Језици"},
"tutorialDetailStandards":function(d){return "Стандарди"},
"tutorialDetailDisabled":function(d){return "Ово упутство је тренутно недоступно."},
"headingTutorialsYourLanguage":function(d){return "Активности на вашем језику"},
"showAllTutorialsButton":function(d){return "Покажи активности за многе језике"},
"hideAllTutorialsButton":function(d){return "Сакриј активности за многе језике"},
"noTutorialsYourLanguage":function(d){return "Нема активности подржаних вашем твом језику. Пробајте активности на неком другом језику та ко што ћеш кликнути на дугме испод."},
"bottomGuidelinesLink":function(d){return "Кликните овде да би сте видели наша упутства за постављање туторијала за Hour of Code."},
"bottomSpecialNeedsLink":function(d){return "Кликните овде за више информација о подршци за ученике са посебним потребама."}};