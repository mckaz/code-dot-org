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
"startButton":function(d){return "Panimula"},
"filterOrgNames":function(d){return "Nilikha ni"},
"filterOrgNamesAll":function(d){return "Lahat"},
"filterSortBy":function(d){return "Inayos ni"},
"filterSortByDisplayWeight":function(d){return "Inirerekomenda"},
"filterSortByPopularityRank":function(d){return "Pinakapopular"},
"filterGrades":function(d){return "Mga Marka"},
"filterGradesAll":function(d){return "Lahat ng mga grado"},
"filterGradesPre":function(d){return "Bagohan-magbasa"},
"filterGrades25":function(d){return "Baitang 2-5"},
"filterGrades68":function(d){return "Baitang 6-8"},
"filterGrades9":function(d){return "Baitang 9+"},
"filterStudentExperience":function(d){return "Karanasang pang-mag-aaral"},
"filterStudentExperienceBeginner":function(d){return "Baguhan"},
"filterStudentExperienceComfortable":function(d){return "Komportable"},
"filterStudentExperienceExperienced":function(d){return "May karanasan"},
"filterPlatform":function(d){return "Teknolohiyang pang-silid-aralan"},
"filterPlatformComputers":function(d){return "Mga Kompyuter"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Mabagal o walang internet"},
"filterPlatformNoComputers":function(d){return "Walang mga kompyuter o device"},
"filterTopics":function(d){return "Mga Paksa"},
"filterTopicsScience":function(d){return "Agham"},
"filterTopicsMath":function(d){return "Math"},
"filterTopicsHistory":function(d){return "Araling Panlipunan"},
"filterTopicsLa":function(d){return "Sining ng Wika"},
"filterTopicsArt":function(d){return "Sining, Media, Musika"},
"filterTopicsCsOnly":function(d){return "Computer Science lang"},
"filterActivityType":function(d){return "Uri ng aktibidad"},
"filterActivityTypeOnlineTutorial":function(d){return "Sariling-gabay na tutorial"},
"filterActivityTypeLessonPlan":function(d){return "Lesson plan"},
"filterLength":function(d){return "Haba"},
"filterLength1Hour":function(d){return "Isang oras"},
"filterLength1HourFollow":function(d){return "Isang oras na pagsunod"},
"filterLengthFewHours":function(d){return "Ilang oras"},
"filterProgrammingLanguage":function(d){return "Lengwahe"},
"filterProgrammingLanguageBlocks":function(d){return "Mga block"},
"filterProgrammingLanguageTyping":function(d){return "Pag-type"},
"filterProgrammingLanguageOther":function(d){return "Iba"},
"filterActivityTypeRobotics":function(d){return "Robotics"},
"backButtonBack":function(d){return "Bumalik sa lahat ng mga aktibidad"},
"filterHeaderShowFilters":function(d){return "Mga Filter"},
"filterHeaderHideFilters":function(d){return "I-apply"},
"filterHeaderTutorialCountSingle":function(d){return "1 resulta"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" resulta"},
"roboticsButtonText":function(d){return "Tingnan ang mga aktibidad sa robotics"},
"roboticsText":function(d){return "May mga robots? Gamitin ang mga aktibidad na ito at gumawa ng makabuluhang Hour of Code para sa mga mag-aaral na anumang edad!"},
"tutorialSetNoTutorials":function(d){return "Walang naibalik na resulta para sa iyong hinahanap.\nSubukang alisin ang ibang filters para makita ang marami pang mga aktibidad."},
"tutorialDetailsTeacherNotes":function(d){return "Mga nota para sa guro"},
"tutorialDetailsShortLink":function(d){return "Maikling link"},
"tutorialDetailInternationalLanguages":function(d){return "Mga wika"},
"tutorialDetailStandards":function(d){return "Mga Standard"},
"tutorialDetailDisabled":function(d){return "Ang tutorial na ito ay panandaliang hindi available."},
"headingTutorialsYourLanguage":function(d){return "Mga aktibidad sa iyong wika"},
"showAllTutorialsButton":function(d){return "Ipakita ang mga aktibidad para sa maraming mga wika"},
"hideAllTutorialsButton":function(d){return "Itago ang mga aktibidad para sa maraming mga wika"},
"noTutorialsYourLanguage":function(d){return "Walang mga suportadong aktibidad para sa iyong wika. Subukan ang mga aktibidad sa ibang wika sa pagpindot sa button sa ibaba."},
"bottomGuidelinesLink":function(d){return "Mag-click dito para tingnan ang aming pamantayan at mga patnubay sa pagsusumite para sa Hour of Code tutorials."},
"bottomSpecialNeedsLink":function(d){return "Mag-click dito para sa karagdagang impormasiyon sa pagsuporta sa mga mag-aaral na may mga espesyal na pangangailangan."}};