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
"startButton":function(d){return "Hasiera"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "All"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Kalifikazioak"},
"filterGradesAll":function(d){return "Adin guztiak"},
"filterGradesPre":function(d){return "Aurre-irakurlea"},
"filterGrades25":function(d){return "Grades 2-5"},
"filterGrades68":function(d){return "Grades 6-8"},
"filterGrades9":function(d){return "Grades 9+"},
"filterStudentExperience":function(d){return "Ikaslearen esperientzia"},
"filterStudentExperienceBeginner":function(d){return "Hasierako maila"},
"filterStudentExperienceComfortable":function(d){return "Erosoa"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Gelako teknologia"},
"filterPlatformComputers":function(d){return "Ordenagailuak"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Internet seinale ahula edo ezdeusa"},
"filterPlatformNoComputers":function(d){return "Ez dago ordenagailu edo gailurik"},
"filterTopics":function(d){return "Gaiak"},
"filterTopicsScience":function(d){return "Zientzia"},
"filterTopicsMath":function(d){return "Matematika"},
"filterTopicsHistory":function(d){return "Giza Ikasketak"},
"filterTopicsLa":function(d){return "Hizkuntzalaritza"},
"filterTopicsArt":function(d){return "Artea, Media, Musika"},
"filterTopicsCsOnly":function(d){return "Informatika Soilik"},
"filterActivityType":function(d){return "Jarduera mota"},
"filterActivityTypeOnlineTutorial":function(d){return "Tutoretza auto-zuzendua"},
"filterActivityTypeLessonPlan":function(d){return "Ikasketa plana"},
"filterLength":function(d){return "Iraupena"},
"filterLength1Hour":function(d){return "Ordu bat"},
"filterLength1HourFollow":function(d){return "Ordu bat jarraipenarekin"},
"filterLengthFewHours":function(d){return "Ordu batzuk"},
"filterProgrammingLanguage":function(d){return "Hizkuntza"},
"filterProgrammingLanguageBlocks":function(d){return "Blokeak"},
"filterProgrammingLanguageTyping":function(d){return "Idatzi"},
"filterProgrammingLanguageOther":function(d){return "Beste bat"},
"filterActivityTypeRobotics":function(d){return "Robotika"},
"backButtonBack":function(d){return "Itzuli jardueretara"},
"filterHeaderShowFilters":function(d){return "Iragazkiak"},
"filterHeaderHideFilters":function(d){return "Aplikatu"},
"filterHeaderTutorialCountSingle":function(d){return "Emaitza 1"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" emaitzak"},
"roboticsButtonText":function(d){return "Robotika jarduerak ikusi"},
"roboticsText":function(d){return "Baduzu robotik? Erabili jarduera hauek eta hautemangarriaren Kode Ordu Bat egin adin guztietako ikasleentzat!"},
"tutorialSetNoTutorials":function(d){return "Zur bilaketak ez du emaitzarik eman. Mesedez saia zaitez iragazki batzuk mugitzen jarduera gehiago ikusi ahal izateko."},
"tutorialDetailsTeacherNotes":function(d){return "Irakaslearen oharrak"},
"tutorialDetailsShortLink":function(d){return "Lotura motza"},
"tutorialDetailInternationalLanguages":function(d){return "Hizkuntzak"},
"tutorialDetailStandards":function(d){return "Estandarrak"},
"tutorialDetailDisabled":function(d){return "Tutorial hau ez dago eskuragarri denboraldi baterako."},
"headingTutorialsYourLanguage":function(d){return "Jarduerak zure hizkuntzan"},
"showAllTutorialsButton":function(d){return "Hizkuntza askotako jarduerak erakutsi"},
"hideAllTutorialsButton":function(d){return "Hizkuntza askotako jarduerak ezkutatu"},
"noTutorialsYourLanguage":function(d){return "Ez dago jarduerarik eskuragarri zure hizkuntzan. Beheko botoia sakatuz beste hizkuntzetako jarduerak frogatu."},
"bottomGuidelinesLink":function(d){return "Klikatu hemen gure Kode Ordu Baten tutorialen irizpideak eta bidaltze arauak ikusteko."},
"bottomSpecialNeedsLink":function(d){return "Klikatu hemen behar bereziak dituzten ikasleak laguntzeko informazio gehiago izateko."}};