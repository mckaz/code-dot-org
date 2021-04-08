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
"startButton":function(d){return "Inizia"},
"filterOrgNames":function(d){return "Creato da"},
"filterOrgNamesAll":function(d){return "Tutti"},
"filterSortBy":function(d){return "Ordina per"},
"filterSortByDisplayWeight":function(d){return "Consigliati"},
"filterSortByPopularityRank":function(d){return "Più popolari"},
"filterGrades":function(d){return "Classi"},
"filterGradesAll":function(d){return "Tutte le età"},
"filterGradesPre":function(d){return "Pre-scolare"},
"filterGrades25":function(d){return "Da 7 a 11 anni"},
"filterGrades68":function(d){return "Da 11 a 13 anni"},
"filterGrades9":function(d){return "Da 14 anni in su"},
"filterStudentExperience":function(d){return "Esperienza studenti"},
"filterStudentExperienceBeginner":function(d){return "Principiante"},
"filterStudentExperienceComfortable":function(d){return "A proprio agio"},
"filterStudentExperienceExperienced":function(d){return "Esperto"},
"filterPlatform":function(d){return "Tecnologia utilizzata in classe"},
"filterPlatformComputers":function(d){return "Computer"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Connessione internet assente o lenta"},
"filterPlatformNoComputers":function(d){return "Nessun computer o dispositivi"},
"filterTopics":function(d){return "Argomenti"},
"filterTopicsScience":function(d){return "Scienza"},
"filterTopicsMath":function(d){return "Matematica"},
"filterTopicsHistory":function(d){return "Studi Sociali"},
"filterTopicsLa":function(d){return "Linguaggi Artistici"},
"filterTopicsArt":function(d){return "Arte, Media, Musica"},
"filterTopicsCsOnly":function(d){return "Solo informatica"},
"filterActivityType":function(d){return "Tipo di attività"},
"filterActivityTypeOnlineTutorial":function(d){return "Tutorial auto-condotto"},
"filterActivityTypeLessonPlan":function(d){return "Piano di lavoro della lezione"},
"filterLength":function(d){return "Lunghezza"},
"filterLength1Hour":function(d){return "Un'ora"},
"filterLength1HourFollow":function(d){return "Un'ora con continuazione"},
"filterLengthFewHours":function(d){return "Alcune ore"},
"filterProgrammingLanguage":function(d){return "Linguaggio"},
"filterProgrammingLanguageBlocks":function(d){return "Blocchi"},
"filterProgrammingLanguageTyping":function(d){return "Scrivendo"},
"filterProgrammingLanguageOther":function(d){return "Altro"},
"filterActivityTypeRobotics":function(d){return "Robotica"},
"backButtonBack":function(d){return "Torna a tutte le attività"},
"filterHeaderShowFilters":function(d){return "Filtri"},
"filterHeaderHideFilters":function(d){return "Utilizza"},
"filterHeaderTutorialCountSingle":function(d){return "1 Risultato"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" risultati"},
"roboticsButtonText":function(d){return "Visualizza le attività robotiche"},
"roboticsText":function(d){return "Hai dei robot? Utilizza queste attività e rendi tangibile un Ora di Codice per gli studenti di qualsiasi età!"},
"tutorialSetNoTutorials":function(d){return "La tua ricerca ha prodotto alcun risultato. \nPer favore prova a rimuovere alcuni filtri per visualizzare ulteriori attività."},
"tutorialDetailsTeacherNotes":function(d){return "Guida per l'insegnante (in inglese)"},
"tutorialDetailsShortLink":function(d){return "Link breve"},
"tutorialDetailInternationalLanguages":function(d){return "Linguaggi"},
"tutorialDetailStandards":function(d){return "Livelli di riferimento"},
"tutorialDetailDisabled":function(d){return "Questo tutorial è temporaneamente non disponibile."},
"headingTutorialsYourLanguage":function(d){return "Attività nella tua lingua"},
"showAllTutorialsButton":function(d){return "Visualizza attività per molte lingue"},
"hideAllTutorialsButton":function(d){return "Nascondi attività per molte lingue"},
"noTutorialsYourLanguage":function(d){return "Non sono presenti attività nella tua lingua. Prova delle attività in altre lingue cliccando sul pulsante qui sotto."},
"bottomGuidelinesLink":function(d){return "Clicca qui per vedere i nostri criteri e le linee guida per le lezioni dell'Ora del Codice."},
"bottomSpecialNeedsLink":function(d){return "Clicca qui per ulteriori informazioni sul supporto agli studenti con esigenze speciali."}};