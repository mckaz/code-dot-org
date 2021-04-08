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
"filterOrgNames":function(d){return "Utworzone przez"},
"filterOrgNamesAll":function(d){return "Wszystko"},
"filterSortBy":function(d){return "Sortuj wedlug"},
"filterSortByDisplayWeight":function(d){return "Polecane"},
"filterSortByPopularityRank":function(d){return "Najbardziej popularne"},
"filterGrades":function(d){return "Poziom/Klasy"},
"filterGradesAll":function(d){return "Wszystkie klasy"},
"filterGradesPre":function(d){return "Nie czytający"},
"filterGrades25":function(d){return "Klasy 2-5"},
"filterGrades68":function(d){return "Klasy 6-8"},
"filterGrades9":function(d){return "Klasy 9+"},
"filterStudentExperience":function(d){return "Przygotowanie ucznia"},
"filterStudentExperienceBeginner":function(d){return "Początkujący"},
"filterStudentExperienceComfortable":function(d){return "Wygodny"},
"filterStudentExperienceExperienced":function(d){return "Doświadczony"},
"filterPlatform":function(d){return "Technologia w klasie"},
"filterPlatformComputers":function(d){return "Komputery"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Słaby sygnał lub brak Internetu"},
"filterPlatformNoComputers":function(d){return "Brak komputerów lub urządzeń"},
"filterTopics":function(d){return "Tematy"},
"filterTopicsScience":function(d){return "Nauka/Przyroda"},
"filterTopicsMath":function(d){return "Matematyka"},
"filterTopicsHistory":function(d){return "Nauki społeczne"},
"filterTopicsLa":function(d){return "Sztuki języków"},
"filterTopicsArt":function(d){return "Sztuka, Media, Muzyka"},
"filterTopicsCsOnly":function(d){return "Tylko Informatyka"},
"filterActivityType":function(d){return "Rodzaj aktywności"},
"filterActivityTypeOnlineTutorial":function(d){return "Samouczek"},
"filterActivityTypeLessonPlan":function(d){return "Plan Lekcji"},
"filterLength":function(d){return "Długość"},
"filterLength1Hour":function(d){return "Jedna godzina"},
"filterLength1HourFollow":function(d){return "Godzina z kontynuacją"},
"filterLengthFewHours":function(d){return "Kilka godzin"},
"filterProgrammingLanguage":function(d){return "Język"},
"filterProgrammingLanguageBlocks":function(d){return "Bloki"},
"filterProgrammingLanguageTyping":function(d){return "Pisanie"},
"filterProgrammingLanguageOther":function(d){return "Inni/inne"},
"filterActivityTypeRobotics":function(d){return "Robotyka"},
"backButtonBack":function(d){return "Wróć do wszystkich aktywności"},
"filterHeaderShowFilters":function(d){return "Filtry"},
"filterHeaderHideFilters":function(d){return "Zastosuj"},
"filterHeaderTutorialCountSingle":function(d){return "1 wynik"},
"filterHeaderTutorialCountPlural":function(d){return "wyniki "+tutorialExplorer_locale.v(d,"tutorial_count")},
"roboticsButtonText":function(d){return "Robotyka i Układy"},
"roboticsText":function(d){return "Masz roboty? Skorzystaj z tych aktywności i uczyń Godzinę Kodowania interesującą dla uczniów w każdym wieku!"},
"tutorialSetNoTutorials":function(d){return "Brak wyników wyszukiwania. Spróbuj usunąć niektóre filtry, aby zobaczyć więcej aktywności."},
"tutorialDetailsTeacherNotes":function(d){return "Notatki nauczyciela"},
"tutorialDetailsShortLink":function(d){return "Krótki link"},
"tutorialDetailInternationalLanguages":function(d){return "Języki"},
"tutorialDetailStandards":function(d){return "Standardy"},
"tutorialDetailDisabled":function(d){return "Ten poradnik jest tymczasowo niedostępny."},
"headingTutorialsYourLanguage":function(d){return "Aktywności w Twoim języku"},
"showAllTutorialsButton":function(d){return "Wyświetl aktywności w wielu językach"},
"hideAllTutorialsButton":function(d){return "Ukryj aktywności w wielu językach"},
"noTutorialsYourLanguage":function(d){return "Nie ma żadnych aktywności w Twoim języku. Spróbuj aktywności w innych językach, klikając na przycisk poniżej."},
"bottomGuidelinesLink":function(d){return "Kliknij tutaj, aby zobaczyć nasze kryteria i wskazówki dla poradników w Godzinie Kodowania."},
"bottomSpecialNeedsLink":function(d){return "Kliknij tutaj, aby uzyskać więcej informacji dotyczących wsparcia uczniów o specjalnych potrzebach."}};