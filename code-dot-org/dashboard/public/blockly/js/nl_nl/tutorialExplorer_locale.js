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
"filterOrgNames":function(d){return "Gemaakt door"},
"filterOrgNamesAll":function(d){return "Alle"},
"filterSortBy":function(d){return "Sorteer op"},
"filterSortByDisplayWeight":function(d){return "Aanbevolen"},
"filterSortByPopularityRank":function(d){return "Populairst"},
"filterGrades":function(d){return "Niveau"},
"filterGradesAll":function(d){return "Alle scores"},
"filterGradesPre":function(d){return "Kind 3-5jr"},
"filterGrades25":function(d){return "Groep 1-7"},
"filterGrades68":function(d){return "Groep 8 en Middelbare school"},
"filterGrades9":function(d){return "Middelbare school"},
"filterStudentExperience":function(d){return "Leerlingenervaring"},
"filterStudentExperienceBeginner":function(d){return "Beginner"},
"filterStudentExperienceComfortable":function(d){return "Comfortabel"},
"filterStudentExperienceExperienced":function(d){return "Gevorderde"},
"filterPlatform":function(d){return "Klaslokaaltechnologie"},
"filterPlatformComputers":function(d){return "Computers"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Matige of geen internetverbinding"},
"filterPlatformNoComputers":function(d){return "Geen computers of apparaten"},
"filterTopics":function(d){return "Onderwerpen"},
"filterTopicsScience":function(d){return "Wetenschap"},
"filterTopicsMath":function(d){return "Wiskunde"},
"filterTopicsHistory":function(d){return "Sociale Studiën"},
"filterTopicsLa":function(d){return "Taalvaardigheden"},
"filterTopicsArt":function(d){return "Kunst, Media, Muziek"},
"filterTopicsCsOnly":function(d){return "Enkel computerwetenschappen"},
"filterActivityType":function(d){return "Soort activiteit"},
"filterActivityTypeOnlineTutorial":function(d){return "Zelfstandige cursus"},
"filterActivityTypeLessonPlan":function(d){return "Lesplan"},
"filterLength":function(d){return "Lengte"},
"filterLength1Hour":function(d){return "Één uur"},
"filterLength1HourFollow":function(d){return "Een uur met opvolging"},
"filterLengthFewHours":function(d){return "Een paar uur"},
"filterProgrammingLanguage":function(d){return "Taal"},
"filterProgrammingLanguageBlocks":function(d){return "blokken"},
"filterProgrammingLanguageTyping":function(d){return "Typering"},
"filterProgrammingLanguageOther":function(d){return "Anders"},
"filterActivityTypeRobotics":function(d){return "Robotica"},
"backButtonBack":function(d){return "Terug naar alle activiteiten"},
"filterHeaderShowFilters":function(d){return "Filters"},
"filterHeaderHideFilters":function(d){return "Toepassen"},
"filterHeaderTutorialCountSingle":function(d){return "1 resultaat"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" resultaten"},
"roboticsButtonText":function(d){return "Bekijk robotica-activiteiten"},
"roboticsText":function(d){return "Heb je robots? Gebruik die activiteiten en maak een tastbaar Uur Code voor leerlingen van elke leeftijd!"},
"tutorialSetNoTutorials":function(d){return "Je zoekopdracht leverde geen resultaten op.\nProbeer enkele filters te verwijderen om meer activiteiten te zien."},
"tutorialDetailsTeacherNotes":function(d){return "Opmerkingen van leraar"},
"tutorialDetailsShortLink":function(d){return "Korte link"},
"tutorialDetailInternationalLanguages":function(d){return "Taal"},
"tutorialDetailStandards":function(d){return "Normen"},
"tutorialDetailDisabled":function(d){return "Deze handleiding is tijdelijk niet beschikbaar."},
"headingTutorialsYourLanguage":function(d){return "Opdrachten in jouw taal"},
"showAllTutorialsButton":function(d){return "Toon activiteiten voor andere talen"},
"hideAllTutorialsButton":function(d){return "Verberg activiteiten voor andere talen"},
"noTutorialsYourLanguage":function(d){return "Er zijn geen activiteiten ondersteund in jouw taal. Probeer activiteiten in andere talen door te klikken op de knop hieronder."},
"bottomGuidelinesLink":function(d){return "Klik hier voor onze criteria en de richtlijnen voor Hour of Code tutorials."},
"bottomSpecialNeedsLink":function(d){return "Klik hier voor meer informatie over ondersteuning voor studenten met functionele beperkingen."}};