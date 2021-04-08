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
"startButton":function(d){return "Byrja"},
"filterOrgNames":function(d){return "Búið til af"},
"filterOrgNamesAll":function(d){return "Allt"},
"filterSortBy":function(d){return "Raða eftir"},
"filterSortByDisplayWeight":function(d){return "Mælt með"},
"filterSortByPopularityRank":function(d){return "Vinsælast"},
"filterGrades":function(d){return "Bekkir"},
"filterGradesAll":function(d){return "Allir bekkir"},
"filterGradesPre":function(d){return "Ekki læs"},
"filterGrades25":function(d){return "2. - 5. bekkur"},
"filterGrades68":function(d){return "6. - 8. bekkur"},
"filterGrades9":function(d){return "9. bekkur og yfir"},
"filterStudentExperience":function(d){return "Reynsla nemenda"},
"filterStudentExperienceBeginner":function(d){return "Byrjandi"},
"filterStudentExperienceComfortable":function(d){return "Bjargar sér"},
"filterStudentExperienceExperienced":function(d){return "Með reynslu"},
"filterPlatform":function(d){return "Búnaður í skólastofu"},
"filterPlatformComputers":function(d){return "Tölvur"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Lélegt eða ekkert internet"},
"filterPlatformNoComputers":function(d){return "Engar tölvur af neinu tagi"},
"filterTopics":function(d){return "Efni"},
"filterTopicsScience":function(d){return "Vísindi"},
"filterTopicsMath":function(d){return "Reikningur"},
"filterTopicsHistory":function(d){return "Félagsfræði"},
"filterTopicsLa":function(d){return "Tungumál"},
"filterTopicsArt":function(d){return "Listir, miðlar, tónlist"},
"filterTopicsCsOnly":function(d){return "Eingöngu tölvunarfræði"},
"filterActivityType":function(d){return "Tegund verkefnis"},
"filterActivityTypeOnlineTutorial":function(d){return "Sjálfstýrt kennsluefni"},
"filterActivityTypeLessonPlan":function(d){return "Kennsluáætlun"},
"filterLength":function(d){return "Lengd"},
"filterLength1Hour":function(d){return "Ein klukkustund"},
"filterLength1HourFollow":function(d){return "Ein klst. með eftirfylgni"},
"filterLengthFewHours":function(d){return "Nokkrar klst."},
"filterProgrammingLanguage":function(d){return "Tungumál"},
"filterProgrammingLanguageBlocks":function(d){return "kubbar"},
"filterProgrammingLanguageTyping":function(d){return "Vélritun"},
"filterProgrammingLanguageOther":function(d){return "Annað"},
"filterActivityTypeRobotics":function(d){return "Þjarkafræði"},
"backButtonBack":function(d){return "Aftur í öll verkefni"},
"filterHeaderShowFilters":function(d){return "Síur"},
"filterHeaderHideFilters":function(d){return "Nota"},
"filterHeaderTutorialCountSingle":function(d){return "1 útkoma"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" útkomur"},
"roboticsButtonText":function(d){return "Sjá verkefni í þjarkafræðum"},
"roboticsText":function(d){return "Eru vélmenni til staðar? Notaðu þessi verkefni og búðu til áþreifanlega Klukkustund kóðunar fyrir nemendur á öllum aldri!"},
"tutorialSetNoTutorials":function(d){return "Leit þín skilaði engri útkomu.\nPrófaðu að fjarlægja síur til að sjá fleiri verkefni."},
"tutorialDetailsTeacherNotes":function(d){return "Minnispunktar kennara"},
"tutorialDetailsShortLink":function(d){return "Stuttur tengill"},
"tutorialDetailInternationalLanguages":function(d){return "Tungumál"},
"tutorialDetailStandards":function(d){return "Staðlar"},
"tutorialDetailDisabled":function(d){return "Þetta kennsluefni er ekki tiltækt eins og er."},
"headingTutorialsYourLanguage":function(d){return "Verkefni á þínu tungumáli"},
"showAllTutorialsButton":function(d){return "Sýna verkefni á mörgum tungumálum"},
"hideAllTutorialsButton":function(d){return "Fela verkefni á mörgum tungumálum"},
"noTutorialsYourLanguage":function(d){return "Það eru engin verkefni á þínu tungumáli. Prófaðu verkefni á öðrum tungumálum með því að smella á hnappinn hér fyrir neðan."},
"bottomGuidelinesLink":function(d){return "Smelltu hér til að sjá leiðsögn og viðmið sem verkefni fyrir Klukkustund kóðunar þurfa að uppfylla."},
"bottomSpecialNeedsLink":function(d){return "Smelltu hér til að fá meiri upplýsingar um stuðning við nemendur með sérþarfir."}};