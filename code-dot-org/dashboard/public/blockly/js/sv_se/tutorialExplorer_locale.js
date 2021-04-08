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
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "Alla"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Årskurser"},
"filterGradesAll":function(d){return "Alla åldrar"},
"filterGradesPre":function(d){return "Icke-läsare"},
"filterGrades25":function(d){return "Årskurs 2-5"},
"filterGrades68":function(d){return "Årskurs 6-8"},
"filterGrades9":function(d){return "Årskurs 9+"},
"filterStudentExperience":function(d){return "Student erfarenhet"},
"filterStudentExperienceBeginner":function(d){return "Nybörjare"},
"filterStudentExperienceComfortable":function(d){return "Bekväm"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Teknik i klassrummet"},
"filterPlatformComputers":function(d){return "Datorer"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Dålig eller inget internet"},
"filterPlatformNoComputers":function(d){return "Inga datorer eller enheter"},
"filterTopics":function(d){return "Ämnen"},
"filterTopicsScience":function(d){return "Naturvetenskap"},
"filterTopicsMath":function(d){return "Matte"},
"filterTopicsHistory":function(d){return "Samhällskunskap"},
"filterTopicsLa":function(d){return "Språk"},
"filterTopicsArt":function(d){return "Konst, Media, Musik"},
"filterTopicsCsOnly":function(d){return "Datavetenskap endast"},
"filterActivityType":function(d){return "Aktivitetstyp"},
"filterActivityTypeOnlineTutorial":function(d){return "Självgående övningar"},
"filterActivityTypeLessonPlan":function(d){return "Lektionsplaneringar"},
"filterLength":function(d){return "Längd"},
"filterLength1Hour":function(d){return "En timma"},
"filterLength1HourFollow":function(d){return "En timme med uppföljning"},
"filterLengthFewHours":function(d){return "Ett par timmar"},
"filterProgrammingLanguage":function(d){return "språk"},
"filterProgrammingLanguageBlocks":function(d){return "bitar"},
"filterProgrammingLanguageTyping":function(d){return "Att skriva"},
"filterProgrammingLanguageOther":function(d){return "Annat"},
"filterActivityTypeRobotics":function(d){return "Robotar"},
"backButtonBack":function(d){return "Tillbaka till alla aktiviteter"},
"filterHeaderShowFilters":function(d){return "Filter"},
"filterHeaderHideFilters":function(d){return "Applicera"},
"filterHeaderTutorialCountSingle":function(d){return "1 resultat"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" resultat"},
"roboticsButtonText":function(d){return "Visa robotaktiviteter"},
"roboticsText":function(d){return "Har ni robotar? Använd dessa aktiviteter och gör en fysisk Hour of Code för studenter i alla åldrar!"},
"tutorialSetNoTutorials":function(d){return "Din sökning gav inga resultat. Försök att ta bort några filter för att se fler aktiviteter."},
"tutorialDetailsTeacherNotes":function(d){return "Läraranteckningar"},
"tutorialDetailsShortLink":function(d){return "Kort länk"},
"tutorialDetailInternationalLanguages":function(d){return "Språk"},
"tutorialDetailStandards":function(d){return "Standarder"},
"tutorialDetailDisabled":function(d){return "Denna övning är inte tillgänglig just nu."},
"headingTutorialsYourLanguage":function(d){return "Aktiviteter på ditt språk"},
"showAllTutorialsButton":function(d){return "Visa aktiviteter för många språk"},
"hideAllTutorialsButton":function(d){return "Dölj aktiviteter för många språk"},
"noTutorialsYourLanguage":function(d){return "Det finns inga aktiviteter med stöd för ditt språk. Prova aktiviteter på andra språk genom att klicka på knappen nedan."},
"bottomGuidelinesLink":function(d){return "Klicka här för att se våra kriterier och inlämnings riktlinjer för Hour of Code övningar."},
"bottomSpecialNeedsLink":function(d){return "Klicka här för mer information på att stödja elever med särskilda behov."}};