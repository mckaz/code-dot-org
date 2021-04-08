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
"startButton":function(d){return "Alusta"},
"filterOrgNames":function(d){return "Autor"},
"filterOrgNamesAll":function(d){return "Kõik"},
"filterSortBy":function(d){return "Sorteeri"},
"filterSortByDisplayWeight":function(d){return "Soovitused"},
"filterSortByPopularityRank":function(d){return "Kõige populaarsemad"},
"filterGrades":function(d){return "Vanuseastmed"},
"filterGradesAll":function(d){return "Kõigile vanustele"},
"filterGradesPre":function(d){return "Veel ei loe"},
"filterGrades25":function(d){return "2.-5. klassid"},
"filterGrades68":function(d){return "6.-8. klassid"},
"filterGrades9":function(d){return "9.+ klassid"},
"filterStudentExperience":function(d){return "Õpilase kogemus"},
"filterStudentExperienceBeginner":function(d){return "Algaja"},
"filterStudentExperienceComfortable":function(d){return "Mugav"},
"filterStudentExperienceExperienced":function(d){return "Edasijõudnud"},
"filterPlatform":function(d){return "Tehnika klassiruumis"},
"filterPlatformComputers":function(d){return "Arvutid"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Kehv internet või internetita"},
"filterPlatformNoComputers":function(d){return "Ilma arvuti või seadmeteta"},
"filterTopics":function(d){return "Teemad"},
"filterTopicsScience":function(d){return "Teadus"},
"filterTopicsMath":function(d){return "Matemaatika"},
"filterTopicsHistory":function(d){return "Sotsiaalteadused"},
"filterTopicsLa":function(d){return "Keeled"},
"filterTopicsArt":function(d){return "Kunstid, meedia, muusika"},
"filterTopicsCsOnly":function(d){return "Ainult arvutiteadus"},
"filterActivityType":function(d){return "Tegevuse tüüp"},
"filterActivityTypeOnlineTutorial":function(d){return "Juhend iseseisvaks tööks"},
"filterActivityTypeLessonPlan":function(d){return "Tunnikava"},
"filterLength":function(d){return "Pikkus"},
"filterLength1Hour":function(d){return "Üks tund"},
"filterLength1HourFollow":function(d){return "Üks tund koos jätkutunniga"},
"filterLengthFewHours":function(d){return "Mõned tunnid"},
"filterProgrammingLanguage":function(d){return "Keel"},
"filterProgrammingLanguageBlocks":function(d){return "Plokid"},
"filterProgrammingLanguageTyping":function(d){return "Kirjutus"},
"filterProgrammingLanguageOther":function(d){return "Muu"},
"filterActivityTypeRobotics":function(d){return "Robootika"},
"backButtonBack":function(d){return "Tagasi kõikide tegevuste juurde"},
"filterHeaderShowFilters":function(d){return "Filtrid"},
"filterHeaderHideFilters":function(d){return "Rakenda"},
"filterHeaderTutorialCountSingle":function(d){return "1 tulemus"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" tulemused"},
"roboticsButtonText":function(d){return "Vaata robootika tegevusi"},
"roboticsText":function(d){return "Sul on robotid? Kasuta neid tegevusi ja tee igas vanuses õpilastele jõukohane KoodiTund!"},
"tutorialSetNoTutorials":function(d){return "Sinu otsing ei andnud tulemusi.\nProovi mõnede filtrite eemaldamist, et leida rohkem tegevusi."},
"tutorialDetailsTeacherNotes":function(d){return "Märkmed õpetajale"},
"tutorialDetailsShortLink":function(d){return "Lühilink"},
"tutorialDetailInternationalLanguages":function(d){return "Keeled"},
"tutorialDetailStandards":function(d){return "Standardid"},
"tutorialDetailDisabled":function(d){return "See juhend ei ole ajutiselt saadaval."},
"headingTutorialsYourLanguage":function(d){return "Tegevused sinu keeles"},
"showAllTutorialsButton":function(d){return "Näita tegevusi mitmes keeles"},
"hideAllTutorialsButton":function(d){return "Peida paljudes keeltes tegevused"},
"noTutorialsYourLanguage":function(d){return "Sinu keeles ei ole tegevusi. Proovi tegevusi teistes keeltes klõpsates alumisel nupul."},
"bottomGuidelinesLink":function(d){return "Klõpsa siia, et näha meie nõudmisi KoodiTunni juhenditele ja juhiseid nende esitamiseks."},
"bottomSpecialNeedsLink":function(d){return "Siin klõpsates leiad rohkem informatsiooni erivajadusega õpilaste toetamisest."}};