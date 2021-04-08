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
"startButton":function(d){return "Začni"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "Vse"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Razredi"},
"filterGradesAll":function(d){return "Vse starosti"},
"filterGradesPre":function(d){return "Pred-bralci"},
"filterGrades25":function(d){return "2. - 5. razred"},
"filterGrades68":function(d){return "6. - 8. razred"},
"filterGrades9":function(d){return "9. razred in višje"},
"filterStudentExperience":function(d){return "Znanje učenca"},
"filterStudentExperienceBeginner":function(d){return "Začetnik"},
"filterStudentExperienceComfortable":function(d){return "Udobno"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Tehnologija na voljo"},
"filterPlatformComputers":function(d){return "Računalniki"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Brez ali s slabo internetno povezavo"},
"filterPlatformNoComputers":function(d){return "Brez računalnikov ali naprav"},
"filterTopics":function(d){return "Teme"},
"filterTopicsScience":function(d){return "Znanost"},
"filterTopicsMath":function(d){return "Matematika"},
"filterTopicsHistory":function(d){return "Družboslovje"},
"filterTopicsLa":function(d){return "Jezikoslovje"},
"filterTopicsArt":function(d){return "Umetnost, mediji, glasba"},
"filterTopicsCsOnly":function(d){return "Le računalništvo"},
"filterActivityType":function(d){return "Tip aktivnosti"},
"filterActivityTypeOnlineTutorial":function(d){return "Samostojno učenje"},
"filterActivityTypeLessonPlan":function(d){return "Po učnem načrtu"},
"filterLength":function(d){return "Dolžina"},
"filterLength1Hour":function(d){return "Ena ura"},
"filterLength1HourFollow":function(d){return "Ena ura z nadaljevanjem"},
"filterLengthFewHours":function(d){return "Nekaj ur"},
"filterProgrammingLanguage":function(d){return "Jezik"},
"filterProgrammingLanguageBlocks":function(d){return "Bloki"},
"filterProgrammingLanguageTyping":function(d){return "Pisanje kode"},
"filterProgrammingLanguageOther":function(d){return "Drugi"},
"filterActivityTypeRobotics":function(d){return "Robotika"},
"backButtonBack":function(d){return "Nazaj na vse aktivnosti"},
"filterHeaderShowFilters":function(d){return "Filtri"},
"filterHeaderHideFilters":function(d){return "Potrdi"},
"filterHeaderTutorialCountSingle":function(d){return "1 zadetek"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" zadetkov"},
"roboticsButtonText":function(d){return "Poglej aktivnosti z roboti"},
"roboticsText":function(d){return "Imaš robote? Uporabi te aktivnosti in naredi otipljivo Uro za kodo za učence vseh starosti!"},
"tutorialSetNoTutorials":function(d){return "Vaše iskanje ni vrnilo nobenega rezultata.\nProsimo, poskusite odstraniti nekaj filtrov za prikaz več dejavnosti."},
"tutorialDetailsTeacherNotes":function(d){return "Zapiski za učitelja"},
"tutorialDetailsShortLink":function(d){return "Kratek spletni naslov"},
"tutorialDetailInternationalLanguages":function(d){return "Jeziki"},
"tutorialDetailStandards":function(d){return "Standardi"},
"tutorialDetailDisabled":function(d){return "Ta aktivnost trenutno ni na voljo."},
"headingTutorialsYourLanguage":function(d){return "Aktivnosti v vašem jeziku"},
"showAllTutorialsButton":function(d){return "Prikaži aktivnosti v drugih jezikih"},
"hideAllTutorialsButton":function(d){return "Skrij aktivnosti v drugih jezikih"},
"noTutorialsYourLanguage":function(d){return "Žal nobena aktivnost ni podprta v vašem jeziku. Poskusi aktivnosti v drugih jezikih z klikom na gumb spodaj."},
"bottomGuidelinesLink":function(d){return "Kliknite tukaj za prikaz kriterijev in navodil za prispevanje k vadnicam Ura za kodo."},
"bottomSpecialNeedsLink":function(d){return "Kliknite tukaj za več informacij o podpori za učence s posebnimi potrebami."}};