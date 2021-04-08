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
"startButton":function(d){return "Έναρξη"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "Ολα"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Βαθμοί"},
"filterGradesAll":function(d){return "Όλων των ηλικιών"},
"filterGradesPre":function(d){return "Νηπιαγωγίο"},
"filterGrades25":function(d){return "Τάξεις Β' Δημοτικού - Ε΄Γυμνασίου"},
"filterGrades68":function(d){return "Τάξεις ΣΤ' Δημοτικού - Β΄Γυμνασίου"},
"filterGrades9":function(d){return "Τάξεις Γ' Γυμνασίου +"},
"filterStudentExperience":function(d){return "Εμπειρία μαθητών"},
"filterStudentExperienceBeginner":function(d){return "Αρχάριος"},
"filterStudentExperienceComfortable":function(d){return "Άνετα"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Τεχνολογία της τάξης"},
"filterPlatformComputers":function(d){return "Υπολογιστές"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Φτωχό ή καθόλου σήμα"},
"filterPlatformNoComputers":function(d){return "Καθόλου υπολογιστές ή συσκευές"},
"filterTopics":function(d){return "Θέματα"},
"filterTopicsScience":function(d){return "Επιστήμη"},
"filterTopicsMath":function(d){return "Μαθηματικά"},
"filterTopicsHistory":function(d){return "Κοινωνικές σπουδές"},
"filterTopicsLa":function(d){return "Τέχνη Γλωσσών"},
"filterTopicsArt":function(d){return "Τέχνη, Μέσα, Μουσική"},
"filterTopicsCsOnly":function(d){return "Επιστήμη πληροφορικής μόνο"},
"filterActivityType":function(d){return "Τύπος δραστηριότητας"},
"filterActivityTypeOnlineTutorial":function(d){return "Σεμινάριο αυτο-οδηγούμενο"},
"filterActivityTypeLessonPlan":function(d){return "Πλάνο μαθήματος"},
"filterLength":function(d){return "Μήκος"},
"filterLength1Hour":function(d){return "Μία ώρα"},
"filterLength1HourFollow":function(d){return "Μία ώρα με διαδοχή"},
"filterLengthFewHours":function(d){return "Λίγες ώρες"},
"filterProgrammingLanguage":function(d){return "Γλώσσα"},
"filterProgrammingLanguageBlocks":function(d){return "μπλοκ"},
"filterProgrammingLanguageTyping":function(d){return "Πληκτρολογηση"},
"filterProgrammingLanguageOther":function(d){return "Άλλα"},
"filterActivityTypeRobotics":function(d){return "Ρομποτική"},
"backButtonBack":function(d){return "Πίσω σε όλες τις δραστηριότητες"},
"filterHeaderShowFilters":function(d){return "Φίλτρα"},
"filterHeaderHideFilters":function(d){return "Εφαρμογή"},
"filterHeaderTutorialCountSingle":function(d){return "1 αποτέλεσμα"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" αποτελέσματα"},
"roboticsButtonText":function(d){return "Δείτε τις δραστηριότητες ρομποτικής"},
"roboticsText":function(d){return "Έχετε κιτ ρομποτικής; Αξιοποιήστε αυτές τις δραστηριότητες για να προσφέρετε κάτι απτό για την Ώρα του Κώδικα για μαθητές κάθε ηλικίας!"},
"tutorialSetNoTutorials":function(d){return "Η αναζήτησή σας δεν επέστρεψε αποτελέσματα. Δοκιμάστε να αφαιρέσετε μερικά από τα κριτήρια αναζήτησης για να δείτε περισσότερες δραστηριότητες."},
"tutorialDetailsTeacherNotes":function(d){return "Σημειώσεις εκπαιδευτικού"},
"tutorialDetailsShortLink":function(d){return "Σύντομος σύνδεσμος"},
"tutorialDetailInternationalLanguages":function(d){return "Γλώσσες"},
"tutorialDetailStandards":function(d){return "Πρότυπα"},
"tutorialDetailDisabled":function(d){return "Αυτό το σεμινάριο δεν είναι διαθέσιμο προσωρινά."},
"headingTutorialsYourLanguage":function(d){return "Δραστηριότητες στη γλώσσα σας"},
"showAllTutorialsButton":function(d){return "Εμφάνιση δραστηριοτήτων σε πολλές γλώσσες"},
"hideAllTutorialsButton":function(d){return "Απόκρυψη δραστηριοτήτων σε πολλές γλώσσες"},
"noTutorialsYourLanguage":function(d){return "Δεν υποστηρίζονται δραστηριότητες στη γλώσσα σας. Δοκιμάστε δραστηριότητες σε άλλες γλώσσες, κάνοντας κλικ στο παρακάτω κουμπί."},
"bottomGuidelinesLink":function(d){return "Κάντε κλικ εδώ για να δείτε οδηγίες τα κριτήρια και τη διαδικασία υποβολής σεμιναρίων δραστηριοτήτων για την Ώρα του Κώδικα."},
"bottomSpecialNeedsLink":function(d){return "Κάντε κλικ εδώ για περισσότερες πληροφορίες σχετικά με την υποστήριξη μαθητών με ειδικές ανάγκες."}};