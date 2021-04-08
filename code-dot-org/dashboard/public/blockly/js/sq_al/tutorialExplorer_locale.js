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
"startButton":function(d){return "Fillo"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "Të gjitha"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Notat"},
"filterGradesAll":function(d){return "Të gjitha moshat"},
"filterGradesPre":function(d){return "Përpara leximit"},
"filterGrades25":function(d){return "Notat 2-5"},
"filterGrades68":function(d){return "Notat 6-8"},
"filterGrades9":function(d){return "Notat 9+"},
"filterStudentExperience":function(d){return "përvojë studenti"},
"filterStudentExperienceBeginner":function(d){return "Fillestar"},
"filterStudentExperienceComfortable":function(d){return "Rehat"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "klasë teknologjie"},
"filterPlatformComputers":function(d){return "kompjuter"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPhad/iPhone"},
"filterPlatformNoInternet":function(d){return "Internet i dobët ose mungesë interneti"},
"filterPlatformNoComputers":function(d){return "Nuk ka kompjuterë ose pajisje"},
"filterTopics":function(d){return "Temat"},
"filterTopicsScience":function(d){return "Shkencë"},
"filterTopicsMath":function(d){return "Matematikë"},
"filterTopicsHistory":function(d){return "studimet sociale"},
"filterTopicsLa":function(d){return "Gjuha e arteve"},
"filterTopicsArt":function(d){return "Art, Media, Muzikë"},
"filterTopicsCsOnly":function(d){return "Vetëm Shkenca Kompjuterike"},
"filterActivityType":function(d){return "Lloji i aktivitetit"},
"filterActivityTypeOnlineTutorial":function(d){return "Tutoriale vet-udhëzuese"},
"filterActivityTypeLessonPlan":function(d){return "Plani mësimor"},
"filterLength":function(d){return "Gjatësi"},
"filterLength1Hour":function(d){return " Një orë"},
"filterLength1HourFollow":function(d){return "Një orë me ndjekësit"},
"filterLengthFewHours":function(d){return "Disa orë"},
"filterProgrammingLanguage":function(d){return "Gjuha"},
"filterProgrammingLanguageBlocks":function(d){return "Blloqe"},
"filterProgrammingLanguageTyping":function(d){return "Shkrim"},
"filterProgrammingLanguageOther":function(d){return "Tjetër"},
"filterActivityTypeRobotics":function(d){return "Robotikë"},
"backButtonBack":function(d){return "Kthehu në të gjitha aktivitetet"},
"filterHeaderShowFilters":function(d){return "Filtrues"},
"filterHeaderHideFilters":function(d){return "Aplikoni"},
"filterHeaderTutorialCountSingle":function(d){return "1 rezultat"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" rezultate"},
"roboticsButtonText":function(d){return "Shiko aktivitetet robotike"},
"roboticsText":function(d){return "Keni robot ? Përdorni këto aktivitete dhe bëjeni të prekshme Orën e Kodimit për nxënësit e çdo moshe!"},
"tutorialSetNoTutorials":function(d){return "Kërkimi juaj nuk kthen asnjë rezultat.\nJu lutemi provoni duke hequr disa filtra për të parë më shumë aktivitete."},
"tutorialDetailsTeacherNotes":function(d){return "Shënimet e mësuesve"},
"tutorialDetailsShortLink":function(d){return "lidhje e shkurtër"},
"tutorialDetailInternationalLanguages":function(d){return "Gjuhët"},
"tutorialDetailStandards":function(d){return "Standartet"},
"tutorialDetailDisabled":function(d){return "\nKy tutorial është përkohësisht i padisponueshëm."},
"headingTutorialsYourLanguage":function(d){return "Aktivitetet në gjuhën tuaj"},
"showAllTutorialsButton":function(d){return "Shfaq aktivitetet për shumë gjuhë"},
"hideAllTutorialsButton":function(d){return "Fshi aktivitetet për shumë gjuhë"},
"noTutorialsYourLanguage":function(d){return "Nuk ka aktivitete të përshtatura në gjuhën tuaj. Provoni aktivitete në gjuhë të tjera duke klikuar butonin më poshtë."},
"bottomGuidelinesLink":function(d){return "Kliko këtu për të parë kriteret tona dhe udhëzimet e paraqitjes për tutorialet e Orës së Kodimit."},
"bottomSpecialNeedsLink":function(d){return "Kliko këtu për më shumë informacion mbi mbështetjen e nxënësve me nevoja të veçanta."}};