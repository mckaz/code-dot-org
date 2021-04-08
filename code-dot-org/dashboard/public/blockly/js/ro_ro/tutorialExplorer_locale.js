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
"startButton":function(d){return "Începe"},
"filterOrgNames":function(d){return "Creat de"},
"filterOrgNamesAll":function(d){return "Tot"},
"filterSortBy":function(d){return "Sortează după"},
"filterSortByDisplayWeight":function(d){return "Recomandat(e)"},
"filterSortByPopularityRank":function(d){return "Cel mai popular"},
"filterGrades":function(d){return "Clase"},
"filterGradesAll":function(d){return "Toate clasele"},
"filterGradesPre":function(d){return "Pre-cititor"},
"filterGrades25":function(d){return "Clasele 2-5"},
"filterGrades68":function(d){return "Clasele 6-8"},
"filterGrades9":function(d){return "Clasele 9+"},
"filterStudentExperience":function(d){return "Experienta elevului"},
"filterStudentExperienceBeginner":function(d){return "Începător"},
"filterStudentExperienceComfortable":function(d){return "Confortabil"},
"filterStudentExperienceExperienced":function(d){return "Experimentat"},
"filterPlatform":function(d){return "Tehnologie din clasă"},
"filterPlatformComputers":function(d){return "Calculatoare"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Internet slab sau lipsă"},
"filterPlatformNoComputers":function(d){return "Fără calculatoare sau dispozitive"},
"filterTopics":function(d){return "Subiecte"},
"filterTopicsScience":function(d){return "Ştiinţă"},
"filterTopicsMath":function(d){return "Matematică"},
"filterTopicsHistory":function(d){return "Studii sociale"},
"filterTopicsLa":function(d){return "Limbi"},
"filterTopicsArt":function(d){return "Arta, media, muzică"},
"filterTopicsCsOnly":function(d){return "Doar Tehnologia computerului si programare"},
"filterActivityType":function(d){return "Tipul activității"},
"filterActivityTypeOnlineTutorial":function(d){return "Tutorial auto-ghidat"},
"filterActivityTypeLessonPlan":function(d){return "Plan de lecție"},
"filterLength":function(d){return "Durată"},
"filterLength1Hour":function(d){return "O oră"},
"filterLength1HourFollow":function(d){return "O oră cu evaluare"},
"filterLengthFewHours":function(d){return "Câteva ore"},
"filterProgrammingLanguage":function(d){return "Limbă"},
"filterProgrammingLanguageBlocks":function(d){return "Blocuri"},
"filterProgrammingLanguageTyping":function(d){return "Tastarea"},
"filterProgrammingLanguageOther":function(d){return "Alte"},
"filterActivityTypeRobotics":function(d){return "Robotică"},
"backButtonBack":function(d){return "Înapoi la toate activităţile"},
"filterHeaderShowFilters":function(d){return "Filtre"},
"filterHeaderHideFilters":function(d){return "Aplicaţi"},
"filterHeaderTutorialCountSingle":function(d){return "1 rezultat"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" rezultate"},
"roboticsButtonText":function(d){return "Vezi activitățile de robotică"},
"roboticsText":function(d){return "Aveți roboți? Utilizați aceste activități și realizați o oră de programare interactivă cu elevii dvs. de toate vârstele!"},
"tutorialSetNoTutorials":function(d){return "Căutarea ta nu a avut rezultate care să se potrivească. Încearcă sa elimini câteva filtre pentru a vedea mai multe activități."},
"tutorialDetailsTeacherNotes":function(d){return "Notițele profesorului"},
"tutorialDetailsShortLink":function(d){return "Link scurt"},
"tutorialDetailInternationalLanguages":function(d){return "Limbă"},
"tutorialDetailStandards":function(d){return "Standarde"},
"tutorialDetailDisabled":function(d){return "Tutorialul este indisponibil temporar."},
"headingTutorialsYourLanguage":function(d){return "Activități în limba ta"},
"showAllTutorialsButton":function(d){return "Arată activitățile pentru mai multe limbi"},
"hideAllTutorialsButton":function(d){return "Ascunde activitățile pentru mai multe limbi"},
"noTutorialsYourLanguage":function(d){return "Nu sunt activităţi susţinute în limba dvs. Încercaţi activităţi în alte limbi, făcând clic pe butonul de mai jos."},
"bottomGuidelinesLink":function(d){return "Click aici pentru a vedea criteriile noastre și ghidurile pentru tutorialele Hour of Code."},
"bottomSpecialNeedsLink":function(d){return "Click aici pentru mai multe informaţii despre sprijinirea elevilor cu nevoi speciale."}};