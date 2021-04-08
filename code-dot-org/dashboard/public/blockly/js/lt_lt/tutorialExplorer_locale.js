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
"startButton":function(d){return "Pradėti"},
"filterOrgNames":function(d){return "Autorių"},
"filterOrgNamesAll":function(d){return "All"},
"filterSortBy":function(d){return "Rikiuoti pagal"},
"filterSortByDisplayWeight":function(d){return "Rekomenduojama"},
"filterSortByPopularityRank":function(d){return "Populiariausi"},
"filterGrades":function(d){return "Klasės"},
"filterGradesAll":function(d){return "Visoms klasėms"},
"filterGradesPre":function(d){return "Nemokantys skaityti"},
"filterGrades25":function(d){return "2-5 Klasės"},
"filterGrades68":function(d){return "6-8 Klasės"},
"filterGrades9":function(d){return "9+ Klasės"},
"filterStudentExperience":function(d){return "Mokinio patirtis"},
"filterStudentExperienceBeginner":function(d){return "Pradedantiesiems"},
"filterStudentExperienceComfortable":function(d){return "Patenkinama"},
"filterStudentExperienceExperienced":function(d){return "Patyrusiems"},
"filterPlatform":function(d){return "Klasės technologijos"},
"filterPlatformComputers":function(d){return "Kompiuteriai"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Nėra interneto arba lėtas ryšys"},
"filterPlatformNoComputers":function(d){return "Nėra kompiuterių ar kitų įrenginių"},
"filterTopics":function(d){return "Temos"},
"filterTopicsScience":function(d){return "Gamtos mokslai"},
"filterTopicsMath":function(d){return "Matematika"},
"filterTopicsHistory":function(d){return "Socialiniai mokslai"},
"filterTopicsLa":function(d){return "Literatūra"},
"filterTopicsArt":function(d){return "Menas, Muzika"},
"filterTopicsCsOnly":function(d){return "Tik informatika"},
"filterActivityType":function(d){return "Veiklos tipas"},
"filterActivityTypeOnlineTutorial":function(d){return "Savarankiškos pamokėlės"},
"filterActivityTypeLessonPlan":function(d){return "Pamokos planas"},
"filterLength":function(d){return "Trukmė"},
"filterLength1Hour":function(d){return "Viena valanda"},
"filterLength1HourFollow":function(d){return "Viena valanda su pertrauka"},
"filterLengthFewHours":function(d){return "Kelios valandos"},
"filterProgrammingLanguage":function(d){return "Kalba"},
"filterProgrammingLanguageBlocks":function(d){return "Blokeliai"},
"filterProgrammingLanguageTyping":function(d){return "Rašymas"},
"filterProgrammingLanguageOther":function(d){return "Kita"},
"filterActivityTypeRobotics":function(d){return "Robotika"},
"backButtonBack":function(d){return "Grįžti į visas veiklas"},
"filterHeaderShowFilters":function(d){return "Filtrai"},
"filterHeaderHideFilters":function(d){return "Taikyti"},
"filterHeaderTutorialCountSingle":function(d){return "1 rezultatas"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" rezultatai"},
"roboticsButtonText":function(d){return "Peržiūrėti robotikos veiklas"},
"roboticsText":function(d){return "Turite robotų? Pasinaudokite šiomis veiklomis ir praveskite „Programavimo valandą“ bet kokio amžiaus mokiniams!"},
"tutorialSetNoTutorials":function(d){return "Nieko neradome pagal Jūsų užklausą.\nNorėdami pamatyti daugiau veiklų, pabandykite pašalinti keletą filtrų."},
"tutorialDetailsTeacherNotes":function(d){return "Mokytojo pastabos"},
"tutorialDetailsShortLink":function(d){return "Trumpa nuoroda"},
"tutorialDetailInternationalLanguages":function(d){return "Kalbos"},
"tutorialDetailStandards":function(d){return "Standartai"},
"tutorialDetailDisabled":function(d){return "Ši pamokėlė yra laikinai nepasiekiama."},
"headingTutorialsYourLanguage":function(d){return "Veiklos jūsų kalba"},
"showAllTutorialsButton":function(d){return "Rodyti daugelio kalbų veiklas"},
"hideAllTutorialsButton":function(d){return "Slėpti daugelio kalbų veiklas"},
"noTutorialsYourLanguage":function(d){return "Nėra veiklų Jūsų pasirinkta kalba. Išmėginkite veiklas kitomis kalbomis, spustelėję žemiau esantį mygtuką."},
"bottomGuidelinesLink":function(d){return "Spauskite čia, norėdami pamatyti mūsų kriterijus ir pateikimo gaires „Programavimo valandos“ pamokėlėms."},
"bottomSpecialNeedsLink":function(d){return "Spauskite čia, norėdami gauti daugiau informacijos apie paramą specialiųjų poreikių mokiniams."}};