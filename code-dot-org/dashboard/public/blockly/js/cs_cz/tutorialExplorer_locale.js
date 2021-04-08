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
"startButton":function(d){return "Spustit"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "Vše"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Třídy"},
"filterGradesAll":function(d){return "Všechny věkové kategorie"},
"filterGradesPre":function(d){return "Předškolák"},
"filterGrades25":function(d){return "Třídy 2-5"},
"filterGrades68":function(d){return "Třídy 6-8"},
"filterGrades9":function(d){return "Třídy 9+"},
"filterStudentExperience":function(d){return "Žákovská zkušenost"},
"filterStudentExperienceBeginner":function(d){return "Začátečník"},
"filterStudentExperienceComfortable":function(d){return "Pohodlí"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Technologie třídy"},
"filterPlatformComputers":function(d){return "Počítače"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Špatné nebo žádné připojení k internetu"},
"filterPlatformNoComputers":function(d){return "Žádné počítače nebo zařízení"},
"filterTopics":function(d){return "Témata"},
"filterTopicsScience":function(d){return "Věda"},
"filterTopicsMath":function(d){return "Matematika"},
"filterTopicsHistory":function(d){return "Společenské vědy"},
"filterTopicsLa":function(d){return "Jazykové umění"},
"filterTopicsArt":function(d){return "Umění, Média, Hudba"},
"filterTopicsCsOnly":function(d){return "Samotná výpočetní technika"},
"filterActivityType":function(d){return "Typ aktivity"},
"filterActivityTypeOnlineTutorial":function(d){return "Samoučení"},
"filterActivityTypeLessonPlan":function(d){return "Plán lekce"},
"filterLength":function(d){return "Délka"},
"filterLength1Hour":function(d){return "Jedna hodina"},
"filterLength1HourFollow":function(d){return "Náročnost jedné hodiny"},
"filterLengthFewHours":function(d){return "Několik hodin"},
"filterProgrammingLanguage":function(d){return "Jazyk"},
"filterProgrammingLanguageBlocks":function(d){return "Bloky"},
"filterProgrammingLanguageTyping":function(d){return "Psaní"},
"filterProgrammingLanguageOther":function(d){return "Ostatní"},
"filterActivityTypeRobotics":function(d){return "Robotika"},
"backButtonBack":function(d){return "Zpět na všechny aktivity"},
"filterHeaderShowFilters":function(d){return "Filtry"},
"filterHeaderHideFilters":function(d){return "Použít"},
"filterHeaderTutorialCountSingle":function(d){return "1 výsledek"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" výsledky"},
"roboticsButtonText":function(d){return "Zobrazit robotickou činnost"},
"roboticsText":function(d){return "Máte roboty? Využijte toho a vytvořte konkrétní Hodinu kódu pro studenty každého věku!"},
"tutorialSetNoTutorials":function(d){return "Vaše vyhledávání se nepodařilo. \nProsím zkuste odstanit některý z filtrů k zobrazení dalších aktivit."},
"tutorialDetailsTeacherNotes":function(d){return "Poznámky učitele"},
"tutorialDetailsShortLink":function(d){return "Krátký odkaz"},
"tutorialDetailInternationalLanguages":function(d){return "Jazyky"},
"tutorialDetailStandards":function(d){return "Standardy"},
"tutorialDetailDisabled":function(d){return "Tento kurz je dočasně nedostupný."},
"headingTutorialsYourLanguage":function(d){return "Aktivity ve tvém jazyce"},
"showAllTutorialsButton":function(d){return "Zobrazit aktivity pro celou řadu jazyků"},
"hideAllTutorialsButton":function(d){return "Skrýt aktivity pro mnoho jazyků"},
"noTutorialsYourLanguage":function(d){return "Neexistují žádné aktivity podporované ve tvém jazyce. Vyzkoušej kliknutím na níže uvedené tlačítko aktivity v dalších jazycích."},
"bottomGuidelinesLink":function(d){return "Klepnutím sem zobrazíte naše kritéria a pokyny pro kurzy Hodiny kódu."},
"bottomSpecialNeedsLink":function(d){return "Klepněte zde pro další informace k podpoře studentů se zvláštními potřebami."}};