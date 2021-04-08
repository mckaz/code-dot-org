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
"startButton":function(d){return "Inici"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "All"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Grades"},
"filterGradesAll":function(d){return "Totes les edats"},
"filterGradesPre":function(d){return "Pre-reader"},
"filterGrades25":function(d){return "Grades 2-5"},
"filterGrades68":function(d){return "Grades 6-8"},
"filterGrades9":function(d){return "Grades 9+"},
"filterStudentExperience":function(d){return "Student experience"},
"filterStudentExperienceBeginner":function(d){return "Principiant"},
"filterStudentExperienceComfortable":function(d){return "Comfortable"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Classroom technology"},
"filterPlatformComputers":function(d){return "Ordinadors"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Baixa conexio o sense internet"},
"filterPlatformNoComputers":function(d){return "No hi ha ordinadors o dispositius"},
"filterTopics":function(d){return "Temes"},
"filterTopicsScience":function(d){return "Ciència"},
"filterTopicsMath":function(d){return "Mates"},
"filterTopicsHistory":function(d){return "Estudis socials"},
"filterTopicsLa":function(d){return "Arts del llenguatge"},
"filterTopicsArt":function(d){return "Art, multimèdia, música"},
"filterTopicsCsOnly":function(d){return "només arts computacionals\n"},
"filterActivityType":function(d){return "Tipus d'activitat"},
"filterActivityTypeOnlineTutorial":function(d){return "Self-led tutorial"},
"filterActivityTypeLessonPlan":function(d){return "Unitat didàctica/lliço"},
"filterLength":function(d){return "Longitud"},
"filterLength1Hour":function(d){return "Una hora"},
"filterLength1HourFollow":function(d){return "One hour with follow-on"},
"filterLengthFewHours":function(d){return "A few hours"},
"filterProgrammingLanguage":function(d){return "Llengua"},
"filterProgrammingLanguageBlocks":function(d){return "Blocs"},
"filterProgrammingLanguageTyping":function(d){return "Typing"},
"filterProgrammingLanguageOther":function(d){return "Altres"},
"filterActivityTypeRobotics":function(d){return "Robòtica"},
"backButtonBack":function(d){return "Back to all activities"},
"filterHeaderShowFilters":function(d){return "Filters"},
"filterHeaderHideFilters":function(d){return "Apply"},
"filterHeaderTutorialCountSingle":function(d){return " un resultat"},
"filterHeaderTutorialCountPlural":function(d){return "resultats "+tutorialExplorer_locale.v(d,"tutorial_count")},
"roboticsButtonText":function(d){return "View robotics activities"},
"roboticsText":function(d){return "Got robots? Use these activities and make a tangible Hour of Code for students of any age!"},
"tutorialSetNoTutorials":function(d){return "Your search returned no results.\nPlease try removing some filters to see more activities."},
"tutorialDetailsTeacherNotes":function(d){return "Notes del mestre"},
"tutorialDetailsShortLink":function(d){return "Enllaç curt"},
"tutorialDetailInternationalLanguages":function(d){return "Llengües"},
"tutorialDetailStandards":function(d){return "Estàndards"},
"tutorialDetailDisabled":function(d){return "Aquest tutorial està disponible temporalment."},
"headingTutorialsYourLanguage":function(d){return "Tutorials en el teu idioma"},
"showAllTutorialsButton":function(d){return "Activitats per a diversos idiomes"},
"hideAllTutorialsButton":function(d){return "Activitats per a diversos idiomes"},
"noTutorialsYourLanguage":function(d){return "Hi ha activitats compatibles amb el teu idioma. Prova les activitats en altres llengües fent clic al botó de abaix."},
"bottomGuidelinesLink":function(d){return "Click here to see our criteria and submission guidelines for Hour of Code tutorials."},
"bottomSpecialNeedsLink":function(d){return "Click here for more information on supporting special needs students."}};