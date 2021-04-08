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
"startButton":function(d){return "Start"},
"filterOrgNames":function(d){return "Laget av"},
"filterOrgNamesAll":function(d){return "Alle"},
"filterSortBy":function(d){return "Sorter"},
"filterSortByDisplayWeight":function(d){return "Anbefalte"},
"filterSortByPopularityRank":function(d){return "Mest populære"},
"filterGrades":function(d){return "Klassetrinn"},
"filterGradesAll":function(d){return "Alle klasser"},
"filterGradesPre":function(d){return "Ikke-lesere"},
"filterGrades25":function(d){return "2.-5. klasse"},
"filterGrades68":function(d){return "6.-8. klasse"},
"filterGrades9":function(d){return "9. klasse og opp"},
"filterStudentExperience":function(d){return "Studentens erfaring"},
"filterStudentExperienceBeginner":function(d){return "Nybegynner"},
"filterStudentExperienceComfortable":function(d){return "Komfortabel"},
"filterStudentExperienceExperienced":function(d){return "Erfarne"},
"filterPlatform":function(d){return "Klasserom-teknologi"},
"filterPlatformComputers":function(d){return "Datamaskiner"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Dårlig eller ingen internett"},
"filterPlatformNoComputers":function(d){return "Uten datamaskiner eller andre enheter"},
"filterTopics":function(d){return "Emner"},
"filterTopicsScience":function(d){return "Vitenskap"},
"filterTopicsMath":function(d){return "Matematikk"},
"filterTopicsHistory":function(d){return "Samfunnsfag"},
"filterTopicsLa":function(d){return "Språkfag"},
"filterTopicsArt":function(d){return "Kunst, media, musikk"},
"filterTopicsCsOnly":function(d){return "Kun informatikk"},
"filterActivityType":function(d){return "Aktivitetstype"},
"filterActivityTypeOnlineTutorial":function(d){return "Selvstyrt opplæring"},
"filterActivityTypeLessonPlan":function(d){return "Oppgaveplan"},
"filterLength":function(d){return "Lengde"},
"filterLength1Hour":function(d){return "En time"},
"filterLength1HourFollow":function(d){return "En time med oppfølging"},
"filterLengthFewHours":function(d){return "Et par timer"},
"filterProgrammingLanguage":function(d){return "Språk"},
"filterProgrammingLanguageBlocks":function(d){return "Blokker"},
"filterProgrammingLanguageTyping":function(d){return "Tasting"},
"filterProgrammingLanguageOther":function(d){return "Andre"},
"filterActivityTypeRobotics":function(d){return "Robotikk"},
"backButtonBack":function(d){return "Tilbake til alle aktiviteter"},
"filterHeaderShowFilters":function(d){return "Filtre"},
"filterHeaderHideFilters":function(d){return "Bruk"},
"filterHeaderTutorialCountSingle":function(d){return "1 resultat"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" resultater"},
"roboticsButtonText":function(d){return "Vis robotikk-aktiviteter"},
"roboticsText":function(d){return "Har du roboter? Bruk disse aktivitetene og sett sammen en Kodetime for elever i alle aldre!"},
"tutorialSetNoTutorials":function(d){return "Søket ga ingen treff. Prøv å fjerne noen filtre hvis du vil se flere aktiviteter."},
"tutorialDetailsTeacherNotes":function(d){return "Lærernotater"},
"tutorialDetailsShortLink":function(d){return "Kort lenke"},
"tutorialDetailInternationalLanguages":function(d){return "Språk"},
"tutorialDetailStandards":function(d){return "Læreplanmål (amerikansk)"},
"tutorialDetailDisabled":function(d){return "Denne guiden er midlertidig utilgjengelig."},
"headingTutorialsYourLanguage":function(d){return "Aktiviteter på ditt språk"},
"showAllTutorialsButton":function(d){return "Vis aktiviteter på mange språk"},
"hideAllTutorialsButton":function(d){return "Skjul aktiviteter på mange språk"},
"noTutorialsYourLanguage":function(d){return "Det finnes ikke noen aktiviteter på ditt språk. Prøv aktiviteter på andre språk ved å klikke på knappen under."},
"bottomGuidelinesLink":function(d){return "Klikk her for å se våre vilkår og retningslinjer for innsending av opplæring til Kodetimen."},
"bottomSpecialNeedsLink":function(d){return "Klikk her for mer informasjon om å støtte elever med spesielle behov."}};