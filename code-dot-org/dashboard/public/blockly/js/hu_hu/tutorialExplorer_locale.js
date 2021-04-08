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
"startButton":function(d){return "Kezdés"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "All"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Évfolyam"},
"filterGradesAll":function(d){return "Minden korosztály számára"},
"filterGradesPre":function(d){return "Olvasástudás előtt"},
"filterGrades25":function(d){return "2-5. osztály"},
"filterGrades68":function(d){return "6-8. osztály"},
"filterGrades9":function(d){return "9+ osztály"},
"filterStudentExperience":function(d){return "Tanulói tapasztalat"},
"filterStudentExperienceBeginner":function(d){return "Kezdő"},
"filterStudentExperienceComfortable":function(d){return "Kényelmes"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Osztálytermi technológia"},
"filterPlatformComputers":function(d){return "Számítógépek"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Rossz internet vagy nincs internet"},
"filterPlatformNoComputers":function(d){return "Nincsenek számítógépek és egyéb eszközök"},
"filterTopics":function(d){return "Témák"},
"filterTopicsScience":function(d){return "Tudományok"},
"filterTopicsMath":function(d){return "Matematika"},
"filterTopicsHistory":function(d){return "Társadalmi tudományok"},
"filterTopicsLa":function(d){return "Nyelvek"},
"filterTopicsArt":function(d){return "Művészetek, média, zene"},
"filterTopicsCsOnly":function(d){return "Csak a számítógép-tudomány"},
"filterActivityType":function(d){return "Tevékenység típusa"},
"filterActivityTypeOnlineTutorial":function(d){return "Önmagán végigvezető útmutató"},
"filterActivityTypeLessonPlan":function(d){return "Óravázlat"},
"filterLength":function(d){return "Időtartam"},
"filterLength1Hour":function(d){return "Egy óra"},
"filterLength1HourFollow":function(d){return "Egy óra a levezető feladatokkal"},
"filterLengthFewHours":function(d){return "Néhány óra"},
"filterProgrammingLanguage":function(d){return "Nyelv"},
"filterProgrammingLanguageBlocks":function(d){return "blokkok"},
"filterProgrammingLanguageTyping":function(d){return "Gépelés"},
"filterProgrammingLanguageOther":function(d){return "Egyéb"},
"filterActivityTypeRobotics":function(d){return "Robotika"},
"backButtonBack":function(d){return "Vissza az összes tevékenységhez"},
"filterHeaderShowFilters":function(d){return "Szűrők"},
"filterHeaderHideFilters":function(d){return "Alkalmaz"},
"filterHeaderTutorialCountSingle":function(d){return "1 találat"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" találat"},
"roboticsButtonText":function(d){return "Robotika tevékenységek megtekintése"},
"roboticsText":function(d){return "Vannak robotjaid? Használd ezeket a tevékenységeket, és hozz létre egy bármely korosztály számára alkalmas Kódolás óráját!"},
"tutorialSetNoTutorials":function(d){return "A keresés nem hozott eredményt. Kérjük, próbáld meg újra kevesebb szűrővel, hogy megtaláld a tevékenységeket."},
"tutorialDetailsTeacherNotes":function(d){return "Tanári jegyzetek"},
"tutorialDetailsShortLink":function(d){return "Rövid link"},
"tutorialDetailInternationalLanguages":function(d){return "Nyelvek"},
"tutorialDetailStandards":function(d){return "Sztenderdek"},
"tutorialDetailDisabled":function(d){return "Ez az útmutató átmenetileg nem elérhető."},
"headingTutorialsYourLanguage":function(d){return "Tevékenységek az anyanyelveden"},
"showAllTutorialsButton":function(d){return "Tevékenységek mutatása különböző nyelvekre"},
"hideAllTutorialsButton":function(d){return "Tevékenységek elrejtése különböző nyelvekre"},
"noTutorialsYourLanguage":function(d){return "Nincsenek a saját anyanyelveden elérhető tevékenységek. Más nyelveken elérhető tevékenységekért kattints a lenti gombra."},
"bottomGuidelinesLink":function(d){return "Kattints ide az Hour of Code gyakorlatokhoz tartozó kritériumok és beadási útmutatók eléréséhez."},
"bottomSpecialNeedsLink":function(d){return "Kattints ide, ha szeretnél további információkhoz jutni a speciális igényekkel rendelkező tanulók segítéséről."}};