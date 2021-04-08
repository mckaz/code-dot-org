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
"startButton":function(d){return "Spustiť"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "Všetko"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Ročníky"},
"filterGradesAll":function(d){return "Všetky vekové kategórie"},
"filterGradesPre":function(d){return "Predškolák"},
"filterGrades25":function(d){return "Ročníky 2-5"},
"filterGrades68":function(d){return "Ročníky 6-8"},
"filterGrades9":function(d){return "Ročníky 9 a vyššie"},
"filterStudentExperience":function(d){return "Skúsenosti študenta"},
"filterStudentExperienceBeginner":function(d){return "Začiatočník"},
"filterStudentExperienceComfortable":function(d){return "Pokročilý"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Technológie v triede"},
"filterPlatformComputers":function(d){return "Počítače"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Slabý, alebo žiadny internet"},
"filterPlatformNoComputers":function(d){return "Bez počítačov, či iných zariadení"},
"filterTopics":function(d){return "Témy"},
"filterTopicsScience":function(d){return "Veda"},
"filterTopicsMath":function(d){return "Matematika"},
"filterTopicsHistory":function(d){return "Sociológia"},
"filterTopicsLa":function(d){return "Jazykové umenia"},
"filterTopicsArt":function(d){return "Umenie, Médiá, Hudba"},
"filterTopicsCsOnly":function(d){return "Iba informatika"},
"filterActivityType":function(d){return "Typ lekcie"},
"filterActivityTypeOnlineTutorial":function(d){return "Samostatne vedený kurz"},
"filterActivityTypeLessonPlan":function(d){return "Učebný plán"},
"filterLength":function(d){return "Trvanie"},
"filterLength1Hour":function(d){return "Jedna hodina"},
"filterLength1HourFollow":function(d){return "Jedna hodina s pokračovaním"},
"filterLengthFewHours":function(d){return "Zopár hodín"},
"filterProgrammingLanguage":function(d){return "Jazyk"},
"filterProgrammingLanguageBlocks":function(d){return "Bloky"},
"filterProgrammingLanguageTyping":function(d){return "Písanie"},
"filterProgrammingLanguageOther":function(d){return "Ostatné"},
"filterActivityTypeRobotics":function(d){return "Robotika"},
"backButtonBack":function(d){return "Späť na všetky činnosti"},
"filterHeaderShowFilters":function(d){return "Filtre"},
"filterHeaderHideFilters":function(d){return "Použiť"},
"filterHeaderTutorialCountSingle":function(d){return "1 výsledok"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" výsledky"},
"roboticsButtonText":function(d){return "Zobraziť aktivity s robotikou"},
"roboticsText":function(d){return "Máte robotov? Použite tieto aktivity a vytvorte Hodinu kódu s hmatateľnými výsledkami pre študentov v rôznom veku!"},
"tutorialSetNoTutorials":function(d){return "Vaše vyhľadávanie nevrátilo žiadne výsledky.\nProsím, skúste odstrániť niektoré filtre aby sa zobrazilo viac aktivít."},
"tutorialDetailsTeacherNotes":function(d){return "Poznámky pre učiteľa"},
"tutorialDetailsShortLink":function(d){return "Skrátený odkaz"},
"tutorialDetailInternationalLanguages":function(d){return "Jazyky"},
"tutorialDetailStandards":function(d){return "Štandardy"},
"tutorialDetailDisabled":function(d){return "Tento výukový program je dočasne nedostupný."},
"headingTutorialsYourLanguage":function(d){return "Lekcie v tvojom jazyku"},
"showAllTutorialsButton":function(d){return "Ukázať lekcie viacero jazykov"},
"hideAllTutorialsButton":function(d){return "Skryť lekcie pre viacero jazykov"},
"noTutorialsYourLanguage":function(d){return "Neexistuju žiadne podporované aktivity vo vašom jazyku. Skúste aktivity v iných jazykoch kliknutím na tlačidlo nižšie."},
"bottomGuidelinesLink":function(d){return "Kliknutím sem zobrazíte naše kritériu a pokyny pre kurzy Hodiny kódu."},
"bottomSpecialNeedsLink":function(d){return "Kliknutím sem zobrazíte viac informácií o podpore študentov so špecialnými potrebami."}};