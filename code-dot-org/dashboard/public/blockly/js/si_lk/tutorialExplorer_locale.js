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
"startButton":function(d){return "ආරම්භ කරන්න"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "සියල්ල"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "ශ්‍රේණි"},
"filterGradesAll":function(d){return "සියලුම වයස්"},
"filterGradesPre":function(d){return "Pre-reader"},
"filterGrades25":function(d){return "2 සිට 5 ශ්‍රේණිය දක්වා"},
"filterGrades68":function(d){return "6 සිට 8 ශ්‍රේණිය දක්වා"},
"filterGrades9":function(d){return "9 ශ්‍රේණියේ සිට ඉහලට"},
"filterStudentExperience":function(d){return "ශිෂ්‍ය අත්දැකීම්"},
"filterStudentExperienceBeginner":function(d){return "නවකයා"},
"filterStudentExperienceComfortable":function(d){return "පහසු"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Classroom technology"},
"filterPlatformComputers":function(d){return "පරිගණක"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "අන්තර්ජාල පහසුකම් නොමැති"},
"filterPlatformNoComputers":function(d){return "පරිගණක හෝ උපාංග නොමැති"},
"filterTopics":function(d){return "මාතෘකා"},
"filterTopicsScience":function(d){return "විද්‍යාව"},
"filterTopicsMath":function(d){return "ගණිත"},
"filterTopicsHistory":function(d){return "සමාජ අධ්‍යනය"},
"filterTopicsLa":function(d){return "භාෂා අධ්‍යනය"},
"filterTopicsArt":function(d){return "කලා, ජනමාධ්‍ය, සංගීතය"},
"filterTopicsCsOnly":function(d){return "පරිගණක විද්‍යාව පමණි"},
"filterActivityType":function(d){return "ක්‍රියාකාරකම් වර්ගය"},
"filterActivityTypeOnlineTutorial":function(d){return "ස්ව-මෙහෙයුම් පාඩම"},
"filterActivityTypeLessonPlan":function(d){return "පාඩම් සැලැස්ම"},
"filterLength":function(d){return "කාලය"},
"filterLength1Hour":function(d){return "පැය 1යි"},
"filterLength1HourFollow":function(d){return "පැයක් සහ ඒ ආශ්‍රිතව තවදුරටත්"},
"filterLengthFewHours":function(d){return "පැය කිහිපයක්"},
"filterProgrammingLanguage":function(d){return "භාෂාව"},
"filterProgrammingLanguageBlocks":function(d){return "ආකෘති"},
"filterProgrammingLanguageTyping":function(d){return "ටයිප් කිරීම"},
"filterProgrammingLanguageOther":function(d){return "වෙනත්"},
"filterActivityTypeRobotics":function(d){return "රොබෝ විද්‍යාව"},
"backButtonBack":function(d){return "නැවතත් සියලු ක්‍රියාකාරකම් වෙත"},
"filterHeaderShowFilters":function(d){return "Filters"},
"filterHeaderHideFilters":function(d){return "යොදන්න"},
"filterHeaderTutorialCountSingle":function(d){return "ප්‍රතිඑලය"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" ප්‍රතිඑල"},
"roboticsButtonText":function(d){return "රොබෝ තාක්ෂණය පිළිබඳ ක්‍රියාකාරකම්"},
"roboticsText":function(d){return "Got robots? Use these activities and make a tangible Hour of Code for students of any age!"},
"tutorialSetNoTutorials":function(d){return "ඔබේ සෙවුම සඳහා ප්‍රතිඑල කිසිවක් නොමැත.\nක්‍රියාකාරකම් නැරඹීම සඳහා පෙරහන් කිහිපයක් ඉවත් කරන්න."},
"tutorialDetailsTeacherNotes":function(d){return "ගුරු සටහන්"},
"tutorialDetailsShortLink":function(d){return "කෙටි සබැඳිය"},
"tutorialDetailInternationalLanguages":function(d){return "භාෂා"},
"tutorialDetailStandards":function(d){return "සම්මතයන්"},
"tutorialDetailDisabled":function(d){return "මෙම පාඩම තාවකාලිකව ලබාගත නොහැක."},
"headingTutorialsYourLanguage":function(d){return "ඔබේ භාෂාවෙන් ඇති ක්‍රියාකාරකම්"},
"showAllTutorialsButton":function(d){return "භාෂා රැසක් සඳහා ක්‍රියාකාරකම් පෙන්වන්න"},
"hideAllTutorialsButton":function(d){return "භාෂා රැසක් සඳහා ක්‍රියාකාරකම් සඟවන්න"},
"noTutorialsYourLanguage":function(d){return "ඔබේ භාෂාවෙන් ලබාගත හැකි ක්‍රියාකාරකම් කිසිවක් නොමැත. පහත button එක ඔස්සේ වෙනත් භාෂා වලින් ඇති ක්‍රියාකාරකම් උත්සහ කර බලන්න."},
"bottomGuidelinesLink":function(d){return "Click here to see our criteria and submission guidelines for Hour of Code tutorials."},
"bottomSpecialNeedsLink":function(d){return "Click here for more information on supporting special needs students."}};