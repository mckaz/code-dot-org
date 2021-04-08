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
"startButton":function(d){return "Aloita"},
"filterOrgNames":function(d){return "Luonut"},
"filterOrgNamesAll":function(d){return "Kaikki"},
"filterSortBy":function(d){return "Lajittele"},
"filterSortByDisplayWeight":function(d){return "Suositeltu"},
"filterSortByPopularityRank":function(d){return "Suosituimmat"},
"filterGrades":function(d){return "Luokat"},
"filterGradesAll":function(d){return "Kaikenikäiset"},
"filterGradesPre":function(d){return "Ei lukutaitoa"},
"filterGrades25":function(d){return "Luokat 2-5"},
"filterGrades68":function(d){return "Luokat 6-8"},
"filterGrades9":function(d){return "Luokat 9+"},
"filterStudentExperience":function(d){return "Opiskelijan kokemus"},
"filterStudentExperienceBeginner":function(d){return "Aloittelija"},
"filterStudentExperienceComfortable":function(d){return "Mukava"},
"filterStudentExperienceExperienced":function(d){return "Kokenut"},
"filterPlatform":function(d){return "Luokkahuone teknologia"},
"filterPlatformComputers":function(d){return "Tietokoneet"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Huono tai ei nettiä"},
"filterPlatformNoComputers":function(d){return "Ei tietokoneita tai laitteita"},
"filterTopics":function(d){return "Aiheet"},
"filterTopicsScience":function(d){return "Tiede"},
"filterTopicsMath":function(d){return "Matematiikka"},
"filterTopicsHistory":function(d){return "Yhteiskuntaoppi"},
"filterTopicsLa":function(d){return "Kielet"},
"filterTopicsArt":function(d){return "Taide, media, musiikki"},
"filterTopicsCsOnly":function(d){return "Tietojenkäsittelytiede ainoastaan"},
"filterActivityType":function(d){return "Aktiviteettin tyyppi"},
"filterActivityTypeOnlineTutorial":function(d){return "Itse johdettu oppitunti"},
"filterActivityTypeLessonPlan":function(d){return "Tuntisuunnitelma"},
"filterLength":function(d){return "Pituus"},
"filterLength1Hour":function(d){return "Tunti"},
"filterLength1HourFollow":function(d){return "Tunti ja siihen jatko-osa"},
"filterLengthFewHours":function(d){return "Muutama tunti"},
"filterProgrammingLanguage":function(d){return "Kieli"},
"filterProgrammingLanguageBlocks":function(d){return "lohkot"},
"filterProgrammingLanguageTyping":function(d){return "Kirjoittaminen"},
"filterProgrammingLanguageOther":function(d){return "Muut"},
"filterActivityTypeRobotics":function(d){return "Robotiikka"},
"backButtonBack":function(d){return "Takaisin kaikkiin aktiviteetteihin"},
"filterHeaderShowFilters":function(d){return "Suodattimet"},
"filterHeaderHideFilters":function(d){return "Ota käyttöön"},
"filterHeaderTutorialCountSingle":function(d){return "yksi tulos"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" tulosta"},
"roboticsButtonText":function(d){return "Näytä robotiikan aktiviteetit"},
"roboticsText":function(d){return "Onko käytössäsi robotteja? Käytä näitä tehtäviä ja tee järkevä Kooditunti kaikenikäisille!"},
"tutorialSetNoTutorials":function(d){return "Haku ei palauttanut tuloksia. Yritä poistaa joitakin suodattimia nähdäksesi enemmän aktiviteettejä."},
"tutorialDetailsTeacherNotes":function(d){return "Opettajan muistiinpanot"},
"tutorialDetailsShortLink":function(d){return "Lyhyt linkki"},
"tutorialDetailInternationalLanguages":function(d){return "Kielet"},
"tutorialDetailStandards":function(d){return "Standardit"},
"tutorialDetailDisabled":function(d){return "Tämä opetusohjelma on tilapäisesti poissa käytöstä."},
"headingTutorialsYourLanguage":function(d){return "Oppitunnit omalla kielelläsi"},
"showAllTutorialsButton":function(d){return "Näytä tehtävät monilla kielillä"},
"hideAllTutorialsButton":function(d){return "Piilota tehtävät monilla kielillä"},
"noTutorialsYourLanguage":function(d){return "Ei ole aktiviteetteja omalla kielellä. Yritä toimia muilla kielillä napsauttamalla alla olevaa painiketta."},
"bottomGuidelinesLink":function(d){return "Klikkaa tästä nähdäksesi kriteerimme ja lähetysohjeet Kooditunti oppitunneille."},
"bottomSpecialNeedsLink":function(d){return "Klikkaa tästä nähdäksesi lisätietoja kuinka tuemme oppilaiden erityistarpeita."}};